import type { NextConfig } from "next";

/**
 * Next.js Configuration for Legends Road Rally Website
 *
 * This configuration optimizes the website for maximum performance with:
 * - CSS and JavaScript minification
 * - Image optimization
 * - Bundle analysis and optimization
 * - Compression and caching
 * - Performance monitoring
 * Target: Sub-3-second page load times
 */

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    // Enable optimized package imports for smaller bundles
    optimizePackageImports: ["lucide-react", "aos"],
  },

  // Turbopack configuration (moved from experimental)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // Server external packages (moved from experimental)
  serverExternalPackages: [],

  // Compiler optimizations
  compiler: {
    // Remove console.log statements in production
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Image optimization settings
  images: {
    // Enable modern image formats (WebP, AVIF)
    formats: ["image/webp", "image/avif"],

    // Optimize image loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Enable image optimization
    minimumCacheTTL: 60,

    // Configure domains for external images (if needed)
    domains: [],

    // Enable placeholder blur for better UX
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production-only optimizations
    if (!dev && !isServer) {
      // Enable tree shaking for better bundle size
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };

      // Optimize chunks for better caching
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          common: {
            name: "common",
            minChunks: 2,
            chunks: "all",
            enforce: true,
          },
        },
      };
    }

    return config;
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache images for 1 month
        source: "/(.*\\.(?:jpg|jpeg|png|gif|webp|avif|svg|ico))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, must-revalidate",
          },
        ],
      },
      {
        // Cache fonts for 1 year
        source: "/(.*\\.(?:woff|woff2|eot|ttf|otf))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Enable compression
  compress: true,

  // Enable powered by header removal for security
  poweredByHeader: false,

  // Optimize bundle analyzer (only in development)
  ...(process.env.ANALYZE === "true" && {
    webpack: (config: any) => {
      config.plugins.push(
        new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)({
          analyzerMode: "server",
          openAnalyzer: true,
        })
      );
      return config;
    },
  }),

  // SWC minification is enabled by default in Next.js 15+

  // Output configuration for better performance
  output: "standalone",

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Enable ESLint during builds
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Enable TypeScript checking during builds
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
