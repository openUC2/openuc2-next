import type { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid, Settings, Download } from "lucide-react";
import { Section, CTABanner, FeatureCard } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "Configurator — Design Your Microscope",
  description:
    "Drag-and-drop cube configurator: design your optical setup, preview the beam path, and export a bill of materials.",
};

const steps = [
  { icon: <LayoutGrid className="w-5 h-5" />, title: "Choose components", description: "Browse the cube library. Drag lenses, mirrors, LEDs, cameras, and filter cubes onto the grid." },
  { icon: <Settings className="w-5 h-5" />, title: "Configure & preview", description: "Adjust parameters, see the resulting beam path, and verify alignment. The tool warns you about conflicts." },
  { icon: <Download className="w-5 h-5" />, title: "Export & build", description: "Export a bill of materials, STL files for 3D printing, and a step-by-step assembly guide." },
];

// store the urls for the Quick templates images in an array and map over them to render the cards, instead of hardcoding each one
const quickTemplates = [
  { title: "Brightfield microscope", imgSrc: "/openuc2-next/images/templates/optikit-assembly-screenshot_brightfield.png", urlConfigurator: "https://youseetoo.github.io/configurator?data=eyJtIjpbeyJpIjoibWlycm9yLTF4MSIsInAiOls1LDcsMF0sInIiOjB9LHsiaSI6ImN1YmUtMXgxIiwicCI6WzQsMiwwXSwiciI6MH0seyJpIjoiY3ViZS0xeDEiLCJwIjpbNSw2LDBdLCJyIjowfSx7ImkiOiJvYmplY3RpdmUtMjB4LTF4MSIsInAiOls1LDUsMF0sInIiOjB9LHsiaSI6ImN1YmUtMXgxIiwicCI6WzUsNSwwXSwiciI6MH0seyJpIjoieHl6LXN0YWdlLWNvbXBhY3QtMXgxIiwicCI6WzMsNCwwXSwiciI6MH0seyJpIjoicmFzcGJlcnJ5cGktY29udHJvbGxlci0xeDEiLCJwIjpbMyw2LDBdLCJyIjowfSx7ImkiOiJjYW1lcmEtdXNiIiwicCI6WzMsNywwXSwiciI6MjcwfSx7ImkiOiJjdWJlLWxlZG1hdHJpeC0xeDEiLCJwIjpbNSwyLDBdLCJyIjowfSx7ImkiOiJjdWJlLTF4MSIsInAiOlszLDMsMF0sInIiOjB9LHsiaSI6ImN1YmUtMXgxIiwicCI6WzMsMiwwXSwiciI6MH0seyJpIjoiY3ViZS0xeDEiLCJwIjpbMyw0LDBdLCJyIjowfV0sImEiOltdLCJtZXRhIjp7Im5hbWUiOiJVcHJpZ2h0IE1pY3Jvc2NvcGUgRW5naW5lIiwiYXV0aG9yIjoiQmVuZWRpY3QiLCJnaXRodWJBY2NvdW50IjoiIiwiZGVzY3JpcHRpb24iOiJHZW5lcmF0ZWQgYnkgRlJBTUUgV2l6YXJkIiwiY2F0ZWdvcnkiOiJNaWNyb3Njb3B5Iiwic2NyZWVuc2hvdCI6IiIsInVjMl92ZXJpZmllZCI6ZmFsc2UsInZlcnNpb24iOiIxLjAuMCIsImNyZWF0ZWRBdCI6IjIwMjYtMDMtMTVUMTg6NTU6MzEuNjc4WiIsImNvbGxlY3Rpb24iOlsiTWljcm9zY29weSIsIkZSQU1FIl0sIm5vdGlmaWNhdGlvbiI6IiJ9fQ==" },
  { title: "Fluorescence microscope", imgSrc: "/openuc2-next/images/templates/optikit-assembly-screenshot_fluorescence.png", urlConfigurator: "https://youseetoo.github.io/configurator?data=eyJtIjpbeyJpIjoieHl6LXN0YWdlLWNvbXBhY3QtbW90b3Jpc2VkLTF4MSIsInAiOlsxLDcsMF0sInIiOjB9LHsiaSI6ImN1c3RvbS0xNzYxODE5NTM5NDk2IiwicCI6WzEsNSwwXSwiciI6MH0seyJpIjoib2JqZWN0aXZlLTEweC0xeDEiLCJwIjpbMyw0LDBdLCJyIjoxODB9LHsiaSI6InN0YWdlLXoiLCJwIjpbMiwyLDBdLCJyIjowfSx7ImkiOiJmaWx0ZXItZGljaHJvaWMiLCJwIjpbMywyLDBdLCJyIjoxODB9LHsiaSI6ImxlZC00NzBubSIsInAiOls2LDIsMF0sInIiOjB9LHsiaSI6ImxlbnMtcG9zLTF4MSIsInAiOls1LDIsMF0sInIiOjE4MH0seyJpIjoibGVucy1wb3MtMXgxIiwicCI6WzQsMiwwXSwiciI6MH0seyJpIjoidHViZS1sZW5zLTF4MSIsInAiOls0LDEsMF0sInIiOjB9LHsiaSI6Im1pcnJvci0xeDEiLCJwIjpbMywxLDBdLCJyIjoxODB9LHsiaSI6ImNhbWVyYS11c2ItZGFoZW5nIiwicCI6WzYsMSwwXSwiciI6OTB9LHsiaSI6ImVsZWN0cm9uaWNzLXYzIiwicCI6WzcsNiwwXSwiciI6MH0seyJpIjoiZmx1b3Jlc2NlbnQtc2FtcGxlLTF4MSIsInAiOlszLDUsMF0sInIiOjkwfSx7ImkiOiJjdWJlLTF4MSIsInAiOls1LDMsMF0sInIiOjB9LHsiaSI6ImN1YmUtMXgxIiwicCI6WzQsMywwXSwiciI6MH0seyJpIjoiY3VzdG9tLTE3NzM4MjU2ODI5NTAiLCJwIjpbMiw1LDBdLCJyIjowfV0sImEiOltdLCJtZXRhIjp7Im5hbWUiOiJVcHJpZ2h0IE1pY3Jvc2NvcGUgRW5naW5lIiwiYXV0aG9yIjoiQmVuZWRpY3QiLCJnaXRodWJBY2NvdW50IjoiIiwiZGVzY3JpcHRpb24iOiJHZW5lcmF0ZWQgYnkgRlJBTUUgV2l6YXJkIiwiY2F0ZWdvcnkiOiJNaWNyb3Njb3B5Iiwic2NyZWVuc2hvdCI6IiIsInVjMl92ZXJpZmllZCI6ZmFsc2UsInZlcnNpb24iOiIxLjAuMCIsImNyZWF0ZWRBdCI6IjIwMjYtMDMtMTVUMTg6NTU6MzEuNjc4WiIsImNvbGxlY3Rpb24iOlsiTWljcm9zY29weSIsIkZSQU1FIl0sIm5vdGlmaWNhdGlvbiI6IiJ9fQ==" },
  { title: "Light-sheet (SPIM)", imgSrc: "/openuc2-next/images/templates/optikit-assembly-screenshot_lightsheet.png", urlConfigurator: "https://youseetoo.github.io/configurator?data=eyJtIjpbeyJpIjoibWlycm9yLTF4MSIsInAiOls3LDYsMF0sInIiOjB9LHsiaSI6Inh5ei1zdGFnZS1jb21wYWN0LW1vdG9yaXNlZC0xeDEiLCJwIjpbMyw2LDBdLCJyIjowfSx7ImkiOiJvYmplY3RpdmUtMjB4LTF4MSIsInAiOls1LDQsMF0sInIiOjE4MH0seyJpIjoiMTJWIHBvd2VyIHN1cHBseSIsInAiOls1LDksMF0sInIiOjB9LHsiaSI6InVjMi1jb250cm9sbGVyIiwicCI6WzcsOCwwXSwiciI6MH0seyJpIjoiY3lsaW5kcmljYWwtbGVucy0xeDEiLCJwIjpbNyw1LDBdLCJyIjo5MH0seyJpIjoibGFzZXItZmNzbS0xeDEiLCJwIjpbNywwLDBdLCJyIjoyNzB9LHsiaSI6ImNhbWVyYS11c2IiLCJwIjpbNSwxLDBdLCJyIjowfSx7ImkiOiJlbGVjdHJvbmljcy12MyIsInAiOlszLDEsMF0sInIiOjB9LHsiaSI6InJhc3BiZXJyeXBpLWNvbnRyb2xsZXItMXgxIiwicCI6WzMsMywwXSwiciI6MH0seyJpIjoiY3ViZS0xeDEiLCJwIjpbNSw1LDBdLCJyIjowfSx7ImkiOiJmaWx0ZXItYmFuZHBhc3MiLCJwIjpbNSwzLDBdLCJyIjo5MH0seyJpIjoibGVucy1wb3MtMXgxIiwicCI6WzcsNCwwXSwiciI6OTB9LHsiaSI6InN0YWdlLXotbW90b3JpemVkIiwicCI6WzUsNCwwXSwiciI6MTgwfSx7ImkiOiJvYmplY3RpdmUtaG9sZGVyLXJtcy0xeDEiLCJwIjpbNiw2LDBdLCJyIjoyNzB9LHsiaSI6Im9iamVjdGl2ZS00eC0xeDEiLCJwIjpbNiw2LDBdLCJyIjoyNzB9LHsiaSI6ImFxdWFyaXVtLTF4MSIsInAiOls1LDYsMF0sInIiOjB9XSwiYSI6W3sidCI6InRleHQiLCJwIjpbeyJ4IjozOC45MDcwMTkzMDIyOTI0MSwieSI6MTYuMzQ2ODA2NjI0ODI3OTYzfV0sIngiOiJMaWdodC1zaGVldCBtaWNyb3Njb3BlIn1dLCJtZXRhIjp7Im5hbWUiOiJVcHJpZ2h0IE1pY3Jvc2NvcGUgRW5naW5lIiwiYXV0aG9yIjoiQmVuZWRpY3QiLCJnaXRodWJBY2NvdW50IjoiIiwiZGVzY3JpcHRpb24iOiJHZW5lcmF0ZWQgYnkgRlJBTUUgV2l6YXJkIiwiY2F0ZWdvcnkiOiJNaWNyb3Njb3B5Iiwic2NyZWVuc2hvdCI6IiIsInVjMl92ZXJpZmllZCI6ZmFsc2UsInZlcnNpb24iOiIxLjAuMCIsImNyZWF0ZWRBdCI6IjIwMjYtMDMtMTVUMTg6NTU6MzEuNjc4WiIsImNvbGxlY3Rpb24iOlsiTWljcm9zY29weSIsIkZSQU1FIl0sIm5vdGlmaWNhdGlvbiI6IiJ9fQ==" },
  { title: "FRAME Microscope", imgSrc: "/openuc2-next/images/templates/optikit-assembly-screenshot_frame.png", urlConfigurator: "https://youseetoo.github.io/configurator?data=eyJtIjpbeyJpIjoiZnJhbWUtYm9keSIsInAiOlswLDAsMF0sInIiOjB9LHsiaSI6Im1pcnJvci0xeDEiLCJwIjpbNSw3LDBdLCJyIjo5MH0seyJpIjoiY2FtZXJhLXVzYiIsInAiOls3LDcsMF0sInIiOjkwfSx7ImkiOiJmaWx0ZXItZGljaHJvaWMiLCJwIjpbNSw2LDBdLCJyIjoxODB9LHsiaSI6ImN1YmUtMXgxIiwicCI6WzMsMCwwXSwiciI6MH0seyJpIjoiY3ViZS1yYXNwaWNhbS0yeDEiLCJwIjpbNCwwLDBdLCJyIjowfSx7ImkiOiJjdWJlLWxlZG1hdHJpeC0xeDEiLCJwIjpbNSwwLDBdLCJyIjowfSx7ImkiOiJjdWJlLTF4MSIsInAiOls3LDYsMF0sInIiOjB9LHsiaSI6ImVsZWN0cm9uaWNzLXYzIiwicCI6WzAsNiwwXSwiciI6MH0seyJpIjoicmFzcGJlcnJ5cGktY29udHJvbGxlci0xeDEiLCJwIjpbLTIsNiwwXSwiciI6MH0seyJpIjoidWMyLWNvbnRyb2xsZXIiLCJwIjpbLTMsMywwXSwiciI6MH0seyJpIjoiMTJWIHBvd2VyIHN1cHBseSIsInAiOlstMiw1LDBdLCJyIjowfSx7ImkiOiJjdWJlLTF4MSIsInAiOls2LDcsMF0sInIiOjB9LHsiaSI6ImxlbnMtcG9zLTF4MSIsInAiOls2LDYsMF0sInIiOjB9LHsiaSI6ImxlbnMtcG9zLTF4MSIsInAiOls3LDYsMF0sInIiOjB9LHsiaSI6ImF1dG9mb2N1cy0zeDEiLCJwIjpbNyw1LDBdLCJyIjowfSx7ImkiOiJsYXNlci1mY3NtLTF4MSIsInAiOls3LDYsMF0sInIiOjB9LHsiaSI6ImxlbnMtbmVnLTF4MSIsInAiOls2LDUsMF0sInIiOjB9LHsiaSI6ImZpbHRlci1kaWNocm9pYyIsInAiOls1LDUsMF0sInIiOjE4MH0seyJpIjoib2JqZWN0aXZlLTEweC0xeDEiLCJwIjpbNSw0LDBdLCJyIjowfV0sImEiOltdLCJtZXRhIjp7Im5hbWUiOiJVcHJpZ2h0IE1pY3Jvc2NvcGUgRW5naW5lIiwiYXV0aG9yIjoiQmVuZWRpY3QiLCJnaXRodWJBY2NvdW50IjoiIiwiZGVzY3JpcHRpb24iOiJHZW5lcmF0ZWQgYnkgRlJBTUUgV2l6YXJkIiwiY2F0ZWdvcnkiOiJNaWNyb3Njb3B5Iiwic2NyZWVuc2hvdCI6IiIsInVjMl92ZXJpZmllZCI6ZmFsc2UsInZlcnNpb24iOiIxLjAuMCIsImNyZWF0ZWRBdCI6IjIwMjYtMDMtMTVUMTg6NTU6MzEuNjc4WiIsImNvbGxlY3Rpb24iOlsiTWljcm9zY29weSIsIkZSQU1FIl0sIm5vdGlmaWNhdGlvbiI6IiJ9fQ==" },
];


export default function ConfiguratorPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="pt-20 bg-white border-b border-uc2-border">
        <div className="max-w-[1140px] mx-auto px-6 py-3 text-sm text-uc2-muted">
          <Link href="/" className="hover:text-uc2-blue">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-uc2-heading">Configurator</span>
        </div>
      </div>

      {/* Hero */}
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Configure. Simulate. Build.</h1>
          <p className="text-uc2-muted max-w-2xl mx-auto">
            Design a custom optical system, validate it with ray tracing, and export a complete
            build package — before ordering a single component.
            Open it and get starting: <a href="https://youseetoo.github.io/configurator" className="text-uc2-blue hover:underline ml-1">openUC2 Configurator</a>
          </p>
        </div>

        

        <ScrollReveal>
          <img src="/openuc2-next/images/configurator.png" alt="Screenshot of the configurator interface showing a drag-and-drop grid with cube modules and a beam path preview" className="rounded-lg border border-uc2-border" />
        </ScrollReveal>

        {/*Button to Configurator*/}
        <div className="text-center mt-8">
          <a href="https://youseetoo.github.io/configurator" target="_blank" rel="noopener noreferrer" className="inline-block bg-uc2-blue text-white px-6 py-3 rounded-lg hover:bg-uc2-blue-dark transition-colors">
            Open the Configurator
          </a>
        </div>
      </Section>

      {/* Steps */}
      <Section alt>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How it works</h2>
            <p className="text-uc2-muted">Three steps from idea to instrument</p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <FeatureCard icon={s.icon} title={`${i + 1}. ${s.title}`} description={s.description} />
            </ScrollReveal>
          ))}
        </div>

        {/* R&D callout */}
        <ScrollReveal>
          <div className="mt-12 bg-uc2-blue/10 border border-uc2-blue/30 rounded-xl p-8 text-center">
            <h3 className="text-lg font-semibold mb-2">For R&amp;D teams</h3>
            <p className="text-uc2-muted mb-4">
              Submit your optical challenge and we&apos;ll deliver a validated configuration with
              ray-tracing results within 48 hours.
            </p>
            <Link
              href="/contact?subject=R%26D+configuration+request"
              className="inline-block px-6 py-3 bg-uc2-blue text-white font-semibold rounded-lg hover:brightness-110 transition-all"
            >
              Contact us →
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* Quick templates */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Quick templates</h2>
            <p className="text-uc2-muted">Start from a pre-built configuration and customize</p>
          </div>
        </ScrollReveal>
        {/* add a href if clicked */} 
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickTemplates.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 80}>
              <div className="bg-uc2-card border border-uc2-border rounded-xl p-6 text-center hover:border-uc2-blue/50 transition-colors cursor-pointer">
                <div className="aspect-square bg-uc2-surface-alt rounded-lg mb-4 flex items-center justify-center">
                  <a href={t.urlConfigurator} target="_blank" rel="noopener noreferrer">
                    <img src={t.imgSrc} alt={t.title} className="max-w-full max-h-full" />
                  </a>
                </div>
                <h4 className="text-sm font-semibold">{t.title}</h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section alt>
        <CTABanner
          title="Need a custom configuration?"
          description="Our team can design a configuration for your specific imaging needs. We'll provide a complete bill of materials and assembly support."
          primaryLabel="Contact us"
          primaryHref="/contact?subject=Custom+configuration"
          secondaryLabel="Browse the Shop"
          secondaryHref="https://shop.openuc2.com/"
        />
      </Section>
    </>
  );
}
