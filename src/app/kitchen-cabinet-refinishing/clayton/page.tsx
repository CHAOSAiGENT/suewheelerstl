import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Clayton Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Kitchen cabinet refinishing in Clayton, St. Louis. Hand-strip restoration for original wood cabinetry in pre-war and post-war homes. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/clayton",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "City",
    name: "Clayton",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6459,
      longitude: -90.3262,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in Clayton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clayton is one of our regular service areas. We work in both the pre-war homes with original wood cabinetry and in post-war and newer homes where cabinet refinishing may be the right choice depending on what's there. We evaluate each kitchen individually rather than making assumptions based on the home's age or neighborhood. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my Clayton kitchen cabinets are worth refinishing vs. replacing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key factors are the underlying material (solid wood vs. MDF or particleboard), the structural condition of the boxes and joints, and the extent of previous finish work. We assess in person and tell you honestly what we find. If your cabinets are solid wood in sound condition with refinishable doors and drawer fronts, refinishing is almost always a better outcome than replacement — better material, better proportions, and less disruption. If they're not, we'll tell you that too.",
      },
    },
    {
      "@type": "Question",
      name: "Can you change the color of my Clayton kitchen cabinets when you refinish them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Color change is a standard part of cabinet refinishing. Whether you want to move from a dark stain to a lighter one, from paint to natural wood, or from natural wood to a painted finish, we can accomplish that through the refinishing process. The key is proper preparation — stripping the existing finish completely before applying the new one, which is what produces a durable, professional result rather than a painted-over paint job.",
      },
    },
  ],
};

export default function ClaytonKitchenCabinetRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Kitchen Cabinet Refinishing",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing",
          },
          {
            name: "Clayton",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/clayton",
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
            Kitchen Cabinet Refinishing — Clayton
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen cabinet refinishing in <em>Clayton.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Clayton's kitchens span eras — from pre-war homes with original
            solid wood cabinetry worth restoring to post-war and newer homes
            where refinishing may or may not be the right answer. We evaluate
            each kitchen honestly and tell you what we find.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Cabinet Estimate
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
            What makes Clayton cabinet refinishing different
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Clayton is where cabinet refinishing crosses eras in a way that
              requires real evaluation rather than assumptions. The pre-war
              homes on the residential streets — Colonials, Tudors, and brick
              homes developed from the 1910s through the 1930s — have original
              kitchen cabinetry built to the same standard as the rest of the
              house: solid wood construction, real joinery, and material quality
              that holds up to refinishing as well as it did when it was
              installed.
            </p>
            <p>
              Post-war Clayton is different. Homes built from the 1950s onward
              may have solid wood cabinets that are genuine candidates for
              refinishing, or they may have original stock that is past its
              useful life, or cabinets that have been replaced with products
              that aren't suitable for stripping. We don't make assumptions in
              either direction. Clayton homeowners are sophisticated — they
              don't need a sales pitch, they need accurate information about
              what's in their kitchen and what refinishing can realistically
              deliver.
            </p>
            <p>
              The honest evaluation matters here more than in most markets. A
              Clayton homeowner who replaces cabinets that could have been
              beautifully refinished has spent more money for a worse result.
              One who refinishes cabinets that should have been replaced has
              wasted the investment. We look carefully, report what we find, and
              let you decide.
            </p>
            <p>
              When refinishing is the right choice — and in the pre-war homes it
              very often is — the result preserves both the material quality and
              the proportions of the original kitchen. New stock cabinets in a
              1920s Colonial kitchen almost never look right. Original
              cabinetry, properly restored, does.
            </p>
          </div>
        </div>
      </section>

      {/* Service-specific section */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Cabinet work we do most in Clayton
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Pre-war original wood cabinetry
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Clayton's 1910s–1930s Colonials and Tudors were built with
                kitchen cabinetry in solid fir or oak — simple paneled doors,
                real drawer construction, and hardware that was standard for the
                era. When this cabinetry has been painted over, often multiple
                times, it is almost always worth stripping back to wood. The
                material underneath is old-growth and holds finish better than
                modern replacement cabinets. We remove doors and drawer fronts,
                refinish them in our shop, and reinstall. The boxes stay in
                place.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Post-war solid wood cabinets
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Many mid-century Clayton homes have solid wood kitchen cabinets
                — often a simple Shaker or transitional profile — that were
                originally stained or painted and have held up structurally.
                When the boxes are sound and the doors are solid wood in
                refinishable condition, refinishing produces a result that
                replacing with new stock of equivalent quality would cost
                significantly more to achieve. We assess each kitchen and give
                you the honest comparison.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Color change refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Changing cabinet color — dark stain to light, paint to natural
                wood, natural wood to a painted finish — is a standard scope of
                work. The key is complete removal of the existing finish before
                the new one goes on. A color change that skips the stripping
                step produces a painted-over paint job, not a refinished
                cabinet. We strip completely, then apply the new finish properly
                so it lasts.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Honest assessment of what not to refinish
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Not every cabinet is a refinishing candidate. MDF and
                particleboard construction cannot be stripped and refinished in
                the same way solid wood can. Cabinets with significant moisture
                damage, failed joinery, or delaminating substrate should be
                replaced rather than refinished. We tell you which is which.
                That honesty is part of what we offer.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/kitchen-cabinet-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              All Kitchen Cabinet Refinishing Services →
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
            Lead paint in Clayton kitchens — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Pre-war Clayton kitchens were painted with products that contained
              lead — a standard material in residential paint until it was
              banned in 1978. Even post-war kitchens that have been repainted
              multiple times may have lead-bearing layers beneath the surface.
              Kitchen refinishing disturbs those surfaces and generates fine
              dust; EPA RRP regulations require certified contractors for this
              work in pre-1978 homes.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Her
              cabinet refinishing process includes containment of the kitchen
              work area, HEPA filtration, wet methods to minimize airborne dust
              during stripping, and documented cleanup that produces a
              completion record for your property file. For Clayton homeowners
              managing historic homes carefully, that documentation is a useful
              asset.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-2 border-[#A65D37] pl-6">
            <p
              className="text-xl text-[#2A2421] italic leading-relaxed mb-4"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
            >
              "We had two contractors tell us to just replace the kitchen
              cabinets. Sue came out, looked at them carefully, and said the
              wood was worth keeping. She was right. The refinished cabinets
              look better than anything we priced in new cabinetry at the same
              budget, and the proportions are exactly right for the house. That
              honest assessment was worth everything."
            </p>
            <cite className="text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Westmoreland Place, Clayton
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
                Do you refinish kitchen cabinets in Clayton?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Clayton is one of our regular service areas. We work in
                both pre-war homes with original solid wood cabinetry and in
                post-war homes where refinishing may be the right choice
                depending on what's there. Call (314) 367-6054 for a free
                in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                How do I know if my Clayton kitchen cabinets are worth
                refinishing vs. replacing?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The key factors are the underlying material, the structural
                condition, and the extent of previous work. We assess in person
                and tell you honestly what we find. If your cabinets are solid
                wood in sound condition, refinishing is almost always a better
                outcome than replacement. If they're not, we'll tell you that
                too.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Can you change the color of my Clayton kitchen cabinets when you
                refinish them?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Color change — from dark to light, from paint to natural
                wood, from stained to painted — is a standard scope of work. The
                critical step is stripping the existing finish completely before
                applying the new one. That's what produces a durable result
                rather than a painted-over paint job. We don't skip that step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Clayton kitchen cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
