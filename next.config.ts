import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH="" for root, or "/openuc2-next" for sub-path deployment.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  output: "export",
  distDir: "openuc2-next",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;