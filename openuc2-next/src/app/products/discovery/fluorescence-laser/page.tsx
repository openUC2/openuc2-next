import type { Metadata } from "next";
import Link from "next/link";
import { Disc3 } from "lucide-react";
import { Section, CTABanner, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Fluorescence Laser Add-On — Discovery Line — openUC2",
  description:
    "488 nm laser excitation for higher-intensity fluorescence imaging. Includes safety enclosure and alignment tools.",
};

export default function FluorescenceLaserAddonPage() {
  return (
    <>
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/products/discovery" className="hover:text-uc2-blue">Discovery Line</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Fluorescence Laser Add-On</span>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Tag variant="edu">Education</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">Fluorescence Laser Add-On</h1>
            <p className="text-uc2-muted mb-4">
              <span className="inline-block bg-uc2-green/20 text-uc2-green text-sm font-semibold px-3 py-1 rounded-full">
                EUR 1,199
              </span>
            </p>
            <p className="text-uc2-text leading-relaxed mb-6">
              488 nm laser excitation for higher-intensity fluorescence imaging. Enables
              confocal-like performance with a coherent light source. Includes safety
              enclosure and alignment tools for safe classroom use.
            </p>
            <p className="text-uc2-muted mb-6">
              <strong>Requires:</strong> CoreBox + Electronics + Infinity Add-On
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://shop.openuc2.com/shop/discovery-fluorescence-add-on-led-488nm-159"
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
              <Disc3 className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">488 nm Laser Module</h3>
              <p className="text-sm text-uc2-muted">Coherent laser source for high-intensity excitation of GFP, FITC, and Alexa 488.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Disc3 className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Safety Enclosure</h3>
              <p className="text-sm text-uc2-muted">Complete laser safety enclosure with interlock switch, suitable for classroom environments.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Disc3 className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Alignment Tools</h3>
              <p className="text-sm text-uc2-muted">Precision alignment tools and reference targets for beam setup and calibration.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Disc3 className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Filter Set</h3>
              <p className="text-sm text-uc2-muted">Matched excitation and emission filter set optimized for the 488 nm laser line.</p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <CTABanner
          title="Upgrade to laser-based fluorescence"
          description="Higher intensity, sharper images, and new experimental possibilities."
          primaryLabel="Buy Now"
          primaryHref="https://shop.openuc2.com/shop/discovery-fluorescence-add-on-led-488nm-159"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
