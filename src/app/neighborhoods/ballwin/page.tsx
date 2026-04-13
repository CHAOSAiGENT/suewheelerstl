import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Ballwin MO | Sue Wheeler",
  description:
    "Wood refinishing in Ballwin — kitchen cabinets and interior doors in family homes. Sue Wheeler, 36 years, EPA Certified, West St. Louis County.",
};

export default function BallwinPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood Refinishing in Ballwin
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Ranch homes, split-levels, and two-stories built in the 1970s through 1990s — solid wood cabinets that
            are 25 to 40 years old, structurally fine, but with a finish that's worn out. The wood is worth keeping.
            It just needs to be stripped and refinished correctly.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Ballwin is a family-oriented suburban community in West St. Louis County — established subdivisions,
            ranch homes, split-levels, and two-stories, most of them built between the 1970s and 1990s. The homes
            here tend to have original builder-grade cabinetry that has been well-used and is starting to show it.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            What we see most in Ballwin: kitchens with solid wood cabinets that are 25 to 40 years old,
            structurally fine, but with a finish that's worn, yellowed, or dated. The wood is worth keeping. It just
            needs to be stripped and refinished correctly.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked throughout West St. Louis County throughout her career. Ballwin is part of the
            regular territory.
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
            What We Do Most Often in Ballwin
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Ballwin projects are typically kitchen-focused — cabinet refinishing is the primary service here, with
            interior door refinishing a common addition.
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
                Builder-grade oak and maple cabinets from the 1970s through 1990s are solid, well-constructed, and
                worth restoring. When the finish has aged out — yellowed polyurethane, worn edges, cabinet doors
                that have lost their sheen — refinishing is the right approach. We strip the old finish, prep the
                wood, and apply fresh finish to factory quality. Cabinets are transported to our shop wherever
                possible.
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
                A common Ballwin request is updating orange-toned oak to something lighter or cleaner — a light
                stain, a gray tone, or painted. We're direct about what's achievable for a given wood species: not
                every finish change is appropriate for every wood, and we'll tell you that up front rather than
                overpromise. When it can be done correctly, we do it correctly.
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
                Wood doors in Ballwin homes often have the same worn finish as the cabinets. We refinish interior
                doors using the same process — transported to the shop, stripped, prepped, and finished — for
                results that hold up like the cabinets do.
              </p>
            </li>
          </ul>
          <p className="text-[#6B5E55] font-sans leading-relaxed mt-6">
            Every project begins with a free estimate. Sue looks at the wood in person, assesses the current finish,
            notes any repairs that are needed, and gives you a straight answer on what it will cost.
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
            On Pre-1978 Homes in Ballwin
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            Homes built before 1978 — including some of the older ranch homes and split-levels in Ballwin — may
            have lead-based paint on original woodwork. EPA RRP regulations require a Certified Lead Removal for
            any refinishing work that disturbs lead paint on pre-1978 construction. Sue Wheeler is EPA Certified.
            She'll identify any relevant lead paint considerations during the estimate.
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
            From a Ballwin Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "The kitchen cabinets were original to the house from 1982 — still solid, but the finish was shot. I
              assumed we'd have to replace them. Sue came out, told me they were worth keeping, and gave me a
              number. The refinished cabinets look better than what we'd have gotten new."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">— Homeowner, Ballwin</cite>
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
            Get a Free Estimate for Your Ballwin Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a href="tel:3143676054" className="text-[#A65D37] font-semibold hover:underline">
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll look at your cabinets and doors in person and give you an honest assessment — what's worth
            refinishing, what options are realistic for your wood, and what it will cost.
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
