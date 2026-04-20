import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Ballwin Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped kitchen cabinet refinishing in Ballwin, MO. 1980s–2000s solid-wood oak and maple cabinets restored by Sue Wheeler — 36 years experience.",
};

export default function BallwinKitchenCabinetRefinishingPage() {
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
      "Hand-stripped kitchen cabinet refinishing for Ballwin's 1980s and 1990s solid-wood oak and maple kitchens. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish kitchen cabinets in Ballwin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler refinishes kitchen cabinets throughout Ballwin, with a particular focus on the solid-wood oak and maple kitchens common in the neighborhood's 1980s through 2000s homes. She evaluates the cabinet construction first — if the doors and drawer fronts are solid wood, refinishing is a strong option.",
        },
      },
      {
        "@type": "Question",
        name: "My Ballwin kitchen has 1980s oak cabinets — are those worth refinishing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almost always yes. The solid-wood oak cabinets built into Ballwin's 1980s kitchens are structurally excellent — they were made from real wood, not particleboard or MDF. The box is sound, the doors are solid, and the only real problem is that the stain and finish have dated. Refinishing brings them current without the disruption and expense of a full replacement.",
        },
      },
      {
        "@type": "Question",
        name: "Can you change the color of my Ballwin kitchen cabinets when you refinish them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Color change is one of the most common requests on Ballwin cabinet projects — moving from the orange-toned oak stains of the 1980s and 1990s to something more neutral or contemporary. Sue strips the existing finish completely, which is required for a proper color change, and applies the new stain to bare wood for an even, consistent result.",
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
            name: "Ballwin",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/ballwin",
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
            Kitchen Cabinet Refinishing · Ballwin, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Kitchen Cabinet Refinishing in <em>Ballwin</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Ballwin kitchens from the 1980s and 1990s were built with solid-wood
            oak and maple cabinets that have aged well structurally but have
            dated visually. Sue Wheeler strips and refinishes them by hand —
            giving them a fresh stain or updated color without the cost and
            disruption of full cabinet replacement.
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
            Why Ballwin kitchens are ideal refinishing candidates
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Ballwin developed heavily in the 1970s through the 1990s, and the
              kitchens from that era represent the primary refinishing
              opportunity in the neighborhood. The builders and custom home
              contractors working here used solid-wood cabinet construction as a
              standard — real oak or maple doors and drawer fronts, solid wood
              face frames, and dovetail or mortise-and-tenon box construction.
              These kitchens were built to last.
            </p>
            <p className="text-base leading-relaxed">
              The problem is aesthetic, not structural. The warm orange and
              honey tones that were fashionable in 1980s and 1990s kitchens have
              dated. Homeowners who want a more contemporary look frequently
              assume their only option is full replacement — but that is not the
              case when the underlying cabinets are solid wood.
            </p>
            <p className="text-base leading-relaxed">
              Kitchen cabinet refinishing is the primary entry service for
              Ballwin, and it is the area where the value proposition is
              clearest: solid-wood cabinets that look current for a fraction of
              the cost of new cabinetry. The box, the drawer slides, the hinges,
              and the layout all stay exactly as they are. Only the finish
              changes.
            </p>
            <p className="text-base leading-relaxed">
              Sue also works on Ballwin kitchens where the cabinets have seen
              surface damage — water marks near the sink, grease accumulation
              around the range, or finish wear on the most-used doors. These are
              all correctable with proper stripping and refinishing.
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
            Cabinet refinishing services for Ballwin kitchens
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
                Oak cabinet refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Solid-wood oak cabinets are the most common refinishing project
                in Ballwin. Sue strips the existing stain and finish from the
                doors, drawer fronts, and face frames, then applies new stain
                and finish to bare wood. The grain of the oak takes color
                evenly, and the result is a kitchen that looks updated without
                any construction involved.
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
                Maple cabinet refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Maple was a popular alternative to oak in Ballwin's higher-end
                1990s and early 2000s kitchens. Maple is a tighter-grained wood
                than oak and takes stain differently — it can be more
                challenging to achieve even color across the grain. Sue's
                hand-stripping process and experience with maple ensures a
                consistent result.
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
                Color change and stain updates
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Moving from an orange-toned 1980s honey oak to a cooler gray,
                espresso, or natural finish requires complete stripping — there
                is no shortcut for a genuine color change. Sue strips every
                surface back to bare wood before applying the new stain, which
                is the only reliable way to achieve an even result across an
                entire kitchen's worth of cabinet doors.
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
                Surface damage repair and touch-up
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Water staining near the sink, grease buildup around the range,
                and finish wear on frequently used doors are all issues Sue
                addresses as part of a full refinishing project. Where surface
                damage has gone into the wood rather than just the finish, she
                addresses that at the stripping stage before new finish is
                applied.
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
            Lead paint in pre-1978 Ballwin kitchens
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            The oldest homes in Ballwin predate the 1978 federal lead paint ban.
            Kitchen cabinets in pre-1978 homes may carry lead paint in earlier
            finish layers even if they have been repainted since. Sue Wheeler is
            EPA RRP Certified and applies full containment protocol when lead
            paint is present or suspected on any cabinet project.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Most Ballwin kitchens fall in the post-1978 range, but the
            certification matters whenever there is any question. Sue treats
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
            "We had classic 1989 honey oak cabinets on Holloway Road — good
            cabinets, wrong color for what we wanted. Sue stripped them and
            finished them in a warm gray stain. We got the updated kitchen we
            wanted without gutting anything. The whole neighborhood probably
            thought we renovated."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Holloway Road, Ballwin
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
                Do you refinish kitchen cabinets in Ballwin?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler refinishes kitchen cabinets throughout Ballwin,
                with a particular focus on the solid-wood oak and maple kitchens
                common in the neighborhood's 1980s through 2000s homes. She
                evaluates the cabinet construction first — if the doors and
                drawer fronts are solid wood, refinishing is a strong option.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Ballwin kitchen has 1980s oak cabinets — are those worth
                refinishing?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Almost always yes. The solid-wood oak cabinets built into
                Ballwin's 1980s kitchens are structurally excellent — they were
                made from real wood, not particleboard or MDF. The box is sound,
                the doors are solid, and the only real problem is that the stain
                and finish have dated. Refinishing brings them current without
                the disruption and expense of a full replacement.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Can you change the color of my Ballwin kitchen cabinets when you
                refinish them?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Color change is one of the most common requests on Ballwin
                cabinet projects — moving from the orange-toned oak stains of
                the 1980s and 1990s to something more neutral or contemporary.
                Sue strips the existing finish completely, which is required for
                a proper color change, and applies the new stain to bare wood
                for an even, consistent result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to update your Ballwin kitchen cabinets?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
