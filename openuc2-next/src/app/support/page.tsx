import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Download,
  Github,
  MessageCircle,
  LifeBuoy,
  FileText,
} from "lucide-react";
import { Section, CTABanner } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Support — openUC2",
  description:
    "Find documentation, downloads, community forums, and support for openUC2 products.",
};

const resources = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Documentation",
    description:
      "Hardware assembly guides, software setup, API reference, and tutorials for every UC2 product.",
    href: "https://docs.openuc2.com/",
    label: "docs.openuc2.com",
    external: true,
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub repositories",
    description:
      "CAD files, firmware, ImSwitch plugins, and example notebooks. Everything is open source.",
    href: "https://github.com/openUC2",
    label: "github.com/openUC2",
    external: true,
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Community forum",
    description:
      "Ask questions, share your builds, and connect with other UC2 users and developers worldwide.",
    href: "https://openuc2.discourse.group/",
    label: "openuc2.discourse.group",
    external: true,
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Downloads",
    description:
      "Latest ImSwitch releases, firmware binaries, STL files for 3D printing, and quick-start packages.",
    href: "https://github.com/openUC2/ImSwitch/releases",
    label: "ImSwitch releases",
    external: true,
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "FAQ & troubleshooting",
    description:
      "Common issues with assembly, focus, LED drivers, and software connectivity&nbsp;&mdash; and how to fix them.",
    href: "https://docs.openuc2.com/",
    label: "Read the FAQ",
    external: true,
  },
  {
    icon: <LifeBuoy className="w-6 h-6" />,
    title: "Direct support",
    description:
      "Need one-on-one help? Email our support team and we will respond within two business days.",
    href: "mailto:support@openuc2.com",
    label: "support@openuc2.com",
    external: false,
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support & Resources</h1>
          <p className="text-uc2-muted max-w-xl mx-auto text-lg">
            Everything you need to get started, troubleshoot, and make the most of
            your UC2 system.
          </p>
        </div>
      </section>

      {/* Resource grid */}
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 60}>
              <a
                href={r.href}
                target={r.external ? "_blank" : undefined}
                rel={r.external ? "noopener noreferrer" : undefined}
                className="block bg-uc2-card border border-uc2-border rounded-xl p-6 h-full hover:border-uc2-blue/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-uc2-blue/20 text-uc2-blue flex items-center justify-center mb-4 group-hover:bg-uc2-blue/30 transition-colors">
                  {r.icon}
                </div>
                <h2 className="font-semibold mb-2">{r.title}</h2>
                <p
                  className="text-sm text-uc2-muted leading-relaxed mb-3"
                  dangerouslySetInnerHTML={{ __html: r.description }}
                />
                <span className="text-sm text-uc2-blue">{r.label} &rarr;</span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section alt>
        <CTABanner
          title="Can't find what you need?"
          description="Reach out directly and our team will help you with your specific question."
          primaryLabel="Contact us"
          primaryHref="/contact"
          secondaryLabel="Back to home"
          secondaryHref="/"
        />
      </Section>
    </>
  );
}
