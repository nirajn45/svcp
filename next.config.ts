import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */

  // ── Turbopack root ───────────────────────────────────────────────────────────
  // The parent directory (pharmacy/) contains a stray package-lock.json which
  // causes Turbopack to infer the WRONG workspace root. This line pins it to the
  // actual project root so all routes under src/app are discovered correctly.
  turbopack: {
    root: path.resolve(__dirname),
  },

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
