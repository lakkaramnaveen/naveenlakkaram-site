// postbuild: writes vercel.json with security headers, including a CSP.
//
// script-src previously hash-allowlisted each page's inline scripts,
// computed from the LOCAL `next build` output. That broke production:
// Next embeds a fresh random build id into the RSC hydration payload
// (the inline `self.__next_f.push(...)` scripts) on every `next build`
// invocation, and `vercel --prod` runs its own `next build` on Vercel's
// infrastructure rather than uploading this machine's build - so the
// deployed page's hydration scripts never matched the hashes computed
// here, got silently CSP-blocked, and hydration failed into a blank
// page with no console errors visible through this tooling. Verified by
// diffing sha256 hashes of the live-served scripts against vercel.json.
//
// A static export also has no per-request nonce to fall back on (the
// same HTML is served to everyone), so there's no cheap fix that keeps
// inline scripts hash/nonce-pinned here. script-src allows 'unsafe-inline'
// as a result - the same pragmatic tradeoff already made for style-src
// (inline style= attrs are equally unpinnable). The other directives
// (frame-ancestors, object-src, base-uri, form-action) plus the
// non-CSP headers below still meaningfully reduce the attack surface.
import { writeFile } from "node:fs/promises";
import path from "node:path";

const CSP = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data:`,
  `font-src 'self'`,
  `connect-src 'self'`,
  `frame-ancestors 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `object-src 'none'`,
  `upgrade-insecure-requests`,
].join("; ");

const vercelConfig = {
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "Content-Security-Policy", value: CSP },
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
      ],
    },
  ],
};

await writeFile(
  path.join(process.cwd(), "vercel.json"),
  JSON.stringify(vercelConfig, null, 2) + "\n",
);

console.log("[generate-csp] wrote vercel.json.");
