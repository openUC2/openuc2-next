import type { Metadata } from "next";
import Link from "next/link";
import { Section, CTABanner } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "StainSTORM — Automated Histology | Built with openUC2",
  description:
    "How StainSTORM combines the openUC2 FRAME with an Opentrons OT-2 to create a fully automated cyclic immunohistochemistry pipeline.",
};

export default function StainstormStoryPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/#stories" className="hover:text-uc2-blue">Built with openUC2</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">StainSTORM</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <PlaceholderImage
          text="StainSTORM hero — photo pending"
          aspectRatio="12/5"
          className="mb-10"
        />
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-uc2-blue/20 text-uc2-blue mb-4">
            Lab Automation / Pathology
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fully automated tissue staining and imaging for under &euro;30k
          </h1>
        </ScrollReveal>
      </Section>

      {/* Challenge */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-uc2-text leading-relaxed max-w-3xl">
            Research labs needed a fully automated cyclic immunohistochemistry pipeline that could
            handle sample staining, washing, imaging, and analysis without manual intervention —
            at a fraction of the cost of commercial alternatives.
          </p>
        </ScrollReveal>
      </Section>

      {/* Solution */}
      <Section>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="text-uc2-text leading-relaxed max-w-3xl mb-6">
            StainSTORM combines the openUC2 FRAME microscope with an Opentrons OT-2 liquid handler
            to create a fully automated cyclic immunohistochemistry pipeline. The system handles
            sample staining, washing, imaging, and analysis without manual intervention — enabling
            reproducible, decentralized cancer diagnostics across laboratories.
          </p>
        </ScrollReveal>
      </Section>

      {/* Results */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="bg-uc2-card border border-uc2-border rounded-xl p-8 max-w-xl">
            <div className="text-3xl font-extrabold text-uc2-blue mb-2">Sub-&euro;30k</div>
            <div className="text-uc2-muted">total system cost vs. &euro;150k+ for commercial alternatives</div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl text-uc2-text italic leading-relaxed mb-4">
            &ldquo;Testimonial placeholder — to be filled by marketing.&rdquo;
          </blockquote>
          <cite className="text-sm text-uc2-muted not-italic">— StainSTORM Team</cite>
        </div>
      </Section>

      {/* Gallery */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          <PlaceholderImage text="FRAME inside Opentrons OT-2 — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Before/after tissue stain result — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Pipeline workflow diagram — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Automated scan results — photo pending" aspectRatio="4/3" />
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
