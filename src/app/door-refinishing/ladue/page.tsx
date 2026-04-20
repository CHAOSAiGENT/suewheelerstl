import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Ladue Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Ladue, MO. Custom mahogany, oak, and fir entry doors and interior suites in Colonial and estate homes. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/ladue",
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
      name: "Do you refinish doors in Ladue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ladue homes often have substantial custom entry doors — mahogany, oak, or solid-core fir — in Colonial or traditional styles. Interior door suites in the better homes are solid wood throughout. We work in Ladue regularly. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Ladue home has a mahogany front door — is that different to refinish than fir or oak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mahogany refinishes differently than fir or oak. It is an open-grain species that benefits from grain filler before finish application. The color is deeper and more variable than fir — Honduras mahogany and African mahogany, the two species most commonly used in high-end entry doors of this era, have different tonal characteristics. Both are excellent refinishing candidates. Sue will assess your specific door and discuss the finish options that will work with the grain and color of your mahogany.",
      },
    },
    {
      "@type": "Question",
      name: "How often should an exterior door in Ladue be refinished?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends heavily on orientation. West-facing entries in Ladue receive significant UV and afternoon heat stress — a west-facing mahogany or fir door may need attention every three to five years depending on the finish system used. North-facing entries in shaded locations can go considerably longer. South and east entries fall in between. Sue will assess your door's condition and exposure and give you an honest estimate of what the finish schedule should look like.",
      },
    },
  ],
};

export default function LadueDoorRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Door Refinishing",
            url: "https://suewheelerstl.com/door-refinishing",
          },
          {
            name: "Ladue",
            url: "https://suewheelerstl.com/door-refinishing/ladue",
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
            Door Refinishing — Ladue
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Ladue.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Ladue's Colonial, Ranch, and estate homes often have substantial
            custom entry doors — mahogany, oak, solid-core fir — that take
            significant weather stress in St. Louis's climate. Exterior doors
            here, particularly west-facing entries, need more frequent attention
            than those in sheltered urban streetscapes. The material quality is
            high. It is worth maintaining correctly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Door Estimate
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
            Ladue's housing stock — and what door refinishing looks like here
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Ladue is predominantly post-war — Colonial Revival, Ranch, and
              custom estate homes built from the 1940s through the 1970s on
              large lots, with some pre-war estates in the older sections. The
              context here is different from the inner-ring historic
              neighborhoods. Old-growth fir is not universal — post-war
              construction used the lumber available at the time, which varied
              considerably by builder and specification.
            </p>
            <p>
              What Ladue homes do often have is substantial custom entry doors.
              The higher-end Colonial and estate homes were built with custom
              millwork rather than production doors — solid mahogany, solid oak,
              or high-quality solid-core fir in traditional panel
              configurations. These are doors that cost significantly more than
              standard production doors when new, and they remain worth
              refinishing rather than replacing.
            </p>
            <p>
              The climate challenge in Ladue is real. St. Louis's temperature
              range — from subzero winters to 100-degree summers — stresses
              exterior finishes hard. West-facing entries receive afternoon sun
              from April through October. UV and heat cycling causes finish to
              crack, blister, and peel faster on west-facing doors than on any
              other orientation. A door that looks good in spring can show
              significant finish failure by fall.
            </p>
            <p>
              Interior door suites in Ladue's better homes are solid wood
              throughout — Colonial panel configurations in consistent species
              and finish. These are good refinishing candidates when the finish
              has yellowed or when a color change is needed. Sue evaluates each
              home individually and is honest about which doors are worth the
              investment.
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
            Door work we do most in Ladue
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Custom mahogany entry doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Mahogany entry doors are common in Ladue's Colonial and estate
                homes. Mahogany is an open-grain species that benefits from a
                grain filler before finish application — skipping this step
                produces a finish that sinks and looks uneven over time.
                Refinishing mahogany correctly involves stripping to bare wood,
                addressing any checking or grain telegraphing, filling, and
                applying a finish system appropriate for the UV exposure of the
                specific door.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Weather-stressed exterior doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                West-facing Ladue entries see the most finish failure in the
                shortest time. A door showing cracking, blistering, or peeling
                finish is not damaged wood — it is damaged finish. The wood
                beneath is almost always intact. A full strip and refinish with
                a finish system appropriate for the exposure restores the door
                and sets up a maintenance schedule that prevents the underlying
                wood from being compromised.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Solid-wood interior door suites
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Ladue homes with solid-wood interior door suites — Colonial
                panel configurations in oak or fir throughout — are good
                candidates for refinishing when the finish has yellowed or a
                color change is wanted. Sue assesses interior doors with the
                full context in mind: casing, frame, and adjacent woodwork all
                factor into what a whole-house interior refinishing will
                produce.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Maintenance coats before failure
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                For doors that have sound finish but are beginning to show UV
                fading or minor surface wear, a maintenance coat — light
                scuffing and reapplication of topcoat without a full strip —
                extends the finish life without the disruption of a complete
                refinish. This is the most cost-effective door care if caught at
                the right point in the finish cycle.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/door-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              All Door Refinishing Services →
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
            Lead paint in Ladue homes — what to know
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Ladue's housing stock spans the late 1930s through the 1970s and
              into the 1980s. Homes built before 1978 — which includes the
              majority of Ladue's established neighborhoods — may contain lead
              paint in exterior surfaces. Homes built in the 1940s and 1950s are
              particularly likely to have lead in the lower paint layers.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. For any
              pre-1978 home, she follows full EPA RRP protocol: containment,
              HEPA filtration, wet methods, and documented cleanup. If you are
              uncertain whether your home was built before 1978, she can discuss
              testing options at the estimate.
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
              "We have a west-facing mahogany front door on Warson that was
              peeling badly by July. Sue stripped it, filled the grain properly,
              and applied a marine-grade finish system. Two years later it still
              looks exactly right. She told us what to watch for and when to
              call her back."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Warson Rd., Ladue
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
                Do you refinish doors in Ladue?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Ladue's custom mahogany, oak, and solid-core fir entry
                doors are excellent refinishing candidates. We work in Ladue
                regularly, including exterior doors with significant weather
                damage and interior door suites throughout the home. Call (314)
                367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Ladue home has a mahogany front door — is that different to
                refinish than fir or oak?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Mahogany is an open-grain species that requires grain
                filling before finish application. The color is deeper and more
                variable than fir — the specific mahogany species affects the
                tonal result. Both Honduras and African mahogany are excellent
                refinishing candidates. Sue will assess your door and discuss
                the finish options that work with your specific wood.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                How often should an exterior door in Ladue be refinished?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                West-facing entries can need attention every three to five years
                depending on the finish system and specific exposure.
                North-facing doors in shade go considerably longer. The key is
                catching finish wear before it reaches bare wood — a maintenance
                coat at the right time is far simpler than a full refinish after
                the wood has been exposed. Sue will tell you where your door is
                in that cycle at the estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Ladue doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
