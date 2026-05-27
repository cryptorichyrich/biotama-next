import { applications } from "@/data/applications";
import { TailoredResume } from "./resume-client";

export function generateStaticParams() {
  return applications.map((app) => ({ slug: app.slug }));
}

export default function TailoredResumePage({ params }: { params: { slug: string } }) {
  return <TailoredResume slug={params.slug} />;
}
