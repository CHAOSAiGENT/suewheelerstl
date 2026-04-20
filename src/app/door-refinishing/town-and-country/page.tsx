import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Town & Country Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped door refinishing in Town & Country, MO. Custom mahogany, teak, and oak entry doors, large interior door suites, French and pocket door systems restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function TownAndCountryDoorRefinishingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
    telephone: "(314) 367-6054",
    areaServed: {
      "@type": "City",
      name: "Town and Country",
      containedInPlace: {
        "@type": "State",
        name: "Missouri",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6306,
      longitude: -90.4623,
    },
    description:
      "Hand-stripped door refinishing for Town & Country's custom estate homes. Mahogany, teak, oak, large interior door suites, French and library doors. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish doors in Town & Country?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler refinishes doors throughout Town & Country, including the custom entry doors, interior door suites, and specialty door systems — French doors, library doors, pocket door sets — found in the neighborhood's estate homes. Town & Country is one of the markets where whole-house interior door refinishing is a standard project scope.",
        },
      },
      {
        "@type": "Question",
        name: "My Town & Country home has 25 interior doors — can you refinish the whole set to match?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Large interior door suites are a routine project in Town & Country. Sue works through the home in organized batches — removing, refinishing, and rehanging doors in a sequence that keeps the house functional throughout the project. Stain color and sheen are established on sample doors at the outset and maintained consistently across every door in the suite. With 25 doors, the work typically spans multiple days.",
        },
      },
      {
        "@type": "Question",
        name: "My entry door is custom-milled mahogany — what does refinishing involve for that?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom-milled mahogany entry doors require careful stripping — the species has an interlocked grain that can raise or tear if stripped aggressively. Sue works by hand with appropriate chemical and mechanical methods, preserving every milled detail of the profile. The door is finished for exterior exposure with appropriate UV-blocking topcoats that protect the mahogany from the Missouri sun.",
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
          {
            name: "Town & Country",
            url: "https://suewheelerstl.com/door-refinishing/town-and-country",
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
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#A65D37" }}
          >
            Door Refinishing · Town & Country, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Door Refinishing in <em>Town & Country</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Town & Country's custom estate homes carry doors that are
            architectural statements — custom-milled mahogany entries, matched
            interior door suites that run to 20 or 30 doors, French door
            systems, library doors, and pocket door sets. Sue Wheeler refinishes
            them by hand, maintaining stain consistency across entire suites and
            preserving every detail of the original millwork.
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
            What makes Town & Country door refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Town & Country is a large-lot suburb with custom estate homes
              ranging from 1940s construction through the present. Custom
              woodwork is standard here — it is not a neighborhood of
              production-built homes. The doors reflect that: custom-milled
              entry doors in mahogany, teak, and solid oak are common, and
              interior door suites in the better homes run throughout every room
              on every floor.
            </p>
            <p className="text-base leading-relaxed">
              The scale of a Town & Country door project is often what
              distinguishes it from work in other neighborhoods. A whole-house
              interior door suite of 20 to 30 doors, all matched to the same
              stain and sheen, is a standard scope here — not an unusual
              request. Sue establishes the stain on sample doors at the outset
              of the project and holds it consistent across every door
              regardless of species variation or grain difference.
            </p>
            <p className="text-base leading-relaxed">
              Entry doors in Town & Country are often the most expensive single
              elements of the home's millwork. Custom-milled mahogany, teak, or
              solid oak with hand-carved or CNC-milled panel profiles — these
              are doors that homeowners have invested significantly in and
              expect to last. Refinishing extends that investment; replacement
              rarely matches the original quality.
            </p>
            <p className="text-base leading-relaxed">
              Town & Country's pre-1978 homes — primarily those from the 1940s
              through the early 1970s — require EPA RRP protocol on any work
              disturbing painted surfaces. Sue holds that certification and
              applies full containment on every applicable project.
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
            Door refinishing services for Town & Country homes
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
                Custom entry door refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Mahogany, teak, and solid oak entry doors in Town & Country are
                refinishing projects that require patience and precision. Each
                species has its own stripping requirements — mahogany's
                interlocked grain, teak's natural oils, oak's open grain — and
                each requires a different approach to achieve a clean surface
                without damaging the original milled profile. Sue works through
                these doors by hand, in her shop, and finishes them for exterior
                exposure before rehanging.
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
                Large interior door suite refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Interior door suites in Town & Country often run to 20 or 30
                doors across multiple floors. Sue works through large suites in
                organized batches — removing, refinishing, and rehanging a group
                at a time — so the home remains functional throughout the
                project. Stain consistency across the full suite is the primary
                craft challenge, and it is established on sample doors before
                production begins.
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
                French door, library door, and pocket door systems
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                French door systems, library door pairs, and pocket door sets
                present additional challenges beyond single doors: the doors
                within a pair must match not only in color but in sheen and
                grain emphasis, because they will be viewed side by side. Sue
                strips and finishes paired and system doors in close sequence to
                ensure the result reads as a unified element rather than two
                separately refinished pieces.
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
                Cross-home stain matching
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Town & Country homes with custom woodwork throughout — paneled
                libraries, built-in cabinetry, door trim, and staircase elements
                — often need stain matching across multiple elements and wood
                species. Sue develops stain samples against existing woodwork in
                the home before committing to any color, and adjusts to account
                for how different species absorb color differently.
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
            Lead paint in Town & Country's pre-1978 homes
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Town & Country includes homes built from the 1940s forward, and any
            home built before 1978 requires EPA RRP Certification for work that
            disturbs painted surfaces. The neighborhood's older estate homes —
            those built in the 1940s, 1950s, and 1960s — fall squarely in this
            category. Sue Wheeler holds EPA RRP Certification and applies full
            containment protocol on every applicable project.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Full protocol: HEPA vacuum containment, wet stripping methods to
            prevent airborne dust, sealed disposal of all stripped material, and
            written documentation at completion. For Town & Country clients in
            pre-1978 homes, this is a standard part of every door project.
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
            "We have 28 interior doors in our home on Mason Road, all solid
            walnut, and the stain had shifted unevenly over the years. Sue
            refinished all of them over several days, matching the color to a
            reference piece in the library. The consistency across the whole
            house is remarkable — they look as if they were done all at once
            when new."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Mason Road, Town & Country
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
                Do you refinish doors in Town & Country?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler refinishes doors throughout Town & Country,
                including the custom entry doors, interior door suites, and
                specialty door systems — French doors, library doors, pocket
                door sets — found in the neighborhood's estate homes. Town &
                Country is one of the markets where whole-house interior door
                refinishing is a standard project scope.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Town & Country home has 25 interior doors — can you refinish
                the whole set to match?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Large interior door suites are a routine project in Town &
                Country. Sue works through the home in organized batches —
                removing, refinishing, and rehanging doors in a sequence that
                keeps the house functional throughout the project. Stain color
                and sheen are established on sample doors at the outset and
                maintained consistently across every door in the suite. With 25
                doors, the work typically spans multiple days.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My entry door is custom-milled mahogany — what does refinishing
                involve for that?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Custom-milled mahogany entry doors require careful stripping —
                the species has an interlocked grain that can raise or tear if
                stripped aggressively. Sue works by hand with appropriate
                chemical and mechanical methods, preserving every milled detail
                of the profile. The door is finished for exterior exposure with
                appropriate UV-blocking topcoats that protect the mahogany from
                the Missouri sun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Town & Country doors?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
