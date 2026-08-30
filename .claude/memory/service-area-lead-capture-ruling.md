---
name: service-area-lead-capture-ruling
description: Sue serves all 8 western suburbs (Chesterfield/Ballwin thinner); declarations widen to match live pages because lead capture beats pre-filtering.
metadata:
  type: feedback
---

Sue **does** serve all eight western suburbs the site previously disowned: Kirkwood, Webster Groves, Ladue, Town & Country, Frontenac, Tower Grove, Chesterfield, Ballwin. Coverage in **Chesterfield and Ballwin is thinner** in practice.

**Why:** Peter's explicit preference (2026-08-29) is to _let every inquiry come in and let Sue decline what she doesn't want_, rather than pre-filtering leads with narrowed service-area copy. Lead capture beats tidy targeting.

**How to apply:** widen declarations to match the 24 live geo pages — never delete pages to match a narrow declaration. Specifically:

- `public/llms.txt` previously said _"Does not serve: East of the Mississippi, Fenton and further suburbs"_ — that line was actively answering "no" on Sue's behalf and had to go.
- Homepage `areaServed` JSON-LD in `src/app/page.tsx` listed only ~8 core neighborhoods and must be widened.
- The 8 `/neighborhoods/*` pages were 301'd to `/` in `next.config.ts` as "out-of-area" while their 24 `/{door,staircase,kitchen-cabinet}-refinishing/*` counterparts stayed live — the redirects get removed, not the pages.

Genuine exclusions that stay: no hardwood floors, no decks, no commercial/restaurant/hospitality, no institutional work.

**The general lesson:** on this project, contradictions between `llms.txt`/JSON-LD and live pages are more damaging than on a typical site. Answer engines read those two as authoritative factual assertions, so a stale exclusion doesn't just fail to rank — it makes the engine assert the wrong answer about the business.

Related: [[canonical-nap-and-premises]]
