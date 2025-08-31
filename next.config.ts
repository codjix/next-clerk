import path from "node:path";
import { NextConfig } from "next";

const mantine = path.join(process.cwd(), "assets/styles/_mantine");

const nextConfig: NextConfig = {
  output: process.env.BUNDLE ? "standalone" : undefined,
  transpilePackages: ["@iconify-json/tabler"],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    serverSourceMaps: false,
  },
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: `@use "${mantine.replace(/\\/g, "/")}" as mantine;`,
  },
};

export default nextConfig;
