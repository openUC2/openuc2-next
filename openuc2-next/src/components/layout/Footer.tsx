import Link from "next/link";

const footerColumns = [
  {
    title: "Products",
    links: [
      { name: "Discovery Line", href: "/products/discovery" },
      { name: "FRAME Microscope", href: "/products/frame" },
      { name: "Configurator", href: "/configurator" },
      { name: "Online Shop", href: "https://shop.openuc2.com/", external: true },
    ],
  },
  {
    title: "Applications",
    links: [
      { name: "Fluorescence", href: "/applications/fluorescence" },
      { name: "Histology", href: "/applications/histology" },
      { name: "Live-Cell Imaging", href: "/applications/livecell" },
      { name: "Multiwell Screening", href: "/applications/multiwell" },
      { name: "All Applications", href: "/applications" },
    ],
  },
  {
    title: "Built with openUC2",
    links: [
      { name: "FLIMlabs — FLIM Integration", href: "/stories/flimlabs" },
      { name: "FairScope — Multi-Camera", href: "/stories/fairscope" },
      { name: "Photonic Compute", href: "/stories/photonic-compute" },
      { name: "StainSTORM — Histology", href: "/stories/stainstorm" },
      { name: "All Stories", href: "/#stories" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "https://docs.openuc2.com/", external: true },
      { name: "GitHub", href: "https://github.com/openUC2/", external: true },
      { name: "Community Forum", href: "https://openuc2.discourse.group/", external: true },
      { name: "Publications", href: "/about#publications" },
      { name: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Imprint (Impressum)", href: "/imprint" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "https://shop.openuc2.com/conditions", external: true },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-uc2-dark dark-section border-t border-uc2-border mt-auto">
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold text-sm mb-4">openUC2 GmbH</h4>
            <p className="text-uc2-muted text-sm leading-relaxed">
              Hans-Knöll-Straße 6
              <br />
              07745 Jena, Germany
            </p>
            <p className="text-uc2-muted text-sm mt-3">
              <a href="mailto:hello@openuc2.com" className="hover:text-white transition-colors">
                hello@openuc2.com
              </a>
              <br />
              Phone: +49 159 0199 9271
            </p>
          </div>

          {/* Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-uc2-muted hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-uc2-muted hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-uc2-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-uc2-muted">
          <span>&copy; {new Date().getFullYear()} openUC2 GmbH. All rights reserved.</span>
          <span className="flex gap-3">
            <Link href="/imprint" className="hover:text-white transition-colors">Impressum</Link>
            <span className="opacity-40">·</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Datenschutz</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
