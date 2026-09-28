import type { MetadataRoute } from "next";

const BASE_URL = "https://suewheelerstl.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/portfolio",
    "/reviews",
    "/privacy-policy",
    "/sitemap",
    "/press",
    "/blog",
    "/blog/perk-up-and-protect",
    "/blog/dip-stripping-historic-woodwork",
    "/blog/lead-paint-wood-refinishing-st-louis",
    "/blog/wood-refinishing-cost-st-louis",
    "/blog/refinish-or-replace-woodwork",
    "/blog/wood-damage-guide-st-louis",
    "/blog/can-my-antique-be-refinished",
    "/blog/does-my-woodwork-need-a-full-refinish",
    "/blog/how-long-does-staircase-refinishing-take",
    "/blog/refinish-kitchen-cabinets-or-replace",
    "/blog/what-to-expect-wood-refinishing-project",
  ];

  const servicePages = [
    "/kitchen-cabinet-refinishing",
    "/kitchen-cabinet-refinishing/painted-cabinets",
    "/kitchen-cabinet-refinishing/stained-cabinets",
    "/kitchen-cabinet-refinishing/cabinet-color-change",
    "/door-refinishing",
    "/door-refinishing/front-door-refinishing",
    "/door-refinishing/interior-door-refinishing",
    "/door-refinishing/french-door-refinishing",
    "/door-refinishing/pocket-door-refinishing",
    "/staircase-refinishing",
    "/staircase-refinishing/stair-treads-and-risers",
    "/staircase-refinishing/spindles-and-balusters",
    "/staircase-refinishing/newel-posts",
    "/staircase-refinishing/stair-railings",
    "/built-ins-and-millwork-refinishing",
    "/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases",
    "/built-ins-and-millwork-refinishing/room-millwork",
    "/perk-up-and-protect",
    "/historic-preservation",
    "/furniture-refinishing",
  ];

  // All neighborhoods with door × staircase × cabinet pages
  const geoNeighborhoods = [
    "central-west-end",
    "benton-park",
    "compton-heights",
    "shaw",
    "lafayette-square",
    "kirkwood",
    "webster-groves",
    "maplewood",
    "clayton",
    "university-city",
    "tower-grove",
    "ladue",
    "chesterfield",
    "ballwin",
    "frontenac",
    "town-and-country",
  ];

  const geoServicePages = geoNeighborhoods.flatMap((n) => [
    `/door-refinishing/${n}`,
    `/staircase-refinishing/${n}`,
    `/kitchen-cabinet-refinishing/${n}`,
  ]);

  const neighborhoodPages = [
    "/neighborhoods/central-west-end",
    "/neighborhoods/benton-park",
    "/neighborhoods/compton-heights",
    "/neighborhoods/shaw",
    "/neighborhoods/lafayette-square",
    "/neighborhoods/clayton",
    "/neighborhoods/university-city",
    "/neighborhoods/maplewood",
    "/neighborhoods/kirkwood",
    "/neighborhoods/tower-grove",
    "/neighborhoods/webster-groves",
    "/neighborhoods/ladue",
    "/neighborhoods/chesterfield",
    "/neighborhoods/ballwin",
    "/neighborhoods/frontenac",
    "/neighborhoods/town-and-country",
  ];

  const allPages = [
    ...corePages,
    ...servicePages,
    ...geoServicePages,
    ...neighborhoodPages,
  ];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1.0
        : path.includes("/neighborhoods/")
          ? 0.6
          : path.match(/\/(door|staircase|kitchen-cabinet)-refinishing\/[a-z]/)
            ? 0.8
            : 0.8,
  }));
}
