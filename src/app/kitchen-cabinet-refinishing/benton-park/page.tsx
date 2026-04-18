import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTABlock from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Benton Park Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Kitchen cabinet refinishing in Benton Park's 1870s–1900s Victorian cottages. Hand-stripping original painted fir and matching mixed-era cabinet sets. EPA Certified. Free estimate — (314) 367-6054.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Kitchen Cabinet Refinishing",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing",
  },
  {
    name: "Benton Park",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/benton-park",
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
    name: "Benton Park, St. Louis, MO",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5928,
      longitude: -90.2224,
    },
  },
  description:
    "Hand-stripping and refinishing kitchen cabinets in Benton Park Victorian cottages since 1989. EPA Certified Lead Renovator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Benton Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sue Wheeler has been working in Benton Park homes for over 36 years. The neighborhood's Victorian-era painted fir cabinetry is well-suited to hand-stripping and refinishing — and we regularly work on kitchens with a mix of original and replacement cabinets.",
      },
    },
    {
      "@type": "Question",
      name: "My kitchen has original cabinets mixed with newer replacements — can you make them match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, this is one of the most common situations we encounter in Benton Park kitchens. We strip and refinish the original pieces, and apply a matching finish to the newer additions. Stain matching and color matching across different wood species and eras is a core specialty.",
      },
    },
    {
      "@type": "Question",
      name: "How much does cabinet refinishing typically cost in a Benton Park kitchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every kitchen is different — cabinet count, condition, current finish, and the work required all factor in. What's consistent is that refinishing costs 60 to 80 percent less than cabinet replacement. Sue provides free, no-obligation estimates after seeing the kitchen in person.",
      },
    },
  ],
};

export default function BentonParkKitchenCabinetPage() {
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
            Kitchen Cabinet Refinishing — Benton Park
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen Cabinet Refinishing in <em>Benton Park</em>
          </h1>
          <p
            className="text-lg font-sans mb-8 max-w-2xl"
            style={{ color: "#6B5E55" }}
          >
            Benton Park's Victorian cottages carry decades of kitchen history —
            original painted fir cabinetry, piecemeal updates, and mismatched
            eras that deserve to be unified. We hand-strip and refinish those
            cabinets back to a coherent, lasting finish.
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
            What makes Benton Park kitchen cabinets worth refinishing
          </h2>
          <div className="space-y-6 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Benton Park's housing stock dates to the 1870s and 1900s —
              Victorian cottages built when fir was the standard kitchen cabinet
              material and construction was done by hand. The original cabinetry
              in these homes is simple and sturdy: painted fir doors, solid
              frames, built to last. And in most cases, it has.
            </p>
            <p>
              The challenge in Benton Park kitchens is that they've often been
              updated piecemeal over the years. A set of original 1890s cabinets
              might sit alongside a row added in the 1950s, or a section
              replaced in the 1970s when the originals were deemed outdated. The
              result is a kitchen that feels fragmented — different profiles,
              different finishes, different eras that never quite harmonize.
            </p>
            <p>
              Refinishing brings visual coherence back. We strip and refinish
              the original pieces, match the finish across the newer additions,
              and deliver a kitchen where everything reads as intentional. At 60
              to 80 percent less than full cabinet replacement, it's the most
              cost-effective way to transform how your kitchen looks without
              losing the original construction.
            </p>
            <p>
              We remove cabinet doors and drawer fronts, take them to our shop
              for hand-stripping, and return them finished to match the rest of
              the kitchen. Cabinet boxes are worked in place. The whole process
              is far less disruptive than a renovation — and the result is far
              more authentic to what Benton Park kitchens were always meant to
              be.
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
                Every door and drawer front comes off and goes to our shop for
                hand-stripping. We never use dip tanks — they raise the wood
                grain and ruin finish adhesion. Hand-stripping takes longer but
                leaves the wood clean, stable, and ready for a durable
                polyurethane finish that will hold up to kitchen use for years.
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
                The cabinet boxes and face frames that stay in the kitchen are
                stripped, sanded, and refinished in place. We protect your
                counters, appliances, and floors throughout. The finish carries
                seamlessly from doors to frames to boxes — no mismatches, no
                evidence of patchwork.
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
                Many Benton Park homeowners want a fresh look without replacing
                the cabinets. We handle full color transitions — painted to
                stained, stained to painted, or one paint color to another.
                Every transition starts with a full strip-down of the existing
                finish so the new coat bonds correctly and lasts.
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
                Matching finishes across original and replacement cabinets is a
                specialty we've developed over 36 years working in St. Louis
                kitchens. We custom-blend stains and paint colors on-site, test
                against the existing finish, and adjust until the match is exact
                before committing to the full kitchen.
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
            EPA Certified for lead paint — essential in Benton Park's pre-1978
            homes
          </h2>
          <div className="space-y-4 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Benton Park homes built in the Victorian era — and nearly every
              home in the neighborhood was — are presumed to contain lead paint
              under EPA regulations. Kitchen cabinets that have been painted
              repeatedly over a century almost certainly have lead layers
              somewhere in that paint stack. Sanding or stripping without proper
              protocols creates a serious health hazard.
            </p>
            <p>
              Sue Wheeler holds EPA Lead-Safe Certification, which is required
              by law for any contractor disturbing painted surfaces in pre-1978
              homes. We follow containment, cleanup, and waste disposal
              procedures on every job — protecting your family and ensuring your
              project is fully documented for any future inspection or real
              estate transaction.
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
            "My kitchen was a mess of different cabinet eras — original 1890s
            cabinets next to a section my previous owner added in the seventies.
            Sue unified the whole thing. You'd never know they weren't all built
            at the same time. It completely changed the feel of the kitchen."
          </blockquote>
          <p className="font-sans text-sm" style={{ color: "#6B5E55" }}>
            — David R., homeowner, Benton Park
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
                Do you refinish kitchen cabinets in Benton Park?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Yes. Sue Wheeler has been working in Benton Park homes for over
                36 years. The neighborhood's Victorian-era painted fir cabinetry
                is well-suited to hand-stripping and refinishing — and we
                regularly work on kitchens with a mix of original and
                replacement cabinets.
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
                My kitchen has original cabinets mixed with newer replacements —
                can you make them match?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Yes, this is one of the most common situations we encounter in
                Benton Park kitchens. We strip and refinish the original pieces
                and apply a matching finish to the newer additions. Stain
                matching and color matching across different wood species and
                eras is a core specialty.
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
                How much does cabinet refinishing typically cost in a Benton
                Park kitchen?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Every kitchen is different — cabinet count, condition, current
                finish, and the work required all factor in. What's consistent
                is that refinishing costs 60 to 80 percent less than cabinet
                replacement. Sue provides free, no-obligation estimates after
                seeing the kitchen in person.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Benton Park cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
