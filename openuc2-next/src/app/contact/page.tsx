"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { Mail, Headset, MapPin, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const subjectOptions = [
  "FRAME — Request a quote",
  "Discovery Line — Order or pricing",
  "Education — Bulk / classroom pricing",
  "Custom configuration",
  "Partnership inquiry",
  "Technical support",
  "Other",
];

const infoCards = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "General inquiries",
    content: (
      <a href="mailto:hello@openuc2.com" className="text-uc2-blue hover:underline text-sm">
        hello@openuc2.com
      </a>
    ),
  },
  {
    icon: <Headset className="w-5 h-5" />,
    title: "Technical support",
    content: (
      <>
        <a href="mailto:support@openuc2.com" className="text-uc2-blue hover:underline text-sm block">
          support@openuc2.com
        </a>
        <a
          href="https://openuc2.discourse.group/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-uc2-blue hover:underline text-sm"
        >
          Community forum &rarr;
        </a>
      </>
    ),
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Visit us",
    content: (
      <p className="text-sm text-uc2-muted leading-relaxed">
        openUC2 GmbH
        <br />
        Hans-Kn&ouml;ll-Stra&szlig;e 6
        <br />
        07745 Jena, Germany
      </p>
    ),
  },
  {
    icon: <ExternalLink className="w-5 h-5" />,
    title: "Quick links",
    content: (
      <div className="flex flex-col gap-1">
        <a href="https://shop.openuc2.com/" target="_blank" rel="noopener noreferrer" className="text-uc2-blue hover:underline text-sm">
          Online Shop &rarr;
        </a>
        <a href="https://docs.openuc2.com/" target="_blank" rel="noopener noreferrer" className="text-uc2-blue hover:underline text-sm">
          Documentation &rarr;
        </a>
        <Link href="/configurator" className="text-uc2-blue hover:underline text-sm">
          Configurator &rarr;
        </Link>
      </div>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, submit to server endpoint
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-4 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <h1 className="text-3xl font-bold mb-2">Contact us</h1>
          <p className="text-uc2-muted">
            Questions about products, custom configurations, bulk orders, or
            partnerships? We&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-[1fr_320px] gap-12">
            {/* Form */}
            <ScrollReveal>
              {submitted ? (
                <div className="bg-uc2-green/10 border border-uc2-green/40 rounded-xl p-8 text-center">
                  <h2 className="text-xl font-bold mb-2">Message sent!</h2>
                  <p className="text-uc2-muted text-sm">
                    Thank you for reaching out. We&rsquo;ll get back to you within
                    two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white border border-uc2-border rounded-lg px-4 py-2.5 text-sm text-uc2-text placeholder:text-uc2-muted focus:outline-none focus:ring-2 focus:ring-uc2-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white border border-uc2-border rounded-lg px-4 py-2.5 text-sm text-uc2-text placeholder:text-uc2-muted focus:outline-none focus:ring-2 focus:ring-uc2-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">
                      Company / Institution (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-white border border-uc2-border rounded-lg px-4 py-2.5 text-sm text-uc2-text placeholder:text-uc2-muted focus:outline-none focus:ring-2 focus:ring-uc2-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full bg-white border border-uc2-border rounded-lg px-4 py-2.5 text-sm text-uc2-text focus:outline-none focus:ring-2 focus:ring-uc2-blue"
                    >
                      <option value="">Please select...</option>
                      {subjectOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your imaging needs, your institution, or your question..."
                      className="w-full bg-white border border-uc2-border rounded-lg px-4 py-2.5 text-sm text-uc2-text placeholder:text-uc2-muted focus:outline-none focus:ring-2 focus:ring-uc2-blue resize-y"
                    />
                  </div>

                  <p className="text-xs text-uc2-muted leading-relaxed">
                    By submitting this form, your data will be processed as described
                    in our{" "}
                    <Link href="/privacy#contact-forms" className="text-uc2-blue hover:underline">
                      Privacy Policy
                    </Link>
                    . Legal basis: Art.&nbsp;6(1)(b) GDPR (pre-contractual measures)
                    or Art.&nbsp;6(1)(f) GDPR (legitimate interest). You can request
                    deletion of your data at any time by emailing{" "}
                    <a href="mailto:hello@openuc2.com" className="text-uc2-blue hover:underline">
                      hello@openuc2.com
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all"
                  >
                    Send message
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Sidebar */}
            <div className="space-y-4">
              {infoCards.map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 60}>
                  <div className="bg-uc2-card border border-uc2-border rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3 text-uc2-blue">
                      {card.icon}
                      <h3 className="font-semibold text-sm">{card.title}</h3>
                    </div>
                    {card.content}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
