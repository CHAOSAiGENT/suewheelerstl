import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title:
    "Lead Paint and Wood Refinishing in St. Louis: What Homeowners Need to Know | Sue Wheeler Wood Refinishing",
  description:
    "If your St. Louis home was built before 1978, lead paint is almost certainly present on your woodwork. Here is what EPA certification means, what the RRP Rule requires, and how to verify your contractor's compliance.",
  openGraph: {
    title:
      "Lead Paint and Wood Refinishing in St. Louis: What Homeowners Need to Know",
    description:
      "If your St. Louis home was built before 1978, lead paint is almost certainly present on your woodwork. Here is what EPA certification means, what the RRP Rule requires, and how to verify your contractor's compliance.",
    url: "https://suewheelerstl.com/blog/lead-paint-wood-refinishing-st-louis",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Lead Paint and Wood Refinishing in St. Louis: What Homeowners Need to Know",
  description:
    "If your St. Louis home was built before 1978, lead paint is almost certainly present on your woodwork. Here is what EPA certification means, what the RRP Rule requires, and how to verify your contractor's compliance.",
  url: "https://suewheelerstl.com/blog/lead-paint-wood-refinishing-st-louis",
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
    question:
      "Does my home definitely have lead paint if it was built before 1978?",
    answer:
      "Almost certainly, yes — particularly on woodwork. Lead was added to paint as a drying agent, pigment, and hardener, and it was standard in interior and exterior paints before the EPA banned its residential use in 1978. In St. Louis City, 89.8% of homes predate 1978. The practical assumption for any refinishing work on woodwork in a pre-1978 home is that lead is present until testing proves otherwise. A certified contractor will treat it accordingly from the first hour of work.",
  },
  {
    question:
      "Is the refinishing process safe for my family while work is underway?",
    answer:
      "Under the EPA RRP Rule, certified contractors are required to establish containment that isolates the work area from the rest of the home — plastic sheeting over doorways and floors, sealed HVAC vents, and signage marking the work zone. This containment is designed to prevent lead dust from migrating into living areas. That said, for households with children under 6 or pregnant women — who face the highest health risk from lead exposure — we recommend temporarily vacating the immediate area during active stripping work as an added precaution. We will tell you exactly what the work scope requires before we begin.",
  },
  {
    question: "Do I need to leave my home during the project?",
    answer:
      "For most projects, no — particularly when work is isolated to a specific room or entryway with proper containment in place. For larger projects involving multiple rooms or whole-floor work, partial or full temporary relocation may make the project more comfortable. We discuss scope and logistics with every client before work begins so you can make an informed decision. We never start a project without those expectations being clear.",
  },
  {
    question:
      "How long until the space is safe to return to after work is complete?",
    answer:
      "After stripping and refinishing work is complete, the final step under the RRP Rule is a HEPA vacuum pass and wet-wipe cleaning of all surfaces in the work area — including walls, floors, and surfaces beyond the immediate work zone. We do not consider a project complete until the post-work cleaning is done and visual clearance is achieved. In most residential projects, the work area is ready for normal use the same day or the following morning. We will give you a specific timeline for your project.",
  },
  {
    question: "What records do you provide after a lead-involved project?",
    answer:
      "For every pre-1978 project, we provide written documentation of the renovation work performed, confirmation of RRP Rule compliance, and records of lead-safe work practices used. These records are yours to keep — they are useful for insurance purposes, future sale disclosure requirements, and your own records. Missouri and St. Louis City have specific lead disclosure requirements for residential property sales; having documentation of compliant remediation work is genuinely valuable.",
  },
];

export default function LeadPaintPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Blog", url: "https://suewheelerstl.com/blog" },
          {
            name: "Lead Paint and Wood Refinishing in St. Louis",
            url: "https://suewheelerstl.com/blog/lead-paint-wood-refinishing-st-louis",
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
            Lead Safety Guide
          </p>
          <h1
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl text-[#2A2421] mb-6 leading-tight"
          >
            Lead Paint and Wood Refinishing in St. Louis: What Homeowners Need
            to Know
          </h1>
          <p className="text-sm font-sans text-[#6B5E55]">
            By Sue Wheeler · April 2025 · 8 min read
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Lead paragraph */}
          <div className="border-l-4 border-[#11B2E8] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              If your home was built before 1978, lead paint is almost certainly
              present on your woodwork — doors, trim, cabinets, and staircases.
              In St. Louis City, 89.8% of homes predate 1978. That is not a
              technicality or a worst-case scenario; it is the baseline
              assumption any responsible refinishing contractor should be
              working from. What matters is how that lead is handled during
              refinishing work — and whether the contractor doing the work is
              legally qualified to handle it.
            </p>
          </div>

          {/* Warning callout */}
          <div className="bg-[#2A2421] text-white rounded-sm p-7 flex gap-5 items-start">
            <div className="shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-[#A65D37] flex items-center justify-center">
                <span className="text-white font-sans font-bold text-sm">
                  !
                </span>
              </div>
            </div>
            <div>
              <p className="font-sans font-semibold text-[#EBE6DE] mb-2 text-base">
                89.8% of St. Louis City homes predate 1978
              </p>
              <p className="font-sans text-[#9e9087] leading-relaxed text-sm">
                The EPA banned lead in residential paint in 1978. Any home built
                before that year should be treated as containing lead paint
                until testing proves otherwise. St. Louis City's housing stock
                is among the oldest in the country — the lead paint assumption
                applies to the vast majority of historic homes in the CWE,
                Lafayette Square, Benton Park, Compton Heights, and Shaw.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Federal Law
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What the EPA says about lead paint in refinishing work
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              In 2010, the EPA finalized the Renovation, Repair, and Painting
              (RRP) Rule. It is not a guideline or a best-practice
              recommendation. It is federal law that governs any contractor paid
              to perform renovation, repair, or painting work that disturbs
              lead-based paint in homes built before 1978, child-occupied
              facilities, and pre-1978 schools.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Wood refinishing — stripping, sanding, and refinishing painted
              woodwork — is squarely within the scope of the RRP Rule. Any
              contractor disturbing more than six square feet of painted surface
              per room in a pre-1978 home is required to comply.
            </p>

            <div className="space-y-4 mb-6">
              <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-5">
                <p className="font-sans font-semibold text-[#2A2421] mb-2">
                  What the RRP Rule requires:
                </p>
                <ul className="space-y-3 font-sans text-[#6B5E55] leading-relaxed text-base">
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Firm certification.
                      </strong>{" "}
                      The contracting firm must be EPA-certified as a Lead-Safe
                      Certified Firm. This certification requires application,
                      training documentation, and renewal every five years.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Certified renovator on-site.
                      </strong>{" "}
                      At least one individual on the project must hold an EPA
                      Certified Renovator credential — a person who has
                      completed an accredited RRP training course and passed the
                      associated assessment.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">Containment.</strong>{" "}
                      The work area must be isolated with plastic sheeting and
                      protective coverings. HVAC vents must be closed and
                      covered. Warning signs must be posted at the work area
                      perimeter.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        HEPA vacuuming and wet wiping.
                      </strong>{" "}
                      All work areas must be cleaned with HEPA-filter vacuum
                      equipment and wet wiping after work is complete. Standard
                      shop vacuums are not compliant — they exhaust fine
                      particles back into the air.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">
                        Waste disposal.
                      </strong>{" "}
                      Lead-contaminated debris, dust, and chemical waste must be
                      disposed of according to EPA and local regulations. It
                      cannot go in standard trash.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                    <span>
                      <strong className="text-[#2A2421]">Recordkeeping.</strong>{" "}
                      The contractor must provide the homeowner with
                      documentation of the work performed and compliance with
                      RRP requirements. These records must be kept for three
                      years.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              The rule exists because lead dust — the invisible byproduct of
              sanding, scraping, and stripping painted surfaces — is one of the
              most significant environmental health hazards in residential
              settings. It does not dissipate. It settles on floors and surfaces
              and can remain a hazard for months or years after the work is done
              if proper cleanup procedures are not followed.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              What Certification Covers
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What EPA Certified Lead Removal means in practice
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              EPA certification under the RRP Rule is not a marketing
              designation. It is a credential issued to firms and individuals
              who have met specific training and compliance requirements and
              registered with the EPA.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              For Wood Refinishing by Sue Wheeler, LLC, EPA certification means
              that every pre-1978 project is handled under the full RRP protocol
              from the first day of work. This is not optional or conditional on
              the size of the job — it applies to every project in a pre-1978
              home.
            </p>

            <div className="bg-[#2A2421] text-white rounded-sm p-8 mb-6">
              <h3
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-2xl mb-5"
              >
                What every pre-1978 project includes
              </h3>
              <ul className="space-y-4 font-sans text-[#EBE6DE] leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                    —
                  </span>
                  <span>
                    <strong className="text-white">Pre-work disclosure.</strong>{" "}
                    Before any work begins, homeowners receive the EPA's
                    Renovate Right pamphlet and written disclosure of the
                    lead-safe practices that will be used.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                    —
                  </span>
                  <span>
                    <strong className="text-white">
                      Full containment setup.
                    </strong>{" "}
                    Plastic sheeting over floors and adjacent surfaces. Sealed
                    doorways isolating the work area. HVAC vents closed and
                    covered to prevent dust migration through the duct system.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                    —
                  </span>
                  <span>
                    <strong className="text-white">
                      Wet-sanding and dust-minimizing techniques.
                    </strong>{" "}
                    Where sanding is required, wet methods are used to suppress
                    airborne dust. Dry sanding without dust control is not
                    compliant under the RRP Rule.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                    —
                  </span>
                  <span>
                    <strong className="text-white">
                      HEPA vacuum cleaning.
                    </strong>{" "}
                    All work areas are cleaned with certified HEPA vacuum
                    equipment after stripping and finishing work, followed by
                    wet wiping of all surfaces.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                    —
                  </span>
                  <span>
                    <strong className="text-white">
                      Compliant waste disposal.
                    </strong>{" "}
                    All lead-contaminated materials — chemical waste, dust, old
                    finish — are bagged and disposed of according to EPA and St.
                    Louis City regulations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#11B2E8] font-bold mt-0.5 shrink-0">
                    —
                  </span>
                  <span>
                    <strong className="text-white">
                      Written documentation.
                    </strong>{" "}
                    You receive written records of the work performed and the
                    lead-safe practices used. These are yours to keep.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              Certification is renewed every five years and requires current
              training documentation. You can verify any firm's certification
              status directly through the EPA's public database — the link and
              instructions are in the next section.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Legal Risk
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              What happens if a contractor is not certified
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              Non-compliance with the RRP Rule is not a minor oversight. The
              consequences are real, and they extend to the homeowner — not just
              the contractor.
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
                  Contractor liability
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  The EPA can impose civil penalties of up to $37,500 per day
                  per violation on contractors who perform RRP-covered work
                  without certification or who fail to follow required work
                  practices. These penalties apply to the firm and to individual
                  certified renovators who supervise non-compliant work. The
                  enforcement risk is real — the EPA actively investigates
                  complaints from homeowners and neighbors.
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
                  Homeowner exposure
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  If a contractor performs non-compliant RRP work on your
                  property, you may face complications with homeowners insurance
                  claims related to lead contamination, disclosure obligations
                  when you sell the property, and potential liability if a
                  future occupant is harmed. Missouri requires sellers to
                  disclose known lead paint hazards. If non-compliant work was
                  done and documented — or discoverable — that disclosure
                  obligation becomes more complicated.
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
                  The health consequence is the most serious one
                </h3>
                <p className="text-[#6B5E55] font-sans leading-relaxed text-base">
                  Lead dust produced by sanding or scraping without proper
                  containment and HEPA cleanup does not go away on its own. It
                  settles into carpet fibers, cracks in flooring, and on
                  horizontal surfaces. Children are at highest risk — lead
                  poisoning at even low levels causes irreversible neurological
                  damage. There is no safe level of lead exposure for young
                  children. A contractor who sands painted woodwork without
                  containment or HEPA vacuuming in a home with children is
                  creating a health hazard that may not be apparent for weeks or
                  months.
                </p>
              </div>
            </div>

            <div className="bg-[#EBE6DE] border-l-4 border-[#A65D37] p-6 rounded-sm">
              <p className="font-sans font-semibold text-[#2A2421] mb-2">
                This is not a technicality
              </p>
              <p className="text-[#2A2421] font-sans leading-relaxed text-base">
                Contractors who skip RRP compliance often do so because it adds
                time and cost to the job. That is precisely why the law requires
                it — the time and cost of proper containment, cleaning, and
                disposal are built into the job for a reason. When a low bid
                leaves these steps out, you are not saving money. You are
                absorbing the risk yourself.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              Verification
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              How to verify a contractor's EPA certification
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              The EPA maintains a public database of all Lead-Safe Certified
              Firms. You do not have to take a contractor's word for their
              certification status — you can look it up in under two minutes.
            </p>

            <div className="border border-[rgba(42,36,33,0.15)] bg-white rounded-sm p-6 mb-6">
              <p className="font-sans font-semibold text-[#2A2421] mb-4">
                How to check:
              </p>
              <ol className="space-y-4 font-sans text-[#6B5E55] leading-relaxed text-base list-none">
                <li className="flex gap-4">
                  <span className="font-bold text-[#11B2E8] shrink-0">1.</span>
                  <span>
                    Go to{" "}
                    <strong className="text-[#2A2421]">
                      epa.gov/lead/find-certified-firm-epas-lead-safe-certification-program
                    </strong>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-[#11B2E8] shrink-0">2.</span>
                  <span>
                    Search by firm name or zip code. Missouri firms will appear
                    in the results.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-[#11B2E8] shrink-0">3.</span>
                  <span>
                    Confirm the firm name, address, and certification expiration
                    date. An expired certification means the firm is not
                    currently in compliance.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-[#11B2E8] shrink-0">4.</span>
                  <span>
                    Ask the contractor for the name of the on-site Certified
                    Renovator. This is the individual — not just the firm — who
                    must hold current credentials and be present during the
                    work.
                  </span>
                </li>
              </ol>
            </div>

            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              What to ask a prospective contractor before hiring:
            </p>
            <ul className="space-y-3 font-sans text-[#6B5E55] leading-relaxed text-base mb-6">
              <li className="flex gap-3">
                <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                <span>
                  "Is your firm currently EPA Lead-Safe Certified, and what is
                  your certification number?"
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                <span>
                  "Who is the Certified Renovator who will be on-site during
                  this project?"
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                <span>
                  "Will you provide written documentation of your RRP compliance
                  after the project?"
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#11B2E8] font-bold shrink-0">—</span>
                <span>
                  "What HEPA vacuum equipment do you use, and what does your
                  post-work cleanup procedure involve?"
                </span>
              </li>
            </ul>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              A certified contractor who follows the RRP Rule will answer all of
              these questions without hesitation. Evasion or vague answers — "we
              follow all the rules" without specifics — is a signal to keep
              asking or keep looking.
            </p>
          </div>

          {/* St. Louis angle */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
              The St. Louis Context
            </p>
            <h2
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-3xl text-[#2A2421] mb-6"
            >
              Why lead compliance matters more in St. Louis than almost anywhere
            </h2>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              St. Louis City consistently ranks among the top metropolitan areas
              in the country for childhood lead poisoning rates. The age of the
              housing stock is the primary driver. Homes in the CWE, Benton
              Park, Compton Heights, Lafayette Square, Shaw, and the surrounding
              neighborhoods were built overwhelmingly between 1880 and 1940 —
              decades when lead paint was used on everything, in heavy
              concentrations.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base mb-6">
              The woodwork in these homes — original fir doors, oak staircases,
              built-in cabinets — carries layer upon layer of lead-based paint
              accumulated across 80 to 140 years of repaints. Stripping that
              woodwork releases lead dust. The question is not whether lead dust
              will be produced; it is whether the contractor is equipped and
              certified to contain and clean it.
            </p>
            <p className="text-[#2A2421] font-sans leading-relaxed text-base">
              After 36 years of working exclusively in St. Louis historic homes,
              every project we take on in a pre-1978 structure — which is nearly
              all of them — is handled under full RRP compliance. This is not an
              upsell or an optional add-on. It is how the work gets done.
            </p>
          </div>

          {/* CTA mid-article */}
          <div className="bg-[#2A2421] text-white rounded-sm p-8 text-center">
            <p
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
              className="text-2xl mb-3"
            >
              EPA Certified. Every pre-1978 project, fully documented.
            </p>
            <p className="font-sans text-[#9e9087] leading-relaxed text-base mb-6">
              Questions about lead paint and your project? Call Sue directly —
              she answers every call personally and will give you a straight
              answer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
                style={{ borderRadius: "2px" }}
              >
                Get a Free Estimate
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
            Lead paint and refinishing: FAQ
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
        heading="Lead-safe refinishing, fully documented."
        subtext="EPA Certified Lead Removal. 36 years in St. Louis historic homes. Sue answers every call. (314) 367-6054."
      />
    </>
  );
}
