import type { Metadata } from "next";
import Link from "next/link";
import { Infinity } from "lucide-react";
import { Section, CTABanner, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Infinity Add-On — Discovery Line — openUC2",
  description:
    "Upgrade to infinity-corrected optics with a tube lens and RMS objective. Camera-based digital imaging with proper Koehler illumination.",
};

export default function InfinityAddonPage() {
  return (
    <>
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/products/discovery" className="hover:text-uc2-blue">Discovery Line</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Infinity Add-On</span>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Tag variant="edu">Education</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">Infinity Add-On</h1>
            <p className="text-uc2-muted mb-4">
              <span className="inline-block bg-uc2-green/20 text-uc2-green text-sm font-semibold px-3 py-1 rounded-full">
                EUR 749
              </span>
            </p>
            <p className="text-uc2-text leading-relaxed mb-6">
              Upgrade to infinity-corrected optics with a tube lens and RMS objective.
              Camera-based digital imaging with proper Koehler illumination. This add-on
              bridges the gap between educational and research-grade microscopy.
            </p>
            <p className="text-uc2-muted mb-6">
              <strong>Requires:</strong> CoreBox + Electronics Add-On
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://shop.openuc2.com/shop/discovery-infinity-add-on-153"
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
              <img src="/openuc2-next/images/addons/infinity.webp" alt="Infinity Add-On product image" className="w-full h-full object-cover rounded-lg" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">What&rsquo;s included</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Infinity className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Tube Lens</h3>
              <p className="text-sm text-uc2-muted">200 mm focal length tube lens for proper infinity-corrected imaging.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Infinity className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">RMS Objective Holder</h3>
              <p className="text-sm text-uc2-muted">Standard RMS thread mount compatible with objectives from any manufacturer.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Infinity className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Koehler Illumination</h3>
              <p className="text-sm text-uc2-muted">Proper condenser and field diaphragm for even, professional-grade illumination.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Infinity className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Digital Imaging</h3>
              <p className="text-sm text-uc2-muted">Camera adapter for capturing high-resolution digital images through the microscope.</p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section>
        <CTABanner
          title="Ready for infinity-corrected imaging?"
          description="Upgrade your CoreBox to research-grade optics with the Infinity Add-On."
          primaryLabel="Buy Now"
          primaryHref="https://shop.openuc2.com/shop/discovery-infinity-add-on-153"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
