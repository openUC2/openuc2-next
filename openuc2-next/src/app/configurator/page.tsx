import type { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid, Settings, Download } from "lucide-react";
import { Section, CTABanner, FeatureCard } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "Configurator — Design Your Microscope",
  description:
    "Drag-and-drop cube configurator: design your optical setup, preview the beam path, and export a bill of materials.",
};

const steps = [
  { icon: <LayoutGrid className="w-5 h-5" />, title: "Choose components", description: "Browse the cube library. Drag lenses, mirrors, LEDs, cameras, and filter cubes onto the grid." },
  { icon: <Settings className="w-5 h-5" />, title: "Configure & preview", description: "Adjust parameters, see the resulting beam path, and verify alignment. The tool warns you about conflicts." },
  { icon: <Download className="w-5 h-5" />, title: "Export & build", description: "Export a bill of materials, STL files for 3D printing, and a step-by-step assembly guide." },
];

export default function ConfiguratorPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Configurator</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Design your microscope</h1>
          <p className="text-uc2-muted max-w-2xl mx-auto">
            Our drag-and-drop configurator lets you design custom optical setups from UC2 cube modules.
            Preview beam paths, check compatibility, and export a complete build package.
          </p>
        </div>

        <ScrollReveal>
          <img src="/openuc2-next/images/configurator.png" alt="Screenshot of the configurator interface showing a drag-and-drop grid with cube modules and a beam path preview" className="rounded-lg border border-uc2-border" />
        </ScrollReveal>
      </Section>

      {/* Steps */}
      <Section alt>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How it works</h2>
            <p className="text-uc2-muted">Three steps from idea to instrument</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <FeatureCard icon={s.icon} title={`${i + 1}. ${s.title}`} description={s.description} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Quick templates */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Quick templates</h2>
            <p className="text-uc2-muted">Start from a pre-built configuration and customize</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Brightfield microscope", "Fluorescence microscope", "Light-sheet (SPIM)", "Michelson interferometer"].map((t, i) => (
            <ScrollReveal key={t} delay={i * 80}>
              <div className="bg-uc2-card border border-uc2-border rounded-xl p-6 text-center hover:border-uc2-blue/50 transition-colors cursor-pointer">
                <div className="aspect-square bg-uc2-surface-alt rounded-lg mb-4 flex items-center justify-center">
                  <LayoutGrid className="w-8 h-8 text-uc2-muted/30" />
                </div>
                <h4 className="text-sm font-semibold">{t}</h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section alt>
        <CTABanner
          title="Need a custom configuration?"
          description="Our team can design a configuration for your specific imaging needs. We'll provide a complete bill of materials and assembly support."
          primaryLabel="Contact us"
          primaryHref="/contact?subject=Custom+configuration"
          secondaryLabel="Browse the Shop"
          secondaryHref="https://shop.openuc2.com/"
        />
      </Section>
    </>
  );
}
