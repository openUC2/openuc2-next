"use client";
import { basePath } from "@/lib/basePath";

import Link from "next/link";
import { GraduationCap, Wrench, Microscope } from "lucide-react";
import { Tag } from "@/components/ui/Section";

const personas = [
  {
    icon: <Microscope className="w-7 h-7" />,
    tagVariant: "pro" as const,
    tag: "Professional & Industry",
    title: "I need to prototype fast",
    description:
      "FRAME: a fully motorized, modular microscope platform. Configure online, validate with ray tracing, swap imaging modes in seconds. From concept to data in days.",
    cta: "Explore FRAME",
    href: "/products/frame",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    tagVariant: "maker" as const,
    tag: "Makers & Research",
    title: "I want to build & prototype",
    description:
      "An open platform for PhD students, makers, R&D teams, and startups. Prototype custom optical setups, contribute to the community, and integrate with your tools.",
    cta: "Explore the Open Platform",
    href: "/products/makers",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    tagVariant: "edu" as const,
    tag: "Education",
    title: "I want to teach optics",
    description:
      "Hands-on kits for classrooms, universities, and workshops. Students build real microscopes from modular cubes and understand optics by doing.",
    cta: "Explore Discovery Line",
    href: "/products/discovery",
  },
];

export function HeroVideo() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 dark-section">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={`${basePath}/images/hero-poster.jpg`}
      >
        <source src={`${basePath}/videos/openuc2_hero2.mp4`} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-video-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          From optical concept to working data
          <br />
          — in hours, for everyone.
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-14">
          A modular platform to configure, simulate, and build custom optical systems.
          One standardized cube interface — from rapid prototyping to production.
        </p>

        {/* Persona cards */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {personas.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-6 text-left hover:bg-white/15 hover:border-white/25 transition-all"
            >
              <div className="text-white/80 mb-3">{p.icon}</div>
              <Tag variant={p.tagVariant} className={p.tagVariant === 'pro' ? 'text-white' : undefined}>{p.tag}</Tag>
              <h3 className="text-lg font-semibold text-white mt-3 mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">{p.description}</p>
              <span className="text-sm text-uc2-green font-medium group-hover:underline">
                {p.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
