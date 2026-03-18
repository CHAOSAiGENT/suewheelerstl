interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-[#F8F6F1]" style={{ borderRadius: "2px" }}>
      <blockquote
        className="font-serif italic text-lg text-[#2A2421] leading-relaxed"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] not-italic">
        — {attribution}
      </cite>
    </div>
  );
}
