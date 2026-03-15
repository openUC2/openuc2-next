"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { label: "For Educators", items: [{ name: "Discovery Line — Educational Kits", href: "/products/discovery" }] },
  { label: "For Researchers & Professionals", items: [{ name: "FRAME — Automated Microscope", href: "/products/frame" }] },
  { label: "For Makers & Developers", items: [{ name: "Open Platform & Community", href: "/products/makers" }] },
];

const applications = [
  { name: "All Applications", href: "/applications", bold: true },
  { label: "Imaging Modalities", items: [
    { name: "Fluorescence Imaging", href: "/applications/fluorescence" },
    { name: "FLIM & Advanced Fluorescence", href: "/applications/flim" },
  ]},
  { label: "Life Science Workflows", items: [
    { name: "Histology & Slide Scanning", href: "/applications/histology" },
    { name: "Live-Cell & Time-Lapse", href: "/applications/livecell" },
    { name: "Organoid QC (In-Incubator)", href: "/applications/organoid" },
    { name: "Multiwell Screening", href: "/applications/multiwell" },
    { name: "DNA-FISH & Genomic Imaging", href: "/applications/dnafish" },
  ]},
  { label: "Specialist Applications", items: [
    { name: "Remote & BSL Microscopy", href: "/applications/remotebsl" },
    { name: "Raman Upgrade Path", href: "/applications/raman" },
    { name: "Space-Borne Optical Engine", href: "/applications/space" },
  ]},
  { label: "Learning & Community", items: [
    { name: "Teaching & Workshops", href: "/applications/education" },
  ]},
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/95 backdrop-blur-md border-b border-uc2-border shadow-sm">
      <div className="max-w-[1140px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img src="/openuc2-next/images/logo-text.png" alt="openUC2" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 text-sm">
          <li>
            <Link href="/#how-it-works" className="px-3 py-2 text-uc2-gray hover:text-uc2-blue transition-colors">
              Technology
            </Link>
          </li>

          {/* Products dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-uc2-gray hover:text-uc2-blue transition-colors">
              Products <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {openDropdown === "products" && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-72 bg-white border border-uc2-border rounded-lg shadow-xl p-3">
                  {products.map((group) => (
                    <div key={group.label}>
                      <div className="text-[11px] uppercase tracking-wider text-uc2-gray px-3 pt-2 pb-1">
                        {group.label}
                      </div>
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-uc2-text hover:text-uc2-blue hover:bg-uc2-light rounded-md transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Applications dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown("applications")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-uc2-gray hover:text-uc2-blue transition-colors">
              Applications <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {openDropdown === "applications" && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-72 bg-white border border-uc2-border rounded-lg shadow-xl p-3 max-h-[70vh] overflow-y-auto">
                  {applications.map((item) => {
                    if ("href" in item && "bold" in item) {
                      return (
                        <Link
                          key={item.href}
                          href={item.href!}
                          className="block px-3 py-2 text-sm font-semibold text-uc2-heading hover:text-uc2-blue hover:bg-uc2-light rounded-md transition-colors"
                        >
                          {item.name} →
                        </Link>
                      );
                    }
                    if ("label" in item && "items" in item) {
                      return (
                        <div key={item.label}>
                          <div className="text-[11px] uppercase tracking-wider text-uc2-gray px-3 pt-3 pb-1">
                            {item.label}
                          </div>
                          {item.items!.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-3 py-1.5 text-sm text-uc2-text hover:text-uc2-blue hover:bg-uc2-light rounded-md transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link href="/configurator" className="px-3 py-2 text-uc2-gray hover:text-uc2-blue transition-colors">
              Configurator
            </Link>
          </li>
          <li>
            <Link href="/about" className="px-3 py-2 text-uc2-gray hover:text-uc2-blue transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="px-3 py-2 text-uc2-gray hover:text-uc2-blue transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="px-3 py-2 text-uc2-gray hover:text-uc2-blue transition-colors">
              Contact
            </Link>
          </li>
          <li className="ml-2">
            <a
              href="https://shop.openuc2.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-uc2-green text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              Shop →
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-uc2-heading p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-uc2-border max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            <Link href="/#how-it-works" onClick={() => setMobileOpen(false)} className="block py-2 text-uc2-text hover:text-uc2-blue">
              Technology
            </Link>
            <div className="py-2">
              <div className="text-[11px] uppercase tracking-wider text-uc2-gray mb-1">Products</div>
              {products.flatMap(g => g.items).map(item => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-1.5 pl-3 text-sm text-uc2-text hover:text-uc2-blue">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-2">
              <div className="text-[11px] uppercase tracking-wider text-uc2-gray mb-1">Applications</div>
              <Link href="/applications" onClick={() => setMobileOpen(false)} className="block py-1.5 pl-3 text-sm font-semibold text-uc2-heading">
                All Applications →
              </Link>
              {applications.filter(a => "items" in a).flatMap((a: any) => a.items).map((item: any) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-1.5 pl-3 text-sm text-uc2-text hover:text-uc2-blue">
                  {item.name}
                </Link>
              ))}
            </div>
            <Link href="/configurator" onClick={() => setMobileOpen(false)} className="block py-2 text-uc2-text hover:text-uc2-blue">
              Configurator
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-uc2-text hover:text-uc2-blue">
              About
            </Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block py-2 text-uc2-text hover:text-uc2-blue">
              Blog
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-uc2-text hover:text-uc2-blue">
              Contact
            </Link>
            <a
              href="https://shop.openuc2.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-center py-2.5 bg-uc2-green text-white font-semibold rounded-lg"
            >
              Shop →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
