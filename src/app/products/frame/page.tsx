import { basePath } from "@/lib/basePath";
import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, Target, Camera, Globe, Bot, BookOpen } from "lucide-react";
import { Section, CTABanner, SpecsTable, FeatureCard, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { img } from "framer-motion/client";

export const metadata: Metadata = {
  title: "FRAME — Automated Modular Microscope",
  description:
    "FRAME: a fully motorized, open-source microscope with XYZ scanning, multi-channel fluorescence, and modular optics. Built for research labs and professionals.",
};

const metrics = [
  { value: "130x90 mm", label: "XY Travel Range" },
  { value: "<5 um", label: "Positioning Precision" },
  { value: "11 mm", label: "Z Travel" },
  { value: "5+", label: "Imaging Modes \n Fluorescence, Phasecontrast, Brightfield, STORM, ..." },
  { value: "99%", label: "Open Source (we are working on the docs!)" },
];

const specsLeft: [string, string][] = [
  ["XY Travel Range", "130 x 90 mm"],
  ["Z Travel Range", "11 mm"],
  ["Positioning Precision", "< 1-5 um (closed-loop possible)"],
  ["Stage Speed", "Up to 10 mm/s"],
  ["Objectives", "Any RMS/M25-thread infinity-corrected (4x-100x)"],
  ["Illumination (Epi)", "Multi-channel LED (405/450/588/532/575/635 nm) or Laser (ask for custom wavelengths and combinations)"],
  ["Illumination (Trans)", "White LED matrix, DPC-capable"],
  ["Filter Cubes", "Modular UC2 cubes, user-swappable"],
  ["Camera", "USB3 (Allied Vision, Basler, Daheng) or CSI"],
];

const specsRight: [string, string][] = [
  ["Compute", "Raspberry Pi 5 (with YouYeeToo X1 in the development"],
  ["Software", "ImSwitch using Raspberry Pi OS (open source, Python, https://github.com/openUC2/rpi-imswitch-os)"],
  ["Control Interfaces", "Web browser, REST API, Python SDK, PS4 controller, CAN Bus"],
  ["Communication", "CAN Bus, WiFi, USB-Serial"],
  ["Firmware", "UC2-REST (ESP32, open source, https://github.com/youseetoo/uc2-esp32)"],
  ["Imaging Modes", "Brightfield, Fluorescence, Phase Contrast, DPC, FLIM*, dSTORM*"],
  ["Footprint", "~300 x 300 x 350 mm (depending on configuration)"],
  ["Sample Holders", "Slides, well plates, custom fixtures"],
  ["Certifications", "CE (available on request)"],
];

const features = [
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Swap modules in seconds",
    description:
      "Brightfield today, fluorescence tomorrow. Change your dichroic, add a laser, or insert a phase ring — no tools, no realignment. All with our  cubes.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Standard objectives",
    description:
      "Use our selection of high-quality objective lenses or any RMS or M25-thread infinity-corrected objective. Your existing optics work with the FRAME.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Your choice of camera",
    description:
      "Support for USB3 (e.g. HIK Vision, Daheng), CSI (Raspberry Pi), but also for scientific cameras (e.g. Andor, Tucsen), all implemented in ImSwitch.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Browser-based control",
    description:
      "Full microscope control from any device on your network. ImSwitch GUI, Jupyter Notebooks, Arkitekt and SiLa2, or raw REST API calls — your choice.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Automation-ready",
    description:
      "REST API and SiLA2 drivers for integration with liquid handlers, robotic arms, and automated workflows. Ready for lab-in-a-loop setups.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Fully open source",
    description:
      "Hardware (CAD), firmware (ESP32), and software (ImSwitch) — all open. Modify anything. No vendor lock-in. Publish your methods with full transparency.",
  },
];

const sampleImages = [
  { title: "Fluorescence — AF488 FluoCells", desc: "Multi-tile automated scan with stitching", meta: "FRAME | 20x | 488 nm LED", bg: "bg-emerald-950", imgSrc: `${basePath}/images/frame_fluo.jpg` },
  { title: "Histology — H&E Tissue Section", desc: "Automated slide scanning, 130x90 mm coverage", meta: "FRAME | 10x | Brightfield", bg: "bg-amber-950", imgSrc: `${basePath}/images/frame_histo.png` },
  { title: "Phase Contrast — Live Cells", desc: "DPC and quantitative phase imaging", meta: "FRAME | 40x | Phase Contrast", bg: "bg-slate-800", imgSrc: `${basePath}/images/frame_phasecontrast.png` },
  { title: "Super-Resolution — dSTORM", desc: "Single-molecule localization microscopy", meta: "FRAME | 60x | 638 nm Laser", bg: "bg-purple-950", imgSrc: `${basePath}/images/frame_storm.png` },
];

export default function FramePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-uc2-dark dark-section">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <span>Products</span>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-white">FRAME</span>
        </div>
      </div>

      {/* Hero */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Tag variant="pro">Professional</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">FRAME</h1>
            <p className="text-uc2-muted mb-4">Fast Rigid Automated Microscope Engine</p>
            <p className="text-uc2-text leading-relaxed mb-8">
              A fully motorized microscope platform with sub-micrometer precision, modular optics,
              and open-source software. Swap imaging modes in seconds. Control everything from a
              browser. Integrate with any workflow through our REST API.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact?subject=FRAME+quote" className="px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all">
                Request a Quote
              </Link>
              <a href="https://docs.openuc2.com/usage/pro/frame/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-uc2-border text-uc2-heading font-semibold rounded-lg hover:bg-white/5 transition-colors">
                Documentation
              </a>
              <Link href="#specs" className="px-6 py-3 border border-uc2-border text-uc2-heading font-semibold rounded-lg hover:bg-white/5 transition-colors">
                Specifications
              </Link>
            </div>
          </div>
          <img src={`${basePath}/images/frame1.png`} alt="FRAME microscope, front-quarter view showing the stage, optical column, and modular cube bays" className="rounded-lg border border-uc2-border" />
        </div>
      </Section>

      {/* Key metrics */}
      <div className="bg-uc2-dark dark-section border-y border-uc2-border py-8">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-uc2-heading">{m.value}</div>
                <div className="text-xs text-uc2-muted mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sample images */}
      <Section dark>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Imaging results</h2>
            <p className="text-uc2-muted">Captured on FRAME systems in real labs</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleImages.map((img, i) => (
            <ScrollReveal key={img.title} delay={i * 100}>
              <div className="bg-uc2-card border border-uc2-border rounded-xl overflow-hidden">
                <img src={img.imgSrc} alt={img.title} className="w-full h-auto" />
                <div className="p-4">
                  <h4 className="text-sm font-semibold mb-1">{img.title}</h4>
                  <p className="text-xs text-uc2-muted">{img.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section dark>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How FRAME works</h2>
            <p className="text-uc2-muted">The optics stay fixed. Only the sample moves.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Modular optical column</h3>
                <p className="text-uc2-muted text-sm">
                  FRAME{"'"}s optical path is built from standardized UC2 cube modules. Each cube holds one
                  optical element (objective, dichroic, filter, camera). Slide cubes in and out to
                  switch imaging modes without realignment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Rigid motorized stage</h3>
                <p className="text-uc2-muted text-sm">
                  A precision XYZ stage moves the sample beneath the fixed optics. This separation
                  means you can add components — an incubator, a pipetting robot, additional cameras —
                  without disturbing the optical alignment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Open-source control</h3>
                <p className="text-uc2-muted text-sm">
                  FRAME runs on ImSwitch, a modular open-source microscopy control software. Access
                  via web browser, game controller, Python API, or REST endpoints. Docker-based
                  deployment enables remote updates.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <img src={`${basePath}/images/frame_stage.gif`} alt="Exploded view of FRAME showing the optical column with modular cubes and the motorized stage" className="rounded-lg border border-uc2-border" />
          </ScrollReveal>
        </div>
      </Section>

      {/* Modular features */}
      <Section dark>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Modular by design</h2>
            <p className="text-uc2-muted">Pre-test optical paths externally, then slide them into FRAME.</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <FeatureCard icon={f.icon} title={f.title} description={f.description} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Specifications */}
      <Section dark id="specs">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">Specifications</h2>
          <p className="text-uc2-muted mb-10">FRAME v1.0 — Configurable to your needs</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-10">
          <ScrollReveal>
            <SpecsTable rows={specsLeft} />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <SpecsTable rows={specsRight} />
            <p className="text-xs text-uc2-muted mt-3">
              * With additional modules. Specs may vary by configuration.
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact?subject=FRAME+specs" className="px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all">
            Request detailed spec sheet
          </Link>
          <a href="https://docs.openuc2.com/usage/pro/frame/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-uc2-border text-uc2-heading font-semibold rounded-lg hover:bg-white/5 transition-colors">
            Full documentation
          </a>
        </div>
      </Section>

      {/* How fast can you go? */}
      <Section dark>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How fast can you go?</h2>
            <p className="text-uc2-muted">Traditional vendor path vs. openUC2</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <ScrollReveal>
            <div className="bg-uc2-card/50 border border-uc2-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-uc2-muted mb-6 text-center">Traditional vendor</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-uc2-muted/40 shrink-0" />
                  <span className="text-sm text-uc2-muted">Week 1–4: RFQ &amp; quotes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-uc2-muted/40 shrink-0" />
                  <span className="text-sm text-uc2-muted">Month 2–4: Manufacturing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-uc2-muted/40 shrink-0" />
                  <span className="text-sm text-uc2-muted">Month 5: Delivery &amp; setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-uc2-muted/40 shrink-0" />
                  <span className="text-sm text-uc2-muted">Month 6: First data</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          {/* openUC2 */}
          <ScrollReveal delay={100}>
            <div className="bg-uc2-blue/10 border border-uc2-blue/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-uc2-blue mb-6 text-center">With openUC2</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-uc2-blue shrink-0" />
                  <span className="text-sm text-uc2-text font-medium">Day 1: Configure &amp; simulate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-uc2-blue shrink-0" />
                  <span className="text-sm text-uc2-text font-medium">Day 2: Assemble from modules</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-uc2-blue shrink-0" />
                  <span className="text-sm text-uc2-text font-medium">Day 3: First data acquisition</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-uc2-blue shrink-0" />
                  <span className="text-sm text-uc2-text font-medium">Week 2: Integrated into workflow</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ImSwitch */}
      <Section dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Software: ImSwitch</h2>
            <p className="text-uc2-muted mb-4">
              FRAME is controlled by ImSwitch — a community-developed, modular microscopy control
              software written in Python. It provides a full GUI for acquisition, hardware control,
              and basic image processing, accessible from any web browser on your network.
            </p>
            <p className="text-uc2-muted mb-6">
              For advanced users, the REST API and Python SDK allow full scripting of experiments,
              integration with Jupyter Notebooks, and connection to external automation systems.
              Docker-based deployment means you can update your microscope remotely.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/openUC2/ImSwitch" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-uc2-border text-uc2-heading font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm">
                GitHub Repository
              </a>
              <a href="https://docs.openuc2.com/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-uc2-border text-uc2-heading font-semibold rounded-lg hover:bg-white/5 transition-colors text-sm">
                API Documentation
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <img src={`${basePath}/images/frame_imswitch.png`} alt="Screenshot of ImSwitch GUI showing live view and acquisition controls" className="rounded-lg border border-uc2-border" />
          </ScrollReveal>
        </div>
      </Section>

      {/* Testimonial */}
      <Section dark>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl text-uc2-text italic leading-relaxed mb-4">
            &ldquo;We needed a microscope that could handle both brightfield and fluorescence whole-slide imaging, 
            be tailored to our specific assays, and fit into our automated liquid handling workflow. 
            FRAME let us do all of that without being locked into proprietary software..&rdquo;
          </blockquote>
          <cite className="text-sm text-uc2-muted not-italic">
            — Franzi, University of Helsinki
          </cite>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <CTABanner
          title="Ready to configure your FRAME?"
          description="Tell us about your imaging needs and we'll propose a configuration."
          primaryLabel="Request a Quote"
          primaryHref="/contact?subject=FRAME+quote"
          secondaryLabel="Try the Configurator"
          secondaryHref="/configurator"
        />
      </Section>
    </>
  );
}
