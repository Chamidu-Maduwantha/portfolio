import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath:isProd? "/portfolio": "",
  output:"export",
  
  distDir: "dist",
  

};

export default nextConfig;
