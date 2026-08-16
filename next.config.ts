import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unique-ws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uniquee-ws.com',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/:slug((?!blog|api|_next|favicon.ico).*)',
        destination: '/blog/:slug',
        permanent: 301,
      },
    ];
  },
};

export default nextConfig;