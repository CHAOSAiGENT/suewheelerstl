import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Central West End St. Louis | Sue Wheeler",
  description:
    "Wood refinishing in St. Louis's Central West End. Pre-1900 architecture, pocket doors, original millwork. EPA Certified. Historic district eligible. Sue Wheeler.",
};


const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/neighborhoods/central-west-end",
  telephone: "+13143676054",
  areaServed: {
    "@type": "Neighborhood",
    name: "Central West End",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6461,
      longitude: -90.2649,
    },
  },
};

export default function CentralWestEndPage() {
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
            Wood Refinishing in the Central West End
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Pre-1900 architecture, pocket doors, original millwork, and 100+
            years of finish that needs to come off. Sue Wheeler has been working
            here for her entire 36-year career.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto ">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            The Central West End is one of St. Louis's oldest and most
            architecturally intact neighborhoods. Most of the homes here were
            built between 1880 and 1920 — a period when builders used old-growth
            oak, chestnut, walnut, and fir as a matter of course. That wood is
            denser, tighter-grained, and harder than anything available new
            today.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            It also has 100 to 140 years of finish on it. Some of those layers
            are lead paint. Some are shellac. Some are decades of wax and dirt
            over a finish that should have been stripped a generation ago.
            That's what we do.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has been working in the Central West End for her entire
            career. She knows the pocket doors hidden in the walls of these
            houses, the back staircases that servants once used, the butler's
            pantry built-ins that survived three kitchen renovations. She's seen
            most of it.
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
            What We Do Most Often in the Central West End
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            CWE homes are full-service architectural woodwork jobs. Rarely is it
            just one door or one piece. More often it's a staircase that needs
            the treads, spindles, newel post, and railing done together — or a
            set of pocket doors on every floor, or a dining room with a built-in
            hutch and picture rail and wainscoting that all need to match.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Pocket door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                CWE row houses and single-family homes were built with pocket
                doors as a standard feature. Most are original fir or oak, still
                in good condition under failed finish. We remove, hand-strip,
                refinish in our shop, and reinstall. The hardware stays intact.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Staircase refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                The grand staircases in CWE homes are statement pieces. Treads,
                risers, turned spindles, carved newel posts, continuous
                railings. All of it done by hand — dipping would destroy the
                glue joints in the spindles and raise the grain across the
                treads.
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
                Dining room hutches, library bookcases, butler's pantry
                built-ins, picture rails, wainscoting, crown molding. These
                pieces came with the house. They can't be matched with new
                materials — not in species, not in density, not in profile. We
                restore them.
              </p>
            </li>
          </ul>
          <p className="text-[#6B5E55] font-sans leading-relaxed mt-6">
            Every job begins with a free estimate. Sue assesses the wood in
            person, identifies what's under the current finish, notes any
            repairs or EPA-required lead abatement, and gives you a direct
            answer on what it will take.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/door-refinishing/pocket-door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Pocket Door Refinishing →
            </Link>
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
            Historic District & EPA Requirements
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            The Central West End is a{" "}
            <strong>Certified Local Historic District</strong>. Homes here
            qualify for historic preservation review, and Sue's hand-strip
            method is compliant with the Secretary of the Interior's Standards
            for Rehabilitation.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            If you own a home in the Central West End and are planning a
            significant restoration, call before you start. The timing of when
            work is completed matters for which tax year the credit applies.
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
              <strong>EPA note:</strong> The vast majority of homes in the
              Central West End predate 1978 — most predate 1940. EPA RRP
              regulations require a Certified Lead Removal for any refinishing
              work that disturbs lead paint. Sue Wheeler is EPA Certified. Her
              process includes proper containment, HEPA vacuuming, and
              documentation — protecting your family and keeping your project
              compliant.
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
            From a Central West End Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We bought a 1905 house on Westminster and the staircase was in
              rough shape — painted over, spindles chipping, the newel post
              completely matte. Sue stripped everything by hand, matched the
              stain to the original fir floors, and refinished the entire
              staircase. It looks like it did when the house was new."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, Westminster Place, Central West End
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
            Get a Free Estimate for Your Central West End Home
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
            She's been refinishing woodwork in the Central West End for over 36
            years. She knows these houses. She'll tell you what's under the
            current finish, what it's worth saving, and what it will cost to do
            it right.
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
