import { blogPosts } from "../data/blog-posts";
import { servicePages, variantMeta } from "../data/service-pages";
import { works } from "../data/works";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://biotama.cv";

  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/mallops`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/dharmakarsa/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${siteUrl}/works/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: `${siteUrl}/layanan/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
  ];

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceEntries = servicePages.flatMap((service) =>
    variantMeta.map((variant) => ({
      url: `${siteUrl}/layanan/${service.slug}/${variant.id}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: variant.id === "v1" ? 0.85 : 0.75,
    })),
  );

  const workEntries = works.map((work) => ({
    url: `${siteUrl}/works/${work.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...blogEntries, ...serviceEntries, ...workEntries];
}
