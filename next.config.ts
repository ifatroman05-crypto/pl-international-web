import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/pl-international-web",
  assetPrefix: "/pl-international-web/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
