## Sue Wheeler Website — Continuation Prompt

**Status: Content complete. Pre-CLI work in progress.**

First: Read `PROJECT-LOG.md` at `/Volumes/192.168.50.124/CHAOS-Clients/SueWheeler/Website/suewheeler-web/`

---

## ⚠️ Architecture Decision (Locked 2026-03-17)

**Two separate products. Two separate repos. No mixing.**

| Product | Platform | Repo |
|---|---|---|
| **suewheelerstl.com** (marketing site) | Standard Next.js + Vercel — NO b2b-boilerplate | `suewheeler-web/` |
| **Bidding App + Client Portal** | Fork of `b2b-boilerplate-b2b` | Separate repo (not yet forked) |

The b2b-boilerplate is for the operational platform (bidding wizard + client portal). The marketing site is plain Next.js — no auth, no org model, no Inngest, no S3.

**"Client" is always explicit** — means Sue's actual clients (homeowners, commercial/institutional). Never ambiguous.
**Pricing is back-of-house only** — never on the public website.

---

## Content Status (Complete)

- **55/60 pages written** — all core, residential, commercial, institutional, preservation, thematic, neighborhood, utility pages
- **15/15 blog outlines written** — all Priority 1 posts (A1–F3)
- **4 optional sub-portfolio pages** deferred until real photos exist
- All content in `content/pages/` and `content/blog/outlines/`

---

## Pre-CLI Checklist (Marketing Site)

### Design (Locked)
- **Option 2 selected ✅** — Playfair Display + Inter, warm neutral #EBE6DE, wood accent #A65D37
- **Staircase cost: Version B (no pricing) ✅** — go-live choice confirmed
- Design tokens ready to extract from `/Website/designs/active/Design System/`

### Blocking — None. CLI build can begin.

### Client Review Items (still needed before launch)
- [ ] **Two full independent staircase hub page mockups** built for Sue to review as a client
  - Version A: complete page with national price range in cost section
  - Version B: complete page with variables-only cost section (no numbers)
  - A/B section-only mockup already exists: `docs/staircase-cost-ab-mockup.html`
  - **Version B is the go-live choice** — but Sue needs to see full pages before confirming
- [ ] Real client testimonials to replace all placeholders before launch

### Infra — Ready
- **Repo:** `https://github.com/CHAOSAiGENT/suewheelerstl`
- **Deploy:** Connect repo to Vercel → push to main = auto-deploy. That's it.
- Google Fonts: decide self-host vs CDN during build (minor)

### Post-Launch (not blocking)
- GBP + BBB review links → reviews.md
- Real client testimonials → replace all placeholders
- Sheldon $11M figure → confirm with Peter/Sue before e1 blog post goes live
- Old subdomain (site.suewheelerstl.com) → irrelevant, switching hosts

---

## CLI Build Plan (when checklist complete)

1. New standard Next.js project (no boilerplate) — or scaffold in `suewheeler-web/src/`
2. Extract design tokens from winning Variant option → `tailwind.config.ts`
3. Build shared components: Header, Footer, CTA Block, Trust Bar, FAQ Accordion, Service Card, Testimonial Card, Before/After Slider, Process Step
4. Wire all 55+ content pages from `content/pages/*.md` into route components under `(website-layout)` route group
5. Wire 15 blog outlines into `content/blog/` as MDX
6. Contact form → SES/Resend (or serverless Neon table)
7. SEO: `src/app/sitemap.ts`, `src/app/robots.ts`, OG images via `@vercel/og`, per-page metadata
8. Deploy to Vercel + custom domain

**Key reference files:**
- `/Research/T2/Asset-4-Optimal-Sitemap.md` — canonical URL structure + sitemap
- `/Research/Wood Refinishing by Sue Wheeler — Complete Content Playbook.md` — brand voice + copy
- `/Website/designs/Option_[1|2]/Design System/` — design tokens to extract
- `content/pages/*.md` — all page content
- `content/blog/outlines/*.md` — all blog outlines

---

## Open Flags (carry to launch)
- ⚠️ Staircase cost in `hub-staircases.md`: Version A (with national range) is currently in file — switch to Version B before publish, or publish Version A if Sue confirms STL numbers
- All testimonial placeholders need real verbatim client quotes
- GBP and BBB review links → `reviews.md`
- `f2-staircase-refinishing-cost.md` blog outline: only publish if Version A is chosen

---

## Bidding App + Client Portal (Separate Track)

When ready to start this product:
- Fork `/Website/tooling/b2b-boilerplate-b2b/`
- Strip: waitlist, roadmap, coupons, fumadocs blog/docs, demo content
- Keep: org model, auth, S3, Inngest, Sentry, React Email, Shadcn
- Add: bidding domain schema, PWA manifest, Sue Blue theme, Capacitor escape hatch (later)
- Reference: `App/Functional_Brief.md`, `App/Design_Elements_Brief.md`, `Bids/Bidding_Framework_v2.xlsx`
- Client portal: homeowners/commercial clients log in to view estimates, approve/reject, see job status, receive invoices
