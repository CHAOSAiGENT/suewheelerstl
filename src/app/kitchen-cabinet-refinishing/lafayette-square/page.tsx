import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTABlock from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Lafayette Square Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Refinishing irreplaceable kitchen cabinetry in Lafayette Square's 1860s–1880s mansions and townhouses. Chestnut, walnut, early fir, and butler's pantry cabinetry. EPA Certified. Free estimate — (314) 367-6054.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Kitchen Cabinet Refinishing",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing",
  },
  {
    name: "Lafayette Square",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/lafayette-square",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com",
  telephone: "(314) 367-6054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Place",
    name: "Lafayette Square, St. Louis, MO",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6064,
      longitude: -90.2168,
    },
  },
  description:
    "Restoring pre-Civil War and late-Victorian kitchen and butler's pantry cabinetry in Lafayette Square since 1989. Chestnut, walnut, and early fir. EPA Certified Lead Renovator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Lafayette Square?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sue Wheeler has been working in Lafayette Square homes for over 36 years. The neighborhood contains the oldest intact housing in St. Louis, and the cabinetry in those homes — whether original pre-1900 or late Victorian — requires the kind of careful, experienced hand-stripping approach we have used for 36 years.",
      },
    },
    {
      "@type": "Question",
      name: "My Lafayette Square kitchen may have pre-1900 cabinetry — how do you approach something that old?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carefully and without shortcuts. Pre-1900 cabinetry in Lafayette Square can include American chestnut, black walnut, or early fir — species and cuts that are effectively irreplaceable today. We assess each piece individually before stripping, use hand tools throughout, and apply finishes appropriate to the wood's age and character. The goal is always to preserve and protect what's there, not merely refinish it.",
      },
    },
    {
      "@type": "Question",
      name: "My cabinets are in a butler's pantry, not the main kitchen — do you work on those?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Butler's pantry cabinetry is some of the most beautiful original woodwork surviving in Lafayette Square homes — and some of the most vulnerable to damage from improper refinishing. We work on butler's pantry cabinets with the same hand-stripping approach we use for any historic piece. The result preserves the patina and character of the original wood while giving it a protected, lasting finish.",
      },
    },
  ],
};

export default function LafayetteSquareKitchenCabinetPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

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
            className="text-xs uppercase tracking-widest font-sans mb-4"
            style={{ color: "#A65D37" }}
          >
            Kitchen Cabinet Refinishing — Lafayette Square
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen Cabinet Refinishing in <em>Lafayette Square</em>
          </h1>
          <p
            className="text-lg font-sans mb-8 max-w-2xl"
            style={{ color: "#6B5E55" }}
          >
            Lafayette Square is the oldest intact neighborhood in St. Louis —
            and its cabinetry reflects that. When pre-1900 woodwork survives, it
            is irreplaceable. We treat it that way, hand-stripping with patience
            and applying finishes that protect without obscuring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-white font-sans font-medium rounded"
              style={{ backgroundColor: "#11B2E8" }}
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 px-8 py-4 font-sans font-medium rounded border"
              style={{ color: "#2A2421", borderColor: "#2A2421" }}
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
            className="text-3xl md:text-4xl mb-8"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What makes Lafayette Square kitchen cabinets worth refinishing
          </h2>
          <div className="space-y-6 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Lafayette Square was developed in the 1860s and 1880s, making it
              the oldest intact residential neighborhood in St. Louis. The
              mansions and townhouses here were built by the city's merchant
              class at the peak of St. Louis's pre-Civil War and Gilded Age
              wealth. The materials that went into those homes were the finest
              available — and in the kitchens and service areas, that meant
              cabinetry in American chestnut, black walnut, and early-growth fir
              at a time when those species were still abundant.
            </p>
            <p>
              American chestnut effectively disappeared from American forests
              after the blight of the early twentieth century. Black walnut,
              once common as a utility wood, is now priced as a luxury hardwood.
              Early fir — old-growth, with growth rings measured in fractions of
              an inch — bears no resemblance to the plantation- grown fir sold
              today. If Lafayette Square cabinetry has survived, it cannot be
              replaced with anything comparable. It can only be preserved.
            </p>
            <p>
              More commonly, Lafayette Square kitchens have late-Victorian era
              cabinetry from the 1880s and 1890s, installed during renovations
              of the original mansions. That generation of cabinetry includes
              the finely detailed butler's pantry cabinet work for which the
              neighborhood is known — glass-fronted upper cabinets, plate
              grooves, built-in wine storage, and craftsmanship that defined the
              era of domestic service. These pieces are irreplaceable in a
              different sense: they no longer exist in any catalog.
            </p>
            <p>
              We approach Lafayette Square cabinetry with the patience that age
              requires. We assess the wood and its condition before stripping
              begins, use hand tools throughout, and apply finishes appropriate
              to the piece. The result preserves what is there rather than
              simply covering it with something new. At a fraction of the cost
              of any replacement option — and with no replacement that could
              match the original — refinishing is the only sensible choice.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What we do with your kitchen cabinets
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Door &amp; Drawer Front Refinishing
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Every door and drawer front is removed and brought to our shop
                for hand-stripping. We do not use dip tanks — dipping raises the
                wood grain and destroys finish adhesion, and on historic pieces
                can cause joint failure. Hand-stripping preserves the integrity
                of old joinery while leaving the wood surface ready for a
                lasting, protective finish.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Cabinet Box &amp; Frame Work
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Cabinet boxes, face frames, and built-in millwork are stripped,
                cleaned, and refinished in place. In Lafayette Square kitchens
                and butler's pantries, the built-in character of the cabinetry
                means that much of the work must be done on-site. We work
                carefully within those constraints and protect every surrounding
                surface throughout.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Color Changes
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Many Lafayette Square homeowners want to restore painted
                cabinetry to natural wood — uncovering decades of paint to
                reveal the original walnut or chestnut beneath. We also handle
                paint-to-paint and stain-to-stain transitions. Every color
                change begins with a full strip so the new finish bonds
                correctly to the wood surface.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Stain Matching
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Matching stain on historic wood species requires understanding
                how old wood absorbs differently than new. Aged walnut,
                chestnut, and fir each react to stain in ways that vary from new
                lumber of the same species. Sue custom-blends on-site and tests
                before committing — the result honors the character of the
                original wood rather than obscuring it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{
          backgroundColor: "#F8F6F1",
          borderLeftWidth: "4px",
          borderLeftStyle: "solid",
          borderLeftColor: "#11B2E8",
        }}
        className="py-14 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            EPA Certified — essential for Lafayette Square's pre-1900 kitchens
          </h2>
          <div className="space-y-4 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Lafayette Square homes predate 1978 by nearly a century — meaning
              lead paint is a near certainty on any painted surface, including
              kitchen and butler's pantry cabinetry. Multiple layers of paint
              applied over 150 years can contain lead at several strata.
              Stripping without proper containment and disposal protocols is
              both dangerous and illegal.
            </p>
            <p>
              Sue Wheeler holds EPA Lead-Safe Certification, required by federal
              law for contractors disturbing paint in pre-1978 homes. We apply
              full containment, cleanup, and waste disposal procedures on every
              Lafayette Square project. Your family is protected, the work is
              done legally, and every project is documented for disclosure and
              inspection purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl md:text-2xl italic mb-6"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            "The butler's pantry cabinets in our 1875 townhouse had been painted
            over at least four times. Sue stripped every piece by hand and found
            walnut underneath. I didn't even know we had walnut cabinets. The
            care she took with something that old was extraordinary."
          </blockquote>
          <p className="font-sans text-sm" style={{ color: "#6B5E55" }}>
            — Eleanor &amp; Thomas B., homeowners, Lafayette Square
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Do you refinish kitchen cabinets in Lafayette Square?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Yes. Sue Wheeler has been working in Lafayette Square homes for
                over 36 years. The neighborhood contains the oldest intact
                housing in St. Louis, and the cabinetry in those homes — whether
                original pre-1900 or late Victorian — requires the kind of
                careful, experienced hand-stripping approach we have used for 36
                years.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                My Lafayette Square kitchen may have pre-1900 cabinetry — how do
                you approach something that old?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Carefully and without shortcuts. Pre-1900 cabinetry in Lafayette
                Square can include American chestnut, black walnut, or early fir
                — species and cuts that are effectively irreplaceable today. We
                assess each piece individually before stripping, use hand tools
                throughout, and apply finishes appropriate to the wood's age and
                character. The goal is always to preserve and protect what's
                there, not merely refinish it.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                My cabinets are in a butler's pantry, not the main kitchen — do
                you work on those?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Absolutely. Butler's pantry cabinetry is some of the most
                beautiful original woodwork surviving in Lafayette Square homes
                — and some of the most vulnerable to damage from improper
                refinishing. We work on butler's pantry cabinets with the same
                hand-stripping approach we use for any historic piece. The
                result preserves the patina and character of the original wood
                while giving it a protected, lasting finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Lafayette Square cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
