import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Clayton Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Clayton, St. Louis. Hand-strip restoration for pre-war Colonial and Tudor entry doors in fir and oak. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/clayton",
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
      name: "Do you refinish doors in Clayton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work in Clayton regularly, primarily in the pre-war residential streets where the 1910s–1930s Colonials and Tudors have original fir and oak doors worth restoring. Post-war and newer homes in Clayton may have doors that have been replaced — we assess each situation in person. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Clayton Tudor has the original paneled entry door — what does refinishing involve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a substantial paneled entry door in a pre-war Clayton Tudor, refinishing begins with removal. We take the door to our shop, strip every layer of paint or degraded finish by hand, assess the wood condition, address any surface damage, and apply a new finish appropriate for an exterior door in our climate. The door is rehung when the finish is fully cured. The entire process is done without dip tanks — hand stripping only, which preserves the surface integrity and the flat-sawn grain of old-growth fir or the figure of oak.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my Clayton home's doors are original old-growth wood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most reliable indicator is the home's age. Clayton pre-war homes — built before roughly 1940 — were almost universally constructed with old-growth Douglas fir or oak. If the doors appear to be original to the house and the house predates the war, the wood almost certainly qualifies. In person, we can assess the wood through the finish and tell you what you have. Weight, grain pattern visible at the edge, and construction details all provide information. We do this assessment at no charge as part of the estimate.",
      },
    },
  ],
};

export default function ClaytonDoorRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Door Refinishing",
            url: "https://suewheelerstl.com/door-refinishing",
          },
          {
            name: "Clayton",
            url: "https://suewheelerstl.com/door-refinishing/clayton",
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
            Door Refinishing — Clayton
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Clayton.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Clayton's pre-war Colonials and Tudors have some of the finest
            original entry and interior doors in St. Louis — substantial paneled
            fir and oak that were built to last and are worth the investment of
            proper restoration. We work in Clayton's residential streets
            regularly and assess each home honestly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Door Estimate
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
            What makes Clayton door refinishing different
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Clayton is a city of two distinct eras, and it matters for door
              refinishing to understand which one you're in. The pre-war
              residential streets — primarily developed from the 1910s through
              the 1930s — contain some of the most substantial Colonial Revival
              and Tudor Revival homes in the St. Louis area. These homes were
              built to a high standard, and their doors reflect that:
              multi-panel entry doors in old-growth fir or oak, interior door
              suites with matching casing, and hardware that was specified
              rather than selected from a catalog.
            </p>
            <p>
              Post-war Clayton is a different story. Homes built from the 1950s
              onward may have original doors that are worth refinishing, or they
              may have had doors replaced with hollow-core or modern solid-core
              units at some point. We don't make assumptions in either direction
              — we assess the actual doors in front of us. Clayton homeowners
              are sophisticated and don't need to be sold on refinishing; they
              need accurate information about what their specific doors are and
              what's realistic.
            </p>
            <p>
              For pre-war Clayton homes, the case for refinishing is usually
              clear. A 1928 Colonial entry door in old-growth oak is a far
              better piece of material than anything available as a replacement
              today. The wood is denser, more dimensionally stable, and more
              beautiful under a proper finish. Restoring it preserves something
              genuinely irreplaceable.
            </p>
            <p>
              We hand-strip every door — no dip tanks. For pre-war Clayton doors
              in fir or oak, chemical dipping raises the grain, disrupts the
              flat-sawn surface, and can cause delamination in multi-panel
              construction where the wood has moved slightly over a century.
              Hand stripping takes more time and produces a better result.
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
            Door work we do most in Clayton
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Pre-war Colonial and Tudor entry doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The entry doors on Clayton's pre-war homes are often the finest
                woodwork in the house — substantial paneled construction in
                old-growth fir or oak, sometimes with leaded or divided-lite
                glass panels, built to make an impression. We remove the door,
                strip it completely in our shop, address any surface condition
                issues, and refinish to a standard appropriate for the door's
                quality. The board-up method keeps your entry secure while we
                work.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior door suites
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Pre-war Clayton homes typically have matching interior door sets
                throughout — the same panel design, the same species, the same
                hardware profile on every door. When interior doors have been
                painted, refinishing decisions are visual decisions that affect
                the whole house. We approach interior door projects in Clayton
                with that context in mind, not as individual door replacements.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Oak doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Some Clayton pre-war homes — particularly the more formal
                Colonials — have interior doors in oak rather than fir. Oak
                under accumulated paint is particularly striking when stripped:
                strong ray figure, warm color, and a grain that takes stain in
                ways fir doesn't. We have worked with both species throughout
                the St. Louis area and know how each behaves under stripping and
                finishing.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Honest assessment for post-war homes
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                If your Clayton home was built after the war, we will look at
                what you have and tell you whether refinishing makes sense. Some
                post-war doors are solid wood worth restoring; others have been
                replaced with hollow-core units or have damage that makes
                refinishing uneconomical. We don't refinish doors that aren't
                worth it — that doesn't serve you.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/door-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              All Door Refinishing Services →
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
              Clayton's pre-war homes — the primary market for door refinishing
              — were built decades before the 1978 lead paint ban. Multiple
              layers of paint on a 1920s or 1930s door should be assumed to
              contain lead. For post-war homes, any pre-1978 construction still
              carries the same requirement.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Her
              process for Clayton homes includes proper containment, HEPA
              filtration, wet stripping methods to minimize dust, and documented
              completion records. All intensive stripping work is done in her
              shop, which keeps lead paint work out of the home for the most
              critical phase.
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
              "Our 1931 Colonial has the original front door — a beautiful
              five-panel oak piece that had been painted over twice. Sue
              stripped it back and refinished it in a way that finally shows
              what it actually is. The color, the grain, the way the panels
              catch light at different times of day — it's extraordinary. We've
              had three neighbors ask for her contact."
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
                Do you refinish doors in Clayton?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. We work in Clayton regularly, primarily in the pre-war
                residential streets with original fir and oak doors. Post-war
                homes are assessed individually. Call (314) 367-6054 for a free
                in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Clayton Tudor has the original paneled entry door — what does
                refinishing involve?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                We remove the door, do all stripping and finishing in our shop,
                and rehang it when the finish is fully cured. Hand stripping
                only — no dip tanks, which would raise the grain and disrupt the
                surface of old-growth fir or oak. The process preserves the
                door's structural integrity and surface quality.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                How do I know if my Clayton home's doors are original old-growth
                wood?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Age is the primary indicator — pre-war Clayton homes almost
                universally used old-growth fir or oak. We assess in person
                during the free estimate, looking at weight, grain at the edge,
                and construction details. No charge, no commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Clayton doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
