import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Kirkwood Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped kitchen cabinet refinishing in Kirkwood, MO. Original Craftsman fir and oak cabinetry restored by Sue Wheeler — 36 years experience, EPA Certified.",
};

export default function KirkwoodCabinetRefinishingPage() {
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
      "Hand-stripped kitchen cabinet refinishing for Kirkwood's Craftsman and Victorian homes. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish kitchen cabinets in Kirkwood?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has been refinishing kitchen cabinets in Kirkwood for over 36 years. Craftsman-era built-in cabinetry in fir and oak is common in the neighborhood and responds exceptionally well to hand-stripping and restaining. Kirkwood is one of her most active neighborhoods for repeat clients.",
        },
      },
      {
        "@type": "Question",
        name: "My Kirkwood bungalow has original painted cabinets — can the natural wood be restored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, yes. The old-growth fir and oak used in Kirkwood's Craftsman kitchens accepts paint poorly over time — the wood telegraphs through — but strips cleanly and takes stain exceptionally well. Sue evaluates the cabinet box condition, the door and drawer front wood quality, and the existing paint layers before making a recommendation. If the wood is worth restoring, she will say so. If it is not, she will say that too.",
        },
      },
      {
        "@type": "Question",
        name: "How long does kitchen cabinet refinishing take in a typical Kirkwood kitchen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cabinet doors and drawer fronts are removed and taken to the shop for stripping, which minimizes disruption to the kitchen. The shop phase typically takes several days depending on the number of pieces and paint layers. The cabinet boxes are stripped and refinished in place. Total project time varies by kitchen size and complexity — Sue provides a realistic timeline during the estimate.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          {
            name: "Kitchen Cabinet Refinishing",
            href: "/kitchen-cabinet-refinishing",
          },
          {
            name: "Kirkwood",
            href: "/kitchen-cabinet-refinishing/kirkwood",
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
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#A65D37" }}
          >
            Kitchen Cabinet Refinishing · Kirkwood, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Kitchen Cabinet Refinishing in <em>Kirkwood</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Kirkwood's Craftsman bungalows were built with original fir and oak
            cabinetry that has been painted over rather than replaced. Sue
            Wheeler uncovers that wood — stripping doors and drawer fronts in
            the shop, restoring the cabinet boxes in place — and brings the
            kitchen back to what it was built to be.
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
            What makes Kirkwood cabinet refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Kirkwood's Craftsman-era kitchens — the 1910s through 1930s
              bungalows that make up a significant portion of the neighborhood —
              were built with original in-place cabinetry in fir or oak. Simple
              raised panels, face-frame construction, and proportions scaled to
              the modest kitchens of the era. The lumber used was old-growth,
              the same tight-grain stock used throughout these homes, and it is
              far superior to anything manufactured today.
            </p>
            <p className="text-base leading-relaxed">
              Over the decades, most of these kitchens have been painted — once
              or twice, sometimes more. The paint was often applied as a quick
              update rather than a considered choice, and it has accumulated
              unevenly on the panel edges, inside corners, and around the
              hardware. The wood under the paint is waiting.
            </p>
            <p className="text-base leading-relaxed">
              Kirkwood homeowners who are renovating increasingly choose to
              restore rather than replace. Ripping out original built-in
              cabinetry and installing box cabinets eliminates something
              irreplaceable. The proportions, the craftsmanship, the way the
              cabinetry is integrated into the room — none of that comes back
              with a standard renovation. Refinishing preserves all of it.
            </p>
            <p className="text-base leading-relaxed">
              Lead paint is the baseline assumption in Kirkwood's pre-1978
              kitchens. Sue is EPA RRP Certified and follows full containment
              protocol on every pre-1978 cabinet project.
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
            Cabinet refinishing services for Kirkwood kitchens
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
                Door and drawer front removal and shop stripping
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Every cabinet project starts with removing the doors and drawer
                fronts and transporting them to the shop. Shop conditions allow
                for thorough, even stripping that is not possible working in a
                confined kitchen space. Each piece is stripped individually and
                inspected before refinishing. The shop phase is where the
                quality of the final result is determined.
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
                Cabinet box restoration in place
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                While the doors and drawer fronts are in the shop, the cabinet
                boxes — the face frames, the interiors, the toe kicks — are
                stripped and refinished in place. This phase requires careful
                masking and methodical work in a working kitchen. Sue
                coordinates the timing so the kitchen is minimally disrupted and
                the boxes are ready when the doors return from the shop.
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
                Stain selection and color matching
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The goal on most Kirkwood cabinet projects is to reveal and
                enhance the natural wood rather than obscure it again with a
                heavy stain. Sue works with homeowners to select a tone that
                complements the existing woodwork in the home — door casings,
                baseboards, and any other natural wood in adjacent rooms. The
                kitchen does not need to match exactly, but it should feel like
                it belongs.
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
                Hardware assessment and rehang
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Original Craftsman hardware — simple bin pulls and knobs in
                nickel or brass — is worth preserving when it is intact and
                functional. Sue evaluates the existing hardware and notes what
                should be kept and what should be replaced. Doors and drawer
                fronts are rehung and adjusted for proper alignment and smooth
                operation before the project is considered complete.
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
            EPA Certified Lead Removal — required in most Kirkwood kitchens
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Kitchens in pre-1978 homes require particular care because lead
            paint in food preparation spaces is a health concern that goes
            beyond the standard renovation context. Sue is EPA RRP Certified and
            treats every pre-1978 kitchen project with full containment protocol
            — regardless of how many paint layers are present or whether the
            paint looks like it might be lead-free.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            HEPA filtration, wet stripping methods, sealed waste disposal, and
            written documentation are standard on every pre-1978 cabinet
            project. The kitchen is not returned to use until containment is
            removed and the space is confirmed clean.
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
            "We bought our 1922 bungalow on Taylor and the kitchen had been
            painted — I think four times. We almost demoed the cabinets. Sue
            convinced us to let her strip them first. The fir underneath is
            beautiful. We stained it a warm honey and now the kitchen feels like
            the rest of the house instead of an afterthought."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Taylor Avenue, Kirkwood
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
                Do you refinish kitchen cabinets in Kirkwood?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has been refinishing kitchen cabinets in
                Kirkwood for over 36 years. Craftsman-era built-in cabinetry in
                fir and oak is common in the neighborhood and responds
                exceptionally well to hand-stripping and restaining. Kirkwood is
                one of her most active neighborhoods for repeat clients.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Kirkwood bungalow has original painted cabinets — can the
                natural wood be restored?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                In most cases, yes. The old-growth fir and oak used in
                Kirkwood's Craftsman kitchens accepts paint poorly over time —
                the wood telegraphs through — but strips cleanly and takes stain
                exceptionally well. Sue evaluates the cabinet box condition, the
                door and drawer front wood quality, and the existing paint
                layers before making a recommendation. If the wood is worth
                restoring, she will say so. If it is not, she will say that too.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                How long does kitchen cabinet refinishing take in a typical
                Kirkwood kitchen?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Cabinet doors and drawer fronts are removed and taken to the
                shop for stripping, which minimizes disruption to the kitchen.
                The shop phase typically takes several days depending on the
                number of pieces and paint layers. The cabinet boxes are
                stripped and refinished in place. Total project time varies by
                kitchen size and complexity — Sue provides a realistic timeline
                during the estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Kirkwood kitchen cabinets?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
