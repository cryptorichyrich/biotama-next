import { applications } from "@/data/applications";
import { ApplicationsDetail } from "./detail";

export function generateStaticParams() {
  return applications.map((app) => ({ slug: app.slug }));
}

export default function ApplicationPage({ params }: { params: { slug: string } }) {
  return <ApplicationsDetail slug={params.slug} />;
}
