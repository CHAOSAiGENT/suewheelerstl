import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Ladue Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Kitchen cabinet refinishing in Ladue, MO. Mid-century and custom solid-wood cabinetry in Colonial and estate homes. Color changes, stain refinishing. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/ladue",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Ladue",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6362,
      longitude: -90.3806,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Ladue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ladue kitchen cabinets range from mid-century solid wood — excellent refinishing candidates — to 1980s and 90s painted or stained solid wood, also good candidates. Sue evaluates each kitchen individually and gives a straight answer about whether refinishing is appropriate. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Ladue kitchen has high-end custom cabinets from the 1990s — are those worth refinishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Likely yes, if they are solid-wood construction. Custom cabinets from the 1990s in Ladue were typically specified with solid-wood doors and drawer fronts — oak, cherry, or maple — on plywood box construction. The solid-wood elements are excellent refinishing candidates. The question is whether the construction quality and the current condition justify the investment versus replacement. Sue will assess your specific cabinets and give you an honest answer.",
      },
    },
    {
      "@type": "Question",
      name: "Can you do a color change on my Ladue kitchen cabinets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A full strip and refinish with a new stain color achieves a color change while preserving the original construction and solid-wood doors. Going darker is generally straightforward. Going lighter — from a dark stain to a natural or light tone — is more nuanced because some stain penetration into the wood grain cannot always be fully removed. Sue will discuss the realistic range of color-change options for your specific cabinets at the estimate.",
      },
    },
  ],
};

export default function LadueCabinetRefinishingPage() {
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
            name: "Ladue",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/ladue",
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
            Kitchen Cabinet Refinishing — Ladue
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen cabinet refinishing in <em>Ladue.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Ladue kitchen cabinets range from mid-century solid wood to custom
            1980s and 90s installations — solid-wood doors and drawer fronts on
            quality construction worth preserving. The alternative is new
            cabinetry, which often means cheaper materials in a more expensive
            package. Sue evaluates each kitchen and is honest about which
            cabinets are refinishing candidates and which are not.
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
            Ladue kitchen cabinets — a frank assessment
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Ladue's housing stock spans the late 1930s through the present,
              and the kitchen cabinets in these homes vary considerably. Not
              every Ladue kitchen is a refinishing candidate — and we will say
              that plainly. Recent installations in MDF or particleboard
              construction are not. Hollow-core door fronts are not. Cabinets
              that have been significantly water-damaged may not be.
            </p>
            <p>
              What is often a refinishing candidate in Ladue: mid-century solid
              wood from the 1950s and 1960s — oak, walnut, or cherry in Colonial
              and traditional styles. Custom installations from the 1980s and
              1990s with solid-wood doors on plywood box construction — oak and
              maple were common in this era and are both excellent refinishing
              species. High-end kitchens from any era with custom solid-wood
              door and drawer front profiles.
            </p>
            <p>
              The scope of work in Ladue kitchens is often larger than in the
              smaller urban homes of the inner-ring neighborhoods. Larger
              kitchen footprints, more cabinet runs, sometimes pantry and
              mudroom cabinetry as part of the same project. The scale of the
              work is larger, but so is the value of doing it correctly versus
              replacing.
            </p>
            <p>
              Sue evaluates each kitchen individually. She will tell you what
              you have, whether it is worth refinishing, and what the result
              will look like — before any work begins and without any pressure
              toward a particular answer.
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
            Cabinet work we do most in Ladue
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Mid-century solid-wood kitchen refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Ladue homes from the 1940s through 1960s often have original
                kitchen cabinetry in solid oak, walnut, or cherry — well-built,
                in styles that have dated but on material that is worth keeping.
                A full strip and refinish with a contemporary stain modernizes
                the kitchen visually while preserving the solid-wood
                construction that new cabinetry at the same price point
                typically cannot match.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                1980s and 90s custom cabinet refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Custom cabinets from Ladue kitchens of the 1980s and 90s are
                often solid-wood doors on plywood boxes in oak or maple — a
                durable combination that holds up well to stripping and
                refinishing. The door profiles from this era — raised panel,
                cathedral arch, recessed panel — translate well to contemporary
                stain and finish options. These kitchens are worth keeping.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Color changes
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Ladue homeowners updating their kitchens often want to change
                the stain color of existing solid-wood cabinets — moving from a
                golden oak or honey pine tone to a darker, more contemporary
                finish. A full strip and refinish with the new color achieves
                this. Going darker is straightforward. Going lighter has limits
                that Sue will explain clearly at the estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Honest assessment — refinish vs. replace
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Not every Ladue kitchen warrants refinishing. Cabinets with
                compromised substrate, hollow-core door fronts, or construction
                that won't hold up to the stripping process are better replaced.
                Sue will tell you which situation you have. If your cabinets are
                not refinishing candidates, she will say so and save you the
                conversation.
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
            Lead paint in Ladue kitchens — what to know
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Ladue homes built before 1978 — including the Colonial and estate
              homes from the 1940s and 1950s — may contain lead paint on kitchen
              surfaces. Kitchen cabinets in these homes, particularly those that
              were painted during mid-century updates, should be treated as
              potentially lead-positive until tested.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. For
              pre-1978 Ladue homes, cabinet refinishing follows full EPA RRP
              protocol: containment of the kitchen area, HEPA filtration, wet
              methods during stripping, and documented cleanup verification. The
              kitchen is a food-preparation space, and the cleanup process
              reflects that.
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
              "We had a kitchen full of 1988 oak cabinets in a honey finish that
              felt thirty years out of date. Sue stripped and refinished them in
              a dark walnut and they look current and exactly right for the
              house. New cabinets would have cost three times as much and been
              made of worse material."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Ladue Rd., Ladue
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
                Do you refinish kitchen cabinets in Ladue?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Ladue kitchen cabinets — mid-century solid wood, 1980s and
                90s custom installations, high-end traditional kitchens — are
                often excellent refinishing candidates. Sue evaluates each
                kitchen individually and gives a straight answer. Call (314)
                367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Ladue kitchen has high-end custom cabinets from the 1990s —
                are those worth refinishing?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Likely yes, if they are solid-wood construction — and custom
                Ladue kitchens from the 1990s typically were. Solid-wood doors
                and drawer fronts in oak, cherry, or maple on plywood boxes are
                excellent refinishing candidates. Sue will assess the specific
                construction and give you a clear answer.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Can you do a color change on my Ladue kitchen cabinets?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. A full strip and refinish with a new stain achieves a color
                change while preserving the solid-wood construction. Going
                darker is generally straightforward. Going lighter has limits —
                some stain penetration into the grain cannot always be fully
                removed — and Sue will explain the realistic range of options
                for your specific cabinets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Ladue kitchen cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
