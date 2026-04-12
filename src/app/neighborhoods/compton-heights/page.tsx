import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Compton Heights St. Louis | Sue Wheeler",
  description:
    "Wood refinishing in Compton Heights — Craftsman and Colonial Revival homes, built-in hutches, bookcases, and staircases. Certified local historic district. Sue Wheeler.",
};

export default function ComptonHeightsPage() {
  return (
    <>
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
            Wood Refinishing in Compton Heights
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Craftsman and Colonial Revival homes with built-in hutches,
            floor-to-ceiling bookcases, and staircases that were built to be
            permanent. Sue Wheeler has stripped more painted-over white oak in
            this neighborhood than she can count.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Compton Heights was developed primarily between 1890 and 1930 — the
            golden era of Craftsman architecture in St. Louis. The homes here
            are Colonial Revival, Arts and Crafts, and Foursquare styles, built
            with an emphasis on interior woodwork that you simply can't
            replicate today.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            What defines Compton Heights woodwork is scale and integration.
            Built-in hutches in the dining room. Floor-to-ceiling bookcases in
            the library. Window seats with storage below. Staircase newel posts
            thick enough that they feel permanent — because they are. These
            weren't furniture pieces that could be moved or replaced. They were
            built into the house as part of its architecture.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has been refinishing woodwork in Compton Heights
            throughout her career. She's stripped more painted-over white oak
            hutches and shellacked bookcase surrounds in this neighborhood than
            she can count.
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
            What We Do Most Often in Compton Heights
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Compton Heights projects tend to center on built-ins and millwork —
            pieces that are architecturally significant and irreplaceable —
            alongside staircase work that matches the Craftsman character of the
            homes.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Built-in hutches and buffets
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                The dining room built-in is the signature feature of a Compton
                Heights Craftsman. Most are original white oak or chestnut,
                frequently painted over at some point in the 1950s or 60s. We
                strip them by hand — the only safe method when the piece is
                attached to the wall — restoring the grain and profile. Stain is
                matched to the surrounding floors or millwork.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Built-in bookcases
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Library and living room bookcases in Compton Heights homes are
                often elaborate: leaded glass doors, fluted pilasters, crown
                detail at the top. The woodwork on these pieces requires hand
                work throughout. No shortcuts.
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
                Craftsman-era staircases in Compton Heights run from simple and
                clean to elaborate turned-spindle designs. We do the full scope:
                treads, risers, spindles, newel post, and railing — all stripped
                and refinished together so the result is visually consistent.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/built-ins-and-millwork-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Built-Ins &amp; Millwork Refinishing →
            </Link>
            <Link
              href="/built-ins-and-millwork-refinishing/built-in-hutches-buffets-bookcases/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Built-In Hutches, Buffets &amp; Bookcases →
            </Link>
            <Link
              href="/staircase-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Staircase Refinishing →
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
            Compton Heights is a{" "}
            <strong>Certified Local Historic District</strong> — qualifying
            rehabilitation work may be eligible for both the{" "}
            <strong>Federal Historic Tax Credit (20%)</strong> and the{" "}
            <strong>Missouri Historic Tax Credit (25–35%)</strong>. Built-in
            refinishing qualifies as a Qualified Rehabilitation Expenditure when
            the method is compliant with the Secretary of the Interior's
            Standards. Sue's hand-strip method is compliant. Chemical
            dip-stripping typically is not.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            If you're planning a substantial restoration and your home is in the
            district, it's worth confirming your property's National Register
            status before work begins — the timing matters for which tax year
            the credit applies.
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
              <strong>EPA note:</strong> Most Compton Heights homes predate
              1978, and many original finish layers contain lead. EPA RRP
              regulations require a Certified Lead Renovator for work that
              disturbs lead paint. Sue Wheeler is EPA Certified — containment,
              HEPA vacuuming, and documentation are standard on every project.
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
            From a Compton Heights Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "The built-in hutch in our dining room had been painted white at
              some point — we could see it was wood underneath but had no idea
              what we'd find. Sue stripped it by hand, and it turned out to be
              gorgeous quartersawn white oak. She matched the stain to our
              floors perfectly. It looks like it was always supposed to be that
              color."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, Compton Heights
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
            Get a Free Estimate for Your Compton Heights Home
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
            She'll look at your built-ins, your staircase, your millwork — and
            tell you what's under there and what it will take to bring it back.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#A65D37] text-white font-sans font-medium px-6 py-3 rounded hover:bg-[#8f4f2e] transition-colors"
          >
            Request a Free Estimate →
          </Link>
          <p className="text-[#6B5E55] font-sans text-sm mt-6">
            EPA Certified Lead Renovator. Est. 1989. St. Louis Magazine —
            "Perfect Finish."
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
