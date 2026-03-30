import { basePath } from "@/lib/basePath";
import type { Metadata } from "next";
import Link from "next/link";
import { Zap } from "lucide-react";
import { Section, CTABanner, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Electronics Add-On — Discovery Line — openUC2",
  description:
    "Add ESP32 microcontroller, stepper motors, LED matrix, and USB camera to your CoreBox. Transform your analog microscope into a computer-controlled imaging system.",
};

export default function ElectronicsAddonPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/products/discovery" className="hover:text-uc2-blue">Discovery Line</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Electronics Add-On</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Tag variant="edu">Education</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">Electronics Add-On</h1>
            <p className="text-uc2-muted mb-4">
              <span className="inline-block bg-uc2-green/20 text-uc2-green text-sm font-semibold px-3 py-1 rounded-full">
                EUR 549
              </span>
            </p>
            <p className="text-uc2-text leading-relaxed mb-6">
              Adds ESP32 microcontroller, stepper motors, LED matrix, and USB camera to your CoreBox.
              Transform your analog microscope into a computer-controlled imaging system. Control
              focus, illumination, and capture images — all from your browser.
            </p>
            <p className="text-uc2-muted mb-6">
              <strong>Requires:</strong> CoreBox
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://shop.openuc2.com/shop/kit-electronics-elt-25-02-discovery-electronics-add-on-1593"
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
              <img src={`${basePath}/images/addons/electronics.webp`} alt="Electronics Add-On product image" className="w-full h-full object-cover rounded-lg" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Details */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">What&rsquo;s included</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Zap className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">ESP32 Microcontroller</h3>
              <p className="text-sm text-uc2-muted">WiFi-enabled microcontroller for motor and LED control. Programmable via Arduino IDE or our web interface.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Zap className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">Stepper Motors</h3>
              <p className="text-sm text-uc2-muted">Precision stepper motors for focus and stage control. Sub-micrometer positioning.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Zap className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">LED Matrix</h3>
              <p className="text-sm text-uc2-muted">Programmable LED illumination for brightfield, darkfield, and structured illumination experiments.</p>
            </div>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <Zap className="w-6 h-6 text-uc2-blue mb-3" />
              <h3 className="font-semibold mb-2">USB Camera</h3>
              <p className="text-sm text-uc2-muted">Digital camera for capturing images and streaming video. Compatible with ImSwitch software.</p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="Ready to automate your microscope?"
          description="The Electronics Add-On is the first step toward a fully automated imaging system."
          primaryLabel="Buy Now"
          primaryHref="https://shop.openuc2.com/shop/kit-electronics-elt-25-02-discovery-electronics-add-on-1593"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
