/**
 * Business NAP contract — single source of truth for the site's structured data.
 *
 * Every `LocalBusiness` JSON-LD node on the site imports its name, address,
 * phone, canonical URL and service area from here. Before this file existed the
 * NAP was inlined per page: 63 `LocalBusiness` nodes asserted the business, but
 * only 2 carried a `PostalAddress`, and the homepage `areaServed` had drifted
 * out of agreement with `public/llms.txt`.
 *
 * Search engines and AI answer engines consolidate an entity by cross-checking
 * these fields across every page that mentions it. Two spellings of one address
 * — or an address on some pages and not others — reads as two weak entities
 * instead of one strong one. So: change a fact HERE, never in a page.
 *
 * DELIBERATELY ABSENT (do not "complete" these without verified source data):
 *   - `openingHoursSpecification` — the shop's hours have never been supplied.
 *     Publishing plausible-looking hours would assert a false fact about a real
 *     business to Google and every AI assistant that reads the page.
 *   - `aggregateRating` / `reviewRating` — no verified review corpus exists.
 *     Self-asserted ratings are a Google structured-data violation.
 *
 * Note `5260 Washington Pl` is the owner's HOME address and must never appear
 * in published structured data. The shop at 900 S Boyle Ave is the only address
 * the site publishes.
 */

/** Registered legal name. Used verbatim as `name` on every business node. */
export const BUSINESS_NAME = "Wood Refinishing by Sue Wheeler, LLC";

/** Canonical host — non-www, matches `metadataBase` and the sitemap. */
export const BUSINESS_URL = "https://suewheelerstl.com";

/**
 * Stable `@id` for the business entity. Every page's business node reuses this
 * so the whole site resolves to one node in a consumer's graph.
 */
export const BUSINESS_ID = `${BUSINESS_URL}/#business`;

/** E.164 phone — the form search engines prefer for click-to-call. */
export const BUSINESS_TELEPHONE = "+13143676054";

/**
 * The working shop. This is a HYBRID premises: customers may drop off and
 * collect pieces here, and most architectural work happens on-site at the
 * customer's home. It is a published address, not a hidden one.
 */
export const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "900 S Boyle Ave",
  addressLocality: "St. Louis",
  addressRegion: "MO",
  postalCode: "63110",
  addressCountry: "US",
} as const;

/** Shop coordinates, used by nodes that also emit `geo`. */
export const BUSINESS_GEO = {
  "@type": "GeoCoordinates",
  latitude: 38.6138,
  longitude: -90.2614,
} as const;

/**
 * Full service area: the City of St. Louis and St. Louis County.
 *
 * Must stay in agreement with the "Service Area" section of
 * `public/llms.txt` — those two files are the pair an AI answer engine reads
 * as authoritative, and a disagreement between them is worse than either one
 * alone. City sub-areas are `Neighborhood`; incorporated county municipalities
 * are `City`, following the convention the homepage node already used.
 */
export const BUSINESS_AREA_SERVED = [
  { "@type": "City", name: "St. Louis" },
  { "@type": "Neighborhood", name: "Central West End" },
  { "@type": "Neighborhood", name: "Benton Park" },
  { "@type": "Neighborhood", name: "Compton Heights" },
  { "@type": "Neighborhood", name: "Shaw" },
  { "@type": "Neighborhood", name: "Lafayette Square" },
  { "@type": "Neighborhood", name: "Tower Grove" },
  { "@type": "City", name: "Clayton" },
  { "@type": "City", name: "University City" },
  { "@type": "City", name: "Maplewood" },
  { "@type": "City", name: "Brentwood" },
  { "@type": "City", name: "Kirkwood" },
  { "@type": "City", name: "Webster Groves" },
  { "@type": "City", name: "Ladue" },
  { "@type": "City", name: "Frontenac" },
  { "@type": "City", name: "Town and Country" },
  { "@type": "City", name: "Chesterfield" },
  { "@type": "City", name: "Ballwin" },
] as const;

/**
 * Verified off-site profiles only. Several directory listings carry the wrong
 * (home) address and are being corrected separately — do NOT add a profile
 * here until its NAP matches `BUSINESS_ADDRESS`, because `sameAs` is an
 * instruction to go read that profile and trust it.
 */
export const BUSINESS_SAME_AS = [
  "https://www.bbb.org/us/mo/saint-louis/profile/woodworking/wood-refinishing-by-sue-wheeler-0734-110214169",
  "https://www.facebook.com/p/Wood-Refinishing-by-Sue-Wheeler-100034017228127/",
  "https://www.instagram.com/suewheelerstl/",
] as const;
