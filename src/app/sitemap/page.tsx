import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Wood Refinishing by Sue Wheeler",
  description:
    "Full sitemap for suewheelerstl.com — Wood Refinishing by Sue Wheeler, LLC. All service pages, neighborhood pages, and resources.",
};

const sections = [
  {
    label: "Core Pages",
    links: [
      ["Home", "/"],
      ["About Sue Wheeler", "/about"],
      ["Contact / Free Estimate", "/contact"],
      ["FAQ", "/faq"],
      ["Reviews", "/reviews"],
      ["Portfolio", "/portfolio"],
    ],
  },
  {
    label: "Kitchen Cabinet Refinishing",
    links: [
      [
        "Kitchen Cabinet Refinishing — Overview",
        "/kitchen-cabinet-refinishing",
      ],
      [
        "Painted Cabinet Refinishing",
        "/kitchen-cabinet-refinishing/painted-cabinets",
      ],
      [
        "Stained Cabinet Refinishing",
        "/kitchen-cabinet-refinishing/stained-cabinets",
      ],
      [
        "Cabinet Color Change",
        "/kitchen-cabinet-refinishing/cabinet-color-change",
      ],
    ],
  },
  {
    label: "Door Refinishing",
    links: [
      ["Door Refinishing — Overview", "/door-refinishing"],
      ["Front Door Refinishing", "/door-refinishing/front-door-refinishing"],
      [
        "Interior Door Refinishing",
        "/door-refinishing/interior-door-refinishing",
      ],
      ["French Door Refinishing", "/door-refinishing/french-door-refinishing"],
      ["Pocket Door Refinishing", "/door-refinishing/pocket-door-refinishing"],
    ],
  },
  {
    label: "Staircase Refinishing",
    links: [
      ["Staircase Refinishing — Overview", "/staircase-refinishing"],
      [
        "Stair Treads & Risers",
        "/staircase-refinishing/stair-treads-and-risers",
      ],
      ["Spindles & Balusters", "/staircase-refinishing/spindles-and-balusters"],
      ["Newel Posts", "/staircase-refinishing/newel-posts"],
      ["Stair Railings", "/staircase-refinishing/stair-railings"],
    ],
  },
  {
    label: "Built-Ins & Millwork",
    links: [
      [
        "Built-Ins & Millwork — Overview",
        "/built-ins-and-millwork-refinishing",
      ],
      [
        "Built-In Hutches, Buffets & Bookcases",
        "/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases",
      ],
      ["Room Millwork", "/built-ins-and-millwork-refinishing/room-millwork"],
    ],
  },
  {
    label: "Architectural Woodwork & Perk Up",
    links: [
      [
        "Architectural Woodwork — Overview",
        "/built-ins-and-millwork-refinishing",
      ],
      ["Perk Up & Protect", "/perk-up-and-protect"],
    ],
  },
  {
    label: "Historic Preservation",
    links: [["Historic Preservation — Overview", "/historic-preservation"]],
  },
  {
    label: "Neighborhoods",
    links: [
      ["Central West End", "/neighborhoods/central-west-end"],
      ["Benton Park", "/neighborhoods/benton-park"],
      ["Compton Heights", "/neighborhoods/compton-heights"],
      ["Lafayette Square", "/neighborhoods/lafayette-square"],
      ["Shaw", "/neighborhoods/shaw"],
      ["Clayton", "/neighborhoods/clayton"],
      ["University City", "/neighborhoods/university-city"],
      ["Maplewood", "/neighborhoods/maplewood"],
    ],
  },
];

export default function SitemapPage() {
  return (
    <section className="py-16 px-6 bg-[#EBE6DE]">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-3xl md:text-4xl text-[#2A2421] mb-2"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 400,
          }}
        >
          Sitemap
        </h1>
        <p className="text-sm font-sans text-[#6B5E55] mb-10">
          Wood Refinishing by Sue Wheeler, LLC · St. Louis, MO ·{" "}
          <a href="tel:3143676054" className="text-[#11B2E8]">
            (314) 367-6054
          </a>{" "}
          ·{" "}
          <Link href="/contact" className="text-[#11B2E8]">
            Request a Free Estimate →
          </Link>
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.label}>
              <h2 className="text-sm font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-3">
                {section.label}
              </h2>
              <ul className="space-y-1.5">
                {section.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm font-sans text-[#2A2421] hover:text-[#11B2E8] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
