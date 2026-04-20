import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Tower Grove Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Staircase refinishing in Tower Grove, St. Louis. Victorian turned-spindle stairs and bungalow box newel staircases in old-growth fir. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/staircase-refinishing/tower-grove",
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
      name: "Do you refinish staircases in Tower Grove?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tower Grove staircases are rewarding work — Victorian homes on the east side have ornate turned spindles and carved newel posts; bungalows toward the park have straight-run fir stairs with box newel posts. Both are original old-growth, both respond well to refinishing. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My Tower Grove Victorian has a carved newel post — can those details be preserved during stripping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Carved newel posts require more careful work than flat surfaces, but hand-stripping is precisely the method that allows you to work around carved details without damaging the profile. Chemical dipping would destroy the crisp edges of carved detail. With hand tools and appropriate chemical strippers applied carefully, the carved geometry is preserved and the finish removed. Sue has been doing this work for 36 years — carved details are not a special case.",
      },
    },
    {
      "@type": "Question",
      name: "Can you refinish just the treads on my Tower Grove staircase without touching the spindles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can, and sometimes that is the right answer. If the spindle finish is still in good condition and the treads are the only worn surface, a tread-focused refinishing may be appropriate. Sue will assess whether the tread finish and the spindle finish are close enough in color and sheen to read well together after the treads are done. If there's a significant mismatch risk, she'll tell you honestly and let you make the call.",
      },
    },
  ],
};

export default function TowerGroveStaircaseRefinishingPage() {
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
            name: "Tower Grove",
            url: "https://suewheelerstl.com/staircase-refinishing/tower-grove",
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
            Staircase Refinishing — Tower Grove
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Staircase refinishing in <em>Tower Grove.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Tower Grove staircases reflect the neighborhood's dual character.
            Victorian homes on the east side have ornate turned spindles and
            carved newel posts. Bungalows closer to the park have simpler
            straight-run stairs in fir with box newel posts. Both are original
            old-growth. Both respond well to refinishing. The finish has usually
            not been addressed in decades.
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
            Two staircase traditions — one neighborhood
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Tower Grove's architectural character splits roughly at Grand
              Avenue. To the east — Tower Grove East — Victorian cottages and
              larger late-Victorian homes from the 1880s and 1890s. To the west,
              toward Tower Grove Park, Craftsman bungalows from the 1910s and
              1920s. The staircases in both reflect their respective eras.
            </p>
            <p>
              Victorian staircases in Tower Grove East are more elaborate:
              turned spindles with multiple profile variations, carved newel
              posts, sometimes with decorative bracket details at the base of
              each spindle. The scale is more formal, the woodwork more
              detailed. These are the staircases that make a house feel like a
              house — they are the first thing you see when you walk through the
              front door.
            </p>
            <p>
              Bungalow staircases are simpler by design — straight-run fir with
              box newel posts, simpler spindle profiles, no carved detail. The
              simplicity is the aesthetic. When these staircases are refinished
              correctly, the clean grain of old-growth fir becomes the feature —
              the wood itself rather than ornamental detail.
            </p>
            <p>
              Both types share the same challenge: finish that has not been
              professionally addressed in decades. Treads worn through to raw
              wood. Spindles that may have been painted. Varnish that has
              yellowed and lost its clarity. The structural condition of the
              wood in both types is almost always sound — Tower Grove has a
              strong preservation culture, and the homes have been reasonably
              well maintained even when the finish has not.
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
            Staircase work we do most in Tower Grove
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Victorian turned-spindle staircases
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Tower Grove East's Victorian staircases have multiple spindle
                profiles per flight — base spindles, mid-flight spindles,
                sometimes a top-rail spindle that differs from the rest. Each
                spindle is hand-stripped individually. The carved newel posts
                require careful work with small tools around the carved detail.
                Done correctly, the result restores the staircase to something
                close to its original appearance.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Carved newel post restoration
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Carved newel posts are a particular specialty. The chemical
                approach to stripping — and especially dipping — destroys the
                crisp edges of carved profiles. Hand-stripping with appropriate
                tools and chemical application in layers allows us to remove
                accumulated finish without damaging the profile. The carved
                detail is preserved through the process.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Bungalow straight-run staircases
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The bungalow staircases near Tower Grove Park are simpler but
                built from excellent old-growth fir. Tread wear is the most
                common issue — foot traffic wears through the finish in the
                center of the tread over decades. A full refinishing restores
                tread, riser, spindle, and rail finish to a unified appearance
                and puts protective finish back where it is needed most.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Painted-spindle restoration
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                It is common in both Victorian and bungalow homes to find
                staircases where the treads and rails are stained wood but the
                spindles have been painted — usually a mid-century
                simplification. Restoring the spindles to stained wood to match
                the rest of the staircase is hand work, spindle by spindle. The
                before-and-after difference in those staircases is dramatic.
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
            Lead paint in Tower Grove staircases — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Tower Grove's Victorian and bungalow housing was built and painted
              before lead was banned from residential paint in 1978. Staircase
              spindles, railings, and treads in homes of this era should be
              assumed to contain lead until tested — particularly in the lower
              paint layers where older finishes survive. This is the standard
              baseline for pre-1978 construction in St. Louis.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. All
              staircase refinishing in pre-1978 Tower Grove homes follows full
              EPA RRP protocol: containment of the staircase area, HEPA
              filtration, wet methods during stripping, and documented cleanup
              verification. The staircase is the primary circulation space in
              the home, so the containment and cleanup protocols are
              particularly thorough.
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
              "Sue refinished the staircase in our 1892 Victorian on Juniata —
              carved newel post, turned spindles, the whole thing. The carved
              detail in the newel post is crisp and clean. She didn't rush it
              and she didn't damage anything. It looks original because it is."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Juniata Pl., Tower Grove East
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
                Do you refinish staircases in Tower Grove?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Tower Grove staircases — Victorian ornate or bungalow
                simple — are excellent refinishing candidates. The old-growth
                fir in these homes responds beautifully to hand-strip work. Call
                (314) 367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My Tower Grove Victorian has a carved newel post — can those
                details be preserved during stripping?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Hand-stripping is exactly the method that preserves carved
                detail. Chemical dipping would destroy those crisp edges.
                Working by hand with appropriate tools and carefully applied
                chemical stripper, the carved profile comes through intact. Sue
                has been handling work like this for 36 years.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Can you refinish just the treads on my Tower Grove staircase
                without touching the spindles?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                We can. Whether that makes sense depends on the condition of the
                spindle finish and how closely the tread finish will match it
                after refinishing. Sue will assess the specific staircase and
                give you an honest answer about whether a tread-focused scope
                will produce a result that reads well — or whether a full
                treatment is worth the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Tower Grove staircase."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
