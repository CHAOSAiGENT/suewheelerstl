import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zemmpcilhxobljzdhnig.supabase.co",
      },
    ],
  },
  serverExternalPackages: ["resend", "@react-email/render", "html-to-text"],
};

export default nextConfig;
