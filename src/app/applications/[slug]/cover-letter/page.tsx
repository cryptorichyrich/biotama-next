import { applications } from "@/data/applications";
import { CoverLetter } from "./cover-letter-client";

export function generateStaticParams() {
  return applications.map((app) => ({ slug: app.slug }));
}

export default function CoverLetterPage({ params }: { params: { slug: string } }) {
  return <CoverLetter slug={params.slug} />;
}
