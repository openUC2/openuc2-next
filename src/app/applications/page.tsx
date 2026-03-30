import { basePath } from "@/lib/basePath";
import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { applicationData } from "@/lib/applications";

export const metadata: Metadata = {
  title: "Applications",
  icons: `${basePath}/images/applications/immunostaining.jpg`,
  description:
    "Explore what you can image with openUC2 — from fluorescence imaging to histology, live-cell imaging, and beyond.",
};

const categories = [
  "Imaging Modalities",
  "Life Science Workflows",
  "Specialist Applications",
  "Learning & Community",
];

export default function ApplicationsPage() {
  return (
    <>
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Applications</span>
        </div>
      </div>

      <Section>
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Applications</h1>
          <p className="text-uc2-muted max-w-2xl mx-auto">
            Explore what you can image with openUC2 systems — from educational setups to advanced
            research applications.
          </p>
        </div>

        {categories.map((cat) => {
          const apps = applicationData.filter((a) => a.category === cat);
          if (apps.length === 0) return null;
          return (
            <div key={cat} className="mb-14">
              <ScrollReveal>
                <h2 className="text-xl font-bold mb-6">{cat}</h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {apps.map((app, i) => (
                  <ScrollReveal key={app.slug} delay={i * 80}>
                    <Link href={`/applications/${app.slug}`} className="group block">
                      <div className="bg-uc2-card border border-uc2-border rounded-xl overflow-hidden hover:border-uc2-blue/50 transition-colors h-full">
                        <div className={`aspect-[16/10] ${app.heroColor} overflow-hidden relative`}>
                          <img src={`${basePath}/images/applications/${app.imagesrc}`} className="w-full h-full object-cover" alt={app.title} />
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold mb-1 group-hover:text-uc2-blue transition-colors">
                            {app.title}
                          </h3>
                          <p className="text-sm text-uc2-muted">{app.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          );
        })}
      </Section>
    </>
  );
}
