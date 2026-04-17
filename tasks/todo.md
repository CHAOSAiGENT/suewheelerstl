# suewheelerstl.com — Build Plan

_Last updated: 2026-03-17_

## PHASE 1 — Project Scaffolding

- [ ] 1.1 Create package.json (Next.js 15, TypeScript, Tailwind v4, Shadcn)
- [ ] 1.2 Create next.config.ts
- [ ] 1.3 Create tsconfig.json
- [ ] 1.4 Create tailwind.config.ts with all design tokens
- [ ] 1.5 Create postcss.config.mjs
- [ ] 1.6 Create src/app/ directory structure (layout, globals.css)

## PHASE 2 — Shared Components

- [ ] 2.1 SiteHeader (sticky, Playfair italic wordmark, nav, phone, CTA)
- [ ] 2.2 SiteFooter (dark bg #2A2421, serif phone, address, credentials, nav)
- [ ] 2.3 CTABlock ("Free estimate..." + button + phone)
- [ ] 2.4 TrustBar (5 credential badges)
- [ ] 2.5 ServiceCard (italic serif title, description, link arrow)
- [ ] 2.6 TestimonialCard (italic quote, name/neighborhood)
- [ ] 2.7 FAQAccordion (expandable Q&A + FAQ JSON-LD)
- [ ] 2.8 PillBadge (uppercase label, wood or blue variant)
- [ ] 2.9 ProcessStep (numbered circle + title + description)

## PHASE 3 — Core Pages (8 pages)

- [ ] 3.1 / — homepage
- [ ] 3.2 /about
- [ ] 3.3 /contact (with Resend form)
- [ ] 3.4 /faq
- [ ] 3.5 /portfolio
- [ ] 3.6 /reviews
- [ ] 3.7 /privacy-policy
- [ ] 3.8 /sitemap (HTML sitemap page)

## PHASE 4 — Residential Hub + Spoke Pages (18 pages)

- [ ] 4.1 /kitchen-cabinet-refinishing + 3 spokes
- [ ] 4.2 /door-refinishing + 4 spokes
- [ ] 4.3 /staircase-refinishing + 4 spokes (Version B cost section)
- [ ] 4.4 /built-ins-and-millwork-refinishing + 2 spokes

## PHASE 5 — Commercial + Institutional + Preservation (10 pages)

- [ ] 5.1 /commercial-and-hospitality-refinishing + 3 spokes
- [ ] 5.2 /institutional-refinishing + 3 spokes
- [ ] 5.3 /historic-preservation + 3 spokes

## PHASE 6 — Neighborhood Pages (15 pages)

- [ ] 6.1 /neighborhoods/central-west-end through /neighborhoods/ballwin

## PHASE 7 — SEO Infrastructure

- [ ] 7.1 src/app/sitemap.ts (all 55+ URLs)
- [ ] 7.2 src/app/robots.ts
- [ ] 7.3 Per-page metadata (title, description, OG) on all pages
- [ ] 7.4 OG image edge function (@vercel/og)
- [ ] 7.5 FAQ JSON-LD schema on /faq and all hub pages
- [ ] 7.6 LocalBusiness JSON-LD schema on homepage

## PHASE 8 — Contact Form

- [ ] 8.1 Resend API route (src/app/api/contact/route.ts)
- [ ] 8.2 Contact form component with validation

## PHASE 9 — Final Checks

- [ ] 9.1 pnpm build passes with zero errors
- [ ] 9.2 All 55 routes resolve correctly
- [ ] 9.3 Mobile responsive check
- [ ] 9.4 Push to github.com/CHAOSAiGENT/suewheelerstl

---

---

## Lessons → tasks/lessons.md
