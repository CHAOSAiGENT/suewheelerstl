import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Frontenac Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing in Frontenac, MO. Pre-war estate formal staircases, oak and mahogany, restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function FrontenacStaircaseRefinishingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
    telephone: "(314) 367-6054",
    areaServed: {
      "@type": "City",
      name: "Frontenac",
      containedInPlace: {
        "@type": "State",
        name: "Missouri",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6362,
      longitude: -90.4068,
    },
    description:
      "Hand-stripped staircase refinishing for Frontenac's estate and Colonial homes. Formal curved and straight staircases in oak and mahogany. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish staircases in Frontenac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has refinished staircases in Frontenac across the full range of the neighborhood's housing stock — from the formal staircases in pre-war estate homes to the center-hall oak staircases of the post-war Colonials. Frontenac is one of the neighborhoods where Sue has completed whole-home wood restoration projects, with the staircase as part of a larger scope.",
        },
      },
      {
        "@type": "Question",
        name: "My Frontenac home has a formal curved staircase — does that affect the refinishing process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A curved staircase presents different craft challenges than a straight run — particularly at the treads, where the nose follows a curve, and at the starting step and handrail transitions. Sue has worked on formal curved staircases in Frontenac and similar neighborhoods throughout her 36-year career. The geometry affects the process, but not the quality of the result.",
        },
      },
      {
        "@type": "Question",
        name: "Can you match my staircase stain to other woodwork throughout my Frontenac home?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Stain matching across a home is a standard part of whole-home or multi-room projects. Sue works from samples of existing woodwork — door trim, cabinet interiors, built-ins — to develop a stain that reads consistently across species and grain variations. Frontenac homes that have had multiple craftspeople work in them over the decades often have small inconsistencies that Sue can bring into alignment.",
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
          { name: "Frontenac", url: "https://suewheelerstl.com/staircase-refinishing/frontenac" },
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
            Staircase Refinishing · Frontenac, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Staircase Refinishing in <em>Frontenac</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Frontenac's pre-war estates and established Colonial homes have
            staircases in oak and mahogany that reward skilled refinishing.
            Whether formal curved stairways or center-hall runs, Sue Wheeler
            strips and refinishes them by hand — matching stain across the home
            and preserving every detail of the original woodwork.
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
            Frontenac staircases — range and character
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Frontenac's housing stock spans from 1920s estate homes to
              post-war Colonial construction to custom homes from more recent
              decades. The staircases reflect that range. Pre-war estate homes
              often have formal staircases — straight or curved, with detailed
              newel posts, turned or carved spindles, and substantial handrails
              in oak or mahogany. Post-war Colonial homes have center-hall oak
              staircases that are simpler in form but solid in construction.
            </p>
            <p className="text-base leading-relaxed">
              Frontenac clients tend to approach staircase refinishing as part
              of a larger project. Sue has completed whole-home wood restoration
              work in Frontenac — staircases refinished in coordination with
              door suites, paneled libraries, or built-in cabinetry — and the
              stain matching across those projects is a significant part of the
              craft. Getting the staircase to read consistently with the trim
              and doors elsewhere in the house is what makes the result feel
              complete rather than patched.
            </p>
            <p className="text-base leading-relaxed">
              Formal curved staircases present specific challenges at the tread
              noses, the handrail transitions, and the starting step. These
              elements require patient hand-stripping — power tools cannot
              follow curves accurately without removing detail or leaving uneven
              surfaces. Sue works through these areas methodically rather than
              quickly.
            </p>
            <p className="text-base leading-relaxed">
              Pre-war Frontenac homes predate the 1978 lead paint ban, and many
              post-war homes do as well. Sue holds EPA RRP Certification and
              applies full protocol on every applicable staircase project in
              Frontenac.
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
            Staircase refinishing services for Frontenac homes
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
                Formal estate staircase refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The formal staircases in Frontenac's pre-war estate homes — with
                their detailed newel posts, curved handrails, and carved or
                turned spindle profiles — are among the most complex residential
                refinishing projects. Sue works through these elements
                individually, stripping by hand to preserve every detail and
                applying finish in a sequence that accounts for the different
                wood exposures across treads, risers, spindles, and rails.
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
                Post-war Colonial center-hall staircases
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Frontenac's post-war Colonial homes have solid-oak center-hall
                staircases that are simpler in form than the estate homes but
                equally worth refinishing. High-traffic tread wear, dated stain
                color, and finish that has yellowed or dulled over time are the
                most common issues. Sue strips and refinishes these completely,
                bringing them into alignment with the rest of the home's
                woodwork.
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
                Stain matching for multi-room and whole-home projects
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                When a staircase refinishing project is part of a larger
                whole-home effort — as it often is in Frontenac — stain
                consistency across every wood element is the primary craft
                challenge. Sue develops stain samples against existing woodwork
                and adjusts formulation to account for species differences
                between the staircase oak and trim elements elsewhere in the
                home.
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
                Spindle and newel post restoration
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Spindles and newel posts in Frontenac's estate homes are often
                the most detailed elements of the staircase — carved capitals,
                paneled shafts, and turned profiles that require careful hand
                stripping to preserve. Sue works these elements by hand rather
                than with power tools, which is the only way to maintain the
                crispness of the original profile through the stripping process.
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
            Lead paint in Frontenac's pre-1978 homes
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Frontenac's pre-war estate homes are pre-1978 by definition, and a
            significant portion of the neighborhood's post-war Colonial stock
            also predates the federal lead paint ban. On any staircase in a
            pre-1978 home, lead paint must be assumed until testing proves
            otherwise. Sue Wheeler is EPA RRP Certified and applies full
            containment protocol on every applicable project.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            This includes HEPA vacuum containment, wet stripping methods to
            suppress airborne dust, sealed disposal of all stripped material,
            and written documentation provided at project completion. Frontenac
            clients in pre-1978 homes should expect this protocol as a standard
            part of any staircase project.
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
            "Our 1934 home on Conway Road has a curved staircase that is the
            centerpiece of the entry hall. Multiple contractors told us it was
            too complicated to refinish well. Sue took it on, worked through the
            curves and the carved newel, and matched the result to the
            surrounding trim. We could not be more pleased with what she
            accomplished."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Conway Road, Frontenac
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
                Do you refinish staircases in Frontenac?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has refinished staircases in Frontenac across
                the full range of the neighborhood's housing stock — from the
                formal staircases in pre-war estate homes to the center-hall oak
                staircases of the post-war Colonials. Frontenac is one of the
                neighborhoods where Sue has completed whole-home wood
                restoration projects, with the staircase as part of a larger
                scope.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Frontenac home has a formal curved staircase — does that
                affect the refinishing process?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                A curved staircase presents different craft challenges than a
                straight run — particularly at the treads, where the nose
                follows a curve, and at the starting step and handrail
                transitions. Sue has worked on formal curved staircases in
                Frontenac and similar neighborhoods throughout her 36-year
                career. The geometry affects the process, but not the quality of
                the result.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Can you match my staircase stain to other woodwork throughout my
                Frontenac home?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Stain matching across a home is a standard part of
                whole-home or multi-room projects. Sue works from samples of
                existing woodwork — door trim, cabinet interiors, built-ins — to
                develop a stain that reads consistently across species and grain
                variations. Frontenac homes that have had multiple craftspeople
                work in them over the decades often have small inconsistencies
                that Sue can bring into alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Frontenac staircase?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
