import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing St. Louis | Sue Wheeler — Since 1989",
  description:
    "St. Louis's most trusted architectural wood refinisher. Hand-stripped, never dipped. EPA Certified. BBB A+. 36 years. Sue answers every call personally. (314) 367-6054.",
  openGraph: {
    title: "Wood Refinishing St. Louis | Sue Wheeler — Since 1989",
    description:
      "St. Louis's most trusted architectural wood refinisher. Hand-stripped, never dipped. EPA Certified. BBB A+. 36 years.",
    url: "https://suewheelerstl.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  description:
    "St. Louis's most trusted architectural wood refinisher. Hand-stripped, never dipped. EPA Certified. BBB A+. 36 years.",
  url: "https://suewheelerstl.com",
  telephone: "+13143676054",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5260 Washington Place",
    addressLocality: "St. Louis",
    addressRegion: "MO",
    postalCode: "63108",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "St. Louis",
  },
  foundingDate: "1989",
  hasCredential: ["EPA Certified Lead Renovator", "BBB A+ Accredited"],
  sameAs: [],
};

const services = [
  {
    title: "Kitchen Cabinets",
    description:
      "Painted, stained, or color-change. Hand-stripped back to bare wood and finished right.",
    href: "/kitchen-cabinet-refinishing",
  },
  {
    title: "Doors & Frames",
    description:
      "Front doors, interior doors, French doors, pocket doors. In shop or on-prem.",
    href: "/door-refinishing",
  },
  {
    title: "Staircases & Railings",
    description:
      "Treads, risers, spindles, newel posts, railings — the full scope, done properly.",
    href: "/staircase-refinishing",
  },
  {
    title: "Built-Ins & Millwork",
    description:
      "Hutches, buffets, bookcases, wainscoting, crown molding, mantels, chair rail.",
    href: "/built-ins-and-millwork-refinishing",
  },
  {
    title: "Commercial & Hospitality",
    description:
      "Bar tops, tabletops, wainscoting, booths. Off-hours scheduling. Maintenance contracts.",
    href: "/commercial-and-hospitality-refinishing",
  },
  {
    title: "Institutional & Historic Venues",
    description:
      "Concert halls, churches, universities, landmark buildings. EPA certified. Standards compliant.",
    href: "/institutional-refinishing",
  },
];

const testimonials = [
  {
    quote:
      "We were terrified someone would ruin the original staircase. Sue walked us through every step. The result is better than we could have imagined — and it looks exactly like it did in 1912.",
    attribution: "Homeowner, Central West End",
  },
  {
    quote:
      "We were quoted $40,000 for new cabinets. Sue refinished the originals for a fraction of that and they look brand new. I wish we'd called her five years ago.",
    attribution: "Homeowner, Webster Groves",
  },
  {
    quote:
      "Sue answered the phone herself, came out within two days, and the door was back on its hinges looking incredible inside of a week. That's just not how contractors work — except her.",
    attribution: "Homeowner, Lafayette Square",
  },
];

const neighborhoods = [
  "Central West End",
  "Lafayette Square",
  "Compton Heights",
  "Tower Grove",
  "Shaw",
  "Webster Groves",
  "Kirkwood",
  "Clayton",
  "University City",
  "Maplewood",
  "Ladue",
  "Frontenac",
  "Town & Country",
  "Chesterfield",
  "Ballwin",
];

const neighborhoodHrefs: Record<string, string> = {
  "Central West End": "/neighborhoods/central-west-end",
  "Lafayette Square": "/neighborhoods/lafayette-square",
  "Compton Heights": "/neighborhoods/compton-heights",
  "Tower Grove": "/neighborhoods/tower-grove",
  Shaw: "/neighborhoods/shaw",
  "Webster Groves": "/neighborhoods/webster-groves",
  Kirkwood: "/neighborhoods/kirkwood",
  Clayton: "/neighborhoods/clayton",
  "University City": "/neighborhoods/university-city",
  Maplewood: "/neighborhoods/maplewood",
  Ladue: "/neighborhoods/ladue",
  Frontenac: "/neighborhoods/frontenac",
  "Town & Country": "/neighborhoods/town-and-country",
  Chesterfield: "/neighborhoods/chesterfield",
  Ballwin: "/neighborhoods/ballwin",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Trust bar */}
      <TrustBar />

      {/* Hero */}
      <section className="py-20 md:py-28 px-6 bg-[#EBE6DE]">
        <div className="max-w-5xl mx-auto">
          <h1
            className="text-4xl md:text-6xl text-[#2A2421] mb-6 leading-tight max-w-3xl"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            St. Louis&rsquo;s architectural wood specialist —{" "}
            <em style={{ color: "#A65D37" }}>hand-stripped, never dipped.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans mb-8 max-w-xl leading-relaxed">
            Sue Wheeler has been refinishing the doors, staircases, cabinets, and
            built-ins of St. Louis&rsquo;s finest homes and landmark buildings since
            1989. When you call, Sue answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#2A2421] text-[#2A2421] text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#2A2421] hover:text-[#EBE6DE] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              <Phone size={14} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* Intro / Positioning */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            <em>The right way</em> to refinish architectural wood.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              There&rsquo;s a shortcut in this industry — a chemical dip tank that strips
              a door or cabinet in minutes. It raises the wood grain, softens the
              profiles, loosens the glue joints, and washes out the stain. The result
              looks flat. It doesn&rsquo;t last.
            </p>
            <p className="text-[#2A2421] font-medium">We don&rsquo;t dip.</p>
            <p>
              Wood Refinishing by Sue Wheeler hand-strips every piece — by hand, with
              the right chemistry, the right tools, and 36 years of knowing the
              difference. It takes longer. It costs more to do it this way. The wood
              lasts decades instead of years.
            </p>
            <p>That&rsquo;s the choice you&rsquo;re making when you call us.</p>
          </div>
          <Link
            href="/faq#hand-strip"
            className="inline-flex items-center gap-1.5 mt-6 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
          >
            Why hand-stripping matters <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2
              className="text-3xl md:text-4xl text-[#2A2421] mb-3"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              What we <em>refinish.</em>
            </h2>
            <p className="text-base font-sans text-[#6B5E55] max-w-2xl">
              We work on architectural woodwork — the pieces built into a home or
              building that define its character. Not furniture. Not floors. The elements
              that came with the structure and can&rsquo;t be replaced without losing
              something real.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Sheldon Spotlight */}
      <section className="py-16 px-6 bg-[#2A2421] text-[#EBE6DE]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            Project Spotlight
          </p>
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            <em>The Sheldon Concert Hall.</em> St. Louis landmark. Our work.
          </h2>
          <p className="text-base font-sans text-[#9e9087] leading-relaxed mb-8">
            During the Sheldon&rsquo;s $11 million renovation, Wood Refinishing by Sue
            Wheeler refinished the doors of one of St. Louis&rsquo;s most important
            concert halls. The same hands. The same standard. The same method we bring
            to your home.
          </p>
          <Link
            href="/institutional-refinishing/historic-venue-restoration"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] hover:gap-3 transition-all"
          >
            Learn about our institutional work <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* EPA Certification */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            EPA Certified Lead Renovator.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed mb-4">
            89.8% of homes in St. Louis City were built before 1978. That means lead
            paint — in the doors, the trim, the cabinets, the staircase railings. Work
            done without EPA certification on those surfaces isn&rsquo;t just sloppy.
            It&rsquo;s a legal and health risk.
          </p>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed mb-6">
            Sue Wheeler is an EPA Certified Lead Renovator. Every project on a pre-1978
            home is handled with full lead-safe protocols, documented and compliant. You
            don&rsquo;t have to ask whether it&rsquo;s being done right.
          </p>
          <Link
            href="/faq#epa-cert"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
          >
            What EPA certification means for your home <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6" style={{ backgroundColor: "#42413C" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl text-white mb-8 text-center"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What St. Louis homeowners say.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] hover:gap-3 transition-all"
            >
              Read all reviews <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Sue */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            <em>36 years.</em> One city. One owner.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              Sue Wheeler started refinishing wood in St. Louis in 1989. Since then, she
              has worked on homes in the Central West End, Lafayette Square, Webster
              Groves, Kirkwood, Ladue, and dozens of neighborhoods in between. She has
              refinished the doors of The Sheldon Concert Hall and the kitchen cabinets
              of first-time homeowners in Maplewood.
            </p>
            <p>She has never dipped a door.</p>
            <p>
              When you call Wood Refinishing by Sue Wheeler, Sue Wheeler answers. She
              will ask you the right questions, tell you what the work actually involves,
              and give you an honest estimate. No call centers. No project managers. No
              surprises.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 mt-6 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
          >
            More about Sue <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Serving <em>metropolitan St. Louis</em> — city and county.
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-8 max-w-2xl">
            We work throughout the greater St. Louis area — historic city neighborhoods
            and inner-ring suburbs where the architectural woodwork is original, and West
            County communities where the homes are newer and the cabinets and doors still
            deserve the best finish available.
          </p>
          <div className="flex flex-wrap gap-2">
            {neighborhoods.map((n) => (
              <Link
                key={n}
                href={neighborhoodHrefs[n] ?? "/neighborhoods"}
                className="px-3 py-1.5 text-xs font-sans font-medium text-[#11B2E8] border border-[#11B2E8] hover:bg-[#11B2E8] hover:text-white transition-colors"
                style={{ borderRadius: "50px" }}
              >
                {n}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Historic Preservation callout */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Historic home? <em>Tax credits may apply.</em>
          </h2>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed mb-6">
            If your home is in a certified or local historic district, the federal and
            Missouri historic tax credit programs may return up to 45–55 cents on every
            dollar you spend on qualifying woodwork restoration. No other wood refinisher
            in St. Louis explains this. We do.
          </p>
          <Link
            href="/historic-preservation/historic-tax-credits"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
          >
            Historic tax credit guide for St. Louis homeowners <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTABlock />
    </>
  );
}
