import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Project Portfolio | Wood Refinishing by Sue Wheeler, St. Louis",
  description:
    "Before-and-after wood refinishing photos from St. Louis homes and businesses — kitchens, doors, staircases, built-ins, commercial, and landmark spaces. Sue Wheeler.",
};

const categories = [
  {
    title: "Residential",
    description:
      "Kitchens, doors, staircases, built-ins, and room millwork from St. Louis homes. The oldest woodwork we work on is over 100 years old. Most of it refinishes beautifully.",
    href: "/portfolio/residential",
  },
  {
    title: "Historic Preservation",
    description:
      "Properties in certified historic districts where the Secretary of the Interior's Standards apply. Hand-strip method. Documented and compliant.",
    href: "/portfolio/historic-preservation",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <TrustBar />

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
            Thirty-six years of work. <em>Here&rsquo;s some of it.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans mb-8 leading-relaxed">
            Kitchens, doors, staircases, built-ins, bar tops, church pews,
            concert halls. Every job in this portfolio was stripped by hand,
            finished with polyurethane, and returned in better shape than it
            arrived.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 text-base font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors"
          >
            <Phone size={16} />
            (314) 367-6054 — Get a Free Estimate
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed mb-4">
            There&rsquo;s no substitute for seeing the work.
          </p>
          <p className="text-base font-sans text-[#6B5E55] leading-relaxed">
            Sue Wheeler has been refinishing architectural woodwork in St. Louis
            since 1989. In that time, she&rsquo;s restored original pocket doors
            in Central West End bungalows, stripped and refinished original
            staircases in Benton Park, matched 100-year-old stain on built-in
            hutches in Compton Heights, and brought back hundreds of kitchen
            cabinets that homeowners thought were past saving.
          </p>
        </div>
      </section>

      {/* Portfolio categories */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.href}
                className="bg-[#F8F6F1] p-8"
                style={{ borderRadius: "2px" }}
              >
                {/* Photo placeholder */}
                <div
                  className="w-full h-48 bg-[#EBE6DE] mb-6 flex items-center justify-center"
                  style={{ borderRadius: "2px" }}
                >
                  <span className="text-xs font-sans uppercase tracking-widest text-[#6B5E55]">
                    Photos coming soon
                  </span>
                </div>
                <h2
                  className="font-serif italic text-2xl text-[#2A2421] mb-3"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {cat.title}
                </h2>
                <p className="text-sm font-sans text-[#6B5E55] mb-4 leading-relaxed">
                  {cat.description}
                </p>
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
                >
                  View gallery <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real photos note */}
      <section className="py-10 px-6 bg-[#F8F6F1]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-sans text-[#6B5E55]">
            We&rsquo;re adding project photos now. In the meantime, call{" "}
            <a href="tel:3143676054" className="text-[#11B2E8]">
              (314) 367-6054
            </a>{" "}
            — Sue can describe the work she&rsquo;s done that matches your
            project.
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
