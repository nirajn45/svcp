import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sm7p82l93d.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "gvu57hqxi3.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "bmnmsbiymz.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "*.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.getmyuni.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "www.sviet.ac.in",
      },
      {
        protocol: "https",
        hostname: "sviet.ac.in",
      },
      {
        protocol: "https",
        hostname: "images.shiksha.com",
      },
      {
        protocol: "https",
        hostname: "urbanmelange.com",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
    ],
  },
};

export default nextConfig;
