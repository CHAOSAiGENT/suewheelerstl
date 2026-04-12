import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Maplewood MO | Sue Wheeler",
  description:
    "Wood refinishing in Maplewood — Craftsman bungalows, 1920s–1940s housing stock, staircase restoration. Some NR contributing structures. Sue Wheeler, EPA Certified.",
};

export default function MaplewoodPage() {
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
            Wood Refinishing in Maplewood
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Craftsman bungalows and Foursquares from the 1910s through 1940s —
            original staircases under carpet, original kitchen cabinetry worth
            saving. Sue Wheeler has worked throughout Maplewood for decades.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Maplewood is a compact, walkable suburb built out primarily in the
            1910s through 1940s — Craftsman bungalows, American Foursquares, and
            Colonial Revivals on tight lots with generous front porches. The
            housing stock here is well-maintained and owner-occupied, and a
            significant portion of it has original interior woodwork still in
            place.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Maplewood also has an active real estate market. Investors and new
            homeowners are regularly buying older homes, discovering original
            woodwork under layers of paint, and deciding whether to restore it
            or cover it again. The answer, almost always, is to restore it —
            it's one of the things that makes the house worth buying.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked throughout Maplewood for decades.
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
            What We Do Most Often in Maplewood
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Maplewood projects tend to center on kitchen cabinets and staircases
            — reflecting both the era of the housing stock and the investment
            decisions new owners are making.
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
                Craftsman-era staircases in Maplewood bungalows are typically
                straight-run, clean-lined, and built with fir or oak treads and
                simple turned spindles. When new owners discover original
                hardwood under carpet or paint, a staircase restoration is
                usually the first significant project. We strip the finish by
                hand, repair any damage to treads, and refinish the full
                staircase — treads, risers, spindles, newel post, and railing —
                together.
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
                Maplewood bungalows often have original kitchen cabinetry from
                the 1920s through 1940s. These aren't frameless European boxes —
                they're solid wood with recessed panel doors and hardware that's
                worth keeping. We strip and refinish rather than paint over,
                preserving both the grain and the patina that makes them look
                like they belong in the house.
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
                Original interior and exterior doors in Maplewood homes are
                frequently solid wood and worth saving. We remove, strip, and
                refinish in our shop.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/staircase-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Staircase Refinishing →
            </Link>
            <Link
              href="/kitchen-cabinet-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Kitchen Cabinet Refinishing →
            </Link>
            <Link
              href="/door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
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
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Historic Status
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Parts of Maplewood have structures listed as{" "}
            <strong>contributing resources</strong> to the National Register of
            Historic Places. If your home is in a contributing district or
            individually listed, some rehabilitation work may qualify for
            historic tax credits. Check with the Missouri State Historic
            Preservation Office or a preservation tax credit consultant to
            confirm your property's status.
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
              <strong>EPA note:</strong> Most Maplewood housing stock predates
              1978. EPA RRP regulations apply to refinishing work on pre-1978
              homes. Sue Wheeler is EPA Certified — containment, HEPA vacuuming,
              and documentation are included on every applicable project.
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
            From a Maplewood Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We bought a 1928 bungalow and the staircase had carpet nailed all
              the way down. We pulled it up and found original oak treads in
              great shape. Sue stripped and refinished the entire staircase —
              treads, spindles, the newel post — and it's the first thing
              everyone notices when they walk in."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, Maplewood
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
            Get a Free Estimate for Your Maplewood Home
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
            She'll assess your staircase, your cabinets, your doors — and tell
            you what's there and what it will take.
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
