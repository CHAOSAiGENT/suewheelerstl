import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTABlock from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Lafayette Square Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing for Lafayette Square Italianate and Second Empire mansions — the oldest intact neighborhood in St. Louis. Chestnut, walnut, and fir specialists. EPA-certified.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Staircase Refinishing",
    url: "https://suewheelerstl.com/staircase-refinishing",
  },
  {
    name: "Lafayette Square",
    url: "https://suewheelerstl.com/staircase-refinishing/lafayette-square",
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
    name: "Lafayette Square, St. Louis, MO",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6064,
      longitude: -90.2168,
    },
  },
  hasCredential: "EPA Lead-Safe Certified Firm",
  description:
    "Hand-stripping staircase refinishing for Lafayette Square Italianate and Second Empire homes — St. Louis's oldest intact neighborhood. Experienced with chestnut, walnut, and historically significant staircases.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in Lafayette Square?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lafayette Square is a neighborhood we've worked in for decades. The staircases here are among the oldest in St. Louis and require a thoughtful, careful approach — which is exactly how we work.",
      },
    },
    {
      "@type": "Question",
      name: "My Lafayette Square staircase may have chestnut or walnut — does that change the process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in important ways. American chestnut, which went virtually extinct after the blight of the early 20th century, is now irreplaceable. Walnut is still available but expensive. Both species respond differently to strippers and stains than fir does, and both deserve extraordinary care. We identify the wood species before proposing any approach and adjust our chemistry and technique accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "My home is on the historic register — do you have experience with preservation requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have worked on historic register properties and understand the documentation and material-matching requirements that preservation standards impose. We can provide before-and-after documentation, discuss reversibility of finishes where required, and work within the guidelines set by the Missouri State Historic Preservation Office or your local preservation review body.",
      },
    },
  ],
};

export default function LafayetteSquareStaircaseRefinishingPage() {
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
            Staircase Refinishing in <em>Lafayette Square</em>
          </h1>
          <p
            style={{ color: "#6B5E55" }}
            className="text-lg mb-8 leading-relaxed"
          >
            Lafayette Square's 1860s and 1870s Italianate and Second Empire
            mansions contain the most historically significant staircases in St.
            Louis — some with chestnut or walnut elements that are now
            irreplaceable. We hand-strip every component, bring the right
            chemistry to each wood species, and never use dip tanks that could
            destroy 160-year-old joinery.
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
            What makes Lafayette Square staircases different
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-5 text-base leading-relaxed"
          >
            <p>
              Lafayette Square is the oldest intact neighborhood in St. Louis,
              developed primarily between the 1860s and 1880s by the city's
              commercial and professional elite. The architecture is Italianate
              and Second Empire — styles that demanded elaborate interior
              woodwork as a matter of social standing. The staircases in these
              homes were not afterthoughts. They were centerpieces, often rising
              three or four stories, featuring grand newel posts, elaborate
              balustrades, and wood species that were chosen for their beauty as
              much as their strength.
            </p>
            <p>
              The wood in Lafayette Square staircases predates the
              standardization of Douglas fir as the dominant interior millwork
              species. American chestnut was still common — before the chestnut
              blight of the early 20th century eliminated it from North American
              forests. Black walnut appears in newel posts and railings of the
              larger homes. Some staircases combine species: a walnut newel post
              with fir spindles, or chestnut treads with painted risers.
              Identifying the species correctly before any work begins is
              essential, because each wood requires different chemistry and
              handling.
            </p>
            <p>
              The age of these staircases also means that the finish history is
              longer and more complex than anything found in later
              neighborhoods. Some Lafayette Square staircases have been
              refinished multiple times over 160 years — with shellac, oil
              varnish, polyurethane, and paint each leaving their own layers.
              Working through those layers without damaging the wood beneath
              requires patience and a thorough understanding of historic finish
              chemistry.
            </p>
            <p>
              Many Lafayette Square homes are on the National or Missouri
              historic register, which imposes documentation and
              material-matching requirements on any restoration work. We have
              experience working within those guidelines and can provide the
              documentation that preservation review bodies require.
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
            Every component of your Lafayette Square staircase
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
                Lafayette Square treads may be chestnut, walnut, or fir —
                sometimes a combination across a single staircase if repairs
                were made at different periods. We identify the species on each
                tread before proposing any chemistry, because chestnut and
                walnut respond very differently to strippers than fir does. The
                goal is to strip completely without raising the grain or
                introducing moisture damage, then finish in a way that is
                appropriate to the age and significance of the wood.
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
                The spindles in Lafayette Square mansions are among the most
                elaborate in the city — multiple turned profiles, sometimes with
                carved details at the capital. They are removed individually and
                stripped by hand in the shop. Dip tanks are never used. The
                caustic chemistry in a dip tank would destroy the hide glue at
                the base of each spindle — joints that have held for 160 years
                and, with proper care, will hold for another 160. We preserve
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
                Newel Posts
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Lafayette Square newel posts are often the most significant
                single piece of woodwork in the entire house — massive walnut or
                chestnut columns, carved and paneled, sometimes six feet tall at
                the landing. We strip them in place, working section by section
                with tools sized to each carved profile. Where walnut is the
                species, the color that emerges after stripping is
                extraordinary. We take the time these posts deserve.
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
                Curved handrails in Lafayette Square homes are often in walnut
                or chestnut — wide, heavily profiled, and built to a standard of
                material quality that is simply unavailable today. Stripping
                them requires patience and chemistry appropriate to the species.
                We finish them with products that protect the wood without
                obscuring its color or figure, and that are reversible for homes
                where preservation standards require it.
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
            EPA-Certified Lead-Safe Work in Lafayette Square Homes
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-4 leading-relaxed"
          >
            <p>
              Lafayette Square homes predate the 1978 lead paint ban by nearly a
              century, and the finish layers on their staircases can contain
              lead at multiple levels — original 19th-century oil-based
              finishes, subsequent repaintings, and mid-20th century updates. We
              are an EPA-certified lead-safe firm and have extensive experience
              managing lead removal in historically significant homes where
              surface preservation is as important as safety.
            </p>
            <p>
              Our lead-safe process meets EPA RRP requirements: full
              containment, wet-method stripping where required, and proper
              disposal documentation. For historic register properties, we can
              coordinate our protocols with the requirements of your
              preservation body. Certification is provided before work begins,
              and we discuss re-occupancy and scheduling with every household.
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
            "The walnut newel post was buried under so many layers of paint that
            the carving had nearly disappeared. After Sue's team stripped it,
            the detail came back completely — every leaf and panel. I had no
            idea what was under there. Neither did the previous three owners,
            apparently."
          </blockquote>
          <p
            style={{ color: "#6B5E55" }}
            className="text-sm uppercase tracking-widest"
          >
            — Eleanor &amp; James R., Missouri Avenue, Lafayette Square
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
                Do you refinish staircases in Lafayette Square?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes. Lafayette Square is a neighborhood we've worked in for
                decades. The staircases here are among the oldest in St. Louis
                and require a thoughtful, careful approach — which is exactly
                how we work.
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
                My Lafayette Square staircase may have chestnut or walnut — does
                that change the process?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes, in important ways. American chestnut, which went virtually
                extinct after the blight of the early 20th century, is now
                irreplaceable. Walnut is still available but expensive. Both
                species respond differently to strippers and stains than fir
                does, and both deserve extraordinary care. We identify the wood
                species before proposing any approach and adjust our chemistry
                and technique accordingly.
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
                My home is on the historic register — do you have experience
                with preservation requirements?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes. We have worked on historic register properties and
                understand the documentation and material-matching requirements
                that preservation standards impose. We can provide
                before-and-after documentation, discuss reversibility of
                finishes where required, and work within the guidelines set by
                the Missouri State Historic Preservation Office or your local
                preservation review body.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Lafayette Square staircase."
        subtext="Call (314) 367-6054 or request a free estimate online. We've been working on St. Louis's most historically significant staircases since 1989."
      />
    </>
  );
}
