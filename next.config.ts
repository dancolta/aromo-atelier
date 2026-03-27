import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [
    {
      source: "/products/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/logo.png",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/hero-cover.png",
      headers: [
        { key: "Cache-Control", value: "public, max-age=2592000" },
      ],
    },
    {
      source: "/manifesto-bg.jpg",
      headers: [
        { key: "Cache-Control", value: "public, max-age=2592000" },
      ],
    },
    {
      source: "/favicon.ico",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig;
