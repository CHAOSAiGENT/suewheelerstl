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
      // Architectural woodwork — canonical URL is /built-ins-and-millwork-refinishing
      {
        source: "/architectural-woodwork-refinishing",
        destination: "/built-ins-and-millwork-refinishing",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Every route, including the customer portal.
        source: "/:path*",
        headers: [
          {
            // The customer portal lives at /my-request/<client_token> — the
            // bearer credential IS the URL. That page loads a Venmo QR image
            // from the third-party api.qrserver.com, and with no referrer
            // policy the browser hands the full portal URL, token included, to
            // that host in the Referer header on every render.
            //
            // strict-origin-when-cross-origin sends only the origin
            // (https://suewheelerstl.com) cross-origin, so the path — and the
            // token in it — never leaves. Same-origin navigation keeps the full
            // URL, so nothing internal changes.
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
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
