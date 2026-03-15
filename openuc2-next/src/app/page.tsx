import Link from "next/link";
import { GraduationCap, Wrench, Microscope, FlaskConical, ScanLine, Clock4, BookOpen } from "lucide-react";
import { Section, CTABanner, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { HeroVideo } from "@/components/home/HeroVideo";

const personas = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    tag: "Education" as const,
    tagVariant: "edu" as const,
    title: "I want to teach optics",
    description:
      "Hands-on kits for classrooms, universities, and workshops. Students build real microscopes from modular cubes and understand optics by doing.",
    cta: "Explore Discovery Line",
    href: "/products/discovery",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    tag: "Makers & Research" as const,
    tagVariant: "maker" as const,
    title: "I want to build & prototype",
    description:
      "An open platform for PhD students, makers, and startups. Prototype custom optical setups, contribute to the community, and integrate with your tools.",
    cta: "Explore the Open Platform",
    href: "/products/makers",
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    tag: "Professional" as const,
    tagVariant: "pro" as const,
    title: "I need an automated microscope",
    description:
      "FRAME: a fully motorized, modular microscope with XYZ scanning, multi-channel fluorescence, and open-source software. Ready for your lab.",
    cta: "Explore FRAME",
    href: "/products/frame",
  },
];

const appPreviews = [
  {
    title: "Fluorescence Imaging",
    desc: "Multi-channel epi-fluorescence with LED or laser excitation.",
    meta: "FRAME | 20x | GFP",
    href: "/applications/fluorescence",
    icon: <FlaskConical className="w-5 h-5" />,
  },
  {
    title: "Histology & Slide Scanning",
    desc: "Automated whole-slide scanning with stitching and large-area coverage.",
    meta: "FRAME | 10x | Brightfield",
    href: "/applications/histology",
    icon: <ScanLine className="w-5 h-5" />,
  },
  {
    title: "Live-Cell Time-Lapse",
    desc: "Long-term imaging with incubator compatibility and automated focus.",
    meta: "FRAME | 40x | Phase Contrast",
    href: "/applications/livecell",
    icon: <Clock4 className="w-5 h-5" />,
  },
  {
    title: "Teaching & Workshops",
    desc: "From geometric optics to fluorescence — hands-on learning at every level.",
    meta: "Discovery | Workshop",
    href: "/applications/education",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

const logos = [
  "Leibniz Institute",
  "Janelia / HHMI",
  "University of Jena",
  "Seeed Studio",
  "Lichtwerkstatt",
  "Max Planck Institute",
  "ETH Zurich",
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO WITH VIDEO ===== */}
      <HeroVideo />

      {/* ===== TRUSTED BY ===== */}
      <div className="bg-uc2-light border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.08em] text-uc2-gray font-semibold pt-6">
            Used in research at
          </p>
          <LogoStrip logos={logos} />
        </div>
      </div>

      {/* ===== HOW IT WORKS — THE CUBE ===== */}
      <Section alt id="how-it-works">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One cube. Infinite microscopes.</h2>
            <p className="text-uc2-muted max-w-2xl mx-auto">
              Every openUC2 system is built from the same standardized building block: the UC2 cube.
              Each cube holds one optical component — a lens, mirror, LED, camera, or filter. Arrange
              them on a grid, and you have a microscope.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src="/openuc2-next/images/spiral.png" alt="UC2 Ecosystem Diagram" className="rounded-lg border border-uc2-border" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <h3 className="text-xl font-semibold mb-4">From optical principle to working instrument</h3>
            <p className="text-uc2-muted mb-4">
              The UC2 cube is a 50x50 mm standardized interface. Each cube holds exactly one optical
              element — a lens, a mirror, a beamsplitter, an LED, or a camera. Cubes connect
              magnetically on a baseplate grid, creating any optical path you can imagine.
            </p>
            <p className="text-uc2-muted mb-6">
              This is the same principle at every scale:
            </p>
            <div className="bg-uc2-surface-alt rounded-xl p-6 space-y-4 border border-uc2-border">
              <div className="flex gap-3">
                <GraduationCap className="w-5 h-5 text-uc2-green shrink-0 mt-0.5" />
                <p className="text-sm text-uc2-text">
                  <strong>In the classroom:</strong> Students snap cubes together to build a simple
                  microscope and see how lenses form images.
                </p>
              </div>
              <div className="flex gap-3">
                <Wrench className="w-5 h-5 text-uc2-accent shrink-0 mt-0.5" />
                <p className="text-sm text-uc2-text">
                  <strong>In the lab:</strong> A PhD student adds a dichroic cube and a laser cube to
                  build a fluorescence path, tests it, and iterates.
                </p>
              </div>
              <div className="flex gap-3">
                <Microscope className="w-5 h-5 text-uc2-blue shrink-0 mt-0.5" />
                <p className="text-sm text-uc2-text">
                  <strong>In production:</strong> The FRAME microscope houses cubes inside a rigid
                  motorized stage — same optics, industrial-grade stability.
                </p>
              </div>
            </div>
            <Link
              href="/configurator"
              className="inline-block mt-6 px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              Try the Configurator
            </Link>
          </ScrollReveal>
        </div>
      </Section>

      {/* ===== CUBIFY ===== */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cubify your optical design</h2>
            <p className="text-uc2-muted mb-4">
              Take any optical setup — a fluorescence microscope, a light-sheet system, a Michelson
              interferometer — and break it into standardized cube modules. Each cube maps to one
              component in your beam path.
            </p>
            <p className="text-uc2-muted mb-6">
              This isn&apos;t just a teaching trick. It&apos;s a design methodology that makes optical
              prototyping as fast as rearranging blocks. Change your dichroic? Swap one cube. Add a
              second camera? Add one cube. Move from brightfield to phase contrast? Rearrange the grid.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/applications/fluorescence"
                className="px-4 py-2 text-sm border border-uc2-border text-uc2-text rounded-lg hover:bg-uc2-surface-alt transition-colors"
              >
                Fluorescence example
              </Link>
              <Link
                href="/applications/education"
                className="px-4 py-2 text-sm border border-uc2-border text-uc2-text rounded-lg hover:bg-uc2-surface-alt transition-colors"
              >
                Education example
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <img src="/openuc2-next/images/configurator.png" alt="UC2 Ecosystem Diagram" className="rounded-lg border border-uc2-border" />
          </ScrollReveal>
        </div>
      </Section>

      {/* ===== PRODUCT LINES ===== */}
      <Section alt id="products">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Three paths, one platform</h2>
            <p className="text-uc2-muted max-w-xl mx-auto">
              Whether you&apos;re teaching, researching, or deploying — the cube system grows with you.
            </p>
          </div>
        </ScrollReveal>

        {/* Discovery */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <PlaceholderImage text="Discovery CoreBox — green case with cubes, lenses, mirrors" aspectRatio="16/10" bgColor="bg-uc2-green/10" />
            <img src="/images/corebox.webp" alt="Discovery Lineup: CoreBox, Electronics Kit, Infinity Upgrade, QBox" className="rounded-lg border border-uc2-border" />
            <div>
              <Tag variant="edu">Education</Tag>
              <h3 className="text-2xl font-bold mt-3 mb-3">Discovery Line</h3>              <p className="text-uc2-muted mb-3">
                Modular educational kits for teaching optics, microscopy, and imaging. Start with the
                CoreBox (analog optics), add electronics, upgrade to infinity-corrected systems, or
                explore quantum optics with the QBox.
              </p>
              <p className="text-uc2-muted mb-3">
                <strong>Who it&apos;s for:</strong> Schools, universities,
                maker spaces, workshops, science outreach.
              </p>
              <span className="inline-block bg-uc2-green/20 text-uc2-green text-sm font-semibold px-3 py-1 rounded-full mb-4">
                From EUR 399
              </span>
              <br />
              <Link
                href="/products/discovery"
                className="inline-block px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all"
              >
                Explore Discovery
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Makers */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="md:order-2">
              <PlaceholderImage text="Configurator tool with drag-and-drop cubes on a grid" aspectRatio="16/10" bgColor="bg-uc2-accent/10" />
            </div>
            <div>
              <Tag variant="maker">Makers & Research</Tag>
              <h3 className="text-2xl font-bold mt-3 mb-3">Open Platform</h3>              <p className="text-uc2-muted mb-3">
                The full open-source ecosystem: 3D-printable cube designs, electronics schematics,
                firmware (ESP32), and ImSwitch software. Build your own microscope from scratch,
                customize every component, and share your designs with the community.
              </p>
              <p className="text-uc2-muted mb-4">
                <strong>Who it&apos;s for:</strong> PhD students, optics
                researchers, hardware startups, biohackers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products/makers"
                  className="px-6 py-3 border border-uc2-border text-uc2-text font-semibold rounded-lg hover:bg-uc2-surface-alt transition-colors"
                >
                  Open Platform
                </Link>
                <Link
                  href="/configurator"
                  className="px-6 py-3 border border-uc2-border text-uc2-text font-semibold rounded-lg hover:bg-uc2-surface-alt transition-colors"
                >
                  Configurator
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FRAME */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="/openuc2-next/images/frame2.png" alt="FRAME microscope with motorized stage and fluorescence cubes" className="rounded-lg border border-uc2-border" />
            <div>
              <Tag variant="pro">Professional</Tag>
              <h3 className="text-2xl font-bold mt-3 mb-3">FRAME — Automated Microscope</h3>
              <p className="text-uc2-muted mb-3">
                A fully motorized XYZ scanning microscope built on UC2 cube architecture. Sub-micrometer
                precision, multi-channel fluorescence, browser-based control, REST API, and open-source
                software. Swap optical modules without realignment.
              </p>
              <p className="text-uc2-muted mb-3">
                <strong>Who it&apos;s for:</strong> Research labs, core
                facilities, diagnostics R&amp;D, biotech companies.
              </p>
              <span className="inline-block bg-uc2-blue/20 text-uc2-blue text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Contact for quote
              </span>
              <br />
              <Link
                href="/products/frame"
                className="inline-block px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all"
              >
                Explore FRAME
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ===== APPLICATIONS PREVIEW ===== */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What you can image</h2>
            <p className="text-uc2-muted">Real results from openUC2 systems</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {appPreviews.map((app, i) => (
            <ScrollReveal key={app.href} delay={i * 100}>
              <Link href={app.href} className="group block">
                <div className="bg-uc2-card border border-uc2-border rounded-xl overflow-hidden hover:border-uc2-blue/50 transition-colors">
                  <div className="aspect-[4/3] bg-uc2-surface-alt flex flex-col items-center justify-center gap-2 p-6">
                    <div className="text-uc2-blue">{app.icon}</div>
                    <span className="text-xs text-uc2-muted">{app.meta}</span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-semibold mb-1 group-hover:text-uc2-blue transition-colors">
                      {app.title}
                    </h4>
                    <p className="text-sm text-uc2-muted">{app.desc}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section alt>
        <ScrollReveal>
          <CTABanner
            title="Not sure where to start?"
            description="Tell us what you want to image and we'll help you find the right configuration."
            primaryLabel="Try the Configurator"
            primaryHref="/configurator"
            secondaryLabel="Request a Quote"
            secondaryHref="/contact"
          />
        </ScrollReveal>
      </Section>
    </>
  );
}
