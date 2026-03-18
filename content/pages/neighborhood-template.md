# NEIGHBORHOOD PAGE TEMPLATE
## Wood Refinishing by Sue Wheeler — suewheeler-web

**Purpose:** Template for all 15 neighborhood pages. Each page follows the same 5-section structure.
**Output directory:** `content/pages/` — filename pattern: `nbhd-[neighborhood-slug].md`
**Dev note:** All neighborhood pages route to `/neighborhoods/[slug]/`.

---

## TEMPLATE VARIABLES (replace per neighborhood)

```
{{NEIGHBORHOOD_NAME}}     — Display name, e.g. "Central West End"
{{NEIGHBORHOOD_SLUG}}     — URL slug, e.g. "central-west-end"
{{SEO_TITLE}}             — ≤60 chars
{{META_DESCRIPTION}}      — ≤160 chars
{{HOUSING_ERA}}           — e.g. "pre-1900 Victorian", "1920s–1940s Craftsman bungalow"
{{HOUSING_CHARACTER}}     — 1–2 sentences on woodwork character of this neighborhood
{{COMMON_SERVICES}}       — List of 2–4 primary service types common here
{{HISTORIC_STATUS}}       — Yes/Partial/Low, plus district name if applicable
{{TAX_CREDIT_SECTION}}    — Full section if eligible; omit if historic status = Low
{{TESTIMONIAL_LOCATION}}  — Location detail in placeholder quote, e.g. "Compton Heights homeowner"
{{SERVICE_LINK_1}}        — Primary service hub URL + label
{{SERVICE_LINK_2}}        — Secondary service hub URL + label
{{SERVICE_LINK_3}}        — Third service hub if applicable + label
{{BLOG_LINK}}             — Relevant blog post slug + title
```

---

## PAGE STRUCTURE

```
---
url: /neighborhoods/{{NEIGHBORHOOD_SLUG}}/
seo_title: {{SEO_TITLE}}
meta_description: {{META_DESCRIPTION}}
---

# Wood Refinishing in {{NEIGHBORHOOD_NAME}}

[SECTION 1 — INTRO: Housing stock and woodwork character]
[SECTION 2 — SERVICES: Most common work here + why]
[SECTION 3 — HISTORIC STATUS + TAX CREDITS (if applicable)]
[SECTION 4 — TESTIMONIAL / PROJECT MENTION]
[SECTION 5 — CTA]
```

---

## FULL TEMPLATE

---
url: /neighborhoods/{{NEIGHBORHOOD_SLUG}}/
seo_title: {{SEO_TITLE}}
meta_description: {{META_DESCRIPTION}}
---

# Wood Refinishing in {{NEIGHBORHOOD_NAME}}

{{NEIGHBORHOOD_NAME}} homes are {{HOUSING_ERA}} — and the woodwork that came with them is part of what makes this neighborhood what it is. {{HOUSING_CHARACTER}}

Sue Wheeler has been refinishing woodwork in {{NEIGHBORHOOD_NAME}} for decades. She knows what the houses here were built with, how that wood has aged, and what it takes to bring it back properly.

---

## What We Do Most Often in {{NEIGHBORHOOD_NAME}}

{{COMMON_SERVICES_PROSE}}

The most common projects we complete here:

- **{{SERVICE_1}}** — {{SERVICE_1_DETAIL}}
- **{{SERVICE_2}}** — {{SERVICE_2_DETAIL}}
- **{{SERVICE_3}}** — {{SERVICE_3_DETAIL}}

Every project starts with a free estimate. Sue assesses the wood, the current finish, any repairs needed, and gives you a straight answer on what it will take and what it will cost.

→ [{{SERVICE_LINK_1_LABEL}}]({{SERVICE_LINK_1_URL}})
→ [{{SERVICE_LINK_2_LABEL}}]({{SERVICE_LINK_2_URL}})

---

## {{HISTORIC_SECTION_HEADER}}

{{HISTORIC_SECTION_BODY}}

---

## From a {{TESTIMONIAL_LOCATION}} Client

> "{{TESTIMONIAL_PLACEHOLDER}}"
>
> — {{TESTIMONIAL_ATTRIBUTION}}

*Replace with verbatim client quote before launch. Match to a project in this neighborhood.*

---

## Get a Free Estimate for Your {{NEIGHBORHOOD_NAME}} Home

Sue Wheeler answers every call personally. She's refinished woodwork in {{NEIGHBORHOOD_NAME}} for over 36 years — she knows the houses here.

**Call: [(314) 367-6054](tel:3143676054)**
[Request a Free Estimate →](/contact/)

EPA Certified Lead Renovator. BBB A+ Accredited. St. Louis's most experienced architectural wood refinisher since 1989.
