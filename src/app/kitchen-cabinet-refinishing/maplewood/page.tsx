import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Maplewood Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Kitchen cabinet refinishing in Maplewood, St. Louis. Hand-strip restoration for original painted fir cottage cabinetry. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/maplewood",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Maplewood",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6075,
      longitude: -90.3271,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Maplewood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Maplewood is a neighborhood we work in regularly. The original painted fir cabinetry in the neighborhood's bungalows and cottages is often solid old-growth wood that responds well to refinishing. We assess each kitchen in person. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Maplewood cottage kitchen has original painted cabinets — is it possible to restore the natural wood look?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes. If the cabinet boxes and doors are original old-growth fir and in sound structural condition, stripping to bare wood and applying a natural finish is possible. The result depends on the condition of the wood under the paint and how many layers have accumulated. We assess each kitchen in person and tell you honestly what's there before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Will refinished cabinets hold up in an older kitchen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Old-growth fir is a durable, dense wood that accepts finish well and holds up under normal kitchen use. The key is proper prep — thorough stripping, correct sealing, and a topcoat suited to kitchen conditions. Refinished original cabinets typically outperform painted replacements because the underlying wood is better material than what's available new.",
      },
    },
  ],
};

export default function MaplewoodCabinetRefinishingPage() {
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
            name: "Maplewood",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/maplewood",
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
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-sans uppercase tracking-widest text-[#A65D37] mb-4">
            Kitchen Cabinet Refinishing — Maplewood
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen cabinet refinishing in <em>Maplewood.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Maplewood's cottage kitchens are compact and original. Many owners
            renovating these homes want to preserve the scale and character of
            the space — not replace it with modern box cabinets. Refinishing the
            original cabinetry is often the right answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Cabinet Estimate
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

      {/* Neighborhood context */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What makes Maplewood cabinet refinishing different
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Maplewood kitchens were not designed to impress — they were
              designed to work. The bungalows and cottages of the neighborhood
              have compact galley-style kitchens with simple painted cabinetry:
              flat-panel or simple-profile doors, fir construction, built to
              last without being elaborate. The wood inside these cabinets is
              the same old-growth fir as everything else in the house.
            </p>
            <p>
              Many current Maplewood owners renovating these kitchens face a
              genuine choice: replace the original cabinetry with modern stock
              cabinets, or restore what's there. Replacement is often the
              default assumption, but it sacrifices something real — the
              original scale, the original joinery, and the original material
              quality. Modern stock cabinets in a 1915 Maplewood cottage kitchen
              almost never look right. They're sized and proportioned for a
              different era of kitchen design.
            </p>
            <p>
              Refinishing the original cabinetry keeps the kitchen's cottage
              character intact. The doors and drawer fronts come out, go to our
              shop for stripping and finishing, and return to their original
              openings. The boxes stay in place. The proportions of the kitchen
              don't change. What changes is the surface — from a worn and
              often-repainted finish to a clean, properly prepared, durable new
              one.
            </p>
            <p>
              We evaluate each Maplewood kitchen on its individual merits. Not
              every original cabinet is a refinishing candidate — sometimes
              decades of moisture damage, structural failure, or previous
              repairs make replacement the wiser choice. We tell you what we
              find, not what you want to hear.
            </p>
          </div>
        </div>
      </section>

      {/* Service-specific section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Cabinet work we do in Maplewood kitchens
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Doors and drawer fronts — shop work
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                All cabinet doors and drawer fronts are removed and taken to our
                shop for stripping, prep, and finishing. Working in-shop means
                the surface preparation is thorough, the finish is applied under
                controlled conditions, and there are no chemical fumes in your
                kitchen. Doors are returned and rehung when the finish has fully
                cured.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Stripping painted-over originals
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Most Maplewood cottage kitchens have original cabinetry that has
                been painted multiple times. The accumulated layers soften the
                profile detail and create an uneven surface that fresh paint
                only partially hides. Hand stripping removes every layer cleanly
                and reveals the actual wood — which is often in better condition
                than its appearance suggests.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Natural wood or painted finish
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Refinishing doesn't automatically mean returning to bare wood.
                Some Maplewood owners want a natural or stained fir finish that
                shows the grain; others prefer to continue with a painted finish
                but want it done correctly — stripped, primed properly, and
                painted in the right topcoat for kitchen conditions. We do both.
                The decision is yours after you've seen what's underneath.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Honest assessment before any commitment
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Not every Maplewood kitchen is a good candidate for refinishing.
                We come out, assess the condition of the doors, drawer fronts,
                and boxes, and tell you whether refinishing makes sense or
                whether the money is better spent elsewhere. No upsell, no
                pressure — just an honest evaluation from someone who has been
                doing this since 1989.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/kitchen-cabinet-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              All Kitchen Cabinet Refinishing Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
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
            Lead paint in Maplewood kitchens — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Maplewood homes predate 1978 by several decades. Kitchen cabinets
              in these homes have accumulated paint across many owners, and lead
              is the accurate baseline assumption for every layer. Kitchens are
              a higher-risk environment because lead dust from stripping can
              settle on food preparation surfaces and remain in the space long
              after work is complete if not properly managed.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Cabinet
              refinishing in Maplewood homes involves full containment of the
              kitchen work area during any in-place work, HEPA filtration, wet
              methods, and documented cleanup. All door and drawer front
              stripping is done in her shop — keeping lead paint work entirely
              out of your home for the most intensive phase of the project.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-2 border-[#A65D37] pl-6">
            <p
              className="text-xl text-[#2A2421] italic leading-relaxed mb-4"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
            >
              "Everyone told us to gut the kitchen and start over. Sue looked at
              the cabinets and said they were solid — just needed the paint
              stripped and a proper finish. The result is exactly right for the
              house. It still looks like a 1920s cottage kitchen, but the
              cabinets are beautiful now. We saved a lot of money and got a
              better result than new boxes would have given us."
            </p>
            <cite className="text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Greenwood Ave., Maplewood
            </cite>
          </blockquote>
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
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Do you refinish kitchen cabinets in Maplewood?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. The original painted fir cabinetry in Maplewood's bungalows
                and cottages is often solid old-growth wood worth restoring. We
                assess each kitchen in person. Call (314) 367-6054 for a free
                estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Maplewood cottage kitchen has original painted cabinets — is
                it possible to restore the natural wood look?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Often, yes. If the wood is original old-growth fir in sound
                condition, stripping and natural finishing is possible. We
                assess in person and tell you honestly what's under the paint
                before any work begins.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Will refinished cabinets hold up in an older kitchen?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Old-growth fir is dense and durable. With correct prep and
                the right topcoat for kitchen conditions, refinished original
                cabinets typically outperform painted replacement stock —
                because the underlying material is simply better wood.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Maplewood kitchen cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
