# Design Spec & Style Guide
## Wood Refinishing by Sue Wheeler

**Source:** Extracted from Variant.com Option 2 mockups (`../designs/active/`)  
**Stack target:** Next.js + Tailwind CSS v4 + Shadcn/Radix  
**Last updated:** 2026-03

---

## 1. Design Tokens

### Colors

| Token | Hex | Tailwind key | Usage |
|---|---|---|---|
| `--bg-base` | `#EBE6DE` | `sue-base` | Page background |
| `--bg-card` | `#F8F6F1` | `sue-card` | Cards, nav, footer background |
| `--text-main` | `#2A2421` | `sue-text` | Primary text, headings |
| `--text-muted` | `#6B5E55` | `sue-muted` | Secondary text, labels, captions |
| `--accent-blue` | `#11B2E8` | `sue-blue` | Primary CTA, links, borders, badges |
| `--accent-blue-light` | `#8ABCF7` | `sue-blue-light` | Hover states, tints |
| `--accent-cyan` | `#00AEE6` | `sue-cyan` | Alternate accent (trust items) |
| `--accent-deep` | `#0033CC` | `sue-deep` | Dark blue (reserved) |
| `--accent-wood` | `#A65D37` | `sue-wood` | Active nav states, pill borders, accents |
| `--charcoal` | `#42413C` | `sue-charcoal` | Dark backgrounds (testimonials, CTA sections) |

### Tailwind Config Extension
```js
// tailwind.config.ts
colors: {
  'sue-blue':       '#11B2E8',
  'sue-blue-light': '#8ABCF7',
  'sue-cyan':       '#00AEE6',
  'sue-deep':       '#0033CC',
  'sue-charcoal':   '#42413C',
  'sue-base':       '#EBE6DE',
  'sue-card':       '#F8F6F1',
  'sue-text':       '#2A2421',
  'sue-muted':      '#6B5E55',
  'sue-wood':       '#A65D37',
}
```

---

## 2. Typography

### Typefaces
| Role | Family | Weights | Google Fonts |
|---|---|---|---|
| Serif / Display | Playfair Display | 400, 600, 400i, 600i | `family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600` |
| Sans / UI | Inter | 400, 500, 600 | `family=Inter:wght@400;500;600` |

### Type Scale

| Element | Family | Size | Weight | Style | Notes |
|---|---|---|---|---|---|
| Hero H1 | Serif | `clamp(3rem, 5vw, 5.5rem)` | 400 | Normal | Italic `<i>` used for emphasis words |
| Section H2 | Serif | `3rem` | 400 | Normal | |
| Card H3 | Serif | `1.75rem` | 400 | Italic | |
| Nav links | Sans | `0.8rem` | 500/600 | Uppercase | `letter-spacing: 0.05em` |
| Body lead | Sans | `1.25rem` | 400 | Normal | `color: sue-muted` |
| Body default | Sans | `1rem` | 400 | Normal | `line-height: 1.6` |
| Micro label | Sans | `0.75rem` | 600 | Uppercase | `letter-spacing: 0.1em` |
| Logo | Serif | `1.4rem` | 400 | Italic | Two-line: name + tagline |
| Logo tagline | Sans | `0.6rem` | 400 | Uppercase | `letter-spacing: 0.2em`, `color: sue-muted` |
| Phone (footer) | Serif | `clamp(3rem, 6vw, 6rem)` | 400 | Normal | Hover → `sue-blue` |

### Usage Rules
- Headings use Playfair Display. Key words wrapped in `<em>` or `<i>` inherit italic style and `color: sue-wood`.
- All UI text (nav, buttons, labels, captions) uses Inter.
- No bold headings — Playfair at weight 400 is intentional.
- `-webkit-font-smoothing: antialiased` on `body`.


---

## 3. Spacing & Layout

### Spacing Scale
```css
--space-xs: 0.5rem   /*  8px */
--space-sm: 1rem     /* 16px */
--space-md: 2rem     /* 32px */
--space-lg: 4rem     /* 64px */
--space-xl: 8rem     /* 128px */
```

### Container
- Max width: `1400px`
- Padding: `0 2rem` (desktop), `0 1rem` (mobile)
- Applied via `.container` class wrapping all page sections

### Grid Patterns
| Pattern | Columns | Usage |
|---|---|---|
| Hero | `1fr 1fr` | Homepage, service pages |
| Services | `repeat(auto-fit, minmax(300px, 1fr))` | Service cards |
| Process | `repeat(4, 1fr)` → `2` → `1` | Process steps |
| Portfolio | `repeat(2, 1fr)` → `1` | Before/after pairs |
| Testimonials | `repeat(3, 1fr)` → `1` | Review cards |

### Breakpoints
| Name | Value | Notes |
|---|---|---|
| Mobile | `max-width: 500px` | Single column, reduced type |
| Tablet | `max-width: 768px` | 2-col grids collapse |
| Desktop | `max-width: 900px` | Nav hamburger triggers |

---

## 4. Elevation & Borders

### Shadows
```css
--shadow-card: 0 10px 30px -10px rgba(42,36,33,0.08), 0 4px 6px -2px rgba(42,36,33,0.04);
--shadow-nav:  0 4px 20px rgba(42,36,33,0.1);
```

### Border Radius
- Cards: `2px` (`--radius-card`) — intentionally minimal, architectural feel
- Pills/badges: `50px` — full round
- Buttons: `0` — sharp corners only

### Borders
- Section dividers: `1px solid rgba(0,0,0,0.05)`
- Footer top accent: `4px solid var(--accent-blue)` — signature element
- Active nav underline: `1px solid var(--accent-blue)` on phone number link
- Card hover: left `4px` blue bar (animated height 0→100%)

---

## 5. Components

### Navigation
**Structure:** Sticky top bar, `background: sue-base`, `z-index: 100`

**Logo block** (left):
```html
<a href="/">
  Sue Wheeler          <!-- Playfair Display, 1.4rem, italic -->
  <span>Wood Refinishing</span>  <!-- Inter, 0.6rem, uppercase, sue-muted -->
</a>
```

**Nav links** (center-right): Inter, 0.8rem, uppercase, `letter-spacing: 0.05em`
- Default: `color: sue-text`, `font-weight: 500`
- Active (current page): `color: sue-wood`, `font-weight: 600`
- Hover: `color: sue-blue` + animated underline (`::after` width 0→100%)

**Phone number:** `font-weight: 600`, `border-bottom: 1px solid sue-blue`

**CTA button** (rightmost): "Free Estimate" — `background: sue-blue`, white text, `0.75rem 1.5rem` padding, sharp corners

**Full link order:** Home · About · Hand-Strip · Cabinets · Doors · Portfolio · FAQ · CWE · Care Guide · Contact · (314) 367-6054 · [Free Estimate]

**Mobile (≤900px):** Hamburger toggle (3 lines, 25×2px, `sue-text`). Menu slides in from right as fixed panel, `width: 80%`, `max-width: 320px`, full height, `background: sue-card`. Links stack vertically at `1rem` font-size.

---

### Buttons
| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `sue-blue` | white | none | `#0e96c4` + `translateY(-2px)` |
| Outline | transparent | `sue-text` | `1px solid sue-text` | bg fills `sue-text`, text `sue-card` |
| Dark | `sue-text` | `sue-card` | none | — |

All buttons: Inter, `font-weight: 500`, uppercase, `letter-spacing: 0.05em`, `0.875rem`, `1rem 2rem` padding, **sharp corners (no border-radius)**, `transition: all 0.3s ease`.

---

### Pill Badges
```html
<span class="pill-badge">Label</span>         <!-- sue-wood border + text -->
<span class="pill-badge blue">Label</span>    <!-- sue-blue border + text -->
```
`padding: 0.25rem 0.75rem`, `border-radius: 50px`, `font-size: 0.75rem`, uppercase, `letter-spacing: 0.1em`, `font-weight: 600`


---

### Service Cards
- Background: `sue-card`, `padding: 2rem`, `min-height: 250px`
- Left blue bar: `position: absolute`, `4px wide`, animates height `0→100%` on hover
- Card lifts: `translateY(-5px)` on hover
- H3: Playfair, `1.75rem`, italic
- Card number: Inter, `0.75rem`, `sue-muted`

### Before/After (Portfolio)
- Container: `aspect-ratio: 4/3`, `cursor: ew-resize`, `padding: 0.5rem`, `sue-card` bg
- After image uses `clip-path: inset(0 50% 0 0)` → animates to `inset(0 0 0 0)` on hover
- Labels: "BEFORE" (left, `sue-muted`) / "AFTER" (right, `sue-blue`), absolute positioned, `sue-card` bg pill

### Testimonial Cards
- Dark section background: `sue-text` (`#2A2421`)
- Cards: `sue-card` bg, staggered rotation (`rotate(-1deg)`, `rotate(1deg)`, center card `translateY(-20px) rotate(1deg)`)
- Quote mark: Playfair, `4rem`, `sue-blue`, `opacity: 0.2`
- Author: Inter, `0.875rem`, `font-weight: 600`, uppercase

### Footer
**Full-width, always identical across all pages:**
- Background: `sue-card`
- Top border: `4px solid sue-blue` — the most distinctive brand element
- Padding: `5rem 0`
- Text-align: center
- Content (top to bottom):
  1. Pill badge: "Start Your Project" (blue)
  2. H2: "Ready to restore your woodwork?" — Playfair, `2.5rem`
  3. Subtext: "Contact Sue for a free in-home consultation and detailed estimate."
  4. Phone: `(314) 367-6054` — Playfair, `4rem`, links to `tel:3143676054`, hover → `sue-blue`
  5. Email: `estimate@suewheelerwood.com` — `border-bottom: 1px solid sue-wood`
  6. Footer bar: logo name (left) + "EPA Certified · BBB Accredited · Since 1989" (right)

---

## 6. Page Inventory

| File | Title | Status |
|---|---|---|
| `homepage.html` | Homepage | ✅ Complete mockup |
| `about.html` | About — Sue's Story | ✅ Complete mockup |
| `why-we-hand-strip.html` | Why We Hand-Strip | ✅ Complete mockup |
| `service-cabinets.html` | Kitchen Cabinet Refinishing | ✅ Complete mockup |
| `service-doors.html` | Door Refinishing | ✅ Complete mockup |
| `portfolio.html` | Portfolio | ✅ Complete mockup |
| `faq.html` | FAQ | ✅ Complete mockup |
| `contact.html` | Contact / Get an Estimate | ✅ Complete mockup |
| `neighborhood-cwe.html` | Central West End | ✅ Complete mockup |
| `care-guide.html` | Wood Care Guide | ✅ Complete mockup |

### Pages Still Needed (not in mockups)
- Additional service pages: Staircases & Railings, Rooms & Built-ins
- Additional neighborhood pages (beyond CWE)
- Blog / content hub (SEO hub-and-spoke)
- Privacy Policy / Terms

---

## 7. Section Patterns by Page

### Homepage
1. **Nav** (sticky)
2. **Hero** — H1 + subtext + 2 CTAs + hero image (rotated frame, `est. 1989` badge)
3. **Trust Bar** — `sue-card` bg, 5 trust items with icons
4. **Empathy section** — centered, italic H2, signature phrase underlined in blue
5. **Services grid** — 4 service cards
6. **Process steps** — 4-column, numbered circles, horizontal rule connector
7. **Portfolio** — 2 before/after sliders
8. **Testimonials** — dark bg, 3 staggered cards
9. **Press quote** — STL Magazine feature, large blockquote
10. **Service area list** — neighborhoods, serif italic list items
11. **Footer**

### Interior Pages (About, Services, etc.)
1. **Nav** (sticky)
2. **Page hero** — pill badge + H1 + supporting content
3. **Body sections** (page-specific)
4. **Footer** (identical to homepage)

### Key Content Strings (exact, use verbatim)
- Phone: `(314) 367-6054` / `tel:3143676054`
- Email: `estimate@suewheelerwood.com`
- Tagline: `"Wood Refinishing"` (under logo)
- Est. year: `1989`
- Experience: `36 years` / `Since 1989`
- STL Magazine quote: `"Sue Wheeler is the secret weapon of St. Louis interior designers, quietly restoring the city's woodwork one piece at a time."`
- Hero line: `"When you call Sue Wheeler, Sue Wheeler answers."`

---

## 8. Motion & Interaction

| Element | Trigger | Animation |
|---|---|---|
| Nav links | Hover | Blue underline `width: 0 → 100%`, `0.3s ease` |
| Hero image frame | Hover | `rotate(2deg) → rotate(0deg)`, `0.5s ease` |
| Service cards | Hover | `translateY(-5px)` + blue left bar `height 0→100%` |
| Before/After | Hover | `clip-path` reveal, `0.5s cubic-bezier(0.25,1,0.5,1)` |
| Btn Primary | Hover | Darken bg + `translateY(-2px)` |
| Signature phrase | Parent hover | Underline `scaleX(0.3 → 1)` |
| Phone (footer) | Hover | `color → sue-blue` |
| Dropdown menus | Hover on parent | `opacity + visibility + translateY(10px→0)`, `0.3s ease` |

All transitions: `0.3s ease` unless noted.

---

## 9. SEO & Meta Patterns

Each page should have a unique `<title>` following this pattern:

| Page | Title pattern |
|---|---|
| Homepage | `Wood Refinishing by Sue Wheeler \| St. Louis` |
| Service | `[Service Name] Refinishing \| Sue Wheeler Wood Refinishing` |
| About | `About Sue Wheeler \| 36 Years of Wood Restoration` |
| Neighborhood | `Wood Refinishing in [Neighborhood] \| Sue Wheeler` |
| FAQ | `FAQ \| Sue Wheeler Wood Refinishing` |

---

## 10. Implementation Notes for Next.js

- Nav and Footer should be React Server Components in a shared `(website-layout)` route group layout
- Active nav state: use `usePathname()` to compare current path and apply `sue-wood` color + `font-weight: 600`
- Google Fonts: load via `next/font/google` (not a `<link>` tag)
- Images: use `next/image` with `object-fit: cover`; before/after sliders need client component
- Tailwind v4: define tokens in `@theme` block in global CSS, not in `tailwind.config.ts`
- The `est. 1989` badge on the hero image is a decorative absolute-positioned div — not an image
- Testimonial card stagger (rotation offsets) should use static CSS classes, not JS
- Accordion (FAQ page) can use `<details>/<summary>` or Radix Accordion
- Mobile hamburger nav: Radix `Sheet` component is the right fit

