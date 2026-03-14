import type { Metadata } from "next";
import Link from "next/link";
import { Unlock, FileText, Globe, BookOpen } from "lucide-react";
import { Section, CTABanner } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "About Us — openUC2",
  description:
    "We are a Jena-based startup making microscopy accessible, modular, and open.",
};

const openSourceCards = [
  {
    icon: <Unlock className="w-5 h-5" />,
    title: "No vendor lock-in",
    text: "You own your microscope. Modify the hardware, fork the software, source components from anyone. Your lab\u2019s investment is never held hostage by a vendor\u2019s roadmap.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Full reproducibility",
    text: "Publish your methods with complete transparency. Reviewers and readers can inspect every hardware design, firmware parameter, and software version used in your experiment.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Community-driven innovation",
    text: "Hundreds of users worldwide contribute designs, report issues, and build new modules. The platform improves faster than any single company could manage alone.",
  },
];

const teamMembers = [
  { name: "Dr. Benedict Diederich", role: "CEO & Co-Founder" },
  { name: "Dr. Rene Lachmann", role: "CTO & Co-Founder" },
  { name: "Barbora Marsikova", role: "Head of Education" },
  { name: "Xingjian Wang", role: "Mechanical Engineering" },
  { name: "Haoran Wang", role: "Software Engineering" },
  { name: "Niklas Netter", role: "Automation Engineer" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About openUC2</h1>
          <p className="text-uc2-muted max-w-xl text-lg leading-relaxed">
            We&rsquo;re a Jena-based startup making microscopy accessible, modular,
            and open. Our mission: give every lab, school, and maker the tools to
            see the world at the microscale&nbsp;&mdash; and the freedom to modify
            those tools.
          </p>
        </div>
      </section>

      {/* Our story */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Our story</h2>
            <p className="text-uc2-text leading-relaxed mb-4">
              openUC2 started as an academic project at the Friedrich Schiller
              University Jena, born from the frustration that research microscopes
              are expensive, inflexible, and closed. The idea: what if microscopy
              had a standardized, modular building block&nbsp;&mdash; like LEGO,
              but for optics?
            </p>
            <p className="text-uc2-text leading-relaxed mb-4">
              The UC2 cube was the answer. A 50&times;50&thinsp;mm standardized
              interface that holds any optical component. Snap cubes together on a
              grid, and you have a microscope. The concept was published in{" "}
              <em>Nature Communications</em> and adopted by labs and educators
              worldwide.
            </p>
            <p className="text-uc2-text leading-relaxed">
              In 2022, we founded openUC2 GmbH to turn the research project into a
              product company&nbsp;&mdash; while keeping everything open source.
              Today we sell educational kits, the FRAME automated microscope, and
              support a global community of builders and researchers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <PlaceholderImage
              text="Team photo / Lab photo — the openUC2 team in Jena"
              aspectRatio="4/3"
              bgColor="#d1d9e6"
            />
          </ScrollReveal>
        </div>
      </Section>

      {/* Why open source */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-10">Why open source?</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {openSourceCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="bg-uc2-card border border-uc2-border rounded-xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-uc2-blue/20 text-uc2-blue flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-uc2-muted leading-relaxed">{c.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-3">The team</h2>
          <p className="text-uc2-muted text-center mb-10 max-w-lg mx-auto">
            Physicists, engineers, educators, and makers united around one goal:
            democratizing microscopy.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {teamMembers.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 60}>
              <div className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-uc2-surface-alt border border-uc2-border flex items-center justify-center text-uc2-muted text-3xl font-bold mb-3">
                  {m.name
                    .replace(/Dr\.\s?/, "")
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <h3 className="font-semibold text-sm">{m.name}</h3>
                <p className="text-xs text-uc2-muted">{m.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Publications */}
      <Section alt>
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">Publications</h2>
          <p className="text-uc2-muted mb-8">
            Peer-reviewed work describing and using the UC2 system
          </p>
        </ScrollReveal>
        <div className="space-y-6">
          <ScrollReveal>
            <blockquote className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <p className="text-uc2-text leading-relaxed mb-2">
                <BookOpen className="inline w-4 h-4 mr-2 text-uc2-blue" />
                B.&nbsp;Diederich et&nbsp;al., &ldquo;UC2&nbsp;&mdash; A Versatile
                and Customizable low-cost 3D-printed Optical Open-Standard for
                microscopic imaging,&rdquo; <em>Nature Communications</em>, 2020.
              </p>
              <cite className="text-sm text-uc2-muted not-italic">
                The foundational UC2 paper&nbsp;&mdash; cited 200+ times
              </cite>
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <blockquote className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <p className="text-uc2-text leading-relaxed mb-2">
                <BookOpen className="inline w-4 h-4 mr-2 text-uc2-blue" />
                B.&nbsp;Diederich et&nbsp;al., &ldquo;A versatile and customizable
                low-cost 3D-printed open standard for microscopic imaging,&rdquo;{" "}
                <em>Nature Methods</em>, 2022.
              </p>
              <cite className="text-sm text-uc2-muted not-italic">
                UC2 in Nature Methods Technology Feature
              </cite>
            </blockquote>
          </ScrollReveal>
        </div>
        <p className="mt-6">
          <a
            href="https://scholar.google.com/citations?user=PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="text-uc2-blue hover:underline text-sm"
          >
            View all publications on Google Scholar &rarr;
          </a>
        </p>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="Get in touch"
          description="Questions about our products, partnership opportunities, or custom configurations?"
          primaryLabel="Contact us"
          primaryHref="/contact"
        />
      </Section>
    </>
  );
}
