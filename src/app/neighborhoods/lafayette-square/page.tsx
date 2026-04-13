import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Lafayette Square St. Louis | Sue Wheeler",
  description:
    "Wood refinishing in Lafayette Square. Victorian homes, ornate staircases, pocket doors, front door curb appeal. Local historic district. EPA Certified. Sue Wheeler.",
};

export default function LafayetteSquarePage() {
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
            Wood Refinishing in Lafayette Square
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            St. Louis's oldest intact Victorian neighborhood — carved newel
            posts, ornate pocket door surrounds, and wainscoting that defines
            every room. Sue Wheeler has worked here for decades.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Lafayette Square is St. Louis's oldest intact Victorian
            neighborhood. The homes here were built primarily between 1865 and
            1895 — Italianate, Second Empire, Queen Anne, and Romanesque Revival
            styles that packed more wood into their interiors than almost any
            other era of residential construction.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            These aren't just old houses. They're houses with carved newel
            posts, ornate turned spindles, elaborate pocket door surrounds, and
            wainscoting that runs floor to ceiling in the dining room. The
            woodwork wasn't decorative — it was structural identity. Restoring
            it is the whole point.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked in Lafayette Square throughout her career.
            She knows the neighborhood's stock and its quirks: the original fir
            floors with shellac finishes, the pocket doors that have been
            painted shut and forgotten, the front doors that face south and take
            a beating from the sun every year.
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
            What We Do Most Often in Lafayette Square
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Lafayette Square homes concentrate the best of what makes historic
            St. Louis woodwork worth saving — and some of the most challenging
            refinishing conditions.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Pocket door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Lafayette Square homes often have multiple sets of pocket doors,
                frequently in original fir or oak with intricate raised panel
                detail. Many have been painted over one or more times. We remove
                them from the pocket, hand-strip the finish, refinish to match
                the surrounding millwork, and reinstall. Hardware is preserved
                wherever possible.
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
                Victorian staircases in Lafayette Square are frequently the most
                ornate part of the house: turned and carved spindles, heavy
                carved newel posts, continuous curved railings. Every component
                has to be stripped by hand — the profiles on these pieces make
                dipping impossible without destroying the detail.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Front door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                The front door on a Lafayette Square home is a statement. Most
                are solid wood with raised panels and transoms. South-facing
                doors get UV and weather damage year after year. We remove the
                door, strip and refinish it in our shop, and rehang it — usually
                in one visit.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/door-refinishing/pocket-door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Pocket Door Refinishing →
            </Link>
            <Link
              href="/staircase-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Staircase Refinishing →
            </Link>
            <Link
              href="/door-refinishing/front-door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Front Door Refinishing →
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
            Lafayette Square is a <strong>Local Historic District</strong> —
            qualifying rehabilitation work may be eligible for the{" "}
            <strong>Missouri Historic Tax Credit (25–35%)</strong>, and
            properties listed individually on the National Register may also
            qualify for the <strong>Federal Historic Tax Credit (20%)</strong>.
            Check with your tax advisor and the Missouri State Historic
            Preservation Office to confirm your property's status.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Wood refinishing qualifies as a Qualified Rehabilitation Expenditure
            when the work is compliant with the Secretary of the Interior's
            Standards. Hand-strip method: compliant. Chemical dip-stripping: not
            compliant — it can alter the wood's character and disqualify the
            expenditure.
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
              <strong>EPA note:</strong> Lafayette Square homes almost
              universally predate 1978 — most predate 1900. EPA RRP regulations
              apply to any work that disturbs lead paint. Sue Wheeler is EPA
              Certified and follows proper containment and documentation
              procedures on every job.
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
            From a Lafayette Square Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We have pocket doors on both floors — six sets total. They'd all
              been painted shut at some point. Sue opened them up, stripped the
              paint by hand, refinished them to match the floors, and they
              actually work now. It was a significant project and she handled
              every piece of it."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, Lafayette Square
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
            Get a Free Estimate for Your Lafayette Square Home
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
            She's been working in Lafayette Square for decades. She'll look at
            your pocket doors, your staircase, your front door — and tell you
            exactly what they need and what it will cost.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#A65D37] text-white font-sans font-medium px-6 py-3 rounded hover:bg-[#8f4f2e] transition-colors"
          >
            Request a Free Estimate →
          </Link>
          <p className="text-[#6B5E55] font-sans text-sm mt-6">
            EPA Certified Lead Removal. Est. 1989. St. Louis Magazine —
            "Perfect Finish."
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
