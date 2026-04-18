import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Benton Park St. Louis | Sue Wheeler",
  description:
    "Wood refinishing in Benton Park. 1870s–1900s Victorian row houses with original old-growth woodwork. EPA Certified Lead Removal. Free estimate: (314) 367-6054.",
};


const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/neighborhoods/benton-park",
  telephone: "+13143676054",
  areaServed: {
    "@type": "Neighborhood",
    name: "Benton Park",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5994,
      longitude: -90.2289,
    },
  },
};

export default function BentonParkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neighborhoodSchema) }}
      />

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
            Wood Refinishing in Benton Park
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            1870s–1900s Victorian row houses and Folk Victorian homes — original
            woodwork under layers of paint.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Benton Park is one of the oldest neighborhoods in St. Louis City.
            Settled between the 1870s and 1900s, its streets are lined with
            Italianate, Folk Victorian, and Queen Anne row houses — dense brick
            construction on narrow lots, with streetscapes that remain
            remarkably intact. The woodwork inside these homes was built to
            last: old-growth fir and oak in the doors, staircases, and
            built-ins, tight-grained and durable in a way that new-cut lumber
            simply is not.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Many of these homes have had three to five owners since they were
            built. Each one left something behind — a coat of paint over a door,
            a layer of stain on the staircase, decades of buildup on original
            pocket doors that were painted shut and forgotten. First-time
            historic homeowners in Benton Park are often the ones who finally
            ask what's underneath — and the answer is usually worth uncovering.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has been working in Benton Park for years. She knows
            these houses: the elaborate Victorian front doors, the
            turned-spindle staircases, the interior pocket doors that were
            standard in this era. She knows what the wood looks like under the
            paint, and she knows how to bring it back without damaging it.
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
            What We Do Most Often in Benton Park
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Benton Park homes were built with original woodwork as a central
            feature. Front doors with decorative molding, turned-spindle
            staircases, interior pocket doors between parlors — these pieces are
            still there in most homes, waiting under paint that should have come
            off a long time ago.
          </p>
          <ul className="space-y-6">
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Front door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Benton Park's Victorian front doors are among the most
                distinctive features of the neighborhood — paneled, often with
                original hardware and decorative molding profiles that can't be
                replicated. Most have been painted over multiple times. Sue
                hand-strips each door, repairs any damage, and refinishes to
                restore the original wood rather than cover it again.
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
                The turned-spindle staircases in these homes require hand work.
                Dipping destroys the glue joints in spindles and raises the
                grain across treads. Sue strips and refinishes treads, risers,
                spindles, newel posts, and railings by hand — all components
                matched to the same finish so the staircase reads as one piece
                again.
              </p>
            </li>
            <li>
              <h3
                className="text-lg font-semibold text-[#2A2421] mb-1"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                Interior pocket door refinishing
              </h3>
              <p className="text-[#6B5E55] font-sans leading-relaxed">
                Pocket doors between the front parlor and back parlor were
                standard in Benton Park's Victorian floor plans. Many were
                painted shut at some point and haven't moved in decades. Sue
                removes them, hand-strips and refinishes in the shop, then
                reinstalls — hardware intact, wood restored, doors operational
                again.
              </p>
            </li>
          </ul>
          <p className="text-[#6B5E55] font-sans leading-relaxed mt-6">
            Every job starts with a free in-person estimate. Sue looks at the
            wood directly, identifies what's under the current finish, notes any
            lead paint considerations, and gives you a straight answer on what
            it will take.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/door-refinishing/front-door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Front Door Refinishing →
            </Link>
            <Link
              href="/staircase-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Staircase Refinishing →
            </Link>
            <Link
              href="/door-refinishing/pocket-door-refinishing/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Pocket Door Refinishing →
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
            Historic District & EPA Requirements
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-4">
            Benton Park is listed on the{" "}
            <strong>National Register of Historic Places</strong>. Sue's
            hand-strip method is compliant with the Secretary of the Interior's
            Standards for Rehabilitation — the preservation standard that
            applies to National Register properties. Chemical dip-stripping is
            not compliant with those standards and can compromise the structural
            integrity of historic woodwork.
          </p>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            If you're planning a broader restoration project, working with a
            contractor whose methods meet preservation standards matters. Sue's
            process does.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link
              href="/historic-preservation/"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              Historic Preservation Guide →
            </Link>
            <Link
              href="/faq"
              className="text-[#A65D37] font-sans font-medium hover:underline"
            >
              FAQ: Hand-Stripping vs. Dipping →
            </Link>
          </div>
          <div className="bg-[#EBE6DE] border-l-4 border-[#11B2E8] p-4 rounded">
            <p className="text-[#2A2421] font-sans text-sm leading-relaxed">
              <strong>EPA note:</strong> Virtually every home in Benton Park
              predates 1978 — most predate 1920. EPA RRP regulations require a
              Certified Lead Removal for any refinishing work that disturbs
              lead paint. Sue Wheeler is EPA Certified. Her process includes
              proper containment, HEPA vacuuming, and documentation — protecting
              your family and keeping your project compliant.
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
            From a Benton Park Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "[Testimonial about Benton Park project — front door, staircase,
              or full house woodwork]"
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, Benton Park
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
            Get a Free Estimate for Your Benton Park Home
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
            She'll come to your home, look at the wood in person, and tell you
            exactly what's under the current finish — and what it will cost to
            do it right. No upselling, no guesswork.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#A65D37] text-white font-sans font-medium px-6 py-3 rounded hover:bg-[#8f4f2e] transition-colors"
          >
            Request a Free Estimate →
          </Link>
          <p className="text-[#6B5E55] font-sans text-sm mt-6">
            EPA Certified Lead Removal. Est. 1989. St. Louis Magazine —
            &ldquo;Perfect Finish.&rdquo;
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
