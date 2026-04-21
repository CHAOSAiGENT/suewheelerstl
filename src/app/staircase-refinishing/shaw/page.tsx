import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Shaw Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing for Shaw Victorian, Four Square, and Craftsman homes. Mismatched wood specialists. EPA-certified lead removal. 36 years serving south St. Louis.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Staircase Refinishing",
    url: "https://suewheelerstl.com/staircase-refinishing",
  },
  {
    name: "Shaw",
    url: "https://suewheelerstl.com/staircase-refinishing/shaw",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com",
  telephone: "(314) 367-6054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Place",
    name: "Shaw, St. Louis, MO",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6011,
      longitude: -90.2458,
    },
  },
  hasCredential: "EPA Lead-Safe Certified Firm",
  description:
    "Hand-stripping staircase refinishing for Shaw Victorian, Four Square, and early Craftsman bungalow homes. Experienced with mismatched wood from 1970s–80s updates.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in Shaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Shaw is a neighborhood we serve regularly. The variety of housing stock here — Victorian, Four Square, early Craftsman — means a variety of staircase types, and we've worked on all of them.",
      },
    },
    {
      "@type": "Question",
      name: "My Shaw staircase has some replacement spindles in a different wood — what can you do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is one of the most common situations we encounter in Shaw. Replacements from the 1970s and 80s were often in pine or poplar when the originals were fir. We can stain to minimize the difference, or in some cases replace the mismatched spindles with reproductions that match the originals before refinishing the whole run.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a full staircase refinishing take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical Shaw staircase takes three to five working days from start to finish, depending on the number of spindles, the condition of the wood, and the number of finish coats required. We discuss the timeline in detail during the estimate so you can plan accordingly. The staircase is passable during most of the process — we stage the work to minimize disruption.",
      },
    },
  ],
};

export default function ShawStaircaseRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

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
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            style={{
              color: "#A65D37",
              fontFamily: '"Playfair Display", Georgia, serif',
            }}
            className="text-sm uppercase tracking-widest mb-4"
          >
            Staircase Refinishing
          </p>
          <h1
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl mb-6 leading-tight"
          >
            Staircase Refinishing in <em>Shaw</em>
          </h1>
          <p
            style={{ color: "#6B5E55" }}
            className="text-lg mb-8 leading-relaxed"
          >
            Shaw's mix of Victorians, Four Squares, and early Craftsman
            bungalows means a wide range of staircase conditions — including the
            mismatched wood that 1970s and 80s updates left behind. We
            hand-strip and restore Shaw staircases to a unified, finished
            result, never using dip tanks that would damage original joinery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              style={{ backgroundColor: "#11B2E8", color: "#fff" }}
              className="inline-block px-8 py-3 text-base font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:+13143676054"
              style={{ color: "#2A2421" }}
              className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold border border-current rounded hover:opacity-70 transition-opacity"
            >
              <Phone size={18} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood context */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-8"
          >
            What makes Shaw staircases different
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-5 text-base leading-relaxed"
          >
            <p>
              Shaw developed from the 1890s through the 1920s with a diverse
              range of housing types. Unlike neighborhoods with a single
              dominant architectural style, Shaw has Victorian cottages
              alongside American Four Squares alongside early Craftsman
              bungalows — sometimes on the same block. The staircase in a Shaw
              Four Square tends to be substantial and straightforward; in a
              Victorian cottage it may be more decorative; in a Craftsman
              bungalow it is likely simple but carefully detailed.
            </p>
            <p>
              The original wood in Shaw staircases is almost universally Douglas
              fir. Fir was the workhorse material for interior millwork across
              St. Louis from the 1880s through the 1920s, and it ages well when
              maintained. The challenge in Shaw is that these homes were heavily
              renovated during the 1970s and early 1980s — a period when the
              neighborhood's property values had declined and owners were making
              practical rather than preservation-minded decisions.
            </p>
            <p>
              The result is that many Shaw staircases have a layer of renovation
              history between their original construction and today. Spindles
              were replaced with pine or poplar that doesn't match the original
              fir. Newel posts were capped with different wood. Treads were
              covered in carpet, which both protected and hid the original fir
              underneath. Removing the carpet often reveals fir in surprisingly
              good condition; the mismatched spindles and newel posts require a
              different strategy.
            </p>
            <p>
              We assess each Shaw staircase as a system and advise on the
              approach that produces the best result — whether that means
              matching stain across different wood species, replacing mismatched
              spindles with reproductions, or working with the existing
              variation in a way that reads as intentional rather than
              accidental.
            </p>
          </div>
        </div>
      </section>

      {/* Staircase components */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-10"
          >
            Every component of your Shaw staircase
          </h2>

          <div className="space-y-10">
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Treads &amp; Risers
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Shaw fir treads under carpet are often in remarkably good
                condition — the carpet kept them clean and dry. We strip and
                refinish them once the carpet is removed, addressing any soft or
                damaged sections. Where treads were left uncarpeted and painted,
                we strip layer by layer. The goal in both cases is a clear
                finish that reveals the character of the original fir.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Spindles &amp; Balusters
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Mismatched spindles are a Shaw specialty. When originals are
                present, we remove them individually, strip by hand in the shop,
                and reinstall. When some have been replaced with a different
                wood species, we can either stain to minimize the difference or
                — if the variation is too pronounced — recommend replacement
                with reproductions before refinishing. We never use dip tanks,
                which would dissolve the glue at the base of every spindle
                regardless of wood type.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Newel Posts
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Shaw newel posts range from simple square-section posts in
                Craftsman homes to more elaborate turned and paneled designs in
                Victorian houses. Where renovation has added an incompatible cap
                or base, we advise on whether to restore to the original profile
                or to work with the current configuration. In most cases the
                original post body is intact under the later additions.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Railings
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Shaw handrails are typically a straightforward oval or rounded
                profile in fir. Where they've been painted, we strip them by
                hand and refinish. Where they've been replaced, we advise on
                whether the replacement is compatible with a cohesive finish or
                whether a new rail would serve the staircase better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{ backgroundColor: "#F8F6F1", borderLeftColor: "#11B2E8" }}
        className="py-14 px-6 border-l-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-2xl mb-5"
          >
            EPA-Certified Lead-Safe Work in Shaw Homes
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-4 leading-relaxed"
          >
            <p>
              Shaw homes were built and renovated across multiple eras, and the
              lead paint situation on a given staircase can be layered and
              complicated. Original pre-1978 layers may sit beneath 1970s
              renovation paint that itself may contain lead. We are an
              EPA-certified lead-safe firm with decades of experience in exactly
              this kind of multi-era finish history.
            </p>
            <p>
              All stripping work follows EPA RRP protocols: full area
              containment, wet-method stripping where required, and proper
              disposal of all stripped material. We provide certification
              documentation before work starts and discuss scheduling with
              families who have young children at home.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-2xl leading-relaxed mb-6 italic"
          >
            "The staircase had original spindles on one side and obvious 1980s
            replacements on the other. Sue matched the stain so well that most
            people can't tell the difference unless you point it out. The whole
            thing looks like it was done at once."
          </blockquote>
          <p
            style={{ color: "#6B5E55" }}
            className="text-sm uppercase tracking-widest"
          >
            — Dan W., Flora Place, Shaw
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-10"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Do you refinish staircases in Shaw?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes. Shaw is a neighborhood we serve regularly. The variety of
                housing stock here — Victorian, Four Square, early Craftsman —
                means a variety of staircase types, and we've worked on all of
                them.
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                My Shaw staircase has some replacement spindles in a different
                wood — what can you do?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                This is one of the most common situations we encounter in Shaw.
                Replacements from the 1970s and 80s were often in pine or poplar
                when the originals were fir. We can stain to minimize the
                difference, or in some cases replace the mismatched spindles
                with reproductions that match the originals before refinishing
                the whole run.
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                How long does a full staircase refinishing take?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                A typical Shaw staircase takes three to five working days from
                start to finish, depending on the number of spindles, the
                condition of the wood, and the number of finish coats required.
                We discuss the timeline in detail during the estimate so you can
                plan accordingly. The staircase is passable during most of the
                process — we stage the work to minimize disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Shaw staircase."
        subtext="Call (314) 367-6054 or request a free estimate online. We've been restoring Shaw staircases since 1989."
      />
    </>
  );
}
