import type { Metadata } from "next";
import { getApplicationBySlug } from "@/lib/applications";
import { ApplicationTemplate } from "@/components/applications/ApplicationTemplate";

const app = getApplicationBySlug("space")!;

export const metadata: Metadata = {
  title: app.title,
  description: app.subtitle,
};

export default function SpacePage() {
  return <ApplicationTemplate app={app} />;
}
