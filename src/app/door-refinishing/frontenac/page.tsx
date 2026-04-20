import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Frontenac Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped door refinishing in Frontenac, MO. Pre-war estate mahogany and oak entry doors, interior door suites restored by Sue Wheeler — 36 years experience, EPA Certified Lead Removal.",
};

export default function FrontenacDoorRefinishingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wood Refinishing by Sue Wheeler, LLC",
    url: "https://suewheelerstl.com",
    telephone: "(314) 367-6054",
    areaServed: {
      "@type": "City",
      name: "Frontenac",
      containedInPlace: {
        "@type": "State",
        name: "Missouri",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6362,
      longitude: -90.4068,
    },
    description:
      "Hand-stripped door refinishing for Frontenac's pre-war estates and Colonial homes. Mahogany, oak, and whole-house interior door suites. EPA Certified Lead Removal. 36 years in business.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you refinish doors in Frontenac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sue Wheeler has refinished doors in Frontenac across a wide range of the neighborhood's housing stock — from pre-war estate entry doors in mahogany and old-growth oak to the solid-wood Colonial entries of the post-war homes. Frontenac's combination of estate and Colonial construction means the work varies considerably, and Sue assesses each project individually.",
        },
      },
      {
        "@type": "Question",
        name: "My Frontenac estate home has a mahogany entry door — what is involved in refinishing that?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mahogany entry doors from Frontenac's pre-war estates are excellent refinishing candidates. The species takes a rich, deep finish and ages gracefully when properly maintained. Sue removes the door, strips it completely by hand in her shop — never a dip tank, which would damage the glue joints — applies appropriate stain, and finishes it for exterior exposure. The door is returned and rehung once fully cured.",
        },
      },
      {
        "@type": "Question",
        name: "Can you refinish all the interior doors in my Frontenac home at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Whole-house interior door refinishing is not uncommon in Frontenac — the better homes have solid-wood doors throughout, and refinishing them as a suite produces a consistent look across the home. Sue works through the home in a logical sequence, typically removing and refinishing doors in batches so the house remains functional throughout the project.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          { name: "Door Refinishing", url: "https://suewheelerstl.com/door-refinishing" },
          { name: "Frontenac", url: "https://suewheelerstl.com/door-refinishing/frontenac" },
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
            Door Refinishing · Frontenac, MO
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
              color: "#2A2421",
            }}
          >
            Door Refinishing in <em>Frontenac</em>
          </h1>
          <p
            className="text-lg mb-8 leading-relaxed"
            style={{ color: "#6B5E55" }}
          >
            Frontenac's established estates and Colonial homes carry solid-wood
            doors — mahogany entry panels, old-growth oak suites, and interior
            door sets that run throughout entire floors. Sue Wheeler refinishes
            them by hand, preserving the character of each door through a
            process that cannot be shortcut.
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
            What makes Frontenac door refinishing different
          </h2>
          <div className="space-y-5" style={{ color: "#6B5E55" }}>
            <p className="text-base leading-relaxed">
              Frontenac is an established affluent suburb with a housing stock
              that ranges from pre-war estates built in the 1920s and 1930s to
              post-war Colonial and custom construction from the 1950s through
              the 1980s. That range means the woodwork varies considerably from
              home to home — which is why Sue assesses each project individually
              rather than applying a standard approach across the neighborhood.
            </p>
            <p className="text-base leading-relaxed">
              The older estate homes have the most significant entry doors:
              substantial paneled mahogany or old-growth oak with period
              hardware, often with sidelights and detailed surrounds. These are
              statement doors that define the character of the property.
              Refinishing them requires patience and precision — both in the
              stripping, which must be complete without damaging the profiles,
              and in the finish application, which must be even across the panel
              geometry.
            </p>
            <p className="text-base leading-relaxed">
              The post-war Colonial homes in Frontenac have solid-wood
              construction throughout — quality that reflects the neighborhood's
              standards even in its more modest stock. Interior door suites in
              the better Frontenac homes run throughout the entire house, and
              refinishing them as a set is a natural project for a home being
              updated or prepared for sale.
            </p>
            <p className="text-base leading-relaxed">
              Pre-war Frontenac homes are pre-1978 by definition, and many
              post-war homes are as well. Lead paint is the standard assumption
              for any home in the neighborhood built before 1978. Sue holds EPA
              RRP Certification and applies full protocol on every applicable
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Service section */}
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
            Door refinishing services for Frontenac homes
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
                Estate mahogany entry doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                The paneled mahogany entry doors on Frontenac's pre-war estates
                are among the finest residential woodwork in the St. Louis area.
                They strip cleanly when handled properly, reveal a rich
                interlocked grain, and take finish beautifully. Sue removes the
                door from its frame, strips it completely in her shop, and
                returns it finished and rehung — preserving every original
                detail of the profile and hardware.
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
                Old-growth oak entry doors
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Frontenac's early Colonial homes were fitted with solid
                old-growth oak entry doors — dense, tight-grained wood that is
                no longer commercially available. Under layers of paint or
                weathered finish, these doors are typically in exceptional
                structural condition. Stripping and refinishing them is almost
                always the right choice over replacement with new-growth lumber.
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
                Whole-house interior door suites
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Interior door suites in Frontenac's better homes are worth
                refinishing as a set — the consistency of finish across every
                door in the house is part of what makes a home feel complete.
                Sue works through interior door projects in organized batches,
                removing and refinishing a group at a time so the house remains
                functional throughout. Stain color and sheen are matched across
                the entire suite.
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
                Shop stripping and rehang process
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Every door refinishing project follows the same process: the
                door is removed from its hinges, the opening is secured, and the
                door is brought to the shop for stripping. Shop stripping
                produces better results than working in place — better light,
                better positioning, and no risk of drips or dust entering living
                spaces. The door is returned and rehung once fully cured. The
                home is never left unsecured overnight.
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
            EPA Certified Lead Removal — required in Frontenac's pre-1978 homes
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "#6B5E55" }}
          >
            Frontenac's pre-war estates and many of its post-war homes were
            built before the 1978 federal lead paint ban. Any firm disturbing
            painted surfaces in these homes must be EPA RRP Certified. Sue
            Wheeler holds that certification and has applied it to hundreds of
            projects across the St. Louis area over 36 years.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#6B5E55" }}>
            Full protocol on every applicable project: HEPA containment, wet
            stripping methods to prevent airborne dust, sealed disposal of all
            stripped material, and written documentation at completion. Clients
            in Frontenac's pre-war homes should expect this as a standard part
            of the process.
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
            "Our 1938 home on Lindbergh has a paneled mahogany entry door with
            original hardware that we assumed was beyond saving. Sue stripped
            it, repaired a small area of surface checking, and finished it in a
            deep walnut tone. It looks the way it must have looked when the
            house was new. We have since had her do every interior door on the
            main floor."
          </blockquote>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#A65D37" }}
          >
            Homeowner, Lindbergh Boulevard, Frontenac
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
                Do you refinish doors in Frontenac?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Sue Wheeler has refinished doors in Frontenac across a wide
                range of the neighborhood's housing stock — from pre-war estate
                entry doors in mahogany and old-growth oak to the solid-wood
                Colonial entries of the post-war homes. Frontenac's combination
                of estate and Colonial construction means the work varies
                considerably, and Sue assesses each project individually.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                My Frontenac estate home has a mahogany entry door — what is
                involved in refinishing that?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Mahogany entry doors from Frontenac's pre-war estates are
                excellent refinishing candidates. The species takes a rich, deep
                finish and ages gracefully when properly maintained. Sue removes
                the door, strips it completely by hand in her shop — never a dip
                tank, which would damage the glue joints — applies appropriate
                stain, and finishes it for exterior exposure. The door is
                returned and rehung once fully cured.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "#2A2421" }}
              >
                Can you refinish all the interior doors in my Frontenac home at
                once?
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#6B5E55" }}
              >
                Yes. Whole-house interior door refinishing is not uncommon in
                Frontenac — the better homes have solid-wood doors throughout,
                and refinishing them as a suite produces a consistent look
                across the home. Sue works through the home in a logical
                sequence, typically removing and refinishing doors in batches so
                the house remains functional throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        heading="Ready to restore your Frontenac doors?"
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
