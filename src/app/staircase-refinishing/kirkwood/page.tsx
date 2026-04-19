import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Kirkwood Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing in Kirkwood, MO. Victorian turned spindles, Craftsman newel posts, old-growth fir — restored by Sue Wheeler, EPA Certified.",
};

export default function KirkwoodStaircaseRefinishingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
    telephone: "(314) 367-6054",
    areaServed: {
      "@type": "City",
      name: "Kirkwood",
      containedInPlace: {
        "@type": "State",
        name: "Missouri",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5834,
      longitude: -90.4068,
    },
    description:
      "Hand-stripped staircase refinishing for Kirkwood's Victorian and Craftsman homes. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish staircases in Kirkwood?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has been refinishing staircases in Kirkwood for over 36 years. Victorian and Craftsman-era staircases in the neighborhood are among the finest examples of period woodwork in the St. Louis metro, and Kirkwood is one of her most active neighborhoods for repeat and multi-generational clients.",
        },
      },
      {
        "@type": "Question",
        name: "My Craftsman bungalow has a simple staircase with square newel posts — is that typical?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, that is the defining Craftsman staircase form. Square newel posts, minimal ornamentation, and horizontal emphasis are hallmarks of the style. Simple does not mean lesser — these staircases were built with the same old-growth fir or quarter-sawn oak as their Victorian counterparts, and they strip and refinish beautifully. The restraint of the design becomes a strength when the natural wood is revealed.",
        },
      },
      {
        "@type": "Question",
        name: "Can you match the stain on my Kirkwood staircase to the rest of my woodwork?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stain matching is a standard part of the process. Sue evaluates the existing woodwork in your home — door casings, baseboards, built-ins — and works to bring the staircase into harmony with the established tone. Exact matches depend on species and condition, but a close, professional match is the goal on every project.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Staircase Refinishing", href: "/staircase-refinishing" },
          { name: "Kirkwood", href: "/staircase-refinishing/kirkwood" },
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
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#A65D37" }}
          >
            Staircase Refinishing · Kirkwood, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Staircase Refinishing in <em>Kirkwood</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Whether your Kirkwood home has Victorian turned spindles or
            Craftsman square newel posts, the staircase is built from old-growth
            wood that deserves to be seen. Sue Wheeler strips every spindle by
            hand — the only way to protect the glue joints that hold them in
            place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded text-white font-semibold"
              style={{ backgroundColor: "#11B2E8" }}
            >
              Request a Free Estimate
            </Link>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: "#2A2421" }}
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
            className="text-3xl mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            What makes Kirkwood staircase refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Kirkwood's age means its staircases span two distinct eras of
              craftsmanship. Victorian homes from the 1870s and 1880s have the
              ornate turned spindles, carved newel posts, and decorative
              brackets that defined the period. Craftsman bungalows from the
              1910s and 1930s replaced all of that with square forms,
              mission-style newel posts, and a deliberate simplicity that
              expressed the Arts and Crafts ethos. Both are old-growth. Both are
              worth restoring.
            </p>
            <p className="text-base leading-relaxed">
              What accumulates on Kirkwood staircases over a century of use is
              predictable: many coats of varnish, often a layer or two of paint
              from a mid-century update, traffic wear on treads, and finish that
              has darkened and dulled far beyond its original tone. The wood
              under all of that is typically in better condition than the finish
              suggests.
            </p>
            <p className="text-base leading-relaxed">
              Spindles are the critical element. Dip-tank stripping — the
              shortcut method some shops use — dissolves the glue at the base of
              turned spindles, causing structural loosening that worsens over
              time. Every spindle in a Kirkwood staircase is stripped by hand,
              which takes longer and costs more, but leaves the joinery intact.
              That is the only acceptable approach.
            </p>
            <p className="text-base leading-relaxed">
              Because virtually all of Kirkwood's residential housing stock
              predates 1978, lead paint protocol applies to nearly every
              staircase project. Sue is EPA RRP Certified and follows full
              containment on every project where paint removal is involved.
            </p>
          </div>
        </div>
      </section>

      {/* Service-specific section */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl mb-10"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Staircase refinishing services for Kirkwood homes
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                  color: "#2A2421",
                }}
              >
                Victorian staircases with turned spindles
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Kirkwood's Victorian homes often have elaborate turned spindle
                profiles — rings, coves, and tapers that require patient hand
                work to strip without losing the crisp edges. Sue uses chemical
                strippers, heat tools, and hand scrapers in combination, working
                each spindle individually. The newel posts in these homes are
                often carved or paneled and receive the same careful attention.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                  color: "#2A2421",
                }}
              >
                Craftsman staircases with square newel posts
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The square newel posts and simple spindles of Kirkwood's
                Craftsman bungalows strip efficiently and finish cleanly. The
                restraint of the design works in its favor — the natural grain
                of fir or quarter-sawn oak becomes the visual element, and the
                geometry reads clearly when the finish is right. These
                staircases look exceptional with a warm oil-based finish that
                lets the wood breathe.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                  color: "#2A2421",
                }}
              >
                Tread and riser restoration
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Stair treads take the hardest wear in any house and show it —
                worn finish, scuff marks, and darkened wood in the center of the
                tread are standard on a century-old staircase. Sue assesses each
                tread individually. Where the wood is sound, she strips and
                refinishes. Where treads have been worn thin or damaged, she
                identifies the right approach rather than papering over the
                problem with finish.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                  color: "#2A2421",
                }}
              >
                Stain matching to existing woodwork
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                In most Kirkwood homes, the staircase does not exist in
                isolation — it connects to door casings, baseboards, built-ins,
                and other woodwork throughout the house. Sue evaluates the full
                context and works to bring the staircase into harmony with what
                exists. Where an exact match is not achievable, she selects the
                closest professional-grade option and explains the reasoning
                clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{ backgroundColor: "#F8F6F1", borderColor: "#11B2E8" }}
        className="py-14 px-6 border-l-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            EPA Certified Lead Removal — standard on Kirkwood staircase projects
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Kirkwood's pre-1978 homes are the norm, not the exception. When
            stripping painted staircases in these homes, federal EPA RRP rules
            require a certified firm and documented containment procedures. Sue
            Wheeler has held that certification throughout her 36-year career
            and applies the full protocol on every pre-1978 project.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Staircase lead protocol includes HEPA containment across the work
            area, wet stripping to suppress airborne particles, sealed waste
            disposal, and written documentation provided at project completion.
            Family members and pets are kept clear of the work area throughout
            the process.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl leading-relaxed italic mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            "Our 1895 Victorian on Adams has a staircase with ornate turned
            spindles that had been painted white — twice. Sue stripped every one
            of them by hand and refinished the whole staircase in a rich amber.
            It looks like the day the house was built. I genuinely could not
            believe it was the same staircase."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Adams Avenue, Kirkwood
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl mb-10"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Do you refinish staircases in Kirkwood?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has been refinishing staircases in Kirkwood for
                over 36 years. Victorian and Craftsman-era staircases in the
                neighborhood are among the finest examples of period woodwork in
                the St. Louis metro, and Kirkwood is one of her most active
                neighborhoods for repeat and multi-generational clients.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Craftsman bungalow has a simple staircase with square newel
                posts — is that typical?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes, that is the defining Craftsman staircase form. Square newel
                posts, minimal ornamentation, and horizontal emphasis are
                hallmarks of the style. Simple does not mean lesser — these
                staircases were built with the same old-growth fir or
                quarter-sawn oak as their Victorian counterparts, and they strip
                and refinish beautifully. The restraint of the design becomes a
                strength when the natural wood is revealed.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Can you match the stain on my Kirkwood staircase to the rest of
                my woodwork?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Stain matching is a standard part of the process. Sue evaluates
                the existing woodwork in your home — door casings, baseboards,
                built-ins — and works to bring the staircase into harmony with
                the established tone. Exact matches depend on species and
                condition, but a close, professional match is the goal on every
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Kirkwood staircase?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
