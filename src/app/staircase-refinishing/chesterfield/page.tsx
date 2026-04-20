import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Chesterfield Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Staircase refinishing in Chesterfield, MO. 1980s–2000s oak treads, painted spindles, worn-through finish. Full refinishing for post-construction suburban staircases. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/staircase-refinishing/chesterfield",
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
      name: "Do you refinish staircases in Chesterfield?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Chesterfield staircases from the 1980s and 90s — oak treads, turned spindles, often painted risers — are straightforward refinishing candidates when the finish is worn or the spindles are ready for a new treatment. Worn-through treads showing raw wood in the foot-traffic zone are a clear full-refinish signal. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Chesterfield staircase has worn treads and painted spindles — what does refinishing involve for both?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Worn treads showing raw wood need a full strip of the remaining finish, light sanding to address wear patterns, and a new stain and finish application. Painted spindles need to be stripped to bare wood individually — a hand process, spindle by spindle. The goal is a staircase where treads and spindles are in the same stain and finish family and read as a unified whole rather than two different treatments. Sue will walk through the full scope at the estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Can you refinish a Chesterfield staircase built in the 1990s?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A staircase built in the 1990s with oak treads and turned spindles is a solid refinishing candidate. The wood is not old-growth, but oak is oak — it holds a finish well, it responds to stripping cleanly, and it accepts stain predictably. A staircase from this era that has never been professionally refinished typically has treads worn through in the foot-traffic zone and spindles showing wear or discoloration. Both are addressable.",
      },
    },
  ],
};

export default function ChesterfieldStaircaseRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Staircase Refinishing",
            url: "https://suewheelerstl.com/staircase-refinishing",
          },
          {
            name: "Chesterfield",
            url: "https://suewheelerstl.com/staircase-refinishing/chesterfield",
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
            Staircase Refinishing — Chesterfield
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Staircase refinishing in <em>Chesterfield.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Chesterfield staircases are typically 1980s to 2000s construction:
            oak treads, turned spindles, painted risers. High-traffic wear on
            treads is the most common issue — worn through the finish, showing
            raw wood in the foot-traffic zone. This is a clear signal that the
            full staircase needs professional attention. Spindles may be painted
            or stained, often inconsistently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Staircase Estimate
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
            Chesterfield staircases — what they are and what they need
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Chesterfield is post-1970 suburban construction. There is no
              Victorian woodwork here, no pre-war old-growth fir, no quartersawn
              oak from the Arts and Crafts era. The staircases in these homes
              are products of their time: oak treads and turned spindles in
              standard profile, painted risers, finished with a polyurethane
              applied during original construction.
            </p>
            <p>
              That original construction-grade finish is not intended to last
              indefinitely under foot traffic. After 20 to 30 years of use —
              which puts most Chesterfield staircases well into the refinishing
              window — the finish has worn through in the center of the treads,
              the spindles may have yellowed or been repainted, and the overall
              staircase looks worn rather than maintained.
            </p>
            <p>
              The wood itself is fine. Oak is a durable species and it holds up
              well to foot traffic. The issue is the finish system above it. A
              professional strip and refinish replaces what was there with a
              better finish properly applied — and the result looks like a
              staircase that has been maintained rather than neglected.
            </p>
            <p>
              We do not overstate the material quality of post-construction
              suburban staircases. These are not the quartersawn oak Colonial
              staircases of Ladue or the carved-newel-post Victorians of Tower
              Grove East. But they are solid-wood oak stairs worth refinishing
              rather than replacing — replacing a staircase in a Chesterfield
              home is a significant construction project, and refinishing is the
              right answer for most of them.
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
            Staircase work we do most in Chesterfield
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Full staircase refinishing — treads, spindles, rail
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The complete Chesterfield staircase refinishing addresses
                treads, spindles, rail, and newel post as a unified whole.
                Treads are stripped of worn finish, sanded to address wear
                patterns in the foot-traffic zone, and refinished with a stain
                and finish appropriate for high-use surfaces. Spindles and rail
                are stripped and finished to match. The result is a staircase
                that reads consistently from top to bottom.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Painted spindle restoration
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Many Chesterfield staircases from the 1980s and 90s have white-
                painted spindles alongside stained treads and rail — a common
                stylistic choice of that era. Some homeowners want to keep the
                painted spindle look but refresh the paint. Others want to strip
                the spindles and return them to stained wood to match the
                treads. We handle both; Sue will discuss which approach works
                better with the specific staircase design.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Stain color updates
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Chesterfield homeowners updating their interiors often want to
                change the staircase stain color as part of that update. Moving
                from the golden oak tones common in 1980s and 90s construction
                to a darker, more contemporary finish is straightforward with a
                full strip and refinish. Sue will discuss the range of
                achievable colors and any limitations at the estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Tread-only refinishing when appropriate
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                If the spindles and rail are in sound condition and the primary
                concern is tread wear, a tread-focused refinishing is sometimes
                the right scope. Sue will assess whether the tread finish after
                refinishing will match closely enough to the existing spindle
                and rail finish — if there's a significant mismatch risk, she
                will explain that clearly and let you make the call.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/staircase-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              All Staircase Refinishing Services →
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
            Lead paint in Chesterfield — generally not a concern
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              The vast majority of Chesterfield homes were built after 1978,
              when lead was banned from residential paint. For post-1978
              construction, lead paint is not a factor. The oldest sections of
              Chesterfield may include homes from the late 1960s or early 1970s
              — if your home was built before 1978, the same certification
              requirements apply as anywhere else.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor and
              follows full EPA RRP protocol for any pre-1978 home, including any
              older Chesterfield properties. For post-1978 homes, standard
              refinishing procedures apply without the additional containment
              requirements.
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
              "Our staircase in Chesterfield had bare wood showing on three
              treads and the spindles were yellowish white from decades of
              painted-over paint. Sue stripped the whole thing and did it in a
              dark espresso stain. It looks like a completely different house.
              Should have done it ten years earlier."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Clarkson Rd., Chesterfield
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
                Do you refinish staircases in Chesterfield?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Chesterfield staircases — oak treads, turned spindles,
                1980s and 90s construction — are solid refinishing candidates.
                Worn-through treads and tired spindle finish are exactly what a
                full strip and refinish addresses. Call (314) 367-6054 for a
                free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Chesterfield staircase has worn treads and painted spindles —
                what does refinishing involve for both?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Worn treads need a full strip, light sanding to address the wear
                pattern, and new stain and finish. Painted spindles need to be
                stripped individually to bare wood. The goal is a unified
                staircase where treads and spindles share the same stain and
                finish family. Sue will walk through the full scope at the
                estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Can you refinish a Chesterfield staircase built in the 1990s?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. A 1990s oak staircase is a solid refinishing candidate. Oak
                holds a finish well and accepts stain predictably — the material
                is not old-growth, but it is oak, and it responds to refinishing
                cleanly. Treads worn through in the foot-traffic zone and
                spindles showing discoloration are both addressable with a full
                refinishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Chesterfield staircase."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
