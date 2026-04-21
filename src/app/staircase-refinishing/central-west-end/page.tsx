import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Central West End Staircase Refinishing St. Louis | Sue Wheeler",
  description:
    "Hand-stripped staircase refinishing for Central West End Victorian and Edwardian homes. EPA-certified lead removal. 36 years restoring grand curved staircases in CWE since 1989.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Staircase Refinishing",
    url: "https://suewheelerstl.com/staircase-refinishing",
  },
  {
    name: "Central West End",
    url: "https://suewheelerstl.com/staircase-refinishing/central-west-end",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  url: "https://suewheelerstl.com",
  telephone: "(314) 367-6054",
  foundingDate: "1989",
  areaServed: {
    "@type": "Place",
    name: "Central West End, St. Louis, MO",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6461,
      longitude: -90.2649,
    },
  },
  hasCredential: "EPA Lead-Safe Certified Firm",
  description:
    "Hand-stripping staircase refinishing for Central West End Victorian and Edwardian homes. Specializing in curved staircases, carved newel posts, and old-growth Douglas fir and white oak.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish staircases in the Central West End?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Central West End is one of our most frequent service areas. We've worked in CWE for decades, refinishing staircases in Victorian mansions, brownstones, and row houses throughout the neighborhood.",
      },
    },
    {
      "@type": "Question",
      name: "My CWE staircase has a curved newel post with carved details — can those be preserved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Carved newel posts are stripped by hand, one section at a time, using tools sized to each profile. We never use dip tanks — dipping dissolves the glue at the base of spindles and damages carved surfaces. Every carved detail that went into the staircase originally can be brought back.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle lead paint on a CWE staircase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are an EPA-certified lead-safe firm. Virtually every pre-1978 home in the Central West End has lead paint somewhere — on staircases, it's often buried under multiple later layers. We follow full containment and disposal protocols throughout the stripping process, protecting your home and family.",
      },
    },
  ],
};

export default function CentralWestEndStaircaseRefinishingPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p
            style={{
              color: "#A65D37",
              fontFamily: '"Playfair Display", Georgia, serif',
            }}
            className="text-sm uppercase tracking-widest mb-4"
          >
            Staircase Refinishing
          </p>
          <h1
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-4xl md:text-5xl mb-6 leading-tight"
          >
            Staircase Refinishing in <em>Central West End</em>
          </h1>
          <p
            style={{ color: "#6B5E55" }}
            className="text-lg mb-8 leading-relaxed"
          >
            The grand staircases of Central West End Victorian and Edwardian
            homes are among the most architecturally significant woodwork in St.
            Louis. Hand-stripping, not dip tanks — so every carved detail and
            glued joint survives the process intact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              style={{ backgroundColor: "#11B2E8", color: "#fff" }}
              className="inline-block px-8 py-3 text-base font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:+13143676054"
              style={{ color: "#2A2421" }}
              className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold border border-current rounded hover:opacity-70 transition-opacity"
            >
              <Phone size={18} />
              (314) 367-6054
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhood context */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-8"
          >
            What makes Central West End staircases different
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-5 text-base leading-relaxed"
          >
            <p>
              Central West End was built in waves from roughly 1880 through
              1920, when St. Louis was still one of the wealthiest cities in the
              country. The homes that line Portland Place, Westminster Place,
              and the surrounding blocks were built to impress — and their
              staircases reflect that ambition. Sweeping curved runs,
              three-story open wells, and carved newel posts that took a
              craftsman weeks to complete are the norm rather than the
              exception.
            </p>
            <p>
              The wood is almost always old-growth Douglas fir or white oak —
              timber that grew slowly and densely in a way that modern lumber
              simply cannot replicate. The grain is tight, the surface is hard,
              and when properly stripped and finished it reveals a depth of
              color that new wood cannot match. The challenge is that over
              100-plus years, this wood has accumulated layer upon layer of
              paint, varnish, and amateur refinishing attempts.
            </p>
            <p>
              Many CWE staircases were last professionally refinished in the
              mid-20th century, then painted over by owners who didn't know what
              lay beneath. Uncovering the original wood requires patience — the
              stripping phase alone on a grand curved staircase can take several
              days of careful hand work.
            </p>
            <p>
              The scale of CWE staircases also matters. A three-story run with a
              curved balustrade involves hundreds of individual spindles,
              multiple newel posts at each landing, and wide treads that may be
              a single board across. Each element is removed, brought to the
              shop for stripping, and reinstalled once the finish work is
              complete.
            </p>
          </div>
        </div>
      </section>

      {/* Staircase components */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-10"
          >
            Every component of your Central West End staircase
          </h2>

          <div className="space-y-10">
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Treads &amp; Risers
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                CWE treads are typically wide — sometimes 48 inches or more — in
                solid old-growth Douglas fir or oak. Decades of foot traffic
                concentrate wear in the center, leaving the edges in
                near-original condition. We strip each tread individually, level
                any wear, and apply a finish that unifies the surface without
                hiding the wood's natural character. Risers are stripped and
                finished to match, whether painted or clear.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Spindles &amp; Balusters
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                CWE spindles are often elaborately turned — multiple profiles
                stacked on a single baluster. They are removed individually,
                stripped by hand in the shop, and reinstalled. We never use dip
                tanks. Dipping submerges spindles in caustic solution that
                dissolves the hide glue at the base, leaving loose joints that
                can never be fully repaired. Hand-stripping takes longer but
                leaves the joinery intact.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Newel Posts
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                The newel posts in CWE mansions are often the centerpiece of the
                staircase — carved, paneled, or fluted, sometimes topped with
                cast ornaments. We strip them in place or remove them entirely
                depending on complexity, working into each carved profile with
                tools sized for the detail. The goal is to reveal the original
                carving exactly as it was cut, not a softened approximation of
                it.
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Railings
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Curved handrails are one of the most demanding elements in
                staircase refinishing. The inside curve accumulates grime and
                old finish in ways that flat surfaces do not. We strip curved
                rails by hand, working along the grain and into every transition
                between the rail's profiles. The result is a continuous, smooth
                surface ready for a durable topcoat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{
          backgroundColor: "#F8F6F1",
          borderLeftColor: "#11B2E8",
        }}
        className="py-14 px-6 border-l-4"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-2xl mb-5"
          >
            EPA-Certified Lead-Safe Work in Pre-1978 Homes
          </h2>
          <div
            style={{ color: "#6B5E55" }}
            className="space-y-4 leading-relaxed"
          >
            <p>
              Virtually every home in Central West End was built before 1978,
              and virtually every staircase in those homes has lead paint
              somewhere in the finish layers. This is not a reason to avoid
              refinishing — it is a reason to choose a contractor who is EPA
              certified to handle it safely. We are a certified lead-safe firm
              and have been performing lead-paint removal work in CWE homes for
              decades.
            </p>
            <p>
              Our process includes full containment of the work area, proper
              disposal of all stripped material, and cleanup protocols that meet
              EPA RRP (Renovation, Repair, and Painting) requirements. You will
              receive documentation of our certification before work begins. For
              families with children or pregnant household members, we discuss
              scheduling and re-occupancy timing in detail.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-2xl leading-relaxed mb-6 italic"
          >
            "Our Portland Place home has a three-story curved staircase that no
            one had touched in fifty years. Sue's crew stripped every spindle by
            hand and brought the oak back to a color I didn't know was under
            there. It's the first thing every visitor notices now."
          </blockquote>
          <p
            style={{ color: "#6B5E55" }}
            className="text-sm uppercase tracking-widest"
          >
            — Margaret D., Portland Place, Central West End
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
            className="text-3xl mb-10"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                Do you refinish staircases in the Central West End?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Yes. The Central West End is one of our most frequent service
                areas. We've worked in CWE for decades, refinishing staircases
                in Victorian mansions, brownstones, and row houses throughout
                the neighborhood.
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                My CWE staircase has a curved newel post with carved details —
                can those be preserved?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                Absolutely. Carved newel posts are stripped by hand, one section
                at a time, using tools sized to each profile. We never use dip
                tanks — dipping dissolves the glue at the base of spindles and
                damages carved surfaces. Every carved detail that went into the
                staircase originally can be brought back.
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
                className="text-xl mb-3"
              >
                How do you handle lead paint on a CWE staircase?
              </h3>
              <p style={{ color: "#6B5E55" }} className="leading-relaxed">
                We are an EPA-certified lead-safe firm. Virtually every pre-1978
                home in the Central West End has lead paint somewhere — on
                staircases, it's often buried under multiple later layers. We
                follow full containment and disposal protocols throughout the
                stripping process, protecting your home and family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Central West End staircase."
        subtext="Call (314) 367-6054 or request a free estimate online. We've been restoring CWE staircases since 1989."
      />
    </>
  );
}
