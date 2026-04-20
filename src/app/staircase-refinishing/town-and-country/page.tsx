import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Town & Country Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing in Town & Country, MO. Curved architectural staircases, custom spindle and newel profiles restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function TownAndCountryStaircaseRefinishingPage() {
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
      "Hand-stripped staircase refinishing for Town & Country's architectural estate staircases. Curved, multi-flight, and custom-profile staircases. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish staircases in Town & Country?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has worked on some of the most significant residential staircases in the St. Louis area in neighborhoods like Town & Country. The custom architectural staircases in these homes — curved, wide, multi-flight, with non-standard newel and spindle profiles — represent the most complex refinishing work she does, and it is work she has been doing for 36 years.",
        },
      },
      {
        "@type": "Question",
        name: "My Town & Country home has a custom curved staircase with non-standard spindle profiles — can those details be preserved?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Preserving non-standard spindle profiles — whether turned, carved, or machined to a custom pattern — through the stripping process is the primary craft challenge on a staircase like this. Sue strips these elements by hand, which is the only method that reliably follows complex profiles without cutting into the wood or losing the crispness of the original detail. Power tools do not work on non-standard profiles.",
        },
      },
      {
        "@type": "Question",
        name: "Can you refinish a staircase that is a central feature of a home's design without disrupting the household for weeks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, though a significant architectural staircase does require meaningful time. Sue works in a structured sequence that maintains access through the home at every stage — completing one flight or section before moving to the next, and scheduling finish coats to cure overnight rather than extending wet-finish time into household hours. The total duration depends on the staircase's complexity and size, and Sue will give you an honest timeline at the estimate.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Staircase Refinishing", url: "https://suewheelerstl.com/staircase-refinishing" },
          {
            name: "Town & Country",
            url: "https://suewheelerstl.com/staircase-refinishing/town-and-country",
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
            Staircase Refinishing · Town & Country, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Staircase Refinishing in <em>Town & Country</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Town & Country staircases are often the architectural centerpiece of
            the home — curved, wide, multi-flight, with custom newel and spindle
            profiles that cannot be stripped with power tools. Sue Wheeler works
            through these staircases by hand, preserving every custom detail
            through the stripping process and applying an even finish across
            complex geometry.
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
            Town & Country staircases — scale and craft demands
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Town & Country is a neighborhood of custom estate homes built
              across a wide span — 1940s through the present — with woodwork
              that reflects the ambitions of each era's custom construction. The
              staircases here are not catalog items. They are architectural
              features designed to make a statement, and the woodwork reflects
              that: curved starts, wide treads, non-standard spindle and newel
              profiles, multi-flight runs with landings.
            </p>
            <p className="text-base leading-relaxed">
              The craft challenge in refinishing a Town & Country staircase is
              precisely the complexity that makes the staircase significant.
              Custom spindle profiles cannot be stripped with sanders or rotary
              tools without losing the crisp detail that defines the profile.
              Curved tread noses require a different hand position and more time
              than a straight run. Wide landings have their own wood movement
              considerations. Each element of a complex architectural staircase
              requires an approach calibrated to its specific geometry.
            </p>
            <p className="text-base leading-relaxed">
              Sue has worked on some of the most significant residential
              staircases in the St. Louis area — in Town & Country and in
              comparable markets throughout the region. This is not work that is
              new to her. She brings 36 years of experience to every
              architectural staircase she takes on, and the results show in
              homes that are still on her client roster years and decades later.
            </p>
            <p className="text-base leading-relaxed">
              Pre-1978 Town & Country homes — those from the 1940s through the
              early 1970s — require EPA RRP protocol for staircase work. Sue
              holds the certification and applies full containment on every
              applicable project.
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
            Staircase refinishing services for Town & Country homes
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
                Curved and architectural staircase refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Town & Country's curved staircases present the full range of
                refinishing complexity: curved tread noses, sweeping handrails
                with compound transitions, and starting steps that are often
                architectural elements in themselves. Sue strips and refinishes
                each component individually, working slowly through the geometry
                rather than quickly across the surface. The result is a
                staircase that looks right at every angle.
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
                Custom spindle and newel profile preservation
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Non-standard spindle profiles — whether turned to a custom
                pattern, carved, or machined — are stripped exclusively by hand.
                There is no power tool that follows a custom profile without
                cutting into the wood or losing the crispness of the original
                detail. Sue works these elements by hand with chemical stripper
                and appropriate hand tools, preserving the profile exactly as it
                was made.
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
                Multi-flight and landing refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Large Town & Country homes sometimes have staircases that run
                across multiple floors with landings between — a scope that
                requires project management as well as craft. Sue works in
                sections, maintaining household access throughout, and schedules
                finish coats to cure properly rather than cutting dry time to
                compress the schedule. An honest timeline is established at the
                estimate stage.
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
                Stain matching to adjacent home woodwork
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                A staircase that is visually connected to paneled hallways,
                library woodwork, or built-in cabinetry must be stained to read
                consistently with those elements. Sue develops stain samples
                against the existing woodwork in the home — working from the
                staircase's own wood species and the surrounding reference
                materials — before committing to any color on the full
                staircase.
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
            Lead paint in Town & Country's older estate homes
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Town & Country's older homes — those from the 1940s, 1950s, and
            1960s — predate the 1978 federal lead paint ban. On any staircase in
            a pre-1978 home, lead paint must be assumed. Federal law requires
            EPA RRP Certification for any firm disturbing painted surfaces in
            these homes. Sue Wheeler is certified and applies full protocol on
            every applicable staircase project.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Full protocol on pre-1978 staircase work: HEPA vacuum containment,
            wet stripping methods to prevent airborne dust, sealed disposal of
            all stripped material, and written documentation provided at
            completion. Town & Country clients in the neighborhood's older homes
            should expect this as a standard part of any staircase project.
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
            "Our home on Ladue Road has a two-story curved staircase with
            hand-turned spindles in a pattern that no longer exists in any
            catalog. Two contractors told us they could not strip it without
            losing the profile. Sue stripped it perfectly — every spindle looks
            exactly as it did originally, just with a finish that looks new. The
            staircase is the first thing every visitor notices."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Ladue Road, Town & Country
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
                Do you refinish staircases in Town & Country?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has worked on some of the most significant
                residential staircases in the St. Louis area in neighborhoods
                like Town & Country. The custom architectural staircases in
                these homes — curved, wide, multi-flight, with non-standard
                newel and spindle profiles — represent the most complex
                refinishing work she does, and it is work she has been doing for
                36 years.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Town & Country home has a custom curved staircase with
                non-standard spindle profiles — can those details be preserved?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Preserving non-standard spindle profiles — whether turned,
                carved, or machined to a custom pattern — through the stripping
                process is the primary craft challenge on a staircase like this.
                Sue strips these elements by hand, which is the only method that
                reliably follows complex profiles without cutting into the wood
                or losing the crispness of the original detail. Power tools do
                not work on non-standard profiles.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Can you refinish a staircase that is a central feature of a
                home's design without disrupting the household for weeks?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes, though a significant architectural staircase does require
                meaningful time. Sue works in a structured sequence that
                maintains access through the home at every stage — completing
                one flight or section before moving to the next, and scheduling
                finish coats to cure overnight rather than extending wet-finish
                time into household hours. The total duration depends on the
                staircase's complexity and size, and Sue will give you an honest
                timeline at the estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Town & Country staircase?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
