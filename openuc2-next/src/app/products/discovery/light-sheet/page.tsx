import type { Metadata } from "next";
import Link from "next/link";
import { Ruler } from "lucide-react";
import { Section, CTABanner, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Light-Sheet Add-On — Discovery Line — openUC2",
  description:
    "Build an actual selective plane illumination microscope (SPIM) from cubes. Cylindrical lens, sample chamber, and orthogonal detection path.",
};

export default function LightSheetAddonPage() {
  return (
    <>
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/products/discovery" className="hover:text-uc2-blue">Discovery Line</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Light-Sheet Add-On</span>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Tag variant="edu">Education</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">Light-Sheet Add-On</h1>
            <p className="text-uc2-muted mb-4">
              <span className="inline-block bg-uc2-green/20 text-uc2-green text-sm font-semibold px-3 py-1 rounded-full">
                EUR 999
              </span>
            </p>
            <p className="text-uc2-text leading-relaxed mb-6">
              Build an actual selective plane illumination microscope (SPIM) from cubes.
              Includes a cylindrical lens, sample chamber, and orthogonal detection path.
              Perfect for 3D imaging of cleared tissue, embryos, or organoids.
            </p>
            <p className="text-uc2-muted mb-6">
              <strong>Requires:</strong> CoreBox + Electronics + Infinity Add-On
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://shop.openuc2.com/shop/discovery-light-sheet-add-on-154"
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
              <Ruler className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Cylindrical Lens</h3>
              <p className="text-sm text-uc2-muted">Creates the characteristic light sheet for selective plane illumination.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Ruler className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Sample Chamber</h3>
              <p className="text-sm text-uc2-muted">Custom-designed chamber for mounting and rotating samples in the light sheet.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Ruler className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Orthogonal Detection</h3>
              <p className="text-sm text-uc2-muted">90-degree detection path for capturing optically sectioned images with minimal background.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Ruler className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">3D Imaging Software</h3>
              <p className="text-sm text-uc2-muted">ImSwitch integration for z-stack acquisition and 3D volume rendering.</p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <CTABanner
          title="Build your own light-sheet microscope"
          description="From flat images to 3D volumes — all from standardized cubes."
          primaryLabel="Buy Now"
          primaryHref="https://shop.openuc2.com/shop/discovery-light-sheet-add-on-154"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
