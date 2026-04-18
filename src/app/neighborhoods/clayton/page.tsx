import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing — Clayton MO | Sue Wheeler",
  description:
    "Wood refinishing in Clayton — upscale residential, high-end kitchen cabinet refinishing, mixed era housing. Some NR contributing structures. Sue Wheeler.",
};


const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com/neighborhoods/clayton",
  telephone: "+13143676054",
  areaServed: {
    "@type": "Neighborhood",
    name: "Clayton",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6471,
      longitude: -90.3237,
    },
  },
};

export default function ClaytonPage() {
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
            Wood Refinishing in Clayton
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Pre-war colonials and Tudors, mid-century homes with original
            woodwork. Sue Wheeler has worked in Clayton's residential
            neighborhoods throughout her career.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2A2421] font-sans leading-relaxed text-base">
            Clayton is St. Louis County's business and civic center — and one of
            its most desirable residential addresses. The housing stock spans a
            wide range of eras and styles: pre-war colonials and Tudors from the
            1920s and 30s, mid-century ranch and split-level homes, and more
            recent custom construction. What most have in common is high-quality
            original materials and owners who care about maintaining them.
          </p>
          <p className="text-[#2A2421] font-sans leading-relaxed text-base mt-4">
            Sue Wheeler has worked in Clayton's residential neighborhoods
            throughout her career.
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
            What We Do Most Often in Clayton
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Clayton's residential projects tend to center on kitchen cabinets
            and doors — reflecting both the higher-value housing stock and the
            investment decisions owners are making in well-established homes.
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
                Clayton homes frequently have original or high-quality cabinetry
                that's worth preserving — solid wood face frames, raised panel
                doors, finishes that have simply aged. We strip by hand, repair
                any damage, and refinish to either restore the original
                character or update the color. Refinishing at a fraction of the
                cost of replacement, with results that new cabinets can't
                replicate.
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
                Both interior and exterior doors in Clayton homes are frequently
                solid wood and high quality. Front doors especially represent an
                investment worth maintaining. We remove, strip, and refinish in
                our shop for consistent results.
              </p>
            </li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
            Historic District &amp; EPA Requirements
          </h2>
          <p className="text-[#6B5E55] font-sans leading-relaxed mb-6">
            Some structures in Clayton are listed as{" "}
            <strong>contributing resources</strong> to the National Register of
            Historic Places. If your home is individually listed or in a
            contributing district, confirm eligibility with the Missouri SHPO or
            a preservation consultant.
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
              <strong>EPA note:</strong> Pre-war homes in Clayton predate 1978.
              EPA RRP regulations apply to refinishing work on homes built
              before that year. Sue Wheeler is EPA Certified and follows proper
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
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            From a Clayton Client
          </h2>
          <blockquote className="border-l-4 border-[#A65D37] pl-6">
            <p className="text-[#2A2421] font-sans leading-relaxed italic mb-3">
              "We have an early 1930s Colonial and the kitchen cabinets were
              original — solid wood, but the finish was completely gone. Sue
              stripped and refinished them and they look better than they
              probably ever did. We priced replacements and it wasn't close."
            </p>
            <cite className="text-[#6B5E55] font-sans text-sm not-italic">
              — Homeowner, Clayton
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
            Get a Free Estimate for Your Clayton Home or Business
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
            She'll assess your cabinets, your doors, and your woodwork — and
            give you a straight answer on what it will take.
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
