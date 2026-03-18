import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Kirkwood MO | Sue Wheeler",
  description:
    "Wood refinishing in Kirkwood — one of St. Louis's oldest suburbs, original woodwork widely intact, staircase and cabinet restoration. Sue Wheeler, 36 years.",
};

export default function KirkwoodPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Wood Refinishing in Kirkwood
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            One of the oldest planned suburbs in the United States — Victorians with elaborate staircases, Craftsman
            homes with built-in cabinetry, original woodwork widely intact. Sue Wheeler is more likely to be on her
            third or fourth project for the same homeowner here than anywhere else.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Kirkwood is one of the oldest planned suburbs in the United States — incorporated in 1865 and built out
            steadily through the turn of the century and into the mid-20th century. The result is a neighborhood
            where original interior woodwork is widely intact: Victorians with elaborate staircases and millwork,
            Craftsman homes with built-in cabinetry, early-century colonials with solid-wood door and window
            surrounds.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Kirkwood residents tend to know what they have. The preservation culture here is strong — homes change
            hands carefully, and the woodwork that's survived 100 years often gets treated with the care it deserves.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked extensively in Kirkwood. It's one of the neighborhoods where she's most likely to
            be finishing a third or fourth project for the same homeowner.
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
            What We Do Most Often in Kirkwood
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Kirkwood projects span the full range of residential woodwork, with staircases and kitchen cabinets
            appearing most frequently.
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
                Kirkwood's oldest homes have the most elaborate staircases: carved newel posts, intricate turned
                spindles, continuous curved railings. Craftsman-era homes have cleaner lines but equally solid
                construction. In every case, the full scope — treads, risers, spindles, newel post, and railing —
                is done together.
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
                Kirkwood has a large stock of pre-1960s cabinetry in solid wood that's worth restoring rather than
                replacing. We strip, repair, and refinish — preserving the construction quality that modern cabinetry
                can't replicate.
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
                Solid wood doors throughout Kirkwood's older homes are frequently original and worth maintaining. We
                remove, refinish in our shop, and reinstall.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/staircase-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Staircase Refinishing →
            </Link>
            <Link href="/kitchen-cabinet-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Kitchen Cabinet Refinishing →
            </Link>
            <Link href="/door-refinishing/" className="text-[#A65D37] font-sans font-medium hover:underline">
              Door Refinishing →
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
            Some Kirkwood structures are listed as <strong>contributing resources</strong> to the National Register
            of Historic Places. If your home is in a contributing area or individually listed, qualifying
            rehabilitation work may be eligible for historic tax credits. Confirm with the Missouri SHPO.
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
              <strong>EPA note:</strong> Kirkwood's oldest housing stock predates 1978, and lead paint is common in
              original finish layers. EPA RRP regulations require a Certified Lead Renovator for any work that
              disturbs lead paint. Sue Wheeler is EPA Certified — proper containment and documentation are included
              on every applicable project.
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
            From a Kirkwood Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We have a grand staircase that came with our 1898 Victorian — it's the reason we bought the house.
              After decades of neglect it was dull and worn. Sue restored the entire thing: treads, spindles, the
              carved newel post, the railing. It looks exactly like what it is — an irreplaceable piece of original
              craftsmanship."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">— Homeowner, Kirkwood</cite>
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
            Get a Free Estimate for Your Kirkwood Home
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Sue Wheeler answers every call personally:{" "}
            <a href="tel:3143676054" className="text-[#A65D37] font-semibold hover:underline">
              (314) 367-6054
            </a>
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            She's worked in Kirkwood for over 36 years. She'll tell you what the wood needs and what it will cost to
            do it right.
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
