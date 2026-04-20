import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Maplewood Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Maplewood, St. Louis. Hand-strip restoration for 1900s–1920s cottage and bungalow doors in old-growth Douglas fir. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/maplewood",
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
      name: "Do you refinish doors in Maplewood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Maplewood is a neighborhood we work in regularly. The bungalows and cottages here have original old-growth Douglas fir doors — front entry doors, interior sets, and occasionally pocket doors in the more generous floor plans — that are excellent candidates for hand-strip refinishing. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Maplewood cottage front door has been painted many times — is the original wood worth uncovering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost always, yes. Maplewood's bungalow and cottage doors were built from old-growth Douglas fir — a wood so dense and tight-grained that it survives decades of paint remarkably well. Multiple layers of paint can be hand-stripped to reveal wood that is structurally sound and visually excellent. We assess every door in person and tell you exactly what's underneath before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How do you refinish interior doors in a small Maplewood home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We remove each door, strip and refinish it in our shop, then return and rehang it. Working in-shop means no stripping chemicals or dust in your living space — important in a smaller home where rooms open onto each other. Interior door projects in Maplewood cottages typically involve the full set of doors for visual consistency, and we scope each project with that in mind.",
      },
    },
  ],
};

export default function MaplewoodDoorRefinishingPage() {
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
            name: "Maplewood",
            url: "https://suewheelerstl.com/door-refinishing/maplewood",
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
            Door Refinishing — Maplewood
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Maplewood.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Maplewood's working-family bungalows and cottages were built from
            the same old-growth Douglas fir as their grander neighbors in other
            St. Louis neighborhoods. The doors look modest. The wood is
            excellent — and worth bringing back.
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
            What makes Maplewood door refinishing different
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Maplewood was built for working families in the early 1900s —
              compact lots, cottages and bungalows sized for practicality, and
              woodwork that was unpretentious in design but not in material. The
              builders who constructed Maplewood in the 1900s and 1910s were
              using the same lumber supply as everyone else in St. Louis: old-
              growth Douglas fir from Pacific Northwest mills, with growth rings
              so tight — eight to twelve per inch — that the wood is essentially
              a different material from anything sold as fir today.
            </p>
            <p>
              The doors in Maplewood's bungalows and cottages are simpler in
              profile than those in Central West End Victorians or Lafayette
              Square row houses. Two-panel and four-panel configurations, modest
              scale, workman's hardware. But the wood itself is identical in
              quality. A Maplewood cottage front door from 1915 and a CWE
              townhouse entry door from the same year came from the same forests
              and the same mills. The difference is in the ornament, not the
              material.
            </p>
            <p>
              That matters for refinishing because the wood's behavior under
              stripping, staining, and finishing is determined by its age and
              growth density — not by the design of the door. Old-growth fir
              strips predictably, holds stain evenly, and finishes beautifully.
              Maplewood doors do all of that. They're also frequently still in
              their original openings, with original hardware, which means the
              entire door-and-frame assembly has aged together.
            </p>
            <p>
              Maplewood has a strong renovation culture — current owners are
              committed to the neighborhood's original character and actively
              restoring rather than replacing. We see that in the kinds of
              projects we get called for here: front doors that owners want to
              restore to natural wood rather than repaint, interior door sets
              that need to match restored trim, and occasionally pocket doors
              that have been painted shut for decades.
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
            Door work we do most in Maplewood
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Cottage and bungalow front doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Maplewood front doors are typically simple paneled fir — modest
                in scale, often painted many times over since original
                installation. We remove the door, strip every layer of
                accumulated paint in our shop, assess the wood, and return a
                finished door that reflects the honest character of the house.
                The board-up method means no stripping work in your entryway and
                a clean, weather-tight opening while we work.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior door sets in fir
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Maplewood cottages typically have two-panel and four-panel
                interior doors throughout in the same old-growth fir as the
                front door. When owners are restoring a room, they often want
                the interior doors to match — stripped to natural wood and
                finished consistently with the trim. We scope interior door
                projects to account for the full visual context of the room, not
                just one door in isolation.
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
                Some of Maplewood's larger floor plans include pocket doors
                between the living and dining rooms — an original feature that
                gets painted over and eventually stuck in the wall pocket for
                years. We can strip and refinish pocket doors in place or remove
                them from the pocket for shop work, depending on the
                installation and condition of the hardware.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Painted-over stained originals
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The most common situation we find in Maplewood: a door that was
                originally stained dark is now under three or four layers of
                white paint. Previous owners painted rather than stripped; the
                wood underneath is almost always in better condition than anyone
                expects. We give you the honest assessment in person — what's
                there, what it will look like, and whether refinishing makes
                sense for your specific door.
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
            Lead paint in Maplewood homes — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Maplewood's housing stock was built entirely before 1978, when
              lead was banned from residential paint. Every layer of paint on
              your doors — and there may be many — should be treated as
              lead-bearing until tested. This isn't a precautionary
              overstatement; it's the accurate default for any pre-1978 home.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Under EPA
              RRP regulations, disturbing painted surfaces in pre-1978 homes
              requires a certified contractor with documented process controls.
              Her method includes full containment, HEPA filtration, wet
              stripping to minimize airborne dust, and documented cleanup — and
              she produces a completion record for your property file when the
              work is done.
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
              "We bought our Maplewood cottage knowing the woodwork needed work.
              Sue stripped and refinished the front door and all five interior
              doors. The fir underneath was gorgeous — tight grain, warm color.
              We never would have guessed what was hiding under all that white
              paint. The whole house feels different now."
            </p>
            <cite className="text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Sutton Ave., Maplewood
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
                Do you refinish doors in Maplewood?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Maplewood is a neighborhood we work in regularly. The
                bungalows and cottages here have original old-growth fir doors
                that are excellent candidates for hand-strip refinishing. Call
                (314) 367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Maplewood cottage front door has been painted many times — is
                the original wood worth uncovering?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Almost always, yes. Old-growth Douglas fir is dense enough that
                it survives decades of paint in good condition. We assess every
                door in person and tell you exactly what's underneath before any
                work begins. No obligation.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                How do you refinish interior doors in a small Maplewood home?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                We remove each door and do all stripping and finishing in our
                shop, not in your home. That means no chemical exposure or dust
                in your living space. Doors are returned and rehung when the
                finish has fully cured.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Maplewood doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
