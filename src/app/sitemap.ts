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
    "/commercial-and-hospitality-refinishing",
    "/commercial-and-hospitality-refinishing/restaurant-and-bar-refinishing",
    "/commercial-and-hospitality-refinishing/hotel-and-venue-woodwork",
    "/commercial-and-hospitality-refinishing/commercial-maintenance-contracts",
    "/institutional-refinishing",
    "/institutional-refinishing/historic-venue-restoration",
    "/institutional-refinishing/church-and-religious-facility-woodwork",
    "/institutional-refinishing/university-and-public-building-woodwork",
    "/historic-preservation",
    "/historic-preservation/historic-tax-credits",
    "/historic-preservation/secretary-of-interior-standards",
    "/historic-preservation/st-louis-historic-districts",
  ];

  const neighborhoodPages = [
    "/neighborhoods/central-west-end",
    "/neighborhoods/lafayette-square",
    "/neighborhoods/compton-heights",
    "/neighborhoods/tower-grove",
    "/neighborhoods/shaw",
    "/neighborhoods/maplewood",
    "/neighborhoods/clayton",
    "/neighborhoods/university-city",
    "/neighborhoods/webster-groves",
    "/neighborhoods/kirkwood",
    "/neighborhoods/frontenac",
    "/neighborhoods/ladue",
    "/neighborhoods/town-and-country",
    "/neighborhoods/chesterfield",
    "/neighborhoods/ballwin",
  ];

  const allPages = [...corePages, ...servicePages, ...neighborhoodPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.includes("/neighborhoods/") ? 0.6 : 0.8,
  }));
}
