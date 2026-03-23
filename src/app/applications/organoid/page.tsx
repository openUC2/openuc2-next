import type { Metadata } from "next";
import { getApplicationBySlug } from "@/lib/applications";
import { ApplicationTemplate } from "@/components/applications/ApplicationTemplate";

const app = getApplicationBySlug("organoid")!;

export const metadata: Metadata = {
  title: app.title,
  description: app.subtitle,
};

export default function OrganoidPage() {
  return <ApplicationTemplate app={app} />;
}
