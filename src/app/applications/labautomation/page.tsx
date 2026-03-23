import type { Metadata } from "next";
import { getApplicationBySlug } from "@/lib/applications";
import { ApplicationTemplate } from "@/components/applications/ApplicationTemplate";

const app = getApplicationBySlug("labautomation")!;

export const metadata: Metadata = {
  title: app.title,
  description: app.subtitle,
};

export default function LabAutomationPage() {
  return <ApplicationTemplate app={app} />;
}
