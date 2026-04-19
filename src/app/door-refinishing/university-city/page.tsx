import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "University City Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in University City, MO. Hand-strip restoration for Tudor Revival, Colonial, and Craftsman doors in old-growth fir and oak. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/university-city",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "University City",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6601,
      longitude: -90.3085,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish doors in University City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. University City is a neighborhood we work in regularly. The Tudor Revival, Colonial, and Craftsman homes here have exceptional original woodwork — heavy paneled entry doors in oak, formal fir entries, and interior door sets that are structurally sound and excellent candidates for hand-strip refinishing. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My University City Tudor has a heavy oak front door — is that different to refinish than fir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oak and fir both refinish beautifully but have different characteristics. Oak is harder, has a more pronounced open grain, and accepts stain differently than fir. Tudor Revival entries are often quartersawn oak, which has a distinctive ray pattern when finished — quite striking when properly restored. The technique is similar but the finish options and grain-filling steps differ. Sue will assess your specific door and give you a clear picture of what the result will look like.",
      },
    },
    {
      "@type": "Question",
      name: "Can you refinish the original interior doors throughout my University City home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Interior door sets are a significant part of what we do in University City. These homes typically have matching fir or oak interior doors in every opening — two- to four-panel configurations that have often been painted during mid-century updates. We scope interior door projects with the full visual context in mind, because staining one door affects the finish decisions for the casing, frame, and adjoining rooms.",
      },
    },
  ],
};

export default function UniversityCityDoorRefinishingPage() {
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
            name: "University City",
            url: "https://suewheelerstl.com/door-refinishing/university-city",
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
            Door Refinishing — University City
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>University City.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            University City's Tudor Revivals, Colonial homes, and Craftsman
            bungalows have original entry doors and interior door sets built
            from old-growth oak and fir. The wood is exceptional. The finish has
            typically not been addressed in decades. We hand-strip every door —
            no dip tanks, no shortcuts.
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
            University City's housing stock — and the doors that came with it
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              University City developed from roughly 1910 through the 1940s,
              producing a rich mix of architectural styles across its
              neighborhoods. Tudor Revival homes are common in the older
              sections — heavy masonry exteriors, steeply pitched rooflines, and
              woodwork interiors to match. Colonial Revivals bring formal
              paneled entries and symmetrical layouts. The Craftsman bungalows
              and Prairie-influenced homes add variety throughout.
            </p>
            <p>
              The DeBaliviere Place and Parkview neighborhoods have some of the
              finest original woodwork in the area. Homeowners here tend to have
              a preservation orientation — they understand what they have, and
              they want to maintain it correctly. That's exactly the kind of
              project we do best.
            </p>
            <p>
              Old-growth fir and oak are standard in U City's pre-war homes.
              This is wood milled when the timber was 200 to 400 years old —
              tight-grained, dense, resistant to moisture. It holds a finish
              differently than modern lumber, and it responds to hand-stripping
              in ways that reward the investment. The problem is almost never
              the wood itself. The problem is accumulated finish — layers of
              paint or worn varnish applied over decades that obscure what's
              underneath.
            </p>
            <p>
              We don't dip. Dip tanks use water-based chemical solutions that
              raise the grain in fir and disrupt glue joints at spindle bases.
              Every door we refinish is hand-stripped — a slower process that
              preserves the surface integrity the wood earned by surviving this
              long.
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
            Door work we do most in University City
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Tudor Revival entry doors in oak
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Tudor homes in U City typically have heavy, paneled entry doors
                in oak — often quartersawn, which produces a distinctive ray
                pattern on the face. These doors are usually in good structural
                condition; the issue is finish buildup or a varnish that has
                gone opaque with age. Stripped and properly refinished, a
                quartersawn oak entry door is one of the most striking results
                we produce.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Colonial Revival formal entries in fir
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Colonial homes have formal paneled entries — often fir, with
                symmetrical panel arrangements and classical hardware. These
                doors have frequently been painted as the formal entry was
                updated over the decades. Hand-stripping reveals the fir beneath
                and gives you the choice of returning to a stained finish or
                maintaining a proper painted surface with correct prep.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior door sets throughout the home
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                University City homes typically have matching interior door sets
                — the same species and panel configuration throughout. When
                these have been painted, a single door project quickly becomes a
                whole-room decision. We scope interior door work with the
                broader context in mind and give you an honest picture of what a
                full restoration would look like versus refinishing selected
                doors.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Craftsman and Prairie-style entries
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Craftsman and Prairie homes in U City have entries with simpler
                panel configurations — sometimes a single raised panel,
                sometimes horizontal emphasis consistent with Prairie design
                principles. These are almost always old-growth fir and respond
                beautifully to a thorough stripping and finish application that
                shows the grain rather than hiding it.
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
            Lead paint in University City homes — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              University City's pre-war housing stock — the 1910s through 1940s
              homes that define the neighborhood — was built and painted well
              before lead was banned from residential paint in 1978. If your
              home was built before 1978, assume lead is present in the painted
              surfaces. This is especially true on exterior doors, where
              multiple paint layers have accumulated over a century.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Under EPA
              RRP regulations, any refinishing work disturbing painted surfaces
              in a pre-1978 home must be performed by a certified contractor.
              Her process includes full containment, HEPA filtration, wet
              methods to suppress dust, and documented cleanup — producing a
              completion record you can keep with your property file.
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
              "Our Tudor on Leland has a massive quartersawn oak front door — we
              had no idea what it looked like under the paint. Sue stripped it
              and the grain is extraordinary. It looks like what it always
              should have been."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Leland Ave., University City
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
                Do you refinish doors in University City?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. University City is a neighborhood we work in regularly. The
                Tudor Revival, Colonial, and Craftsman homes here have
                exceptional original doors in old-growth oak and fir — exactly
                the material that rewards hand-strip refinishing. Call (314)
                367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My University City Tudor has a heavy oak front door — is that
                different to refinish than fir?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Oak and fir both refinish beautifully but require different
                approaches. Oak has a more open grain that benefits from a grain
                filler before finish application. Quartersawn oak — common in
                Tudor entries — has a distinctive ray pattern that becomes
                visible and striking when properly stripped and finished. Sue
                will assess your door and explain exactly what the result will
                look like before any work begins.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Can you refinish the original interior doors throughout my
                University City home?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Whole-house interior door restoration is a project we
                handle regularly in U City homes. These interiors typically have
                matching door sets throughout, so refinishing one door usually
                involves finish decisions that affect the entire home. We scope
                those projects carefully and give you a complete picture before
                committing to anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your University City doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
