import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Ballwin Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing in Ballwin, MO. Oak treads, spindles, and newel posts restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function BallwinStaircaseRefinishingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
    telephone: "(314) 367-6054",
    areaServed: {
      "@type": "City",
      name: "Ballwin",
      containedInPlace: {
        "@type": "State",
        name: "Missouri",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5953,
      longitude: -90.5462,
    },
    description:
      "Hand-stripped staircase refinishing for Ballwin's Colonial-style oak staircases. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish staircases in Ballwin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler refinishes staircases throughout Ballwin, including the oak Colonial-style staircases common in the neighborhood's 1970s and 1980s homes. Whether the issue is tread wear, dated stain color, or painted spindles, she assesses each staircase individually before recommending a course of work.",
        },
      },
      {
        "@type": "Question",
        name: "My Ballwin staircase has carpeted treads with oak underneath — can those be refinished?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, yes. Carpet protects the oak beneath it from foot traffic, so the treads are often in better condition than expected once the carpet and tack strips are removed. Sue inspects the oak before committing to refinishing — if the wood is solid and the surface is refinishable, she will tell you. If there is damage that changes the approach, she will explain that too.",
        },
      },
      {
        "@type": "Question",
        name: "My Ballwin staircase spindles are painted white — can they be stripped and stained?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Painted spindles are common on Ballwin's 1970s and 1980s staircases — it was a popular style at the time. Sue strips painted spindles by hand, which is the only way to get into the turned profiles without damaging the wood. Once stripped, they can be stained to match the treads and handrail for a unified look.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Staircase Refinishing", href: "/staircase-refinishing" },
          { name: "Ballwin", href: "/staircase-refinishing/ballwin" },
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
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#A65D37" }}
          >
            Staircase Refinishing · Ballwin, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Staircase Refinishing in <em>Ballwin</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Ballwin's Colonial homes were built with solid oak staircases —
            turned spindles, box newel posts, and oak treads that hold up well
            under decades of use. Sue Wheeler strips and refinishes them by
            hand, bringing worn or dated staircases back to a finish that looks
            current and is built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded text-white font-semibold"
              style={{ backgroundColor: "#11B2E8" }}
            >
              Request a Free Estimate
            </Link>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: "#2A2421" }}
            >
              <Phone size={18} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood context */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Ballwin staircase character and common refinishing needs
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Ballwin's post-war Colonial and two-story ranch homes typically
              feature center-hall staircases built in the 1970s and 1980s. The
              profile is familiar: turned oak spindles, a simple or box newel
              post, an oak handrail, and treads that were either left bare or
              carpeted shortly after construction. These are not ornate
              Victorian staircases, but they are solid-oak construction
              throughout and well worth refinishing.
            </p>
            <p className="text-base leading-relaxed">
              Tread wear is the most common issue. High-traffic staircases show
              wear through the finish and into the surface of the oak at the
              front edge of each tread — the point where feet land repeatedly
              over decades. This can be corrected with proper sanding and
              refinishing, though the approach depends on how deep the wear has
              gone.
            </p>
            <p className="text-base leading-relaxed">
              Painted spindles are a distinctive feature of many 1970s and 1980s
              staircases. White or cream spindles were fashionable in that era,
              and many Ballwin staircases still have them. Sue strips painted
              spindles by hand — the only reliable method for getting into the
              profiles of turned wood without damage — and returns them to a
              stained finish that matches the rest of the staircase.
            </p>
            <p className="text-base leading-relaxed">
              Carpeted staircases are also common in Ballwin. When the carpet
              comes up, the oak beneath is often in better condition than
              expected — carpeting actually protects treads from foot traffic.
              Sue inspects the underlying wood before committing to a
              refinishing plan.
            </p>
          </div>
        </div>
      </section>

      {/* Service section */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl mb-10"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Staircase refinishing services for Ballwin homes
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                  color: "#2A2421",
                }}
              >
                Oak tread refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Bare oak treads on Ballwin's Colonial staircases wear through
                the finish at the nose — the leading edge — first. Sue assesses
                the depth of wear before sanding, using the minimum abrasion
                necessary to get back to clean wood without thinning the tread
                unnecessarily. The result is a level surface with fresh stain
                and finish.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                  color: "#2A2421",
                }}
              >
                Spindle stripping and refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Turned oak spindles — whether clear-finished or painted white —
                are stripped by hand. This is the only way to remove finish from
                the profiles of turned wood without losing the crisp lines of
                the original profile. Once stripped, spindles are stained to
                match the handrail and treads for a unified staircase finish.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                  color: "#2A2421",
                }}
              >
                Newel post and handrail refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The newel post and handrail accumulate hand oils and wear
                through the finish faster than other staircase components. Sue
                refinishes these as part of a complete staircase project or as
                standalone work if the rest of the staircase is in acceptable
                condition.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                  color: "#2A2421",
                }}
              >
                Under-carpet oak tread restoration
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                When Ballwin homeowners remove carpet from their staircases,
                they frequently discover oak treads in better condition than
                anticipated. Sue inspects each tread after carpet removal —
                checking for tack strip damage, staple holes, and surface
                condition — and develops a refinishing plan based on what is
                actually there rather than assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{ backgroundColor: "#F8F6F1", borderColor: "#11B2E8" }}
        className="py-14 px-6 border-l-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Lead paint on pre-1978 Ballwin staircases
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Ballwin's early development predates the 1978 federal lead paint
            ban. If your home was built before that year, lead paint on
            staircase woodwork must be assumed until testing proves otherwise.
            Sue Wheeler is EPA RRP Certified and applies full containment
            protocol on any pre-1978 staircase project.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            This means HEPA vacuum containment, wet stripping methods to prevent
            airborne dust, sealed disposal of all stripped material, and written
            documentation provided at project completion. Ballwin homeowners
            with pre-1978 homes should expect this protocol as a standard part
            of the process.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl leading-relaxed italic mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            "We bought our Ballwin Colonial on Kehrs Mill knowing the staircase
            needed work — the carpet was hiding whatever was underneath. Sue
            pulled up the carpet, assessed the treads, and stripped and
            refinished the whole staircase including the painted spindles. It
            transformed the entry of the house completely."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Kehrs Mill Road, Ballwin
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl mb-10"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Do you refinish staircases in Ballwin?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler refinishes staircases throughout Ballwin,
                including the oak Colonial-style staircases common in the
                neighborhood's 1970s and 1980s homes. Whether the issue is tread
                wear, dated stain color, or painted spindles, she assesses each
                staircase individually before recommending a course of work.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Ballwin staircase has carpeted treads with oak underneath —
                can those be refinished?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                In most cases, yes. Carpet protects the oak beneath it from foot
                traffic, so the treads are often in better condition than
                expected once the carpet and tack strips are removed. Sue
                inspects the oak before committing to refinishing — if the wood
                is solid and the surface is refinishable, she will tell you. If
                there is damage that changes the approach, she will explain that
                too.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Ballwin staircase spindles are painted white — can they be
                stripped and stained?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Painted spindles are common on Ballwin's 1970s and 1980s
                staircases — it was a popular style at the time. Sue strips
                painted spindles by hand, which is the only way to get into the
                turned profiles without damaging the wood. Once stripped, they
                can be stained to match the treads and handrail for a unified
                look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to refinish your Ballwin staircase?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
