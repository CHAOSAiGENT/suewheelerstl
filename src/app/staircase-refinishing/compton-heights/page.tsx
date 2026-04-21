import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Compton Heights Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing for Compton Heights Arts & Crafts and Colonial Revival homes. Quarter-sawn oak specialists. EPA-certified lead removal. 36 years in south St. Louis.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Staircase Refinishing",
    url: "https://suewheelerstl.com/staircase-refinishing",
  },
  {
    name: "Compton Heights",
    url: "https://suewheelerstl.com/staircase-refinishing/compton-heights",
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
    name: "Compton Heights, St. Louis, MO",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5978,
      longitude: -90.2458,
    },
  },
  hasCredential: "EPA Lead-Safe Certified Firm",
  description:
    "Hand-stripping staircase refinishing for Compton Heights Arts & Crafts and Colonial Revival homes. Quarter-sawn oak, mission-style details, and wide square newel posts restored to original condition.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in Compton Heights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Compton Heights is an area we know well. The Arts & Crafts and Colonial Revival homes here often have quarter-sawn oak staircases that reward careful refinishing — the figure in the wood is extraordinary once the old finish is removed.",
      },
    },
    {
      "@type": "Question",
      name: "My staircase has quarter-sawn oak — is that different to work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quarter-sawn oak requires a slightly different approach than flat-sawn lumber. The medullary ray figure — the distinctive fleck pattern — sits at the surface and needs to be treated with care during stripping. We use hand tools and solvents appropriate to quarter-sawn oak, preserving the figure rather than sanding it away.",
      },
    },
    {
      "@type": "Question",
      name: "Can you refinish just the treads and leave the spindles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, though we always discuss the visual result first. Refinishing treads while leaving painted spindles can look jarring. In some cases a partial refinish makes sense; in others, doing the full staircase produces a much more satisfying result for the same relative effort. We'll give you an honest assessment.",
      },
    },
  ],
};

export default function ComptonHeightsStaircaseRefinishingPage() {
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
            Staircase Refinishing in <em>Compton Heights</em>
          </h1>
          <p
            style={{ color: "#6B5E55" }}
            className="text-lg mb-8 leading-relaxed"
          >
            The quarter-sawn oak staircases of Compton Heights Arts &amp; Crafts
            homes are among the finest woodwork in south St. Louis. We
            hand-strip every component — never dip tanks — to bring out the full
            figure in the wood without damaging the joinery.
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
            What makes Compton Heights staircases different
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-5 text-base leading-relaxed"
          >
            <p>
              Compton Heights was developed between roughly 1895 and 1915 as an
              upper-middle-class residential enclave, and its architecture
              reflects the design movements of that moment: Arts &amp; Crafts,
              Colonial Revival, and a few late Victorians at the older edges of
              the neighborhood. The homes were built for people who cared about
              material quality, and the staircases show it.
            </p>
            <p>
              Quarter-sawn oak is the signature material in Compton Heights
              staircases. Unlike flat-sawn oak, quarter-sawn lumber is cut
              perpendicular to the growth rings, revealing the medullary ray
              cells as a distinctive silver-fleck figure across the face of the
              board. It is dimensionally more stable than flat-sawn oak and
              takes finish differently — more evenly, with less blotching. When
              a Compton Heights staircase is properly stripped and refinished,
              the figure in the quarter-sawn oak is genuinely spectacular.
            </p>
            <p>
              Mission-style details appear frequently: wide square newel posts,
              subtler turned spindles than the elaborate balusters of CWE, and a
              general preference for clean geometry over ornament. These details
              are well-suited to hand-stripping, which preserves their crisp
              edges rather than softening them.
            </p>
            <p>
              The challenge in Compton Heights is the finish history. Many homes
              were updated in the mid-20th century with stains or sealers that
              were not appropriate for quarter-sawn oak, obscuring the figure.
              Removing these layers carefully — without sanding through the
              surface and losing the ray figure — requires experience with this
              specific type of wood.
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
            Every component of your Compton Heights staircase
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
                Quarter-sawn oak treads are the centerpiece of a Compton Heights
                staircase. The ray figure runs across the full width of each
                tread and must be preserved during stripping. We use chemical
                strippers rather than aggressive sanding so that the surface
                remains intact. Once stripped, we select a finish that enhances
                the figure rather than flattening it.
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
                Compton Heights spindles tend to be more restrained in profile
                than those in Victorian-era homes — often a simple turned or
                squared design consistent with Arts &amp; Crafts aesthetics.
                Each spindle is removed individually, stripped by hand in the
                shop, and reinstalled. We never use dip tanks, which would
                destroy the glue joint at the base of each spindle and leave the
                balustrade permanently loose.
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
                The wide square newel posts characteristic of Compton Heights
                mission-style homes are stripped in sections, working into any
                recessed panels or applied moldings. Their clean geometry means
                that finish quality is immediately visible — there is no carved
                ornament to hide imperfections. We take the time to get them
                right.
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
                Quarter-sawn oak railings in Compton Heights homes are often a
                simple but substantial profile — wide enough that the ray figure
                shows clearly across the top surface. Stripping them by hand
                preserves that figure. We finish handrails to a durability level
                appropriate for daily contact while maintaining the visual
                quality the wood deserves.
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
            EPA-Certified Lead-Safe Work in Compton Heights Homes
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-4 leading-relaxed"
          >
            <p>
              Every Compton Heights home was built before 1978, and the older
              finish layers on most staircases contain lead. Because the
              neighborhood's homes were maintained by careful owners, some
              staircases have lead-containing clear varnish layers as well as
              painted sections — both require the same safe-handling protocols.
            </p>
            <p>
              We are an EPA-certified lead-safe firm and follow full RRP
              (Renovation, Repair, and Painting) protocols for containment,
              stripping, and disposal. Certification documentation is provided
              before work begins. We are experienced in coordinating lead-safe
              work schedules with occupied households.
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
            "I'd been told the staircase was just 'painted oak' — nothing
            special. Sue took one look and said it was quarter-sawn and worth
            doing properly. She was right. The fleck pattern in the wood is
            unlike anything I've seen in a new house."
          </blockquote>
          <p
            style={{ color: "#6B5E55" }}
            className="text-sm uppercase tracking-widest"
          >
            — Caroline M., Longfellow Boulevard, Compton Heights
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
                Do you refinish staircases in Compton Heights?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes. Compton Heights is an area we know well. The Arts &amp;
                Crafts and Colonial Revival homes here often have quarter-sawn
                oak staircases that reward careful refinishing — the figure in
                the wood is extraordinary once the old finish is removed.
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
                My staircase has quarter-sawn oak — is that different to work
                with?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Quarter-sawn oak requires a slightly different approach than
                flat-sawn lumber. The medullary ray figure — the distinctive
                fleck pattern — sits at the surface and needs to be treated with
                care during stripping. We use hand tools and solvents
                appropriate to quarter-sawn oak, preserving the figure rather
                than sanding it away.
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
                Can you refinish just the treads and leave the spindles?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes, though we always discuss the visual result first.
                Refinishing treads while leaving painted spindles can look
                jarring. In some cases a partial refinish makes sense; in
                others, doing the full staircase produces a much more satisfying
                result for the same relative effort. We'll give you an honest
                assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Compton Heights staircase."
        subtext="Call (314) 367-6054 or request a free estimate online. We've been working with quarter-sawn oak in south St. Louis homes since 1989."
      />
    </>
  );
}
