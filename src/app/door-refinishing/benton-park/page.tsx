import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Benton Park Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Benton Park, St. Louis. Hand-stripping for 1870s–1910s brick row house doors in old-growth fir and oak. EPA Certified. Call (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/benton-park",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Benton Park",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5981,
      longitude: -90.2248,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish doors in Benton Park?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Benton Park is an active neighborhood for us. The brick row houses here have original doors in old-growth fir and oak that respond beautifully to hand-stripping and refinishing. We do front doors, interior doors, and pocket doors throughout Benton Park. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What types of doors are common in Benton Park homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Benton Park's brick row houses, built primarily between 1870 and 1910, typically feature heavy paneled front doors in old-growth Douglas fir or southern yellow pine. Interior doors are often simpler two- or four-panel designs in fir or oak. Pocket doors appear frequently in the larger row houses and single-family homes from this era. The wood is uniformly old-growth — dense, tight-grained, and worth every effort to restore.",
      },
    },
    {
      "@type": "Question",
      name: "How long does door refinishing take for a Benton Park home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A single door — front door strip and refinish — typically runs 2 to 4 days from pickup to reinstallation using our board-up method. The door is removed, taken to our shop, stripped and finished in a controlled environment, then returned and rehung. Multiple doors or a full interior set takes longer, and we'll give you a specific timeline with your estimate.",
      },
    },
  ],
};

export default function BentonParkDoorRefinishingPage() {
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
            name: "Benton Park",
            url: "https://suewheelerstl.com/door-refinishing/benton-park",
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
            Door Refinishing — Benton Park
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Benton Park.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Benton Park's brick row houses were built in the 1870s through 1910s
            — a period when old-growth fir and pine were the default building
            materials. The doors from that era are worth restoring. We
            hand-strip and refinish them correctly.
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
            The row house doors of Benton Park
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Benton Park is one of St. Louis's oldest intact residential
              neighborhoods — a grid of brick row houses and two-family flats
              developed from the 1870s through the early 1900s, when the city
              was still building at full speed and old-growth timber was the
              only lumber available. The doors in these homes reflect that era:
              heavy, paneled, milled from Douglas fir or southern yellow pine at
              a time when those trees had been growing for centuries.
            </p>
            <p>
              That old-growth wood is dramatically different from what's cut
              today. The annual rings are tight — sometimes eight to twelve
              rings per inch versus one or two in modern lumber. The wood is
              harder, more stable, and far less prone to warping or checking. A
              Benton Park front door from 1885 that's been maintained reasonably
              well is structurally sounder than anything installed new in the
              last fifty years.
            </p>
            <p>
              The finish on those doors, however, rarely reflects their quality.
              A century-plus of paint layers, most of them lead-based, has been
              applied and re-applied over the years. When paint fails and gets
              painted over rather than stripped, the buildup eventually becomes
              thick enough to obscure the panel profiles and destroy the door's
              architectural character. That's the condition we most commonly
              encounter in Benton Park, and it's entirely reversible.
            </p>
            <p>
              We hand-strip every door. No dipping — chemical dip tanks swell
              the wood, damage glue joints in raised-panel construction, and
              remove the patina that gives old-growth timber its depth. Hand
              stripping takes longer, but the surface we achieve is the one
              worth finishing. We take the door to our shop using the board-up
              method, do the work in a controlled environment, and return it
              ready to hang.
            </p>
          </div>
        </div>
      </section>

      {/* Door types */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What we work on most in Benton Park
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Front door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The front doors on Benton Park row houses are often the
                architectural centerpiece of the facade — heavy paneled slabs in
                fir or pine, sometimes with transom lights and sidelites. When
                these doors are stripped back to wood and properly refinished,
                the effect on the entire streetscape is immediate. We finish
                exterior doors with UV-resistant polyurethane rated for the
                exposure the door will face, whether it's fully sunlit or
                sheltered under an original porch roof.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Row house interiors typically have matching two- and four-panel
                doors in fir or oak throughout. After decades of painting and
                repainting, the profiles have often softened and the hardware is
                buried. We strip these doors in our shop, restore the profiles,
                and finish them to match whatever stain level you're working
                with — natural, medium, or dark. Matching across multiple doors
                in the same house is standard for us.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Pocket doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The larger Benton Park row houses and single-family homes from
                the 1880s and 1890s frequently have pocket doors separating the
                parlor from the dining room. These are pulled out of the wall
                cavity, hand-stripped in our shop, and reinstalled. The original
                hardware — typically cast iron or brass pulls — stays intact.
                These doors are among the most rewarding to restore because the
                transformation from painted-over relic to finished wood is so
                complete.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/door-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              All Door Refinishing Services →
            </Link>
            <Link
              href="/door-refinishing/pocket-door-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Pocket Door Refinishing →
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
            EPA Certified Lead Removal — required for Benton Park homes
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Benton Park homes were overwhelmingly built before 1940 — many
              before 1900. Under EPA RRP regulations, refinishing work that
              disturbs painted surfaces in pre-1978 homes must be performed by
              an EPA Certified Lead Removal. Sue Wheeler holds that
              certification and has held it since the RRP regulations came into
              effect.
            </p>
            <p>
              Every door project we do in Benton Park is handled with proper
              containment, HEPA vacuuming, wet methods to control dust, and
              documented cleanup. You receive a completion record for your
              property file. This is how the work is supposed to be done — and
              it's the only way we do it.
            </p>
          </div>
        </div>
      </section>

      {/* Strip & Refinish vs PUP */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Strip &amp; Refinish or <em>Perk Up &amp; Protect?</em>
          </h2>
          <p className="text-[#6B5E55] font-sans text-base leading-relaxed mb-6">
            Not every door needs a full strip. Some Benton Park doors that have
            been well maintained — or were previously refinished within the last
            decade — may only need a light sand and fresh topcoat. We call this
            our Perk Up &amp; Protect service. We'll assess the door in person
            and tell you honestly which applies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6"
              style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
            >
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Strip &amp; Refinish (S&amp;R)
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Complete restoration. Strip to bare wood, repair any surface
                damage or minor checks, stain if needed, apply finish. Right for
                doors with failing, peeling, or heavily layered paint — which
                describes most Benton Park doors we see.
              </p>
            </div>
            <div
              className="p-6"
              style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
            >
              <h3
                className="font-serif font-semibold text-[#2A2421] text-lg mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Perk Up &amp; Protect (PUP)
              </h3>
              <p className="text-[#6B5E55] font-sans text-sm leading-relaxed">
                Maintenance coat. Light sanding and fresh topcoat over a solid
                existing finish. For doors with sound finish that just needs
                refreshing. Faster and less expensive — but only appropriate
                when the existing base is sound.
              </p>
            </div>
          </div>
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
                Do you refinish doors in Benton Park?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Benton Park is an active neighborhood for us. The brick row
                houses here have original doors in old-growth fir and oak that
                respond beautifully to hand-stripping and refinishing. We do
                front doors, interior doors, and pocket doors. Call (314)
                367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                What types of doors are common in Benton Park homes?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Heavy paneled front doors in old-growth Douglas fir or southern
                yellow pine are most common. Interior doors are typically two-
                or four-panel fir or oak. The larger homes from the 1880s and
                1890s often have pocket doors separating the main living spaces.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                How long does door refinishing take?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                A single door typically runs 2 to 4 days from pickup to
                reinstallation. We'll give you a specific timeline with your
                estimate based on the door's condition and what work is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Benton Park doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
