import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Webster Groves MO | Sue Wheeler",
  description:
    "Wood refinishing in Webster Groves — Victorian and Craftsman homes, active preservation community, staircase and cabinet restoration. Sue Wheeler, EPA Certified.",
};

export default function WebsterGrovesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood Refinishing in Webster Groves
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            One of St. Louis County's oldest suburbs — Victorian homes on Selma and Lockwood, Craftsman bungalows
            on the side streets, an active preservation community. Sue Wheeler's work here is regularly recommended
            neighbor to neighbor.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Webster Groves is one of St. Louis County's oldest incorporated suburbs, built out in waves from the
            1880s through the 1950s. Victorian-era homes on the east side near downtown Webster, Craftsman bungalows
            and Colonial Revivals in the interior blocks, mid-century homes further out. The preservation community
            here is active — residents take the architecture seriously and maintain it accordingly.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            What makes Webster Groves woodwork distinctive is variety and quality. Victorian homes on Selma and
            Lockwood have elaborate staircases and extensive millwork. Craftsman bungalows on the side streets have
            built-in bookcases, wide baseboards, and kitchen cabinetry that's genuinely worth saving. Across the
            neighborhood, the original wood is still there — often under paint, but there.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked throughout Webster Groves for decades. The active preservation community here
            means her work is often recommended neighbor to neighbor.
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
            What We Do Most Often in Webster Groves
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Webster Groves projects span the full range of residential woodwork — reflecting the diversity of the
            housing stock and the investment level of the owners.
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
                Victorian and Craftsman staircases in Webster Groves range from simple straight-run bungalow stairs
                to elaborate Victorian designs with carved newel posts and ornate turned spindles. We assess each
                staircase on its own terms and do the full scope: treads, risers, spindles, newel post, and railing.
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
                Craftsman-era built-ins in Webster homes — bookcases, hutches, window seats — are a defining feature
                of the neighborhood's bungalows. Victorian homes have elaborate millwork: wainscoting, picture rails,
                wide crown, window surrounds. All of it done by hand.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Kitchen cabinet refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Webster Groves homeowners are frequently making decisions about original kitchen cabinetry: restore
                it or replace it. The answer, when the cabinets are solid wood and in good structural condition, is
                almost always to restore it.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/staircase-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Staircase Refinishing →
            </Link>
            <Link href="/built-ins-and-millwork-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Built-Ins &amp; Millwork Refinishing →
            </Link>
            <Link href="/kitchen-cabinet-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Kitchen Cabinet Refinishing →
            </Link>
          </div>
        </div>
      </section>

      {/* Historic Status */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Historic Status
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Some areas and individual structures in Webster Groves have <strong>local historic district</strong>{" "}
            designation or National Register listing. Qualifying rehabilitation work may be eligible for historic tax
            credits. Confirm with the Missouri SHPO.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link href="/historic-preservation/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Historic Preservation &amp; Wood Refinishing →
            </Link>
            <Link href="/historic-preservation/historic-tax-credits/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Historic Tax Credits Guide →
            </Link>
          </div>
          <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-4 rounded">
            <p className="text-[#2A2421] font-sans text-sm leading-relaxed">
              <strong>EPA note:</strong> Webster Groves homes built before 1978 — the majority of the historic
              housing stock — may have lead paint in finish layers. EPA RRP regulations require a Certified Lead
              Renovator for any work that disturbs lead paint. Sue Wheeler is EPA Certified.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            From a Webster Groves Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We have an 1890s Victorian on Lockwood and the staircase was the most prominent feature in the house
              — also the most neglected. Sue did the treads, spindles, newel post, and railing as a complete project.
              The difference was immediate. It's the reason we bought the house."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">— Homeowner, Webster Groves</cite>
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
            Get a Free Estimate for Your Webster Groves Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a href="tel:3143676054" className="text-[#A65D37] font-semibold hover:underline">
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll look at your staircase, your built-ins, your cabinetry — and give you a straightforward
            assessment of what it needs.
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
