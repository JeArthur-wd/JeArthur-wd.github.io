import { fileURLToPath } from "node:url";

// Served from the root of jearthur-wd.github.io; set BASE_PATH only if hosted under a sub-path.
const basePath = process.env.BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // static site for GitHub Pages
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // for plain links to files in public/
  assetPrefix: basePath || undefined,
  // Lets a check build run alongside `next dev` without clobbering its .next folder.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Pin the workspace root; a stray lockfile in the home folder otherwise makes Next watch all of C:\.
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
};
export default nextConfig;
