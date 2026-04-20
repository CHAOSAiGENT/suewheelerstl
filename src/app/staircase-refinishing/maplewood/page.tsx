import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Maplewood Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Staircase refinishing in Maplewood, St. Louis. Hand-strip restoration for straight-run fir staircases with turned spindles. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/staircase-refinishing/maplewood",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Maplewood",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6075,
      longitude: -90.3271,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in Maplewood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Maplewood is a neighborhood we know well and work in regularly. The straight-run fir staircases in the neighborhood's bungalows and cottages are built from old-growth Douglas fir — excellent material that responds well to hand-strip refinishing. Call (314) 367-6054 for a free in-person estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Maplewood staircase spindles are painted — can they be stripped and stained?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but spindles must be stripped by hand — never by dipping. Dip tanks use water-based chemical solutions that dissolve the glue at the base of turned spindles, causing them to loosen over time. Hand stripping preserves the structural integrity of the spindle at its base and produces a cleaner surface for staining and finishing. This is the only correct method for painted spindles.",
      },
    },
    {
      "@type": "Question",
      name: "Is it worth refinishing a simple straight-run staircase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The value of refinishing a staircase has nothing to do with its complexity — it's about the material. Maplewood's straight-run fir staircases were built from old-growth Douglas fir, the same timber that produced far more elaborate staircases in grander homes. The wood strips and finishes beautifully, and a refinished staircase changes the feel of an entire home. Simple doesn't mean undeserving of restoration.",
      },
    },
  ],
};

export default function MaplewoodStaircaseRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Staircase Refinishing",
            url: "https://suewheelerstl.com/staircase-refinishing",
          },
          {
            name: "Maplewood",
            url: "https://suewheelerstl.com/staircase-refinishing/maplewood",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-sans uppercase tracking-widest text-[#A65D37] mb-4">
            Staircase Refinishing — Maplewood
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Staircase refinishing in <em>Maplewood.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            A Maplewood bungalow staircase is unpretentious in design — straight
            run, turned fir spindles, simple newel post. But the old-growth fir
            it's built from is the same material as the most expensive
            staircases in St. Louis. It deserves the same careful restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Staircase Estimate
            </Link>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 text-base font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors"
            >
              <Phone size={16} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood context */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What makes Maplewood staircase refinishing different
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Maplewood's staircases are modest by design. The neighborhood was
              built for working families, and the homes reflect that: compact
              floor plans, single-flight straight-run stairs, functional newel
              posts, turned spindles without elaborate carving. No grand entry
              halls, no sweeping curves. What Maplewood staircases have is
              old-growth Douglas fir — the same timber as every other staircase
              built in St. Louis in the early 1900s, regardless of the
              neighborhood's social status.
            </p>
            <p>
              Old-growth fir was the standard construction material of the era.
              What set it apart from today's lumber is not species but age:
              trees harvested from old-growth Pacific Northwest forests had been
              growing for 200 to 400 years, producing growth rings eight to
              twelve per inch. Modern fir might have two or three. The result is
              a wood that is harder, more dimensionally stable, and more
              resistant to denting and wear — exactly the qualities you want in
              a staircase tread that has been walked on for a hundred years.
            </p>
            <p>
              Maplewood staircases that have been painted — and most have,
              multiple times — are often in better structural condition than
              their appearance suggests. The paint has protected the wood from
              direct wear while slowly obscuring its grain and color. When we
              strip a Maplewood staircase back to bare wood, owners are
              consistently surprised by what was underneath: tight, warm,
              beautiful fir that simply needed to breathe again.
            </p>
            <p>
              The renovation culture in Maplewood is real — neighbors watch each
              other's projects and talk about what worked. We get calls from
              Maplewood specifically because someone saw a finished staircase on
              the next block and wanted the same for their home.
            </p>
          </div>
        </div>
      </section>

      {/* Service-specific section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Staircase work we do most in Maplewood
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Treads and risers
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Tread refinishing is the most impactful single change you can
                make to a Maplewood staircase. Old-growth fir treads are thick
                and dense; even after a century of foot traffic they typically
                have plenty of material left. We hand-strip the accumulated
                finish, level any surface wear, and apply a durable topcoat
                selected for the traffic level your staircase receives.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Spindles — hand-stripped only
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Turned fir spindles cannot go in a dip tank. Dipping dissolves
                the glue at the base of the spindle where it seats into the
                tread — a connection point under constant lateral stress from
                people gripping the rail. Every spindle in a Maplewood staircase
                is stripped by hand, one at a time, preserving the structural
                integrity of the joint and producing a surface that takes stain
                evenly.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Newel posts and handrails
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Maplewood newel posts are simple by CWE standards — turned or
                square-tapered profiles without elaborate capitals. But they're
                the visual anchor of the staircase, and their condition affects
                the overall impression more than any other single element. We
                strip and refinish newel posts and handrails in sequence with
                the rest of the staircase so the finish reads as one continuous
                project.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Full staircase restoration
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Many Maplewood owners want the complete project: treads, risers,
                spindles, newel, and rail all stripped and finished together.
                This produces the most coherent visual result and is typically
                more efficient to schedule than piecemeal work. We assess the
                full staircase during the estimate and give you a clear picture
                of what's involved before any commitment.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/staircase-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              All Staircase Refinishing Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#F8F6F1", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Lead paint in Maplewood staircases — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Every Maplewood home was built before 1978, when lead was removed
              from residential paint. Staircase paint — accumulated over
              decades, often many layers — should be treated as lead-bearing.
              This is especially important for staircases, where stripping work
              generates fine dust that travels easily through an open floor
              plan.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Her
              staircase process includes full containment of the work area, HEPA
              filtration, wet methods to minimize airborne dust, and documented
              cleanup procedures. She produces a completion record for your
              property file — useful documentation for any future sale.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-2 border-[#A65D37] pl-6">
            <p
              className="text-xl text-[#2A2421] italic leading-relaxed mb-4"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
            >
              "We thought our staircase was nothing special — just a plain
              straight stair in a small bungalow. Sue stripped it back and the
              fir was incredible. Deep grain, warm amber color. It's the first
              thing you see when you walk in the front door and it completely
              transformed how the house feels."
            </p>
            <cite className="text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Laclede Station Rd., Maplewood
            </cite>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Common questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Do you refinish staircases in Maplewood?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. The straight-run fir staircases in Maplewood's bungalows
                and cottages are built from old-growth Douglas fir — excellent
                material for hand-strip refinishing. We work in Maplewood
                regularly. Call (314) 367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Maplewood staircase spindles are painted — can they be
                stripped and stained?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes — and spindles must be stripped by hand, never by dipping.
                Dip tanks dissolve the glue at the base of turned spindles,
                weakening the joint over time. Hand stripping is the only
                correct method and produces a cleaner surface for stain.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Is it worth refinishing a simple straight-run staircase?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. The value of refinishing a staircase is in the material,
                not the design complexity. Old-growth fir in a modest Maplewood
                bungalow is the same timber as in the grandest St. Louis homes —
                it finishes just as beautifully, and a restored staircase
                changes the character of an entire home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Maplewood staircase."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
