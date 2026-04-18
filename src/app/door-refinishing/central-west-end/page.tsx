import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Central West End Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in St. Louis's Central West End. Expert hand-stripping for 1880s–1920s brownstones, mansions, and row houses. EPA Certified. Call (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/central-west-end",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Central West End",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6461,
      longitude: -90.2649,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish doors in the Central West End?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the Central West End is one of our most active neighborhoods. Sue Wheeler has been working here for her entire 36-year career. We refinish front doors, interior doors, French doors, and the pocket doors that are a signature feature of Central West End homes. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What types of doors are common in Central West End homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Central West End homes — most built between 1880 and 1920 — typically feature substantial entry doors in old-growth Douglas fir, white oak, or chestnut. Interior sliding pocket doors are nearly universal in the larger homes and row houses. Many homes also have French doors opening to rear gardens or formal parlors. The wood in these doors is old-growth, meaning tighter grain and greater density than anything milled today.",
      },
    },
    {
      "@type": "Question",
      name: "Do Central West End doors have lead paint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost certainly. The vast majority of Central West End homes predate 1940, and most predate 1910. Any painted surface in these homes can be assumed to contain lead until tested otherwise. Sue Wheeler is an EPA Certified Lead Removal. Every door project on a pre-1978 home is handled with proper containment, HEPA vacuuming, wet-sanding methods, and documented cleanup.",
      },
    },
  ],
};

export default function CentralWestEndDoorRefinishingPage() {
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
            name: "Central West End",
            url: "https://suewheelerstl.com/door-refinishing/central-west-end",
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
            Door Refinishing — Central West End
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in the <em>Central West End.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            The Central West End was built between 1880 and 1920 by people who
            expected it to last. The old-growth fir and oak doors they hung are
            still here, still sound — they just need the finish stripped and
            restored correctly.
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
            What makes Central West End doors different
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              The Central West End is one of St. Louis's great Victorian and
              Edwardian neighborhoods — brownstones, limestone mansions, and
              ornate row houses built for families who expected craftsmanship as
              a baseline. The doors that came with these homes were milled from
              old-growth Douglas fir, white oak, and chestnut at a time when
              those species were still harvested from mature forests. The grain
              is tight. The wood is dense. There's nothing like it available
              new.
            </p>
            <p>
              What those doors have accumulated in 100 to 140 years is a
              different story. Layer after layer of paint — most of it
              lead-based. Shellac applied over original stain that's shifted
              color for a century. Wax on top of wax. The original finish hasn't
              been seen in decades on most of these doors, and the layers that
              cover it have failed, cracked, yellowed, or simply become too
              thick to present well.
            </p>
            <p>
              We hand-strip every door. No dipping — chemical dip tanks damage
              the glue joints in raised-panel doors, raise the grain, and
              destroy any hope of a clean final finish. Hand stripping is
              slower, but it's the only method that preserves what makes these
              doors worth restoring in the first place.
            </p>
            <p>
              For most Central West End door projects, we use the board-up
              method: the door is removed from its hinges, transported to our
              shop, stripped and finished in a controlled environment, then
              returned and rehung. The result is a more consistent finish cure
              and no chemical fumes in your home during the process.
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
            Front doors, pocket doors, French doors — and everything between
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
                The entry door on a CWE brownstone or mansion is a statement
                piece — often substantial in scale, paneled, with original
                hardware. UV exposure from a west or south facing orientation
                breaks down finish quickly. We strip to bare wood, make any
                surface repairs, and apply a UV-resistant polyurethane built for
                exterior use. The result protects the wood while preserving the
                character that makes CWE entries distinctive.
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
                Pocket doors are essentially universal in the larger CWE homes —
                parlor to dining room, library to study, front hall to rear.
                Most are original fir or oak and in structurally good condition
                under decades of failed finish. We pull the panel out of the
                wall cavity, work it in our shop, and reinstall. The hardware —
                typically original bronze or brass — stays intact. These doors
                are one of the most satisfying jobs we do because the
                transformation is dramatic and the wood underneath is always
                beautiful.
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
                CWE homes often have a full complement of interior doors in
                matching fir or oak. When you refinish one, the others
                immediately look worse by comparison. We frequently work through
                an entire floor or a whole house interior door set to maintain
                stain consistency and visual coherence. Matching an existing
                stain across different batches of old-growth wood is part of the
                work.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                French doors and glass-lite doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                French doors and glass-panel doors require hand work around
                every lite — no shortcuts with orbital sanders near glass. We've
                done hundreds of these in CWE homes opening to rear porches and
                formal gardens. The finish work around the glass has to be
                precise, and the finish itself has to be flexible enough to
                handle the expansion and contraction that comes with seasonal
                humidity changes.
              </p>
            </div>
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
            EPA Certified Lead Removal — required for most CWE homes
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              The overwhelming majority of Central West End homes were built
              before 1940. Under EPA RRP regulations, any refinishing work that
              disturbs painted surfaces in a pre-1978 home must be performed by
              an EPA Certified Lead Removal. Sue Wheeler holds that
              certification.
            </p>
            <p>
              Her process includes proper containment of the work area, HEPA
              vacuum filtration, wet methods to control dust, and documented
              cleanup. You receive a completion record. Every door project we do
              in the CWE is handled this way — not because we have to advertise
              it, but because it's what correct work on these surfaces requires.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-2xl mx-auto">
          <blockquote
            className="text-xl text-[#2A2421] leading-relaxed mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontStyle: "italic",
            }}
          >
            "Our front door was the first thing guests saw — and it was
            embarrassing. Sue refinished it in a week. Now it looks like it came
            from the 1890s because it did, and it shows."
          </blockquote>
          <p className="text-sm font-sans text-[#6B5E55]">
            — Homeowner, Westminster Place, Central West End
          </p>
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
                Do you refinish doors in the Central West End?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes — the CWE is one of our most active neighborhoods. Sue has
                been working here for her entire 36-year career. We refinish
                front doors, interior doors, French doors, and pocket doors.
                Call (314) 367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                What types of doors are common in Central West End homes?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Most CWE homes have substantial paneled entry doors in
                old-growth Douglas fir or white oak. Pocket doors are nearly
                universal in the larger homes and row houses. Many also have
                French doors opening to rear gardens or formal parlors. The wood
                is old-growth — tighter grain, greater density than anything
                milled today.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Do Central West End doors have lead paint?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Almost certainly. The vast majority of CWE homes predate 1940.
                Any painted surface can be assumed to contain lead until tested
                otherwise. Sue Wheeler is EPA Certified. Every door project is
                handled with proper containment, HEPA filtration, and documented
                cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Central West End doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
