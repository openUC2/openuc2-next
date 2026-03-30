import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { basePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: {
    default: "openUC2 — Modular Microscopy Platform",
    template: "%s | openUC2",
  },
  description:
    "Open-source modular microscopy: from educational kits to fully automated research microscopes. One platform, infinite configurations.",
  metadataBase: new URL("https://openuc2.com"),
};

const fontFaceCSS = `
@font-face {
  font-family: "Objectivity";
  src: url("${basePath}/objectivity/Objectivity-Regular.woff2") format("woff2");
  font-weight: 400; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Objectivity";
  src: url("${basePath}/objectivity/Objectivity-Medium.woff2") format("woff2");
  font-weight: 500; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Objectivity";
  src: url("${basePath}/objectivity/Objectivity-Bold.woff2") format("woff2");
  font-weight: 700; font-style: normal; font-display: swap;
}
@font-face {
  font-family: "Objectivity";
  src: url("${basePath}/objectivity/Objectivity-ExtraBold.woff2") format("woff2");
  font-weight: 800; font-style: normal; font-display: swap;
}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaceCSS }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <AnalyticsProvider />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
