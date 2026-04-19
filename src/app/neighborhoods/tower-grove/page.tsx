import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Wood Refinishing — Tower Grove St. Louis | Sue Wheeler",
  description:
    "Wood refinishing in Tower Grove — mixed Victorian and bungalow housing, wainscoting, chair rails, original doors. Tower Grove East local historic district. Sue Wheeler.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/neighborhoods/tower-grove",
  telephone: "+13143676054",
  foundingDate: "1989",
  areaServed: {
    "@type": "City",
    name: "Tower Grove",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6011,
      longitude: -90.2553,
    },
  },
};

export default function TowerGrovePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Neighborhoods",
            url: "https://suewheelerstl.com/neighborhoods",
          },
          {
            name: "Tower Grove",
            url: "https://suewheelerstl.com/neighborhoods/tower-grove",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Wood Refinishing in Tower Grove
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Victorian brick homes from the 1880s alongside Craftsman bungalows
            from the 1910s and 20s — wainscoting, chair rails, and original
            doors that define every room. Sue Wheeler has worked here for
            decades.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Tower Grove is one of St. Louis's most architecturally mixed
            neighborhoods — Victorian brick homes from the 1880s and 1890s
            sitting alongside Craftsman bungalows and four-squares from the
            1910s and 20s. What they share is original interior woodwork:
            wainscoting, chair rails, original doors, and millwork that defines
            each room.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            The Tower Grove area also includes some of the most intact original
            exterior woodwork in the city. Front doors on these houses were
            built to last — solid wood, raised panels, often with transoms and
            sidelights. They've lasted. But they need maintenance.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked throughout Tower Grove for decades. She knows
            both the Victorian stock on the east side and the bungalow blocks
            closer to the park.
          </p>
        </div>
      </section>

      {/* What We Do Most Often */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What We Do Most Often in Tower Grove
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Tower Grove projects often center on room millwork — the
            wainscoting, chair rails, and door surrounds that give these houses
            their character — alongside door refinishing for both interior and
            exterior doors.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Both exterior and interior doors in Tower Grove homes are
                frequently original, frequently painted over, and frequently
                worth restoring. We remove, hand-strip, and refinish in our shop
                — returning the door ready to hang. For south- and west-facing
                exterior doors, we discuss finish durability and UV protection
                so the work lasts.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Room millwork
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Wainscoting and chair rail are defining features of Tower
                Grove's Victorian homes. When these surfaces are painted over or
                worn, refinishing them is a room-level transformation — not just
                a touch-up. Baseboards, crown molding, picture rails, and window
                casings are all part of this scope.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior door surrounds and casing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                The millwork around doors in these houses — the casing, the
                plinth blocks, the head detail — is often more elaborate than
                the doors themselves. We refinish them together so the result is
                visually coherent.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Door Refinishing →
            </Link>
            <Link
              href="/built-ins-and-millwork-refinishing/room-millwork/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Room Millwork Refinishing →
            </Link>
            <Link
              href="/built-ins-and-millwork-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Built-Ins &amp; Millwork Refinishing →
            </Link>
          </div>
        </div>
      </section>

      {/* Historic District */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Historic District Status and Tax Credits
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            The Tower Grove East neighborhood is a{" "}
            <strong>Local Historic District</strong>. Qualifying rehabilitation
            work may be eligible for the{" "}
            <strong>Missouri Historic Tax Credit (25–35%)</strong>. Properties
            individually listed on the National Register may also qualify for
            the <strong>Federal Historic Tax Credit (20%)</strong>.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Millwork and door refinishing can qualify as Qualified
            Rehabilitation Expenditures when the work is compliant with the
            Secretary of the Interior's Standards. Sue's hand-strip method meets
            that standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link
              href="/historic-preservation/historic-tax-credits/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Historic Tax Credits Guide →
            </Link>
            <Link
              href="/historic-preservation/st-louis-historic-districts/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              St. Louis Historic Districts Guide →
            </Link>
          </div>
          <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-4 rounded">
            <p className="text-[#2A2421] font-sans text-sm leading-relaxed">
              <strong>EPA note:</strong> Tower Grove homes built before 1978 —
              the majority of the housing stock — may contain lead paint in
              finish layers. EPA RRP regulations apply. Sue Wheeler is EPA
              Certified and handles lead-safe procedures on every pre-1978
              project.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            From a Tower Grove Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We had wainscoting throughout our first floor that had been
              painted over so many times you couldn't even see the detail
              anymore. Sue stripped it by hand and refinished it — we had no
              idea how much was under there. The dining room looks completely
              different now."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, Tower Grove
            </cite>
          </blockquote>
        </div>
      </section>

      {/* CTA text section */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Get a Free Estimate for Your Tower Grove Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a
              href="tel:3143676054"
              className="text-[#A65D37] font-semibold hover:underline"
            >
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll look at your doors, your wainscoting, your millwork — and
            tell you what it will take and what it will cost.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#A65D37] text-white font-sans font-medium px-6 py-3 rounded hover:bg-[#8f4f2e] transition-colors"
          >
            Request a Free Estimate →
          </Link>
          <p className="text-[#6B5E55] font-sans text-sm mt-6">
            EPA Certified Lead Removal. BBB A+ Accredited. Since 1989.
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
