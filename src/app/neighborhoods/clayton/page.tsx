import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Clayton MO | Sue Wheeler",
  description:
    "Wood refinishing in Clayton — upscale residential and commercial, high-end kitchen cabinet refinishing, mixed era housing. Some NR contributing structures. Sue Wheeler.",
};

export default function ClaytonPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood Refinishing in Clayton
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Pre-war colonials and Tudors, mid-century homes, and a commercial district with wood that takes serious
            wear. Sue Wheeler has worked in Clayton's residential neighborhoods and its commercial district throughout
            her career.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Clayton is St. Louis County's business and civic center — and one of its most desirable residential
            addresses. The housing stock spans a wide range of eras and styles: pre-war colonials and Tudors from the
            1920s and 30s, mid-century ranch and split-level homes, and more recent custom construction. What most
            have in common is high-quality original materials and owners who care about maintaining them.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Clayton also has a significant commercial district — restaurants, boutique hotels, professional offices,
            and event spaces in buildings that range from historic to contemporary. Several of those have wood that
            needs professional attention.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked in Clayton's residential neighborhoods and its commercial district throughout her
            career.
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
            What We Do Most Often in Clayton
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Clayton's residential projects tend to center on kitchen cabinets and doors — reflecting both the
            higher-value housing stock and the investment decisions owners are making in well-established homes.
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
                Clayton homes frequently have original or high-quality cabinetry that's worth preserving — solid wood
                face frames, raised panel doors, finishes that have simply aged. We strip by hand, repair any damage,
                and refinish to either restore the original character or update the color. Refinishing at a fraction
                of the cost of replacement, with results that new cabinets can't replicate.
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
                Both interior and exterior doors in Clayton homes are frequently solid wood and high quality. Front
                doors especially represent an investment worth maintaining. We remove, strip, and refinish in our shop
                for consistent results.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Commercial wood refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Clayton's restaurant and hospitality district includes spaces with bar tops, tabletops, wainscoting,
                and millwork that takes serious wear. We work around operating hours, finish to commercial-grade
                durability standards, and can set up maintenance contracts for ongoing protection.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/kitchen-cabinet-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Kitchen Cabinet Refinishing →
            </Link>
            <Link href="/door-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Door Refinishing →
            </Link>
            <Link href="/commercial-and-hospitality-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Commercial &amp; Hospitality Refinishing →
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
            Some structures in Clayton are listed as <strong>contributing resources</strong> to the National Register
            of Historic Places. If your home or commercial property is individually listed or in a contributing
            district, qualifying rehabilitation work may be eligible for historic tax credits. Confirm with the
            Missouri SHPO or a preservation tax credit consultant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link href="/historic-preservation/historic-tax-credits/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Historic Tax Credits Guide →
            </Link>
          </div>
          <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-4 rounded">
            <p className="text-[#2A2421] font-sans text-sm leading-relaxed">
              <strong>EPA note:</strong> Pre-war homes in Clayton predate 1978. EPA RRP regulations apply to
              refinishing work on homes built before that year. Sue Wheeler is EPA Certified and follows proper
              lead-safe procedures on every applicable project.
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
            From a Clayton Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We have an early 1930s Colonial and the kitchen cabinets were original — solid wood, but the finish
              was completely gone. Sue stripped and refinished them and they look better than they probably ever did.
              We priced replacements and it wasn't close."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">— Homeowner, Clayton</cite>
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
            Get a Free Estimate for Your Clayton Home or Business
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a href="tel:3143676054" className="text-[#A65D37] font-semibold hover:underline">
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She'll assess your cabinets, your doors, your commercial woodwork — and give you a straight answer on
            what it will take.
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
