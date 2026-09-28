# Content Index — suewheeler-web
## Wood Refinishing by Sue Wheeler, LLC

**Purpose:** Master lookup table for all 60 pages + 15 Priority 1 blog posts. Every page file in `content/pages/` is governed by a row in this index. Use this for writing, QA, dev routing, and internal link audits.

**Last updated:** 2026-03-16
**Source of truth for sitemap:** Asset-4, Section 1
**Source of truth for messaging placement:** Asset-4, Section 2
**Source of truth for internal linking:** Asset-4, Section 5

---

## HOW TO READ THIS INDEX

| Column | What it means |
|--------|---------------|
| **URL** | Final production URL slug |
| **File** | Filename in `content/pages/` |
| **SEO Title** | `<title>` tag — keep ≤60 chars |
| **Meta Description** | `<meta description>` — keep ≤160 chars |
| **ICP** | Primary audience segment (1–5 or All) |
| **Source** | T2 asset file and section to draw copy from |
| **Key Messages** | 2–3 messages from Asset-4 §2 placement map |
| **Internal Links → (out)** | Pages this page must link to |
| **CTA** | Primary call to action text + destination |
| **Notes** | Flags, dev notes, content priority |

---

## ICP SEGMENT REFERENCE

| Code | Segment |
|------|---------|
| S1 | Affluent homeowners, 45–70, $100K–$250K+ HH income |
| S2 | New historic home buyers, 30–45, dual income |
| S3 | Real estate investors & flippers |
| S4 | Commercial & hospitality operators |
| S5 | Institutional / facilities managers |
| All | All segments |

---

## SECTION 1: CORE PAGES


### 1.1 Homepage

**URL:** `/`
**File:** `pages/homepage.md`
**SEO Title:** `Wood Refinishing St. Louis | Sue Wheeler — Since 1989`
**Meta Description:** `St. Louis's most trusted architectural wood refinisher. Hand-stripped, never dipped. EPA Certified. BBB A+. Sue answers every call personally. (314) 367-6054.`
**ICP:** All
**Source:** Asset-2 §1B–1C (S1 hero copy); Asset-1 §2 (hero variants); Asset-4 §2 (messaging placement)
**Phase C page:** Yes — write to full dev-ready quality

**Key Messages:**
1. Hand-stripped, never dipped (hero or first subhead)
2. 36 years / one owner / Sue answers every call personally
3. EPA Certified Lead Renovator + BBB A+ (credential bar)

**Internal Links → (out):**
- All 7 hub pages (nav + body links)
- `/about/`, `/contact/`, `/portfolio/`, `/reviews/`, `/blog/`
- The Sheldon project spotlight → future blog post or `/institutional-refinishing/historic-venue-restoration/`

**CTA:** "Get a Free Estimate" → `/contact/` | "Call Sue: (314) 367-6054"

**Notes:**
- Credential bar: EPA Certified + BBB A+ + 36 Years + STL Magazine + The Sheldon
- Must include 2–3 featured testimonials (matched to page context)
- Project spotlight section: The Sheldon Concert Hall
- Phone number in header, hero, and footer — tap-to-call on mobile
- STL Magazine "Perfect Finish" feature mention in social proof section

---

### 1.2 About

**URL:** `/about/`
**File:** `pages/about.md`
**SEO Title:** `About Sue Wheeler | 36 Years of Wood Refinishing in St. Louis`
**Meta Description:** `Meet Sue Wheeler — St. Louis's most experienced wood refinisher since 1989. EPA Certified Lead Renovator, BBB A+, and featured in St. Louis Magazine. She answers every call.`
**ICP:** All
**Source:** Asset-2 §1B (trust signals, personal narrative); Asset-4 §2 (message placement for About)
**Phase C page:** No — standard quality

**Key Messages:**
1. 36 years / one city / one owner
2. When you call Sue Wheeler, Sue Wheeler answers
3. EPA Certified + BBB A+ + STL Magazine "Perfect Finish"

**Internal Links → (out):**
- `/contact/` (free estimate)
- `/portfolio/residential/`, `/portfolio/institutional/`
- `/reviews/`
- `/historic-preservation/` (EPA cert context)
- `/institutional-refinishing/` (The Sheldon mention)
- Future blog: The Sheldon Concert Hall case study

**CTA:** "Call Sue for a Free Estimate: (314) 367-6054"

**Notes:**
- Include: 36 years, EPA cert, BBB A+, hand-strip method, board-up process, The Sheldon
- STL Magazine mention: "Featured in St. Louis Magazine — 'Perfect Finish.'"
- "Architectural woodwork, not furniture" — sets scope expectations
- Personal, warm tone — this is Sue's voice page

---

### 1.3 Contact / Free Estimate

**URL:** `/contact/`
**File:** `pages/contact.md`
**SEO Title:** `Free Estimate | Wood Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Get a free wood refinishing estimate from Sue Wheeler. Call (314) 367-6054 or submit the form. Sue answers every call personally. Serving metropolitan St. Louis.`
**ICP:** All
**Source:** Asset-4 §2 (messaging placement for Contact)

**Key Messages:**
1. Sue answers every call personally — (314) 367-6054
2. Free estimate — no obligation
3. Service area: Metropolitan St. Louis, west of the Mississippi

**Internal Links → (out):**
- `/about/` (if they want to know more before calling)
- `/faq/` (common pre-estimate questions)
- `/reviews/` (social proof near form)

**CTA:** Form submission: "Request a Free Estimate" | Phone: (314) 367-6054

**Notes:**
- Keep copy minimal — this is a conversion page, not an education page
- Include: phone (large, tap-to-call), form, address, service area description
- BBB A+ badge near form — trust closer
- No long body copy; let the form do the work

---

### 1.4 FAQ

**URL:** `/faq/`
**File:** `pages/faq.md`
**SEO Title:** `Wood Refinishing FAQ | Sue Wheeler St. Louis`
**Meta Description:** `Answers to the most common questions about wood refinishing in St. Louis — dipping, lead paint, cost, timing, and more. From Sue Wheeler, 36 years experience.`
**ICP:** All
**Source:** Asset-4 §5 (FAQ topic list with link targets); Asset-5 (agentic search FAQ format guidance)

**Key Messages:**
1. Hand-stripped, never dipped (educational — explained fully here)
2. EPA Certified Lead Renovator (safety questions answered here)
3. Free estimate CTA throughout

**Internal Links → (out):**
- Service hub pages (one per relevant FAQ answer)
- `/historic-preservation/historic-tax-credits/`
- `/historic-preservation/secretary-of-interior-standards/`
- `/historic-preservation/st-louis-historic-districts/`
- `/neighborhoods/` index or specific neighborhood pages
- `/commercial-and-hospitality-refinishing/commercial-maintenance-contracts/`
- `/contact/` (every "how do I get started" answer)
- Blog posts for deep-dive answers

**CTA:** "Still have questions? Call Sue: (314) 367-6054" | "Get a Free Estimate" → `/contact/`

**Notes:**
- Minimum 20 questions — see Asset-4 §5 for full topic list with link targets
- Use accordion/expandable format for AI snippet optimization (Asset-5 guidance)
- FAQ answers should be structured for featured snippets: short answer first, then detail
- "Do you refinish furniture?" → No, architectural woodwork only → `/about/`
- "What is dip-stripping?" → Full educational answer → link to blog post A1
- "Can refinishing qualify for tax credits?" → Yes → `/historic-preservation/historic-tax-credits/`

---


## SECTION 2: RESIDENTIAL HUB PAGES

### 2.1 Kitchen Cabinet Refinishing Hub

**URL:** `/kitchen-cabinet-refinishing/`
**File:** `pages/hub-kitchen-cabinets.md`
**SEO Title:** `Kitchen Cabinet Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Hand-stripped kitchen cabinet refinishing in St. Louis. Painted, stained, or color-change cabinets restored by Sue Wheeler — 36 years, EPA Certified, BBB A+. Free estimate.`
**ICP:** S1, S2
**Source:** Asset-2 §1B–1C (S1 copy blocks); Asset-4 §1 (hub page purpose); Asset-4 §2 (messaging placement)
**Phase C page:** Yes — write to full dev-ready quality

**Key Messages:**
1. Hand-stripped, never dipped
2. EPA Certified Lead Renovator (pre-1978 homes)
3. Free estimate CTA

**Internal Links → (out):**
- `/kitchen-cabinet-refinishing/painted-cabinets/`
- `/kitchen-cabinet-refinishing/stained-cabinets/`
- `/kitchen-cabinet-refinishing/cabinet-color-change/`
- `/portfolio/residential/`
- `/historic-preservation/` (lead paint angle for pre-1978 kitchens)
- Blog: "Spring Is the Right Time to Refinish Cabinets" (F1)
- Blog: "Refinishing vs. Refacing Cabinets"
- `/contact/`

**CTA:** "Get a Free Kitchen Estimate" → `/contact/` | "(314) 367-6054"

**Notes:**
- Hub page: overview of cabinet refinishing, benefits over replacement, method
- Include FAQ block (3–5 questions) for AI search optimization
- "Refinishing vs. replacement" cost comparison angle — strong conversion driver
- Mention S&R (Strip & Refinish) and PUP (Perk Up & Protect) service tiers
- Testimonial: one cabinet-specific quote

---

### 2.2 Door Refinishing Hub

**URL:** `/door-refinishing/`
**File:** `pages/hub-doors.md`
**SEO Title:** `Door Refinishing St. Louis | Sue Wheeler — Since 1989`
**Meta Description:** `Front doors, interior doors, French doors, pocket doors — hand-stripped and refinished by Sue Wheeler. EPA Certified for pre-1978 homes. Free estimate: (314) 367-6054.`
**ICP:** All residential (S1, S2, S3)
**Source:** Asset-2 §1B–1C; Asset-4 §1–2; Asset-4 §5 (door hub linking rules)
**Phase C page:** Yes — write to full dev-ready quality

**Key Messages:**
1. Hand-stripped, never dipped
2. EPA Certified Lead Renovator
3. Board-up method (remove, refinish in shop, reinstall) — efficiency differentiator

**Internal Links → (out):**
- `/door-refinishing/front-door-refinishing/`
- `/door-refinishing/interior-door-refinishing/`
- `/door-refinishing/french-door-refinishing/`
- `/door-refinishing/pocket-door-refinishing/`
- `/historic-preservation/` (lead paint in pre-1978 doors)
- `/neighborhoods/central-west-end/`, `/neighborhoods/lafayette-square/`
- Blog: "Your Front Door Before the Real Estate Market Opens" (F5)
- `/contact/`

**CTA:** "Get a Free Door Estimate" → `/contact/` | "(314) 367-6054"

**Notes:**
- All door types covered: exterior, interior, French, pocket
- Lead paint safety messaging required — most STL doors pre-1978
- Board-up method explanation: doors removed, refinished in shop, returned and hung
- Curb appeal angle for front doors; historic character angle for pocket/interior doors
- Include FAQ block for AI search

---

### 2.3 Staircase Refinishing Hub

**URL:** `/staircase-refinishing/`
**File:** `pages/hub-staircases.md`
**SEO Title:** `Staircase Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Staircase refinishing in St. Louis — treads, risers, spindles, newel posts, railings. Hand-stripped, EPA Certified. Sue Wheeler, 36 years. Free estimate: (314) 367-6054.`
**ICP:** S1, S2, S3
**Source:** Asset-2 §1B–1C; Asset-4 §1–2; Asset-4 §5 (staircase hub linking)
**Phase C page:** Yes — write to full dev-ready quality

**Key Messages:**
1. Biggest visual impact in any home — dramatic before/after
2. Hand-stripped, never dipped (especially critical for intricate spindles)
3. EPA Certified (pre-1978 stair finishes almost certainly contain lead)

**Internal Links → (out):**
- `/staircase-refinishing/stair-treads-and-risers/`
- `/staircase-refinishing/spindles-and-balusters/`
- `/staircase-refinishing/newel-posts/`
- `/staircase-refinishing/stair-railings/`
- `/portfolio/before-and-after/`
- Blog: "Staircase Refinishing: What to Expect Start to Finish"
- Blog: "How Much Does Staircase Refinishing Cost in St. Louis?" (F2)
- `/contact/`

**CTA:** "Get a Free Staircase Estimate" → `/contact/` | "(314) 367-6054"

**Notes:**
- Highest-visual-impact service — lead with dramatic before/after language
- Address the full scope: treads, risers, spindles, newel posts, railings (not just treads)
- Cost transparency angle: reference the national range, position value
- Include FAQ block: "How long does staircase refinishing take?", "Can you refinish just the treads?", etc.
- Testimonial: one staircase-specific quote

---

### 2.4 Built-Ins & Millwork Refinishing Hub

**URL:** `/built-ins-and-millwork-refinishing/`
**File:** `pages/hub-builtins.md`
**SEO Title:** `Built-In & Millwork Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Refinishing for built-in hutches, bookcases, buffets, wainscoting, mantels, crown molding and more. Hand-stripped, EPA Certified. St. Louis. Free estimate: (314) 367-6054.`
**ICP:** S1, S2
**Source:** Asset-2 §1B–1C; Asset-4 §1–2; Asset-4 §5

**Key Messages:**
1. "Built to stay" — these pieces are irreplaceable; restoration is the only option
2. Hand-stripped, never dipped
3. EPA Certified (pre-1978 millwork)

**Internal Links → (out):**
- `/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases/`
- `/built-ins-and-millwork-refinishing/room-millwork/`
- `/portfolio/residential/`
- Blog: "Built-In Bookcases: Why They're Worth Restoring"
- Blog: "What Is Chair Rail?"
- `/neighborhoods/central-west-end/`, `/neighborhoods/compton-heights/`, `/neighborhoods/shaw/`
- `/contact/`

**CTA:** "Get a Free Estimate" → `/contact/` | "(314) 367-6054"

**Notes:**
- Hub covers: built-in hutches, buffets, bookcases + all room millwork (baseboards, crown, wainscoting, mantels, window trim, chair rail)
- Preservation angle: original millwork cannot be matched with new materials
- Scope-setting: "architectural woodwork, not furniture"
- Include FAQ block

---


## SECTION 3: RESIDENTIAL SPOKE PAGES

### 3.1 Painted Cabinet Refinishing

**URL:** `/kitchen-cabinet-refinishing/painted-cabinets/`
**File:** `pages/kitchen-painted-cabinets.md`
**SEO Title:** `Painted Cabinet Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Expert painted cabinet refinishing in St. Louis. Proper prep, priming, and hand-applied finish — not a spray-and-pray job. Sue Wheeler, EPA Certified. Free estimate.`
**ICP:** S1
**Source:** Asset-2 §1B; Asset-4 §1 (page purpose)

**Key Messages:** Hand-stripped prep, proper primers, EPA Certified
**Internal Links → (out):** `/kitchen-cabinet-refinishing/` (parent hub), `/contact/`, 1 blog post
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Target: cabinets being painted; educate on prep and primer importance; distinguish from DIY painting

---

### 3.2 Stained Cabinet Refinishing

**URL:** `/kitchen-cabinet-refinishing/stained-cabinets/`
**File:** `pages/kitchen-stained-cabinets.md`
**SEO Title:** `Stained Cabinet Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Natural wood cabinet refinishing in St. Louis. Hand-strip method preserves wood grain and allows precise stain matching. Sue Wheeler, 36 years. Free estimate: (314) 367-6054.`
**ICP:** S1
**Source:** Asset-2 §1B; Asset-4 §1

**Key Messages:** Hand-strip preserves grain, stain matching expertise, EPA Certified
**Internal Links → (out):** `/kitchen-cabinet-refinishing/` (parent), `/historic-preservation/`, `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Target: original oak/cherry/maple cabinets; emphasize how dipping destroys grain; stain matching to existing woodwork

---

### 3.3 Cabinet Color Change

**URL:** `/kitchen-cabinet-refinishing/cabinet-color-change/`
**File:** `pages/kitchen-color-change.md`
**SEO Title:** `Cabinet Color Change St. Louis | Wood Refinishing by Sue Wheeler`
**Meta Description:** `Update your kitchen cabinet color without replacing the boxes. Expert color-change refinishing in St. Louis. Sue Wheeler, EPA Certified, BBB A+. Free estimate.`
**ICP:** S1
**Source:** Asset-2 §1B; Asset-4 §1

**Key Messages:** Cost savings vs. replacement, color flexibility, EPA Certified
**Internal Links → (out):** `/kitchen-cabinet-refinishing/` (parent), `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Target: homeowners updating kitchen color without new cabinetry boxes; the budget-conscious refresh angle

---

### 3.4 Front Door Refinishing

**URL:** `/door-refinishing/front-door-refinishing/`
**File:** `pages/door-front.md`
**SEO Title:** `Front Door Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Restore your front door's finish — UV damage, weathering, peeling repaired by hand. Sue Wheeler, 36 years, EPA Certified. Curb appeal starts here. Free estimate.`
**ICP:** S1, S3 (real estate)
**Source:** Asset-2 §1B, §3B (S3 investor copy); Asset-4 §1

**Key Messages:** Curb appeal, UV/weather exposure, EPA Certified, pre-sale value
**Internal Links → (out):** `/door-refinishing/` (parent), `/neighborhoods/` (relevant), Blog F5, `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Exterior finish durability angle; seasonal weathering explanation; pre-sale preparation hook; board-up method advantage for exterior doors

---

### 3.5 Interior Door Refinishing

**URL:** `/door-refinishing/interior-door-refinishing/`
**File:** `pages/door-interior.md`
**SEO Title:** `Interior Door Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Interior door refinishing in St. Louis — stain consistency, finish matching, EPA lead-safe process. Sue Wheeler, hand-stripped, 36 years. Free estimate: (314) 367-6054.`
**ICP:** S1, S2
**Source:** Asset-2 §1B; Asset-4 §1

**Key Messages:** Stain consistency across millwork, EPA Certified, hand-strip method
**Internal Links → (out):** `/door-refinishing/` (parent), `/historic-preservation/`, `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Interior doors in pre-1978 homes; stain matching to existing trim; board-up method keeps dust/fumes out of living space

---

### 3.6 French Door Refinishing

**URL:** `/door-refinishing/french-door-refinishing/`
**File:** `pages/door-french.md`
**SEO Title:** `French Door Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `French door refinishing in St. Louis. Multi-lite doors, glass edge detail, careful hand prep. Sue Wheeler, EPA Certified, 36 years. Free estimate: (314) 367-6054.`
**ICP:** S1
**Source:** Asset-2 §1B; Asset-4 §1

**Key Messages:** Multi-lite care, glass edge detail, hand prep required
**Internal Links → (out):** `/door-refinishing/` (parent), `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Sunroom, dining room, study French doors; careful masking around glass; hand-strip only (dipping impossible with glass panels)

---

### 3.7 Pocket Door Refinishing

**URL:** `/door-refinishing/pocket-door-refinishing/`
**File:** `pages/door-pocket.md`
**SEO Title:** `Pocket Door Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Pocket door refinishing in St. Louis's historic homes. CWE, Lafayette Square, Compton Heights. In-wall hardware, surface access only. EPA Certified. Free estimate.`
**ICP:** S2 (historic home buyers)
**Source:** Asset-2 §2B (S2 messaging); Asset-4 §1

**Key Messages:** Historic home specialty, in-wall hardware knowledge, EPA Certified
**Internal Links → (out):** `/door-refinishing/` (parent), `/neighborhoods/central-west-end/`, `/neighborhoods/lafayette-square/`, `/historic-preservation/`, `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** CWE/Lafayette Square/historic district anchor; pocket doors are a signature feature of late-1800s STL architecture; surface-only access challenge explained

---

### 3.8 Stair Treads & Risers

**URL:** `/staircase-refinishing/stair-treads-and-risers/`
**File:** `pages/stair-treads-risers.md`
**SEO Title:** `Stair Tread Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `High-traffic stair tread and riser refinishing in St. Louis. Durability finishes, hand-strip method, EPA Certified. Sue Wheeler, 36 years. Free estimate: (314) 367-6054.`
**ICP:** S1, S3
**Source:** Asset-2 §1B, §3B; Asset-4 §1

**Key Messages:** Durability finishes for high-traffic surfaces, hand-strip, EPA Certified
**Internal Links → (out):** `/staircase-refinishing/` (parent), `/portfolio/before-and-after/`, `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** High-traffic focus; durability finish selection (polyurethane for wear resistance); cost comparison vs. tread replacement

---

### 3.9 Spindles & Balusters

**URL:** `/staircase-refinishing/spindles-and-balusters/`
**File:** `pages/stair-spindles.md`
**SEO Title:** `Spindle & Baluster Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Stair spindle and baluster refinishing in St. Louis. Intricate hand work, no shortcuts. Sue Wheeler, EPA Certified, 36 years experience. Free estimate: (314) 367-6054.`
**ICP:** S1, S2
**Source:** Asset-2 §1B; Asset-4 §1

**Key Messages:** Intricate hand work required, time-intensive quality, EPA Certified
**Internal Links → (out):** `/staircase-refinishing/` (parent), `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Most labor-intensive component of staircase work; each spindle is hand-stripped; dipping would dissolve glue joints; quality/time investment angle

---

### 3.10 Newel Posts

**URL:** `/staircase-refinishing/newel-posts/`
**File:** `pages/stair-newel.md`
**SEO Title:** `Newel Post Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Newel post refinishing in St. Louis's historic homes. Architectural statement piece, preservation-minded approach. Sue Wheeler, EPA Certified. Free estimate.`
**ICP:** S2 (historic home buyers)
**Source:** Asset-2 §2B; Asset-4 §1

**Key Messages:** Architectural statement piece, preservation angle, EPA Certified
**Internal Links → (out):** `/staircase-refinishing/` (parent), `/neighborhoods/central-west-end/`, `/neighborhoods/lafayette-square/`, `/historic-preservation/`, `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Historical architecture angle; newel posts in CWE/Lafayette Square homes are often carved original old-growth wood; irreplaceability emphasis

---

### 3.11 Stair Railings

**URL:** `/staircase-refinishing/stair-railings/`
**File:** `pages/stair-railings.md`
**SEO Title:** `Stair Railing Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Handrail and stair railing refinishing in St. Louis. Safety + beauty combined. Continuous rail, hand profiling, EPA Certified. Sue Wheeler, 36 years. Free estimate.`
**ICP:** S1, S3
**Source:** Asset-2 §1B; Asset-4 §1

**Key Messages:** Safety + beauty, continuous rail refinishing, EPA Certified
**Internal Links → (out):** `/staircase-refinishing/` (parent), `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Safety framing (functional + beautiful); handrail profiling detail; investor pre-sale angle (railings visible in listing photos)

---

### 3.12 Built-In Hutches, Buffets & Bookcases

**URL:** `/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases/`
**File:** `pages/builtin-hutches.md`
**SEO Title:** `Built-In Hutch & Bookcase Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Dining room built-ins, hutches, buffets, and bookcases refinished in St. Louis. Irreplaceable original woodwork restored. EPA Certified. Sue Wheeler. Free estimate.`
**ICP:** S1, S2
**Source:** Asset-2 §1B, §2B; Asset-4 §1

**Key Messages:** Irreplaceable originals, preservation value, EPA Certified
**Internal Links → (out):** `/built-ins-and-millwork-refinishing/` (parent), `/neighborhoods/compton-heights/`, `/neighborhoods/central-west-end/`, `/neighborhoods/shaw/`, `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Dining room/library built-ins; these cannot be matched with new materials; old-growth wood density; stewardship/legacy framing

---

### 3.13 Room Millwork

**URL:** `/built-ins-and-millwork-refinishing/room-millwork/`
**File:** `pages/builtin-room-millwork.md`
**SEO Title:** `Room Millwork Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Baseboards, crown molding, wainscoting, chair rail, mantels, and window trim refinished in St. Louis. Sue Wheeler, EPA Certified, 36 years. Free estimate: (314) 367-6054.`
**ICP:** S1, S2, All residential
**Source:** Asset-2 §1B; Asset-4 §1

**Key Messages:** Full-room millwork scope, EPA Certified, hand-strip method
**Internal Links → (out):** `/built-ins-and-millwork-refinishing/` (parent), Blog: "What Is Chair Rail?", `/contact/`
**CTA:** "Get a Free Estimate" → `/contact/`
**Notes:** Scope list: baseboards, crown molding, wainscoting, mantels, window trim, chair rail, picture rail; full-room refinishing creates visual coherence; seasonal hook (holiday prep for dining rooms)

---


## SECTION 4: COMMERCIAL & HOSPITALITY HUB + SPOKES

### 4.1 Commercial & Hospitality Hub

**URL:** `/commercial-and-hospitality-refinishing/`
**File:** `pages/hub-commercial.md`
**SEO Title:** `Commercial Wood Refinishing St. Louis | Restaurants, Bars, Hotels`
**Meta Description:** `Wood refinishing for St. Louis restaurants, bars, hotels, and event venues. Off-hours scheduling. Durability finishes. Maintenance contracts. Sue Wheeler, EPA Certified.`
**ICP:** S4
**Source:** Asset-1 §3 (full commercial page copy — ready to adapt); Asset-4 §1–2

**Key Messages:**
1. Schedule around your operating hours (minimal disruption)
2. Commercial-grade durability finishes
3. Maintenance contracts — budgeting predictability

**Internal Links → (out):**
- `/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing/`
- `/commercial-and-hospitality-refinishing/hotel-and-venue-woodwork/`
- `/commercial-and-hospitality-refinishing/commercial-maintenance-contracts/`
- `/portfolio/commercial/`
- Blog C1: "When Should a Restaurant Refinish Its Bar Top?"
- Blog C2: "Commercial Maintenance Contracts"
- `/contact/`

**CTA:** "Call for a Commercial Inquiry: (314) 367-6054"

**Notes:**
- Asset-1 §3 has full ready-to-use page copy — adapt directly, don't rewrite from scratch
- Lead with: speed, durability finishes, minimal disruption, maintenance contract pitch
- Include The Sheldon mention for institutional credibility spillover
- "We are not a painting company that does wood. We are a wood company." — from Asset-1 §1
- Include FAQ block; "Can you work around our hours?" is Objection #1 per Asset-1 §1

---

### 4.2 Restaurant & Bar Refinishing

**URL:** `/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing/`
**File:** `pages/commercial-restaurant-bar.md`
**SEO Title:** `Restaurant & Bar Wood Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Bar tops, tabletops, wainscoting, booths refinished for St. Louis restaurants and bars. Off-hours scheduling. Durability finishes. Sue Wheeler, EPA Certified. Call today.`
**ICP:** S4
**Source:** Asset-1 §3 (bar tops, tabletops, wainscoting, booths copy blocks — all present)

**Key Messages:** Bar top durability, off-hours scheduling, maintenance cycle ROI
**Internal Links → (out):** `/commercial-and-hospitality-refinishing/` (parent), `/commercial-and-hospitality-refinishing/commercial-maintenance-contracts/`, Blog C1, Blog C5, `/portfolio/commercial/`, `/contact/`
**CTA:** "Schedule a Commercial Consult: (314) 367-6054"
**Notes:** Asset-1 §3 has detailed copy for bar tops, tabletops, wainscoting, booths, host stands, bar back shelving — adapt all of it; "back in service by Monday" angle

---

### 4.3 Hotel & Venue Woodwork

**URL:** `/commercial-and-hospitality-refinishing/hotel-and-venue-woodwork/`
**File:** `pages/commercial-hotel-venue.md`
**SEO Title:** `Hotel & Event Venue Wood Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Lobby woodwork, event space millwork, historic hotel refinishing in St. Louis. Off-hours scheduling. EPA Certified. Sue Wheeler, 36 years. Call for a venue consult.`
**ICP:** S4, S5
**Source:** Asset-1 §3 (hotel/venue copy); Asset-4 §1

**Key Messages:** Minimal disruption, off-hours access, lobby/event space atmosphere
**Internal Links → (out):** `/commercial-and-hospitality-refinishing/` (parent), `/institutional-refinishing/`, `/historic-preservation/`, Blog C4, `/portfolio/commercial/`, `/contact/`
**CTA:** "Call for a Venue Consult: (314) 367-6054"
**Notes:** Lobbies, event space wood, historic hotel millwork; off-hours scheduling is the #1 pitch; The Sheldon mention for landmark building credibility

---

### 4.4 Commercial Maintenance Contracts

**URL:** `/commercial-and-hospitality-refinishing/commercial-maintenance-contracts/`
**File:** `pages/commercial-maintenance.md`
**SEO Title:** `Commercial Wood Maintenance Contracts St. Louis | Sue Wheeler`
**Meta Description:** `Annual and multi-year wood maintenance contracts for St. Louis restaurants, bars, and hotels. Predictable budgeting, loyalty pricing. Sue Wheeler. Call today.`
**ICP:** S4
**Source:** Asset-1 §3 (maintenance contract section); Asset-4 §1

**Key Messages:** Predictable budget cycles, loyalty pricing, 3–5 year maintenance cycle ROI
**Internal Links → (out):** `/commercial-and-hospitality-refinishing/` (parent), `/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing/`, Blog C2, `/contact/`
**CTA:** "Request a Maintenance Proposal: (314) 367-6054"
**Notes:** Annual/3-year maintenance agreement pitch; cost-per-year framing; "avoid emergency refinishing" angle; repeat business anchor page

---

## SECTION 5: INSTITUTIONAL HUB + SPOKES

### 5.1 Institutional Refinishing Hub

**URL:** `/institutional-refinishing/`
**File:** `pages/hub-institutional.md`
**SEO Title:** `Institutional Wood Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `Wood refinishing for concert halls, churches, universities, and public buildings in St. Louis. EPA Certified. The Sheldon Concert Hall. Sue Wheeler, 36 years.`
**ICP:** S5
**Source:** Asset-1 §4 (full institutional page copy); Asset-4 §1–2

**Key Messages:**
1. EPA Certified Lead Renovator — mandatory for institutional pre-1978 buildings
2. The Sheldon Concert Hall ($11M renovation anchor)
3. Work around your operating schedule

**Internal Links → (out):**
- `/institutional-refinishing/historic-venue-restoration/`
- `/institutional-refinishing/church-and-religious-facility-woodwork/`
- `/institutional-refinishing/university-and-public-building-woodwork/`
- `/historic-preservation/`
- `/historic-preservation/secretary-of-interior-standards/`
- `/portfolio/institutional/`
- Blog E1: The Sheldon Concert Hall
- Blog E2: Why Institutional Refinishing Requires a Specialist
- `/contact/`

**CTA:** "Call for an Institutional Inquiry: (314) 367-6054"

**Notes:**
- Asset-1 §4 has full ready-to-use institutional page copy — adapt directly
- Lead with: EPA cert, preservation standards, landmark experience (The Sheldon), schedule flexibility
- "When you call Sue Wheeler, Sue Wheeler answers" — especially powerful for facilities managers used to being bounced around contractors
- Include FAQ block (institutional-specific: compliance, scheduling, grant eligibility)

---

### 5.2 Historic Venue Restoration

**URL:** `/institutional-refinishing/historic-venue-restoration/`
**File:** `pages/institutional-historic-venue.md`
**SEO Title:** `Historic Venue Wood Restoration St. Louis | Sue Wheeler`
**Meta Description:** `Wood restoration for historic concert halls and performance venues in St. Louis. The Sheldon Concert Hall, $11M renovation. EPA Certified. Sue Wheeler. Call today.`
**ICP:** S5
**Source:** Asset-1 §4; Asset-3 §1–3 (NPS standards compliance)

**Key Messages:** The Sheldon anchor, NPS standards compliance, EPA Certified
**Internal Links → (out):** `/institutional-refinishing/` (parent), `/historic-preservation/secretary-of-interior-standards/`, `/portfolio/institutional/`, Blog E1, Blog E2, `/contact/`
**CTA:** "Call for a Historic Venue Consult: (314) 367-6054"
**Notes:** Lead with The Sheldon Concert Hall — $11M renovation, landmark status. Full sentence: "We refinished the doors of The Sheldon Concert Hall during its $11M renovation." Standards compliance angle for grant-funded projects.

---

### 5.3 Church & Religious Facility Woodwork

**URL:** `/institutional-refinishing/church-and-religious-facility-woodwork/`
**File:** `pages/institutional-church.md`
**SEO Title:** `Church Wood Refinishing St. Louis | Pews, Chancel Rails, Doors`
**Meta Description:** `Pew, chancel rail, door, and wainscoting refinishing for St. Louis churches and religious facilities. Grant-eligible. EPA Certified. Sue Wheeler. Call today.`
**ICP:** S5
**Source:** Asset-1 §4 (church copy blocks); Asset-3 §5 (grant-fundable framing)

**Key Messages:** Reverence for sacred spaces, grant-fundable work, budget cycle language
**Internal Links → (out):** `/institutional-refinishing/` (parent), `/historic-preservation/historic-tax-credits/`, Blog E3, Blog E5 (grant-funded), `/portfolio/institutional/`, `/contact/`
**CTA:** "Call for a Church Wood Assessment: (314) 367-6054"
**Notes:** Pews, chancel rails, doors, wainscoting; "honors the space" tone; nonprofit eligibility for historic tax credits (post Aug 2024 rule change); grant-fundable framing from Asset-3

---

### 5.4 University & Public Building Woodwork

**URL:** `/institutional-refinishing/university-and-public-building-woodwork/`
**File:** `pages/institutional-university.md`
**SEO Title:** `University Wood Refinishing St. Louis | WashU, SLU, Public Buildings`
**Meta Description:** `Casework, paneling, and library woodwork refinishing for St. Louis universities and public buildings. EPA Certified. NPS Standards. Sue Wheeler. Call today.`
**ICP:** S5
**Source:** Asset-1 §4; Asset-3 §1–3 (standards compliance)

**Key Messages:** EPA Certified, NPS standards compliance, GC/architect referral network
**Internal Links → (out):** `/institutional-refinishing/` (parent), `/historic-preservation/secretary-of-interior-standards/`, Blog E4, Blog E2, `/portfolio/institutional/`, `/contact/`
**CTA:** "Call for a Facilities Consult: (314) 367-6054"
**Notes:** WashU, SLU, Maryville reference; casework, paneling, library reading room woodwork; EPA cert required for grant-funded and public building work; GC referral angle

---


## SECTION 6: HISTORIC PRESERVATION HUB + SPOKES

### 6.1 Historic Preservation Hub

**URL:** `/historic-preservation/`
**File:** `pages/hub-preservation.md`
**SEO Title:** `Historic Wood Preservation St. Louis | Tax Credits | Sue Wheeler`
**Meta Description:** `Historic preservation wood refinishing in St. Louis. Hand-strip method aligns with NPS Standards. Tax credit guidance. EPA Certified. Sue Wheeler, 36 years. Free consult.`
**ICP:** S2, S1, S5
**Source:** Asset-3 §1–4 (full strategic overview + pipeline); Asset-4 §1–2

**Key Messages:**
1. Hand-strip method is what NPS recommends — dipping may disqualify you
2. Combined federal + Missouri tax credits up to 45–55% back
3. EPA Certified Lead Renovator — required for compliant rehab work

**Internal Links → (out):**
- `/historic-preservation/historic-tax-credits/`
- `/historic-preservation/secretary-of-interior-standards/`
- `/historic-preservation/st-louis-historic-districts/`
- All City Zone neighborhood pages (CWE, Lafayette Sq, Compton Heights, Tower Grove, Shaw, Maplewood)
- `/institutional-refinishing/`
- Blog: all Category D posts
- `/contact/`

**CTA:** "Free Preservation Consult: (314) 367-6054"

**Notes:**
- Asset-3 §1 has the full strategic framing — this is the competitive moat
- Hub intro: why preservation matters, how Sue's method aligns with standards, overview of tax credits
- Content-to-conversion pipeline from Asset-3 §1.4 shapes the page structure
- This page should feel authoritative and educational — not salesy

---

### 6.2 Historic Tax Credits Guide

**URL:** `/historic-preservation/historic-tax-credits/`
**File:** `pages/preservation-tax-credits.md`
**SEO Title:** `Historic Tax Credits St. Louis | Wood Refinishing Guide | Sue Wheeler`
**Meta Description:** `Federal 20% + Missouri 25–35% historic tax credits can return up to 55% of qualifying wood refinishing costs. Which STL homes qualify? Sue Wheeler explains.`
**ICP:** S2, S1, S5
**Source:** Asset-3 §2–5 (full tax credit mechanics, qualifying criteria, STL districts, application process)

**Key Messages:** Federal 20% + Missouri 25–35% = up to 55% back; qualifying criteria; STL districts
**Internal Links → (out):** `/historic-preservation/` (parent), `/historic-preservation/st-louis-historic-districts/`, `/historic-preservation/secretary-of-interior-standards/`, All City Zone neighborhood pages, Blog D1, Blog D3, Blog D4, `/contact/`
**CTA:** "Call to Discuss Your Qualifying Project: (314) 367-6054"
**Notes:** Deepest content page on the site — go long (1,500+ words). Asset-3 §2–5 has all the mechanics. Include: the math (45–55% combined), qualifying project types, QRE definition, STL district list, application timeline, link to MO DED. This page is the competitive moat.

---

### 6.3 Secretary of Interior's Standards & Wood Refinishing

**URL:** `/historic-preservation/secretary-of-interior-standards/`
**File:** `pages/preservation-nps-standards.md`
**SEO Title:** `NPS Standards & Wood Refinishing St. Louis | Sue Wheeler`
**Meta Description:** `What the National Park Service says about stripping historic wood — and why hand-stripping is compliant while dipping is not. Sue Wheeler, EPA Certified. St. Louis.`
**ICP:** S5, S2
**Source:** Asset-3 §1.3 (NPS standards analysis — direct citations); Asset-3 §3

**Key Messages:** NPS recommends gentlest method = hand-strip; dipping tensions NPS guidance; EPA Certified
**Internal Links → (out):** `/historic-preservation/` (parent), `/historic-preservation/historic-tax-credits/`, `/historic-preservation/st-louis-historic-districts/`, `/institutional-refinishing/`, Blog D2, Blog D6 (dipping and tax credit disqualification), `/contact/`
**CTA:** "Free Estimate + Standards Consultation: (314) 367-6054"
**Notes:** Cite NPS directly (Asset-3 has the exact language). Technical/authoritative tone. Explain what qualifies as a Qualified Rehabilitation Expenditure (QRE). Why dip-stripping creates compliance risk. This is the page preservation architects and institutional facilities managers read.

---

### 6.4 St. Louis Historic Districts Guide

**URL:** `/historic-preservation/st-louis-historic-districts/`
**File:** `pages/preservation-stl-districts.md`
**SEO Title:** `St. Louis Historic Districts Guide | Wood Refinishing | Sue Wheeler`
**Meta Description:** `Which St. Louis neighborhoods qualify for historic tax credits? Complete guide to certified and local historic districts — from Sue Wheeler, wood refinishing specialist.`
**ICP:** S2, S1, S3
**Source:** Asset-3 §4–5 (district classifications, eligibility); Asset-4 §1 (neighborhood table with historic status)

**Key Messages:** District status = tax credit eligibility; which STL neighborhoods qualify; Sue's expertise in these areas
**Internal Links → (out):** `/historic-preservation/` (parent), `/historic-preservation/historic-tax-credits/`, All neighborhood pages (CWE, Lafayette Sq, Compton Heights, Tower Grove, Shaw, Maplewood), `/institutional-refinishing/`, Blog D5, Blog D8, `/contact/`
**CTA:** "Free Estimate for Qualifying Properties: (314) 367-6054"
**Notes:** List all certified and local historic districts; explain difference between certified historic district and local historic district; which qualify for federal credit vs. state only; link to each neighborhood page; this drives hyperlocal SEO

---

## SECTION 7: THEMATIC HUBS

### 7.1 Portfolio

**URL:** `/portfolio/`
**File:** `pages/portfolio.md`
**SEO Title:** `Project Portfolio | Wood Refinishing by Sue Wheeler, St. Louis`
**Meta Description:** `Before-and-after photos of wood refinishing projects in St. Louis — kitchens, doors, staircases, built-ins, commercial, and institutional spaces. Sue Wheeler.`
**ICP:** All
**Source:** Asset-4 §1 (portfolio page purpose); Asset-2 §1B (visual trust signals)

**Key Messages:** Visual proof of work, before/after transformation, breadth of scope
**Internal Links → (out):** `/portfolio/residential/`, `/portfolio/commercial/`, `/portfolio/institutional/`, `/portfolio/before-and-after/`, relevant service hub pages, Blog case studies, `/reviews/`, `/contact/`
**CTA:** "See a Category → Get an Estimate" → `/contact/`
**Notes:** Hub page — organize by 4 categories. Intro copy brief. Navigation cards with category thumbnails. Match testimonial quotes near relevant gallery sections.

---

### 7.2 Residential Portfolio

**URL:** `/portfolio/residential/`
**File:** `pages/portfolio-residential.md`
**SEO Title:** `Residential Portfolio | Wood Refinishing by Sue Wheeler`
**Meta Description:** `Residential wood refinishing portfolio — cabinets, doors, staircases, and built-ins. Before-and-after projects from St. Louis homes. Sue Wheeler.`
**ICP:** S1, S2
**Source:** Asset-4 §1; Asset-2 §1B

**Key Messages:** Before/after visual proof, breadth of residential work
**Internal Links → (out):** `/portfolio/` (parent), relevant residential service hubs, `/contact/`
**CTA:** "Request Similar Work: (314) 367-6054"
**Notes:** Cabinets, doors, staircases, built-ins organized by type; each photo group links to corresponding service page; CTA after each section

---

### 7.3 Commercial Portfolio

**URL:** `/portfolio/commercial/`
**File:** `pages/portfolio-commercial.md`
**SEO Title:** `Commercial Portfolio | Wood Refinishing by Sue Wheeler`
**Meta Description:** `Commercial wood refinishing portfolio — bar tops, restaurant tabletops, hotel lobby woodwork. St. Louis projects. Sue Wheeler, EPA Certified.`
**ICP:** S4
**Source:** Asset-4 §1; Asset-1 §3

**Key Messages:** Commercial-grade results, before/after, scope of commercial work
**Internal Links → (out):** `/portfolio/` (parent), `/commercial-and-hospitality-refinishing/`, `/contact/`
**CTA:** "Call for a Commercial Consult: (314) 367-6054"
**Notes:** Bar tops, tabletops, restaurant woodwork; "back in service by Monday" angle in captions

---

### 7.4 Institutional Portfolio

**URL:** `/portfolio/institutional/`
**File:** `pages/portfolio-institutional.md`
**SEO Title:** `Institutional Portfolio | Wood Refinishing by Sue Wheeler`
**Meta Description:** `Institutional wood refinishing portfolio — The Sheldon Concert Hall, churches, universities. St. Louis landmark projects. Sue Wheeler, EPA Certified.`
**ICP:** S5
**Source:** Asset-4 §1; Asset-1 §4

**Key Messages:** The Sheldon anchor, landmark project experience, institutional scope
**Internal Links → (out):** `/portfolio/` (parent), `/institutional-refinishing/`, Blog E1 (The Sheldon), `/contact/`
**CTA:** "Call for an Institutional Inquiry: (314) 367-6054"
**Notes:** Lead with The Sheldon Concert Hall. Include churches, universities. This page is the proof-of-institutional-capability page.

---

### 7.5 Before & After Gallery

**URL:** `/portfolio/before-and-after/`
**File:** `pages/portfolio-before-after.md`
**SEO Title:** `Before & After | Wood Refinishing by Sue Wheeler, St. Louis`
**Meta Description:** `Before-and-after wood refinishing photos from St. Louis homes and businesses. Cabinets, staircases, doors, bar tops, built-ins. Sue Wheeler. Free estimate.`
**ICP:** All
**Source:** Asset-4 §1 (high-conversion trust page); Asset-2 §1B (before/after as emotional permission)

**Key Messages:** Transformation proof, cost comparison vs. replacement, visual impact
**Internal Links → (out):** `/portfolio/` (parent), relevant service hubs per photo, `/reviews/`, `/contact/`
**CTA:** "Get a Free Estimate: (314) 367-6054"
**Notes:** Highest-conversion portfolio page — pair each transformation with a brief caption including service type and a one-line cost comparison vs. replacement where relevant. Drive hard to `/contact/`.

---

### 7.6 Reviews & Testimonials

**URL:** `/reviews/`
**File:** `pages/reviews.md`
**SEO Title:** `Reviews | Wood Refinishing by Sue Wheeler, St. Louis`
**Meta Description:** `Customer reviews for Wood Refinishing by Sue Wheeler. BBB A+ Accredited, HomeAdvisor Top Rated, Google. 36 years of happy clients in St. Louis.`
**ICP:** All (consideration stage)
**Source:** Asset-4 §2 (testimonial placement rules); Asset-2 §1B (trust signals)

**Key Messages:** BBB A+, HomeAdvisor, Google reviews, direct quotes by service type
**Internal Links → (out):** `/portfolio/before-and-after/`, relevant service hub pages (match quote to page), `/contact/`
**CTA:** "Call Sue for a Free Estimate: (314) 367-6054"
**Notes:** Aggregate: BBB A+, HomeAdvisor, Google. Direct quotes organized by service type (cabinet quote, staircase quote, door quote, etc.). Match quotes to service context — don't just list generic reviews.

---


## SECTION 8: NEIGHBORHOOD PAGES

**Template file:** `pages/neighborhood-template.md`

All 15 neighborhood pages follow the same 5-section structure (from Asset-4 §1):
1. Intro — housing stock and woodwork character of this neighborhood
2. Most common services requested here (matched to neighborhood → service hub map in Asset-4 §5)
3. Historic status / tax credit eligibility if applicable
4. A testimonial or project mention from that area
5. Call to action

Each neighborhood page links to: relevant service hubs, Historic Preservation hub (if applicable), Tax Credits guide (if applicable), Portfolio, Reviews, 1–2 blog posts, and Contact.

---

### 8.1 Central West End

**URL:** `/neighborhoods/central-west-end/`
**File:** `pages/nbhd-central-west-end.md`
**SEO Title:** `Wood Refinishing — Central West End St. Louis | Sue Wheeler`
**Meta Description:** `Wood refinishing in St. Louis's Central West End. Pre-1900 architecture, pocket doors, original millwork. EPA Certified. Historic district eligible. Sue Wheeler.`
**ICP:** S2, S1
**Historic Status:** Yes — certified local historic district. Federal 20% + Missouri 25–35% credits available.
**Primary Services:** Door Refinishing (pocket doors), Staircase Refinishing, Built-Ins & Millwork
**Key Angle:** Pre-1900 architecture, pocket doors, original millwork, NR district
**Internal Links → (out):** `/door-refinishing/pocket-door-refinishing/`, `/staircase-refinishing/`, `/built-ins-and-millwork-refinishing/`, `/historic-preservation/`, `/historic-preservation/historic-tax-credits/`, `/portfolio/before-and-after/`, Blog B1, `/contact/`

---

### 8.2 Lafayette Square

**URL:** `/neighborhoods/lafayette-square/`
**File:** `pages/nbhd-lafayette-square.md`
**SEO Title:** `Wood Refinishing — Lafayette Square St. Louis | Sue Wheeler`
**Meta Description:** `Wood refinishing in Lafayette Square. Victorian homes, ornate staircases, pocket doors, front door curb appeal. Local historic district. EPA Certified. Sue Wheeler.`
**ICP:** S2, S1
**Historic Status:** Yes — local historic district. Tax credit eligible.
**Primary Services:** Door Refinishing (pocket doors, front doors), Staircase Refinishing
**Key Angle:** Victorian homes, ornate staircases, pocket doors, curb appeal
**Internal Links → (out):** `/door-refinishing/pocket-door-refinishing/`, `/door-refinishing/front-door-refinishing/`, `/staircase-refinishing/`, `/historic-preservation/historic-tax-credits/`, Blog B2, `/contact/`

---

### 8.3 Compton Heights

**URL:** `/neighborhoods/compton-heights/`
**File:** `pages/nbhd-compton-heights.md`
**SEO Title:** `Wood Refinishing — Compton Heights St. Louis | Sue Wheeler`
**Meta Description:** `Wood refinishing in Compton Heights — Craftsman and Colonial Revival homes, built-in hutches, bookcases, and staircases. Certified local historic district. Sue Wheeler.`
**ICP:** S2, S1
**Historic Status:** Yes — certified local historic district.
**Primary Services:** Built-Ins & Millwork (hutches, bookcases), Staircase Refinishing
**Key Angle:** Craftsman and Colonial Revival, built-in hutches and bookcases
**Internal Links → (out):** `/built-ins-and-millwork-refinishing/`, `/staircase-refinishing/`, `/historic-preservation/`, `/historic-preservation/historic-tax-credits/`, Blog B3, `/contact/`

---

### 8.4 Tower Grove

**URL:** `/neighborhoods/tower-grove/`
**File:** `pages/nbhd-tower-grove.md`
**SEO Title:** `Wood Refinishing — Tower Grove St. Louis | Sue Wheeler`
**Meta Description:** `Wood refinishing in Tower Grove — mixed Victorian and bungalow housing, wainscoting, chair rails, original doors. Tower Grove East local historic district. Sue Wheeler.`
**ICP:** S2, S1
**Historic Status:** Yes — Tower Grove East local historic district.
**Primary Services:** Door Refinishing, Room Millwork (wainscoting, chair rail)
**Key Angle:** Mixed Victorian and bungalow, wainscoting, chair rails
**Internal Links → (out):** `/door-refinishing/`, `/built-ins-and-millwork-refinishing/room-millwork/`, `/historic-preservation/`, Blog: tower grove content, `/contact/`

---

### 8.5 Shaw

**URL:** `/neighborhoods/shaw/`
**File:** `pages/nbhd-shaw.md`
**SEO Title:** `Wood Refinishing — Shaw St. Louis | Sue Wheeler`
**Meta Description:** `Wood refinishing in Shaw — brick row houses, original woodwork, built-in hutches. Shaw Neighborhood certified local historic district. Sue Wheeler, EPA Certified.`
**ICP:** S2, S1
**Historic Status:** Yes — Shaw Neighborhood certified local historic district.
**Primary Services:** Built-Ins & Millwork, Door Refinishing
**Key Angle:** Brick row houses, original woodwork, built-in hutches
**Internal Links → (out):** `/built-ins-and-millwork-refinishing/`, `/door-refinishing/`, `/historic-preservation/historic-tax-credits/`, Blog B8, `/contact/`

---

### 8.6 Maplewood

**URL:** `/neighborhoods/maplewood/`
**File:** `pages/nbhd-maplewood.md`
**SEO Title:** `Wood Refinishing — Maplewood MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in Maplewood — Craftsman bungalows, 1920s–1940s housing stock, staircase restoration. Some NR contributing structures. Sue Wheeler, EPA Certified.`
**ICP:** S2, S3
**Historic Status:** Partial — some NR contributing structures.
**Primary Services:** Staircase Refinishing, Kitchen Cabinets, Door Refinishing
**Key Angle:** Craftsman bungalows, 1920s–40s housing, staircase restoration
**Internal Links → (out):** `/staircase-refinishing/`, `/kitchen-cabinet-refinishing/`, `/door-refinishing/`, `/historic-preservation/`, Blog: Maplewood investor angle, `/contact/`

---

### 8.7 Clayton

**URL:** `/neighborhoods/clayton/`
**File:** `pages/nbhd-clayton.md`
**SEO Title:** `Wood Refinishing — Clayton MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in Clayton — upscale residential and commercial, high-end kitchen cabinet refinishing, mixed era housing. Some NR contributing structures. Sue Wheeler.`
**ICP:** S1, S4
**Historic Status:** Some NR contributing structures.
**Primary Services:** Kitchen Cabinets, Door Refinishing; Commercial (Clayton commercial district)
**Key Angle:** Upscale residential + commercial crossover, high-end kitchens
**Internal Links → (out):** `/kitchen-cabinet-refinishing/`, `/door-refinishing/`, `/commercial-and-hospitality-refinishing/`, Blog B7, `/contact/`

---

### 8.8 University City

**URL:** `/neighborhoods/university-city/`
**File:** `pages/nbhd-university-city.md`
**SEO Title:** `Wood Refinishing — University City MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in University City — Tudor and Colonial Revival homes, deep original millwork, staircase restoration. Some local historic districts. Sue Wheeler.`
**ICP:** S2, S1
**Historic Status:** Some local historic districts.
**Primary Services:** Staircase Refinishing, Built-Ins, Door Refinishing
**Key Angle:** Tudor, Colonial Revival, deep original millwork
**Internal Links → (out):** `/staircase-refinishing/`, `/built-ins-and-millwork-refinishing/`, `/door-refinishing/`, Blog: U-City new homeowner, `/contact/`

---

### 8.9 Webster Groves

**URL:** `/neighborhoods/webster-groves/`
**File:** `pages/nbhd-webster-groves.md`
**SEO Title:** `Wood Refinishing — Webster Groves MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in Webster Groves — Victorian and Craftsman homes, active preservation community, staircase and cabinet restoration. Sue Wheeler, EPA Certified.`
**ICP:** S1, S2
**Historic Status:** Some local historic districts.
**Primary Services:** Staircase Refinishing, Built-Ins, Kitchen Cabinets
**Key Angle:** Victorian and Craftsman, active preservation community
**Internal Links → (out):** `/staircase-refinishing/`, `/built-ins-and-millwork-refinishing/`, `/kitchen-cabinet-refinishing/`, Blog B4, `/contact/`

---

### 8.10 Kirkwood

**URL:** `/neighborhoods/kirkwood/`
**File:** `pages/nbhd-kirkwood.md`
**SEO Title:** `Wood Refinishing — Kirkwood MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in Kirkwood — one of St. Louis's oldest suburbs, original woodwork widely intact, staircase and cabinet restoration. Sue Wheeler, 36 years.`
**ICP:** S1, S2
**Historic Status:** Some NR contributing structures.
**Primary Services:** Staircase Refinishing, Kitchen Cabinets, Door Refinishing
**Key Angle:** One of STL's oldest suburbs, original woodwork widely intact
**Internal Links → (out):** `/staircase-refinishing/`, `/kitchen-cabinet-refinishing/`, `/door-refinishing/`, Blog B5, `/contact/`

---

### 8.11 Frontenac

**URL:** `/neighborhoods/frontenac/`
**File:** `pages/nbhd-frontenac.md`
**SEO Title:** `Wood Refinishing — Frontenac MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in Frontenac — ultra-premium custom and estate homes, high-value kitchen and millwork projects. Sue Wheeler, 36 years, EPA Certified.`
**ICP:** S1 (ultra-premium)
**Historic Status:** Low historic designation.
**Primary Services:** Kitchen Cabinets, Room Millwork, Built-Ins
**Key Angle:** Ultra-premium estates, high-budget projects, craftsmanship matches home value
**Internal Links → (out):** `/kitchen-cabinet-refinishing/`, `/built-ins-and-millwork-refinishing/room-millwork/`, `/built-ins-and-millwork-refinishing/`, `/contact/`

---

### 8.12 Ladue

**URL:** `/neighborhoods/ladue/`
**File:** `pages/nbhd-ladue.md`
**SEO Title:** `Wood Refinishing — Ladue MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in Ladue — estate homes, $200K+ households, kitchen cabinets, millwork, and staircase restoration by St. Louis's most experienced specialist.`
**ICP:** S1 (ultra-premium)
**Historic Status:** Low historic designation.
**Primary Services:** Kitchen Cabinets, Room Millwork, Staircase Refinishing
**Key Angle:** $200K+ HH income estates, budget matches craftsmanship expectations
**Internal Links → (out):** `/kitchen-cabinet-refinishing/`, `/built-ins-and-millwork-refinishing/room-millwork/`, `/staircase-refinishing/`, Blog B6, `/contact/`

---

### 8.13 Town & Country

**URL:** `/neighborhoods/town-and-country/`
**File:** `pages/nbhd-town-and-country.md`
**SEO Title:** `Wood Refinishing — Town & Country MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in Town & Country — estate residential, premium millwork, kitchen and built-in restoration. Discretionary spend, craftsmanship focus. Sue Wheeler.`
**ICP:** S1 (ultra-premium)
**Historic Status:** Low historic designation.
**Primary Services:** Room Millwork, Kitchen Cabinets, Built-Ins
**Key Angle:** Estate residential, discretionary premium spend
**Internal Links → (out):** `/built-ins-and-millwork-refinishing/room-millwork/`, `/kitchen-cabinet-refinishing/`, `/built-ins-and-millwork-refinishing/`, Blog B6, `/contact/`

---

### 8.14 Chesterfield

**URL:** `/neighborhoods/chesterfield/`
**File:** `pages/nbhd-chesterfield.md`
**SEO Title:** `Wood Refinishing — Chesterfield MO | Sue Wheeler`
**Meta Description:** `Wood refinishing in Chesterfield — higher-end suburban homes with wood accents, kitchen cabinet refinishing. West County service area. Sue Wheeler, EPA Certified.`
**ICP:** S1
**Historic Status:** Low.
**Primary Services:** Kitchen Cabinets, Door Refinishing
**Key Angle:** West County suburban, higher-end homes with wood accents
**Internal Links → (out):** `/kitchen-cabinet-refinishing/`, `/door-refinishing/`, Blog B9, `/contact/`

---

### 8.15 Ballwin

**URL:** `/neighborhoods/ballwin/`
**File:** `pages/nbhd-ballwin.md`
**SEO Title:** `Wood Refinishing — Ballwin MO | Sue Wheeler`
**Meta Description:** `Kitchen cabinet and door refinishing in Ballwin MO. Family-oriented suburban area, West County service. Sue Wheeler, EPA Certified, BBB A+. Free estimate.`
**ICP:** S1
**Historic Status:** Low.
**Primary Services:** Kitchen Cabinets, Door Refinishing
**Key Angle:** Family suburban, kitchen cabinet focus
**Internal Links → (out):** `/kitchen-cabinet-refinishing/`, `/door-refinishing/`, Blog B9, `/contact/`

---


## SECTION 9: UTILITY PAGES

### 9.1 Privacy Policy

**URL:** `/privacy-policy/`
**File:** `pages/privacy-policy.md`
**SEO Title:** `Privacy Policy | Wood Refinishing by Sue Wheeler`
**Meta Description:** `Privacy policy for suewheelerstl.com — how we handle contact form submissions and analytics data.`
**ICP:** N/A
**Source:** Standard legal template — no T2 asset content needed

**Key Messages:** Legal compliance only
**Internal Links → (out):** `/contact/`, `/`
**CTA:** None (legal page)
**Notes:** Standard privacy policy covering: contact form data handling, analytics (Google Analytics or Plausible), cookies, no data selling. Generate from standard template. Keep brief.

---

### 9.2 HTML Sitemap

**URL:** `/sitemap/`
**File:** `pages/sitemap-page.md`
**SEO Title:** `Sitemap | Wood Refinishing by Sue Wheeler, St. Louis`
**Meta Description:** `Complete sitemap for suewheelerstl.com — all pages for wood refinishing services in St. Louis.`
**ICP:** N/A — minor SEO benefit, navigation aid

**Key Messages:** Navigation utility
**Internal Links → (out):** All 60 pages in organized list
**CTA:** None (navigation page)
**Notes:** User-facing HTML sitemap listing all pages grouped by section. Auto-generate from content index. Minor SEO benefit.

---

## SECTION 10: PRIORITY 1 BLOG POST OUTLINES

**Output location:** `content/blog/outlines/`
**Source:** Asset-4, Section 4 (all 50 post ideas with keywords, word counts, ICP, and priority tiers)

These 15 posts are Priority 1 — highest SEO value + conversion potential. Each outline file contains: title, target keyword, word count target, ICP, source assets to draw from, suggested section headers, key points to hit, internal links to include, and CTA placement.

---

### Blog A1 — Hand-Strip vs. Dip

**File:** `blog/outlines/A1-hand-strip-vs-dip.md`
**Title:** "Hand-Strip vs. Dip: Why the Method Matters for Your Wood"
**Keyword:** hand strip vs dip wood refinishing
**Word Count:** 1,200
**ICP:** All homeowners
**Source:** Asset-3 §1.3 (NPS standards language); Asset-2 §1B (messaging on dipping)
**Priority:** P1 — foundation post, anchors method credibility
**Internal Links to include:** `/kitchen-cabinet-refinishing/`, `/staircase-refinishing/`, `/historic-preservation/secretary-of-interior-standards/`, `/faq/`, `/contact/`

---

### Blog A3 — What Is Wood Refinishing

**File:** `blog/outlines/A3-what-is-wood-refinishing.md`
**Title:** "What Is Wood Refinishing? (And How It Differs from Repainting)"
**Keyword:** what is wood refinishing
**Word Count:** 800
**ICP:** All — top of funnel
**Source:** Asset-2 §1B (general educational framing); Asset-4 §4 (post spec)
**Priority:** P1 — top-of-funnel SEO
**Internal Links:** All residential hub pages, `/faq/`, `/contact/`

---

### Blog A5 — How Long Does It Last

**File:** `blog/outlines/A5-how-long-does-wood-refinishing-last.md`
**Title:** "How Long Does Wood Refinishing Last? The Real Answer"
**Keyword:** how long does wood refinishing last
**Word Count:** 900
**ICP:** All homeowners
**Source:** Asset-2 §1B; finishes knowledge (polyurethane durability, maintenance)
**Priority:** P1 — high search volume, FAQ behavior
**Internal Links:** `/faq/`, `/kitchen-cabinet-refinishing/`, `/door-refinishing/`, `/contact/`

---

### Blog B1 — Central West End

**File:** `blog/outlines/B1-central-west-end.md`
**Title:** "Central West End Homes: Original Woodwork Worth Preserving"
**Keyword:** wood refinishing Central West End St. Louis
**Word Count:** 900
**ICP:** S2, S1 — CWE homeowners
**Source:** Asset-2 §2B (S2 messaging); neighborhood page data from Asset-4 §1
**Priority:** P1 — highest-value neighborhood, historic district
**Internal Links:** `/neighborhoods/central-west-end/`, `/door-refinishing/pocket-door-refinishing/`, `/historic-preservation/`, `/contact/`

---

### Blog B2 — Lafayette Square Pocket Doors

**File:** `blog/outlines/B2-lafayette-square-pocket-doors.md`
**Title:** "Lafayette Square's Pocket Doors: What Makes Them Special and How to Restore Them"
**Keyword:** pocket door refinishing Lafayette Square St. Louis
**Word Count:** 900
**ICP:** S2 — historic home buyers
**Source:** Asset-2 §2B; Asset-4 §1 (Lafayette Square neighborhood entry)
**Priority:** P1 — specific + high conversion
**Internal Links:** `/neighborhoods/lafayette-square/`, `/door-refinishing/pocket-door-refinishing/`, `/historic-preservation/`, `/contact/`

---

### Blog C1 — Restaurant Bar Top Maintenance

**File:** `blog/outlines/C1-restaurant-bar-top.md`
**Title:** "When Should a Restaurant Refinish Its Bar Top? A Maintenance Guide"
**Keyword:** restaurant bar top refinishing St. Louis
**Word Count:** 1,000
**ICP:** S4 — restaurant/bar operators
**Source:** Asset-1 §3 (bar top copy); Asset-4 §4
**Priority:** P1 — opens commercial category
**Internal Links:** `/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing/`, `/commercial-and-hospitality-refinishing/commercial-maintenance-contracts/`, `/contact/`

---

### Blog C2 — Commercial Maintenance Contracts

**File:** `blog/outlines/C2-commercial-maintenance-contracts.md`
**Title:** "How Commercial Wood Maintenance Contracts Save Money Over Time"
**Keyword:** commercial wood maintenance contract
**Word Count:** 1,000
**ICP:** S4 — restaurant/bar/hotel operators
**Source:** Asset-1 §3 (maintenance contract section)
**Priority:** P1 — revenue-generating content
**Internal Links:** `/commercial-and-hospitality-refinishing/commercial-maintenance-contracts/`, `/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing/`, `/contact/`

---

### Blog D1 — Historic Tax Credits STL

**File:** `blog/outlines/D1-historic-tax-credits-stl.md`
**Title:** "Historic Tax Credits in St. Louis: Can They Help Pay for Wood Refinishing?"
**Keyword:** historic tax credits St. Louis home
**Word Count:** 1,500
**ICP:** S2, S1 — historic homeowners
**Source:** Asset-3 §2–5 (full tax credit mechanics — all here)
**Priority:** P1 — best competitive moat content
**Internal Links:** `/historic-preservation/historic-tax-credits/`, `/historic-preservation/st-louis-historic-districts/`, all City Zone neighborhood pages, `/contact/`

---

### Blog D2 — NPS Standards & Wood

**File:** `blog/outlines/D2-nps-standards-wood-refinishing.md`
**Title:** "What the National Park Service Says About Stripping Historic Wood"
**Keyword:** secretary of interior standards wood refinishing
**Word Count:** 1,200
**ICP:** S5, S2 — preservation architects, historic homeowners
**Source:** Asset-3 §1.3 (NPS standards language — cite directly)
**Priority:** P1 — anchors preservation authority
**Internal Links:** `/historic-preservation/secretary-of-interior-standards/`, `/historic-preservation/historic-tax-credits/`, `/institutional-refinishing/`, `/contact/`

---

### Blog D3 — Missouri State Tax Credit

**File:** `blog/outlines/D3-missouri-historic-tax-credit.md`
**Title:** "Missouri's Historic Tax Credit: How the 25% State Credit Works"
**Keyword:** Missouri historic tax credit program
**Word Count:** 1,200
**ICP:** S2, S1, S3 — historic homeowners, investors
**Source:** Asset-3 §2–3 (Missouri DED program details)
**Priority:** P1 — high dollar value for readers
**Internal Links:** `/historic-preservation/historic-tax-credits/`, `/historic-preservation/st-louis-historic-districts/`, `/contact/`

---

### Blog D5 — STL Historic Districts

**File:** `blog/outlines/D5-stl-historic-districts.md`
**Title:** "St. Louis Historic Districts: Which Neighborhoods Qualify for Tax Credits?"
**Keyword:** St. Louis historic districts tax credits
**Word Count:** 1,000
**ICP:** S2, S1, S3 — historic home buyers, investors
**Source:** Asset-3 §4–5; Asset-4 §1 (neighborhood historic status table)
**Priority:** P1 — hyperlocal + tax credit
**Internal Links:** `/historic-preservation/st-louis-historic-districts/`, all City Zone neighborhood pages, `/historic-preservation/historic-tax-credits/`, `/contact/`

---

### Blog E1 — The Sheldon Concert Hall

**File:** `blog/outlines/E1-sheldon-concert-hall.md`
**Title:** "The Sheldon Concert Hall: Refinishing the Doors of a City Landmark"
**Keyword:** Sheldon Concert Hall wood restoration
**Word Count:** 1,200
**ICP:** All segments (landmark credibility story)
**Source:** Asset-1 §1–2 (The Sheldon references); Asset-4 §4
**Priority:** P1 — landmark credibility anchor
**Internal Links:** `/institutional-refinishing/historic-venue-restoration/`, `/institutional-refinishing/`, `/portfolio/institutional/`, `/contact/`

---

### Blog E2 — Institutional Specialist

**File:** `blog/outlines/E2-institutional-specialist.md`
**Title:** "Why Institutional Wood Refinishing Requires a Specialist, Not a Generalist"
**Keyword:** institutional wood refinishing St. Louis
**Word Count:** 1,000
**ICP:** S5 — facilities managers, architects
**Source:** Asset-1 §1, §4 (institutional positioning)
**Priority:** P1 — commercial/institutional credibility
**Internal Links:** `/institutional-refinishing/`, `/historic-preservation/secretary-of-interior-standards/`, `/portfolio/institutional/`, Blog E1, `/contact/`

---

### Blog F2 — Staircase Refinishing Cost

**File:** `blog/outlines/F2-staircase-refinishing-cost.md`
**Title:** "How Much Does Staircase Refinishing Cost in St. Louis?"
**Keyword:** staircase refinishing cost St. Louis
**Word Count:** 1,000
**ICP:** S1 — homeowners researching budget
**Source:** Asset-2 §1B (cost comparison, HomeAdvisor range $321–$1,255); Asset-4 §4
**Priority:** P1 — high-intent research query
**Internal Links:** `/staircase-refinishing/`, `/staircase-refinishing/stair-treads-and-risers/`, `/contact/`

---

### Blog F3 — Lead Paint Pre-1978 Homes

**File:** `blog/outlines/F3-lead-paint-pre-1978.md`
**Title:** "Lead Paint in St. Louis Homes: What You Need to Know Before Refinishing"
**Keyword:** lead paint wood refinishing St. Louis
**Word Count:** 1,000
**ICP:** S2, S1 — historic home buyers, all homeowners
**Source:** Asset-2 §1A (89.8% of STL City homes pre-1978 stat); Asset-2 §1B (EPA cert as buying signal)
**Priority:** P1 — safety + EPA cert anchor
**Internal Links:** `/historic-preservation/`, `/about/` (EPA cert), all residential hub pages, `/contact/`

---


---

## CONTENT INDEX QA CHECKLIST

Use this checklist when a page file is written and before dev hands it off.

### Per-Page QA

- [ ] SEO title ≤ 60 characters
- [ ] Meta description ≤ 160 characters
- [ ] H1 is unique (no two pages share the same H1)
- [ ] Phone number (314) 367-6054 appears at least once in body or CTA
- [ ] Free estimate CTA links to `/contact/`
- [ ] All required internal links are present (per this index)
- [ ] Parent hub page link present on all spoke pages
- [ ] EPA Certified Lead Renovator mentioned on all service pages
- [ ] No mention of marine varnish, lacquer, shellac, or tung oil as finish options
- [ ] Polyurethane is the only finish referenced (oil or water-based)
- [ ] "Hand-stripped, never dipped" appears on all hub pages
- [ ] FAQ block present on all hub pages (AI search optimization)
- [ ] Testimonial quote matched to page context (not generic)

### Site-Wide QA

- [ ] All 60 page files exist in `content/pages/`
- [ ] All 15 Priority 1 blog outlines exist in `content/blog/outlines/`
- [ ] No two pages share the same SEO title
- [ ] No two pages share the same meta description
- [ ] Every spoke page links back to its parent hub
- [ ] Every neighborhood page links to Historic Preservation hub (if applicable)
- [ ] The Sheldon Concert Hall mentioned on: Homepage, About, Institutional hub, Historic Venue page, Portfolio/Institutional, About
- [ ] STL Magazine "Perfect Finish" mention on: Homepage, About
- [ ] BBB A+ on: Homepage, About, Contact, Reviews (not scattered everywhere)

### Internal Link Coverage Check

Run this after all pages are written to verify no orphaned pages:

| Hub | Spoke pages linking back? | Blog posts linking in? |
|-----|--------------------------|------------------------|
| Kitchen Cabinets | [ ] | [ ] |
| Door Refinishing | [ ] | [ ] |
| Staircase Refinishing | [ ] | [ ] |
| Built-Ins & Millwork | [ ] | [ ] |
| Commercial | [ ] | [ ] |
| Institutional | [ ] | [ ] |
| Historic Preservation | [ ] | [ ] |

---

*Content Index v1.0 — 2026-03-16*
*All page specs governed by Asset-4 (sitemap + messaging), adapted with copy from Assets 1–3, structured for AI search per Asset-5.*
