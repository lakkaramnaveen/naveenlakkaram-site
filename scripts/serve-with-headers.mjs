// dev-only smoke-test server: serves out/ with the exact per-route headers
// from vercel.json applied, so CSP violations can be caught locally before
// deploying. not part of the build; run manually.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");
const vercelConfig = JSON.parse(
  await readFile(path.join(process.cwd(), "vercel.json"), "utf8"),
);

function headersForPath(urlPath) {
  const exact = vercelConfig.headers.find((r) => r.source === urlPath);
  if (exact) return exact.headers;
  const fallback = vercelConfig.headers.find((r) => r.source === "/(.*)");
  return fallback ? fallback.headers : [];
}

const MIME = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  for (const h of headersForPath(urlPath)) res.setHeader(h.key, h.value);
  let filePath = path.join(OUT_DIR, urlPath);
  if (urlPath.endsWith("/")) filePath = path.join(filePath, "index.html");
  if (!existsSync(filePath) && existsSync(filePath + ".html")) filePath += ".html";
  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = path.join(OUT_DIR, "404.html");
    res.statusCode = 404;
  }
  res.setHeader("Content-Type", MIME[path.extname(filePath)] ?? "application/octet-stream");
  createReadStream(filePath).pipe(res);
}).listen(4173, () => console.log("serving out/ with vercel.json headers on http://localhost:4173"));
