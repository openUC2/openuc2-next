import type { Metadata } from "next";
import Link from "next/link";
import { Box, Cpu, Code, LayoutGrid, FileText, Users, Wrench } from "lucide-react";
import { Section, CTABanner, FeatureCard, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { image } from "framer-motion/client";

export const metadata: Metadata = {
  title: "Open Platform & Community — Makers",
  description:
    "The full open-source ecosystem: 3D-printable cube designs, electronics schematics, firmware (ESP32), and ImSwitch software. Build your own microscope.",
};

const resources = [
  {
    icon: <Box className="w-5 h-5" />,
    title: "Hardware designs (CAD)",
    description: "All cube modules, baseplates, and assemblies as open-source STL/STEP files. Print on your own 3D printer or order from our shop.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Electronics schematics",
    description: "PCB designs for the UC2 electronics stack: motor drivers, LED controllers, and ESP32-based mainboard. KiCad and Gerber files included.",
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Software (ImSwitch)",
    description: "Python-based microscopy control software with GUI, REST API, and Jupyter integration. Runs on Raspberry Pi, Jetson, or any PC.",
  },
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    title: "Configurator tool",
    description: "Drag-and-drop web tool to design your optical setup. Export a bill of materials and assembly instructions.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Documentation",
    description: "Comprehensive build guides, API references, and tutorials. From your first cube to automated whole-slide scanning.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community",
    description: "Join 500+ builders on our Discourse forum. Share your designs, get help, and collaborate on new modules.",
  },
];

const communityBuilds = [
  {
    title: "Incubator microscope",
    desc: "A PhD student in Berlin built a time-lapse microscope that sits inside a CO2 incubator. Uses ESP32 WiFi for remote control.",
    user: "Community build",
    imageSrc: "/openuc2-next/images/incuscope.jpg",
  },
  {
    title: "Automated blood smear scanner",
    desc: "A clinic in Nigeria assembled a brightfield scanner from 3D-printed cubes and a Raspberry Pi. Scans malaria samples at 10x.",
    user: "Community build",
    imageSrc: "/openuc2-next/images/shitscope.png",
  },
  {
    title: "DIY light-sheet microscope",
    desc: "A group of undergrads in Munich built a light-sheet microscope for their thesis project, including a custom sample chamber. Total cost under EUR 500.",
    user: "Community build",
    imageSrc: "/openuc2-next/images/lightsheet.jpeg",
  },
];

export default function MakersPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <span>Products</span>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Open Platform</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Tag variant="maker">Makers & Research</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">Open Platform</h1>
            <p className="text-uc2-muted mb-4">Build, modify, and share your microscope</p>
            <p className="text-uc2-text leading-relaxed mb-8">
              The full open-source ecosystem: 3D-printable cube designs, electronics schematics,
              firmware (ESP32), and ImSwitch software. Build your own microscope from scratch,
              customize every component, and share your designs with the community.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/openUC2/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-uc2-accent text-white font-semibold rounded-lg hover:brightness-110 transition-all">
                GitHub
              </a>
              <a href="https://docs.openuc2.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-uc2-border text-uc2-text font-semibold rounded-lg hover:bg-uc2-surface-alt transition-colors">
                Documentation
              </a>
              <a href="https://openuc2.discourse.group/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-uc2-border text-uc2-text font-semibold rounded-lg hover:bg-uc2-surface-alt transition-colors">
                Community Forum
              </a>
            </div>
          </div>
          <img src="/openuc2-next/images/course2.JPG" alt="Collage of open-source microscope components: 3D-printed cubes, circuit boards, and software screenshots" className="rounded-lg border border-uc2-border" />
        </div>
      </Section>

      {/* Resources */}
      <Section alt>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Everything you need to build</h2>
            <p className="text-uc2-muted">All resources are free and open source. No registration required.</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 80}>
              <FeatureCard icon={r.icon} title={r.title} description={r.description} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Community builds */}
      <Section>
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">From the community</h2>
          <p className="text-uc2-muted mb-10">Real projects built by real people around the world</p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {communityBuilds.map((cb, i) => (
            <ScrollReveal key={cb.title} delay={i * 100}>
              <div className="bg-uc2-card border border-uc2-border rounded-xl overflow-hidden hover:border-uc2-accent/50 transition-colors">
                <div className="aspect-video bg-uc2-surface-alt flex items-center justify-center">
                  <img src={cb.imageSrc} alt={cb.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold mb-2">{cb.title}</h4>
                  <p className="text-sm text-uc2-muted mb-3">{cb.desc}</p>
                  <span className="text-xs text-uc2-accent font-medium">{cb.user}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* DIY vs Buy */}
      <Section alt>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">DIY or buy ready-made?</h2>
            <p className="text-uc2-muted">You don&apos;t have to choose. Mix and match.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-uc2-card border border-uc2-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-uc2-accent mb-4">Build it yourself</h3>
              <ul className="space-y-3 text-sm text-uc2-muted">
                <li className="flex gap-2"><span className="text-uc2-accent font-bold">+</span> Maximum flexibility</li>
                <li className="flex gap-2"><span className="text-uc2-accent font-bold">+</span> Lowest cost (3D printing + off-the-shelf parts)</li>
                <li className="flex gap-2"><span className="text-uc2-accent font-bold">+</span> Full understanding of every component</li>
                <li className="flex gap-2"><span className="text-uc2-accent font-bold">+</span> Can modify anything to fit your specific use case</li>
                <li className="flex gap-2"><span className="text-uc2-muted/50">-</span> Assembly time required</li>
                <li className="flex gap-2"><span className="text-uc2-muted/50">-</span> Quality depends on your 3D printer</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="https://github.com/openUC2/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-uc2-accent text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all">
                  GitHub Repository
                </a>
                <Link href="/configurator" className="px-5 py-2.5 border border-uc2-accent text-uc2-accent text-sm font-semibold rounded-lg hover:bg-uc2-accent/10 transition-colors">
                  Configurator
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="bg-uc2-card border border-uc2-blue/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-uc2-blue mb-4">Buy from the shop</h3>
              <ul className="space-y-3 text-sm text-uc2-muted">
                <li className="flex gap-2"><span className="text-uc2-blue font-bold">+</span> Injection-molded cubes (precision, durability)</li>
                <li className="flex gap-2"><span className="text-uc2-blue font-bold">+</span> Pre-tested optics with quality assurance</li>
                <li className="flex gap-2"><span className="text-uc2-blue font-bold">+</span> Ready-to-use — unbox and start building</li>
                <li className="flex gap-2"><span className="text-uc2-blue font-bold">+</span> Support and warranty from openUC2</li>
                <li className="flex gap-2"><span className="text-uc2-muted/50">-</span> Higher upfront cost</li>
                <li className="flex gap-2"><span className="text-uc2-muted/50">-</span> Fixed set of components</li>
              </ul>
              <div className="mt-6">
                <a href="https://shop.openuc2.com/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-uc2-blue text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all">
                  Visit Shop
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABanner
          title="Ready for a professional upgrade?"
          description="The FRAME microscope uses the same cube architecture — but with motorized stages, precision machining, and automated software. Your open-source skills translate directly."
          primaryLabel="Explore FRAME"
          primaryHref="/products/frame"
          secondaryLabel="Try the Configurator"
          secondaryHref="/configurator"
        />
      </Section>
    </>
  );
}
