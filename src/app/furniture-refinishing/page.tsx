import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Furniture Refinishing St. Louis | Wood Refinishing by Sue Wheeler",
  description:
    "Hand-stripped furniture refinishing in St. Louis. Dining tables, antiques, heirloom pieces, chairs, and dressers. 36 years of experience. EPA Certified. Free estimate.",
  openGraph: {
    url: "https://suewheelerstl.com/furniture-refinishing",
  },
};

const faqItems = [
  {
    question: "Do you refinish antique furniture?",
    answer:
      "Yes — antiques and heirloom pieces are a significant part of what we do. Old furniture is often better built than modern pieces and worth restoring properly. We hand-strip every piece, which is the only responsible method for antiques. Chemical dip tanks destroy old-growth joinery and raise grain in ways that can't be reversed.",
  },
  {
    question: "How much does furniture refinishing cost in St. Louis?",
    answer:
      "It depends on the piece: size, condition, wood type, and how many finish layers need to be removed. A dining chair might start around $150–$200. A large dining table with leaves runs considerably more. We give free estimates — Sue will look at the piece and give you a straight number, not a range that inflates after the fact.",
  },
  {
    question: "Can you match the original stain color on old furniture?",
    answer:
      "Usually. Stain matching on existing furniture is standard for us — we assess the tones and work to replicate them. If the original finish has shifted significantly over decades (amber varnish, faded stain), we'll tell you before we start and show you options. You can match original, update to something new, go lighter, or go darker — all of it is possible.",
  },
  {
    question: "How long does furniture refinishing take?",
    answer:
      "Most pieces take one to two weeks from drop-off to completion. Large sets — a full dining set with multiple chairs and a table — or pieces with significant damage may take longer. We'll give you a specific timeline with your estimate. We work in our shop in controlled conditions, which produces a better finish than rushing a piece.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com",
  telephone: "(314) 367-6054",
  foundingDate: "1989",
  address: {
    "@type": "PostalAddress",
    streetAddress: "900 S Boyle Ave",
    addressLocality: "St. Louis",
    addressRegion: "MO",
    postalCode: "63110",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.6158,
    longitude: -90.2545,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wood Refinishing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furniture Refinishing",
          description:
            "Hand-stripped furniture refinishing in St. Louis. Dining tables, chairs, dressers, antiques, and heirloom pieces.",
        },
      },
    ],
  },
};

const pieceTypes = [
  {
    title: "Dining tables & leaves",
    description:
      "The centerpiece of the room. Stripped to bare wood, repaired, stained, finished.",
  },
  {
    title: "Chairs & sets",
    description:
      "Individual chairs or full sets. Consistent color and finish across the set.",
  },
  {
    title: "Dressers & bedroom furniture",
    description:
      "Drawers, case pieces, nightstands. Hand-stripped and finished to original or updated spec.",
  },
  {
    title: "Antiques & heirlooms",
    description:
      "Old-growth wood, original joinery, irreplaceable pieces. Treated accordingly.",
  },
  {
    title: "Sideboards & buffets",
    description:
      "Large case pieces with multiple surfaces. Finished for both beauty and durability.",
  },
  {
    title: "Hutches & display pieces",
    description:
      "Glass-panel cases, interior and exterior surfaces, detailed molding — all done by hand.",
  },
  {
    title: "Accent tables & occasional pieces",
    description:
      "End tables, sofa tables, coffee tables. Small doesn't mean easy — every piece gets the same attention.",
  },
  {
    title: "Other freestanding wood furniture",
    description:
      "If it's solid wood and it needs refinishing, call. Takes 30 seconds to find out if we can help.",
  },
];

export default function FurnitureRefinishingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Furniture Refinishing",
            url: "https://suewheelerstl.com/furniture-refinishing",
          },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-sans font-medium uppercase tracking-widest text-[#A65D37] mb-4">
            Furniture Refinishing · St. Louis
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            The table your grandmother kept. The dresser that doesn&rsquo;t
            match. The antique you couldn&rsquo;t leave behind.
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            We&rsquo;ve been refinishing furniture since before most St. Louis
            refinishers existed. 36 years. Still hand-stripped, never dipped.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 text-base font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors"
            >
              <Phone size={16} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* What we refinish */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What we refinish
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-8 max-w-2xl">
            Furniture refinishing was the foundation of this business. Sue has
            been doing it since 1989 — long before architectural woodwork became
            the focus. That history shows in how we approach every piece.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {pieceTypes.map((piece) => (
              <div
                key={piece.title}
                className="p-5"
                style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
              >
                <h3
                  className="text-base text-[#2A2421] mb-2"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  {piece.title}
                </h3>
                <p className="text-sm text-[#6B5E55] font-sans leading-relaxed">
                  {piece.description}
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-sm font-sans text-[#6B5E55] border-l-4 pl-4"
            style={{ borderColor: "#A65D37" }}
          >
            We do not refinish floors, decks, or outdoor furniture. If
            you&rsquo;re unsure whether we can help, call — it takes 30 seconds.
          </p>
        </div>
      </section>

      {/* The process */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            The process: same method we apply to <em>doors and staircases.</em>
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-10 max-w-2xl">
            We take pieces to our shop, work in controlled conditions, and
            return them when done. No rush. No shortcuts. The climate-controlled
            environment produces a more consistent cure than in-home work — and
            keeps dust and fumes out of your space.
          </p>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
              >
                1
              </div>
              <div>
                <h3
                  className="text-lg text-[#2A2421] mb-2"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  Assess the piece
                </h3>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Wood type, existing finish, damage assessment. Is the joinery
                  solid? Are there veneer issues? Is there lead paint? The
                  assessment determines the approach — and you hear all of it
                  before we start.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex gap-6">
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
              >
                2
              </div>
              <div>
                <h3
                  className="text-lg text-[#2A2421] mb-2"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  Hand-strip
                </h3>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Never a dip tank. Dipping destroys old-growth joinery — the
                  glue joints fail, veneer lifts, grain raises — and leaves the
                  wood looking flat and processed. Hand-stripping is slower.
                  It&rsquo;s the right way.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex gap-6">
              <div
                className="shrink-0 w-10 h-10 flex items-center justify-center text-white text-sm font-sans font-medium"
                style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
              >
                3
              </div>
              <div>
                <h3
                  className="text-lg text-[#2A2421] mb-2"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  Finish
                </h3>
                <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                  Stain or clear coat, matched to original or updated per your
                  preference. Topcoat selected for the piece — oil-based or
                  water-based polyurethane, applied in the shop, cured before
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why hand-strip matters */}
      <section
        className="py-14 px-6 border-l-4"
        style={{ backgroundColor: "#F8F6F1", borderColor: "#11B2E8" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Why hand-stripping matters <em>especially for furniture.</em>
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Chemical dip tanks are especially destructive on antiques and
              older furniture. The immersion process fails glue joints that were
              designed for different adhesives, lifts veneer that was never
              meant to withstand that exposure, and raises grain in ways that
              can&rsquo;t be sanded back without losing surface material. A
              dipped antique looks dipped — flat grain, compromised joints,
              finish that never sits right.
            </p>
            <p>
              Hand-stripping preserves the piece&rsquo;s original character. The
              wood that comes out of a proper hand-strip is the same wood that
              went in — just clean.
            </p>
            <p>
              For pre-1978 painted furniture, there&rsquo;s a second concern:
              lead paint. Old painted pieces — especially pieces that were
              enameled white or cream — frequently have lead paint in the
              layers. Sue Wheeler is an EPA Certified Lead Removal. Every piece
              with suspected lead paint is handled under proper protocols:
              containment, HEPA filtration, documented cleanup.
            </p>
          </div>
        </div>
      </section>

      {/* Color + finish options */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Color and finish options
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-8 max-w-2xl">
            Matching original is always possible — and often exactly what people
            want when they&rsquo;re restoring a family piece. But updating is
            equally valid. Go lighter, go darker, try a different stain tone, or
            skip stain altogether and let the wood speak. All of it is on the
            table.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6"
              style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
            >
              <h3
                className="font-serif text-[#2A2421] text-lg mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Stain options
              </h3>
              <ul className="space-y-2 text-[#6B5E55] font-sans text-sm leading-relaxed">
                <li>Match the original stain color</li>
                <li>Update to a new tone — lighter or darker</li>
                <li>Color-correct across mismatched pieces in a set</li>
                <li>Clear coat only (no stain) to show natural wood grain</li>
              </ul>
            </div>
            <div
              className="p-6"
              style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
            >
              <h3
                className="font-serif text-[#2A2421] text-lg mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Topcoat options
              </h3>
              <ul className="space-y-2 text-[#6B5E55] font-sans text-sm leading-relaxed">
                <li>Oil-based polyurethane — warmer tone, high durability</li>
                <li>Water-based polyurethane — clearer finish, faster cure</li>
                <li>Sheen: matte, satin, or semi-gloss</li>
                <li>Sue recommends per piece — not a one-size answer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-8" style={{ backgroundColor: "#2A2421" }}>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl text-white leading-relaxed mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontStyle: "italic",
            }}
          >
            &ldquo;Sue refinished a dining table that had been in my family
            since the 1940s. I couldn&rsquo;t believe what was under years of
            wear.&rdquo;
          </blockquote>
          <p className="text-sm font-sans" style={{ color: "#C4B8AE" }}>
            — Central West End homeowner
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Common questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your piece."
        subtext="Free estimate. No obligation. Sue answers every call personally."
      />
    </>
  );
}
