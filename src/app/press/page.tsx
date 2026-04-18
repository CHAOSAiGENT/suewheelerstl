import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Press & Recognition | Wood Refinishing by Sue Wheeler",
  description:
    "Sue Wheeler has been recognized by St. Louis Magazine and the Better Business Bureau for 36 years of expert wood refinishing in St. Louis. A+ BBB rating. EPA Certified.",
  openGraph: {
    title: "Press & Recognition | Wood Refinishing by Sue Wheeler",
    description:
      "St. Louis Magazine recognition, A+ BBB rating since 2007, EPA Certified Lead Removal. 36 years of trusted architectural wood refinishing in St. Louis.",
    url: "https://suewheelerstl.com/press",
  },
};

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://suewheelerstl.com/#business",
  name: "Wood Refinishing by Sue Wheeler, LLC",
  award: [
    "St. Louis Magazine — Perfect Finish",
    "Better Business Bureau A+ Rating",
    "BBB Accredited Business since 2007",
  ],
  hasCredential: [
    "EPA Certified Lead Removal Contractor (RRP Rule)",
    "BBB Accredited Business — A+ Rating",
  ],
};

const recognitions = [
  {
    source: "St. Louis Magazine",
    label: "Editorial Feature",
    quote: "Perfect Finish",
    context:
      "St. Louis Magazine featured Sue Wheeler's work in a recognition of the city's finest craftspeople.",
    href: null,
  },
  {
    source: "Better Business Bureau",
    label: "A+ Rating · Accredited since 2007",
    quote:
      "Zero complaints. A+ rating. Accredited continuously since September 2007.",
    context:
      "The BBB A+ rating reflects 17 years of consistent, complaint-free work — the longest standing record in the St. Louis wood refinishing category.",
    href: "https://www.bbb.org/us/mo/saint-louis/profile/woodworking/wood-refinishing-by-sue-wheeler-0734-110214169",
  },
];

const credentials = [
  {
    label: "EPA Certified Lead Removal",
    detail:
      "Certified under the EPA Renovation, Repair, and Painting (RRP) Rule. Required for work on pre-1978 homes. Every qualifying project includes full documentation.",
  },
  {
    label: "36 Years in Business",
    detail:
      "Founded in St. Louis in 1989. Owner-operated throughout. Sue Wheeler answers every call personally.",
  },
  {
    label: "BBB Accredited — A+",
    detail:
      "Accredited by the Better Business Bureau since 2007. No complaints on record.",
  },
  {
    label: "Historic Home Specialist",
    detail:
      "Compliant with Secretary of the Interior's Standards for Rehabilitation. Hand-strip method endorsed for pre-1960 architectural woodwork.",
  },
];

export default function PressPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://suewheelerstl.com" },
          {
            name: "Press & Recognition",
            url: "https://suewheelerstl.com/press",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pressSchema) }}
      />

      {/* Hero */}
      <section className="py-20 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-4">
            Recognition & Credentials
          </p>
          <h1
            className="text-4xl md:text-5xl text-[#2A2421] mb-5"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Thirty-six years of work <em>speaks for itself.</em>
          </h1>
          <p className="text-lg text-[#6B5E55] font-sans leading-relaxed max-w-2xl">
            Sue Wheeler has been recognized by St. Louis Magazine and holds an
            A+ rating with the Better Business Bureau — accredited since 2007
            with no complaints on record.
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-10"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Press & Recognition
          </h2>
          <div className="space-y-8">
            {recognitions.map((r) => (
              <div
                key={r.source}
                className="border-l-2 pl-6"
                style={{ borderColor: "#11B2E8" }}
              >
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-1">
                  {r.source} · {r.label}
                </p>
                <p
                  className="text-2xl text-[#2A2421] mb-2 italic"
                  style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontWeight: 400,
                  }}
                >
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="text-sm font-sans text-[#6B5E55] leading-relaxed mb-2">
                  {r.context}
                </p>
                {r.href && (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans font-semibold uppercase tracking-widest text-[#A65D37] hover:text-[#11B2E8] transition-colors"
                  >
                    View BBB Profile →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6 bg-[#EBE6DE]">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-10"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Credentials & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="bg-white p-6"
                style={{
                  border: "1px solid rgba(42,36,33,0.1)",
                  borderRadius: "2px",
                }}
              >
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#11B2E8] mb-2">
                  {c.label}
                </p>
                <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media enquiries */}
      <section className="py-14 px-6 bg-[#F8F6F1]">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl text-[#2A2421] mb-4"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Media enquiries
          </h2>
          <p className="text-base font-sans text-[#6B5E55] mb-6 leading-relaxed">
            For press requests, quotes on wood refinishing topics, or
            information about Sue Wheeler&rsquo;s work in St. Louis&rsquo;s
            historic neighborhoods, call or use the contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3143676054"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#2A2421] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#3d352f] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              (314) 367-6054
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#0e96c4] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
