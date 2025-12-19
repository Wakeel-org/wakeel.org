import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'wakeel.org'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression for better performance
  compress: true,
  // Generate ETags for better caching
  generateEtags: true,
  // Optimize for production
  productionBrowserSourceMaps: false,
  // SEO optimizations
  poweredByHeader: false,
  // Trailing slash for consistent URLs
  trailingSlash: false,
};

export default nextConfig;
