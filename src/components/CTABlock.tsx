import Link from "next/link";
import { Phone } from "lucide-react";

interface CTABlockProps {
  heading?: string;
  subtext?: string;
  dark?: boolean;
}

export function CTABlock({
  heading = "Ready to talk about your wood?",
  subtext = "Free estimates. No obligation. Sue answers every call personally.",
  dark = true,
}: CTABlockProps) {
  return (
    <section
      className="py-16 px-6 text-center"
      style={{
        backgroundColor: dark ? "#2A2421" : "#11B2E8",
        color: "#EBE6DE",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
        >
          {heading}
        </h2>
        <p className="text-base text-[#9e9087] font-sans mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
            style={{ borderRadius: "2px" }}
          >
            Get a Free Estimate
          </Link>
          <a
            href="tel:3143676054"
            className="flex items-center gap-2 text-lg font-sans font-medium text-white hover:text-[#11B2E8] transition-colors"
          >
            <Phone size={18} />
            (314) 367-6054
          </a>
        </div>
      </div>
    </section>
  );
}
