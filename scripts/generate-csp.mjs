// postbuild: scans the static export for inline <script> tags, hashes each
// one per-route, and writes vercel.json with a CSP scoped to exactly the
// scripts each route actually contains. static export means there's no
// per-request nonce available (the HTML is generated once at build time
// and served identically to everyone), so a nonce baked into that HTML
// wouldn't be a nonce at all - hashing the known-good script bodies is the
// correct static-export equivalent: any injected script won't match a hash
// and won't execute. per-route (instead of one global union of every page's
// hashes) keeps each response's header small and each page's allow-list
// limited to scripts that page actually ships.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");
const SCRIPT_RE = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

async function collectHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectHtmlFiles(full);
      return entry.name.endsWith(".html") ? [full] : [];
    }),
  );
  return files.flat();
}

function hashesFromHtml(html) {
  const hashes = new Set();
  for (const match of html.matchAll(SCRIPT_RE)) {
    const body = match[1];
    if (!body || !body.trim()) continue; // inline scripts with no body need no hash
    const hash = createHash("sha256").update(body, "utf8").digest("base64");
    hashes.add(`'sha256-${hash}'`);
  }
  return hashes;
}

// out/index.html -> "/", out/work/edulink/index.html -> "/work/edulink/"
// (trailing slash to match next.config's trailingSlash:true, which is what
// the site's own canonical URLs and internal links actually request).
// out/404.html -> dropped (Vercel serves that via its own error routing,
// not a matchable request path).
function routeForFile(file) {
  const rel = path.relative(OUT_DIR, file).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return "/" + rel.slice(0, -"index.html".length);
  return null;
}

const htmlFiles = await collectHtmlFiles(OUT_DIR);
const headerRules = [];
for (const file of htmlFiles) {
  const route = routeForFile(file);
  if (!route) continue;
  const html = await readFile(file, "utf8");
  const hashes = hashesFromHtml(html);
  const scriptSrc = ["'self'", ...hashes].join(" ");
  const csp = [
    `default-src 'self'`,
    `script-src ${scriptSrc}`,
    `style-src 'self' 'unsafe-inline'`, // tint colors etc. are set via inline style= attrs at runtime; can't be hash-pinned
    `img-src 'self' data:`,
    `font-src 'self'`,
    `connect-src 'self'`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `object-src 'none'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  headerRules.push({
    source: route,
    headers: [{ key: "Content-Security-Policy", value: csp }, ...SECURITY_HEADERS],
  });
}

// catch-all for any path not covered above (e.g. a 404) - security headers
// without a script-src allow-list, since we don't know what that page ships.
headerRules.push({
  source: "/(.*)",
  headers: [
    {
      key: "Content-Security-Policy",
      value: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests`,
    },
    ...SECURITY_HEADERS,
  ],
});

const vercelConfig = { headers: headerRules };

await writeFile(
  path.join(process.cwd(), "vercel.json"),
  JSON.stringify(vercelConfig, null, 2) + "\n",
);

console.log(
  `[generate-csp] wrote vercel.json with ${headerRules.length} route rule(s) from ${htmlFiles.length} page(s).`,
);
