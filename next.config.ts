import type { NextConfig } from "next";

const nextConfig = {
  output: "standalone",
  experimental: {
    inlineCss: true,
    reactCompiler: true,
  },
} satisfies NextConfig;

export default nextConfig;
