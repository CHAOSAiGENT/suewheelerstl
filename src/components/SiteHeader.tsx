"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const services = [
  { label: "Kitchen Cabinets", href: "/kitchen-cabinet-refinishing" },
  { label: "Doors & Frames", href: "/door-refinishing" },
  { label: "Staircases", href: "/staircase-refinishing" },
  { label: "Furniture Refinishing", href: "/furniture-refinishing" },
  {
    label: "Architectural Woodwork",
    href: "/built-ins-and-millwork-refinishing",
  },
  { label: "Perk Up & Protect", href: "/perk-up-and-protect" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#EBE6DE] shadow-[0_4px_20px_rgba(42,36,33,0.1)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span
            className="font-serif italic text-xl md:text-2xl text-[#2A2421] tracking-tight"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Sue Wheeler
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#6B5E55] font-sans">
            Wood Refinishing · St. Louis
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-sans font-medium text-[#2A2421]">
          <div className="relative group">
            <button className="hover:text-[#11B2E8] transition-colors">
              Services ▾
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-[#F8F6F1] shadow-[0_10px_30px_-10px_rgba(42,36,33,0.15)] border border-[#EBE6DE] min-w-[200px] py-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-sm hover:bg-[#EBE6DE] hover:text-[#11B2E8] transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/historic-preservation"
            className="hover:text-[#11B2E8] transition-colors"
          >
            Historic Preservation
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-[#11B2E8] transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="hover:text-[#11B2E8] transition-colors"
          >
            About
          </Link>
          <Link href="/faq" className="hover:text-[#11B2E8] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:3143676054"
            className="flex items-center gap-1.5 text-sm font-sans font-medium text-[#2A2421] hover:text-[#11B2E8] transition-colors"
          >
            <Phone size={14} />
            (314) 367-6054
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-wide hover:bg-[#0e96c4] transition-colors"
            style={{ borderRadius: "2px" }}
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-[#2A2421]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F8F6F1] border-t border-[#EBE6DE]">
          <div className="px-6 py-4 space-y-1">
            <p className="text-xs uppercase tracking-widest text-[#6B5E55] font-sans mb-2">
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-sans text-[#2A2421] hover:text-[#11B2E8] border-b border-[#EBE6DE]"
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/historic-preservation"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-sans text-[#2A2421] hover:text-[#11B2E8] border-b border-[#EBE6DE]"
            >
              Historic Preservation
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-sans text-[#2A2421] hover:text-[#11B2E8] border-b border-[#EBE6DE]"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-sans text-[#2A2421] hover:text-[#11B2E8] border-b border-[#EBE6DE]"
            >
              About
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-sans text-[#2A2421] hover:text-[#11B2E8] border-b border-[#EBE6DE]"
            >
              FAQ
            </Link>
            <div className="pt-4 space-y-2">
              <a
                href="tel:3143676054"
                className="flex items-center gap-2 text-sm font-sans font-medium text-[#2A2421]"
              >
                <Phone size={14} />
                (314) 367-6054
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 bg-[#11B2E8] text-white text-sm font-sans font-medium uppercase tracking-wide"
                style={{ borderRadius: "2px" }}
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
