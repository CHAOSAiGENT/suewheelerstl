# Project Plan: suewheeler-web Content & Pages
## Wood Refinishing by Sue Wheeler, LLC

**Project:** Website content build — sitemap execution, page copy, blog strategy  
**Repo:** `suewheeler-web/` at `/Volumes/192.168.50.124/CHAOS-Clients/SueWheeler/Website/suewheeler-web/`  
**Stack:** Next.js (App Router), Tailwind CSS v4, Shadcn/Radix, Neon Postgres + Drizzle ORM, Vercel  
**Content source files:** `/Volumes/192.168.50.124/CHAOS-Clients/SueWheeler/Research/T2/`  
**Design spec:** `docs/design-spec.md`

---

## Source Assets (T2 Folder)

| File | Contents | Used For |
|------|----------|----------|
| `Asset-1-Commercial-Institutional-Services.md` | Positioning, taglines, full page copy for commercial + institutional hubs | Hubs 5 & 6 pages |
| `Asset-2-ICP-Group-Materials.md` | Persona profiles, messaging frameworks, copy blocks for all 5 segments | All service + neighborhood pages |
| `Asset-3-Preservation-Funding-Tax-Credits.md` | Tax credit mechanics, NPS standards, content-to-conversion pipeline | Hub 7 (Historic Preservation) pages |
| `Asset-4-Optimal-Sitemap.md` | 60-page sitemap, messaging placement map, 24-month content calendar, 50 blog ideas, internal linking map | Everything — primary architecture doc |
| `Asset-5-Agentic-Search-Strategy.md` | AI search optimization, structured data, GBP, schema strategy | Informs page structure and FAQ format throughout |
| `Sue_Wheeler_Gap_Analysis_Report.pdf` | Competitive gap analysis | Positioning reinforcement |

---

## Execution Phases

### PHASE B — Content Architecture Index
**Output:** `content/content-index.md`  
**What it is:** A single lookup table mapping every page URL to: source asset section, primary ICP segment, messaging priority, internal link targets, CTA, SEO title, and meta description. This is the master QA checklist for all 60 pages + blog.  
**Status:** 🔲 Not started

---

### PHASE A — Page Content Files
**Output:** `content/pages/*.md` (one file per page)  
**What it is:** One markdown file per page containing: SEO title, meta description, H1, structured body copy (drawn from T2 assets), CTA block, internal link targets, and messaging/dev notes.

Pages are written in priority order: core + residential hubs first, then spoke pages, then commercial/institutional/preservation hubs, then neighborhood pages, then utility pages.

#### Priority 1 — Core Pages (write first)
- [ ] `homepage.md` — `/`
- [ ] `about.md` — `/about/`
- [ ] `contact.md` — `/contact/`
- [ ] `faq.md` — `/faq/`

#### Priority 1 — Residential Hub Pages
- [ ] `hub-kitchen-cabinets.md` — `/kitchen-cabinet-refinishing/`
- [ ] `hub-doors.md` — `/door-refinishing/`
- [ ] `hub-staircases.md` — `/staircase-refinishing/`
- [ ] `hub-builtins.md` — `/built-ins-and-millwork-refinishing/`

#### Priority 2 — Residential Spoke Pages
- [ ] `kitchen-painted-cabinets.md` — `/kitchen-cabinet-refinishing/painted-cabinets/`
- [ ] `kitchen-stained-cabinets.md` — `/kitchen-cabinet-refinishing/stained-cabinets/`
- [ ] `kitchen-color-change.md` — `/kitchen-cabinet-refinishing/cabinet-color-change/`
- [ ] `door-front.md` — `/door-refinishing/front-door-refinishing/`
- [ ] `door-interior.md` — `/door-refinishing/interior-door-refinishing/`
- [ ] `door-french.md` — `/door-refinishing/french-door-refinishing/`
- [ ] `door-pocket.md` — `/door-refinishing/pocket-door-refinishing/`
- [ ] `stair-treads-risers.md` — `/staircase-refinishing/stair-treads-and-risers/`
- [ ] `stair-spindles.md` — `/staircase-refinishing/spindles-and-balusters/`
- [ ] `stair-newel.md` — `/staircase-refinishing/newel-posts/`
- [ ] `stair-railings.md` — `/staircase-refinishing/stair-railings/`
- [ ] `builtin-hutches.md` — `/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases/`
- [ ] `builtin-room-millwork.md` — `/built-ins-and-millwork-refinishing/room-millwork/`

#### Priority 2 — Commercial & Institutional Hub Pages (NEW)
- [ ] `hub-commercial.md` — `/commercial-and-hospitality-refinishing/`
- [ ] `commercial-restaurant-bar.md` — `/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing/`
- [ ] `commercial-hotel-venue.md` — `/commercial-and-hospitality-refinishing/hotel-and-venue-woodwork/`
- [ ] `commercial-maintenance.md` — `/commercial-and-hospitality-refinishing/commercial-maintenance-contracts/`
- [ ] `hub-institutional.md` — `/institutional-refinishing/`
- [ ] `institutional-historic-venue.md` — `/institutional-refinishing/historic-venue-restoration/`
- [ ] `institutional-church.md` — `/institutional-refinishing/church-and-religious-facility-woodwork/`
- [ ] `institutional-university.md` — `/institutional-refinishing/university-and-public-building-woodwork/`

#### Priority 2 — Historic Preservation Hub (NEW)
- [ ] `hub-preservation.md` — `/historic-preservation/`
- [ ] `preservation-tax-credits.md` — `/historic-preservation/historic-tax-credits/`
- [ ] `preservation-nps-standards.md` — `/historic-preservation/secretary-of-interior-standards/`
- [ ] `preservation-stl-districts.md` — `/historic-preservation/st-louis-historic-districts/`

#### Priority 2 — Thematic Hub Pages
- [ ] `portfolio.md` — `/portfolio/`
- [ ] `portfolio-residential.md` — `/portfolio/residential/`
- [ ] `portfolio-commercial.md` — `/portfolio/commercial/`
- [ ] `portfolio-institutional.md` — `/portfolio/institutional/`
- [ ] `portfolio-before-after.md` — `/portfolio/before-and-after/`
- [ ] `reviews.md` — `/reviews/`

#### Priority 3 — Neighborhood Pages (15 total)
Each follows a standard template. Write template first, then execute all 15.
- [ ] `neighborhood-template.md` — template / dev reference
- [ ] `nbhd-central-west-end.md`
- [ ] `nbhd-lafayette-square.md`
- [ ] `nbhd-compton-heights.md`
- [ ] `nbhd-tower-grove.md`
- [ ] `nbhd-shaw.md`
- [ ] `nbhd-maplewood.md`
- [ ] `nbhd-clayton.md`
- [ ] `nbhd-university-city.md`
- [ ] `nbhd-webster-groves.md`
- [ ] `nbhd-kirkwood.md`
- [ ] `nbhd-frontenac.md`
- [ ] `nbhd-ladue.md`
- [ ] `nbhd-town-and-country.md`
- [ ] `nbhd-chesterfield.md`
- [ ] `nbhd-ballwin.md`

#### Priority 3 — Utility Pages
- [ ] `privacy-policy.md` — `/privacy-policy/`
- [ ] `sitemap.md` — `/sitemap/`

---

### PHASE C — Homepage + 3 Hub Pages (Fully Written, Dev-Ready)
**Output:** Complete, polished copy for the 4 highest-leverage pages  
**Pages:**
1. Homepage (`/`)
2. Kitchen Cabinet Refinishing Hub (`/kitchen-cabinet-refinishing/`)
3. Door Refinishing Hub (`/door-refinishing/`)
4. Staircase Refinishing Hub (`/staircase-refinishing/`)

These 4 pages establish the template, voice, and component patterns for everything that follows.  
**Status:** 🔲 Not started (blocked on Phase B completion)

---

## Blog Content

### Blog Outline Files
**Output:** `content/blog/outlines/*.md` — one file per Priority 1 post  
**Priority 1 posts (15 total, from Asset 4 Section 4):**

| Code | Title | Keyword |
|------|-------|---------|
| A1 | Hand-Strip vs. Dip | hand strip vs dip wood refinishing |
| A3 | What Is Wood Refinishing | what is wood refinishing |
| A5 | How Long Does It Last | how long does wood refinishing last |
| B1 | Central West End Homes | wood refinishing Central West End St. Louis |
| B2 | Lafayette Square Pocket Doors | pocket door refinishing Lafayette Square |
| C1 | Restaurant Bar Top Maintenance | restaurant bar top refinishing St. Louis |
| C2 | Commercial Maintenance Contracts | commercial wood maintenance contract |
| D1 | Historic Tax Credits STL | historic tax credits St. Louis home |
| D2 | NPS Standards & Wood | secretary of interior standards wood refinishing |
| D3 | Missouri State Tax Credit | Missouri historic tax credit program |
| D5 | STL Historic Districts | St. Louis historic districts tax credits |
| E1 | The Sheldon Concert Hall | Sheldon Concert Hall wood restoration |
| E2 | Institutional Specialist Case | institutional wood refinishing St. Louis |
| F2 | Staircase Refinishing Cost | staircase refinishing cost St. Louis |
| F3 | Lead Paint Pre-1978 Homes | lead paint wood refinishing St. Louis |

---

## File Structure (Target State)

```
suewheeler-web/
├── PROJECT-PLAN.md          ← This file
├── PROJECT-LOG.md           ← Running work log
├── CONTINUATION-PROMPT.md   ← Paste-ready context for new chats
├── docs/
│   ├── design-spec.md
│   └── design-spec.html
└── content/
    ├── content-index.md     ← Phase B output
    ├── pages/               ← Phase A output (60 files)
    │   ├── homepage.md
    │   ├── about.md
    │   └── ...
    └── blog/
        └── outlines/        ← 15 Priority 1 post outlines
            ├── A1-hand-strip-vs-dip.md
            └── ...
```

---

## Standing Rules for This Phase

1. **Always read Asset-4 Section 1 (sitemap) before writing any page** — URL slugs and page purposes are canonical there.
2. **Copy blocks in Asset-1 (commercial), Asset-2 (ICP), and Asset-3 (preservation) are ready to adapt** — don't rewrite from scratch, adapt from source.
3. **Every page file must include:** SEO title, meta description, H1, structured body, CTA block, internal link targets, and messaging notes.
4. **Neighborhood pages follow the standard template** — write the template file first, populate all 15 against it.
5. **Blog outlines use Asset-4 Section 4 as the spec** — title, keyword, word count, ICP, and priority tier are already defined there.
6. **Internal linking follows Asset-4 Section 5 rules** — include link targets in every page file.
7. **Agentic search (Asset-5) informs structure** — FAQ blocks belong on every hub page, entity-clear language throughout.
