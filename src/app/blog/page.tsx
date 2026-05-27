import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Bio Lumbantoruan",
  description:
    "Thoughts on fintech, architecture, and the craft of software engineering.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 mb-8 cursor-pointer group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Link>
            <p className="section-label mb-4">/writing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-6">
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
              Thoughts on fintech, architecture, and the craft of software
              engineering.
            </p>
            <div className="section-divider mt-8" />
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article
                  className="card h-full flex flex-col p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
                >
                  {/* Card header */}
                  <div className="w-full h-40 rounded-lg mb-5 flex items-center justify-center relative overflow-hidden card"
                    style={{ background: "var(--color-bg-tertiary)", border: "none" }}
                  >
                    <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[var(--color-indigo-bright)] to-[var(--color-teal)]" />
                    <span className="text-5xl font-bold font-[family-name:var(--font-display)] text-[var(--color-text-muted)] select-none gradient-text opacity-50">
                      BL
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] mb-3">
                    <Calendar size={12} />
                    <span className="font-[family-name:var(--font-mono)]">{formatDate(post.date)}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 line-clamp-2 font-[family-name:var(--font-display)] group-hover:text-[var(--color-accent-hover)] transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[var(--color-border)]">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md font-[family-name:var(--font-mono)]"
                        style={{
                          background: "var(--color-accent-subtle)",
                          color: "var(--color-indigo-light)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-1 mt-4 text-xs text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <span className="font-medium">Read article</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
