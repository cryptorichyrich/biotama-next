import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLatestPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const posts = getLatestPosts(6);

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        /<span className="text-[var(--color-mist)]">blog</span>
      </p>

      <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-4">
        Thoughts on <span className="gradient-text">engineering</span>
      </h2>

      <p className="text-[var(--color-mist)] text-lg max-w-2xl mb-16">
        Writing about fintech, architecture, and the craft of software.
      </p>

      {/* Grid of article cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="glass rounded-xl p-6 card h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
              {/* Date and tags row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-[var(--color-cool-gray)]">
                  {formatDate(post.date)}
                </span>
                <div className="flex gap-1.5 flex-wrap justify-end">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full border border-[var(--color-border)] text-[var(--color-cool-gray)]"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono font-medium text-[var(--color-cool-gray)]">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-display font-semibold text-[var(--color-ice)] mb-2 line-clamp-2 group-hover:text-[var(--color-indigo-light)] transition-colors duration-200">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-mist)] leading-relaxed flex-1 line-clamp-3">
                {post.description}
              </p>

              {/* Spacer + arrow indicator */}
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[var(--color-indigo-bright)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read more <ArrowRight size={14} />
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 glass card text-sm font-medium text-[var(--color-indigo-bright)] hover:text-[var(--color-indigo-light)] transition-colors duration-200 rounded-lg"
        >
          View All Posts
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
