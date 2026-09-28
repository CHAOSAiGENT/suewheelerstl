import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Frontenac MO | Sue Wheeler",
  description:
    "Wood refinishing in Frontenac — ultra-premium custom and estate homes, high-value kitchen and millwork projects. Sue Wheeler, 36 years, EPA Certified.",
};

export default function FrontenacPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood Refinishing in Frontenac
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Custom-built estate homes where the cabinetry, millwork, and built-ins reflect the investment level of
            the house itself. Sue Wheeler is comfortable with both the full scope and the client expectations that
            come with Frontenac.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Frontenac is one of St. Louis County's most exclusive residential communities — custom-built estate homes
            on large lots, most of them constructed in the post-war era through the present day. The woodwork in
            these homes reflects the investment level of the houses themselves: high-quality cabinetry, extensive
            millwork, elaborate built-ins, and hardwood throughout.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            These aren't historic homes with original 1890s woodwork. They're modern homes where the materials are
            high-end and the owners expect craftsmanship that matches the quality they paid for.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked in Frontenac throughout her career. She's comfortable with the full scope of what
            estate-level woodwork requires — and with clients who expect precision and accountability.
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
            What We Do Most Often in Frontenac
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Frontenac projects tend to center on kitchen cabinetry, room millwork, and built-in pieces — reflecting
            the scale and finish level of the homes here.
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
                Frontenac kitchens frequently have high-quality custom or semi-custom cabinetry in solid wood or wood
                veneer. When the finish has aged or the owners want a color update, refinishing is the right answer
                — it preserves the construction quality and delivers results that painting over or replacing can't
                match. We strip, prepare, and apply fresh finish to factory-level quality.
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
                Crown molding, wainscoting, window casings, mantels, chair rail — Frontenac homes are full of custom
                millwork that needs to be maintained. We strip and refinish millwork throughout a room as a single
                project, ensuring finish consistency across every surface.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Built-in cabinetry and shelving
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Home offices, libraries, media rooms, and mudrooms in Frontenac homes frequently have custom
                built-in cabinetry. When the finish ages or the client wants a different tone, refinishing is the
                appropriate response.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/kitchen-cabinet-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Kitchen Cabinet Refinishing →
            </Link>
            <Link href="/built-ins-and-millwork-refinishing/room-millwork/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Room Millwork Refinishing →
            </Link>
            <Link href="/built-ins-and-millwork-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Built-Ins &amp; Millwork Refinishing →
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            What to Expect at This Level
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Frontenac projects are typically scoped with a full in-person estimate. Sue reviews the cabinets or
            millwork in person, identifies any repairs needed, discusses finish options (sheen level, tone
            adjustment, color change if desired), and provides a written scope.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed">
            The work is done in our shop wherever possible — cabinetry removed, refinished under controlled
            conditions, and reinstalled. On-site work is done with full protection for surrounding surfaces.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mt-4">
            EPA Certified Lead Removal — applicable if any pre-1978 components are involved.
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
            From a Frontenac Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We wanted our kitchen cabinets taken to white — they were originally a medium stain and we'd watched
              the trend long enough to know it was what we wanted. Sue walked us through the process, was clear
              about what was involved, and the result was exactly what we'd pictured. No shortcuts."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">— Homeowner, Frontenac</cite>
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
            Get a Free Estimate for Your Frontenac Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a href="tel:3143676054" className="text-[#A65D37] font-semibold hover:underline">
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll assess your cabinets, your millwork, your built-ins — and give you a precise scope and cost.
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
