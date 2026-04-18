import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Lafayette Square Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Lafayette Square, St. Louis. Expert hand-stripping for Italianate and Second Empire homes — St. Louis's oldest surviving residential neighborhood. EPA Certified. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/lafayette-square",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Lafayette Square",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6143,
      longitude: -90.2175,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish doors in Lafayette Square?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lafayette Square is one of our most active neighborhoods. The Italianate and Second Empire homes here — many built before the Civil War — have doors in old-growth walnut, chestnut, and white oak that are among the finest we work on anywhere in St. Louis. We refinish front doors, interior door sets, French doors, and pocket doors throughout Lafayette Square. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What types of doors are common in Lafayette Square homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lafayette Square is the oldest surviving residential neighborhood in St. Louis, with many homes built in the 1850s through 1880s in Italianate and Second Empire styles. Front doors tend to be substantial — often with transom lights, sidelites, and elaborate millwork surrounds. The wood is typically old-growth walnut, chestnut, or white oak, species that were used as standard building materials in mid-19th century St. Louis before they became scarce. Interior doors are often paneled walnut or chestnut with elaborate raised profiles consistent with the Italianate vocabulary.",
      },
    },
    {
      "@type": "Question",
      name: "My Lafayette Square home was built before 1870. Is it safe to refinish the doors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when done by an EPA Certified contractor following proper lead-safe protocols. Homes built before 1870 predate even the earliest lead paint regulations, meaning virtually every painted surface contains lead. Sue Wheeler is an EPA Certified Lead Removal and has worked on pre-Civil War era homes throughout her 36-year career. Her process includes full containment, HEPA filtration, wet methods, and documented cleanup for every project on a pre-1978 home.",
      },
    },
  ],
};

export default function LafayetteSquareDoorRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Door Refinishing",
            url: "https://suewheelerstl.com/door-refinishing",
          },
          {
            name: "Lafayette Square",
            url: "https://suewheelerstl.com/door-refinishing/lafayette-square",
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
            Door Refinishing — Lafayette Square
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Lafayette Square.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Lafayette Square is St. Louis's oldest surviving residential
            neighborhood — Italianate and Second Empire homes built in the 1850s
            through 1880s in old-growth walnut and chestnut. There's nothing
            like these doors anywhere else in the city. We've been refinishing
            them for 36 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Door Estimate
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
            The oldest doors in St. Louis
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Lafayette Square is the oldest intact residential neighborhood in
              St. Louis. Development began in the 1840s and continued through
              the 1880s, producing a neighborhood of Italianate townhouses,
              Second Empire mansions, and brick row houses that still stands
              largely as it was built. Many of the homes here predate the Civil
              War. Some predate the transcontinental railroad. The doors that
              came with them are among the oldest original architectural
              woodwork still in use in the entire region.
            </p>
            <p>
              The wood used in mid-19th century St. Louis construction reflects
              what was still abundant at the time: American black walnut,
              American chestnut, white oak, and some Douglas fir for more
              utilitarian applications. Walnut and chestnut were used freely as
              building materials — not as luxury woods, simply as what was
              available in abundance from the forests of Missouri, Illinois,
              Kentucky, and Tennessee. Today, American chestnut is functionally
              extinct from the chestnut blight that swept through eastern
              forests in the early 1900s. The chestnut in Lafayette Square's
              doors cannot be replaced. It can only be maintained.
            </p>
            <p>
              That's the responsibility these homes carry, and it's why the work
              done on them matters. A door in a Lafayette Square Italianate
              townhouse isn't just a moveable surface — it's a piece of wood
              that was cut before the Civil War from a tree species that no
              longer exists. Dipping it in a chemical tank, or attacking it with
              an orbital sander, or painting it over rather than stripping it,
              is an irreversible act. We don't do any of those things.
            </p>
            <p>
              We hand-strip every door. The board-up method means the door comes
              to our shop, where temperature and humidity are controlled and the
              surface preparation can be done with the care these pieces of wood
              require. The result, when we're done, is a door that looks the way
              it did in 1865 — and will for another generation if it's
              maintained properly.
            </p>
          </div>
        </div>
      </section>

      {/* Door types */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What we work on in Lafayette Square
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Italianate and Second Empire front doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The entry doors on Lafayette Square's townhouses and mansions
                are some of the most architecturally significant woodwork we see
                anywhere. Tall paneled doors — often eight feet or taller — in
                old-growth walnut or white oak, with elaborate surround
                millwork, transom lights, and original hardware. These doors
                require careful stripping to preserve the profile details in the
                raised panels and the character of the surrounding millwork. We
                assess the entry holistically: door slab, frame, casing, and
                transom together.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Pocket doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Lafayette Square's larger homes are filled with pocket doors —
                parlor to dining room, library to study, front hall to rear.
                These are typically walnut or oak panels with elaborate raised
                profiles consistent with the Italianate and Second Empire
                vocabularies. Many are still on their original hardware, which
                we preserve. The doors are pulled from the wall pocket,
                hand-stripped, finished in our shop, and returned. Pocket doors
                are one of the defining features of this neighborhood's interior
                architecture, and restoring them is among the most satisfying
                work we do.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior door sets
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Interior doors in Lafayette Square homes are often walnut or
                chestnut — paneled in the same Italianate vocabulary as the
                exterior, with matching casing profiles throughout. When these
                have been painted over, the quality of the wood underneath is
                consistently surprising. Chestnut in particular strips
                beautifully — it has a fine, even grain that holds stain evenly
                and presents a surface that's unmistakably different from any
                wood in use today.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Historic district compliance
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Lafayette Square is a designated historic district. Sue
                Wheeler's hand-strip method is compliant with the Secretary of
                the Interior's Standards for Rehabilitation — the standard
                required for federal and state historic preservation tax
                credits. If you're undertaking a qualifying rehabilitation
                project, the work needs to meet those standards. Call before you
                start so we can coordinate with your project timeline and
                documentation requirements.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/door-refinishing/pocket-door-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Pocket Door Refinishing →
            </Link>
            <Link
              href="/historic-preservation"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Historic Preservation Guide →
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
            Pre-Civil War homes, pre-1978 paint — handled correctly
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Lafayette Square homes were built before there was any regulatory
              awareness of lead's hazards. Every painted surface in these homes
              should be treated as lead-bearing until tested otherwise — and in
              practice, most are. The EPA's RRP regulations require that any
              refinishing work disturbing paint in a pre-1978 home be performed
              by an EPA Certified Lead Removal.
            </p>
            <p>
              Sue Wheeler is EPA Certified. Her process includes full
              containment of the work area, HEPA filtration, wet methods to
              minimize dust generation, and complete documented cleanup. You
              receive a record of the work for your property file. This is the
              only way we work on these homes — not as a compliance checkbox,
              but because it's what the work actually requires when done
              correctly.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-2xl mx-auto">
          <blockquote
            className="text-xl text-[#2A2421] leading-relaxed mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontStyle: "italic",
            }}
          >
            "Our front door was the first thing guests saw — and it was
            embarrassing. Sue refinished it in a week. Now it looks like it came
            from the 1890s because it did, and it shows."
          </blockquote>
          <p className="text-sm font-sans text-[#6B5E55]">
            — Homeowner, Lafayette Square
          </p>
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
                Do you refinish doors in Lafayette Square?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. Lafayette Square is one of our most active neighborhoods.
                The Italianate and Second Empire homes here have doors in
                old-growth walnut, chestnut, and white oak that are among the
                finest we work on anywhere in St. Louis. We refinish front
                doors, interior door sets, pocket doors, and French doors
                throughout Lafayette Square. Call (314) 367-6054 for a free
                estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                What types of doors are common in Lafayette Square homes?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Lafayette Square is the oldest surviving residential
                neighborhood in St. Louis, with many homes built in the 1850s
                through 1880s. Front doors tend to be tall and substantial —
                old-growth walnut or white oak with elaborate surround millwork.
                Interior doors are often paneled walnut or chestnut with raised
                Italianate profiles. Pocket doors are nearly universal in the
                larger townhouses.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                My home was built before 1870. Is it safe to refinish the doors?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes, when done by an EPA Certified contractor following proper
                lead-safe protocols. Sue Wheeler is EPA Certified and has worked
                on pre-Civil War era homes throughout her 36-year career. Every
                project on a pre-1978 home includes containment, HEPA
                filtration, wet methods, and documented cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Lafayette Square doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
