import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — University City MO | Sue Wheeler",
  description:
    "Wood refinishing in University City — Tudor and Colonial Revival homes, deep original millwork, staircase restoration. Some local historic districts. Sue Wheeler.",
};


const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/neighborhoods/university-city",
  telephone: "+13143676054",
  areaServed: {
    "@type": "Neighborhood",
    name: "University City",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6624,
      longitude: -90.3115,
    },
  },
};

export default function UniversityCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neighborhoodSchema) }}
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
            Wood Refinishing in University City
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Tudor and Colonial Revival homes from the 1910s through 1930s —
            casement window surrounds, built-in bookcases flanking fireplaces,
            and staircases with heavy newel posts. Sue Wheeler has worked
            extensively in University City throughout her career.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            University City was developed rapidly in the 1910s through 1930s —
            the same period when the Tudor Revival and Colonial Revival styles
            were at their peak in St. Louis's inner-ring suburbs. The result is
            a neighborhood with some of the most architecturally coherent
            housing in the county: consistent lot sizes, front-loaded garages
            that came later, and interiors with original millwork that runs
            deep.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Tudor Revivals in U-City have casement windows with thick wood
            surrounds, built-in bookcases flanking fireplaces, and staircases
            with heavy newel posts and substantial railings. Colonial Revivals
            have paneled wainscoting, wide-plank flooring, and detailed door
            surrounds. Both styles relied on high-quality interior wood as a
            defining feature of the home.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked extensively in University City throughout her
            career.
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
            What We Do Most Often in University City
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            University City projects often involve staircases and built-ins —
            the signature elements of the Tudor and Colonial Revival homes that
            define much of the neighborhood.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Staircase refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Tudor and Colonial Revival staircases in U-City homes tend
                toward the substantial: heavy newel posts, continuous railings,
                and spindles that range from simple to turned and carved. We do
                the full scope — treads, risers, spindles, newel post, and
                railing — stripped and refinished together.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Built-ins and millwork
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Fireplace surrounds flanked by built-in bookcases, paneled
                wainscoting in entry halls, window seats with storage — these
                are defining features of U-City's best homes and they're
                irreplaceable. We restore them by hand.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Both the heavy exterior doors typical of Tudor architecture and
                the panel interior doors throughout these homes are frequently
                original and worth preserving.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/staircase-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Staircase Refinishing →
            </Link>
            <Link
              href="/built-ins-and-millwork-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Built-Ins &amp; Millwork Refinishing →
            </Link>
            <Link
              href="/door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Door Refinishing →
            </Link>
          </div>
        </div>
      </section>

      {/* Historic Status */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Historic Status
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Parts of University City have{" "}
            <strong>local historic district</strong> designation, and some
            structures are contributing resources to the National Register. If
            your home is in a designated area, qualifying rehabilitation work
            may be eligible for historic tax credits. Confirm with the Missouri
            SHPO.
          </p>
          <div className="mb-6">
            <Link
              href="/historic-preservation/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Historic Preservation Guide →
            </Link>
          </div>
          <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-4 rounded">
            <p className="text-[#2A2421] font-sans text-sm leading-relaxed">
              <strong>EPA note:</strong> U-City's pre-1978 homes — the majority
              of the housing stock — may have lead paint in their finish layers.
              EPA RRP regulations require a Certified Lead Removal for work
              that disturbs lead paint. Sue Wheeler is EPA Certified and follows
              proper containment procedures on every applicable project.
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
            From a University City Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We have a 1928 Tudor and the staircase had been painted — every
              spindle, the railing, the newel post. Sue stripped it all by hand
              and refinished it in a tone that matched the floors. It completely
              changed the character of the entry hall."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, University City
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
            Get a Free Estimate for Your University City Home
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
            She'll look at your staircase, your built-ins, your millwork — and
            tell you what they need and what it will cost.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#A65D37] text-white font-sans font-medium px-6 py-3 rounded hover:bg-[#8f4f2e] transition-colors"
          >
            Request a Free Estimate →
          </Link>
          <p className="text-[#6B5E55] font-sans text-sm mt-6">
            EPA Certified Lead Removal. Est. 1989. St. Louis Magazine —
            "Perfect Finish."
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
