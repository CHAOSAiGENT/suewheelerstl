import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#2A2421", color: "#EBE6DE" }}>
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Business info */}
          <div>
            <p
              className="font-serif italic text-2xl mb-4 text-white"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              Sue Wheeler
            </p>
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] mb-4 font-sans">
              Wood Refinishing
            </p>
            <div className="space-y-2 text-sm text-[#EBE6DE] font-sans">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[#11B2E8] shrink-0" />
                <span>
                  5260 Washington Place<br />
                  St. Louis, MO 63108
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#11B2E8] shrink-0" />
                <a
                  href="tel:3143676054"
                  className="text-[#11B2E8] hover:text-white transition-colors"
                >
                  (314) 367-6054
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] mb-4 font-sans">
              Services
            </p>
            <ul className="space-y-2 text-sm font-sans">
              {[
                ["Kitchen Cabinet Refinishing", "/kitchen-cabinet-refinishing"],
                ["Door Refinishing", "/door-refinishing"],
                ["Staircase Refinishing", "/staircase-refinishing"],
                ["Built-Ins & Millwork", "/built-ins-and-millwork-refinishing"],
                ["Commercial & Hospitality", "/commercial-and-hospitality-refinishing"],
                ["Institutional Refinishing", "/institutional-refinishing"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#EBE6DE] hover:text-[#11B2E8] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] mb-4 font-sans">
              Resources
            </p>
            <ul className="space-y-2 text-sm font-sans">
              {[
                ["Historic Preservation", "/historic-preservation"],
                ["Portfolio", "/portfolio"],
                ["Reviews", "/reviews"],
                ["FAQ", "/faq"],
                ["About Sue", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#EBE6DE] hover:text-[#11B2E8] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Credentials */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] mb-4 font-sans">
              Credentials
            </p>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>BBB A+ Accredited</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>EPA Certified Lead Renovator</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>In Business Since 1989</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>
                  Featured in{" "}
                  <em style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                    St. Louis Magazine
                  </em>{" "}
                  — &ldquo;Perfect Finish&rdquo;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#11B2E8] mt-0.5">✓</span>
                <span>The Sheldon Concert Hall</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3D3532]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B5E55] font-sans">
          <span>© 2026 Wood Refinishing by Sue Wheeler, LLC</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#EBE6DE] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-[#EBE6DE] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
