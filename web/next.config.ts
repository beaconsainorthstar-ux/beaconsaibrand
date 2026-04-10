import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beacons.ai",
        pathname: "/_framerusercontent/**",
      },
    ],
  },
};

export default nextConfig;
