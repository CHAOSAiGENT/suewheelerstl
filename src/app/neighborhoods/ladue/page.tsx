import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Ladue MO | Sue Wheeler",
  description:
    "Wood refinishing in Ladue — estate homes, high-end kitchen cabinets, staircases, and room millwork. Sue Wheeler, 36 years experience, EPA Certified.",
};

export default function LaduePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood Refinishing in Ladue
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Estate homes where the quality of the cabinetry, the staircase, and the built-ins is part of why the
            house is worth what it's worth. Sue Wheeler has worked in Ladue throughout her career and understands
            what these projects require.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Ladue is one of the wealthiest residential communities in Missouri — large estate homes, mature
            landscaping, and interiors that reflect serious investment in materials and finishes. The woodwork in
            Ladue homes ranges from high-quality builder cabinetry to fully custom kitchen installations, elaborate
            staircases, and room millwork that runs floor to ceiling.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            These aren't homes where the woodwork is incidental. In Ladue, the quality of the cabinetry, the
            staircase, the built-ins — it's part of why the house is worth what it's worth.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked in Ladue throughout her career. She understands what these projects require and
            what clients at this level expect.
          </p>
        </div>
      </section>

      {/* What We Do Most Often */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What We Do Most Often in Ladue
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Ladue projects center on kitchen cabinetry, staircases, and millwork — often at significant scale.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Kitchen cabinet refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Ladue kitchens are frequently custom-built with solid wood or high-grade wood veneer. When the
                finish has aged, yellowed, or the client wants a color or sheen update, refinishing delivers results
                that are indistinguishable from new — without removing and replacing construction that was built
                correctly in the first place. We strip, prepare, and finish to factory quality.
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
                Statement staircases are common in Ladue homes — wide treads, turned or custom-milled spindles,
                substantial newel posts, continuous railings. We refinish the full staircase as a single scope:
                treads, risers, spindles, newel, and rail. Everything matches when we're done.
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
                Crown molding, wainscoting, window casings, mantels, chair rail, built-in shelving — Ladue homes
                carry a lot of custom millwork. We strip and refinish it throughout a room or floor as a unified
                project, ensuring consistent finish tone and sheen across every surface.
              </p>
            </li>
          </ul>
          <p className="text-[#6B5E55] font-sans leading-relaxed mt-6">
            Every project begins with a free in-person estimate. Sue reviews the scope, identifies any repairs,
            discusses finish options, and provides a written cost.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/kitchen-cabinet-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Kitchen Cabinet Refinishing →
            </Link>
            <Link href="/staircase-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Staircase Refinishing →
            </Link>
            <Link href="/built-ins-and-millwork-refinishing/room-millwork/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Room Millwork Refinishing →
            </Link>
          </div>
        </div>
      </section>

      {/* Working at Estate Scale */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Working at Estate Scale
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Ladue projects often involve multiple rooms or an entire floor. That's not unusual for us — we've been
            doing whole-home millwork scopes throughout St. Louis County for decades.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Cabinetry is removed wherever possible — transported to our shop, refinished under controlled conditions,
            and reinstalled. On-site work is done with full surface protection. When a project spans a kitchen, a
            staircase, and room millwork, we sequence the work to minimize disruption.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            EPA Certified Lead Renovator — applicable if any pre-1978 components are involved, including older custom
            built-ins or additions containing earlier-era wood.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            From a Ladue Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We had the kitchen cabinets, the staircase, and the dining room millwork all done at once. Sue came
              out, walked through everything, and gave us one scope. The crews sequenced it so we weren't displaced
              for weeks. Everything came back consistent."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">— Homeowner, Ladue</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA text section */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Get a Free Estimate for Your Ladue Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a href="tel:3143676054" className="text-[#A65D37] font-semibold hover:underline">
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll walk through the full scope with you — cabinets, staircase, millwork, whatever the project
            requires — and give you a straight answer on what it will take and what it will cost.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#A65D37] text-white font-sans font-medium px-6 py-3 rounded hover:bg-[#8f4f2e] transition-colors"
          >
            Request a Free Estimate →
          </Link>
          <p className="text-[#6B5E55] font-sans text-sm mt-6">
            EPA Certified Lead Renovator. BBB A+ Accredited. Since 1989.
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
