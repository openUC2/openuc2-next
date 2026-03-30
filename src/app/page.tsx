import { basePath } from "@/lib/basePath";
import Link from "next/link";
import { GraduationCap, Wrench, Microscope, FlaskConical, ScanLine, Clock4, BookOpen } from "lucide-react";
import { Section, CTABanner, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { HeroVideo } from "@/components/home/HeroVideo";
import { LottieScrollReveal } from "@/components/ui/LottieScrollReveal";
import { CubeScrollAnimation } from "@/components/home/CubeScrollAnimation";

const personas = [
  {
    icon: <Microscope className="w-8 h-8" />,
    tag: "Professional & Industry" as const,
    tagVariant: "pro" as const,
    title: "I need to prototype fast",
    description:
      "FRAME: a fully motorized, modular microscope platform. Configure online, validate with ray tracing, swap imaging modes in seconds. From concept to data in days.",
    cta: "Explore FRAME",
    href: "/products/frame",
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
    icon: <GraduationCap className="w-8 h-8" />,
    tag: "Education" as const,
    tagVariant: "edu" as const,
    title: "I want to teach optics",
    description:
      "Hands-on kits for classrooms, universities, and workshops. Students build real microscopes from modular cubes and understand optics by doing.",
    cta: "Explore Discovery Line",
    href: "/products/discovery",
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
  { name: "Janelia / HHMI", src: `${basePath}/images/logos/janelia.png` },
  { name: "ETH Zurich", src: `${basePath}/images/logos/eth.png` },
  { name: "Seeed Studio", src: `${basePath}/images/logos/seeed.webp` },
  { name: "University of Helsinki", src: `${basePath}/images/logos/University_of_Helsinki.svg` },
  { name: "Sorbonne", src: `${basePath}/images/logos/sorbonne.png` },
  { name: "EPFL", src: `${basePath}/images/logos/logo-epfl.png` },
  { name: "Lichtwerkstatt", src: `${basePath}/images/logos/lichtwerkstatt.png` },
  { name: "Max Delbrück Center Helmholtz Institute", src: `${basePath}/images/logos/mdc.png` },
  { name: "Autodesk", src: `${basePath}/images/logos/autodesk.png` },
];

export default function HomePage() {
  return (
    <>
      {/* ===== 3D CUBE SCROLL ANIMATION (background) ===== */}
      <CubeScrollAnimation />

      {/* ===== HERO WITH VIDEO ===== */}
      <HeroVideo />

      {/* ===== TRUSTED BY ===== */}
      <div className="bg-uc2-light border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-uc2-gray font-semibold pt-6">
            Partners
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
          <LottieScrollReveal
            src={`${basePath}/lottie/UC2_Aufbauanimation_V02.json`}
            alt="UC2 Spiral Build-Up Animation"
            className="rounded-lg border border-uc2-border overflow-hidden"
            preLoad={0.1}
          />
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
            <p className="text-uc2-muted mb-6">
              Every cube-based prototype has a digital twin. Validate optically with ray tracing
              before building. Scale to CNC-machined production parts without redesign.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/applications/fluorescence"
                className="px-4 py-2 text-sm border bg-uc2-blue text-white rounded-lg hover:bg-uc2-surface-alt transition-colors"
              >
                Fluorescence example
              </Link>
              <Link
                href="/applications/education"
                className="px-4 py-2 text-sm border bg-uc2-blue text-white rounded-lg hover:bg-uc2-surface-alt transition-colors"
              >
                Education example
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <img src={`${basePath}/images/configurator.png`} alt="UC2 Ecosystem Diagram" className="rounded-lg border border-uc2-border" />
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

        {/* FRAME */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <img src={`${basePath}/images/frame.jpg`} alt="FRAME microscope with motorized stage and fluorescence cubes" className="rounded-lg border border-uc2-border" />
            <div>
              <Tag variant="pro">Professional &amp; Industry</Tag>
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

        {/* Makers */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="md:order-2">
              <img src={`${basePath}/images/openplpatform.jpg`} alt="Makers and researchers prototyping with the open platform" className="rounded-lg border border-uc2-border" />
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
                  className="px-6 py-3 bg-uc2-accent text-white font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                  Open Platform
                </Link>
                <Link
                  href="/configurator"
                  className="px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all"
                >
                  Configurator
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Discovery */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src={`${basePath}/images/course3.JPG`} alt="Discovery Lineup: CoreBox, Electronics Kit, Infinity Upgrade, QBox" className="rounded-lg border border-uc2-border" />
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
              <Link
                href="/products/discovery"
                className="inline-block px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all"
              >
                Explore Discovery
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

      {/* ===== BUILT WITH OPENUC2 (Success Stories) ===== */}
      <Section alt id="stories">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built with openUC2</h2>
            <p className="text-uc2-muted">Real projects, real results — from labs and R&amp;D teams worldwide</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              tag: "FLIM / Photonics",
              tagColor: "bg-uc2-blue/20 text-uc2-blue",
              title: "FLIM integration in days, not months",
              body: "FLIMlabs integrated their fluorescence lifetime electronics with a UC2-based microscopy platform — capturing lifetime data within days of first contact.",
              href: "/stories/flimlabs",
              placeholder: "FLIMlabs — photo pending",
              imgSrc: `${basePath}/images/stories/flim/flim_screenshot_3.jpeg`
            },
            {
              tag: "Lab Automation / Pathology",
              tagColor: "bg-uc2-blue/20 text-uc2-blue",
              title: "Fully automated tissue staining & imaging for under €30k",
              body: "StainSTORM combines the FRAME microscope with an Opentrons OT-2 for a fully automated cyclic immunohistochemistry pipeline.",
              href: "/stories/stainstorm",
              placeholder: "StainSTORM — photo pending",
              imgSrc: `${basePath}/images/stories/stainstorm/IMG_20251119_134443.jpg`
            },
          ].map((story, i) => (
            <ScrollReveal key={story.href} delay={i * 100}>
              <Link href={story.href} className="group block">
                <div className="bg-uc2-card border border-uc2-border rounded-xl overflow-hidden hover:border-uc2-blue/50 transition-colors h-full flex flex-col">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={story.imgSrc} className="w-full h-full object-cover" alt={story.title} />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 self-start ${story.tagColor}`}>
                      {story.tag}
                    </span>
                    <h4 className="font-semibold mb-2 group-hover:text-uc2-blue transition-colors">
                      {story.title}
                    </h4>
                    <p className="text-sm text-uc2-muted leading-relaxed">{story.body}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ===== FUNDING AGENCIES ===== */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Funded by</h2>
            <p className="text-uc2-muted">Supported by leading European research funding programs.</p>
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-1">
              <div className="w-70 h-40 rounded-lg bg-uc2-surface-alt border border-uc2-border flex items-center justify-center">
                <img src={`${basePath}/images/logos/tab.png`} alt="Thüringer Aufbaubank Logo" className="h-16" />
              </div>
              <span className="text-xs text-uc2-muted text-center max-w-[200px]">Thüringer Aufbaubank (TAB)</span>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-col items-center gap-1">
              <div className="w-70 h-40 rounded-lg bg-uc2-surface-alt border border-uc2-border flex items-center justify-center">
                <img src={`${basePath}/images/logos/eu.png`} alt="European Union Logo" className="h-16" />
              </div>
              <span className="text-xs text-uc2-muted text-center max-w-[200px]">European Union and the local EFRE Structural Fund in Thuringia</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex flex-col items-center gap-1">
              <div className="w-70 h-40 rounded-lg bg-uc2-surface-alt border border-uc2-border flex items-center justify-center">
                <img src={`${basePath}/images/logos/bmftr.png`} alt="BMFRT Logo" className="h-25" />
              </div>
              <span className="text-xs text-uc2-muted text-center max-w-[200px]">Bundesministerium für Forschung, Technologie und Raumfahrt</span>
            </div>
          </ScrollReveal>
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
