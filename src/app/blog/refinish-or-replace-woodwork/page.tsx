import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "Refinish or Replace? How to Decide for Historic St. Louis Woodwork | Sue Wheeler Wood Refinishing",
  description:
    "For pre-1950s St. Louis homes, the original woodwork is old-growth wood that cannot be replicated. Here's a clear decision framework — plus real cost comparisons — for doors, staircases, and cabinets.",
  openGraph: {
    title: "Refinish or Replace? How to Decide for Historic St. Louis Woodwork",
    description:
      "For pre-1950s St. Louis homes, the original woodwork is old-growth wood that cannot be replicated. Here's a clear decision framework — plus real cost comparisons — for doors, staircases, and cabinets.",
    url: "https://suewheelerstl.com/blog/refinish-or-replace-woodwork",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Refinish or Replace? How to Decide for Historic St. Louis Woodwork",
  description:
    "For pre-1950s St. Louis homes, the original woodwork is old-growth wood that cannot be replicated. Here's a clear decision framework — plus real cost comparisons — for doors, staircases, and cabinets.",
  url: "https://suewheelerstl.com/blog/refinish-or-replace-woodwork",
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  author: {
    "@type": "Person",
    name: "Sue Wheeler",
    jobTitle: "Owner, Wood Refinishing by Sue Wheeler LLC",
  },
  publisher: {
    "@type": "Organization",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
  },
  about: {
    "@type": "LocalBusiness",
    "@id": "https://suewheelerstl.com/#business",
  },
};

const faqItems = [
  {
    question: "How do I know if my wood is too damaged to refinish?",
    answer:
      "The threshold is structural integrity, not surface appearance. If the wood has soft spots, sponginess, or crumbling fiber from rot — especially rot that has progressed through the core of a door stile or tread — that section may be past refinishing without repair work. Surface checks, deep scratches, finish failure, and even significant water staining almost never reach that threshold. In 36 years, I have encountered wood that was genuinely unsalvageable far less often than I have encountered wood that someone else called unsalvageable when it was not. Get a second opinion before you decide to replace.",
  },
  {
    question: "Can you refinish water-damaged wood?",
    answer:
      "It depends on whether the damage is to the finish or to the wood itself. Water damage that has raised the grain, grayed the surface, or caused the finish to peel is finish damage — and stripping back to bare wood removes it entirely. Water damage that has caused the wood fibers to swell and stayed wet long enough to introduce mold or rot is a different situation. Even then, localized rot on a door panel can often be repaired with epoxy consolidant rather than requiring panel replacement. The wood under the finish of a 1920s St. Louis home is old-growth material — denser and harder than new lumber — and it holds up to moisture better than modern wood does. Assessment in person is the only reliable way to know where a specific piece stands.",
  },
  {
    question: "What does it cost to replace versus refinish a door?",
    answer:
      "A new solid-wood exterior door — material only, not installation — runs $800 to $3,000 depending on style, species, and manufacturer. Installation adds another $400 to $900. A fiberglass or steel door is less material cost but still requires installation, hardware, and finishing. If the opening is an unusual historic size, add custom millwork to match the existing casing profile. Refinishing the original door — full strip, stain, and exterior-grade topcoat — costs significantly less than any of those scenarios and results in a door made of better wood. The economic case for refinishing is clear in almost every situation where the original door is structurally sound.",
  },
  {
    question:
      "Is it worth refinishing old woodwork, or should I just paint it?",
    answer:
      "Paint is a finish, not an alternative to refinishing. If the existing finish is failing — peeling, flaking, or heavily built up — painting over it adds another layer on top of the problem, which shortens the life of the new coat and makes the eventual strip more difficult. Proper preparation is the same whether you end up with a stained finish or a painted one: the surface must be stripped, sanded, and properly primed or sealed before any topcoat goes on. The question of stain versus paint is a stylistic one and a valid choice either way. The question of whether to address the finish properly is not really a question — skipping it just defers the cost.",
  },
];

export default function RefinishOrReplacePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "Refinish or Replace? How to Decide for Historic St. Louis Woodwork",
            url: "https://suewheelerstl.com/blog/refinish-or-replace-woodwork",
          },
        ]}
      />
      <FAQSchema items={faqItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            Decision Guide
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            Refinish or Replace? How to Decide for Historic St. Louis Woodwork
          </h1>
          <p className="text-sm font-sans text-[#6B5E55]">
            By Sue Wheeler · April 2026 · 8 min read
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Lead */}
          <div className="border-l-4 border-[#11B2E8] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              When the finish on an old door or staircase starts to fail, the
              instinct is to wonder whether it is time to replace the whole
              thing. New doors are available at every home center. New cabinets
              are a showroom visit away. Replacement sounds like the modern
              answer — cleaner, easier, done.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
              For a pre-1950s St. Louis home, that instinct leads to a decision
              you cannot undo. The original woodwork in these houses is
              old-growth timber — a category of material that no longer exists
              in commercial production. Replacing it with what is available
              today means substituting something categorically inferior. And it
              almost always costs three to five times more.
            </p>
          </div>

          {/* Section 1: What you're losing */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              What Replacement Actually Means
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What you are really losing when you &ldquo;just replace&rdquo; an
              old door
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              The wood in your 1910 bungalow or your 1925 brick two-flat did not
              come from a plantation or a farm. It came from old-growth forest —
              timber that grew for 150 to 300 years before it was cut. That
              growth rate produces wood with characteristics that 30- or 40-year
              plantation lumber simply does not have.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              When you replace an original door, staircase component, or cabinet
              bank, you are not upgrading. You are permanently removing
              irreplaceable material from the house and installing a lesser
              substitute in its place. That substitution is one-way. Once the
              original wood is gone, it is gone.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Historic home buyers understand this. A house that retains its
              original woodwork — properly maintained — commands a premium over
              one that has been renovated with modern replacements. The original
              material is part of what the house is. Replacing it with
              contemporary products changes the character of the house in ways
              that cannot be reversed and are often immediately visible to
              anyone who knows what they are looking at.
            </p>
            <div className="bg-[#EBE6DE] border-l-4 border-[#A65D37] p-5 rounded-sm">
              <p className="font-sans text-[#2A2421] leading-relaxed text-sm">
                <strong>The common scenario:</strong> A homeowner is told by a
                contractor that the original woodwork is &ldquo;too far
                gone&rdquo; and recommends replacement. In 36 years of working
                on St. Louis historic homes, I have seen this situation many
                times. The wood that was supposedly unsalvageable was
                salvageable in the overwhelming majority of those cases. Always
                get a second opinion from someone whose business is refinishing,
                not replacing.
              </p>
            </div>
          </div>

          {/* Section 2: Old-growth wood argument */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Material Difference
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Why 1920s lumber is categorically different from what is available
              today
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              This is not nostalgia. It is wood science. Old-growth timber
              differs from modern plantation lumber in ways that are measurable
              and consequential for architectural woodwork.
            </p>

            <div className="space-y-4 mb-8">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  Grain density
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Old-growth Douglas fir and heart pine — the most common
                  species in St. Louis historic homes — have 20 to 40 growth
                  rings per inch. Modern plantation fir has 4 to 6. That
                  difference in ring density is the difference between a dense,
                  stable material and a softer, more porous one. Tight grain
                  holds finish better, machines more cleanly, and resists
                  denting and wear at a level modern lumber cannot match.
                </p>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  Dimensional stability
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Old-growth wood has largely finished its movement. A door that
                  has been in a St. Louis doorframe for 100 years has
                  equilibrated to the humidity cycles of this climate. It moves
                  minimally with seasonal changes. A new door — even a good
                  solid-wood door — will move more in its first several years as
                  it acclimates. This matters for fit, for the integrity of the
                  finish, and for long-term performance.
                </p>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  Resin content and natural resistance
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Old-growth heartwood — the dense core of a mature tree — has
                  higher resin and extractive content than modern sapwood-heavy
                  lumber. This gives it natural resistance to moisture, insects,
                  and rot that plantation wood lacks. The original heart pine
                  floors and fir doors in St. Louis historic homes have lasted
                  over a century without replacement. Modern substitutes will
                  not.
                </p>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  Availability — or the lack of it
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Old-growth Douglas fir, quarter-sawn white oak, American
                  chestnut, and the heart pine common in St. Louis historic
                  homes are not available from standard lumber suppliers. Some
                  can be sourced through salvage dealers at significant premium
                  — and even then, you are sourcing reclaimed timber from
                  demolished buildings, not new-cut material. There is no
                  commodity supply of equivalent wood. What is in your house is
                  what exists.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Decision framework table */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Decision Framework
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Refinish, Perk Up &amp; Protect, or replace — a clear guide
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-8">
              Most conditions that appear to call for replacement actually call
              for a full strip-and-refinish. The table below covers the most
              common situations and what they actually warrant.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-[#2A2421] text-white">
                    <th
                      className="text-left px-5 py-4 font-medium"
                      style={{
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontWeight: 400,
                      }}
                    >
                      Condition
                    </th>
                    <th className="text-center px-4 py-4 font-medium">
                      Full Strip &amp; Refinish
                    </th>
                    <th className="text-center px-4 py-4 font-medium">
                      Perk Up &amp; Protect
                    </th>
                    <th className="text-center px-4 py-4 font-medium">
                      Replace
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      condition: "Finish peeling, flaking, or blistering",
                      strip: true,
                      perk: false,
                      replace: false,
                    },
                    {
                      condition: "Finish dull, faded, or worn but intact",
                      strip: false,
                      perk: true,
                      replace: false,
                    },
                    {
                      condition: "Multiple layers of old paint built up",
                      strip: true,
                      perk: false,
                      replace: false,
                    },
                    {
                      condition: "Water staining — finish only, wood intact",
                      strip: true,
                      perk: false,
                      replace: false,
                    },
                    {
                      condition: "Surface checks or crazing in the finish",
                      strip: true,
                      perk: false,
                      replace: false,
                    },
                    {
                      condition:
                        "Irreplaceable millwork, original profile, historic detail",
                      strip: true,
                      perk: false,
                      replace: false,
                      note: "Preserve at all costs",
                    },
                    {
                      condition:
                        "Structural crack through a stile or rail (wood, not finish)",
                      strip: false,
                      perk: false,
                      replace: false,
                      note: "Repair + refinish — assess in person",
                    },
                    {
                      condition: "Water damage — wood swollen, finish failed",
                      strip: true,
                      perk: false,
                      replace: false,
                      note: "After drying; epoxy consolidant if needed",
                    },
                    {
                      condition:
                        "Localized rot — one panel or section affected",
                      strip: false,
                      perk: false,
                      replace: false,
                      note: "Repair section, refinish whole piece",
                    },
                    {
                      condition: "Rot through the core — structural failure",
                      strip: false,
                      perk: false,
                      replace: true,
                      note: "Rare in St. Louis historic homes",
                    },
                    {
                      condition: "Stain match needed to adjacent woodwork",
                      strip: true,
                      perk: false,
                      replace: false,
                      note: "Color work included in estimate",
                    },
                    {
                      condition: "Modern hollow-core door in historic opening",
                      strip: false,
                      perk: false,
                      replace: true,
                      note: "Replace with solid wood period-appropriate",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#F8F6F1]"}
                      style={{
                        borderBottom: "1px solid rgba(42,36,33,0.08)",
                      }}
                    >
                      <td className="px-5 py-4 text-[#2A2421] font-medium leading-snug">
                        {row.condition}
                        {row.note && (
                          <span className="block text-[#6B5E55] font-normal text-xs mt-1">
                            {row.note}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {row.strip ? (
                          <span className="inline-block w-6 h-6 rounded-full bg-[#11B2E8] text-white text-xs leading-6 font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-[rgba(42,36,33,0.2)] text-lg">
                            —
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {row.perk ? (
                          <span className="inline-block w-6 h-6 rounded-full bg-[#11B2E8] text-white text-xs leading-6 font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-[rgba(42,36,33,0.2)] text-lg">
                            —
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {row.replace ? (
                          <span className="inline-block w-6 h-6 rounded-full bg-[#A65D37] text-white text-xs leading-6 font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="text-[rgba(42,36,33,0.2)] text-lg">
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-5 rounded-sm">
              <p className="font-sans text-[#2A2421] leading-relaxed text-sm">
                <strong>On the &ldquo;assess in person&rdquo; rows:</strong>{" "}
                Several conditions — structural cracks, localized rot,
                significant water damage — require hands-on evaluation before a
                path forward can be determined. Photographs help but are not
                sufficient. In-person assessment at no charge is the right first
                step for any piece where the condition is genuinely uncertain.
              </p>
            </div>
          </div>

          {/* Section 4: Cost comparison */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Real Numbers
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Cost comparison: refinish vs. replace across common projects
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-8">
              The economic case for refinishing is clear in nearly every
              situation involving original old-growth woodwork. The following
              ranges reflect realistic St. Louis market costs as of 2025–2026.
              Refinishing costs require in-person estimate; replacement costs
              include material and installation.
            </p>

            <div className="space-y-5 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
                <div className="px-6 py-4 bg-[#2A2421]">
                  <p
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                    className="text-xl text-white"
                  >
                    Front door (exterior)
                  </p>
                </div>
                <div className="divide-y divide-[rgba(42,36,33,0.1)]">
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Refinish (full strip + exterior topcoat)
                    </span>
                    <span className="font-sans text-[#11B2E8] font-semibold whitespace-nowrap ml-4">
                      Several hundred dollars
                    </span>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Replace — solid wood door + installation
                    </span>
                    <span className="font-sans text-[#A65D37] font-semibold whitespace-nowrap ml-4">
                      $1,200 – $4,000+
                    </span>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Replace — fiberglass or steel door + installation
                    </span>
                    <span className="font-sans text-[#A65D37] font-semibold whitespace-nowrap ml-4">
                      $800 – $2,500+
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-[#F8F6F1]">
                  <p className="font-sans text-xs text-[#6B5E55]">
                    Replacement does not include custom millwork to match
                    existing casing if the opening is a non-standard historic
                    size — which it often is.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
                <div className="px-6 py-4 bg-[#2A2421]">
                  <p
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                    className="text-xl text-white"
                  >
                    Staircase (main stair, 12–16 treads)
                  </p>
                </div>
                <div className="divide-y divide-[rgba(42,36,33,0.1)]">
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Refinish (full strip — treads, rails, balusters, newel)
                    </span>
                    <span className="font-sans text-[#11B2E8] font-semibold whitespace-nowrap ml-4">
                      $600 – $1,800+
                    </span>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Replace treads only (stock lumber, standard profiles)
                    </span>
                    <span className="font-sans text-[#A65D37] font-semibold whitespace-nowrap ml-4">
                      $2,000 – $5,000+
                    </span>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Replace full stair assembly (treads, balusters, rail,
                      newel)
                    </span>
                    <span className="font-sans text-[#A65D37] font-semibold whitespace-nowrap ml-4">
                      $8,000 – $25,000+
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-[#F8F6F1]">
                  <p className="font-sans text-xs text-[#6B5E55]">
                    Turned balusters and carved newel posts in the style of
                    historic St. Louis staircases are not stocked items.
                    Matching them requires custom millwork at significant
                    additional cost.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
                <div className="px-6 py-4 bg-[#2A2421]">
                  <p
                    style={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 400,
                    }}
                    className="text-xl text-white"
                  >
                    Kitchen cabinets (full kitchen)
                  </p>
                </div>
                <div className="divide-y divide-[rgba(42,36,33,0.1)]">
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Refinish original solid-wood cabinets
                    </span>
                    <span className="font-sans text-[#11B2E8] font-semibold whitespace-nowrap ml-4">
                      $2,000 – $6,000+
                    </span>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Replace — stock cabinets installed
                    </span>
                    <span className="font-sans text-[#A65D37] font-semibold whitespace-nowrap ml-4">
                      $15,000 – $30,000
                    </span>
                  </div>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <span className="font-sans text-[#2A2421] font-medium">
                      Replace — semi-custom or custom cabinetry
                    </span>
                    <span className="font-sans text-[#A65D37] font-semibold whitespace-nowrap ml-4">
                      $20,000 – $100,000+
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-[#F8F6F1]">
                  <p className="font-sans text-xs text-[#6B5E55]">
                    Stock and semi-custom replacement cabinets are primarily MDF
                    or plywood with veneer faces. The original solid-wood
                    cabinets are a superior material at a fraction of the
                    replacement cost.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Hidden cost of replacement */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Hidden Costs
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What the replacement quote does not include
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              The sticker price of a new door or a set of stock cabinets
              understates the true cost of replacement in a historic home by a
              significant margin. These are the line items that rarely appear in
              an initial quote.
            </p>

            <div className="space-y-3 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  01
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Matching historic profiles — custom millwork cost
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    Historic St. Louis homes have door and window casings,
                    baseboard profiles, and molding details that were milled to
                    specific patterns in the early 1900s. Standard stock molding
                    from a home center does not match these profiles. Matching
                    them requires custom-run millwork on a shaper — a service
                    with a significant setup cost before a single linear foot is
                    produced. For a single door replacement, this can approach
                    or exceed the cost of the door itself.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  02
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Lead paint disposal — still required even when replacing
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    Removing a pre-1978 door, window, or cabinet that has lead
                    paint triggers the same EPA RRP Rule requirements as
                    refinishing it. Containment, HEPA cleaning, and documented
                    disposal are required whether you are stripping the wood or
                    sending it to a dumpster. There is no scenario in a pre-1978
                    home where you avoid lead paint compliance by choosing
                    replacement over refinishing.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  03
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Paint vs. stain compatibility — and the finishing cost
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    A new door or cabinet panel will need to be finished to
                    match the surrounding woodwork. If the existing woodwork is
                    stained and the new piece is a different species or cut, an
                    exact match may be difficult or impossible to achieve. If
                    the existing woodwork is painted, the new piece needs
                    priming, sanding, and multiple finish coats. Neither of
                    these finishing costs typically appear in the replacement
                    quote.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  04
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Opening modification — historic openings are non-standard
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    Pre-1920s door openings are often slightly taller, wider, or
                    narrower than contemporary standard door sizes. Fitting a
                    stock door to a historic opening frequently requires framing
                    modification, custom door sizing, or filler panels. These
                    structural changes add cost and — when done without care —
                    are visible and permanent alterations to the historic
                    character of the room.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  05
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Demolition and construction disruption
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    Replacing a built-in cabinet bank, a staircase, or a set of
                    doors involves demolition, debris removal, framing, and
                    installation work that disrupts an occupied home
                    significantly. Refinishing in place — or removing pieces to
                    a shop and reinstalling — involves far less disruption and
                    no structural modification to the house.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: When replacement IS right */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              When Replacement Is the Right Call
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              When replacement is genuinely the better choice
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Refinishing is not always the answer. There are situations where
              replacement is the correct path — and being honest about those
              situations is part of giving homeowners accurate guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Structural failure through the core
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Rot that has progressed through the full depth of a stile,
                  rail, or tread — leaving the wood soft, spongy, or crumbling —
                  compromises the structural integrity of the piece. Epoxy
                  consolidant can address localized areas; it cannot substitute
                  for structurally failed wood across a major section.
                </p>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Non-original modern replacements
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  If a previous owner already replaced original woodwork with
                  hollow-core doors, MDF cabinet fronts, or modern dimensional
                  lumber — and that replacement is now failing — there is no
                  old-growth material to preserve. Replacing modern substitutes
                  with better modern materials, or period-appropriate solid
                  wood, is a reasonable path.
                </p>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Thermal performance upgrades
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  A solid original wood exterior door is already a good thermal
                  performer. If an opening has a panel-glass configuration with
                  single-pane glazing that significantly affects energy
                  performance, and the glazing cannot be upgraded independently,
                  replacement may be warranted on efficiency grounds. This is
                  case-by-case and rarer than it is sometimes suggested.
                </p>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  When Sue refers out
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  If a piece comes in for assessment and replacement is the
                  genuine recommendation, we say so — and can refer to
                  contractors who work with period-appropriate materials and
                  understand historic home standards. We do not refinish work
                  that should not be refinished, and we do not recommend
                  replacement when refinishing is the better answer.
                </p>
              </div>
            </div>

            <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-5 rounded-sm">
              <p className="font-sans text-[#2A2421] leading-relaxed text-sm">
                <strong>The honest number:</strong> In 36 years of working
                exclusively on St. Louis historic homes, the cases where
                replacement was genuinely the right call — not an expedient one,
                not a contractor preference, but the actually correct answer —
                represent a small minority of the projects I have assessed. The
                wood in these houses was built to last, and in most cases, it
                has.
              </p>
            </div>
          </div>

          {/* Inline CTA */}
          <div className="bg-[#2A2421] text-white rounded-sm p-8 text-center">
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-2xl mb-3"
            >
              Not sure whether your woodwork can be saved?
            </p>
            <p className="font-sans text-[#9e9087] leading-relaxed text-base mb-6">
              Free in-person assessment. No obligation. Sue looks at the piece,
              gives you an honest answer, and quotes the work if refinishing is
              the right path — or tells you plainly if it is not.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
                style={{ borderRadius: "2px" }}
              >
                Schedule a Free Estimate
              </Link>
              <a
                href="tel:3143676054"
                className="text-lg font-sans font-medium text-white hover:text-[#11B2E8] transition-colors"
              >
                (314) 367-6054
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ section */}
      <section className="py-14 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
            Common Questions
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl text-[#2A2421] mb-10"
          >
            Refinish or replace: FAQ
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6"
              >
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  {item.question}
                </h3>
                <p className="font-sans text-[#6B5E55] leading-relaxed text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        heading="Ready to find out what your woodwork is actually worth saving?"
        subtext="Free in-person estimates. No obligation. 36 years in St. Louis historic homes."
      />
    </>
  );
}
