import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Webster Groves Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing in Webster Groves, MO. Quarter-sawn oak Craftsman staircases restored by Sue Wheeler — 36 years experience, EPA Certified.",
};

export default function WebsterGrovesStaircaseRefinishingPage() {
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
      "Hand-stripped staircase refinishing for Webster Groves Craftsman and Arts & Crafts homes. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish staircases in Webster Groves?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has been refinishing staircases in Webster Groves for over 36 years. The neighborhood's Craftsman homes contain some of the finest original staircases in the St. Louis metro — quarter-sawn oak with mission-style newel posts and wide square spindles — and the preservation culture here means many of them are still structurally excellent.",
        },
      },
      {
        "@type": "Question",
        name: "My Webster Groves staircase has quarter-sawn oak — does that affect the refinishing process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quarter-sawn oak is one of the finest refinishing substrates in residential woodwork. The quartering process produces a medullary ray figure — the distinctive fleck pattern — that is unique to this cut and impossible to replicate with new-growth lumber. It strips cleanly, takes stain evenly, and holds finish exceptionally well. If anything, a quarter-sawn oak staircase is easier to bring to a beautiful result than flat-sawn alternatives.",
        },
      },
      {
        "@type": "Question",
        name: "Can you restore the original Arts & Crafts stain color on my staircase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arts and Crafts woodwork was typically finished in a warm amber or fumed-oak tone that emphasized the natural grain rather than obscuring it. Sue works to restore that character — matching the tone to surviving examples in the home, or referencing period-accurate colors where nothing original remains. Exact replication depends on species and condition, but achieving the right feeling is the goal.",
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
            name: "Webster Groves",
            url: "https://suewheelerstl.com/staircase-refinishing/webster-groves",
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
            Staircase Refinishing · Webster Groves, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Staircase Refinishing in <em>Webster Groves</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Webster Groves Craftsman staircases in quarter-sawn oak are the
            centerpieces of their homes. The wood has not failed — the finish
            has. Sue Wheeler strips every spindle by hand and brings these
            staircases back to what they were built to be.
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
            What makes Webster Groves staircase refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Webster Groves has a deserved reputation among St. Louis
              refinishers as a neighborhood with some of the finest intact
              Craftsman woodwork in the metro area. The staircases in particular
              — quarter-sawn oak with mission-style newel posts, wide square
              spindles, and strong horizontal lines — are centerpieces of their
              homes and were designed to be. They were built with a care and
              intention that shows in every detail.
            </p>
            <p className="text-base leading-relaxed">
              The preservation culture in Webster Groves works in these
              staircases' favor. Homeowners here have historically maintained
              rather than replaced, which means the structural integrity of
              these staircases is typically excellent. The joinery is sound, the
              spindles are tight in their housings, the newel posts are solid.
              What has failed is the finish — darkened, dulled, and worn in the
              traffic areas, but not the wood itself.
            </p>
            <p className="text-base leading-relaxed">
              Quarter-sawn oak produces a medullary ray figure — the fleck
              pattern that catches light differently depending on the angle of
              view — that is specific to this cut of wood and cannot be
              replicated with modern production methods. When this wood is
              properly stripped and finished, the result is something that
              genuinely cannot be purchased new. It is one of the most rewarding
              refinishing substrates there is.
            </p>
            <p className="text-base leading-relaxed">
              Spindles must be stripped by hand, not in a dip tank. Dip-tank
              stripping dissolves the glue at the base of spindles and causes
              progressive structural failure. Every spindle in a Webster Groves
              staircase is stripped individually, by hand, to preserve the
              joinery.
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
            Staircase refinishing services for Webster Groves homes
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
                Quarter-sawn oak Craftsman staircases
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The defining Webster Groves staircase type: mission-style newel
                posts with simple cap details, wide square spindles, and treads
                in quarter-sawn oak that show the medullary ray figure. These
                staircases strip efficiently — the geometry is simple and the
                wood responds well — and finish to an exceptional result when
                the right tone is selected. The grain does the work; the finish
                should stay out of its way.
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
                Hand-stripping of all spindles
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Every spindle in every Webster Groves staircase is stripped by
                hand. This is not a preference — it is a structural requirement.
                Dip-tank stripping dissolves the glue at the base of spindle
                housings, which causes progressive loosening that worsens with
                seasonal wood movement. Hand stripping preserves the joinery,
                takes longer, and produces a better surface for finishing.
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
                Tread restoration and traffic-wear assessment
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Stair treads in century-old homes carry the evidence of that use
                — worn finish centers, scuff accumulation at the nosing, and
                darkened areas where feet have landed for generations. Sue
                assesses each tread individually: where the oak is sound and the
                wear is surface-level, she strips and refinishes; where
                structural issues exist, she identifies them clearly before the
                project begins.
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
                Period-accurate finish and stain restoration
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Arts and Crafts woodwork was finished in warm, grain-revealing
                tones — amber, honey, and fumed oak colors that let the
                medullary ray figure show through. Sue works with surviving
                woodwork in the home to select a tone that restores the original
                character. Where other rooms retain original finish, she uses
                that as the reference point for the staircase.
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
            EPA Certified Lead Removal — standard on Webster Groves projects
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Webster Groves' pre-1940 housing concentration means lead paint is
            present in the vast majority of homes Sue works in here. Staircase
            projects involve stripping painted surfaces in a high-traffic area
            of the home — containment is critical. Sue is EPA RRP Certified and
            applies full protocol on every project where pre-1978 paint removal
            is involved.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            HEPA containment of the staircase area, wet stripping methods,
            sealed disposal of all stripped material, and written documentation
            at project completion. Family members and pets stay clear of the
            contained work area throughout the project.
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
            "The staircase in our 1914 Craftsman on Elm is quarter-sawn oak with
            the original newel post and wide square spindles. The finish had
            gone dark and dull and we thought about replacing it. Sue talked us
            out of it immediately — and she was right. After refinishing, the
            medullary ray in the oak came back and it's stunning. That staircase
            cannot be built today."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Elm Avenue, Webster Groves
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
                Do you refinish staircases in Webster Groves?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has been refinishing staircases in Webster
                Groves for over 36 years. The neighborhood's Craftsman homes
                contain some of the finest original staircases in the St. Louis
                metro — quarter-sawn oak with mission-style newel posts and wide
                square spindles — and the preservation culture here means many
                of them are still structurally excellent.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Webster Groves staircase has quarter-sawn oak — does that
                affect the refinishing process?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Quarter-sawn oak is one of the finest refinishing substrates in
                residential woodwork. The quartering process produces a
                medullary ray figure — the distinctive fleck pattern — that is
                unique to this cut and impossible to replicate with new-growth
                lumber. It strips cleanly, takes stain evenly, and holds finish
                exceptionally well. If anything, a quarter-sawn oak staircase is
                easier to bring to a beautiful result than flat-sawn
                alternatives.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Can you restore the original Arts and Crafts stain color on my
                staircase?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Arts and Crafts woodwork was typically finished in a warm amber
                or fumed-oak tone that emphasized the natural grain rather than
                obscuring it. Sue works to restore that character — matching the
                tone to surviving examples in the home, or referencing
                period-accurate colors where nothing original remains. Exact
                replication depends on species and condition, but achieving the
                right feeling is the goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Webster Groves staircase?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
