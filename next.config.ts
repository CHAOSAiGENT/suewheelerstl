import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Commercial — eliminated from service offering
      {
        source: "/commercial-and-hospitality-refinishing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/commercial-and-hospitality-refinishing/:path*",
        destination: "/",
        permanent: true,
      },
      // Institutional — eliminated from service offering
      {
        source: "/institutional-refinishing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/institutional-refinishing/:path*",
        destination: "/",
        permanent: true,
      },
      // Historic sub-pages — archived (main hub stays)
      {
        source: "/historic-preservation/historic-tax-credits",
        destination: "/historic-preservation",
        permanent: true,
      },
      {
        source: "/historic-preservation/secretary-of-interior-standards",
        destination: "/historic-preservation",
        permanent: true,
      },
      {
        source: "/historic-preservation/st-louis-historic-districts",
        destination: "/historic-preservation",
        permanent: true,
      },
      // Out-of-area neighborhoods — not actively targeted
      { source: "/neighborhoods/ballwin", destination: "/", permanent: true },
      {
        source: "/neighborhoods/chesterfield",
        destination: "/",
        permanent: true,
      },
      { source: "/neighborhoods/frontenac", destination: "/", permanent: true },
      { source: "/neighborhoods/kirkwood", destination: "/", permanent: true },
      { source: "/neighborhoods/ladue", destination: "/", permanent: true },
      {
        source: "/neighborhoods/tower-grove",
        destination: "/",
        permanent: true,
      },
      {
        source: "/neighborhoods/town-and-country",
        destination: "/",
        permanent: true,
      },
      {
        source: "/neighborhoods/webster-groves",
        destination: "/",
        permanent: true,
      },
      // Architectural woodwork — canonical URL is /built-ins-and-millwork-refinishing
      {
        source: "/architectural-woodwork-refinishing",
        destination: "/built-ins-and-millwork-refinishing",
        permanent: true,
      },
    ];
  },
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
