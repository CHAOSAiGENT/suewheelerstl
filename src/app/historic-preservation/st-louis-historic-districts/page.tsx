import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CTABlock } from "@/components/CTABlock";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "St. Louis Historic Districts | Wood Refinishing & Tax Credit Eligibility | Sue Wheeler",
  description:
    "Which St. Louis neighborhoods qualify for historic preservation tax credits? Full district guide — certified, local, and National Register. Sue Wheeler, 36 years in STL.",
};

const faqs = [
  {
    question: "What's the difference between a Certified Local Historic District and a Local Historic District?",
    answer:
      "A Certified Local Historic District has gone through formal state and federal certification — it meets specific criteria set by the National Park Service and Missouri SHPO, and properties within it have a clear pathway to historic tax credit eligibility. A Local Historic District is designated by the City of St. Louis but hasn't completed that full certification process. Properties in local (non-certified) districts may still qualify for credits, but you need to confirm your specific property's status with SHPO rather than assuming eligibility from the district name alone.",
  },
  {
    question: "My home is in Lafayette Square. Do I qualify?",
    answer:
      "Lafayette Square is a Local Historic District — not yet certified — which means eligibility isn't automatic from district membership alone. However, many individual properties within Lafayette Square are listed on the National Register of Historic Places or are contributing structures in a National Register historic district, which creates a separate pathway to credit eligibility. The right move: call SHPO at 573-751-7860 and ask about your specific address. Sue Wheeler has also worked throughout Lafayette Square for decades and can give you a useful read before you make that call.",
  },
  {
    question: "What is a \"contributing structure\"?",
    answer:
      "A contributing structure is a building within a historic district that was constructed during the district's historic period of significance and retains enough of its original character-defining features to contribute to what makes the district historically significant. In a block of 1880s Soulard rowhouses, an 1885 building with intact facade elements is likely contributing. A building heavily remodeled in the 1970s in the same block might be non-contributing — even though it's in the same district. Contributing status is what makes a building eligible for tax credits within a certified district. SHPO can confirm your building's status.",
  },
  {
    question: "Is National Register listing restrictive — does it limit what I can do to my home?",
    answer:
      "No. Being on the National Register doesn't restrict what you can do to your privately owned property. It makes you eligible for tax credits and certain federal protections if federal funds are involved nearby — but it doesn't prevent you from renovating, selling, or altering your home. The restrictions that apply to historic districts are local zoning designations, not the National Register listing itself.",
  },
  {
    question: "I'm in Hyde Park / The Ville / a North St. Louis neighborhood. Is there any point in checking?",
    answer:
      "Absolutely. Some of St. Louis's most intact pre-1900 architecture is in North St. Louis neighborhoods that don't receive the same attention as CWE or Soulard. Hyde Park is a Certified Local Historic District with strong eligibility. Properties in The Ville and other North St. Louis areas may have individual National Register listings or contributing structure status in NR districts. Don't write off your eligibility before checking. The SHPO consultation is free.",
  },
];

const certifiedDistricts = [
  {
    name: "Central West End",
    body: "One of St. Louis's most architecturally intact neighborhoods. The streets — Westmoreland, Portland, Westminster, Kingsbury — are lined with Victorian, Craftsman, and early-20th-century mansions and rowhouses, most built between 1890 and 1925. Original woodwork in CWE homes runs deep: quarter-sawn oak staircases, pocket doors with original glass, built-in hutches in dining rooms, elaborate front entry surrounds. Sue Wheeler has refinished woodwork in the Central West End for the entire duration of her career. Contributing structures here have strong eligibility for the Missouri 25% state historic tax credit.",
  },
  {
    name: "Compton Hill",
    body: "South of Compton Avenue, bounded roughly by Grand and Jefferson, Compton Hill is a neighborhood of late-Victorian brick homes from the 1890s and early 1900s — built for middle-class families at the height of St. Louis's industrial prosperity. The Compton Hill Reservoir water tower is the neighborhood's landmark. The housing stock is heavily pre-1920, and original interior woodwork survives in many homes. The staircase in a Compton Heights two-flat may be 120 years old and still refinishable — but it requires someone who knows what they're doing.",
  },
  {
    name: "Fox Park",
    body: "A compact neighborhood southeast of Tower Grove Park, Fox Park is dense with brick rowhouses and two-flats built between 1890 and 1920. It's been growing in recognition among preservation-minded buyers — partly because the housing stock is intact and partly because the prices reflect how recently the neighborhood's value has been recognized. Contributing structure density is high. Original millwork, doors, and staircases survive throughout.",
  },
  {
    name: "Hyde Park",
    body: "In North St. Louis, Hyde Park contains some of the city's oldest residential architecture — Italianate and Second Empire homes from the 1860s through the 1890s, built when this area was St. Louis's emerging prosperous suburb. The city has invested in the neighborhood in recent years. For a preservationist, Hyde Park homes are time capsules: original wood from before the turn of the 20th century, in a neighborhood that's finally receiving the attention it deserves.",
  },
  {
    name: "Shaw Neighborhood",
    body: "Named for Henry Shaw, who founded the Missouri Botanical Garden across the street, Shaw is an early-20th-century neighborhood of solidly built brick bungalows and two-flats. It's one of the most stable historic neighborhoods in St. Louis City — consistently owner-occupied, consistently maintained. Quarter-sawn oak millwork from the 1910s and 1920s appears throughout. A Shaw homeowner restoring original woodwork has strong credit eligibility and predictable project scope.",
  },
  {
    name: "Skinker-DeBaliviere / Catlin Tract / Parkview",
    body: "A cluster of upscale early-20th-century neighborhoods bordering Forest Park on the west. Built from roughly 1900 through the 1920s, these streets contain exceptional architectural variety — Prairie Style, Colonial Revival, Arts and Crafts, Tudor Revival, Georgian. The Catlin Tract in particular has some of the finest residential construction in the city. Contributing structure density is very high. Original woodwork — staircases, built-in millwork, front entry systems — survives in remarkable condition in many homes.",
  },
  {
    name: "Soulard",
    body: "St. Louis's oldest surviving neighborhood. Settled by French traders in the early 1800s, Soulard's brick rowhouses and Federal-style buildings date from the 1840s through the 1880s. This is some of the oldest residential housing stock in the city. When Sue Wheeler refinishes a door in Soulard, she may be working with wood that predates the Civil War. That requires patience, the right chemical approach, and decades of experience reading what old wood needs. Soulard homeowners pursuing historic tax credits have strong eligibility — and one of the most compelling cases for why the original material should be preserved rather than replaced.",
  },
  {
    name: "Visitation Park",
    body: "A well-preserved early-20th-century residential district in the northwest portion of the city, primarily single-family homes from the 1910s and 1920s. Less well-known than CWE or Soulard, but with solid certified district status and the same credit eligibility as the more prominent neighborhoods.",
  },
];

const localDistricts = [
  {
    name: "Lafayette Square",
    body: "One of St. Louis's most photographed neighborhoods and the city's first planned residential district. Victorian mansions and brick rowhouses dating from the 1860s and 1870s, many fully restored by preservation-minded owners over the past three decades. Lafayette Square is a non-certified local historic district, but many individual properties within it are listed on the National Register or are contributing structures in a National Register historic district — which creates a separate pathway to credit eligibility. If you own a home in Lafayette Square, a SHPO consultation is worth the call. Sue Wheeler has worked throughout Lafayette Square for decades.",
  },
  {
    name: "Benton Park",
    body: "Adjacent to Soulard; similar age, similar character, and similar housing stock. Less recognized than its neighbor to the north, more affordable, and increasingly active with preservation-minded buyers. The brick rowhouses here from the 1870s and 1880s often have intact original interior woodwork — staircases, millwork, and built-ins that haven't been touched in generations.",
  },
  {
    name: "Tower Grove East",
    body: "The east side of Tower Grove Park carries strong late-Victorian housing stock from the 1880s through the early 1900s. Natural complement to the Shaw and Compton Hill neighborhoods on the west and north sides of the park. Solidly built and well-maintained.",
  },
  {
    name: "Cherokee-Lemp Brewery District",
    body: "Home of the Lemp Brewery complex — one of the country's great 19th-century industrial heritage sites — and the surrounding residential streets built for Lemp family employees and the surrounding community. Significant industrial heritage alongside residential architecture.",
  },
  {
    name: "McKinley Heights, North I-44, Kingsbury-Washington Terrace, The Ville, Union Station",
    body: "Each of these districts has its own character, history, and architectural merit. Credit eligibility in each area varies by property and by the specific district certification status. Contact SHPO for guidance specific to your address.",
  },
];

export default function StLouisHistoricDistrictsPage() {
  return (
    <>
      <FAQSchema items={faqs} />

      {/* Breadcrumb */}
      <div className="px-6 py-4" style={{ backgroundColor: "#F8F6F1", borderBottom: "1px solid rgba(42,36,33,0.08)" }}>
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs font-sans text-[#6B5E55]">
            <Link href="/historic-preservation" className="hover:text-[#11B2E8] transition-colors">
              Historic Preservation
            </Link>
            <span className="mx-2" style={{ color: "#A65D37" }}>›</span>
            <span style={{ color: "#2A2421" }}>St. Louis Historic Districts</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl text-[#2A2421] mb-6 leading-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            St. Louis historic districts — and what they mean for <em>your woodwork project.</em>
          </h1>
          <p className="text-xl font-sans text-[#6B5E55] mb-10 leading-relaxed">
            St. Louis has 18 designated historic districts — more than most homeowners realize. If you live in one, your original woodwork may qualify for significant tax credits. Here&rsquo;s how to know.
          </p>
          <a
            href="tel:3143676054"
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-sans font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#11B2E8", borderRadius: "2px" }}
          >
            <Phone size={16} />
            Is Your Home in a Qualifying District? Call Sue — (314) 367-6054
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-6"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            St. Louis City has 18 designated historic districts. Most homeowners don&rsquo;t know which type theirs is.
          </h2>
          <div className="space-y-4 text-base font-sans text-[#6B5E55] leading-relaxed">
            <p>
              St. Louis is one of the oldest housing markets in the United States. In St. Louis City,{" "}
              <strong className="text-[#2A2421]">89.8% of all housing units were built before 1978.</strong>{" "}
              More than half predate 1950. The city&rsquo;s certified historic districts represent some of the most intact 19th and early 20th-century residential architecture remaining in the Midwest.
            </p>
            <p>
              There are 18 designated historic districts in St. Louis City: eight Certified Local Historic Districts and ten Local Historic Districts. These aren&rsquo;t the same thing, and the distinction matters for tax credit eligibility.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex gap-3">
                <span className="shrink-0 w-2 h-2 mt-1.5 rounded-full" style={{ backgroundColor: "#11B2E8" }} />
                <span className="text-sm">
                  <strong className="text-[#2A2421]">Certified Local Historic Districts</strong> — have gone through formal state and federal certification; properties within them have the strongest pathway to historic tax credit eligibility
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-2 h-2 mt-1.5 rounded-full" style={{ backgroundColor: "#A65D37" }} />
                <span className="text-sm">
                  <strong className="text-[#2A2421]">Local Historic Districts (non-certified)</strong> — designated by the City but not yet through the full certification process; eligibility requires SHPO confirmation per property
                </span>
              </li>
            </ul>
            <p className="mt-2">
              Many additional properties throughout the city are individually listed on the National Register of Historic Places, or are contributing structures in National Register historic districts — regardless of whether they&rsquo;re in a formally named local historic district.
            </p>
            <p>
              If you&rsquo;re not sure where your home sits, a call to the Missouri SHPO{" "}
              <a href="tel:5737517860" className="underline hover:text-[#11B2E8] transition-colors">(573-751-7860)</a>
              {" "}or to Sue Wheeler can get you a working answer quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Certified districts */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: "#11B2E8" }} />
            <h2
              className="text-3xl md:text-4xl text-[#2A2421]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              The eight Certified Local Historic Districts
            </h2>
          </div>
          <p className="text-sm font-sans text-[#6B5E55] mb-8">
            Strongest eligibility for state and federal credits.
          </p>
          <div className="space-y-4">
            {certifiedDistricts.map((district) => (
              <details
                key={district.name}
                style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
              >
                <summary
                  className="cursor-pointer px-5 py-4 font-sans font-semibold text-[#2A2421] flex items-center justify-between"
                  style={{ listStyle: "none" }}
                >
                  <span>{district.name}</span>
                  <span
                    className="text-xs font-sans font-semibold uppercase tracking-widest shrink-0 ml-4"
                    style={{ color: "#11B2E8" }}
                  >
                    Certified
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{district.body}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Local (non-certified) districts */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: "#A65D37" }} />
            <h2
              className="text-3xl md:text-4xl text-[#2A2421]"
              style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
            >
              Ten additional designated districts
            </h2>
          </div>
          <p className="text-base font-sans text-[#6B5E55] mb-8 leading-relaxed">
            These neighborhoods have been designated as historic districts by the City of St. Louis but have not yet completed the full state and federal certification process. Properties in these districts may still qualify for the Missouri state historic tax credit, but eligibility requires confirmation with the SHPO for each property. Don&rsquo;t assume you don&rsquo;t qualify — and don&rsquo;t assume you do. Verify.
          </p>
          <div className="space-y-4">
            {localDistricts.map((district) => (
              <details
                key={district.name}
                style={{ backgroundColor: "#EBE6DE", borderRadius: "2px" }}
              >
                <summary
                  className="cursor-pointer px-5 py-4 font-sans font-semibold text-[#2A2421] flex items-center justify-between"
                  style={{ listStyle: "none" }}
                >
                  <span>{district.name}</span>
                  <span
                    className="text-xs font-sans font-semibold uppercase tracking-widest shrink-0 ml-4"
                    style={{ color: "#A65D37" }}
                  >
                    Verify with SHPO
                  </span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{district.body}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* How to confirm your address */}
      <section className="py-16 px-6" style={{ backgroundColor: "#EBE6DE" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Three ways to check whether your specific home is in a qualifying district.
          </h2>
          <div className="space-y-5">
            {[
              {
                num: "1",
                title: "Search the National Register database",
                body: "The NPS maintains a searchable database of all National Register-listed properties and districts. If your property or your neighborhood's district is individually listed, you'll find it here: nps.gov/subjects/nationalregister/database-research.htm. A National Register listing — individual or district — is the clearest pathway to federal credit eligibility.",
              },
              {
                num: "2",
                title: "Call Missouri SHPO",
                body: "The State Historic Preservation Office offers technical consultations. They can confirm whether your property is a contributing structure in a certified district, what your project needs to do to qualify, and what the application process looks like for your specific situation. SHPO holds consultations on Tuesday afternoons and Thursday mornings by appointment. Call 573-751-7860.",
              },
              {
                num: "3",
                title: "Contact the City of St. Louis Office of Cultural Resources",
                body: "For local historic district questions specific to St. Louis City, the Office of Cultural Resources can confirm your district designation and provide maps: stlouis-mo.gov/government/departments/planning/cultural-resources/reviews/City-Historic-Districts.cfm.",
              },
              {
                num: "4",
                title: "Call Sue",
                body: "She's worked in most of these neighborhoods for 36 years. She knows the district maps, she understands the contributing structure concept, and she can give you a working read on likely eligibility before you spend time on a formal SHPO inquiry. She's not a tax advisor or a preservation architect — but she's a credible first call if you're trying to orient yourself. (314) 367-6054. She answers personally.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-5 p-5"
                style={{ backgroundColor: "#F8F6F1", borderRadius: "2px" }}
              >
                <div
                  className="shrink-0 w-8 h-8 flex items-center justify-center text-sm font-sans font-bold text-white"
                  style={{ backgroundColor: "#A65D37", borderRadius: "2px" }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-[#2A2421] mb-2">{item.title}</h3>
                  <p className="text-sm font-sans text-[#6B5E55] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#F8F6F1" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-[#2A2421] mb-8"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 400 }}
          >
            Common questions about St. Louis historic districts.
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTABlock
        heading="Not sure where your home stands? The fastest answer is a phone call."
        subtext="Sue Wheeler has worked in most of St. Louis's historic neighborhoods for 36 years. She knows the district maps, the housing stock, and which addresses tend to qualify. She answers every call personally."
      />
    </>
  );
}
