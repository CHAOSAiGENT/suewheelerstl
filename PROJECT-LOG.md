# Project Log: suewheeler-web Content & Pages
## Wood Refinishing by Sue Wheeler, LLC

**Format:** Reverse chronological. Most recent entry first.

---

## 2026-03-17 — Session 13: Architecture Decision + Context Updates

### Decision locked
- **Marketing site (`suewheelerstl.com`):** Standard Next.js on Vercel — NO b2b-boilerplate. No auth, no org model, no Inngest, no S3. Fast, SEO-first, zero SaaS complexity.
- **Bidding App + Client Portal:** Separate repo, separate Vercel project, forks `b2b-boilerplate-b2b`. All the SaaS complexity lives here — org model, auth, S3, Inngest, multi-tenant.
- "Client" is always explicit — refers to Sue's actual clients (homeowners, commercial/institutional). Never ambiguous.
- Pricing is back-of-house only. Never on the public marketing site.

### Staircase A/B
- `docs/staircase-cost-ab-mockup.html` built and reviewed (Session 12)
- **Version B selected** (no numbers, variables + free estimate CTA)
- Two full independent staircase hub page mockups (complete pages, Version A and Version B) to be built next for Sue (the client) to review

### Context files updated this session
- `CLAUDE.md` (project root) — full rewrite: architecture split, both products, pricing rule, "client" explicit rule
- `PROJECT-LOG.md` — this file
- `CONTINUATION-PROMPT.md` — updated to current state

### Pre-CLI checklist (marketing site)
- [ ] ~~Sue picks Option 1 or Option 2~~ → **Option 2 confirmed ✅**
- [x] Two full independent staircase hub page mockups built for Sue (client) review
  - `docs/staircase-version-a.html` — 270 lines, full page, Version A (with price range)
  - `docs/staircase-version-b.html` — 281 lines, full page, Version B (variables only) ← go-live
- [ ] Design tokens extracted from winning Variant option → tailwind.config.ts
- [ ] Staircase cost: Sue decides Version A or B
- [ ] Repo pushed to GitHub → connect to Vercel (push to main = auto-deploy, nothing else needed)
- [ ] Google Fonts: self-host vs CDN (decide during build, not blocking)

### Post-launch (not blocking)
- GBP + BBB review links → reviews.md
- Real client testimonials → replace all placeholders
- Sheldon $11M → confirm with Peter/Sue before e1 blog post goes live
- Old subdomain: irrelevant, switching hosts

### Status at end of session
- Content: 55/60 pages + 15/15 blog outlines — complete, unchanged
- Architecture: locked and documented in CLAUDE.md
- Next immediate task: two full staircase hub page mockups

---

## 2026-03-17 — Session 12: All 9 Remaining Blog Outlines Written

### Files written this session
- `content/blog/outlines/c2-commercial-maintenance-contracts.md`
- `content/blog/outlines/d1-historic-tax-credits-stl.md`
- `content/blog/outlines/d2-nps-standards-wood.md`
- `content/blog/outlines/d3-missouri-historic-tax-credit.md`
- `content/blog/outlines/d5-stl-historic-districts.md`
- `content/blog/outlines/e1-sheldon-concert-hall.md`
- `content/blog/outlines/e2-institutional-specialist.md`
- `content/blog/outlines/f2-staircase-refinishing-cost.md`
- `content/blog/outlines/f3-lead-paint-pre-1978.md`

### Status at end of session
- Blog outlines: **15/15 complete ✅**
- All 60 core pages: **55/60 written** (4 optional sub-portfolio pages remain)

### Open flags
- ⚠️ Staircase cost on `hub-staircases.md` AND `f2-staircase-refinishing-cost.md` — national range; confirm with Sue before publishing
- All testimonial placeholders need real client quotes before launch
- GBP and BBB review links needed on `reviews.md`
- Sheldon $11M figure: confirm with Peter/Sue before drafting full post

---

## 2026-03-17 — Session 11: 6 Blog Outlines Written

### Files written
- `content/blog/outlines/a1-hand-strip-vs-dip.md`
- `content/blog/outlines/a3-what-is-wood-refinishing.md`
- `content/blog/outlines/a5-how-long-does-refinishing-last.md`
- `content/blog/outlines/b1-central-west-end.md`
- `content/blog/outlines/b2-lafayette-square-pocket-doors.md`
- `content/blog/outlines/c1-restaurant-bar-top.md`

### Status: Blog outlines 6/15

---

## 2026-03-17 — Session 10: 4 Neighborhood Pages + Utility Pages

### Files written
- `pages/nbhd-ladue.md`, `pages/nbhd-town-and-country.md`, `pages/nbhd-chesterfield.md`, `pages/nbhd-ballwin.md`
- `pages/privacy-policy.md`, `pages/sitemap.md`

### Status: 55/60 pages written. Phase B complete.

---

## 2026-03-17 — Session 9: Portfolio Hub + Reviews

### Files written
- `pages/portfolio.md`, `pages/reviews.md`

### Status: 35/60 pages

---

## 2026-03-17 — Session 8: Historic Preservation Hub + 3 Spokes

### Files written
- `pages/preservation-tax-credits.md` (completed from stub)
- `pages/preservation-nps-standards.md`
- `pages/preservation-stl-districts.md`

### Status: 33/60 pages. See PROJECT-LOG-SESSION8.md for full detail.

---

## 2026-03-17 — Session 7: Institutional Hub + 3 Spokes
- `hub-institutional.md`, `institutional-historic-venue.md`, `institutional-church.md`, `institutional-university.md`
- Status: 29/60 pages

---

## 2026-03-17 — Session 6: Commercial Hub + 3 Spokes
- `hub-commercial.md`, `commercial-restaurant-bar.md`, `commercial-hotel-venue.md`, `commercial-maintenance.md`
- Status: 25/60 pages

---

## 2026-03-17 — Session 5: All 13 Residential Spoke Pages
- Status: 21/60 pages

---

## 2026-03-17 — Session 4: hub-builtins.md
- Status: 8/60 pages

---

## 2026-03-16 — Session 3: Phase A + C Core Pages
- `homepage.md`, `about.md`, `contact.md`, `faq.md`, `hub-kitchen-cabinets.md`, `hub-doors.md`, `hub-staircases.md`
- Decision: Staircase cost uses national range — flagged for Sue to confirm

---

## 2026-03-16 — Session 2: Phase B Complete
- `content/content-index.md`, `content/pages/` directory, `content/blog/outlines/` directory

---

## 2026-03-16 — Session 1: Setup & Planning
- `PROJECT-PLAN.md`, `PROJECT-LOG.md`, `CONTINUATION-PROMPT.md`

---
<!-- Full detail for sessions 1–8 in PROJECT-LOG-SESSION8.md if needed -->
