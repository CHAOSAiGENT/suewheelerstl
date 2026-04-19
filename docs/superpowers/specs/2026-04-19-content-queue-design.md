# Content Queue & Execution Plan — suewheelerstl.com

**Date:** 2026-04-19  
**Status:** Approved for implementation

---

## Strategy

Sue Wheeler's site generates leads through organic search. The content engine is **problem × neighborhood × service** — someone in Kirkwood with a peeling staircase, someone in Clayton with embarrassing kitchen cabinets. Content meets them at their search, not at a blog subscription.

**Principles:**

- All content is evergreen. No publish dates shown. Publishing everything at once is correct for a 36-year-old business.
- No pricing, estimates, or cost comparisons. Value framing only (refinish vs. replace, irreplaceability of old-growth wood, cost of doing nothing).
- All content uses homeowner language. Industry terms ("stripping," "substrate," "dutchmen") are either defined inline on first use or removed.
- "Perk Up & Protect" must be defined in plain English on every page where it appears before it is used as a service name. Definition: _a maintenance coat that revives a sound finish without stripping — the right call when the wood isn't in bad shape, just showing its age._

---

## Phase 1 — Fix Existing Content

Targeted edits to live pages. No new pages. All fixes before new content is generated.

### High Priority (broken or misleading)

| Page                                  | Fix                                                                                                                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blog/wood-refinishing-cost-st-louis` | Retitle + reframe entirely. Remove all pricing language. New angle: "Why refinishing beats replacement" — value of old-growth wood, irreplaceability, environmental case. |
| `neighborhoods/clayton/page.tsx`      | Rewrite meta description. Current version contains internal planning notes ("Some NR contributing structures") — not publishable copy.                                    |
| `neighborhoods/kirkwood/page.tsx`     | Add LocalBusiness schema + BreadcrumbSchema. Currently has zero schema.                                                                                                   |
| `neighborhoods/tower-grove/page.tsx`  | Add LocalBusiness schema + BreadcrumbSchema. Same issue as Kirkwood.                                                                                                      |
| `perk-up-and-protect/page.tsx`        | Add BreadcrumbSchema, FAQSchema, FAQ section. Add LocalBusiness schema. Add plain-English definition of service on first use in H1 area.                                  |

### Medium Priority (content gaps)

| Page                                            | Fix                                                                                                                                                         |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blog/perk-up-and-protect/page.tsx`             | Add plain-English parenthetical on first H1 appearance of "Perk Up & Protect."                                                                              |
| `blog/wood-damage-guide-st-louis`               | Define "substrate" on first use. Add plain-English definition for "Perk Up & Protect" where referenced.                                                     |
| `blog/refinish-or-replace-woodwork`             | Define "dutchmen repairs" on first use.                                                                                                                     |
| `staircase-refinishing/page.tsx`                | Define "stringers" on first use.                                                                                                                            |
| All neighborhood pages                          | Audit `<CTABlock />` — confirm it renders correctly with no props. Fix if needed.                                                                           |
| 3 blog posts with `datePublished: "2025-04-17"` | Update schema dates to `2026-04-19`. Affected: `dip-stripping-historic-woodwork`, `lead-paint-wood-refinishing-st-louis`, `wood-refinishing-cost-st-louis`. |

---

## Phase 2 — Geo-Service Pages (33 new pages)

Expand the neighborhood × service grid. Pattern established — follow exactly.

**Services per neighborhood:** Door refinishing, Staircase refinishing, Kitchen cabinet refinishing.  
**Pattern files:** Use existing 5-neighborhood pages as templates.  
**Schema:** LocalBusiness + FAQPage + BreadcrumbSchema on every page.  
**Agent batching:** Max 6 pages per agent (per global CLAUDE.md rule).

### Batches

| Batch | Neighborhoods                         | Pages |
| ----- | ------------------------------------- | ----- |
| A     | Kirkwood, Webster Groves, Maplewood   | 9     |
| B     | Clayton, University City, Tower Grove | 9     |
| C     | Ladue, Chesterfield, Ballwin          | 9     |
| D     | Frontenac, Town & Country             | 6     |

**Total: 33 pages across 4 batches.**

### Neighborhood housing stock notes (for agent context)

- **Kirkwood** — Incorporated 1865. Mix of Craftsman bungalows, Victorian cottages, mid-century. Old-growth fir dominant. Active repeat-client neighborhood.
- **Webster Groves** — 1890s–1920s Craftsman and Colonial Revival. Known for intact original woodwork. Significant Arts & Crafts presence.
- **Maplewood** — Dense 1900s–1920s bungalows and cottages. Fir throughout. Working-class housing stock with exceptional original wood.
- **Clayton** — Pre-war Colonials, Tudors, and mid-century alongside commercial. Higher-end residential. Mixed era — some homes post-1940 with less original wood.
- **University City** — 1910s–1930s. Diverse mix including Tudor Revival, Colonial, and Craftsman. Strong Jewish and academic community history. Excellent original woodwork in the older sections.
- **Tower Grove** — Victorian and bungalow mix. Tower Grove East is a local historic district. Pocket doors common. Dense older housing stock similar to Shaw.
- **Ladue** — Post-war Colonials and ranches alongside some older estates. Less old-growth than inner ring; higher-end clientele. Cabinet and door work common.
- **Chesterfield** — Predominantly post-1960 construction. Less historic woodwork; cabinet refinishing and Perk Up & Protect are the primary entry points here.
- **Ballwin** — Post-war suburban. Similar profile to Chesterfield. Cabinet work and door refinishing are the primary services.
- **Frontenac** — Established wealthy suburb. Larger estates with significant woodwork. Some pre-war homes with original fir and oak.
- **Town & Country** — Affluent. Large estate homes. Custom woodwork common. Higher-value projects; less volume than inner ring.

---

## Phase 3 — Blog Posts (4 new, all evergreen)

All posts: Article schema + FAQSchema + BreadcrumbSchema + CTABlock. No dates shown on page.

| Slug                                            | Title                                                           | Angle                                                                                                                                                                                                                                                         |
| ----------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blog/does-my-woodwork-need-a-full-refinish`    | "Does my woodwork need a full refinish — or something lighter?" | Plain-English explainer for the screen-and-recoat option. No proprietary name used. Decision criteria: when full strip is necessary vs. when a maintenance coat is the right call. Positioned as the third option homeowners don't know exists. ~1,500 words. |
| `blog/how-long-does-staircase-refinishing-take` | "How long does staircase refinishing take?"                     | Process + timeline piece. What drives timeline (scope, component count, lead paint). What disruption looks like. How to prepare. Not a cost piece. ~1,200 words.                                                                                              |
| `blog/refinish-kitchen-cabinets-or-replace`     | "Refinish your kitchen cabinets or replace them?"               | Value framing — irreplaceability of old-growth wood, what replacement actually means (MDF, particleboard, no character). No pricing. Decision framework: condition of existing wood, whether the layout works, what you'd be giving up. ~1,400 words.         |
| `blog/what-to-expect-wood-refinishing-project`  | "What to expect during a wood refinishing project"              | Trust-building process piece. What Sue does on first visit, how work is staged, what disruption looks like day-to-day, what the finished result looks and feels like. Zero pricing. ~1,200 words.                                                             |

---

## Phase 4 — Sitemap

Update `src/app/sitemap.ts` to include all routes added in the past two sessions plus all new pages from Phases 2 and 3.

**Currently missing from sitemap:**

- All 5 staircase × neighborhood pages
- All 5 cabinet × neighborhood pages
- `/blog/can-my-antique-be-refinished`
- `/furniture-refinishing`
- All Phase 2 and Phase 3 additions

---

## Execution Order

1. Phase 1 fixes (single session, targeted edits)
2. Phase 2 geo pages (parallel agents, all batches simultaneously)
3. Phase 3 blog posts (single agent, 4 posts)
4. Phase 4 sitemap (single file update)
5. Commit everything, push, Vercel deploys

---

## Out of Scope

- Pricing, estimates, or cost ranges on any page
- Scheduling or automation (content ships all at once)
- Renaming "Perk Up & Protect" (brand decision Sue must make — content works around it with plain-English definitions)
- Furniture × neighborhood pages (future phase, after primary service grid is complete)
- Built-ins × neighborhood pages (same)
- Additional neighborhoods beyond the 11 in Phase 2
