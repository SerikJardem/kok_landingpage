import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: pagesBasePath || undefined,
  allowedDevOrigins: ["127.0.0.1"],
  env: {
    NEXT_PUBLIC_PAGES_BASE_PATH: pagesBasePath,
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
