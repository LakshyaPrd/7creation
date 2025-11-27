import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds - warnings won't block deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
