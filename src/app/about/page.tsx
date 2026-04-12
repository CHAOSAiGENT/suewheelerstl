import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";
import { PillBadge } from "@/components/PillBadge";

export const metadata: Metadata = {
  title: "About Sue Wheeler | 36 Years of Wood Refinishing in St. Louis",
  description:
    "Meet Sue Wheeler — St. Louis's most experienced architectural wood refinisher since 1989. EPA Certified Lead Renovator. St. Louis Magazine. She answers every call personally.",
};

export default function AboutPage() {
  return (
    <>
      <TrustBar />

      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <PillBadge variant="wood">36 Years</PillBadge>
            <PillBadge variant="blue">EPA Certified</PillBadge>
            <PillBadge variant="blue">Historic Home Specialist</PillBadge>
          </div>
          <h1
            className="text-4xl md:text-6xl text-[#2A2421] mb-6 leading-tight"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            <em>36 years.</em> One city. One standard.
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Sue Wheeler has been refinishing architectural woodwork in St. Louis
            since 1989. She has never dipped a door.
          </p>
        </div>
      </section>

      {/* The Work */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              Sue started Wood Refinishing by Sue Wheeler with a simple
              conviction: the right way to refinish wood is by hand. Chemical
              strip, hand-sand, stain, seal. No shortcuts that look good for two
              years and fail in three.
            </p>
            <p>That conviction hasn&rsquo;t changed in 36 years.</p>
            <p>
              She has worked on pre-Civil War rowhouses in Lafayette Square and
              first-time historic homes in Benton Park. She has refinished the
              pocket doors of Central West End mansions and the kitchen cabinets
              of young families in Maplewood. The houses are different. The
              standard is the same.
            </p>
            <p>
              The method is the same on every project. Hand-stripped.
              Hand-sanded. Stained to match or chosen new. Finished with oil or
              water-based polyurethane — the only finish that performs the way
              architectural wood needs to perform. Nothing else.
            </p>
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Hand-stripped. <em>Never dipped.</em>
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              Dip-stripping — lowering a door or cabinet into a chemical tank —
              is fast and cheap. It is also damaging. The caustic solution
              raises the wood grain, softens the profiles, dissolves hide glue
              joints, and washes out the natural tonal variation that makes
              old-growth wood beautiful. Pieces come out looking flat, feeling
              rough, and holding finish poorly.
            </p>
            <p>
              The National Park Service&rsquo;s Secretary of the
              Interior&rsquo;s Standards for Rehabilitation specifically
              recommend hand-scraping and hand-sanding as the appropriate method
              for historic wood. Chemical dipping is not recommended and can
              compromise wood integrity. Sue&rsquo;s method is compliant with
              those standards.
            </p>
            <p>
              Sue has always stripped by hand. Not because of the standards.
              Because the standards are right.
            </p>
          </div>
          <Link
            href="/historic-preservation"
            className="inline-flex items-center gap-1.5 mt-6 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
          >
            What the NPS says about stripping historic wood{" "}
            <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            The credentials that <em>matter</em> for this work.
          </h2>

          <div className="space-y-8">
            <div>
              <h3
                className="font-serif text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                EPA Certified Lead Renovator
              </h3>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
                In St. Louis City, 89.8% of homes were built before 1978. That
                means lead paint — in the trim, the doors, the cabinets, the
                stair railings. Work on those surfaces without EPA certification
                isn&rsquo;t just careless. It is a violation of federal law and
                a health risk to your family.
              </p>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed mt-3">
                Sue Wheeler is an EPA Certified Lead Renovator. Every project on
                a pre-1978 property is handled with full lead-safe protocols:
                containment, HEPA filtration, documented disposal, and a
                completion certificate you can keep with your property records.
                You don&rsquo;t have to ask whether it&rsquo;s being handled
                correctly.
              </p>
            </div>

            <div>
              <h3
                className="font-serif text-xl text-[#2A2421] mb-3"
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              >
                St. Louis Magazine — &ldquo;Perfect Finish&rdquo;
              </h3>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
                Sue Wheeler was recognized by St. Louis Magazine in their annual
                Best of St. Louis feature. The work speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
