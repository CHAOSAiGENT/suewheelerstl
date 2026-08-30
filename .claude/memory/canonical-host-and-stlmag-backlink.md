---
name: canonical-host-and-stlmag-backlink
description: Canonical host is non-www suewheelerstl.com; site.suewheelerstl.com must be 301'd never deleted, because the St. Louis Magazine backlink points at it.
metadata:
  type: project
---

**Canonical host = `https://suewheelerstl.com` (non-www)** — decided 2026-08-29.

Chosen because the codebase already declares non-www everywhere (`layout.tsx` `metadataBase`, `sitemap.ts` `BASE_URL`, `robots.ts` sitemap ref, all JSON-LD `@id`/`url`), making it the zero-churn option. Production, however, redirected the _other_ way — verified live:

```
suewheelerstl.com       -> 307 -> www.suewheelerstl.com
www.suewheelerstl.com   -> 200
site.suewheelerstl.com  -> 200   (third host, same site)
rel="canonical"         -> absent on every host
```

**Why:** three hosts serving identical content with no canonical tag splits authority three ways, and the sitemap/og:url/schema all pointed at a host that immediately 307'd.

**`site.suewheelerstl.com` must be 301'd to the apex, NEVER deleted.** The business's single strongest backlink — a St. Louis Magazine feature, `https://www.stlmag.com/design/a-guide-to-furniture-in-st-louis/` (the "Perfect Finish" section, pub. Nov 2021, upd. Feb 2025) — links to that mirror. A 301 is the only redirect that passes accumulated link equity; deleting the subdomain turns that editorial citation into a 404 and discards it permanently. Evidence the mirror is the indexed copy: AI search summaries were observed synthesising Sue's positioning from `site.suewheelerstl.com`, not the canonical domain.

BBB — the highest-authority citation — also points its website field at the mirror. Fix that field to the apex when cleaning up listings.

Related: [[canonical-nap-and-premises]]
