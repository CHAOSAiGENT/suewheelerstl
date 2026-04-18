# SEO / AEO Action Items — Sue Wheeler

_Last updated: 2026-04-17_

Items marked ✅ are complete. Items marked 🔴/🟡/🟢 need Sue or Peter action.

---

## 🔴 Critical — Fix Now (Affecting Live Traffic)

### 1. BBB — Update Dead Website URL

The BBB listing currently shows `site.suewheelerstl.com` as the website — that domain is dead (DNS not found). Anyone clicking "Visit Website" on BBB hits a broken page.

**Action:** Log into BBB business portal and update website to `https://suewheelerstl.com`
**Link:** https://www.bbb.org/us/mo/saint-louis/profile/woodworking/wood-refinishing-by-sue-wheeler-0734-110214169
**Login:** https://bbb.org → "For Businesses" → sign in

---

### 2. Address Inconsistency — Must Resolve

BBB and site show different addresses. Google uses Name + Address + Phone to verify a local business — a mismatch across citations hurts local rankings.

| Source           | Address                                   |
| ---------------- | ----------------------------------------- |
| BBB              | 5260 Washington Pl, Saint Louis, MO 63108 |
| Website / schema | 900 S Boyle Ave, St. Louis, MO 63110      |

**Action:** Confirm which address is correct. Then:

- If 900 S Boyle Ave is correct → update BBB to match
- If 5260 Washington Pl is correct → update site schema (homepage `page.tsx`) and BBB contact form

Also: BBB says founded **1988**, site says **1989**. Align these.

---

### 3. Vercel — Add `site.suewheelerstl.com` Redirect

Even after BBB is updated, other old links may still point to `site.suewheelerstl.com`. Set it up as a redirect so it never 404s.

**Action:**

1. Log into Vercel: https://vercel.com/chaosaigent/suewheelerstl/settings/domains
2. Click "Add Domain"
3. Enter `site.suewheelerstl.com`
4. Set it to redirect to `https://suewheelerstl.com`
5. Update DNS at your registrar: add a CNAME for `site` pointing to `cname.vercel-dns.com`

---

## 🟡 High Value — Do This Week

### 4. Google Business Profile — Biggest Untouched Lever

GBP drives the majority of local service business calls. Currently not fully optimized.

**Action:**

1. Log in: https://business.google.com
2. Add all 5 service lines: Door Refinishing, Staircase Refinishing, Kitchen Cabinet Refinishing, Architectural Woodwork Refinishing, Perk Up & Protect
3. Upload 10–15 portfolio photos (before/after if available)
4. Set business hours
5. Enable messaging
6. Add business description (outcome-first, not process-first — e.g. "Your historic St. Louis home's woodwork, restored. Hand-stripped, EPA Certified, 36 years.")
7. Verify the website URL is `https://suewheelerstl.com` (not the old one)

---

### 5. St. Louis Magazine — Find the Right Article

The URL shared (`/design/a-guide-to-furniture-in-st-louis/`) has no mention of Sue Wheeler — it's a general furniture guide. The "Perfect Finish" quote on the site must be from a different article.

**Action:**

- Find the correct article URL at https://www.stlmag.com
- If print-only: find the issue date and article title
- Share with Peter → will update `/press` page with correct citation and link

---

### 6. Facebook — Add Website + Claim Username

The Facebook page exists but likely lacks the website URL and has a long numeric URL instead of a clean username.

**Action:**

1. Log into Facebook page: https://www.facebook.com/p/Wood-Refinishing-by-Sue-Wheeler-100034017228127/
2. Edit page info → add website: `https://suewheelerstl.com`
3. Claim a username (e.g. `@SueWheelerWoodRefinishing`) at https://www.facebook.com/username/
4. Add phone, hours, and service area if not already present

---

### 7. Houzz — Create or Claim Profile

Houzz is where design-conscious St. Louis homeowners search for craftspeople. AI systems pull Houzz profiles into citation answers. A verified profile with portfolio photos is a meaningful backlink (DA 90+).

**Action:**

1. Search for existing profile: https://www.houzz.com/professionals/search?query=sue+wheeler+st+louis
2. If found: claim it at https://www.houzz.com/pro/claim
3. If not: create at https://www.houzz.com/pro/signup
4. Upload portfolio photos, add all services, link to `https://suewheelerstl.com`

---

### 8. Angi (Angie's List) — Claim Listing

Angi is a high-authority local citation source that feeds into AI answers for "best wood refinisher near me" queries.

**Action:**

1. Search for existing profile: https://www.angi.com/companylist/us/mo/saint-louis/wood-refinishing.htm
2. Claim or create at: https://pro.angi.com/
3. Ensure NAP matches site exactly (once address is confirmed per item #2)
4. Add website: `https://suewheelerstl.com`

---

### 9. Yelp — Claim + Respond to Reviews

Yelp profiles are cited by AI systems in local service queries.

**Action:**

1. Search for existing profile: https://www.yelp.com/search?find_desc=wood+refinishing&find_loc=St.+Louis%2C+MO
2. Claim at: https://biz.yelp.com/
3. Add website, hours, services
4. Respond to any existing reviews (even if just a thank-you)

---

## 🟢 Backlinks — Outreach Targets

These require an email or phone call but are high-value, locally relevant links.

### Historic / Preservation Organizations

- **Landmarks Association of St. Louis** — https://landmarks-stl.org — ask to be listed in their contractor resources
- **Missouri Preservation** — https://mopreservation.org — contractor directory
- **Lafayette Square Restoration Committee** — https://lafayettesquare.org — they maintain a vendor list
- **Compton Heights Neighborhood Association** — ask about newsletter or vendor recommendations

### Real Estate

Any St. Louis historic-home real estate agents Sue has referral relationships with — ask them to add a "trusted vendors" page or mention on their site. Target:

- Circa Properties (historic home specialists)
- Dielmann Sotheby's
- Janet McAfee

### Press Pitch — St. Louis Media

Sue has a strong story: 36 years, sole operator, hand-strip specialist for the homes that define St. Louis's historic neighborhoods. Good angles for:

- **St. Louis Post-Dispatch** home improvement section — pitch: "the person who saves the woodwork in St. Louis's oldest homes"
- **St. Louis Magazine** — follow up on the "Perfect Finish" coverage, ask if they'd do a longer feature on Perk Up & Protect (new category, differentiated story)
- **St. Louis Public Radio (KWMU)** — they feature local craftspeople; pitch the EPA certification + old-growth wood preservation angle
- **Houzz editorial** — "Pro Spotlight" features are high-authority backlinks

---

## ✅ Completed (This Session)

| Item                | What Was Done                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `robots.ts`         | Explicit allow for GPTBot, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended, Bingbot; blocks CCBot       |
| `public/llms.txt`   | AI agent context file — services, area, key pages, blog posts                                                   |
| `FAQSchema`         | Moved from "use client" to server component — JSON-LD now in initial HTML across 30 pages                       |
| `BreadcrumbSchema`  | New component, added to 4 Tier 1 service pages                                                                  |
| Homepage schema     | Upgraded to `@graph`: LocalBusiness + WebSite entities, geo, 5-service offer catalog, 8-neighborhood areaServed |
| `sameAs`            | BBB and Facebook URLs added to LocalBusiness entity                                                             |
| Review schema       | 6 testimonials as structured Review objects on `/reviews`                                                       |
| Neighborhood schema | LocalBusiness schema on all 8 neighborhood pages (areaServed scoped per neighborhood)                           |
| 307→301 fix         | `/architectural-woodwork-refinishing` redirect corrected                                                        |
| Sitemap             | Cleaned non-canonical URL, added blog + press pages                                                             |
| Blog                | `/blog` index + 3 cornerstone posts (2,318 lines): dip stripping, lead paint, cost guide                        |
| `/press` page       | BBB A+, St. Louis Magazine recognition, credentials, media enquiry section                                      |
| `tsconfig.json`     | Excluded `training-video/` to fix Vercel build error                                                            |
