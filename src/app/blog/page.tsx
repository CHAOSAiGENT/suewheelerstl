import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Wood Refinishing Guide | Sue Wheeler St. Louis",
  description:
    "Practical guides on wood refinishing in St. Louis — costs, methods, lead paint, historic woodwork. From Sue Wheeler, 36 years experience.",
  openGraph: {
    title: "Wood Refinishing Guide | Sue Wheeler St. Louis",
    description:
      "Practical guides on wood refinishing in St. Louis — costs, methods, lead paint, historic woodwork.",
    url: "https://suewheelerstl.com/blog",
  },
};

const posts = [
  {
    slug: "dip-stripping-historic-woodwork",
    title: "Why Dip-Stripping Destroys Historic Woodwork",
    description:
      "Chemical dip tanks raise wood grain, dissolve hide glue joinery, and leave old-growth wood looking flat. Here's what hand-stripping does instead — and how to tell which method a contractor uses.",
    category: "Methods & Technique",
    date: "April 2025",
  },
  {
    slug: "lead-paint-wood-refinishing-st-louis",
    title: "Lead Paint and Wood Refinishing in St. Louis",
    description:
      "89.8% of St. Louis City homes predate 1978. If yours does, lead paint is almost certainly present. Here's what the EPA requires, what certification means, and how to verify a contractor.",
    category: "Safety & Compliance",
    date: "April 2025",
  },
  {
    slug: "wood-refinishing-cost-st-louis",
    title: "How Much Does Wood Refinishing Cost in St. Louis?",
    description:
      "Realistic price ranges for door refinishing, staircase refinishing, and kitchen cabinet refinishing in St. Louis — plus what drives cost up or down, and how it compares to replacement.",
    category: "Cost & Planning",
    date: "April 2025",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <TrustBar />

      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            Wood Refinishing Guides
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Practical guides from <em>36 years of experience.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl">
            What you need to know before refinishing your woodwork — written by
            Sue Wheeler, not a content team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b pb-10"
              style={{ borderColor: "rgba(42,36,33,0.1)" }}
            >
              <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-3">
                {post.category}
              </p>
              <h2
                className="text-2xl text-[#2A2421] mb-3"
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[#11B2E8] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-base font-sans text-[#6B5E55] leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-sans text-[#A65D37]">
                  {post.date} · Sue Wheeler
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:gap-3 transition-all"
                >
                  Read <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABlock />
    </>
  );
}
