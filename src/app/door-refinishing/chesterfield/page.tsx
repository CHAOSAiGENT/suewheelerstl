import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Chesterfield Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Chesterfield, MO. Solid mahogany, oak, and fir exterior doors showing weather and UV damage. Honest evaluation of solid vs. hollow-core. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/chesterfield",
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
      name: "Do you refinish doors in Chesterfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chesterfield homes typically have solid-core or solid-wood exterior doors in oak, mahogany, or fir that take significant UV and weather stress. We evaluate each door and tell you honestly whether it is a refinishing candidate. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Chesterfield home has a solid mahogany front door that is peeling — what does refinishing involve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peeling finish on a mahogany door is almost always a finish failure, not a wood failure. The wood beneath the peeling surface is typically intact. Refinishing involves removing the door, stripping all existing finish to bare mahogany, addressing any surface grain-raise or checking, applying grain filler (mahogany is an open-grain species that needs it), and applying a finish system appropriate for the door's UV exposure. The result is a door that looks correct and has a protective finish applied properly this time.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my Chesterfield interior doors are solid wood or hollow-core?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The simplest test is weight and sound. A solid-wood door is noticeably heavier than a hollow-core door, and knocking on it produces a solid thud rather than a hollow resonance. Most Chesterfield homes from the 1970s through 1990s have hollow-core interior doors — lightweight, with a thin wood veneer over a cardboard or foam core. These are not refinishing candidates. If you are unsure, Sue will assess your specific doors at the estimate visit.",
      },
    },
  ],
};

export default function ChesterfieldDoorRefinishingPage() {
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
            name: "Chesterfield",
            url: "https://suewheelerstl.com/door-refinishing/chesterfield",
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
            Door Refinishing — Chesterfield
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Chesterfield.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Chesterfield homes are predominantly post-1970 construction, and the
            exterior door story here is primarily about weather damage. Solid
            mahogany, oak, and fir exterior doors take significant UV and heat
            stress in west-facing suburban locations. The wood in these doors
            holds up — the finish doesn't. When finish fails, the wood is almost
            always still intact and worth refinishing.
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
            Chesterfield doors — what they are and what goes wrong
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Chesterfield is predominantly post-1970 suburban construction.
              There are no Victorian cottages here, no pre-war old-growth fir
              interiors, no Tudor Revival entries in quartersawn oak. The
              context is different from the historic inner-ring neighborhoods —
              and we will be direct about that.
            </p>
            <p>
              What Chesterfield does have is a large stock of solid-wood and
              solid-core exterior doors in mahogany, oak, and fir — typically in
              traditional Colonial or craftsman-influenced panel configurations.
              Many of these doors were specified in the original construction at
              a quality level well above the entry-level production door. They
              are solid material and worth refinishing when the finish fails.
            </p>
            <p>
              The primary issue in Chesterfield is finish failure from UV and
              weather stress. St. Louis's climate is severe — temperature
              cycling from below zero to over 100 degrees, with significant
              summer UV. West-facing entries in Chesterfield's suburban settings
              often have minimal overhang protection. Finish cracks, blisters,
              and peels. If this is caught before the bare wood is exposed,
              refinishing is straightforward. If bare wood has been exposed to
              moisture cycles, the project is more involved but usually still
              worth doing.
            </p>
            <p>
              Interior doors in Chesterfield are a different story. Most homes
              from the 1970s through 1990s have hollow-core interior doors — not
              refinishing candidates. Solid-wood interior doors appear in
              higher-end homes of this era. Sue evaluates each door and is
              direct about which ones are worth refinishing.
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
            Door work we do most in Chesterfield
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Exterior door refinishing — weather and UV damage
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                A Chesterfield exterior door showing peeling, cracking, or
                blistering finish is almost always a finish failure rather than
                wood failure. We remove the door, strip all existing finish to
                bare wood, address any surface damage, and apply a finish system
                appropriate for the door's specific UV exposure and orientation.
                The result is protective finish applied correctly, with a finish
                schedule that tells you when to expect the next maintenance
                window.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Mahogany entry door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Mahogany entry doors are common in Chesterfield's better homes.
                Mahogany is an open-grain species that requires grain filling
                before finish application — a step that is often skipped in
                original construction or previous refinishing, which is why the
                finish sinks and looks uneven. Refinishing mahogany correctly
                produces a deep, clear result that shows the natural color of
                the wood and holds up significantly longer.
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
                For Chesterfield exterior doors that are showing early UV fading
                or surface wear but have not yet failed completely, a
                maintenance coat — light preparation and topcoat application
                without a full strip — extends the finish life without the full
                refinishing process. This is the most cost-effective approach if
                the door is caught at the right point in the finish cycle.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Honest evaluation — solid wood vs. hollow-core
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Interior doors in Chesterfield are often hollow-core and not
                refinishing candidates. We will tell you plainly at the estimate
                which doors are solid wood and which are not. There is no value
                in refinishing a hollow-core door and we won't suggest it. For
                the solid-wood interior doors that do exist in higher-end
                Chesterfield homes, refinishing produces a correct result.
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
            Lead paint in Chesterfield — generally not a factor, but worth
            knowing
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Most Chesterfield homes were built after 1978, when lead was
              banned from residential paint. For homes built after 1978, lead
              paint is generally not present. The oldest sections of
              Chesterfield may include homes from the late 1960s and early 1970s
              — if your home was built before 1978, the same precautions apply
              as in any pre-1978 home.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. For any
              pre-1978 Chesterfield home, she follows full EPA RRP protocol. If
              you are uncertain of your home's build date, she can discuss that
              at the estimate.
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
              "Our mahogany front door on Wildhorse Creek was completely peeled
              by the end of summer — we'd had it refinished at a paint shop
              three years earlier and the finish was gone in eighteen months.
              Sue did it correctly this time. That was four years ago and it
              still looks right."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Wildhorse Creek Rd., Chesterfield
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
                Do you refinish doors in Chesterfield?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Solid-wood and solid-core exterior doors in Chesterfield —
                mahogany, oak, fir — are good refinishing candidates when the
                finish has failed or is showing significant wear. We evaluate
                each door and tell you honestly what we find. Call (314)
                367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Chesterfield home has a solid mahogany front door that is
                peeling — what does refinishing involve?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Peeling finish is almost always a finish failure, not a wood
                failure. Refinishing involves stripping all existing finish to
                bare mahogany, addressing any surface issues, applying grain
                filler (mahogany needs it), and applying a finish system built
                for the door's UV exposure. The result is a door that looks
                correct and has finish applied properly this time.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                How do I know if my Chesterfield interior doors are solid wood
                or hollow-core?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Weight and sound. A solid-wood door is noticeably heavier and
                produces a solid thud when knocked. A hollow-core door is
                lightweight and sounds hollow. Most Chesterfield homes from the
                1970s and 80s have hollow-core interior doors — not refinishing
                candidates. If you are unsure, Sue will assess at the estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Chesterfield doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
