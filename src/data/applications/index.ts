import { exampleFinancialPlatform } from "./example-financial-platform";
import type { Application } from "./schema";

export type { Application };
export { exampleFinancialPlatform };

export const applications: Application[] = [exampleFinancialPlatform];

export function getApplicationBySlug(slug: string): Application | undefined {
  return applications.find((app) => app.slug === slug);
}
