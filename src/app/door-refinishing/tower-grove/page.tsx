import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Tower Grove Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Tower Grove, St. Louis. Victorian cottage and bungalow doors in old-growth fir. Pocket doors. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/tower-grove",
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
      name: "Do you refinish doors in Tower Grove?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tower Grove is a neighborhood we know well and work in regularly. The Victorian cottages and bungalows here have original fir entry doors, matching interior door sets, and — in many homes — original sliding pocket doors in the primary living spaces. All are excellent candidates for hand-strip refinishing. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Tower Grove home has original sliding pocket doors — how do those work in the refinishing process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pocket doors require special handling. We work with the doors in place when possible, or remove them from the pocket when the hardware and track allow it. The process involves careful masking of the track hardware, hand-stripping the door face and edges, and refinishing in sections. Pocket doors in Tower Grove Victorian homes are typically old-growth fir — they are worth the extra care the process requires.",
      },
    },
    {
      "@type": "Question",
      name: "Is Tower Grove East's historic district status relevant to door refinishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tower Grove East's local historic district designation generally means that the character-defining features of the homes — including original woodwork — are intended to be preserved rather than replaced. Refinishing original doors is exactly what the designation supports. For exterior work that might require permits, the district guidelines typically favor restoration over replacement. Sue can discuss the specific considerations for your property.",
      },
    },
  ],
};

export default function TowerGroveDoorRefinishingPage() {
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
            name: "Tower Grove",
            url: "https://suewheelerstl.com/door-refinishing/tower-grove",
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
            Door Refinishing — Tower Grove
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Tower Grove.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Tower Grove's Victorian cottages and bungalows were built with
            old-growth fir as standard. Entry doors, interior door sets, and
            pocket doors — many Tower Grove homes have two or three sets of
            original sliding pocket doors still in their tracks. These doors are
            worth restoring. The wood has lasted this long for a reason.
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
            Tower Grove's Victorian and bungalow woodwork
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Tower Grove has a dual character. The east side — Tower Grove East
              historic district — runs toward the dense Victorian cottages and
              larger late-Victorian homes built from the 1880s through the early
              1900s. The west side toward the park becomes more bungalow-heavy,
              with Craftsman construction from the 1910s and 1920s. The woodwork
              in both areas is old-growth fir throughout.
            </p>
            <p>
              Tower Grove East is a City of St. Louis local historic district,
              which has helped maintain the original architectural features of
              these homes to a degree not always seen in comparable
              neighborhoods. Pocket doors, in particular, have survived here in
              numbers that are remarkable. Many Tower Grove homes have two or
              three sets of original sliding pocket doors in the primary living
              spaces — parlor to dining room, dining room to hallway — still in
              their original track hardware.
            </p>
            <p>
              Pocket doors are a specialty within door refinishing. They cannot
              be sent to a dip tank without removing them entirely — and even
              then, the water-based chemicals damage old-growth fir. We handle
              pocket doors in place when possible, stripping the face and edges
              by hand and refinishing in sections. The hardware stays in place.
              The result is a set of pocket doors that work correctly and look
              the way they were designed to look.
            </p>
            <p>
              Entry doors in Tower Grove Victorian homes are typically
              four-panel fir construction with original hardware — mortise
              locksets, cast escutcheons, sometimes original transom hardware
              above. Bungalow entries are simpler — single or two-panel fir,
              sometimes with a divided-lite glass panel. Both respond well to
              hand-strip refinishing and both have wood worth preserving.
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
            Door work we do most in Tower Grove
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Victorian cottage entry doors in fir
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Tower Grove Victorian cottages typically have four-panel fir
                entry doors with original mortise locksets and cast hardware.
                These doors have been painted, varnished, painted again over a
                century of occupancy. The old-growth fir underneath is almost
                always structurally excellent. We remove the door, hand-strip it
                to bare wood, address any surface damage, and refinish it to a
                specification that works for the exterior exposure.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Pocket door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Pocket doors are among the most requested work we do in Tower
                Grove. We handle them in place when the track hardware allows
                it, stripping and refinishing the face and edges while the door
                remains in the pocket. For doors that can be fully removed, we
                work with the door on sawhorses and reinstall carefully. The
                original hardware — rollers, tracks, pulls — is preserved and
                left in place throughout.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Bungalow entry and interior doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Bungalow entries in Tower Grove are simpler in profile than the
                Victorian cottages but built from the same old-growth fir. The
                matching interior door sets throughout the bungalow — two- to
                four-panel fir in every opening — have typically been painted at
                some point and represent a significant refinishing opportunity
                when restored as a set.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Historic district exterior refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Tower Grove East's historic district status favors preservation
                of original architectural features. Refinishing an original
                entry door rather than replacing it is precisely what the
                designation supports. For exterior door work that intersects
                with permit requirements, we can discuss the specific
                considerations and what documentation the project requires.
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
            Lead paint in Tower Grove homes — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Tower Grove's Victorian and bungalow housing stock was built well
              before lead was banned from residential paint in 1978. The paint
              on your entry doors, pocket doors, and interior door sets almost
              certainly contains lead — particularly in the lower layers applied
              before the mid-20th century. This is standard for this era of
              construction and not a cause for alarm, but it does require a
              certified contractor.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. All
              refinishing work on pre-1978 Tower Grove homes follows full EPA
              RRP protocol: containment of the work area, HEPA filtration, wet
              methods to suppress dust during stripping, and documented cleanup.
              The completion documentation is yours to keep with the property
              file.
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
              "We have two sets of pocket doors in our Victorian on Arsenal —
              both original, both painted shut by a previous owner. Sue got them
              moving and looking beautiful. We had no idea how much the pocket
              doors would change the whole feeling of the main floor."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Arsenal St., Tower Grove East
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
                Do you refinish doors in Tower Grove?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Tower Grove is a neighborhood we work in regularly. Entry
                doors, interior door sets, and pocket doors — the fir in these
                Victorian and bungalow homes is excellent and worth restoring.
                Call (314) 367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Tower Grove home has original sliding pocket doors — how do
                those work in the refinishing process?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                We handle pocket doors in place when the track hardware allows
                it — stripping and refinishing the face and edges while the door
                remains in the pocket. The original hardware stays in place
                throughout. For doors that can be fully removed, we work
                off-track and reinstall carefully. These are a specialty and a
                project we particularly enjoy.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Is Tower Grove East's historic district status relevant to door
                refinishing?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Generally, yes in a positive way — the district designation
                supports preserving original architectural features like entry
                doors rather than replacing them. Refinishing is exactly what
                the historic district guidelines favor. Sue can discuss the
                specific considerations for exterior work on your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Tower Grove doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
