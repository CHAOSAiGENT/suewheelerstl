import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "University City Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Staircase refinishing in University City, MO. Hand-strip restoration for Colonial, Tudor, and Prairie staircases in quartersawn oak and old-growth fir. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/staircase-refinishing/university-city",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "University City",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6601,
      longitude: -90.3085,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in University City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. University City staircases are among the most rewarding work we do — Colonial Revivals with formal turned-spindle stairs, Tudor homes with Gothic-influenced details, Prairie-style with horizontal emphasis. Quarter-sawn oak appears more frequently here than in purely fir neighborhoods. The wood is exceptional; the finish has usually not been touched since the mid-20th century. Call (314) 367-6054 for a free in-person estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My University City Colonial home has a formal staircase — how long does a project like that take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A formal Colonial staircase — turned spindles, substantial newel post, multiple treads — typically takes three to five days depending on scope. We're working in your primary circulation space, so we structure the project to minimize disruption and maintain safe passage through the home during the work. Sue will walk through the specific timeline during the estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My staircase has a mix of spindle styles from different eras — can you make them match?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can make the finish match consistently across different spindle profiles, but different species or turning styles will always read slightly differently — that's the nature of wood. What we can do is unify the color and sheen so the visual difference is minimal. If the goal is absolute uniformity, we'll discuss whether replacement of mismatched spindles makes more sense than finish work alone. Sue will give you an honest assessment at the estimate.",
      },
    },
  ],
};

export default function UniversityCityStaircaseRefinishingPage() {
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
            name: "University City",
            url: "https://suewheelerstl.com/staircase-refinishing/university-city",
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
            Staircase Refinishing — University City
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Staircase refinishing in <em>University City.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            University City has significant staircases — Colonial Revivals with
            formal turned-spindle stairs, Tudor homes with more
            Gothic-influenced details, Prairie-style designs with horizontal
            emphasis. Quarter-sawn oak appears more frequently here than in many
            St. Louis neighborhoods. The wood is exceptional. The finish has
            usually not been addressed since the mid-20th century.
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
            University City's staircases — a study in pre-war craftsmanship
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              University City's housing stock developed from roughly 1910
              through the 1940s, and the architectural variety is reflected in
              its staircases. Colonial Revival homes in the older sections have
              formal center-hall stairs — turned spindles, carved newel posts,
              wide treads designed to make an impression. Tudor Revival homes
              have heavier woodwork with more vertical emphasis, sometimes with
              Gothic-influenced newel post details. Prairie-influenced designs
              incorporate horizontal rails and simpler turning profiles
              consistent with that movement's aesthetic.
            </p>
            <p>
              What these staircases share is material: quartersawn oak appears
              more frequently in U City than in the primarily fir neighborhoods
              of the near south side. Quartersawn oak has a distinctive
              medullary ray pattern — a silver-fleck figure that runs across the
              face of the board — that is simply not available in modern lumber.
              When that wood has been obscured by decades of worn varnish or
              overpaint, stripping it back reveals something genuinely
              beautiful.
            </p>
            <p>
              The finish on most University City staircases has not been
              professionally addressed since the mid-20th century. What we
              typically find is a varnish that has yellowed and worn through on
              the treads, with spindles that may have been painted at some
              point. The structural condition of the wood is almost always
              excellent. The issue is the finish — and that is fixable.
            </p>
            <p>
              We hand-strip every staircase. Dip tanks destroy the glue joints
              at spindle bases and raise the grain on fir and oak alike. Every
              spindle, every tread, every inch of railing is done by hand — the
              same approach Sue has used for 36 years.
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
            Staircase work we do most in University City
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Colonial Revival formal staircases
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The formal Colonial staircases in U City are among the most
                architecturally significant woodwork in the St. Louis area.
                Turned spindles, substantial newel posts, broad treads with
                original nosing profiles. These are typically quartersawn oak or
                old-growth fir, and they reward a thorough refinishing with a
                result that reads as a genuine architectural feature rather than
                a background element.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Tudor and Gothic-detail newel posts and spindles
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Tudor Revival staircases often have more elaborate newel post
                details — carved elements, heavier proportions — alongside
                spindle profiles with a more vertical, Gothic-influenced
                character. Hand-stripping these elements requires careful work
                around the carved detail. We strip to bare wood without damaging
                the profile, then apply finish that shows the quartersawn figure
                rather than obscuring it.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Tread-only and selective refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                When a staircase is structurally sound but the treads are the
                primary concern — worn through the finish, showing raw wood in
                the foot-traffic path — we can address treads specifically. We
                will be honest about whether a tread-only refinish will read
                well alongside existing spindle and railing finish, or whether a
                full treatment will produce a better result.
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
                It is common in U City homes to find staircases where the treads
                are stained wood but the spindles have been painted — usually a
                mid-century update. Restoring the spindles to a stained finish
                to match the rest of the staircase involves careful
                hand-stripping of each spindle individually. The result unifies
                the staircase visually and recovers the wood that was always
                there.
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
            Lead paint in University City staircases — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              University City's pre-war homes were built and painted before lead
              was removed from residential paint in 1978. Any painted surface in
              a home built before 1978 should be treated as lead-positive until
              tested. Staircase spindles and railings — especially those that
              have been repainted multiple times — are particularly likely to
              contain lead in the lower paint layers.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Her
              process for staircase work in pre-1978 homes includes containment
              of the work area, HEPA filtration, wet methods to suppress dust
              during stripping, and full documented cleanup. She has been
              certified and operating under EPA RRP requirements since the
              regulations came into effect.
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
              "We have a 1928 Colonial on Delmar and the staircase hadn't been
              touched in forty years. Sue stripped the quartersawn oak spindles
              and treads and the result is remarkable — you can finally see the
              ray pattern in the wood. Worth every bit of the work."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Delmar Blvd., University City
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
                Do you refinish staircases in University City?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. University City staircases — Colonial, Tudor, Prairie — are
                some of the most rewarding work we do. The quarter-sawn oak and
                old-growth fir in these homes responds beautifully to hand-strip
                refinishing. Call (314) 367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My University City Colonial home has a formal staircase — how
                long does a project like that take?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                A formal Colonial staircase typically takes three to five days
                depending on scope — number of spindles, newel post complexity,
                whether the risers need addressing. We structure the project to
                maintain safe passage through the home during the work. Sue will
                walk through the specific timeline at the estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My staircase has a mix of spindle styles from different eras —
                can you make them match?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                We can unify the color and sheen across different spindle
                profiles so the visual difference is minimal. Different species
                or turning styles will always read slightly differently — that
                is the nature of wood — but consistent finish application goes a
                long way. If the goal is absolute uniformity, we will have an
                honest conversation about whether selective replacement makes
                more sense than finish work alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your University City staircase."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
