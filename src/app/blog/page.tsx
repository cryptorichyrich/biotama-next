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
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors duration-200 mb-6 cursor-pointer"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-secondary max-w-2xl">
              Thoughts on fintech, architecture, and the craft of software
              engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="w-full h-40 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-border select-none">
                      BL
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-secondary mb-3">
                    <Calendar size={12} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h2 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-secondary leading-relaxed flex-1 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-muted text-secondary text-xs font-medium rounded-md cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
