/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from /<repo>, so we set a base path in CI.
// Locally this stays empty, so `npm run dev` serves from "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Static HTML export -> deployable to GitHub Pages (free, no server).
  output: "export",
  basePath: basePath || undefined,
  // GitHub Pages has no image-optimization server, so serve images as-is.
  images: { unoptimized: true },
  // Emit /shop/index.html etc. so static hosting resolves clean URLs.
  trailingSlash: true,
};

export default nextConfig;
