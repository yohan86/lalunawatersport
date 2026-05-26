import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: 'export', // Tells Next.js to generate a static HTML/CSS build
  images: {
    unoptimized: true, // Required for static exports since Next.js image optimization needs a live Node server
  },
  // Replace 'your-repo-name' with your exact GitHub repository name
  basePath: process.env.NODE_ENV === 'production' ? '/lalunawatersport' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lalunawatersport/' : '',
};

export default nextConfig;
