import type { Metadata } from "next";
import Link from "next/link";
import { Section, CTABanner } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "FairScope — Multi-Camera System | Built with openUC2",
  description:
    "How the FairScope project deployed a reproducible multi-camera microscopy system across multiple global sites.",
};

export default function FairscopeStoryPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/#stories" className="hover:text-uc2-blue">Built with openUC2</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">FairScope</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <PlaceholderImage
          text="FairScope hero — photo pending"
          aspectRatio="12/5"
          className="mb-10"
        />
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-uc2-green/20 text-uc2-green mb-4">
            Multi-Camera / Global Health
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">One platform, multiple cameras, global deployment</h1>
        </ScrollReveal>
      </Section>

      {/* Challenge */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-uc2-text leading-relaxed max-w-3xl">
            The FairScope project required a multi-camera microscopy system that could be reproduced
            reliably across multiple sites with varying resources — without sacrificing imaging
            performance or requiring specialized technical staff for assembly.
          </p>
        </ScrollReveal>
      </Section>

      {/* Solution */}
      <Section>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="text-uc2-text leading-relaxed max-w-3xl mb-6">
            The UC2 modular architecture made it possible to define a standardized design, swap
            camera modules depending on local availability, and maintain consistent imaging
            performance across deployments. Each site received the same cube-based kit with
            clear assembly instructions.
          </p>
        </ScrollReveal>
      </Section>

      {/* Results */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="bg-uc2-card border border-uc2-border rounded-xl p-8 max-w-xl">
            <div className="text-3xl font-extrabold text-uc2-green mb-2">Multiple sites</div>
            <div className="text-uc2-muted">deployed with reproducible imaging performance across setups</div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl text-uc2-text italic leading-relaxed mb-4">
            &ldquo;Testimonial placeholder — to be filled by marketing.&rdquo;
          </blockquote>
          <cite className="text-sm text-uc2-muted not-italic">— FairScope Team</cite>
        </div>
      </Section>

      {/* Gallery */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          <PlaceholderImage text="Multi-camera UC2 setup — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Side-by-side identical systems at different sites — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Imaging results comparison — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Deployment documentation — photo pending" aspectRatio="4/3" />
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
