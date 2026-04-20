import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Tower Grove Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Kitchen cabinet refinishing in Tower Grove, St. Louis. Victorian painted fir cabinets, butler's pantry cabinetry, bungalow built-ins. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/tower-grove",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Tower Grove",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6011,
      longitude: -90.2553,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Tower Grove?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tower Grove kitchens vary — Victorian homes may have butler's pantry cabinetry alongside later kitchen additions; bungalows often have simple built-in fir cabinetry that has been painted. The renovation culture in Tower Grove is strong, and homeowners here are actively preserving rather than replacing. We work in Tower Grove regularly. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Tower Grove bungalow has a small kitchen with original painted fir cabinets — is refinishing right for that scale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — scale is not a disqualifier. A small bungalow kitchen with original painted fir built-ins is exactly the kind of project refinishing is designed for. The cabinets are solid construction with wood worth preserving; stripping the paint and refinishing them recovers the original character of the kitchen without the disruption and cost of replacement. Sue will assess the specific cabinets and tell you what the result will look like.",
      },
    },
    {
      "@type": "Question",
      name: "My Tower Grove Victorian has a butler's pantry with original cabinetry — do you work on those?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Butler's pantry cabinetry in Tower Grove Victorians is typically original built-in construction in old-growth fir or oak — often more elaborate than the kitchen cabinets, with glass-front uppers and plate-rail details. These are excellent refinishing candidates. Many have been painted at some point, and the wood underneath is almost always worth recovering. Sue will assess the pantry cabinetry along with the kitchen in the same estimate visit.",
      },
    },
  ],
};

export default function TowerGroveCabinetRefinishingPage() {
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
            name: "Tower Grove",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/tower-grove",
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
            Kitchen Cabinet Refinishing — Tower Grove
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen cabinet refinishing in <em>Tower Grove.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Tower Grove kitchens vary by era and style. Victorian homes may have
            butler's pantry cabinetry alongside later kitchen additions.
            Bungalows often have simple built-in fir cabinetry that has been
            painted. The renovation culture in Tower Grove is strong —
            homeowners here are actively preserving, not replacing.
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
            Tower Grove kitchens — what's there and what's worth keeping
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Tower Grove's dual character — Victorian on the east side,
              bungalow toward the park — produces two distinct kitchen types.
              Victorian homes from the 1880s and 1890s often have formal
              back-of- house arrangements: a kitchen, a butler's pantry with
              original built-in cabinetry, sometimes a back stair off the
              kitchen. The cabinetry in these spaces is typically old-growth fir
              or oak with more elaborate millwork than the bungalows.
            </p>
            <p>
              Bungalow kitchens are simpler — smaller footprints, built-in
              cabinets in old-growth fir with straightforward panel doors,
              original hardware. These kitchens were functional spaces built to
              last, and they have. The issue is almost always accumulated paint
              rather than structural failure.
            </p>
            <p>
              Tower Grove East's strong preservation culture has helped maintain
              original features throughout the neighborhood — including kitchen
              cabinetry that in other neighborhoods might have been gutted and
              replaced decades ago. Homeowners here understand what they have.
              They also understand that new cabinetry — even good new cabinetry
              — does not have the material quality of old-growth fir that was
              built into their homes a century ago.
            </p>
            <p>
              We assess each kitchen individually. Some Tower Grove cabinets are
              in excellent condition with finish that just needs refreshing.
              Others have been painted over and need a full strip. A few have
              been modified enough that partial restoration is the honest
              answer. Sue will tell you which situation you have before any work
              begins.
            </p>
          </div>
        </div>
      </section>

      {/* Service section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Cabinet work we do most in Tower Grove
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Stripping painted bungalow built-ins
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The most common Tower Grove cabinet project is stripping paint
                from original bungalow built-ins and returning them to a natural
                wood finish. Even a small bungalow kitchen with a single run of
                upper and lower built-ins produces a striking result when the
                old-growth fir is recovered. The material is dense,
                tight-grained, and holds a finish better than modern lumber.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Butler's pantry and Victorian back-of-house cabinetry
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Victorian homes in Tower Grove East often have butler's pantry
                cabinetry that is more elaborate than the kitchen cabinets —
                glass-front uppers, plate-rail details, more refined millwork.
                This cabinetry is typically original old-growth fir or oak and
                is an excellent refinishing candidate. We assess kitchen and
                pantry cabinetry together on the same estimate visit.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Finish refreshing on sound natural-wood cabinets
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Not every Tower Grove cabinet needs a full strip. Cabinets that
                have never been painted but have yellowed or worn varnish can
                often be addressed with a thorough preparation and refinish —
                without going back to bare wood. Sue will assess whether a full
                strip or a refreshing is appropriate for your specific cabinets.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Color changes on natural wood cabinetry
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Tower Grove homeowners sometimes want to adjust the stain color
                of their existing natural wood cabinets — darkening, lightening,
                or moving to a different tone. A full strip and refinish with a
                new stain achieves this while preserving the original
                construction. We discuss the range of achievable results
                honestly at the estimate — some color changes are
                straightforward, others require more nuanced approach.
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
            Lead paint in Tower Grove kitchens — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Tower Grove's Victorian and bungalow homes were built and painted
              before lead was banned from residential paint in 1978. Kitchen
              cabinets in these homes should be assumed to contain lead paint —
              kitchens were painted frequently, and lead-based paint was
              standard through the first half of the 20th century.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Cabinet
              refinishing in Tower Grove's pre-1978 homes follows full EPA RRP
              protocol: containment of the kitchen and work area, HEPA
              filtration, wet methods to suppress dust during stripping, and
              documented cleanup. The kitchen is a food-preparation space, so
              the cleanup verification is particularly rigorous.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <blockquote className="space-y-4">
            <p
              className="text-xl text-[#2A2421] leading-relaxed"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
            >
              "We have an 1890s Victorian on Magnolia with a butler's pantry
              full of original cabinetry. Sue stripped three layers of paint off
              the fir and finished it in a medium amber. It looks like nothing
              we could have purchased — because you cannot buy this wood
              anymore."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Magnolia Ave., Tower Grove East
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
                Do you refinish kitchen cabinets in Tower Grove?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Tower Grove kitchens — Victorian butler's pantries and
                bungalow built-ins alike — are excellent refinishing candidates.
                We work in Tower Grove regularly. Call (314) 367-6054 for a free
                in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Tower Grove bungalow has a small kitchen with original
                painted fir cabinets — is refinishing right for that scale?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Scale is not a disqualifier. A small kitchen with original
                painted fir built-ins is exactly what refinishing is designed
                for. The old-growth fir in those cabinets is worth preserving,
                and the result — recovered natural wood finish — will look
                correct in the bungalow context in a way new cabinetry will not.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Tower Grove Victorian has a butler's pantry with original
                cabinetry — do you work on those?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Butler's pantry cabinetry in Tower Grove Victorians is
                often more elaborate than the kitchen cabinets — glass-front
                uppers, plate-rail details, refined millwork in old-growth fir
                or oak. These are excellent refinishing candidates. Sue assesses
                kitchen and pantry together on the same estimate visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Tower Grove kitchen cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
