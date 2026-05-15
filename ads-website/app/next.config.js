const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Static export requires unoptimized: true — use Cloudflare Image Resizing on the CDN side
  images: {
    unoptimized: true,
    // Enable image optimization for better LCP
    formats: ['image/webp', 'image/avif'],
  },
  // Compress output
  compress: true,
  // Minify JavaScript bundle
  swcMinify: true,
  // Reduce bundle overhead - dynamic imports for heavy components
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-toast',
      'framer-motion',
    ],
    // Enable optimized font loading
    optimizeFonts: true,
  },
  // Headers for performance
  async headers() {
    return [
      {
        source: '/public/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
