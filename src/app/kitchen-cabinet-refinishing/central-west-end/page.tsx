import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { CTABlock } from "@/components/CTABlock";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Central West End Kitchen Cabinet Refinishing St. Louis | Sue Wheeler",
  description:
    "Expert kitchen cabinet refinishing in the Central West End. Hand-stripping original Douglas fir and white oak cabinetry in CWE mansions and row houses since 1989. EPA Certified for lead paint. Free estimate — (314) 367-6054.",
};

const breadcrumbItems = [
  { name: "Home", url: "https://suewheelerstl.com" },
  {
    name: "Kitchen Cabinet Refinishing",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing",
  },
  {
    name: "Central West End",
    url: "https://suewheelerstl.com/kitchen-cabinet-refinishing/central-west-end",
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
  description:
    "Hand-stripping and refinishing kitchen cabinets in Central West End historic homes since 1989. EPA Certified Lead Renovator.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you refinish kitchen cabinets in the Central West End?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sue Wheeler has been refinishing kitchen cabinets in Central West End mansions and row houses for over 36 years. The neighborhood's original Douglas fir and white oak cabinetry responds exceptionally well to hand-stripping and proper refinishing.",
      },
    },
    {
      "@type": "Question",
      name: "My CWE kitchen cabinets have been painted multiple times — is refinishing still worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost always, yes. Multiple layers of paint are stripped by hand in our shop — we never use dip tanks, which raise the wood grain and destroy finish adhesion. Once stripped, the original old-growth Douglas fir or white oak underneath is typically in excellent condition and ready for a lasting new finish.",
      },
    },
    {
      "@type": "Question",
      name: "Can you match the stain on my original oak cabinets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stain matching is one of Sue's specialties. Whether you want to restore the original tone or transition to a new color while keeping the wood grain visible, we custom-blend stains on-site and test on an inconspicuous area before committing to the full kitchen.",
      },
    },
  ],
};

export default function CentralWestEndKitchenCabinetPage() {
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
            className="text-xs uppercase tracking-widest font-sans mb-4"
            style={{ color: "#A65D37" }}
          >
            Kitchen Cabinet Refinishing — Central West End
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 leading-tight"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Kitchen Cabinet Refinishing in <em>Central West End</em>
          </h1>
          <p
            className="text-lg font-sans mb-8 max-w-2xl"
            style={{ color: "#6B5E55" }}
          >
            Central West End kitchens hold some of the finest original cabinetry
            in St. Louis — old-growth Douglas fir and white oak built to last
            centuries. We hand-strip and refinish those cabinets back to life,
            at a fraction of what replacement costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-white font-sans font-medium rounded"
              style={{ backgroundColor: "#11B2E8" }}
            >
              Get a Free Estimate
            </a>
            <a
              href="tel:3143676054"
              className="inline-flex items-center gap-2 px-8 py-4 font-sans font-medium rounded border"
              style={{ color: "#2A2421", borderColor: "#2A2421" }}
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
            className="text-3xl md:text-4xl mb-8"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What makes Central West End kitchen cabinets worth refinishing
          </h2>
          <div className="space-y-6 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Central West End homes built between 1880 and 1920 were
              constructed at a time when old-growth timber was still being
              harvested. The Douglas fir and white oak milled for those original
              kitchens came from trees that had grown for two hundred years or
              more — dense, tight-grained, and extraordinarily stable. That wood
              simply cannot be replicated today. New-growth lumber, even premium
              grades, doesn't compare in density, figure, or longevity.
            </p>
            <p>
              Over the decades, Central West End kitchens have been updated
              repeatedly — painted in the fifties, repainted in the eighties,
              updated again whenever a new owner moved in. Most of those updates
              happened on top of the original cabinet boxes, which means the
              bones are still there. Underneath layers of latex and oil-based
              paint, the original fir or oak is waiting. In most cases, it is in
              better shape than the new cabinetry you would buy to replace it.
            </p>
            <p>
              Refinishing those cabinets restores what the neighborhood already
              has — character, craftsmanship, and wood that will outlast any
              modern replacement by decades. It also costs 60 to 80 percent less
              than a cabinet replacement project, with no demolition, no
              dumpster, and no weeks of kitchen disruption.
            </p>
            <p>
              We remove the cabinet doors and drawer fronts, bring them to our
              shop for careful hand-stripping, and return them finished and
              ready to hang. The cabinet boxes are worked in place. You keep the
              original wood, the original proportions, and the original
              character of a Central West End kitchen — with a finish that will
              hold up to daily use for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            What we do with your kitchen cabinets
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Door &amp; Drawer Front Refinishing
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Every cabinet door and drawer front is removed and transported
                to our shop. We hand-strip each piece — no dip tanks, ever. Dip
                tanks raise the wood grain and destroy the adhesion of any
                subsequent finish. Hand-stripping takes more time but leaves the
                wood surface clean, flat, and ready to hold a lasting
                polyurethane finish or stain.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Cabinet Box &amp; Frame Work
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                The cabinet boxes and face frames that remain in your kitchen
                are stripped, sanded, and refinished in place. We protect your
                countertops, appliances, and floors throughout the process. The
                result is a seamless finish across doors, frames, and boxes —
                not a patchwork where the doors look new and the boxes look old.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Color Changes
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Want to move from stained wood to painted cabinets, or from dark
                stain to a lighter tone? We handle full color transitions —
                stripping the existing finish completely before applying the new
                one. Central West End homeowners frequently transition natural
                oak to a painted finish for a updated look while keeping the
                original solid-wood construction underneath.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Stain Matching
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Matching an existing stain — whether you want to restore the
                original tone or blend new additions into older cabinetry — is
                one of Sue's long-standing specialties. After 36 years working
                in St. Louis kitchens, she has matched virtually every stain
                profile that appears in historic CWE homes and custom- blends
                on-site to get it exactly right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead paint callout */}
      <section
        style={{
          backgroundColor: "#F8F6F1",
          borderLeftWidth: "4px",
          borderLeftStyle: "solid",
          borderLeftColor: "#11B2E8",
        }}
        className="py-14 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            EPA Certified for lead paint — required in Central West End kitchens
          </h2>
          <div className="space-y-4 font-sans" style={{ color: "#6B5E55" }}>
            <p>
              Every home in the Central West End built before 1978 is presumed
              to contain lead paint under EPA regulations — and virtually all of
              them do. Kitchen cabinets that have been painted multiple times
              over decades almost certainly have lead paint layers beneath the
              most recent coat. Disturbing those layers without proper
              containment and handling protocols creates a serious health hazard
              for your family.
            </p>
            <p>
              Sue Wheeler holds EPA Lead-Safe Certification, which is a legal
              requirement for any contractor performing renovation work that
              disturbs painted surfaces in pre-1978 homes. We follow all
              required containment, cleanup, and disposal procedures — so your
              family is protected and you are fully covered for any inspection
              or disclosure requirement when you sell.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#EBE6DE" }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote
            className="text-xl md:text-2xl italic mb-6"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            "We had four layers of paint on our kitchen cabinets and I was
            certain we'd have to gut the whole kitchen. Sue stripped everything
            by hand and the fir underneath was absolutely beautiful — better
            than anything we could have bought new. The kitchen looks like it
            was always meant to look."
          </blockquote>
          <p className="font-sans text-sm" style={{ color: "#6B5E55" }}>
            — Margaret T., homeowner, Central West End
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8F6F1" }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl mb-10"
            style={{
              color: "#2A2421",
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Frequently asked questions
          </h2>
          <div className="space-y-10">
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Do you refinish kitchen cabinets in the Central West End?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Yes. Sue Wheeler has been refinishing kitchen cabinets in
                Central West End mansions and row houses for over 36 years. The
                neighborhood's original Douglas fir and white oak cabinetry
                responds exceptionally well to hand-stripping and proper
                refinishing.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                My CWE kitchen cabinets have been painted multiple times — is
                refinishing still worth it?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Almost always, yes. Multiple layers of paint are stripped by
                hand in our shop — we never use dip tanks, which raise the wood
                grain and destroy finish adhesion. Once stripped, the original
                old-growth Douglas fir or white oak underneath is typically in
                excellent condition and ready for a lasting new finish.
              </p>
            </div>
            <div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "#2A2421",
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: 400,
                }}
              >
                Can you match the stain on my original oak cabinets?
              </h3>
              <p className="font-sans" style={{ color: "#6B5E55" }}>
                Stain matching is one of Sue's specialties. Whether you want to
                restore the original tone or transition to a new color while
                keeping the wood grain visible, we custom-blend stains on-site
                and test on an inconspicuous area before committing to the full
                kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        heading="Let's talk about your Central West End cabinets."
        subtext="Free estimate. No obligation. Sue answers every call personally — (314) 367-6054."
      />
    </>
  );
}
