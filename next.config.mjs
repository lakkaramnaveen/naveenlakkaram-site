/** @type {import('next').NextConfig} */
const nextConfig = {
  // static export - portable to any static host (Cloudflare Pages, GitHub
  // Pages, Netlify). next/image can't optimize under this mode, so images
  // are served as-is.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
