import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Reviews | Wood Refinishing by Sue Wheeler, St. Louis",
  description:
    "Customer reviews for Wood Refinishing by Sue Wheeler. 36 years of referrals in St. Louis — kitchens, doors, staircases, and architectural woodwork.",
};

const kitchenReviews = [
  {
    quote:
      "We thought we'd have to replace our entire kitchen. The cabinets were painted over, the finish was gone in half the spots. Sue stripped every cabinet door by hand and matched the stain exactly. We keep catching ourselves just staring at it.",
    attribution: "Homeowner, Compton Heights",
  },
  {
    quote:
      "She talked us out of replacing the cabinets — saved us probably $20,000. The refinished result looks better than new because the wood itself is original old-growth oak. Nobody's making that anymore.",
    attribution: "Homeowner, Maplewood",
  },
];

const doorReviews = [
  {
    quote:
      "The front door looks like it was installed last week. She took it, refinished it in her shop, brought it back, and hung it. The whole neighborhood commented. Our house is from 1912 — the door looks like it belongs.",
    attribution: "Homeowner, Lafayette Square",
  },
  {
    quote:
      "Seven interior doors — all original, all in bad shape. She took every one of them to her shop, matched the stain on all seven, and had them back in less than two weeks. We barely noticed the disruption.",
    attribution: "Homeowner, Clayton",
  },
];

const staircaseReviews = [
  {
    quote:
      "This was the most dramatic transformation in our house. The staircase is the first thing you see when you walk in. She refinished the treads, the newel post, all the spindles — everything. It looks the way it must have looked in 1905.",
    attribution: "Homeowner, Compton Heights",
  },
  {
    quote:
      "She explained why dipping the spindles would have destroyed them. I didn't know any of that going in. She stripped every one by hand. It took longer, and it was absolutely worth it.",
    attribution: "Homeowner, Shaw",
  },
];

const sections = [
  {
    label: "Kitchens & Cabinets",
    reviews: kitchenReviews,
    href: "/kitchen-cabinet-refinishing",
  },
  {
    label: "Doors & Entryways",
    reviews: doorReviews,
    href: "/door-refinishing",
  },
  {
    label: "Staircases & Railings",
    reviews: staircaseReviews,
    href: "/staircase-refinishing",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  review: [
    {
      "@type": "Review",
      reviewBody:
        "We thought we'd have to replace our entire kitchen. The cabinets were painted over, the finish was gone in half the spots. Sue stripped every cabinet door by hand and matched the stain exactly. We keep catching ourselves just staring at it.",
      author: { "@type": "Person", name: "Homeowner, Compton Heights" },
      itemReviewed: { "@type": "Service", name: "Kitchen Cabinet Refinishing" },
    },
    {
      "@type": "Review",
      reviewBody:
        "She talked us out of replacing the cabinets — saved us probably $20,000. The refinished result looks better than new because the wood itself is original old-growth oak. Nobody's making that anymore.",
      author: { "@type": "Person", name: "Homeowner, Maplewood" },
      itemReviewed: { "@type": "Service", name: "Kitchen Cabinet Refinishing" },
    },
    {
      "@type": "Review",
      reviewBody:
        "The front door looks like it was installed last week. She took it, refinished it in her shop, brought it back, and hung it. The whole neighborhood commented. Our house is from 1912 — the door looks like it belongs.",
      author: { "@type": "Person", name: "Homeowner, Lafayette Square" },
      itemReviewed: { "@type": "Service", name: "Door Refinishing" },
    },
    {
      "@type": "Review",
      reviewBody:
        "Seven interior doors — all original, all in bad shape. She took every one of them to her shop, matched the stain on all seven, and had them back in less than two weeks. We barely noticed the disruption.",
      author: { "@type": "Person", name: "Homeowner, Clayton" },
      itemReviewed: { "@type": "Service", name: "Door Refinishing" },
    },
    {
      "@type": "Review",
      reviewBody:
        "This was the most dramatic transformation in our house. The staircase is the first thing you see when you walk in. She refinished the treads, the newel post, all the spindles — everything. It looks the way it must have looked in 1905.",
      author: { "@type": "Person", name: "Homeowner, Compton Heights" },
      itemReviewed: { "@type": "Service", name: "Staircase Refinishing" },
    },
    {
      "@type": "Review",
      reviewBody:
        "She explained why dipping the spindles would have destroyed them. I didn't know any of that going in. She stripped every one by hand. It took longer, and it was absolutely worth it.",
      author: { "@type": "Person", name: "Homeowner, Shaw" },
      itemReviewed: { "@type": "Service", name: "Staircase Refinishing" },
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
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
            What clients say about <em>Sue Wheeler.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed">
            Thirty-six years of referrals from people who&rsquo;ve seen the
            work. Most projects come in through word of mouth.
          </p>
        </div>
      </section>

      {/* Aggregate trust badges */}
      <section
        className="py-8 px-6 bg-[#F8F6F1] border-b"
        style={{ borderColor: "rgba(42,36,33,0.08)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "EPA Certified", value: "Lead Removal" },
              { label: "Google", value: "★★★★★" },
              {
                label: "St. Louis Magazine",
                value: "\u201cPerfect Finish\u201d",
              },
              { label: "Experience", value: "36 Years · Est. 1989" },
            ].map((b) => (
              <div key={b.label} className="text-center py-3">
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55]">
                  {b.label}
                </p>
                <p className="text-sm font-sans font-medium text-[#2A2421] mt-0.5">
                  {b.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review sections */}
      {sections.map((section, i) => (
        <section
          key={section.label}
          className="py-14 px-6"
          style={{ backgroundColor: i % 2 === 0 ? "#EBE6DE" : "#F8F6F1" }}
        >
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl text-[#2A2421] mb-8"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 400,
              }}
            >
              {section.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {section.reviews.map((r, j) => (
                <TestimonialCard key={j} {...r} />
              ))}
            </div>
            <Link
              href={section.href}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
            >
              {section.label} refinishing <ArrowRight size={12} />
            </Link>
          </div>
        </section>
      ))}

      {/* Leave a review note */}
      <section className="py-12 px-6 bg-[#EBE6DE]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-sans text-[#6B5E55]">
            If you&rsquo;ve worked with Sue and want to leave a review,{" "}
            <a href="tel:3143676054" className="text-[#11B2E8]">
              call (314) 367-6054
            </a>{" "}
            or leave us a review on Google.
          </p>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
