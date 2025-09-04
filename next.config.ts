import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["m.media-amazon.com", "upload.wikimedia.org", "encrypted-tbn0.gstatic.com"],
    // 👈 allow this domain
  },
};

export default nextConfig;
