import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { Section, CTABanner, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Fluorescence LED Add-On — Discovery Line — openUC2",
  description:
    "Adds a 488 nm LED excitation source, dichroic mirror cube, and emission filter. Real fluorescence microscopy on a student budget.",
};

export default function FluorescenceLedAddonPage() {
  return (
    <>
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/products/discovery" className="hover:text-uc2-blue">Discovery Line</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Fluorescence LED Add-On</span>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Tag variant="edu">Education</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">Fluorescence LED Add-On</h1>
            <p className="text-uc2-muted mb-4">
              <span className="inline-block bg-uc2-green/20 text-uc2-green text-sm font-semibold px-3 py-1 rounded-full">
                EUR 699
              </span>
            </p>
            <p className="text-uc2-text leading-relaxed mb-6">
              Adds a 488 nm LED excitation source, dichroic mirror cube, and emission filter.
              Real fluorescence microscopy on a student budget. Observe GFP-labeled samples,
              fluorescent beads, and stained tissue sections with ease.
            </p>
            <p className="text-uc2-muted mb-6">
              <strong>Requires:</strong> CoreBox + Electronics + Infinity Add-On
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://shop.openuc2.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-uc2-green text-white font-semibold rounded-lg hover:brightness-110 transition-all"
              >
                Buy Now
              </a>
              <Link
                href="/products/discovery"
                className="px-6 py-3 border border-uc2-border text-uc2-text font-semibold rounded-lg hover:bg-uc2-surface-alt transition-colors"
              >
                Back to Discovery Line
              </Link>
            </div>
          </div>
          <ScrollReveal delay={100}>
            <div className="aspect-[4/3] rounded-lg bg-uc2-surface-alt border border-uc2-border flex items-center justify-center">
              <span className="text-sm text-uc2-muted">Product image — coming soon</span>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">What&rsquo;s included</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Lightbulb className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">488 nm LED Source</h3>
              <p className="text-sm text-uc2-muted">High-power LED excitation source optimized for GFP and FITC fluorophores.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Lightbulb className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Dichroic Mirror Cube</h3>
              <p className="text-sm text-uc2-muted">Pre-mounted dichroic mirror cube for separating excitation and emission light.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Lightbulb className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Emission Filter</h3>
              <p className="text-sm text-uc2-muted">Bandpass emission filter for clean fluorescence signal detection.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Lightbulb className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Sample Slides</h3>
              <p className="text-sm text-uc2-muted">Fluorescent test slides included for immediate experiments and calibration.</p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <CTABanner
          title="Start your fluorescence imaging journey"
          description="Real fluorescence microscopy — accessible to every classroom and lab."
          primaryLabel="Buy Now"
          primaryHref="https://shop.openuc2.com/"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
