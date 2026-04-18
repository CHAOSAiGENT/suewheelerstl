import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "How Much Does Wood Refinishing Cost in St. Louis? (2025 Price Guide) | Sue Wheeler Wood Refinishing",
  description:
    "Door refinishing, staircase refinishing, and cabinet refinishing costs in St. Louis — realistic ranges, what affects the price, and why refinishing original wood is almost always cheaper than replacing it.",
  openGraph: {
    title:
      "How Much Does Wood Refinishing Cost in St. Louis? (2025 Price Guide)",
    description:
      "Door refinishing, staircase refinishing, and cabinet refinishing costs in St. Louis — realistic ranges, what affects the price, and why refinishing original wood is almost always cheaper than replacing it.",
    url: "https://suewheelerstl.com/blog/wood-refinishing-cost-st-louis",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Much Does Wood Refinishing Cost in St. Louis? (2025 Price Guide)",
  description:
    "Door refinishing, staircase refinishing, and cabinet refinishing costs in St. Louis — realistic ranges, what affects the price, and why refinishing original wood is almost always cheaper than replacing it.",
  url: "https://suewheelerstl.com/blog/wood-refinishing-cost-st-louis",
  datePublished: "2025-04-17",
  dateModified: "2025-04-17",
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
    question: "Do you give free estimates?",
    answer:
      "Yes, always. There is no charge for an estimate and no obligation to proceed. For most projects, Sue visits the home to look at the scope in person — condition of the existing finish, number of pieces, lead paint considerations, and any special requirements like stain matching or on-site versus off-site work. A written estimate follows. We do not quote over the phone without seeing the work first, because scope varies significantly and we would rather give you an accurate number than a guess.",
  },
  {
    question: "Is there a deposit required?",
    answer:
      "Yes. A deposit is required to schedule the project and reserve the time on the calendar. The deposit amount and payment schedule are outlined in the written estimate before any work begins. There are no surprises on the invoice — the final price matches the estimate unless the scope changes during the project, in which case we discuss it with you before proceeding.",
  },
  {
    question: "Does lead paint make the project more expensive?",
    answer:
      "Yes, modestly. EPA RRP Rule compliance — containment setup, HEPA vacuuming, compliant waste disposal, and written documentation — adds time and material cost to the project. For most single-room or single-door projects, this addition is not dramatic. For larger projects with extensive surface area and multiple rooms, containment setup is a more significant line item. We itemize this in every estimate for a pre-1978 home so you can see exactly what you are paying for.",
  },
  {
    question: "How long after the estimate until the project starts?",
    answer:
      "That depends on scheduling. We typically have a backlog of several weeks, which reflects the volume of ongoing work rather than a delay. Once an estimate is accepted and a deposit is received, the project is scheduled. We give you a start date and a realistic completion timeline at that point. We do not start projects without a clear schedule commitment on both sides.",
  },
];

export default function CostGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "How Much Does Wood Refinishing Cost in St. Louis?",
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
            2025 Price Guide
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            How Much Does Wood Refinishing Cost in St. Louis?
          </h1>
          <p className="text-sm font-sans text-[#6B5E55]">
            By Sue Wheeler · April 2025 · 6 min read
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Lead paragraph */}
          <div className="border-l-4 border-[#11B2E8] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              Wood refinishing costs vary significantly by service type, scope,
              and condition of the existing finish. The only reliable way to get
              an accurate number for your specific project is a free in-person
              estimate — and that is exactly what we provide. But if you want
              realistic ballpark ranges before you make that call, this guide
              covers what different projects actually cost in St. Louis in 2025,
              and what drives the price in each category.
            </p>
          </div>

          {/* Quick reference box */}
          <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm overflow-hidden">
            <div className="px-6 py-4 bg-[#2A2421]">
              <p
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-white"
              >
                At a glance: typical cost ranges
              </p>
            </div>
            <div className="divide-y divide-[rgba(42,36,33,0.1)]">
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-sans text-[#2A2421] font-medium">
                  Front door (exterior)
                </span>
                <span className="font-sans text-[#11B2E8] font-semibold">
                  Varies by condition &amp; scope
                </span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-sans text-[#2A2421] font-medium">
                  Interior doors (per door)
                </span>
                <span className="font-sans text-[#11B2E8] font-semibold">
                  Per-unit pricing
                </span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-sans text-[#2A2421] font-medium">
                  Staircase refinishing
                </span>
                <span className="font-sans text-[#11B2E8] font-semibold">
                  $300–$1,500+
                </span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-sans text-[#2A2421] font-medium">
                  Kitchen cabinet refinishing
                </span>
                <span className="font-sans text-[#11B2E8] font-semibold">
                  Fraction of replacement cost
                </span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <span className="font-sans text-[#2A2421] font-medium">
                  Architectural woodwork
                </span>
                <span className="font-sans text-[#11B2E8] font-semibold">
                  Project-dependent
                </span>
              </div>
            </div>
            <div className="px-6 py-4 bg-[#F8F6F1]">
              <p className="font-sans text-sm text-[#6B5E55]">
                All pricing requires in-person estimate. Lead paint compliance,
                condition, and stain matching affect final cost.
              </p>
            </div>
          </div>

          {/* Section 1: Doors */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Door Refinishing
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Door refinishing cost
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Doors are the most common single-piece refinishing project we take
              on — and also the one with the widest cost range, because no two
              doors arrive in the same condition or require the same scope of
              work.
            </p>

            <div className="space-y-5 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  Front door (exterior)
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-3">
                  Exterior doors take more abuse than any other piece of
                  woodwork in the home — UV exposure, moisture cycling, and
                  temperature extremes degrade finish faster than interior
                  conditions. A front door refinish includes stripping the old
                  finish, sanding to a clean substrate, any necessary wood
                  repair, staining (or clear finish), and application of an
                  exterior-grade topcoat designed to move with the wood.
                </p>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-3">
                  Cost drivers for exterior doors: the number of layers of old
                  paint or varnish, whether the door includes glass panels with
                  detailed surrounding molding, whether the frame and casing are
                  included, and whether lead paint containment and disposal are
                  required.
                </p>
                <p className="text-[#2A2421] font-sans font-medium text-base">
                  A single front door, door only (not frame), in average
                  condition: several hundred dollars. With frame, sidelights,
                  and multiple paint layers including lead, the price increases
                  accordingly. Free estimate is the right first step.
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
                  Interior doors
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-3">
                  Interior doors — particularly original five-panel or six-panel
                  fir doors common in pre-1920 St. Louis homes — are priced per
                  unit. The condition of the existing finish matters a great
                  deal: a door with two layers of old varnish is a different job
                  than one with six layers of paint accumulated over 80 years.
                </p>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-3">
                  Multiple-door projects benefit from consolidated scheduling —
                  stripping and finishing a set of eight doors in one visit is
                  more efficient than individual trips. We discuss project scope
                  and scheduling options during the estimate.
                </p>
                <p className="text-[#2A2421] font-sans font-medium text-base">
                  Per-door pricing varies by door type, condition, and finish
                  selected. Projects involving stain matching to adjacent
                  woodwork carry a premium for the color work required to
                  achieve a seamless match.
                </p>
              </div>
            </div>

            <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-5 rounded-sm">
              <p className="font-sans text-[#2A2421] leading-relaxed text-sm">
                <strong>On stain matching:</strong> Matching a new door finish
                to existing woodwork — adjacent trim, a staircase, a built-in —
                takes more time and material than a standard single color. We do
                this routinely in St. Louis historic homes and it is well worth
                doing correctly. A door that is visibly off in tone reads wrong
                to everyone who walks through the entry.
              </p>
            </div>
          </div>

          {/* Section 2: Staircases */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Staircase Refinishing
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Staircase refinishing cost
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Staircases are among the most labor-intensive refinishing projects
              — and among the most transformative. In a historic St. Louis home,
              a properly refinished staircase is often the architectural
              centerpiece. The range is wide because the scope variables are
              significant.
            </p>

            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6 mb-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-4"
              >
                Cost range: $300 to $1,500 and up
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed text-base mb-4">
                This range reflects the significant variation in staircase
                scope. A short run of eight treads with a simple railing and
                plain square balusters is a different job than a 16-tread main
                stair with turned balusters, carved newel post, and shaped
                handrail in need of complete stripping.
              </p>
              <div className="space-y-3">
                <p className="font-sans font-semibold text-[#2A2421] text-base mb-2">
                  What drives staircase cost:
                </p>
                <ul className="space-y-3 font-sans text-[#6B5E55] leading-relaxed text-base">
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">Tread count.</strong>{" "}
                      More treads equal more square footage of stripping and
                      finishing. Simple math, but it adds up.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Spindle / baluster count and profile.
                      </strong>{" "}
                      Plain square balusters are fast. Turned spindles with
                      details require careful hand work on each one to strip
                      without blurring the profile. A 16-tread stair with three
                      balusters per tread is 48 individual spindles, each
                      needing individual attention.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">Newel post.</strong>{" "}
                      Carved or turned newel posts are the most labor-intensive
                      single component of any staircase — lots of profile
                      detail, deep recesses that require careful hand work, and
                      significant visual impact if not done right.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Railing profile.
                      </strong>{" "}
                      A simple round handrail is faster than a shaped bullnose
                      rail with cove profiles. The finish needs to get into
                      every surface.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Current finish condition.
                      </strong>{" "}
                      A staircase with one worn coat of varnish takes less work
                      than one painted over multiple times. In pre-1978 homes,
                      multiple paint layers almost certainly include lead paint,
                      which adds containment and disposal requirements.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Finish type selected.
                      </strong>{" "}
                      Oil-based varnish, water-based polyurethane, and
                      penetrating oil finishes each have different material
                      costs and application requirements. We discuss options and
                      their trade-offs during the estimate.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              Staircases in continuous use cannot simply be taken out of service
              for a week. We schedule staircase work in phases — completing one
              half at a time and alternating treads if needed — so the stair
              remains usable throughout the project. This adds to the project
              duration but is standard practice for occupied homes.
            </p>
          </div>

          {/* Section 3: Cabinets */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Kitchen Cabinet Refinishing
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Kitchen cabinet refinishing cost
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Kitchen cabinet refinishing is the project where the comparison to
              replacement is most stark — and most in favor of refinishing.
            </p>

            <div className="bg-[#2A2421] text-white rounded-sm p-8 mb-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-2xl mb-4"
              >
                The replacement math
              </h3>
              <p className="font-sans text-[#EBE6DE] leading-relaxed text-base mb-4">
                New kitchen cabinets — stock cabinets installed — typically run
                $15,000 to $30,000 for a full kitchen. Semi-custom runs $20,000
                to $50,000. Custom cabinetry can exceed $100,000.
              </p>
              <p className="font-sans text-[#EBE6DE] leading-relaxed text-base mb-4">
                Refinishing the original solid-wood cabinets in a historic St.
                Louis home costs a fraction of that — typically in the range of
                a few thousand dollars for a full kitchen, depending on door
                count, condition, and finish type selected.
              </p>
              <p className="font-sans text-[#9e9087] leading-relaxed text-sm">
                And the original cabinets — if they are solid old-growth wood —
                are better than most of what you would replace them with.
                Today's production cabinets are primarily MDF or plywood
                carcasses with veneer or thermofoil faces. Original solid wood
                cabinets from a 1920s kitchen are a different category of
                material.
              </p>
            </div>

            <div className="space-y-5 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <h3
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                  className="text-xl text-[#2A2421] mb-3"
                >
                  Painted vs. stained finish
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Cabinet refinishing can go two directions: a painted finish or
                  a stained-and-clear-coated finish that shows the wood grain.
                  Painted finishes require meticulous surface prep and primer
                  work to achieve a factory-smooth result; the wood grain
                  beneath must be sealed fully. Stained finishes require
                  stripping back to bare wood, color work, and clear topcoat.
                  Both are valid choices — the decision comes down to the
                  kitchen's style and what the homeowner wants. We discuss both
                  options at the estimate.
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
                  What affects cabinet project cost
                </h3>
                <ul className="space-y-3 font-sans text-[#6B5E55] leading-relaxed text-base">
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">Door count.</strong>{" "}
                      Per-door pricing is the base unit. A kitchen with 24 doors
                      is a larger project than one with 12.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Door profile complexity.
                      </strong>{" "}
                      A flat-panel Shaker door is faster to strip and finish
                      than a raised-panel door with detailed molding around the
                      perimeter. Profile work takes time when done correctly.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Whether cabinet boxes are included.
                      </strong>{" "}
                      Door refinishing alone is one scope; including face
                      frames, drawer fronts, and exposed box sides is a larger
                      scope.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Existing finish condition.
                      </strong>{" "}
                      Kitchens accumulate grease, moisture damage, and multiple
                      layers of old finish. Heavy buildup takes more stripping
                      time.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">Lead paint.</strong>{" "}
                      Pre-1978 kitchen cabinets almost certainly have lead
                      paint. RRP compliance adds to the cost but is legally
                      required and genuinely necessary in a food-preparation
                      environment.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Architectural woodwork */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Architectural Woodwork
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Built-ins, wainscoting, millwork, and mantels
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Architectural woodwork — built-in bookcases, wainscoting panels,
              fireplace mantels, window and door millwork, and ornamental trim —
              is scope-dependent and assessed project by project. These are the
              pieces that define a historic home's character more than anything
              else, and they are also among the most sensitive to poor
              refinishing technique.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Pricing depends on linear footage of molding, square footage of
              paneled surface, number of distinct profiles, existing finish
              condition, and whether the work is done on-site or requires
              removal. Most built-ins and wainscoting are finished in place —
              they cannot be removed without damaging the surrounding structure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Built-in bookcases and cabinetry
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Assessed by size and detail. A simple painted built-in with
                  flat-panel doors is different from a floor-to-ceiling oak
                  bookcase with carved pilasters and glazed upper cabinets.
                </p>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Wainscoting and paneling
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Priced by square footage and profile complexity. Beadboard is
                  simpler; raised-panel wainscoting with cap rail and base
                  requires more individual detail work.
                </p>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Fireplace mantels
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  High-impact, high-detail work. Original mantels in historic
                  St. Louis homes often have carved ornament and pilaster
                  details that require individual attention at every profile.
                </p>
              </div>
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  Window and door millwork
                </p>
                <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                  Casing, aprons, stools, and surrounds — typically priced per
                  opening or by linear foot depending on complexity and
                  condition.
                </p>
              </div>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              All architectural woodwork projects are estimated in person. There
              is no reliable way to price this category without seeing it —
              photographs help, but the condition of the existing finish, the
              number of profile transitions, and the site access situation all
              affect the estimate in ways that cannot be assessed remotely.
            </p>
          </div>

          {/* Section 5: What affects cost */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Cost Factors
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What affects the cost of any refinishing project
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Across all project types, these are the variables that move the
              price up or down most significantly:
            </p>

            <div className="space-y-3 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  01
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Condition of the existing finish
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    Stripping one coat of worn varnish is a different job than
                    removing six layers of oil paint, latex, and shellac
                    accumulated over 100 years. The condition of the current
                    finish is the single biggest variable in labor cost.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  02
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Lead paint presence
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    EPA RRP Rule compliance adds containment setup, HEPA
                    cleaning, and documented disposal to every pre-1978 project.
                    This is a real cost — but it is also a legal requirement and
                    a genuine health necessity. Projects with lead paint will
                    cost more than comparable projects without it.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  03
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    On-site vs. off-site work
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    Some pieces can be removed and worked in a controlled
                    off-site setting; others must be finished in place. On-site
                    work in an occupied home involves setup, containment, and
                    cleanup that off-site work does not. Doors are typically the
                    one piece that can often be worked off-site.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  04
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Number of pieces and project scope
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    A single door and a set of eight doors involve the same
                    setup per visit but very different total labor. Larger
                    projects have more predictable per-unit costs because setup
                    is amortized across more pieces.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  05
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Stain matching required
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    Matching a new door or set of cabinets to existing woodwork
                    requires color work — mixing, testing, adjusting — that adds
                    time. When matching is done well, it is invisible. When it
                    is not done, it is always visible.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5 flex gap-4">
                <span className="text-[#A65D37] font-sans font-bold text-lg mt-0.5 shrink-0">
                  06
                </span>
                <div>
                  <p className="font-sans font-semibold text-[#2A2421] mb-1">
                    Finish type selected
                  </p>
                  <p className="font-sans text-[#6B5E55] text-sm leading-relaxed">
                    Oil-based finishes typically require longer dry times
                    between coats, adding to project duration. Water-based
                    finishes dry faster. Penetrating oils and wax finishes have
                    different material costs. We discuss the trade-offs for each
                    application during the estimate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Refinishing vs replacement */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The Better Investment
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Refinishing vs. replacement: the honest comparison
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Refinishing original solid wood is almost always the better
              economic choice. It is also, for original old-growth wood, the
              better choice on every other measure.
            </p>

            <div className="bg-[#EBE6DE] rounded-sm p-7 mb-6">
              <p
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl text-[#2A2421] mb-4"
              >
                The wood in a St. Louis historic home cannot be replaced with
                equivalent wood
              </p>
              <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-4">
                Old-growth Douglas fir, quarter-sawn white oak, American
                chestnut — the timber that built St. Louis's historic homes in
                the 1880s through 1920s — grew for 200 to 300 years before it
                was cut. The grain is four to five times tighter than new-growth
                lumber. It is harder, more stable, and more beautiful. It is not
                available today at any price from a standard lumber supplier.
              </p>
              <p className="text-[#2A2421] font-sans leading-relaxed text-base">
                Replacing an original door with a new solid-wood door gets you a
                door made of 30-year-growth lumber — softer, looser grain, less
                dimensionally stable, and without the 120 years of patina that
                gives original wood its depth. Replacing it with a fiberglass or
                steel door means no wood at all. Neither is an upgrade.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6">
                <p className="font-sans font-semibold text-[#11B2E8] mb-3 text-sm uppercase tracking-wider">
                  Refinishing
                </p>
                <ul className="space-y-2 font-sans text-[#6B5E55] text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> Preserves
                    original old-growth material
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> Fraction
                    of replacement cost
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> Maintains
                    architectural character
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> Adds
                    value for historic home buyers
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> Lasts
                    decades when done correctly
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 shrink-0">✓</span> No
                    construction disruption
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
                    Significantly higher cost
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> Inferior
                    wood or composite materials
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> May require
                    structural modification
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> Lead paint
                    disposal still required
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span> Demolition
                    and installation disruption
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              The one exception: if the wood is genuinely beyond saving —
              structural damage, rot through the core, repeated dip-stripping
              that has compromised the substrate — replacement may be the only
              option. In 36 years, I have seen this occasionally. I have seen
              people told their wood was unsalvageable when it was not, far more
              often. If you are not sure, get an honest assessment before
              deciding.
            </p>
          </div>

          {/* Get a quote CTA */}
          <div className="bg-[#2A2421] text-white rounded-sm p-8 text-center">
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-2xl mb-3"
            >
              The only number that matters is your specific project.
            </p>
            <p className="font-sans text-[#9e9087] leading-relaxed text-base mb-6">
              Free in-person estimates. No obligation. Sue comes to you, looks
              at the work, and gives you a written price. No phone estimates, no
              guessing — just an accurate number you can make a decision from.
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
            Pricing and estimates: FAQ
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
        heading="Ready to get a real number for your project?"
        subtext="Free in-person estimates. No obligation. 36 years in St. Louis historic homes."
      />
    </>
  );
}
