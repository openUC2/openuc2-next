import type { Metadata } from "next";
import Link from "next/link";
import { Section, CTABanner } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "Photonic Computing — Optical Prototyping | Built with openUC2",
  description:
    "How a photonic computing research team used UC2 cubes to rapidly iterate on free-space optical layouts.",
};

export default function PhotonicComputeStoryPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/#stories" className="hover:text-uc2-blue">Built with openUC2</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Photonic Computing</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <PlaceholderImage
          text="Photonic Computing hero — photo pending"
          aspectRatio="12/5"
          className="mb-10"
        />
        <ScrollReveal>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-uc2-accent/20 text-uc2-accent mb-4">
            Photonic Compute / R&amp;D
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rapid optical prototyping for photonic compute R&amp;D</h1>
        </ScrollReveal>
      </Section>

      {/* Challenge */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Challenge</h2>
          <p className="text-uc2-text leading-relaxed max-w-3xl">
            A photonic computing research team needed to rapidly iterate on free-space optical
            layouts — testing different lens configurations, beam paths, and detector positions.
            Custom machining each iteration was too slow and too expensive.
          </p>
        </ScrollReveal>
      </Section>

      {/* Solution */}
      <Section>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Solution</h2>
          <p className="text-uc2-text leading-relaxed max-w-3xl mb-6">
            Instead of custom machining each iteration, they used the UC2 cube grid to reconfigure
            setups in minutes, validating optical alignment digitally before each physical build.
            The modular approach enabled testing dozens of configurations that would have taken
            weeks with traditional methods.
          </p>
        </ScrollReveal>
      </Section>

      {/* Results */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="bg-uc2-card border border-uc2-border rounded-xl p-8 max-w-xl">
            <div className="text-3xl font-extrabold text-uc2-accent mb-2">10x more configurations</div>
            <div className="text-uc2-muted">tested per week vs. traditional custom-machined approach</div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-lg md:text-xl text-uc2-text italic leading-relaxed mb-4">
            &ldquo;Testimonial placeholder — to be filled by marketing.&rdquo;
          </blockquote>
          <cite className="text-sm text-uc2-muted not-italic">— Research Team</cite>
        </div>
      </Section>

      {/* Gallery */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          <PlaceholderImage text="UC2 cubes with laser beam path — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Configurator with compute-relevant layout — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Comparison: traditional vs. modular setup — photo pending" aspectRatio="4/3" />
          <PlaceholderImage text="Optical alignment validation — photo pending" aspectRatio="4/3" />
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
