import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Chesterfield MO | Sue Wheeler",
  description:
    "Wood refinishing in Chesterfield — kitchen cabinets, interior doors, and home millwork. Sue Wheeler, 36 years, EPA Certified, West St. Louis County.",
};

export default function ChesterfieldPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood Refinishing in Chesterfield
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Kitchens built in the 1980s and 1990s that are structurally sound but showing their age — orange-toned
            oak, worn edges, yellowed finish. The wood is worth keeping. Sue Wheeler has worked throughout West
            St. Louis County for her entire career.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Chesterfield is one of the largest suburban communities in West St. Louis County — a mix of
            subdivisions, planned communities, and custom home neighborhoods, most built between the 1980s and early
            2000s. The homes here typically have builder-grade or mid-grade cabinetry, wood interior doors, and some
            millwork throughout.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            A lot of what we see in Chesterfield is kitchens that were well-built but have aged: cabinets that are
            structurally sound but have a dated finish, orange-toned stained oak that the owners want to update, or
            painted cabinets that have chipped and yellowed. The wood is often worth keeping. The finish isn't.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked throughout West St. Louis County for her entire career. Chesterfield is a regular
            part of the territory.
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
            What We Do Most Often in Chesterfield
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Chesterfield projects center primarily on kitchen cabinetry and interior doors — the wood surfaces that
            get the most daily use and show age earliest.
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
                Solid wood and wood veneer cabinets from the 1980s and 1990s hold up structurally for decades. When
                the finish has yellowed, the stain has gone muddy, or the owners want to move from a dark stain to a
                lighter tone or painted finish, refinishing is the right call. We strip the old finish completely,
                prep the wood properly, and apply fresh finish to factory quality. Cabinets are transported to our
                shop wherever possible.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Cabinet color change
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                One of the most common requests in Chesterfield: taking a heavily orange-toned oak kitchen to a gray
                stain, white paint, or lighter natural tone. This is a multi-step process — it can't be done by
                painting over the existing finish. We strip, condition the wood, apply the correct primer or stain
                base, and finish to the client's target.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Wood interior doors in Chesterfield homes often have the same problem as cabinets: a finish that was
                fine 25 years ago and hasn't held up. We refinish interior doors using the same strip-sand-finish
                process as cabinetry, transporting doors to the shop for a controlled environment and better result.
              </p>
            </li>
          </ul>
          <p className="text-[#6B5E55] font-sans leading-relaxed mt-6">
            Every project begins with a free estimate. Sue assesses the wood, the current finish, any repairs that
            are needed, and gives you a direct answer on what it will take.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/kitchen-cabinet-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Kitchen Cabinet Refinishing →
            </Link>
            <Link href="/kitchen-cabinet-refinishing/cabinet-color-change/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Cabinet Color Change →
            </Link>
            <Link href="/door-refinishing/interior-door-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Interior Door Refinishing →
            </Link>
          </div>
        </div>
      </section>

      {/* Pre-1978 note */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            On Pre-1978 Homes in Chesterfield
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            Most Chesterfield homes were built after 1978, so EPA lead paint regulations typically don't apply. If
            your home was built before 1978 — or includes older additions or custom millwork from earlier decades —
            lead paint rules do apply. Sue Wheeler is EPA Certified Lead Removal. She'll flag anything relevant
            during the estimate.
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
            From a Chesterfield Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "Our kitchen cabinets were the original oak from when the house was built — still solid, just orange
              and worn. We wanted them lighter and cleaner. Sue came out, looked at the wood, said it was worth
              keeping, and gave us a clear scope. The finished result looks like a different kitchen."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">— Homeowner, Chesterfield</cite>
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
            Get a Free Estimate for Your Chesterfield Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a href="tel:3143676054" className="text-[#A65D37] font-semibold hover:underline">
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll look at your cabinets, your doors, your millwork — and tell you honestly what's worth
            refinishing, what color options are realistic for your wood, and what it will cost.
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
