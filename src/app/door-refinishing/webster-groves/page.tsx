import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Webster Groves Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped door refinishing in Webster Groves, MO. Arts & Crafts and Colonial Revival entry doors restored by Sue Wheeler — 36 years experience, EPA Certified.",
};

export default function WebsterGrovesDoorRefinishingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
    telephone: "(314) 367-6054",
    areaServed: {
      "@type": "City",
      name: "Webster Groves",
      containedInPlace: {
        "@type": "State",
        name: "Missouri",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5931,
      longitude: -90.3612,
    },
    description:
      "Hand-stripped door refinishing for Webster Groves Arts & Crafts and Colonial Revival homes. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish doors in Webster Groves?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has been refinishing doors in Webster Groves for over 36 years. The neighborhood's exceptionally intact original woodwork — preserved by a culture of maintenance rather than replacement — makes it one of the finest markets for door refinishing in the St. Louis metro.",
        },
      },
      {
        "@type": "Question",
        name: "My Webster Groves Arts & Crafts door has original bronze hardware — do you work around that?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Preserving original hardware is standard practice. Bronze and cast iron hardware from the Arts and Crafts period is no longer manufactured in the same quality, and replacing it with modern reproductions diminishes the door. Sue works around original hardware in place where possible, removing only what is necessary for thorough stripping and refinishing.",
        },
      },
      {
        "@type": "Question",
        name: "What finish is best for an exterior Arts & Crafts door?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For exterior Arts and Crafts doors in fir, a penetrating oil-based finish — rather than a film-forming varnish — is typically the right choice. It highlights the grain, resists moisture without cracking, and can be refreshed without full restripping. Sue assesses the specific door, its exposure, and the homeowner's maintenance preferences before recommending a finish system.",
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
            name: "Webster Groves",
            url: "https://suewheelerstl.com/door-refinishing/webster-groves",
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
            Door Refinishing · Webster Groves, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Door Refinishing in <em>Webster Groves</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Webster Groves has some of the most intact original woodwork in the
            St. Louis metro. The Arts and Crafts and Colonial Revival doors in
            these homes are original fir in excellent structural condition —
            they need a refinisher who respects what is already there.
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
            What makes Webster Groves door refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Webster Groves developed primarily between the 1890s and 1920s,
              with a concentration of Craftsman and Colonial Revival homes and a
              significant Arts and Crafts presence. What distinguishes the
              neighborhood from other St. Louis suburbs of the same era is its
              preservation culture — homeowners here have historically
              maintained and restored rather than replaced. The result is a
              neighborhood where original woodwork survives at an unusually high
              rate.
            </p>
            <p className="text-base leading-relaxed">
              That culture extends to doors. Many Webster Groves homes still
              have their original entry doors — geometric-panel Arts and Crafts
              designs in fir, formal paneled Colonial Revival entries in fir or
              oak, with original bronze or cast iron hardware still in place and
              functional. These are not doors that need to be replaced. They
              need to be refinished by someone who understands what they are.
            </p>
            <p className="text-base leading-relaxed">
              Old-growth fir is the dominant species in these doors, and it is
              an exceptional refinishing substrate. The tight grain accepts
              stain evenly, the wood is dimensionally stable after a century of
              seasonal cycling, and the profiles — however simple — read with
              clarity when the finish is right. Stripping and refinishing a
              Webster Groves door is not restoration in the sense of saving
              something damaged. It is bringing a well-preserved piece to its
              best expression.
            </p>
            <p className="text-base leading-relaxed">
              Pre-1978 construction is the rule in Webster Groves. Sue is EPA
              RRP Certified and applies full lead paint containment protocol on
              every door project in the neighborhood.
            </p>
          </div>
        </div>
      </section>

      {/* Service-specific section */}
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
            Door refinishing services for Webster Groves homes
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
                Arts and Crafts entry doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Webster Groves Arts and Crafts doors are defined by their
                geometric simplicity — rectangular panels, minimal molding
                profiles, strong vertical emphasis. The design philosophy
                rejects ornament in favor of material integrity, which means the
                quality of the wood and the quality of the finish are the entire
                visual statement. These doors strip cleanly and finish
                beautifully when the work is done right.
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
                Colonial Revival entry and interior doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Colonial Revival homes in Webster Groves have more formal door
                profiles — often six-panel raised-panel entries with traditional
                molding details, sometimes with sidelights or elliptical
                transoms. Interior door suites in these homes may run through
                every room on the main floor. Sue refinishes single doors and
                entire house sets, working to maintain consistency across all
                the pieces.
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
                Original hardware preservation
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Bronze and cast iron hardware from the Arts and Crafts period is
                intact on many Webster Groves doors and worth keeping that way.
                The patina on original bronze hardware develops over decades and
                cannot be replicated with new pieces. Sue works around hardware
                in place wherever the stripping method allows, removing only
                what is necessary for access and replacing everything to its
                original position on completion.
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
                The board-up method: shop stripping and rehang
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Every door project follows the same sequence: the door is
                removed from its hinges, the opening is secured with a temporary
                board, and the door goes to the shop for stripping and
                refinishing. Shop conditions produce more thorough, even results
                than in-place work. Once stripped, finished, and fully cured,
                the door is returned and rehung. The home is never left
                unsecured overnight.
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
            EPA Certified Lead Removal — required in Webster Groves pre-1978
            homes
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Webster Groves developed primarily before 1940, and the
            neighborhood's preservation culture means many of the original paint
            layers are still present on doors that have never been stripped.
            Those layers can include lead paint from the pre-1978 era. Sue is
            EPA RRP Certified and assumes the presence of lead on any pre-1978
            door project — no visual assessment substitutes for proper
            containment.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Full protocol: HEPA containment of the work area, wet stripping
            methods to suppress airborne dust, sealed waste disposal, and
            written documentation at project completion. The door is stripped in
            the shop where containment is easier to maintain and verify.
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
            "Our house on Bristol is a 1908 Craftsman and the front door still
            has the original bronze hardware. Sue stripped the door, matched the
            stain to our interior trim, and left the hardware exactly as it was.
            The door is the best thing about the front of the house now. She
            knew exactly what to do and did not try to change anything that
            didn't need to change."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Bristol Avenue, Webster Groves
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
                Do you refinish doors in Webster Groves?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has been refinishing doors in Webster Groves
                for over 36 years. The neighborhood's exceptionally intact
                original woodwork — preserved by a culture of maintenance rather
                than replacement — makes it one of the finest markets for door
                refinishing in the St. Louis metro.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Webster Groves Arts and Crafts door has original bronze
                hardware — do you work around that?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Preserving original hardware is standard practice. Bronze
                and cast iron hardware from the Arts and Crafts period is no
                longer manufactured in the same quality, and replacing it with
                modern reproductions diminishes the door. Sue works around
                original hardware in place where possible, removing only what is
                necessary for thorough stripping and refinishing.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                What finish is best for an exterior Arts and Crafts door?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                For exterior Arts and Crafts doors in fir, a penetrating
                oil-based finish — rather than a film-forming varnish — is
                typically the right choice. It highlights the grain, resists
                moisture without cracking, and can be refreshed without full
                restripping. Sue assesses the specific door, its exposure, and
                the homeowner's maintenance preferences before recommending a
                finish system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Webster Groves door?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
