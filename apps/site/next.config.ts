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
          {
            // No page here is ever legitimately framed. The admin CRM and the
            // customer portal both act on a single click — status changes,
            // "accept bid" — which is exactly the shape clickjacking exploits.
            // DENY refuses framing outright, including same-origin.
            //
            // Deliberately NOT accompanied by a Content-Security-Policy: a CSP
            // for this site needs its own scripting/style inventory and its own
            // testing pass, and a half-written one either breaks the site or
            // lulls whoever reads it into thinking the work is done.
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // REPORT-ONLY. The browser evaluates this and reports violations to
            // the console; it blocks NOTHING. Shipping it enforcing without
            // knowing the origin inventory is how a CSP turns into blank pages
            // and dead interactivity on a live site.
            //
            // Origins below were inventoried from the source and the build
            // output, not guessed:
            //   maps.google.com / www.google.com  — the embed iframe on /contact
            //   maps.googleapis.com               — Places autocomplete in ContactForm
            //   api.qrserver.com                  — the Venmo QR on the customer portal
            //   *.supabase.co                     — photo storage + API
            //
            // HONEST LIMITATION: `script-src` carries 'unsafe-inline' because
            // Next.js hydration uses inline scripts. That means this policy does
            // NOT yet stop an injected inline script — which is the main thing a
            // CSP is for. What it does buy immediately is the origin allowlist
            // plus frame-ancestors / object-src / base-uri / form-action, which
            // are real and cost nothing. Getting actual XSS protection requires
            // nonces via middleware; that is a separate piece of work, and this
            // report is the input to it.
            //
            // The XSS surface is not hypothetical: the admin CRM renders
            // customer-submitted text, and /api/inbound ingests email bodies
            // from outside.
            //
            // TO ENFORCE: browse the public site and the admin CRM with the
            // console open, add any origin that reports, then rename this key to
            // "Content-Security-Policy". Do it AFTER the monorepo move, so a CSP
            // failure and a Root Directory failure cannot be confused.
            key: "Content-Security-Policy-Report-Only",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://maps.googleapis.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://api.qrserver.com https://*.supabase.co https://maps.gstatic.com https://maps.googleapis.com",
              "font-src 'self' data:",
              "connect-src 'self' https://*.supabase.co https://maps.googleapis.com",
              "frame-src https://maps.google.com https://www.google.com",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
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
        // This project's Supabase ref is `khioedholasaxemmtooz` (see
        // NEXT_PUBLIC_SUPABASE_URL, and the `db:types` script in package.json).
        // The allowlist named a different project's hostname entirely until
        // 2026-09-22 — harmless only because nothing uses `next/image` yet, and
        // guaranteed to break silently the first time a photo is rendered.
        protocol: "https",
        hostname: "khioedholasaxemmtooz.supabase.co",
      },
    ],
  },
  // `public/sue-admin-guide.html` was moved to `private/` so it is no longer
  // served unauthenticated; it is now streamed by the admin-gated route handler
  // at /admin/guide. Next only bundles files it can statically see being
  // imported, and a runtime `readFile` of a path outside the app tree is
  // invisible to that analysis — the read works locally and 404s on Vercel.
  // This entry puts the file into that route's build trace so it ships.
  outputFileTracingIncludes: {
    "/admin/guide": ["./private/sue-admin-guide.html"],
  },
  serverExternalPackages: ["resend", "@react-email/render", "html-to-text"],
};

export default nextConfig;
