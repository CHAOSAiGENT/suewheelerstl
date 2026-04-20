import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Chesterfield Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Kitchen cabinet refinishing in Chesterfield, MO. 1980s–2000s solid-wood oak and maple cabinet doors. Color changes, stain updates. Honest evaluation of refinish vs. replace. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/chesterfield",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Chesterfield",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6631,
      longitude: -90.5771,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Chesterfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chesterfield kitchens from the 1980s through 2000s are the core of what we do in this area — solid-wood door and drawer fronts in oak or maple on styles that have dated but on material worth keeping. Refinishing changes the color and finish without replacing the boxes. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Chesterfield kitchen has 1990s oak cabinets — are those worth refinishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost always, if they are solid-wood doors on plywood or solid-wood boxes. 1990s oak in a Chesterfield kitchen is typically solid-wood door and drawer fronts — raised panel, cathedral arch, or recessed panel — on plywood box construction. That is an excellent refinishing candidate. The solid-wood elements strip and finish cleanly, and the construction quality holds up. Sue will confirm the specific construction at the estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Can you change the stain color on my Chesterfield oak cabinets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A full strip and refinish with a new stain color is the cleanest way to change the color of solid-wood cabinets. Moving from the golden oak or honey tones common in 1980s and 90s construction to a darker contemporary finish is straightforward. Going lighter — from a dark stain to a natural or pale tone — is more nuanced because some stain penetration into the grain cannot always be fully removed. Sue will discuss the realistic range of color options for your specific cabinets at the estimate.",
      },
    },
  ],
};

export default function ChesterfieldCabinetRefinishingPage() {
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
            name: "Chesterfield",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/chesterfield",
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
            Kitchen Cabinet Refinishing — Chesterfield
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen cabinet refinishing in <em>Chesterfield.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Chesterfield kitchens from the 1980s through 2000s are the core
            cabinet refinishing market in this area. Solid-wood door and drawer
            fronts in oak or maple — often in styles that have dated but on
            material worth keeping. Refinishing changes the color and finish
            without replacing the boxes. The alternative is new cabinetry that
            often means cheaper materials in a more expensive package.
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
            Chesterfield kitchen cabinets — why refinishing makes sense here
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Chesterfield is post-1970 construction. There are no Victorian
              built-ins here, no pre-war old-growth fir kitchens to uncover. The
              kitchen cabinet context is different — and we are direct about
              that. But the case for refinishing is real and honest, not a
              stretch.
            </p>
            <p>
              Chesterfield kitchens from the 1980s through the early 2000s were
              frequently specified with solid-wood door and drawer fronts on
              plywood box construction. Oak was the dominant species in this
              era; maple became more common in the late 1990s. The door profiles
              — raised panel, cathedral arch, recessed panel with rope detail —
              were in style at the time and have dated. The material underneath
              those dated door profiles is solid wood on quality construction.
            </p>
            <p>
              Replacing that cabinetry means buying new boxes and new door
              fronts — and in the current market, new cabinet boxes are often
              particleboard or MDF, not plywood. The door fronts may be solid
              wood, or may be MDF with a veneer. The price is higher than
              refinishing, and the material quality of what you get is often
              lower than what you already have.
            </p>
            <p>
              Refinishing the solid-wood doors and drawer fronts you already
              have — stripping, sanding, and applying a new stain and finish —
              changes the color and sheen without touching the boxes. Done
              correctly, it looks like a kitchen update because it is one. Sue
              evaluates each kitchen and tells you honestly what you have and
              whether refinishing is the right call.
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
            Cabinet work we do most in Chesterfield
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                1980s and 90s oak cabinet refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The most common Chesterfield project is refinishing 1980s and
                90s oak kitchens — raised panel or cathedral arch doors in
                golden oak or honey finish that read as dated. A full strip and
                refinish in a darker or more neutral contemporary tone changes
                the kitchen's look entirely while preserving the solid- wood
                construction. Oak strips and accepts stain predictably.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Maple and mixed-species kitchen refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Maple became more common in Chesterfield kitchens from the late
                1990s into the 2000s — often in a painted finish or a light
                natural stain. Maple refinishes well but has different stain
                absorption characteristics than oak. It benefits from a
                pre-conditioner before staining to ensure even color uptake. Sue
                will assess your specific maple cabinets and discuss the finish
                options at the estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Color changes — going darker
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The most common color request in Chesterfield kitchens is going
                darker — from golden oak or honey tones to espresso, walnut, or
                gray-toned contemporary finishes. This is straightforward with a
                full strip and refinish. The new stain is applied to bare wood,
                so the color is controlled and consistent throughout.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Honest evaluation — refinish vs. replace
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Not every Chesterfield kitchen cabinet is a refinishing
                candidate. MDF door fronts, particleboard box construction that
                has swelled from moisture, hollow-core drawer fronts — these are
                not worth refinishing. Sue will tell you what you have at the
                estimate. If your cabinets are not refinishing candidates, she
                will say so clearly.
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
            Lead paint in Chesterfield kitchens — generally not a factor
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Chesterfield's housing stock is predominantly post-1978, and lead
              paint is generally not present in post-1978 construction. For the
              vast majority of Chesterfield kitchen refinishing projects, EPA
              RRP lead certification protocols do not apply.
            </p>
            <p>
              For any Chesterfield home that was built before 1978 — the oldest
              sections of the area — Sue Wheeler's EPA Certified Lead Removal
              certification and full RRP protocol apply as they would anywhere.
              If you are uncertain of your build date, she can address that at
              the estimate.
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
              "We have a large kitchen in Chesterfield with 1994 oak cabinets in
              a cathedral arch profile. We got quotes on replacement — the
              numbers were significant for material we weren't sure was better.
              Sue refinished the existing cabinets in a dark walnut. The kitchen
              looks completely current and the construction is better than what
              we would have replaced it with."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Long Rd., Chesterfield
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
                Do you refinish kitchen cabinets in Chesterfield?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Chesterfield kitchens from the 1980s through 2000s —
                solid-wood oak and maple door fronts on quality box construction
                — are the core of what we do in this area. Call (314) 367-6054
                for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Chesterfield kitchen has 1990s oak cabinets — are those worth
                refinishing?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Almost always, if they are solid-wood doors on plywood boxes —
                which 1990s Chesterfield kitchens typically are. Solid-wood oak
                door fronts strip and finish cleanly. The construction quality
                holds up. Sue will confirm the specific construction at the
                estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Can you change the stain color on my Chesterfield oak cabinets?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Full strip and refinish with a new stain is the standard
                approach. Going darker — from golden oak to walnut or espresso —
                is straightforward. Going lighter has limits that depend on how
                deeply the existing stain has penetrated the grain. Sue will
                explain the realistic color range for your specific cabinets at
                the estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Chesterfield kitchen cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
