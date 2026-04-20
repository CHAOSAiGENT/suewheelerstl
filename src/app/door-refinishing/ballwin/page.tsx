import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Ballwin Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped door refinishing in Ballwin, MO. Exterior and interior solid-wood doors restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function BallwinDoorRefinishingPage() {
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
      "Hand-stripped door refinishing for Ballwin's suburban Colonial and ranch homes. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish doors in Ballwin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler refinishes doors throughout Ballwin, including the solid-wood exterior and interior doors found in the neighborhood's Colonial and ranch homes. She evaluates every door individually to determine whether it is a solid-wood refinishing candidate before any work begins.",
        },
      },
      {
        "@type": "Question",
        name: "My Ballwin home has an oak front door that is peeling — what does refinishing involve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Peeling on an exterior oak door is almost always a finish failure, not a wood failure — the underlying wood is typically in good structural condition. Sue removes the door, strips it fully by hand in her shop, repairs any surface damage, and applies a fresh finish appropriate for exterior exposure. The door is returned and rehung once cured.",
        },
      },
      {
        "@type": "Question",
        name: "How long does an exterior door refinish last in Ballwin's climate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "St. Louis weather — hot summers, cold winters, and significant UV exposure — is hard on exterior wood finishes. A properly stripped and refinished exterior door, using the right topcoat for exterior use, will typically hold for five to seven years with minimal maintenance. Proper surface preparation, which means full stripping rather than painting over existing finish, is the primary factor in finish longevity.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Door Refinishing", url: "https://suewheelerstl.com/door-refinishing" },
          { name: "Ballwin", url: "https://suewheelerstl.com/door-refinishing/ballwin" },
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
            Door Refinishing · Ballwin, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Door Refinishing in <em>Ballwin</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Ballwin's Colonial and ranch homes were built with solid-wood doors
            that can be stripped and refinished rather than replaced. Sue
            Wheeler hand-strips every door — never a dip tank — and returns it
            to finish that holds up to Missouri's demanding climate.
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
            What makes Ballwin door refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Ballwin developed primarily in the 1960s through the 1980s as a
              post-war suburban community. The housing stock here is Colonial
              and ranch construction — practical, solid homes that were built
              with real wood throughout. That includes the doors. Solid-core and
              solid-wood exterior doors in oak, fir, and sometimes mahogany were
              standard in the better homes of this era.
            </p>
            <p className="text-base leading-relaxed">
              The most common issue Sue sees in Ballwin is exterior door finish
              failure — peeling, cracking, and UV graying on oak front doors
              that have been neglected or painted over rather than properly
              maintained. The wood underneath is almost always structurally
              sound. The problem is the finish, and the solution is stripping it
              fully and starting fresh.
            </p>
            <p className="text-base leading-relaxed">
              Interior doors in Ballwin homes vary more. Many were built with
              hollow-core doors for interior rooms, but the better homes — and
              the original entry suites — often have solid-wood construction
              throughout. Sue evaluates every interior door before recommending
              refinishing. If it is hollow-core, she will tell you directly
              rather than take on work that will not produce a worthwhile
              result.
            </p>
            <p className="text-base leading-relaxed">
              Ballwin's oldest homes, those built before 1978, may contain lead
              paint. Sue is EPA RRP Certified and applies full protocol whenever
              lead paint is present or suspected.
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
            Door refinishing services for Ballwin homes
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
                Exterior oak front doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The solid oak entry door is the most common refinishing project
                in Ballwin. UV exposure and seasonal temperature swings cause
                even good finishes to fail over time, and painting over a
                failing finish only delays the inevitable. Sue strips the door
                completely, repairs any checking or surface damage, and applies
                a fresh exterior-grade finish that bonds to bare wood and is
                built to last.
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
                Fir and mahogany exterior doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Some of Ballwin's better Colonial homes were fitted with fir or
                mahogany entry doors — species that take a beautiful clear
                finish when properly stripped and prepared. These doors often
                look like stained wood on the surface but have been painted over
                at some point. Stripping them back reveals the original grain
                character beneath.
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
                Interior solid-wood doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Where Ballwin homes have solid-wood interior doors — often in
                entry halls, main-level studies, or original master suites —
                refinishing is a straightforward upgrade. Sue assesses the
                construction before committing to any project. Solid doors strip
                cleanly; hollow doors do not merit the work.
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
                Shop stripping and rehang process
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Every door project follows the same method: the door is removed
                from its hinges, the opening is secured with a temporary board,
                and the door is transported to Sue's shop for stripping. Shop
                conditions produce better results than in-place stripping. Once
                stripped, refinished, and fully cured, the door is returned to
                Ballwin and rehung. The home is never left unsecured overnight.
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
            Lead paint in pre-1978 Ballwin homes
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Ballwin's oldest homes were built in the 1960s and early 1970s —
            many of them before the 1978 federal ban on residential lead paint.
            If your home falls in that range, lead paint must be assumed until
            testing proves otherwise. Federal law requires any firm disturbing
            painted surfaces in pre-1978 homes to be EPA RRP Certified.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Sue Wheeler holds EPA RRP Certification and has applied it to
            hundreds of projects across the St. Louis area. Full protocol means
            HEPA containment, wet stripping methods to suppress dust, proper
            sealed disposal of all stripped material, and written documentation
            provided at project completion.
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
            "Our 1972 Colonial on Clayton Road had an oak front door that had
            been painted over so many times it had lost all character. Sue
            stripped it back to bare wood, applied a beautiful honey stain, and
            it looks like a brand new door — except better. We had no idea what
            was under that paint."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Clayton Road, Ballwin
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
                Do you refinish doors in Ballwin?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler refinishes doors throughout Ballwin, including
                the solid-wood exterior and interior doors found in the
                neighborhood's Colonial and ranch homes. She evaluates every
                door individually to determine whether it is a solid-wood
                refinishing candidate before any work begins.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Ballwin home has an oak front door that is peeling — what
                does refinishing involve?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Peeling on an exterior oak door is almost always a finish
                failure, not a wood failure — the underlying wood is typically
                in good structural condition. Sue removes the door, strips it
                fully by hand in her shop, repairs any surface damage, and
                applies a fresh finish appropriate for exterior exposure. The
                door is returned and rehung once cured.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                How long does an exterior door refinish last in Ballwin's
                climate?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                St. Louis weather — hot summers, cold winters, and significant
                UV exposure — is hard on exterior wood finishes. A properly
                stripped and refinished exterior door, using the right topcoat
                for exterior use, will typically hold for five to seven years
                with minimal maintenance. Proper surface preparation, which
                means full stripping rather than painting over existing finish,
                is the primary factor in finish longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Ballwin door?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
