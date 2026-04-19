import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "University City Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Kitchen cabinet refinishing in University City, MO. Restore original built-in fir and oak cabinetry in U City's pre-war homes. Hand-strip, no dip tanks. EPA Certified. Wood Refinishing by Sue Wheeler. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/university-city",
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
      name: "Do you refinish kitchen cabinets in University City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. University City's pre-war kitchens often have original built-in cabinetry in fir or oak with simple raised panels — many have been painted during mid-century updates but the underlying wood is intact and worth restoring. We work in University City regularly. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "My U City kitchen has been updated in the 1970s — are there still original cabinets worth restoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, yes. 1970s kitchen updates in U City frequently involved painting over or adding door fronts to original built-in cabinetry rather than ripping it out. The box and frame construction from the 1910s–1940s is typically still there behind the update. Sue will assess what you have in person — she can tell within a few minutes whether the underlying cabinet is original and whether it is a good refinishing candidate.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help me decide whether my University City cabinets are refinish or replace candidates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That is exactly what the estimate is for. Sue will look at the construction, the species, the condition of the wood, and the extent of any damage or previous work. She will give you a straight answer: if the cabinets are worth refinishing, she will tell you what that involves. If they are not — if the wood is compromised or the construction is not worth preserving — she will tell you that too. No obligation, no pressure toward a particular answer.",
      },
    },
  ],
};

export default function UniversityCityCabinetRefinishingPage() {
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
            name: "University City",
            url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/university-city",
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
            Kitchen Cabinet Refinishing — University City
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen cabinet refinishing in <em>University City.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            University City's pre-war kitchens often have original built-in
            cabinetry in fir or oak — simple raised panels, solid construction,
            wood that has lasted a century and can last another. Many have been
            painted during mid-century updates. Homeowners renovating these
            kitchens typically want to recover the original character, not
            replace it with something new.
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
            U City's original kitchens — what's typically there and what's worth
            keeping
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              University City's pre-war homes were built with kitchens that were
              functional rather than decorative — built-in cabinetry in
              old-growth fir or oak with simple raised-panel doors and basic
              hardware. These kitchens were updated repeatedly through the 20th
              century: painted in the 1950s, updated again in the 1970s,
              sometimes fitted with laminate door fronts in the 1980s.
            </p>
            <p>
              What often survives underneath those updates is the original
              cabinet box and frame construction — solid, built to last, and
              made of wood that is denser and more stable than anything in a new
              kitchen installation. The question is whether the original
              character has been preserved or obscured.
            </p>
            <p>
              University City homeowners who are actively renovating their homes
              tend to want the original character back. They have bought into a
              pre-war neighborhood for a reason, and a refinished kitchen in
              period-appropriate wood reads correctly against the rest of the
              house in a way that new cabinetry typically does not.
            </p>
            <p>
              We assess each kitchen individually. Some original U City cabinets
              are excellent refinishing candidates — solid construction, intact
              wood, finish that can be stripped and replaced. Others have been
              modified to the point where refinishing is not the right answer.
              Sue will tell you which situation you have before any work begins.
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
            Cabinet work we do most in University City
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Stripping paint from original built-in cabinetry
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The most common U City kitchen project is stripping paint from
                original fir or oak built-ins and returning them to a stained
                and finished natural wood surface. Multiple layers of paint —
                sometimes four or five applications over seventy years — can be
                hand-stripped to reveal the original wood. The result is a
                kitchen that reads as part of the house rather than a renovation
                layered on top of it.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Stain and finish on natural wood cabinets
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                For cabinets that are already stained but showing worn or
                yellowed finish, a full strip and refinish restores the depth
                and clarity of the wood. We work with the existing stain color
                or adjust it — darkening, lightening, or changing the tone —
                depending on what you want the kitchen to look like when it is
                finished.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Assessment and honest evaluation
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Not every U City kitchen cabinet is a refinishing candidate.
                Some have been modified so significantly that restoration is
                impractical. Some are in species or configurations that will not
                produce the result the homeowner wants. Sue assesses each
                kitchen and gives a straight answer — not every estimate results
                in a project, and that is fine.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Matching existing finishes in partial restorations
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Some U City kitchens have a mix of original built-ins alongside
                later additions. Matching the finish of the original cabinetry
                on newer additions — or bringing the newer additions into visual
                alignment with the originals — requires careful color and sheen
                matching. We handle that as part of the project scope.
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
            Lead paint in U City kitchens — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Kitchen cabinets in University City homes built before 1978 almost
              certainly contain lead paint in at least some of the accumulated
              layers — particularly in the lower coats applied before 1978.
              Kitchens were painted frequently, and lead was the standard
              pigment throughout the first half of the 20th century.
            </p>
            <p>
              Sue Wheeler is an EPA Certified Lead Removal contractor. Cabinet
              refinishing in pre-1978 homes follows full EPA RRP protocol:
              containment of the kitchen space, HEPA filtration, wet methods to
              suppress dust during stripping, and documented cleanup
              verification. The process is thorough, and the documentation is
              yours to keep.
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
              "Our kitchen had been painted over three times. Sue stripped the
              fir cabinets back to bare wood and finished them in a medium
              walnut stain. It looks like the kitchen the house was supposed to
              have all along. The whole project took four days."
            </p>
            <cite className="block text-sm font-sans text-[#6B5E55] not-italic">
              — Homeowner, Westgate Ave., University City
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
                Do you refinish kitchen cabinets in University City?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. U City's pre-war kitchens often have original built-in
                cabinetry in fir or oak with simple raised panels — many have
                been painted but the underlying wood is worth recovering. We
                work in University City regularly. Call (314) 367-6054 for a
                free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My U City kitchen has been updated in the 1970s — are there
                still original cabinets worth restoring?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Often, yes. 1970s updates in U City frequently involved painting
                over original built-ins rather than removing them. The original
                box and frame is frequently still intact behind the update. Sue
                can assess what you have in person within a few minutes of
                looking at the kitchen — no guesswork, no pressure.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Can you help me decide whether my University City cabinets are
                refinish or replace candidates?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                That is exactly what the estimate is for. Sue will look at the
                construction, the species, the condition of the wood, and the
                extent of any damage or previous work, and give you a straight
                answer. If the cabinets are worth refinishing, she will tell you
                what that involves. If they are not, she will tell you that too.
                No obligation either way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your University City kitchen cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
