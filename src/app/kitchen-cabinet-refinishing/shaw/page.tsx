import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Shaw Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Kitchen cabinet refinishing in Shaw's 1890–1920 Victorian, Four Square, and Craftsman homes. Preserving original character instead of replacing with new. EPA Certified. Free estimate — (314) 367-6054.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Kitchen Cabinet Refinishing",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing",
  },
  {
    name: "Shaw",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/shaw",
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
  description:
    "Hand-stripping and refinishing kitchen cabinets in Shaw Victorian, Four Square, and Craftsman homes since 1989. EPA Certified Lead Renovator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Shaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sue Wheeler has been refinishing kitchen cabinets in Shaw for over 36 years. The neighborhood's mix of Victorian, Four Square, and Craftsman kitchens — with original fir and mid-century updates — is exactly the kind of varied work we handle every day.",
      },
    },
    {
      "@type": "Question",
      name: "My Shaw kitchen has a mix of cabinet styles — can you make everything look cohesive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Creating visual coherence across different cabinet styles and eras is one of our core specialties. We strip and refinish the original pieces, apply a consistent finish across newer additions, and the result looks like a single intentional kitchen rather than a patchwork of updates.",
      },
    },
    {
      "@type": "Question",
      name: "What's the turnaround time for a full kitchen cabinet refinishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnaround depends on kitchen size, the condition of the existing finish, and whether a color change is involved. Most full kitchen refinishing projects take one to two weeks from start to finish. Sue gives you a realistic timeline during the free estimate so you know exactly what to expect.",
      },
    },
  ],
};

export default function ShawKitchenCabinetPage() {
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
            className="text-xs uppercase tracking-widest font-sans mb-4"
            style={{ color: "#A65D37" }}
          >
            Kitchen Cabinet Refinishing — Shaw
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen Cabinet Refinishing in <em>Shaw</em>
          </h1>
          <p
            className="text-lg font-sans mb-8 max-w-2xl"
            style={{ color: "#6B5E55" }}
          >
            Shaw homeowners renovating their historic homes want to preserve the
            character that makes the neighborhood worth living in. We refinish
            original kitchen cabinetry by hand — restoring it without the cost
            or disruption of replacement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-white font-sans font-medium rounded"
              style={{ backgroundColor: "#11B2E8" }}
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 px-8 py-4 font-sans font-medium rounded border"
              style={{ color: "#2A2421", borderColor: "#2A2421" }}
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
            className="text-3xl md:text-4xl mb-8"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What makes Shaw kitchen cabinets worth refinishing
          </h2>
          <div className="space-y-6 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Shaw is one of St. Louis's most architecturally diverse historic
              neighborhoods — a mix of Victorian rowhouses, American Four
              Squares, and Craftsman bungalows built between 1890 and 1920. That
              diversity extends into the kitchens. Cabinet styles vary
              considerably from house to house: some still have their original
              fir cabinetry intact, some have mid-century updates, and some are
              a combination of original and replacement pieces installed over
              decades.
            </p>
            <p>
              What those kitchens share is that the homeowners renovating them
              today are specifically choosing Shaw because of its historic
              character. They want the craftsmanship and material quality of a
              century-old home — not a kitchen that looks like it was ordered
              from a big-box store catalog. Installing new IKEA-style cabinets
              in a Shaw Four Square would be a mismatch. Refinishing what's
              already there keeps the kitchen true to the house.
            </p>
            <p>
              The original wood in Shaw kitchens is old-growth fir — denser,
              tighter-grained, and more dimensionally stable than anything
              available in new construction today. Once stripped of whatever has
              been applied to it over the years, it is typically in excellent
              condition and ready to hold a lasting new finish. At 60 to 80
              percent less than cabinet replacement, refinishing is the obvious
              choice for Shaw homeowners who care about what they have.
            </p>
            <p>
              We remove doors and drawer fronts, take them to our shop for
              careful hand-stripping, and return them finished and ready to
              hang. Cabinet boxes are refinished in place. The result is a
              kitchen that looks intentional from floor to ceiling — historic
              character intact, finish renewed.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What we do with your kitchen cabinets
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Door &amp; Drawer Front Refinishing
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Every door and drawer front is removed and brought to our shop
                for hand-stripping. We never use dip tanks — they raise the wood
                grain and destroy finish adhesion. By stripping by hand, we
                leave the wood surface clean and flat, ready to accept a durable
                polyurethane topcoat that will hold up to daily kitchen use.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Cabinet Box &amp; Frame Work
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                The cabinet boxes and face frames that stay in your kitchen are
                stripped, sanded, and refinished in place. We protect your
                countertops, floors, and appliances throughout the process. The
                finish is continuous from box to frame to door — no transitions,
                no inconsistency.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Color Changes
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Whether you want to transition from painted to stained wood,
                change paint colors, or shift stain tones entirely, we handle
                full color changes starting with a complete strip of the
                existing finish. Many Shaw homeowners use a refinishing project
                as the opportunity to reset the kitchen's color story while
                preserving the original construction.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Stain Matching
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                When a Shaw kitchen has original cabinets alongside a later
                addition, matching the stain across different wood species and
                eras requires skill and experience. Sue custom-blends stains
                on-site, tests on an inconspicuous area, and adjusts until the
                result is indistinguishable across the entire kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{
          backgroundColor: "#F8F6F1",
          borderLeftWidth: "4px",
          borderLeftStyle: "solid",
          borderLeftColor: "#11B2E8",
        }}
        className="py-14 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            EPA Certified for lead paint in Shaw's pre-1978 homes
          </h2>
          <div className="space-y-4 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Every home in Shaw was built before 1978, and virtually all of
              them contain lead paint — including on kitchen cabinets that have
              been painted and repainted over decades. Under EPA regulations,
              those homes are presumed to have lead paint, and any contractor
              disturbing that paint must follow specific containment and cleanup
              protocols.
            </p>
            <p>
              Sue Wheeler holds EPA Lead-Safe Certification, which is required
              by federal law for this type of work. Every Shaw cabinet
              refinishing project we complete follows full containment, cleanup,
              and disposal procedures. Your family stays protected, and every
              job is documented for any future inspection or disclosure
              requirement.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl md:text-2xl italic mb-6"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            "We were quoted $18,000 for new cabinets and nearly did it. Then we
            called Sue. She refinished everything for a fraction of that — and
            honestly the kitchen looks better than any new cabinets would have.
            The original fir has a warmth that you can't replicate."
          </blockquote>
          <p className="font-sans text-sm" style={{ color: "#6B5E55" }}>
            — James &amp; Carol M., homeowners, Shaw
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Do you refinish kitchen cabinets in Shaw?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Yes. Sue Wheeler has been refinishing kitchen cabinets in Shaw
                for over 36 years. The neighborhood's mix of Victorian, Four
                Square, and Craftsman kitchens — with original fir and
                mid-century updates — is exactly the kind of varied work we
                handle every day.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                My Shaw kitchen has a mix of cabinet styles — can you make
                everything look cohesive?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Yes. Creating visual coherence across different cabinet styles
                and eras is one of our core specialties. We strip and refinish
                the original pieces, apply a consistent finish across newer
                additions, and the result looks like a single intentional
                kitchen rather than a patchwork of updates.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                What's the turnaround time for a full kitchen cabinet
                refinishing?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Turnaround depends on kitchen size, the condition of the
                existing finish, and whether a color change is involved. Most
                full kitchen refinishing projects take one to two weeks from
                start to finish. Sue gives you a realistic timeline during the
                free estimate so you know exactly what to expect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Shaw cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
