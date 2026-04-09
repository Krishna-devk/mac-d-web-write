import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      root: '.',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mcdindia.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
