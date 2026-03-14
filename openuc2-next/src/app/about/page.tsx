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
  { name: "Dr. Benedict Diederich", role: "CEO & Co-Founder | Vision | R&D", imageSrc: "/openuc2-next/images/Benedict.jpg" },
  { name: "Haoran Wang", role: "CTO | R&D | Production | Logistics", imageSrc: "/openuc2-next/images/Haoran.jpg" },
  { name: "Sebastian Trampenau", role: "CFO | Financing | Sales | Marketing", imageSrc: "/openuc2-next/images/Sebastian.jpg" },
  { name: "Christian Kuttke", role: "Electronics design", imageSrc: "/openuc2-next/images/Christian.jpg" },
  { name: "Armin Grundmann", role: "Product Management", imageSrc: "/openuc2-next/images/Armin.jpg" },
  { name: "Jens Gerstenberger", role: "Mechanical design | Automation Engineer", imageSrc: "/openuc2-next/images/Jens.jpg" },
{ name: "Christine Aumüller", role: "Production | Product certification", imageSrc: "/openuc2-next/images/Christine.jpg" },
{ name: "Ethan Li", role: "Software Engineer", imageSrc: "/openuc2-next/images/Ethan.jpg" },
{ name: "Florian Paproth", role: "Software Engineer", imageSrc: "/openuc2-next/images/Florian.jpg" },
{name: "Dr. Johannes Roos", role: "Software Engineer | Application Specialist", imageSrc: "https://avatars.githubusercontent.com/u/3322897?v=4" },
{name: "Stephan Becker", role: "Automation Engineer | Robotics", imageSrc: "/openuc2-next/images/Stephan.jpg" },
{name: "Dirk Truckenbrodt", role: "Sales", imageSrc: "/openuc2-next/images/Dirk.jpg" },
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
            <img
              src="/openuc2-next/images/Team.jpg"
              alt="Collage of early UC2 prototypes, the original Nature Communications paper, and photos of the founders working in the lab"
              className="rounded-lg border border-uc2-border"
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
                {/* replace with imageSrc when available, but don't distort them, keep aspect ratio */}
                {m.imageSrc ? (
                  <img
                    src={m.imageSrc}
                    alt={m.name}
                    // ensure its aspect ratio is preserved and it fits within a 100x100 box, with a circular mask
                    className="w-50 h-50 mx-auto rounded-full object-cover border border-uc2-border mb-3"
                  />
                ) : (
                  <div className="w-50 h-50 mx-auto rounded-full bg-uc2-muted/10 text-uc2-muted flex items-center justify-center mb-3">
                    {m.name
                      .replace(/Dr\.\s?/, "")
                      .split(" ")
                        .map((w) => w[0])
                    .join("")}
                </div>
                )}

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
          <ScrollReveal delay={160}>
            <blockquote className="bg-uc2-card border border-uc2-border rounded-xl p-6">
              <p className="text-uc2-text leading-relaxed mb-2">
                <BookOpen className="inline w-4 h-4 mr-2 text-uc2-blue" />
                H.&nbsp;Wang et&nbsp;al., &ldquo;UCsim2: Two-dimensionally structured illumination microscopy using UC2,&rdquo; <em>Philosophical Transactions of the Royal Society A</em>, 2022.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
        <p className="mt-6">
          <a
            href="https://scholar.google.com/citations?hl=de&user=TvSHTGkAAAAJ&view_op=list_works&sortby=pubdate"
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
