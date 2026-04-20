import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Frontenac Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped kitchen cabinet refinishing in Frontenac, MO. 1930s–1990s estate and custom solid-wood cabinetry restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function FrontenacKitchenCabinetRefinishingPage() {
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
      "Hand-stripped kitchen cabinet refinishing for Frontenac's estate and custom homes. Original built-ins and later custom cabinetry. Color change a specialty. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish kitchen cabinets in Frontenac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler refinishes kitchen cabinets throughout Frontenac, including original built-in cabinetry in the pre-war estate homes and the custom solid-wood cabinetry found in later construction. Frontenac is a neighborhood where the cabinets are worth keeping — refinishing is the sensible choice when the underlying woodwork is quality.",
        },
      },
      {
        "@type": "Question",
        name: "My Frontenac kitchen has custom solid-wood cabinetry from the 1990s — is that worth refinishing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almost certainly yes. Custom solid-wood cabinetry from the 1990s represents a level of quality that is difficult and expensive to replicate with new construction. The box construction, the door profiles, the wood species — all of it is sound. The only reason to consider refinishing rather than keeping is if the stain or finish has shifted. Refinishing corrects exactly that without disturbing any of what is working.",
        },
      },
      {
        "@type": "Question",
        name: "Can you do a complete color change on my Frontenac kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Color change is a common request in Frontenac — moving from honey, natural, or wood-tone finishes that have dated to something more current. A genuine color change requires complete stripping back to bare wood, which Sue does by hand. There is no reliable shortcut for applying a new color over an existing stain.",
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
            name: "Frontenac",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/frontenac",
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
            Kitchen Cabinet Refinishing · Frontenac, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Kitchen Cabinet Refinishing in <em>Frontenac</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Frontenac kitchens range from original 1930s and 1940s built-in
            cabinetry in estate homes to high-end custom installations from
            later decades. All of it is solid-wood construction worth
            preserving. Sue Wheeler refinishes by hand, with particular
            attention to color change projects and whole-kitchen consistency.
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
            Why Frontenac kitchens are refinishing candidates
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Frontenac's established housing stock means the kitchens span a
              wide era — from original 1930s built-in cabinetry in the pre-war
              estates to custom installations from the 1970s, 1980s, and 1990s.
              What they share is solid-wood construction. The neighborhood's
              builders and custom contractors used real wood throughout, and
              that is what makes refinishing the sensible choice when the finish
              has dated or shifted.
            </p>
            <p className="text-base leading-relaxed">
              The pre-war estate kitchens in Frontenac often have original
              built-in cabinetry — sometimes in walnut or old-growth oak — that
              has never been touched since installation. These are exceptional
              refinishing candidates: the wood is old-growth, the construction
              is solid, and the only issue is a finish that has aged past its
              useful life. Stripping and refinishing them is a preservation act
              as much as an aesthetic one.
            </p>
            <p className="text-base leading-relaxed">
              The custom cabinetry in Frontenac's post-war and later homes is
              also worth maintaining. High-end custom installations from the
              1980s and 1990s were built from solid-wood species — oak, maple,
              cherry — and represent a level of quality that is expensive to
              replicate. When the stain has yellowed or the client wants a
              different look, refinishing delivers the update without disrupting
              what is structurally excellent.
            </p>
            <p className="text-base leading-relaxed">
              Color change is the most common request Sue handles in Frontenac
              cabinet projects — homeowners who want to update from a warmer or
              more dated tone to something that reads more current. Done
              correctly, with full stripping to bare wood, the result is a
              kitchen that looks new without the cost or disruption of
              replacement.
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
            Cabinet refinishing services for Frontenac kitchens
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
                Original built-in cabinetry refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Frontenac's pre-war estate kitchens sometimes retain original
                built-in cabinetry that has not been touched since construction.
                These are among the most rewarding refinishing projects Sue
                takes on — original old-growth wood, solid joinery, and decades
                of applied finish that strips back to reveal the quality
                underneath. The result preserves the character of the original
                kitchen while giving it a finish appropriate for continued use.
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
                Custom solid-wood cabinet refinishing
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Custom cabinetry installed in Frontenac kitchens across the
                1970s, 1980s, and 1990s is solid-wood throughout — oak, maple,
                cherry, and walnut are all common in this neighborhood. Sue
                strips each door and drawer front individually, by hand, and
                refinishes to a consistent result across the whole kitchen.
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
                Updating from a honey, orange, or warm-toned stain to something
                more neutral or contemporary requires complete stripping of the
                existing finish — there is no reliable way to change color
                without going back to bare wood. Sue strips fully, applies the
                new stain across every surface including face frames and
                interiors where visible, and finishes to a consistent sheen
                throughout the kitchen.
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
                Surface repair and restoration
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Water damage near the sink, grease accumulation around the
                range, and finish wear on the most-used doors are all
                addressable as part of a full refinishing project. Where damage
                has penetrated into the wood, Sue addresses it at the stripping
                stage before applying new finish — ensuring the result is clean
                and even rather than patched.
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
            Lead paint in Frontenac's pre-1978 kitchens
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Frontenac's pre-war estate homes are pre-1978 by definition. Kitchen
            cabinetry in these homes may carry lead paint in earlier finish
            layers even if the surface appears to be a more recent coat. Any
            firm disturbing painted surfaces in pre-1978 homes must be EPA RRP
            Certified — Sue Wheeler holds that certification and applies full
            protocol on every applicable project.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            HEPA containment, wet stripping methods to prevent airborne dust,
            sealed disposal of all stripped material, and written documentation
            at project completion. Frontenac clients in the neighborhood's older
            homes should expect this as a standard part of the process.
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
            "We have a 1941 home on Price Road with original built-in kitchen
            cabinetry that nobody had touched since it was installed. The wood
            was extraordinary once Sue stripped the decades of finish off it.
            She matched the stain to the butler's pantry adjoining the kitchen
            and the whole room feels cohesive now for the first time."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Price Road, Frontenac
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
                Do you refinish kitchen cabinets in Frontenac?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler refinishes kitchen cabinets throughout
                Frontenac, including original built-in cabinetry in the pre-war
                estate homes and the custom solid-wood cabinetry found in later
                construction. Frontenac is a neighborhood where the cabinets are
                worth keeping — refinishing is the sensible choice when the
                underlying woodwork is quality.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Frontenac kitchen has custom solid-wood cabinetry from the
                1990s — is that worth refinishing?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Almost certainly yes. Custom solid-wood cabinetry from the 1990s
                represents a level of quality that is difficult and expensive to
                replicate with new construction. The box construction, the door
                profiles, the wood species — all of it is sound. The only reason
                to consider refinishing rather than keeping is if the stain or
                finish has shifted. Refinishing corrects exactly that without
                disturbing any of what is working.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Can you do a complete color change on my Frontenac kitchen?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Color change is a common request in Frontenac — moving from
                honey, natural, or wood-tone finishes that have dated to
                something more current. A genuine color change requires complete
                stripping back to bare wood, which Sue does by hand. There is no
                reliable shortcut for applying a new color over an existing
                stain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to update your Frontenac kitchen cabinets?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
