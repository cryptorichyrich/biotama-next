import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/applications", "/applications/*"],
    },
    sitemap: "https://biotama.cv/sitemap.xml",
  };
}
