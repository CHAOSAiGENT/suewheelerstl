import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Webster Groves Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped kitchen cabinet refinishing in Webster Groves, MO. Original Craftsman fir and quarter-sawn oak cabinetry restored by Sue Wheeler — EPA Certified.",
};

export default function WebsterGrovesCabinetRefinishingPage() {
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
      "Hand-stripped kitchen cabinet refinishing for Webster Groves Craftsman and Arts & Crafts homes. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish kitchen cabinets in Webster Groves?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has been refinishing kitchen cabinets in Webster Groves for over 36 years. The neighborhood's Craftsman kitchens contain original cabinetry in fir and quarter-sawn oak that responds exceptionally well to hand-stripping and restaining. The preservation culture in Webster Groves means many of these kitchens have never been gutted — the original cabinetry is intact and worth restoring.",
        },
      },
      {
        "@type": "Question",
        name: "My Webster Groves kitchen has original Craftsman cabinetry that has been painted — can it be restored to natural wood?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, yes. Fir and quarter-sawn oak — the species used in Webster Groves Craftsman kitchens — strip cleanly and take stain exceptionally well. Paint does not penetrate old-growth wood the way it does new-growth lumber, which means the surface under the paint is typically in good condition. Sue evaluates each kitchen before committing to a recommendation, but restoration is the outcome in the majority of these projects.",
        },
      },
      {
        "@type": "Question",
        name: "Is refinishing right for cabinets that have been painted multiple times?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiple paint layers add work to the stripping phase but do not fundamentally change the outcome if the underlying wood is sound. The concern with heavy paint buildup is whether it has been applied unevenly — thick in corners, dripped on panel edges — which requires more care to strip cleanly. Sue accounts for this in the project assessment. Three or four paint layers on old-growth fir or oak is a manageable situation, not a disqualifying one.",
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
            name: "Webster Groves",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/webster-groves",
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
            Kitchen Cabinet Refinishing · Webster Groves, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Kitchen Cabinet Refinishing in <em>Webster Groves</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Webster Groves Craftsman kitchens have some of the finest original
            cabinetry in the St. Louis metro — fir and quarter-sawn oak that has
            never been replaced, waiting under layers of paint. Sue Wheeler
            strips it by hand and brings it back.
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
            What makes Webster Groves cabinet refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Webster Groves' preservation culture means something specific in
              kitchens: many of the Craftsman-era homes in the neighborhood
              still have their original built-in cabinetry. These kitchens were
              not gutted in the 1960s or 1970s and fitted with builder-grade box
              cabinets — the originals are still there, often under paint, but
              intact and structurally sound. That is rare, and it matters.
            </p>
            <p className="text-base leading-relaxed">
              The cabinetry in these kitchens was built with wide, flat-panel or
              simple raised-panel doors in fir or quarter-sawn oak. Face-frame
              construction with proportions scaled to the room. The lumber is
              old-growth — denser and tighter-grained than anything available in
              new-construction cabinetry — and it responds to stripping and
              staining in a way that modern cabinetry cannot.
            </p>
            <p className="text-base leading-relaxed">
              Three or four paint layers on these cabinets is the norm rather
              than the exception. The paint accumulates over decades of periodic
              updating — kitchens get repainted more often than any other room
              in the house — and it builds up unevenly in corners and on panel
              edges. Stripping it takes care and time, but what is underneath is
              worth the work.
            </p>
            <p className="text-base leading-relaxed">
              Pre-1978 lead paint protocol applies to virtually every Webster
              Groves kitchen project. Sue is EPA RRP Certified and follows full
              containment on every pre-1978 cabinet project in the neighborhood.
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
            Cabinet refinishing services for Webster Groves kitchens
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
                Door and drawer front removal and shop stripping
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Cabinet doors and drawer fronts are removed at the start of
                every project and transported to the shop for stripping. Working
                in shop conditions allows for thorough, even stripping that
                produces a cleaner surface than in-place work. Each piece is
                stripped individually, inspected, and refinished before being
                returned and rehung. The shop is where the quality of the
                finished result is established.
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
                Cabinet box stripping in place
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The cabinet boxes — face frames, interiors, toe kicks — are
                stripped and refinished in place while the doors are in the
                shop. This phase requires careful masking to protect adjacent
                surfaces and methodical work in the confined space of a kitchen.
                Sue coordinates the schedule so the boxes are ready and cured
                before the doors return from the shop for rehang.
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
                Stain and finish selection for Craftsman kitchens
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The goal in a Webster Groves Craftsman kitchen is typically to
                reveal the natural wood character — the grain, the figure, the
                warmth — rather than covering it with a heavy pigmented stain.
                Sue works with homeowners to select a tone that complements the
                existing woodwork in the house, whether that means a warm honey,
                an amber, or a richer walnut-adjacent tone. The kitchen should
                feel integrated with the rest of the home.
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
                Multi-layer paint assessment and stripping
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Webster Groves kitchens commonly have three or four paint layers
                — sometimes more — accumulated over decades of periodic updates.
                Sue assesses the paint layers at the start of every project,
                identifies where buildup is heaviest (typically inside corners
                and panel edges), and plans the stripping approach accordingly.
                Multiple layers add time but do not change the achievable result
                if the underlying wood is sound.
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
            EPA Certified Lead Removal — required in Webster Groves kitchens
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Kitchens in pre-1978 homes are a lead-paint concern that goes beyond
            the standard renovation context — this is where food is prepared,
            and containment standards are accordingly high. Sue is EPA RRP
            Certified and applies full containment protocol on every pre-1978
            cabinet project, regardless of how many paint layers are present or
            whether any individual layer appears to be lead-free.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            HEPA filtration, wet stripping methods to suppress dust, sealed
            disposal of all stripped material, and written documentation
            provided at project completion. The kitchen is not returned to use
            until containment is verified clear.
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
            "Our 1916 Craftsman on Lockwood had the original kitchen cabinets —
            three layers of paint. Every contractor we talked to said to demo
            them. Sue stripped them in her shop and refinished them in a warm
            amber. The quarter-sawn oak on the door panels is extraordinary. We
            get more compliments on the kitchen now than any other room in the
            house."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Lockwood Avenue, Webster Groves
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
                Do you refinish kitchen cabinets in Webster Groves?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has been refinishing kitchen cabinets in
                Webster Groves for over 36 years. The neighborhood's Craftsman
                kitchens contain original cabinetry in fir and quarter-sawn oak
                that responds exceptionally well to hand-stripping and
                restaining. The preservation culture in Webster Groves means
                many of these kitchens have never been gutted — the original
                cabinetry is intact and worth restoring.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Webster Groves kitchen has original Craftsman cabinetry that
                has been painted — can it be restored to natural wood?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                In most cases, yes. Fir and quarter-sawn oak — the species used
                in Webster Groves Craftsman kitchens — strip cleanly and take
                stain exceptionally well. Paint does not penetrate old-growth
                wood the way it does new-growth lumber, which means the surface
                under the paint is typically in good condition. Sue evaluates
                each kitchen before committing to a recommendation, but
                restoration is the outcome in the majority of these projects.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Is refinishing right for cabinets that have been painted
                multiple times?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Multiple paint layers add work to the stripping phase but do not
                fundamentally change the outcome if the underlying wood is
                sound. The concern with heavy paint buildup is whether it has
                been applied unevenly — thick in corners, dripped on panel edges
                — which requires more care to strip cleanly. Sue accounts for
                this in the project assessment. Three or four paint layers on
                old-growth fir or oak is a manageable situation, not a
                disqualifying one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Webster Groves kitchen cabinets?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
