import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-[#F8F6F1] p-6 hover:shadow-[0_10px_30px_-10px_rgba(42,36,33,0.12)] transition-shadow"
      style={{ borderRadius: "2px" }}
    >
      <h3
        className="font-serif italic text-xl text-[#2A2421] mb-2 group-hover:text-[#11B2E8] transition-colors"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        {title}
      </h3>
      <p className="text-sm font-sans text-[#6B5E55] mb-4 leading-relaxed">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] group-hover:gap-2 transition-all">
        Learn more <ArrowRight size={12} />
      </span>
    </Link>
  );
}
