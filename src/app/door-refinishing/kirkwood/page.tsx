import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Kirkwood Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped door refinishing in Kirkwood, MO. Victorian, Craftsman, and pocket doors restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function KirkwoodDoorRefinishingPage() {
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
      "Hand-stripped door refinishing for Kirkwood's Victorian and Craftsman homes. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish doors in Kirkwood?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has been refinishing doors in Kirkwood for over 36 years. The neighborhood's Victorian and Craftsman homes have exceptional original woodwork, and Kirkwood is one of her most active repeat-client neighborhoods — often working with multiple generations of the same family.",
        },
      },
      {
        "@type": "Question",
        name: "My Kirkwood Craftsman bungalow has the original fir door — is it worth restoring?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Almost certainly yes. Old-growth Douglas fir — the species used in Kirkwood's bungalows — is denser, tighter-grained, and more dimensionally stable than any new-growth lumber available today. Under layers of paint, that wood is typically in excellent structural condition. Stripping it reveals grain quality that simply cannot be replicated with new materials.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle lead paint on Kirkwood doors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kirkwood's pre-1978 housing stock makes lead paint the standard assumption, not the exception. Sue is EPA RRP Certified and follows full containment protocol: HEPA filtration, wet methods to suppress dust, proper bagging and disposal of all stripped material, and written documentation. The door is removed and stripped in her shop, then returned and rehung.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Door Refinishing", href: "/door-refinishing" },
          { name: "Kirkwood", href: "/door-refinishing/kirkwood" },
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
            Door Refinishing · Kirkwood, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Door Refinishing in <em>Kirkwood</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Kirkwood's Victorian cottages and Craftsman bungalows contain
            original fir doors that have been painted over for decades. Sue
            Wheeler strips them by hand — never a dip tank — and returns them to
            the grain and warmth the house was built with.
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
            What makes Kirkwood door refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Kirkwood was incorporated in 1865 — one of Missouri's oldest
              suburbs — and its housing stock reflects that age. Victorian
              cottages from the 1870s sit alongside Craftsman bungalows from the
              1910s and 1930s. The common thread across all of them is
              old-growth Douglas fir: tight, dense, slow-grown lumber that was
              the standard building material of its era and is no longer
              commercially available.
            </p>
            <p className="text-base leading-relaxed">
              Those original doors — entry doors, interior doors, pocket doors
              in the Victorian interiors — were built from that same old-growth
              stock. Over a century of repainting has buried the grain under
              layers of latex and oil paint, often five or six coats deep. The
              wood underneath is typically still in exceptional structural
              condition. It just needs to be uncovered.
            </p>
            <p className="text-base leading-relaxed">
              Kirkwood is one of Sue's most active neighborhoods, and has been
              for decades. She has worked in Kirkwood homes across multiple
              generations of the same families — restoring the same house twice,
              or refinishing woodwork for a homeowner whose parents were clients
              years earlier. That kind of continuity comes from results that
              hold up.
            </p>
            <p className="text-base leading-relaxed">
              Because Kirkwood's homes are predominantly pre-1978, lead paint is
              the practical baseline — not the exception. Every door project
              here involves full EPA RRP protocol. Sue is certified, equipped,
              and methodical about containment, disposal, and documentation.
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
            Door refinishing services for Kirkwood homes
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
                Craftsman bungalow entry doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Kirkwood's Craftsman bungalows typically have simple paneled fir
                entry doors with period hardware. The forms are restrained —
                flat or slightly raised panels, minimal decoration — but the
                material is excellent. These doors strip cleanly, take stain
                evenly, and look remarkable when the grain is revealed. Sue
                works around original hardware rather than removing it
                unnecessarily.
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
                Victorian entry and interior doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Victorian-era homes in Kirkwood have more ornate entries —
                paneled doors with molded profiles, sometimes with sidelights or
                transoms. Interior door suites from this period often run
                throughout the entire house. Sue refinishes single doors or
                entire sets, stripping each one individually by hand for a
                consistent result across the home.
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
                Pocket doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Pocket doors are common in Kirkwood's Victorian interiors — they
                were the standard way to divide parlors, sitting rooms, and
                dining rooms. Most have been painted in place many times and
                often stick in their tracks. Sue strips pocket doors by hand, in
                place or removed from the pocket depending on access, and
                addresses the hardware and track function as part of the
                process.
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
                The board-up method: shop stripping and rehang
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Every door refinishing project follows the same process: the
                door is removed from its hinges, the opening is secured with a
                temporary board, and the door is transported to the shop for
                stripping. Shop conditions allow for more thorough work than
                in-place stripping. Once stripped, refinished, and cured, the
                door is returned and rehung. The home is never left unsecured
                overnight.
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
            EPA Certified Lead Removal — required in most Kirkwood homes
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            If your Kirkwood home was built before 1978 — which describes the
            majority of homes in the neighborhood — federal law requires that
            any firm performing refinishing that disturbs painted surfaces be
            EPA RRP Certified. Sue Wheeler holds that certification and has
            applied it to hundreds of Kirkwood projects over 36 years.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Full protocol on every pre-1978 door project: HEPA vacuum
            containment, wet stripping methods to prevent airborne dust, sealed
            disposal of all stripped material, and written documentation
            provided at project completion. No shortcuts. No assumptions that a
            particular layer is lead-free.
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
            "We have a 1912 bungalow on Woodbine and the front door had been
            painted so many times it barely closed properly. Sue stripped it,
            refinished it in a warm walnut stain, and rehung it — it's become
            the first thing guests comment on. We've since had her do all the
            interior doors on the main floor."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Woodbine Avenue, Kirkwood
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
                Do you refinish doors in Kirkwood?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has been refinishing doors in Kirkwood for over
                36 years. The neighborhood's Victorian and Craftsman homes have
                exceptional original woodwork, and Kirkwood is one of her most
                active repeat-client neighborhoods — often working with multiple
                generations of the same family.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Kirkwood Craftsman bungalow has the original fir door — is it
                worth restoring?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Almost certainly yes. Old-growth Douglas fir — the species used
                in Kirkwood's bungalows — is denser, tighter-grained, and more
                dimensionally stable than any new-growth lumber available today.
                Under layers of paint, that wood is typically in excellent
                structural condition. Stripping it reveals grain quality that
                simply cannot be replicated with new materials.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                How do you handle lead paint on Kirkwood doors?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Kirkwood's pre-1978 housing stock makes lead paint the standard
                assumption, not the exception. Sue is EPA RRP Certified and
                follows full containment protocol: HEPA filtration, wet methods
                to suppress dust, proper bagging and disposal of all stripped
                material, and written documentation. The door is removed and
                stripped in her shop, then returned and rehung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Kirkwood door?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
