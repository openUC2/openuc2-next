import Link from "next/link";
import { Lightbulb } from "lucide-react";
import { Section, CTABanner, SpecsTable, FeatureCard } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { ApplicationData } from "@/lib/applications";

interface Props {
  app: ApplicationData;
}

export function ApplicationTemplate({ app }: Props) {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link href="/applications" className="hover:text-uc2-blue">Applications</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">{app.title}</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-uc2-blue/20 text-uc2-blue mb-4">
              {app.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{app.title}</h1>
            <p className="text-uc2-muted mb-6 text-lg">{app.subtitle}</p>
            <p className="text-uc2-text leading-relaxed mb-8">{app.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all">
                Get in touch
              </Link>
              <Link href="/products/frame" className="px-6 py-3 border border-uc2-border text-uc2-text font-semibold rounded-lg hover:bg-uc2-surface-alt transition-colors">
                See FRAME
              </Link>
            </div>
          </div>
          <PlaceholderImage
            text={`${app.title} — sample image`}
            aspectRatio="4/3"
            bgColor={app.heroColor}
          />
        </div>
      </Section>

      {/* Specs */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-8">Technical specifications</h2>
          <div className="max-w-2xl">
            <SpecsTable rows={app.specs} />
          </div>
        </ScrollReveal>
      </Section>

      {/* Features */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Key capabilities</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {app.features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <FeatureCard
                icon={<Lightbulb className="w-5 h-5" />}
                title={f.title}
                description={f.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-6">On the roadmap</h2>
          <div className="space-y-3">
            {app.roadmapItems.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-uc2-card border border-uc2-border rounded-lg p-4">
                <div className="w-2 h-2 rounded-full bg-uc2-accent mt-2 shrink-0" />
                <span className="text-uc2-text text-sm">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title={`Interested in ${app.title.toLowerCase()}?`}
          description="Tell us about your imaging needs and we'll help you find the right configuration."
          primaryLabel="Contact us"
          primaryHref="/contact"
          secondaryLabel="All Applications"
          secondaryHref="/applications"
        />
      </Section>
    </>
  );
}
