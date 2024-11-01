import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/', destination: '/homepage' },
      { source: '/about', destination: '/homepage/about' },
      { source: '/product', destination: '/homepage/product' },
      { source: '/gallery', destination: '/homepage/gallery' },
      { source: '/promotion', destination: '/homepage/promotion' },
      { source: '/contact', destination: '/homepage/contact' },
    ]
  },
  reactStrictMode: true,
};

export default nextConfig;
