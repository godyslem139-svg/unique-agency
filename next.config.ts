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
        // استثناء صفحات الموقع الرئيسية والخدمات والدول
        source: '/:slug((?!blog|api|_next|favicon.ico|services|contact|about|portfolio|wizard|WebsiteDesignCompany.*).*)',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;