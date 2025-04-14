import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // explicitly declare support for AVIF
    remotePatterns: [],
  },
  /* config options here */
};

export default nextConfig;
