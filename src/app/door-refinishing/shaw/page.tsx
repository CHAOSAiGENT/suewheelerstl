import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Shaw Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Shaw, St. Louis. Hand-strip restoration for foursquare and bungalow doors in old-growth fir. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/shaw",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Shaw",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6028,
      longitude: -90.2414,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish doors in Shaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shaw is a neighborhood we know well and work in regularly. The foursquares and bungalows here have original fir and oak doors — front doors, interior sets, and occasionally pocket doors in the larger homes — that are excellent candidates for hand-strip refinishing. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What types of doors are common in Shaw homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shaw's foursquares and bungalows, most built between 1900 and 1930, typically have front doors in old-growth Douglas fir — often simple paneled designs consistent with the Craftsman aesthetic, sometimes with divided-lite glass panels. Interior doors are usually matching fir or oak in two- to five-panel configurations. The wood in these homes was milled when old-growth timber was standard, meaning tighter grain and greater density than anything available new today.",
      },
    },
    {
      "@type": "Question",
      name: "My Shaw bungalow front door has been painted multiple times. Can it be stripped and refinished?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost always, yes. Multiple paint layers — even five or six applications over a century — can be hand-stripped from old-growth fir. The wood underneath is typically in better condition than you'd expect because old-growth fir is naturally dense and resistant to moisture. We'll assess the door in person and tell you what's there and what the result will look like before any work begins.",
      },
    },
  ],
};

export default function ShawDoorRefinishingPage() {
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
            name: "Shaw",
            url: "https://suewheelerstl.com/door-refinishing/shaw",
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
            Door Refinishing — Shaw
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Shaw.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Shaw's foursquares and bungalows were built from 1900 to 1930 with
            old-growth Douglas fir as the standard building material. The doors
            in these homes are worth every effort to restore — the wood
            underneath the paint is still excellent.
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
            Shaw's foursquares and bungalows — and the wood that built them
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Shaw is one of St. Louis's most architecturally coherent
              neighborhoods — a grid of American Foursquares, Craftsman
              bungalows, and modest Colonial Revivals developed from about 1900
              through the late 1920s. These homes were built for working and
              middle-class families during a period when craftsmanship was
              expected as a baseline, not an upgrade.
            </p>
            <p>
              The dominant wood in Shaw's residential construction was
              old-growth Douglas fir. Fir was the workhorse species of the
              American Craftsman movement — straight grain, predictable
              finishing behavior, good dimensional stability. At the time Shaw
              was built, the fir coming out of Pacific Northwest mills was
              old-growth: trees that had been growing for 200 to 400 years,
              producing wood with eight to twelve growth rings per inch. Compare
              that to modern construction fir, which might have two or three
              rings per inch, and the difference in density and hardness is
              dramatic.
            </p>
            <p>
              That old-growth fir is why the doors in Shaw's bungalows and
              foursquares are worth restoring rather than replacing. A 1915 fir
              front door that's been painted over several times still has
              structurally excellent wood. Strip the accumulated finish, address
              any surface damage, and what you find underneath is tight-grained,
              dense, beautiful lumber that holds a finish better than anything
              you could install new.
            </p>
            <p>
              We hand-strip every door. No chemical dipping — dip tanks raise
              the grain in fir specifically, and the water-based chemicals used
              in most dipping operations swell the wood and disrupt the
              flat-sawn grain pattern that makes old fir distinctive. Hand
              stripping preserves the surface integrity and produces the result
              the wood deserves.
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
            Door work we do most in Shaw
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Bungalow and foursquare front doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Shaw front doors typically run a bit smaller in scale than the
                Victorian brownstones of the CWE — Craftsman paneling, often
                with a divided-lite glass panel in the upper third. These are
                usually fir, occasionally oak, and often have original hardware
                — thumb latches, mortise locksets, cast escutcheons — that we
                work around carefully. We remove the door, strip and refinish in
                our shop, and rehang it. The hardware stays in place unless you
                want it replaced.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior door sets
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Shaw bungalows and foursquares typically have matching interior
                doors throughout — two- to four-panel fir or oak doors in every
                opening. When these have been painted, the paint usually
                encompasses the door, casing, and frame together, so stripping
                one door often means staining and finishing decisions that
                affect the whole room. We scope interior door projects with the
                full visual context in mind.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Painted-over stained doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                This is the most common scenario we encounter in Shaw: a door
                that was originally stained and finished is now under three or
                four layers of paint applied by subsequent owners. The wood
                underneath is almost always in better condition than expected.
                We strip it, assess the surface, and give you the choice of
                returning it to a stained finish or maintaining a painted look
                with proper prep and paint.
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
            Lead paint in Shaw homes — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Shaw homes were built from 1900 through the 1920s — all well
              before lead was banned from residential paint in 1978. The paint
              on your doors almost certainly contains lead. This isn't a
              worst-case assumption; it's the realistic baseline for this era of
              construction.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal. Under EPA RRP
              regulations, any refinishing work disturbing painted surfaces in a
              pre-1978 home must be performed by a certified contractor. She's
              been certified since the regulations came into effect. Her process
              includes containment, HEPA filtration, wet methods to minimize
              dust, and documented cleanup — producing a completion record for
              your property file.
            </p>
          </div>
        </div>
      </section>

      {/* About Sue */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Owner-operated since 1989
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Wood Refinishing by Sue Wheeler, LLC has been in business since
              1989 — 36 years of work in St. Louis's historic neighborhoods,
              including Shaw, from the beginning. Sue Wheeler owns the company,
              does the estimates, and does the work. There's no crew of rotating
              subcontractors, no project manager between you and the person
              doing the job.
            </p>
            <p>
              When she comes out for an estimate, she'll tell you what's under
              the finish on your doors, whether it's worth a full strip or a
              maintenance coat, what the EPA requirements are for your home, and
              exactly what the project will cost. No obligation, no upsell.
            </p>
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
                Do you refinish doors in Shaw?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. The foursquares and bungalows here have original fir and
                oak doors that are excellent candidates for hand-strip
                refinishing. We work in Shaw regularly. Call (314) 367-6054 for
                a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                What types of doors are common in Shaw homes?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Front doors are typically old-growth Douglas fir in Craftsman
                paneling, sometimes with divided-lite glass panels. Interior
                doors are usually matching fir or oak in two- to four-panel
                configurations. The old-growth wood in these homes is denser and
                tighter-grained than anything available new.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Shaw bungalow front door has been painted multiple times. Can
                it still be refinished?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Almost always, yes. Multiple layers of paint — even five or six
                applications over a century — can be hand-stripped from
                old-growth fir. The wood underneath is typically in better
                condition than you'd expect. We'll assess the door in person and
                tell you exactly what you have before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Shaw doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
