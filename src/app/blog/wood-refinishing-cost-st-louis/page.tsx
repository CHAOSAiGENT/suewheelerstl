import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "Why Refinishing Beats Replacement — The Case for Keeping Your Original Woodwork | Sue Wheeler",
  description:
    "New woodwork is made from plantation-grown lumber with wide grain and soft wood. The fir and oak in your St. Louis home is old-growth — tighter, denser, and irreplaceable. Here is why that matters.",
  openGraph: {
    title:
      "Why Refinishing Beats Replacement — The Case for Keeping Your Original Woodwork",
    description:
      "New woodwork is made from plantation-grown lumber with wide grain and soft wood. The fir and oak in your St. Louis home is old-growth — tighter, denser, and irreplaceable. Here is why that matters.",
    url: "https://suewheelerstl.com/blog/wood-refinishing-cost-st-louis",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Why Refinishing Beats Replacement — The Case for Keeping Your Original Woodwork",
  description:
    "New woodwork is made from plantation-grown lumber with wide grain and soft wood. The fir and oak in your St. Louis home is old-growth — tighter, denser, and irreplaceable. Here is why that matters.",
  url: "https://suewheelerstl.com/blog/wood-refinishing-cost-st-louis",
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
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
    question: "Is old-growth wood really different from new wood?",
    answer:
      "Yes — significantly. Old-growth Douglas fir, which built most of St. Louis's pre-1960 homes, grew for 200 to 400 years before harvest. The result is grain that runs 8 to 16 rings per inch, compared to 2 to 4 rings per inch in plantation pine grown for 30 years and cut. Tighter grain means greater density, higher hardness, more dimensional stability, and better resistance to moisture movement. Plantation lumber is not a substitute. It is a different material.",
  },
  {
    question:
      "What happens to the original wood if I replace instead of refinish?",
    answer:
      "It goes to a landfill. There is no salvage market for old interior woodwork at scale. The door, the staircase tread, the cabinet face frame — it gets torn out and discarded. And what replaces it is almost always inferior: MDF carcasses with veneer faces, particleboard shelving, plantation pine dressed up with a factory finish. The replacement looks newer. It is not better.",
  },
  {
    question: "Can refinished wood last as long as new wood?",
    answer:
      "Yes — and the framing of that question actually gets it backwards. The wood in your home has already lasted 80 to 120 years. It has proven itself. A refinished piece with properly applied finish coats will continue to last for decades. The question is not whether old wood can last — it is whether new wood will.",
  },
  {
    question: "What if my woodwork is damaged — can it still be refinished?",
    answer:
      "Minor damage — scratches, dents, areas of worn finish, surface checking — is exactly what refinishing is for. That is the normal scope of a refinishing project. Structural damage such as rot through the core or severe warping from water intrusion is a different conversation. Even then, the decision deserves honest evaluation before automatic replacement. In 36 years, I have seen far more wood declared unsalvageable that was not than wood that was genuinely beyond saving.",
  },
];

export default function WhyRefinishingBeatReplacementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "Why Refinishing Beats Replacement",
            url: "https://suewheelerstl.com/blog/wood-refinishing-cost-st-louis",
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
            Why Original Wood Wins
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            New wood is not better wood.
          </h1>
          <p className="text-sm font-sans text-[#6B5E55]">
            By Sue Wheeler · April 2026 · 7 min read
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Lead paragraph */}
          <div className="border-l-4 border-[#11B2E8] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              The most common mistake I see homeowners make — and the one that
              costs them the most — is replacing original woodwork because they
              assume new must mean better. It does not. The doors, staircases,
              and cabinets in a pre-1960 St. Louis home are made from old-growth
              timber that cannot be sourced today at any price. Refinishing
              preserves it. Replacement destroys it and substitutes something
              inferior.
            </p>
          </div>

          {/* Section 1: The wood itself */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Material
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What old-growth wood actually is
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Old-growth timber is wood from trees that grew slowly, over
              centuries, before being harvested. The Douglas fir that frames St.
              Louis's historic homes — the fir in your doors, your window
              surrounds, your stair treads — grew for 200 to 400 years before it
              was cut. Quarter-sawn white oak, American chestnut, and long-leaf
              yellow pine from that same era share the same characteristic:
              extraordinarily tight grain.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Grain density is measured in rings per inch. Old-growth Douglas
              fir runs 8 to 16 rings per inch. Plantation pine — what goes into
              today's production millwork and furniture-grade lumber — runs 2 to
              4 rings per inch. That is four times the wood, per inch of
              cross-section, in the original material.
            </p>

            <div className="bg-[#EBE6DE] rounded-sm p-7 mb-6">
              <p
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-4"
              >
                What tighter grain means in practice
              </p>
              <ul className="space-y-3 font-sans text-[#2A2421] leading-relaxed text-base">
                <li className="flex gap-3">
                  <span className="text-[#A65D37] font-bold shrink-0">—</span>
                  <span>
                    <strong>Greater hardness.</strong> Tighter grain means more
                    wood fiber per unit area. The surface is harder, more
                    resistant to denting and scratching, and holds finish better
                    over decades.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#A65D37] font-bold shrink-0">—</span>
                  <span>
                    <strong>Dimensional stability.</strong> Slow-grown wood
                    moves less with changes in humidity than fast-grown wood.
                    Exterior doors and stair treads in 100-year-old homes still
                    fit their openings. Fast-grown lumber warps, cups, and
                    twists at a rate old-growth does not.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#A65D37] font-bold shrink-0">—</span>
                  <span>
                    <strong>Natural figure and character.</strong> Tight grain
                    produces the figure — the wave and shimmer — visible in
                    quarter-sawn oak, the fine lines in fir, the depth in old
                    chestnut. Plantation lumber is relatively featureless.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#A65D37] font-bold shrink-0">—</span>
                  <span>
                    <strong>120 years of patina.</strong> The wood has
                    stabilized. It has completed its initial movement. It has
                    developed a surface depth that new lumber, no matter how
                    well finished, cannot replicate for years.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              This timber is not available from standard lumber suppliers. The
              old-growth forests that produced it were harvested over a century
              ago. What you have in your home — if it was built before 1960 and
              the original woodwork is intact — is irreplaceable in any
              practical sense. You cannot go buy more of it.
            </p>
          </div>

          {/* Section 2: What replacement actually means */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Replacement Reality
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What replacement actually gets you
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              When a homeowner replaces original woodwork, the new material is
              almost always one of the following:
            </p>

            <div className="space-y-4 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  MDF and particleboard
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Most kitchen cabinets sold today — including high-end
                  production lines — use MDF (medium-density fiberboard) or
                  particleboard for the carcass and shelving. These are
                  compressed wood fiber products. They have no grain. They
                  cannot be refinished when the surface is damaged. They expand
                  and swell when exposed to moisture. They hold screws poorly
                  compared to solid wood. They are cheaper to manufacture. They
                  are not better materials.
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
                  Plantation pine and fast-grown softwoods
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Production millwork — door frames, base molding, window
                  casing, interior doors — is typically plantation pine grown
                  for 20 to 30 years. The grain is wide, the wood is soft, and
                  it dents easily. A new solid-wood door from a big-box supplier
                  is softer than the original fir door it replaces. It will look
                  worn faster.
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
                  Veneer over engineered substrate
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Higher-end production cabinets often have solid-wood face
                  frames and door fronts over MDF or plywood carcasses. This is
                  marketed as quality. The visible surfaces may be solid wood —
                  but the construction is hybrid, and the substrate determines
                  long-term durability. The original 1920s kitchen cabinet with
                  a solid wood carcass, solid wood shelves, and solid wood doors
                  is a different object entirely.
                </p>
              </div>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              None of these are upgrades. Newer does not mean better when the
              original material was superior to begin with.
            </p>
          </div>

          {/* Section 3: Structural superiority */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Structural Case
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              A refinished original is structurally superior to a replacement
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              A front door that has been on a historic St. Louis home for 100
              years has already proven something: it works. It fits the opening.
              It has weathered decades of temperature and humidity cycling. The
              wood has reached equilibrium with its environment.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              A new door of plantation pine has not been tested. It will move
              and settle as it adjusts. The grain is wide enough that moisture
              cycling will cause more visible seasonal expansion. It will look
              less good in 15 years than the original door looked when it was
              refinished.
            </p>

            <div className="bg-[#2A2421] text-white rounded-sm p-8 mb-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-2xl mb-4"
              >
                The refinished staircase
              </h3>
              <p className="font-sans text-[#EBE6DE] leading-relaxed text-base mb-4">
                A Victorian staircase in a Kirkwood or Webster Groves home — the
                kind with a carved newel post, turned spindles, and a continuous
                curved railing — was built by craftsmen working in old-growth
                white oak or fir. The joinery is mortise and tenon. The wood is
                dense enough that it has absorbed 100 years of traffic and still
                isn&rsquo;t soft.
              </p>
              <p className="font-sans text-[#EBE6DE] leading-relaxed text-base mb-4">
                A new staircase of comparable design and workmanship — if you
                could find one — would cost more than refinishing the original
                by a significant margin. And it would be made from contemporary
                lumber that will not match the original in density, stability,
                or figure.
              </p>
              <p className="font-sans text-[#9e9087] leading-relaxed text-sm">
                Refinishing the original is not a compromise. It is the correct
                decision on every dimension except the one where the new thing
                is newer.
              </p>
            </div>
          </div>

          {/* Section 4: Environmental case */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Environmental Case
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              No manufacturing. No landfill. No shipping.
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Refinishing is the most environmentally efficient option available
              for existing woodwork. The wood is already there. No trees are
              cut. No manufacturing energy is consumed. No freight is moved.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  No new manufacturing
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Cabinet manufacturing, millwork production, and door
                  fabrication are energy-intensive processes. Refinishing
                  requires finish products and labor — that is all.
                </p>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  No landfill
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Replaced woodwork goes to the landfill. Old-growth timber that
                  survived 100 years disposed of in a dumpster is the worst
                  possible use of an irreplaceable material.
                </p>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  No shipping
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Production cabinets and millwork are manufactured regionally
                  or imported. The carbon footprint of freight does not apply to
                  woodwork that is already installed in your home.
                </p>
              </div>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              Historic preservation is inherently sustainable. The greenest
              building material is the one that is already there.
            </p>
          </div>

          {/* Section 5: Reversibility */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Practical Case
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Refinishing is reversible. Replacement is permanent.
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              This is the practical argument that is hardest to argue against.
              When you refinish, you keep your options open. The wood is still
              there. In 10 or 15 years, when the finish has aged again, you can
              refinish again. The wood survives each cycle — that is what wood
              is for.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              When you replace, the decision is permanent. The original is gone.
              You cannot un-replace a door. You cannot retrieve a staircase from
              the landfill. The new owner of your home in 20 years will not have
              the option you had today — and they will know the difference if
              they know historic homes.
            </p>

            <div className="bg-[#EBE6DE] border-l-4 border-[#A65D37] p-5 rounded-sm mb-6">
              <p className="font-sans text-[#2A2421] leading-relaxed text-base">
                <strong>On resale value:</strong> In historic neighborhoods —
                Kirkwood, Webster Groves, Soulard, Tower Grove, the Central West
                End — buyers who want historic homes want original woodwork. A
                home that has been carefully maintained, with original doors and
                staircases in good condition, commands a different buyer and a
                different price than the same house with production
                replacements. Original woodwork is a feature. Replacement reads
                as a loss.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <p className="font-sans font-semibold text-[#11B2E8] mb-3 text-sm uppercase tracking-wider">
                  Refinishing
                </p>
                <ul className="space-y-2 font-sans text-[#6B5E55] text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span>{" "}
                    Old-growth material preserved
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span>{" "}
                    Reversible — can refinish again
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span>{" "}
                    Architectural character maintained
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> No
                    manufacturing or landfill waste
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> Value add
                    for historic home buyers
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> Proven
                    material — it already lasted 100 years
                  </li>
                </ul>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <p className="font-sans font-semibold text-[#6B5E55] mb-3 text-sm uppercase tracking-wider">
                  Replacement
                </p>
                <ul className="space-y-2 font-sans text-[#6B5E55] text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> Original
                    material permanently gone
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span>{" "}
                    Irreversible decision
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> MDF,
                    particleboard, plantation pine
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> Old-growth
                    timber to landfill
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> Loss of
                    historic character and value
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> Unproven
                    material — starts aging immediately
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6: When replacement is actually right */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Honest Caveat
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              When replacement is actually the right call
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              The case for refinishing is strong — but it is not unconditional.
              There are situations where replacement is genuinely necessary:
            </p>
            <ul className="space-y-4 mb-6 font-sans text-[#2A2421] leading-relaxed text-base">
              <li className="flex gap-3">
                <span className="text-[#A65D37] font-bold shrink-0">—</span>
                <span>
                  <strong>Rot through the core.</strong> Wood that has been wet
                  for years and has lost structural integrity is not a
                  refinishing candidate. It needs replacement.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#A65D37] font-bold shrink-0">—</span>
                <span>
                  <strong>Severe structural warping.</strong> A door that has
                  warped beyond the range of adjustment, or a stair tread that
                  has split structurally, may need replacement rather than
                  repair.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#A65D37] font-bold shrink-0">—</span>
                <span>
                  <strong>Prior damage from aggressive stripping.</strong> Wood
                  that has been dip-stripped multiple times may have compromised
                  fibers — though this is less common than it is claimed.
                </span>
              </li>
            </ul>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              In 36 years of work in St. Louis historic homes, I have
              encountered each of these situations — but far less often than
              homeowners are told. The more common scenario is wood that has
              been described as unsalvageable by someone who lacked either the
              skill or the interest to save it.
            </p>
            <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-5 rounded-sm">
              <p className="font-sans text-[#2A2421] leading-relaxed text-sm">
                <strong>Get a second opinion before replacing.</strong> If
                someone has told you that your woodwork is beyond refinishing,
                it is worth having that assessment verified. The estimate is
                free. The decision to replace is permanent.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#2A2421] text-white rounded-sm p-8 text-center">
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-2xl mb-3"
            >
              Before you replace, get an honest assessment.
            </p>
            <p className="font-sans text-[#9e9087] leading-relaxed text-base mb-6">
              Free in-person estimates. Sue looks at the wood, tells you what it
              needs, and gives you a straight answer. No obligation.
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
            Refinishing vs. replacement: FAQ
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
        heading="Ready to talk about your woodwork?"
        subtext="Free in-person estimates. No obligation. 36 years in St. Louis historic homes."
      />
    </>
  );
}
