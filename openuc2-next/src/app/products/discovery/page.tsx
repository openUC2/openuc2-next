import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Infinity, Lightbulb, Disc3, Ruler, Sparkles, BookText, School, GraduationCap } from "lucide-react";
import { Section, CTABanner, FeatureCard, Tag } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "Discovery Line — Educational Optics Kits",
  description:
    "Hands-on modular kits for teaching optics, microscopy, and imaging. From simple lens experiments to automated fluorescence microscopy.",
};

const learningPath = [
  { step: 1, title: "CoreBox", desc: "Analog optics: lenses, mirrors, prisms. Build 9+ setups." },
  { step: 2, title: "Electronics Add-On", desc: "Add motors, LEDs, ESP32 control. Automate your microscope." },
  { step: 3, title: "Infinity Add-On", desc: "Upgrade to infinity-corrected optics with a camera." },
  { step: 4, title: "Fluorescence Add-On", desc: "LED or laser excitation. Real fluorescence microscopy." },
  { step: 5, title: "Light-Sheet Add-On", desc: "Build an actual light-sheet microscope from cubes." },
];

const addons = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Electronics Add-On",
    shopLink: "https://shop.openuc2.com/shop/kit-electronics-elt-25-02-discovery-electronics-add-on-1593",
    price: "EUR 549",
    description:
      "Adds ESP32 microcontroller, stepper motors, LED matrix, and USB camera. Transform your analog microscope into a computer-controlled imaging system. Requires: CoreBox.",
  },
  {
    icon: <Infinity className="w-5 h-5" />,
    title: "Infinity Add-On",
    shopLink: "https://shop.openuc2.com/shop/discovery-infinity-add-on-153",
    price: "EUR 749",
    description:
      "Upgrade to infinity-corrected optics with a tube lens and RMS objective. Camera-based digital imaging with proper Koehler illumination. Requires: CoreBox + Electronics.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Fluorescence LED Add-On",
    price: "EUR 699",
    description:
      "Adds a 488 nm LED excitation source, dichroic mirror cube, and emission filter. Real fluorescence microscopy on a student budget. Requires: CoreBox + Electronics + Infinity.",
  },
  {
    icon: <Disc3 className="w-5 h-5" />,
    title: "Fluorescence Laser Add-On",
    shopLink: "https://shop.openuc2.com/shop/discovery-fluorescence-add-on-led-488nm-159",
    price: "EUR 1,199",
    description:
      "488 nm laser excitation for higher-intensity fluorescence imaging. Includes safety enclosure and alignment tools. Requires: CoreBox + Electronics + Infinity.",
  },
  {
    icon: <Ruler className="w-5 h-5" />,
    title: "Light-Sheet Add-On",
    price: "EUR 999",
    shopLink: "https://shop.openuc2.com/shop/discovery-light-sheet-add-on-154",
    description:
      "Build an actual selective plane illumination microscope (SPIM) from cubes. Cylindrical lens, sample chamber, and orthogonal detection path. Requires: CoreBox + Electronics + Infinity.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "More coming soon",
    price: "",
    description:
      "We're continuously developing new add-ons. Join our community forum to suggest and vote on future kits.",
  },
];

export default function DiscoveryPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <span>Products</span>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Discovery Line</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Tag variant="edu">Education</Tag>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">Discovery Line</h1>
            <p className="text-uc2-muted mb-4">Modular Educational Kits for Optics & Microscopy</p>
            <p className="text-uc2-text leading-relaxed mb-8">
              Teach optics by building real instruments. Students assemble microscopes, interferometers,
              and imaging systems from standardized cube modules — then experiment, break, reconfigure,
              and understand how light actually works.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://shop.openuc2.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-uc2-green text-white font-semibold rounded-lg hover:brightness-110 transition-all">
                Browse the Shop
              </a>
              <a href="https://docs.openuc2.com/usage/disc/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-uc2-border text-uc2-text font-semibold rounded-lg hover:bg-uc2-surface-alt transition-colors">
                Teaching Resources
              </a>
            </div>
          </div>
          <img src="/openuc2-next/images/corebox.webp" alt="Discovery Lineup: CoreBox, Electronics Kit, Infinity Upgrade, QBox" className="rounded-lg border border-uc2-border" />
        </div>
      </Section>

      {/* Learning path */}
      <Section alt>
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-3">A learning path that grows with your students</h2>
            <p className="text-uc2-muted">Start analog. Add electronics. Upgrade to professional optics. Each kit builds on the last.</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-uc2-green/50 via-uc2-blue/50 to-uc2-accent/50" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {learningPath.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="text-center relative">
                  <div className="w-10 h-10 bg-uc2-blue text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h5 className="text-sm font-semibold mb-2">{step.title}</h5>
                  <p className="text-xs text-uc2-muted">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Standalone kits */}
      <Section id="kits">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">Standalone Kits</h2>
          <p className="text-uc2-muted mb-10">Complete boxes that work on their own — perfect entry points.</p>
        </ScrollReveal>

        {/* CoreBox */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <img src="/openuc2-next/images/discovery.png" alt="CoreBox Kit" className="rounded-lg border border-uc2-border" />
            <div>
              <h3 className="text-2xl font-bold mb-1">
                CoreBox{" "}
                <span className="inline-block bg-uc2-green/20 text-uc2-green text-sm font-semibold px-3 py-1 rounded-full ml-2">
                  EUR 399
                </span>
              </h3>
              <p className="text-uc2-muted my-3">
                Your first steps into optics. The CoreBox includes cubes, lenses (positive, negative,
                aspheric), mirrors, a beamsplitter, and a baseplate grid. Build up to 9 different
                optical setups — from a simple magnifier to a smartphone microscope. Comes with a
                printed manual.
              </p>
              <p className="text-uc2-muted mb-1">
                <strong>Best for:</strong> High school physics, intro university courses, maker spaces, science fairs.
              </p>
              <p className="text-uc2-muted mb-4">
                <strong>No electronics required.</strong> Fully analog, hands-on learning.
              </p>
              <a href="https://shop.openuc2.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-uc2-green text-white font-semibold rounded-lg hover:brightness-110 transition-all">
                Buy CoreBox
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* QBox */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2">
              <img src="/openuc2-next/images/qbox.png" alt="QBox Quantum Optics Kit" className="rounded-lg border border-uc2-border" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">
                QBox — Quantum Optics Kit{" "}
                <span className="inline-block bg-uc2-blue/20 text-uc2-blue text-sm font-semibold px-3 py-1 rounded-full ml-2">
                  EUR 1,199
                </span>
              </h3>
              <p className="text-uc2-muted my-3">
                An expandable experimental kit for teaching quantum optics concepts. Explore
                single-photon experiments, polarization, entanglement analogs, and more — all built on
                the UC2 cube platform.
              </p>
              <p className="text-uc2-muted mb-4">
                <strong>Best for:</strong> University quantum physics courses, advanced optics labs, outreach programs.
              </p>
              <a href="https://shop.openuc2.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-uc2-green text-white font-semibold rounded-lg hover:brightness-110 transition-all">
                Buy QBox
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Add-on kits */}
      <Section alt id="addons">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2">Add-On Kits</h2>
          <p className="text-uc2-muted mb-10">Expand the CoreBox step by step. Each add-on builds on the previous one.</p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon, i) => (
            <ScrollReveal key={addon.title} delay={i * 80}>
              <div className={`bg-uc2-card border ${addon.price ? "border-uc2-border" : "border-dashed border-uc2-border"} rounded-xl p-6 hover:border-uc2-blue/50 transition-colors h-full flex flex-col`}>
                <div className="w-10 h-10 rounded-lg bg-uc2-blue/20 text-uc2-blue flex items-center justify-center mb-4">
                  {addon.icon}
                </div>
                <h4 className="font-semibold mb-1">
                  {addon.title}
                  {addon.price && (
                    <span className="inline-block bg-uc2-green/20 text-uc2-green text-xs font-semibold px-2 py-0.5 rounded-full ml-2">
                      {addon.price}
                    </span>
                  )}
                </h4>
                <p className="text-sm text-uc2-muted leading-relaxed mb-4 flex-1">{addon.description}</p>
                {addon.price && (
                  <a
                    href={addon.shopLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center px-4 py-2 bg-uc2-green text-white text-sm font-semibold rounded-lg hover:brightness-110 transition-all"
                  >
                    Buy Now
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* For teachers */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">For teachers & institutions</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-6">
          <ScrollReveal>
            <FeatureCard
              icon={<BookText className="w-5 h-5" />}
              title="Curriculum-ready manuals"
              description="Each kit includes printed and digital manuals with step-by-step instructions, learning objectives, and discussion questions."
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FeatureCard
              icon={<School className="w-5 h-5" />}
              title="Classroom sets available"
              description="Need 20 kits for a course? Contact us for bulk pricing and customized configurations for your curriculum."
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <FeatureCard
              icon={<GraduationCap className="w-5 h-5" />}
              title="Workshop support"
              description="We offer on-site and virtual workshops to train teachers. Our team has run 50+ workshops globally."
            />
          </ScrollReveal>
        </div>
        <div className="text-center mt-10">
          <Link href="/contact?subject=Education+bulk" className="px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all">
            Request educational pricing
          </Link>
        </div>
      </Section>

      {/* Upgrade CTA */}
      <Section alt>
        <div className="rounded-2xl bg-gradient-to-br from-uc2-green to-uc2-green/70 p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Your students have outgrown the Discovery kits?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            The same cube modules work inside FRAME — our fully automated research microscope.
            Discovery graduates already understand the optical principles. Now give them a professional tool.
          </p>
          <Link href="/products/frame" className="px-6 py-3 bg-white text-uc2-green font-semibold rounded-lg hover:bg-uc2-light transition-colors">
            Explore FRAME
          </Link>
        </div>
      </Section>
    </>
  );
}
