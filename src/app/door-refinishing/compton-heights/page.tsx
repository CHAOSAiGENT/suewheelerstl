import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Compton Heights Door Refinishing St. Louis | Sue Wheeler",
  description:
    "Door refinishing in Compton Heights, St. Louis. Expert hand-stripping for Arts & Crafts and foursquare homes with white oak and old-growth fir doors. EPA Certified. (314) 367-6054.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/door-refinishing/compton-heights",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Neighborhood",
    name: "Compton Heights",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6073,
      longitude: -90.2384,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish doors in Compton Heights?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Compton Heights is a neighborhood we work in regularly. The large Arts and Crafts and foursquare homes here have substantial white oak and fir doors — both interior and exterior — that are excellent candidates for hand-strip refinishing. Call (314) 367-6054 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What types of doors are common in Compton Heights homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compton Heights was developed from the late 1890s through the 1920s as a neighborhood of large single-family homes. The Arts and Crafts and Foursquare styles that dominate here typically feature heavy front doors in white oak or quartersawn oak, with simple paneling consistent with the Craftsman aesthetic. Interior doors are often five-panel or flat-panel fir or oak. Many homes have original oak built-ins and millwork that benefit from matching refinishing across interior doors and woodwork together.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match the stain on my existing Compton Heights woodwork when refinishing a door?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stain matching across existing millwork is standard for us on interior door projects. We assess the existing tones in person and formulate to match. If an exact match isn't achievable — sometimes original finishes have shifted color significantly over a century — we'll tell you before we start and discuss options. For quartersawn oak, stain matching is particularly nuanced because of the ray fleck pattern, and we have extensive experience with it.",
      },
    },
  ],
};

export default function ComptonHeightsDoorRefinishingPage() {
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
            name: "Compton Heights",
            url: "https://suewheelerstl.com/door-refinishing/compton-heights",
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
            Door Refinishing — Compton Heights
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Door refinishing in <em>Compton Heights.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl mb-8">
            Compton Heights was built for permanence — large single-family Arts
            and Crafts homes with white oak doors, quartersawn millwork, and
            craftsmanship that still holds up. The finish doesn't always. We
            restore it.
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
            Arts &amp; Crafts homes and the wood they were built with
          </h2>
          <div className="space-y-4 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Compton Heights was developed between the late 1890s and the 1920s
              as a neighborhood of substantial single-family homes on generous
              lots. The dominant architectural styles — Craftsman bungalow,
              American Foursquare, Colonial Revival, and various Arts and Crafts
              variants — share a philosophy: materials should be honest, joinery
              visible, and woodwork prominent. The doors in these homes reflect
              that.
            </p>
            <p>
              White oak and quartersawn oak were the preferred species for
              interior doors and millwork in Compton Heights's better homes.
              Quartersawn oak in particular has a ray fleck pattern — the
              silver, almost iridescent grain lines created when the log is cut
              perpendicular to the growth rings — that cannot be replicated by
              any other species or milling method. It was fashionable for the
              Arts and Crafts movement specifically because it celebrated the
              character of the material. That's still visible in the interior
              doors of most Compton Heights homes, under whatever finish has
              accumulated in the decades since.
            </p>
            <p>
              Douglas fir was the working-class counterpart — used for doors in
              the more modest Foursquares and bungalows throughout the
              neighborhood. Old-growth fir from this era has tight grain that
              finishes beautifully and holds up better than new-growth fir in
              every measurable way.
            </p>
            <p>
              We hand-strip all of it. The quartersawn oak in particular
              benefits enormously from careful hand work — stripping agents have
              to be applied and removed without letting moisture sit on the
              surface long enough to raise the grain or dull the ray fleck
              pattern. This is detail work, and it's what separates a
              hand-stripped finish from anything done by chemical dipping.
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
            What we do most in Compton Heights
          </h2>
          <div className="space-y-6">
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Front door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The Arts and Crafts aesthetic called for front doors that were
                substantial, simple, and well-crafted — often with divided-lite
                glass panels in the upper portion and heavy solid panels below.
                These doors are typically oak or fir, and the scale of a Compton
                Heights single-family home means they're larger than most. We
                refinish the door slab and frame together when possible;
                mismatched finishes between slab and frame look wrong and age
                the entire entry.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior oak doors and millwork matching
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                The quartersawn oak interior doors in Compton Heights homes are
                often part of a larger woodwork system — door casings,
                wainscoting, built-in bookcases, mantelpieces — that all need to
                read together. We do door refinishing as part of that larger
                picture when the project calls for it. Stain matching across
                existing millwork is standard work for us, including the nuances
                of matching across quartersawn and flat-sawn oak in the same
                room.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Board-up method for all removable doors
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                For most Compton Heights door projects, we remove the door and
                transport it to our shop. The controlled environment —
                consistent temperature and humidity — produces a better finish
                cure than any in-place work. No chemical fumes in your home. No
                sanding dust on your floors. The door goes out, comes back
                finished, gets rehung.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/door-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              All Door Refinishing Services →
            </Link>
            <Link
              href="/built-ins-and-millwork-refinishing"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Built-Ins &amp; Millwork Refinishing →
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
            Most Compton Heights homes have <em>lead paint on their doors.</em>
          </h2>
          <div className="space-y-3 text-[#6B5E55] font-sans text-base leading-relaxed">
            <p>
              Compton Heights homes were built between approximately 1895 and
              1930 — decades before lead was removed from residential paint in
              1978. Many of the painted surfaces in these homes, including any
              doors that have been painted rather than stained, will contain
              lead. EPA RRP regulations require that any refinishing work
              disturbing those painted surfaces be performed by an EPA Certified
              Lead Removal.
            </p>
            <p>
              Sue Wheeler is EPA Certified. Her process includes full
              containment, HEPA filtration, wet methods to control dust
              generation, and documented cleanup. You receive a completion
              record for your property file. This applies to every job on a
              pre-1978 home, without exception.
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
            "The quartersawn oak in our 1912 home had been painted over in the
            1970s — doors, casings, built-ins. Sue stripped everything by hand
            and the ray fleck pattern came back perfectly. We had no idea what
            was under there."
          </blockquote>
          <p className="text-sm font-sans text-[#6B5E55]">
            — Homeowner, Compton Heights
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
                Do you refinish doors in Compton Heights?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Yes. The Arts and Crafts and foursquare homes here have
                substantial white oak and fir doors that respond beautifully to
                hand-strip refinishing. We work in Compton Heights regularly.
                Call (314) 367-6054 for a free in-person estimate.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                What types of doors are common in Compton Heights homes?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Front doors are typically heavy oak or fir in simple Craftsman
                paneling, often with divided-lite glass upper sections. Interior
                doors are commonly quartersawn oak five-panel or flat-panel
                designs, or fir in the more modest homes. Many are still in
                their original openings and original condition beneath the
                finish layers.
              </p>
            </div>
            <div>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-2"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Can you match stain across my existing Compton Heights woodwork?
              </h3>
              <p className="text-[#6B5E55] font-sans text-base leading-relaxed">
                Stain matching across existing millwork is standard for us on
                interior door projects. We assess the existing tones in person
                and formulate to match. For quartersawn oak, matching is nuanced
                because of the ray fleck pattern — but we have extensive
                experience with it and will tell you honestly what's achievable
                before we start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Compton Heights doors."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
