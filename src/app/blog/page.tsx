import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI Generated Articles — Bio Lumbantoruan",
  description:
    "Curated, edited, published.",
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
              className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 mb-8 cursor-pointer group"
            >
              <span className="text-[var(--color-green-term)] group-hover:-translate-x-1 transition-transform duration-200">&lt;-</span>
              Back to Home
            </Link>
            <p className="section-label mb-4">
              <span className="text-[var(--color-green-term)]">$</span> cat ~/thoughts/*.md
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-6">
              <span className="gradient-text">AI Generated Articles</span>
            </h1>
            <p className="text-lg text-[var(--color-amber-dim)] max-w-2xl leading-relaxed font-[family-name:var(--font-mono)]">
              Curated, edited, published.
            </p>
            <div className="section-divider mt-8" />
          </div>

          {/* Blog Grid — glass-card */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article
                  className="glass-card p-6 h-full flex flex-col tilt-3d transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Date in amber dim mono */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)]">
                      {formatDate(post.date)}
                    </span>

                    {/* Tags as .glass-legend badges */}
                    <div className="flex gap-1.5 flex-wrap justify-end">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="glass-legend text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-green-term)]"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-text-muted)]">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title in gold Spectral, hover → bright */}
                  <h2 className="text-base font-[family-name:var(--font-display)] font-semibold text-[var(--color-gold)] mb-2 line-clamp-2 group-hover:text-[var(--color-gold-bright)] transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Description in body color */}
                  <p className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-body)] leading-relaxed flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Arrow indicator — green terminal style */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-[var(--color-green-term)]">&gt;</span> Read article <ArrowRight size={14} />
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
