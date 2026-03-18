# Claude Code — suewheelerstl.com Build Kickoff

## Operating Mode
Boris Cherny style. Plan first, then push through until fully done.
Use `--dangerously-skip-permissions` mode.
Track progress in `tasks/todo.md`. Capture lessons in `tasks/lessons.md`.

## Your First Actions (in order)
1. Read `CLAUDE.md` at `/Volumes/192.168.50.124/CHAOS-Clients/SueWheeler/`
2. Read `CONTINUATION-PROMPT.md` in this directory
3. Write `tasks/todo.md` with the full build plan before touching any code
4. Begin execution — push through until done

---

## The Project

**suewheelerstl.com** — marketing website for Wood Refinishing by Sue Wheeler, St. Louis MO.
36-year business, EPA Certified, hand-strip method, $125/hr, free estimates.

## Repo
`https://github.com/CHAOSAiGENT/suewheelerstl`

## Stack (standard Next.js — NOT the b2b-boilerplate)
- Next.js (App Router) + TypeScript
- Tailwind v4
- Shadcn/Radix UI
- Vercel (auto-deploy on push to main)
- Contact form: Resend or SES for email only — no database needed at launch
- No auth, no org model, no Inngest, no S3

---

## Design System — Option 2 (Locked)

Extract tokens from:
`/Volumes/192.168.50.124/CHAOS-Clients/SueWheeler/Website/designs/active/Design System/`

| Token | Value |
|---|---|
| `--bg-base` | `#EBE6DE` |
| `--bg-card` | `#F8F6F1` |
| `--text-main` | `#2A2421` |
| `--text-muted` | `#6B5E55` |
| `--accent-blue` | `#11B2E8` (Sue Blue) |
| `--accent-wood` | `#A65D37` |
| Font serif | Playfair Display (400, 600, italic) |
| Font sans | Inter (400, 500, 600) |
| Border radius | 2px (sharp, not rounded) |
| Shadow | `0 10px 30px -10px rgba(42,36,33,0.08)` |

Reference full Option 2 HTML pages at:
`/Volumes/192.168.50.124/CHAOS-Clients/SueWheeler/Website/designs/active/`

---

## Content

All content is pre-written. Wire it in — do not rewrite.

**Pages:** `/Volumes/192.168.50.124/CHAOS-Clients/SueWheeler/Website/suewheeler-web/content/pages/`
**Blog outlines:** `/Volumes/192.168.50.124/CHAOS-Clients/SueWheeler/Website/suewheeler-web/content/blog/outlines/`

### Route Map (Next.js App Router paths → content files)

| Route | Content File |
|---|---|
| `/` | `homepage.md` |
| `/about` | `about.md` |
| `/contact` | `contact.md` |
| `/faq` | `faq.md` |
| `/kitchen-cabinet-refinishing` | `hub-kitchen-cabinets.md` |
| `/kitchen-cabinet-refinishing/painted-cabinets` | `kitchen-painted-cabinets.md` |
| `/kitchen-cabinet-refinishing/stained-cabinets` | `kitchen-stained-cabinets.md` |
| `/kitchen-cabinet-refinishing/cabinet-color-change` | `kitchen-color-change.md` |
| `/door-refinishing` | `hub-doors.md` |
| `/door-refinishing/front-door-refinishing` | `door-front.md` |
| `/door-refinishing/interior-door-refinishing` | `door-interior.md` |
| `/door-refinishing/french-door-refinishing` | `door-french.md` |
| `/door-refinishing/pocket-door-refinishing` | `door-pocket.md` |
| `/staircase-refinishing` | `hub-staircases.md` (use Version B cost section from `hub-staircases-cost-b.md`) |
| `/staircase-refinishing/stair-treads-and-risers` | `stair-treads-risers.md` |
| `/staircase-refinishing/spindles-and-balusters` | `stair-spindles.md` |
| `/staircase-refinishing/newel-posts` | `stair-newel.md` |
| `/staircase-refinishing/stair-railings` | `stair-railings.md` |
| `/built-ins-and-millwork-refinishing` | `hub-builtins.md` |
| `/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases` | `builtin-hutches.md` |
| `/built-ins-and-millwork-refinishing/room-millwork` | `builtin-room-millwork.md` |
| `/commercial-and-hospitality-refinishing` | `hub-commercial.md` |
| `/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing` | `commercial-restaurant-bar.md` |
| `/commercial-and-hospitality-refinishing/hotel-and-venue-woodwork` | `commercial-hotel-venue.md` |
| `/commercial-and-hospitality-refinishing/commercial-maintenance-contracts` | `commercial-maintenance.md` |
| `/institutional-refinishing` | `hub-institutional.md` |
| `/institutional-refinishing/historic-venue-restoration` | `institutional-historic-venue.md` |
| `/institutional-refinishing/church-and-religious-facility-woodwork` | `institutional-church.md` |
| `/institutional-refinishing/university-and-public-building-woodwork` | `institutional-university.md` |
| `/historic-preservation` | `hub-preservation.md` |
| `/historic-preservation/historic-tax-credits` | `preservation-tax-credits.md` |
| `/historic-preservation/secretary-of-interior-standards` | `preservation-nps-standards.md` |
| `/historic-preservation/st-louis-historic-districts` | `preservation-stl-districts.md` |
| `/portfolio` | `portfolio.md` |
| `/reviews` | `reviews.md` |
| `/neighborhoods/central-west-end` | `nbhd-central-west-end.md` |
| `/neighborhoods/lafayette-square` | `nbhd-lafayette-square.md` |
| `/neighborhoods/compton-heights` | `nbhd-compton-heights.md` |
| `/neighborhoods/tower-grove` | `nbhd-tower-grove.md` |
| `/neighborhoods/shaw` | `nbhd-shaw.md` |
| `/neighborhoods/maplewood` | `nbhd-maplewood.md` |
| `/neighborhoods/clayton` | `nbhd-clayton.md` |
| `/neighborhoods/university-city` | `nbhd-university-city.md` |
| `/neighborhoods/webster-groves` | `nbhd-webster-groves.md` |
| `/neighborhoods/kirkwood` | `nbhd-kirkwood.md` |
| `/neighborhoods/frontenac` | `nbhd-frontenac.md` |
| `/neighborhoods/ladue` | `nbhd-ladue.md` |
| `/neighborhoods/town-and-country` | `nbhd-town-and-country.md` |
| `/neighborhoods/chesterfield` | `nbhd-chesterfield.md` |
| `/neighborhoods/ballwin` | `nbhd-ballwin.md` |
| `/privacy-policy` | `privacy-policy.md` |
| `/sitemap` | `sitemap.md` |

---

## Shared Components to Build

Build once, use everywhere. Reference Option 2 HTML pages for visual patterns.

- **SiteHeader** — sticky, Playfair italic wordmark, nav links, phone number, "Free Estimate" button
- **SiteFooter** — dark bg (#2A2421), large serif phone number, address, credentials, nav links
- **CTABlock** — "Free estimate. No obligation. Sue answers every call personally." + button + phone
- **TrustBar** — 5 credential badges: 36 Years, EPA Certified, BBB A+, Hand-Strip Method, Free Estimates
- **ServiceCard** — component title (italic serif), description, link arrow
- **TestimonialCard** — italic serif quote, name/neighborhood attribution
- **FAQAccordion** — expandable Q&A, `<details>`/`<summary>` pattern, FAQ schema JSON-LD
- **PillBadge** — small uppercase label, wood accent or blue border variants
- **ProcessStep** — numbered circle + step title (italic serif) + description, vertical connector line

---

## Staircase Cost Section — Version B (no pricing)

On `/staircase-refinishing`, use the Version B cost section.
Source: `hub-staircases-cost-b.md` — variables list, no dollar figures, drives to free estimate call.
Do NOT use the Version A content (national price range).

---

## SEO Requirements

- `src/app/sitemap.ts` — generate all 55+ URLs programmatically
- `src/app/robots.ts` — allow all, disallow nothing at launch
- Per-page metadata: title, description, OG tags — sourced from each content file's SEO fields
- OG images: `@vercel/og` edge function, Playfair Display heading + Sue Blue accent on warm neutral bg
- FAQ pages: JSON-LD schema (`FAQPage` type) on `/faq` and all hub pages with FAQ blocks
- LocalBusiness schema on homepage: name, address, phone, service area, credentials
- No `noindex` on any page

---

## Contact Form

Simple — name, phone/email, service type (dropdown), message, submit.
On submit: send email via Resend (preferred) or AWS SES.
No database at launch. Store nothing — just send.
Sue's email: route to her actual email address (get from `CLAUDE.md` business info or ask Peter).

---

## Hard Rules

- **No pricing anywhere** — not on any page, not in any component. Back-of-house only.
- **No auth, no login, no user accounts** — this is a pure marketing site
- **Polyurethane only** — if finish type is ever mentioned in copy, it's oil-based or water-based polyurethane only
- **"Client" is explicit** — always means Sue's actual clients (homeowners, commercial operators). Never a generic term.
- Content files are the source of truth — wire them in as-is, do not rewrite copy

---

## Definition of Done

- [ ] All 55 content pages rendering with correct copy and Option 2 styling
- [ ] Shared components consistent across all pages
- [ ] Contact form functional (email sends)
- [ ] Sitemap.ts generating all URLs
- [ ] Robots.ts in place
- [ ] Per-page metadata complete
- [ ] OG images generating
- [ ] FAQ schema on relevant pages
- [ ] LocalBusiness schema on homepage
- [ ] Pushed to `https://github.com/CHAOSAiGENT/suewheelerstl`
- [ ] Vercel connected to repo, preview URL live
- [ ] `pnpm build` passes with no errors
