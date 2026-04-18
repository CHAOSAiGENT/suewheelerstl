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
    "/door-refinishing/central-west-end",
    "/door-refinishing/benton-park",
    "/door-refinishing/compton-heights",
    "/door-refinishing/shaw",
    "/door-refinishing/lafayette-square",
  ];

  const neighborhoodPages = [
    "/neighborhoods/central-west-end",
    "/neighborhoods/benton-park",
    "/neighborhoods/compton-heights",
    "/neighborhoods/shaw",
    "/neighborhoods/lafayette-square",
    "/neighborhoods/clayton",
    "/neighborhoods/university-city",
    "/neighborhoods/maplewood",
  ];

  const allPages = [...corePages, ...servicePages, ...neighborhoodPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.includes("/neighborhoods/") ? 0.6 : 0.8,
  }));
}
