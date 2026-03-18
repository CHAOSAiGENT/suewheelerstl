import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Town and Country MO | Sue Wheeler",
  description:
    "Wood refinishing in Town & Country — estate homes, custom millwork, kitchen cabinets, built-ins. Sue Wheeler, 36 years, EPA Certified, St. Louis County.",
};

export default function TownAndCountryPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood Refinishing in Town &amp; Country
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Estate homes with substantial custom cabinetry, room millwork spanning multiple rooms, and built-in
            shelving throughout. Sue Wheeler has worked in Town &amp; Country for her entire career.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Town &amp; Country is one of Missouri's most affluent communities — estate homes, heavily wooded lots,
            and interiors built to a high standard. The woodwork here reflects that: substantial custom cabinetry,
            room millwork that spans multiple rooms, built-in shelving and storage throughout, and staircases that
            are meant to be noticed.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            The homes aren't old in the historic sense. Most were built from the 1950s through the present day, with
            ongoing renovations and additions. What they share is a commitment to quality materials — solid wood
            construction, custom millwork profiles, high-end hardware — and owners who expect the work done on those
            materials to be at the same level.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked in Town &amp; Country for her entire career. She's familiar with the scope and
            expectations that come with these homes.
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
            What We Do Most Often in Town &amp; Country
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Town &amp; Country projects tend to span multiple categories — often kitchen cabinetry anchors the
            project, with room millwork and built-ins completing it.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Room millwork
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Crown molding, wainscoting, window casings, chair rail, built-in bookcases, mantels, butler's pantry
                cabinetry. Town &amp; Country homes carry extensive custom millwork throughout the main floor. We
                strip and refinish it as a unified project — consistent sheen, consistent tone, everything matching
                when we're done.
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
                Custom kitchen cabinetry in solid wood or high-grade veneer is common in Town &amp; Country. When
                the finish has aged or the owners want a color or sheen change, refinishing is the correct approach.
                We remove, transport to our shop, refinish under controlled conditions, and reinstall.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Built-in cabinetry
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Home offices, libraries, mudrooms, and media rooms in Town &amp; Country homes frequently have
                built-in cabinetry. When the finish has aged or a renovation shifts the surrounding palette,
                refinishing brings everything back in line without the cost or disruption of replacement.
              </p>
            </li>
          </ul>
          <p className="text-[#6B5E55] font-sans leading-relaxed mt-6">
            Every project begins with a free in-person estimate. Sue reviews the scope, discusses finish options,
            identifies any repairs, and provides a written cost.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/built-ins-and-millwork-refinishing/room-millwork/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Room Millwork Refinishing →
            </Link>
            <Link href="/kitchen-cabinet-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Kitchen Cabinet Refinishing →
            </Link>
            <Link href="/built-ins-and-millwork-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Built-Ins &amp; Millwork Refinishing →
            </Link>
          </div>
        </div>
      </section>

      {/* Scope and Process */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Scope and Process at This Level
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Town &amp; Country projects often involve more than one room — and sometimes more than one phase.
            That's a normal scope for us. We sequence work to minimize disruption: cabinetry out first, shop
            refinishing while on-site millwork prep happens, reinstall when everything is finished and cured.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            We work with homeowners directly, or alongside interior designers, general contractors, and renovation
            coordinators — whoever is managing the project. Sue is the point of contact throughout.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mt-4">
            EPA Certified Lead Renovator — applicable if any pre-1978 components are present, including older
            additions or custom built-in pieces with earlier finishes.
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
            From a Town &amp; Country Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We did the entire main floor — kitchen, the study built-ins, crown molding throughout. Sue managed
              it herself from the estimate through install. Everything came back consistent. The millwork looks
              like it was just built."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">— Homeowner, Town &amp; Country</cite>
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
            Get a Free Estimate for Your Town &amp; Country Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a href="tel:3143676054" className="text-[#A65D37] font-semibold hover:underline">
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll walk through the full scope with you and give you a straight answer on what the project involves,
            how it sequences, and what it costs.
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
