import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const posts = getLatestPosts(6);

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> cat ~/thoughts/*.md | tail -6
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4 gradient-text">
        Thoughts on engineering
      </h2>

      <p className="text-[var(--color-amber-dim)] text-lg max-w-2xl mb-16 font-[family-name:var(--font-mono)]">
        Writing about fintech, architecture, and the craft of software.
      </p>

      {/* Grid of article cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="glass-card p-6 h-full flex flex-col tilt-3d transition-all duration-300 hover:-translate-y-1">
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

              {/* Title in amber Spectral, hover → gold */}
              <h3 className="text-base font-[family-name:var(--font-display)] font-semibold text-[var(--color-amber-text)] mb-2 line-clamp-2 group-hover:text-[var(--color-gold)] transition-colors duration-200">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-white)] leading-relaxed flex-1 line-clamp-3">
                {post.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-1 text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-[var(--color-green-term)]">&gt;</span> Read more <ArrowRight size={14} />
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-amber-text)] hover:text-[var(--color-amber-bright)] transition-colors duration-200 glass-card rounded-lg"
        >
          <span className="text-[var(--color-green-term)]">$</span>
          View All Posts
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
