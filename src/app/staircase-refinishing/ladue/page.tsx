import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Ladue Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Staircase refinishing in Ladue, MO. Colonial and estate center-hall staircases in oak and poplar. Correcting partial refinishes and mismatched stain. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/staircase-refinishing/ladue",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Ladue",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6362,
      longitude: -90.3806,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in Ladue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ladue Colonial and estate homes often have formal center-hall staircases — wider treads, substantial newel posts, turned spindles in oak or poplar. Some have been refinished before but not correctly. Sue addresses the whole staircase or is honest about what a partial refinish will and won't achieve. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Ladue staircase has been partially refinished before with mismatched stain — can you fix that?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but the honest answer is that fixing a mismatched partial refinish usually means going back to bare wood on the entire staircase and starting over. Trying to match a new stain to an existing worn stain on different surfaces almost never produces a uniform result. A full strip and refinish is the path to an even, correct-looking staircase. Sue will assess your specific situation and tell you exactly what the options are.",
      },
    },
    {
      "@type": "Question",
      name: "My Ladue home has a curved staircase — is that more complex to refinish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Curved staircases are more complex, yes — the handrail bends require different approaches to stripping and finishing than a straight run, and the curved tread nosing profiles need careful attention. But complexity is not a barrier. Sue has worked on curved staircases throughout her 36-year career. She will assess the specific staircase and give you an honest picture of the scope and timeline before any work begins.",
      },
    },
  ],
};

export default function LadueStaircaseRefinishingPage() {
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
            name: "Ladue",
            url: "https://suewheelerstl.com/staircase-refinishing/ladue",
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
            Staircase Refinishing — Ladue
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Staircase refinishing in <em>Ladue.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Ladue Colonial and estate homes often have formal center-hall
            staircases — wider treads, substantial newel posts, turned spindles
            in oak or poplar. Some have been refinished before, but not
            correctly: painted spindles, mismatched stain from partial
            refinishes. Sue addresses the whole staircase — or is honest about
            what a partial refinish will and won't achieve.
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
            Ladue staircases — what they are and what they need
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Ladue's Colonial Revival and estate homes from the 1940s through
              1960s were designed around center-hall plans, and the staircase is
              central to that plan — literally and architecturally. These are
              formal staircases: wider treads than a typical residential run,
              substantial newel posts, turned spindles in oak or poplar,
              sometimes with a curved or half-turn landing. They were designed
              to be seen.
            </p>
            <p>
              Unlike the inner-ring neighborhoods where old-growth fir and oak
              are universal, post-war Ladue construction used the lumber
              available at the time. Staircase treads and spindles are typically
              oak — a durable hardwood that holds up well to foot traffic.
              Poplar appears on painted surfaces. The material quality in
              Ladue's better homes is high, even if the old-growth character of
              pre-war timber is not present.
            </p>
            <p>
              The most common issue we encounter in Ladue staircases is not
              neglect but prior work done incorrectly. Previous owners or
              previous contractors have done partial refinishes — retouching
              treads without touching spindles, painting spindles rather than
              stripping them, applying mismatched stain to replacement treads.
              The result is a staircase that looks uneven and unfinished even
              when individual elements are in decent condition.
            </p>
            <p>
              Fixing that requires going back to bare wood throughout and
              refinishing as a unified whole. Sue will tell you that clearly at
              the estimate — and she will also tell you if a different approach
              might produce an acceptable result for less work.
            </p>
          </div>
        </div>
      </section>

      {/* Service section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Staircase work we do most in Ladue
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Full Colonial staircase refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                A complete Ladue Colonial staircase refinishing — treads,
                risers, spindles, rail, and newel post — typically takes three
                to five days depending on scope and spindle count. We structure
                the project to maintain safe passage through the home during the
                work. The result is a staircase with unified color, consistent
                sheen, and finish applied correctly throughout rather than in
                sections.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Correcting mismatched partial refinishes
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Ladue staircases that have had prior partial work — replacement
                treads in a different stain, painted spindles alongside stained
                rail, mismatched sheen from different finish products — almost
                always require a full strip and unified refinish to look
                correct. Trying to match into an existing worn stain on multiple
                surfaces produces results that read as patchwork. We explain
                this clearly before starting and let you make the call.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Curved and half-turn staircase refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Curved staircases are more complex but not a barrier. The bent
                handrail requires different stripping and finishing approaches
                than a straight run. Curved tread nosing profiles need careful
                attention at the ends. Sue has worked on curved staircases
                throughout her career and will give you an accurate scope and
                timeline at the estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Stain color changes
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Ladue homeowners sometimes want to update the stain color of
                their staircase — moving from a golden oak to a darker walnut
                tone, for example, to align with a kitchen remodel or updated
                flooring. A full strip and refinish with the new stain achieves
                this. Going darker is generally straightforward; going lighter
                is more nuanced and Sue will discuss the realistic range of
                achievable outcomes for your specific wood.
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
            Lead paint in Ladue staircases — what to know
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Ladue homes built before 1978 — including the substantial post-war
              Colonial stock from the 1940s and 1950s — may contain lead paint
              on painted surfaces including staircase risers and spindles. Lead
              was standard in residential paint through the mid-20th century.
              Homes built after 1978 are generally lead-free, but the
              1940s–1970s range that covers much of established Ladue warrants
              attention.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. For any
              pre-1978 Ladue home, staircase refinishing follows full EPA RRP
              protocol: containment, HEPA filtration, wet methods during
              stripping, and documented cleanup. If you are unsure when your
              home was built, that is worth establishing before any refinishing
              work begins.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <blockquote className="space-y-4">
            <p
              className="text-xl text-[#2A2421] leading-relaxed"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
            >
              "Our Colonial on McKnight has a curved staircase that a previous
              owner had partially refinished — the treads were one color, the
              spindles another, and the rail was painted. Sue stripped the whole
              thing and did it correctly. It looks like it was done once, by
              someone who knew what they were doing."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, McKnight Rd., Ladue
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
                Do you refinish staircases in Ladue?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Ladue's formal Colonial and estate staircases in oak and
                poplar are solid refinishing candidates. We work in Ladue
                regularly, including correction of prior partial refinishes.
                Call (314) 367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Ladue staircase has been partially refinished before with
                mismatched stain — can you fix that?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes, but fixing it honestly means going back to bare wood
                throughout and refinishing as a unified whole. Trying to match
                into existing worn stain on multiple surfaces produces
                patchwork. Sue will assess your specific staircase and explain
                exactly what a correct result requires before any work begins.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Ladue home has a curved staircase — is that more complex to
                refinish?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                More complex, yes — but not a barrier. The bent handrail and
                curved tread nosing require different approaches than a straight
                run. Sue has worked on curved staircases throughout her 36-year
                career. She will give you an accurate scope and timeline at the
                estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Ladue staircase."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
