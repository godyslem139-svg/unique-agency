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
  // إزالة أسطر console.log في الإنتاج لتقليل حجم JS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // تحسين جلب واستيراد أجزاء المكتبات الخارجية
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;