import type { Metadata } from "next";
import { getApplicationBySlug } from "@/lib/applications";
import { ApplicationTemplate } from "@/components/applications/ApplicationTemplate";

const app = getApplicationBySlug("flim")!;

export const metadata: Metadata = {
  title: app.title,
  description: app.subtitle,
};

export default function FlimPage() {
  return <ApplicationTemplate app={app} />;
}
