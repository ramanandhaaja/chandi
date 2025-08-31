import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'directus.codefoundry.online', pathname: '/**' },
      // Google Drive / Google Photos hosting domains
      { protocol: 'https', hostname: 'drive.google.com', pathname: '/**' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'googleusercontent.com', pathname: '/**' },
    ],
  },
  // Ignore TypeScript errors during build for Vercel deployment
  typescript: {
    // !! WARN !! 
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // Ignore ESLint errors during build for Vercel deployment
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Server external packages setting (moved from experimental.serverComponentsExternalPackages)
  serverExternalPackages: ['@mux/mux-node'],
};

export default nextConfig;
