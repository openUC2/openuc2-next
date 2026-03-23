import type { Metadata } from "next";
import Link from "next/link";
import { Section, CTABanner } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "FLIMlabs — FLIM Integration | Built with openUC2",
  description:
    "How FLIMlabs integrated fluorescence lifetime imaging with the UC2 modular platform in days instead of months.",
};

export default function FlimlabsStoryPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/#stories" className="hover:text-uc2-blue">Built with openUC2</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">FLIMlabs</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <PlaceholderImage
          text="FLIMlabs hero — photo pending"
          aspectRatio="12/5"
          className="mb-10"
        />
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-uc2-blue/20 text-uc2-blue mb-4">
            FLIM / Photonics
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FLIM integration in days, not months</h1>
        </ScrollReveal>
      </Section>

      {/* Challenge */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-uc2-text leading-relaxed max-w-3xl">
            FLIMlabs needed to integrate their fluorescence lifetime electronics with a flexible
            microscopy platform that could adapt to different optical configurations without
            custom-machined parts or months of optical engineering.
          </p>
        </ScrollReveal>
      </Section>

      {/* Solution */}
      <Section>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="text-uc2-text leading-relaxed max-w-3xl mb-6">
            Using the UC2 cube system, the FLIM module was configured and running within days —
            capturing lifetime data with their time-correlated single-photon counting hardware on a
            fully modular setup. The standardized cube interface allowed rapid iteration on the
            optical path without any custom mechanical parts.
          </p>
        </ScrollReveal>
      </Section>

      {/* Results */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="bg-uc2-card border border-uc2-border rounded-xl p-8 max-w-xl">
            <div className="text-3xl font-extrabold text-uc2-blue mb-2">Days</div>
            <div className="text-uc2-muted">from first contact to working FLIM data</div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl text-uc2-text italic leading-relaxed mb-4">
            &ldquo;Testimonial placeholder — to be filled by marketing.&rdquo;
          </blockquote>
          <cite className="text-sm text-uc2-muted not-italic">— FLIMlabs Team</cite>
        </div>
      </Section>

      {/* Gallery */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          <PlaceholderImage text="FLIM false-color lifetime map — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="UC2 setup with FLIMlabs electronics — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Configurator screenshot — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Data result — photo pending" aspectRatio="4/3" />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="Have a similar challenge?"
          description="Configure your optical system or get in touch with our team."
          primaryLabel="Configure your system →"
          primaryHref="/configurator"
          secondaryLabel="Contact us →"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
