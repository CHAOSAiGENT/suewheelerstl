import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Clayton Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Staircase refinishing in Clayton, St. Louis. Hand-strip restoration for pre-war Colonial and Tudor formal staircases in old-growth fir and oak. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/staircase-refinishing/clayton",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "City",
    name: "Clayton",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6459,
      longitude: -90.3262,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in Clayton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clayton's pre-war Colonial and Tudor homes have some of the most substantial staircases in the St. Louis area — formal entry staircases with turned spindles, significant newel posts, and oak or fir treads. We work in Clayton regularly and are familiar with the range of woodwork found in both the pre-war and post-war homes here. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Clayton Colonial home has a formal staircase with carved newel posts — can those details be preserved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Carved newel posts and turned spindles are refinished in place by hand — we never dip staircase components. Dipping dissolves the glue at spindle bases and can damage carved details. Hand stripping lets us work carefully around every profile and carved element, preserving the detail rather than obscuring it. The newel post is typically the most visible feature of a formal staircase and we treat it accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "My Clayton home was built in the 1950s — does it have woodwork worth refinishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the specific home. Post-war Clayton homes vary considerably — some were built with solid wood staircases that are genuine refinishing candidates; others have simpler construction or have had treads and balusters replaced. We assess in person and give you an honest evaluation of what you have and what refinishing can realistically deliver. We don't make assumptions based on era alone.",
      },
    },
  ],
};

export default function ClaytonStaircaseRefinishingPage() {
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
            name: "Clayton",
            url: "https://suewheelerstl.com/staircase-refinishing/clayton",
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
            Staircase Refinishing — Clayton
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Staircase refinishing in <em>Clayton.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Clayton's pre-war Colonial and Tudor homes were built with formal
            staircases designed to impress — turned spindles, substantial newel
            posts, and oak or fir treads milled from old-growth timber. This
            work requires hand-stripping by someone who understands what's
            underneath.
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
            What makes Clayton staircase refinishing different
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Clayton's pre-war residential streets — developed from the 1910s
              through the 1930s — contain some of the most architecturally
              significant Colonial Revival and Tudor Revival homes in the St.
              Louis region. These homes were built to a high standard, and their
              staircases reflect that: Colonial Revival style with formal turned
              spindles, substantial newel posts, and oak or fir treads selected
              for grain consistency and width.
            </p>
            <p>
              The staircases in these pre-war Clayton homes were built to be
              seen. Entry halls were designed around them. The newel post, the
              handrail profile, the spacing of the turned balusters — these were
              specified decisions, not afterthoughts. When that woodwork has
              been painted over, what's lost isn't just the color. It's the
              material quality that was selected specifically for this purpose.
            </p>
            <p>
              Clayton also includes post-war and modern construction. These
              homes may have solid wood staircases worth refinishing, or they
              may have simpler construction or previous replacements. We assess
              honestly. A Clayton homeowner asking whether their 1958 ranch
              staircase is worth refinishing deserves a straight answer, not a
              sales pitch. We give you what we find when we look.
            </p>
            <p>
              For the pre-war homes with original staircases, the work is
              significant and the result is proportionally significant. A formal
              Colonial staircase restored to natural wood becomes the central
              visual feature of the entry hall — which is exactly what it was
              designed to be.
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
            Staircase work we do most in Clayton
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Formal Colonial Revival staircases
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The hallmark of pre-war Clayton's Colonial Revival homes is the
                formal entry staircase — often with a landing, substantial
                turned balusters, and a newel post with architectural detail.
                These staircases were built from old-growth oak or fir and
                finished to a high standard from the beginning. Restoring them
                to natural wood requires careful hand stripping of every
                surface: treads, risers, balusters, handrail, and newel post,
                each handled according to its profile and condition.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Turned and carved spindles
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Spindles in Clayton's pre-war homes are never candidates for dip
                stripping. Dip tanks dissolve the glue at the spindle base — the
                joint between the spindle and the tread or bottom rail — and can
                distort turned profiles that accumulated finish has locked in
                place. We strip spindles by hand, working with small tools to
                get into every profile while preserving the dimensional accuracy
                of the turning. It is painstaking work, but there is no shortcut
                that produces an acceptable result.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Tudor Revival staircase details
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Clayton's Tudor Revival homes often feature heavier, more
                architectural staircase millwork — square-section or twisted
                balusters, substantial box newels with panel detail, and oak
                treads with pronounced grain. The oak in these staircases is
                quartersawn in many cases, which means it has the tight,
                medullary ray figure that distinguishes genuine period millwork.
                Stripping and refinishing quartersawn oak returns a surface that
                no replacement material can replicate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Tread and handrail refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Treads and handrails take the most wear on any staircase and are
                often in the most variable condition. We assess each tread
                individually — some may require only stripping and refinishing,
                others may have surface damage that needs addressing before the
                finish goes on. The handrail profile, typically a continuous
                molded shape from bottom to top, is stripped and refinished to
                match. The finish selection for treads prioritizes durability
                without sacrificing the warmth of natural wood.
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
            Lead paint in Clayton homes — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Pre-war Clayton homes were built decades before lead was removed
              from residential paint in 1978. Any painted surface in a pre-1950
              Clayton home should be treated as potentially lead-bearing — and
              for staircase work, which generates dust that travels easily
              through an open entry hall, this is particularly important.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Her
              process includes full containment of the work area, HEPA
              filtration, wet methods to suppress airborne dust, and documented
              cleanup procedures that produce a completion record for your
              property file. This is the legally required process under EPA RRP
              regulations for disturbing painted surfaces in pre-1978 homes —
              and it has been her standard practice since those regulations took
              effect.
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
              "Our 1927 Colonial has a formal staircase that had been painted
              white — spindles, newel, handrail, all of it. Sue stripped the
              entire thing by hand over several days. The oak that came through
              is extraordinary. You can see the grain in the treads, the
              medullary rays in the quartersawn balusters. Real estate agents
              keep asking us about it when they come through."
            </p>
            <cite className="text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Concordia Lane, Clayton
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
                Do you refinish staircases in Clayton?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Clayton's pre-war Colonial and Tudor homes have some of the
                most substantial staircases in the St. Louis area. We work in
                Clayton regularly and are familiar with the range of woodwork in
                both pre-war and post-war homes here. Call (314) 367-6054 for a
                free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Clayton Colonial home has a formal staircase with carved
                newel posts — can those details be preserved?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Carved newel posts and turned spindles are refinished in
                place by hand — we never dip staircase components. Dipping
                destroys the glue joints at spindle bases and can damage carved
                profiles. Hand stripping lets us work carefully around every
                detail, preserving the original millwork rather than obscuring
                it further.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Clayton home was built in the 1950s — does it have woodwork
                worth refinishing?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                It depends on the specific home. Post-war Clayton homes vary
                considerably. Some were built with solid wood staircases that
                are genuine candidates for refinishing; others have simpler
                construction or replacements. We assess in person and give you
                an honest answer — not an assumption based on the build year
                alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Clayton staircase."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
