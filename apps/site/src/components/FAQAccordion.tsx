"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="border-b"
          style={{ borderColor: "rgba(42,36,33,0.1)" }}
        >
          <button
            className="w-full flex items-center justify-between py-5 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span
              className="font-serif text-base text-[#2A2421] group-hover:text-[#11B2E8] transition-colors pr-4"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className="text-[#A65D37] shrink-0 transition-transform"
              style={{
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          {openIndex === i && (
            <div className="pb-5 pr-8">
              <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function FAQSchema({ items }: FAQAccordionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
