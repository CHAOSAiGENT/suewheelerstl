import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Town & Country Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped kitchen cabinet refinishing in Town & Country, MO. Custom cherry, walnut, maple, and painted millwork kitchens restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function TownAndCountryKitchenCabinetRefinishingPage() {
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
      "Hand-stripped kitchen cabinet refinishing for Town & Country's custom estate kitchens. Cherry, walnut, maple, and painted millwork. Color shift correction and preservation finishing. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish kitchen cabinets in Town & Country?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler refinishes kitchen cabinets throughout Town & Country, including the custom cherry, walnut, maple, and painted millwork kitchens common in the neighborhood's estate homes. Town & Country is a market where the cabinet quality warrants preservation — these are custom installations that are structurally excellent and worth maintaining rather than replacing.",
        },
      },
      {
        "@type": "Question",
        name: "My Town & Country kitchen has custom cherry cabinetry — is cherry different to refinish than oak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cherry is a closed-grain wood that does not accept stain the way open-grain species like oak do — it tends to blotch if stain is applied without proper preparation. Cherry also darkens naturally with light exposure, which is part of its appeal but also part of what creates color shift over time. Sue's approach to cherry involves careful preparation before any stain is applied, and the final result respects the natural character of the species rather than fighting it.",
        },
      },
      {
        "@type": "Question",
        name: "My Town & Country kitchen cabinets have shifted in color over 20 years — can refinishing correct that?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Color shift in custom cabinetry — cherry darkening unevenly, walnut lightening in UV-exposed areas, or stain fading inconsistently — is one of the most common refinishing requests in Town & Country. Correcting it requires full stripping back to bare wood, which removes the uneven layers entirely, followed by fresh stain and finish applied consistently across the full kitchen. The result is uniform color that reads the way the kitchen was intended to look.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Kitchen Cabinet Refinishing",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing",
          },
          {
            name: "Town & Country",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/town-and-country",
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
            Kitchen Cabinet Refinishing · Town & Country, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Kitchen Cabinet Refinishing in <em>Town & Country</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Town & Country kitchens are typically custom installations — cherry,
            walnut, maple, and painted millwork built to specification in the
            1990s and 2000s that remain structurally excellent but whose finish
            has shifted over time. Sue Wheeler strips and refinishes them by
            hand, correcting color drift and restoring the kitchen to the look
            it was designed to have.
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
            Town & Country kitchen cabinetry — quality worth keeping
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Town & Country homes were built to a higher specification than
              most of the St. Louis region's residential market. The kitchens
              reflect that: custom cabinetry in cherry, walnut, maple, and
              painted millwork, installed by custom cabinet shops at a level of
              quality that is difficult and expensive to replicate with current
              new construction. The box construction, the drawer hardware, the
              door profiles — all of it is excellent.
            </p>
            <p className="text-base leading-relaxed">
              The issue in Town & Country's kitchens is not structural — it is
              the finish. Custom cherry cabinetry from the 1990s has darkened
              unevenly over 20 or 30 years of light exposure. Walnut has
              lightened in UV-exposed areas. Stained maple has shifted in color
              where the finish has worn. These are all correctable with full
              stripping and refinishing, and the result is a kitchen that looks
              as it was intended to — not as time and wear have left it.
            </p>
            <p className="text-base leading-relaxed">
              Town & Country homeowners have seen quality work and they will
              notice if anything is not correct. The stain must be even across
              every door, drawer front, and face frame. The sheen must be
              consistent across the full kitchen. Species variations — where
              cherry and maple trim elements appear side by side, for example —
              must be managed so the stain reads consistently even across
              different grain structures. This is exacting work, and it is
              exactly what Sue Wheeler does.
            </p>
            <p className="text-base leading-relaxed">
              Town & Country's pre-1978 homes — including the older estate
              residences — require EPA RRP protocol for kitchen work. Sue holds
              that certification and applies full containment whenever
              applicable.
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
            Cabinet refinishing services for Town & Country kitchens
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
                Cherry cabinet refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Cherry is the most common custom cabinet species in Town &
                Country's better kitchens. It is also the most demanding to
                refinish well — a closed-grain wood prone to blotching under
                improper preparation, and one that darkens naturally in ways
                that create uneven color over time. Sue's approach to cherry
                involves careful pre-treatment before any stain is applied, and
                the result respects the natural character of the species rather
                than imposing an artificial color on top of it.
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
                Walnut and maple cabinet refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Walnut and maple are both present in Town & Country's higher-end
                kitchens, often as primary species or as accent and trim
                elements in a mixed-species installation. Each takes stain
                differently — walnut's open grain absorbs deeply; maple's tight
                grain requires preparation to achieve even color. Sue works with
                the characteristics of each species to produce a result that
                reads consistently across the whole kitchen.
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
                Color shift correction
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                After 20 or 30 years, even excellent custom cabinetry shows
                color drift — UV exposure on some doors, wear on others, stain
                penetration that has changed character over time. Correcting
                this requires full stripping back to bare wood. There is no way
                to reliably even out color shift by working on top of the
                existing finish. Sue strips everything, then builds the new
                finish from bare wood up, achieving a consistent result across
                the full kitchen.
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
                Painted millwork refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Some Town & Country kitchens incorporate painted millwork
                cabinetry — typically perimeter cabinets in a painted finish
                alongside a stained island or specialty elements. Painted
                cabinetry that has yellowed, chipped, or accumulated surface
                damage is stripped and refinished with the same care as stained
                wood. The result is a crisp, even painted surface that holds up
                better than the original because the substrate is fully
                prepared.
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
            disturbs painted surfaces. Kitchen cabinetry in pre-1978 homes may
            carry lead paint in earlier finish layers. Sue Wheeler holds EPA RRP
            Certification and applies full protocol on every applicable kitchen
            project.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Most of Town & Country's custom kitchens were installed after 1978,
            but the certification matters whenever there is any question about
            the home's age or the finish history of the cabinetry. Sue treats
            pre-1978 kitchen work with the same rigor she applies to historic
            properties throughout the St. Louis area.
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
            "We have a custom cherry kitchen in our home on Clayton Road that we
            had installed in 1997. Over the years the doors near the window had
            darkened unevenly and the whole kitchen looked inconsistent. Sue
            stripped and refinished every door and drawer front, and the kitchen
            looks exactly as we imagined it when we had it built. The evenness
            of the color across 40 doors is what surprised us most."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Clayton Road, Town & Country
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
                Do you refinish kitchen cabinets in Town & Country?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler refinishes kitchen cabinets throughout Town &
                Country, including the custom cherry, walnut, maple, and painted
                millwork kitchens common in the neighborhood's estate homes.
                Town & Country is a market where the cabinet quality warrants
                preservation — these are custom installations that are
                structurally excellent and worth maintaining rather than
                replacing.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Town & Country kitchen has custom cherry cabinetry — is
                cherry different to refinish than oak?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Cherry is a closed-grain wood that does not accept stain
                the way open-grain species like oak do — it tends to blotch if
                stain is applied without proper preparation. Cherry also darkens
                naturally with light exposure, which is part of its appeal but
                also part of what creates color shift over time. Sue's approach
                to cherry involves careful preparation before any stain is
                applied, and the final result respects the natural character of
                the species rather than fighting it.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Town & Country kitchen cabinets have shifted in color over 20
                years — can refinishing correct that?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Color shift in custom cabinetry — cherry darkening
                unevenly, walnut lightening in UV-exposed areas, or stain fading
                inconsistently — is one of the most common refinishing requests
                in Town & Country. Correcting it requires full stripping back to
                bare wood, which removes the uneven layers entirely, followed by
                fresh stain and finish applied consistently across the full
                kitchen. The result is uniform color that reads the way the
                kitchen was intended to look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Town & Country kitchen cabinets?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
