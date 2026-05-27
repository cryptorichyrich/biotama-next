import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Bio Lumbantoruan`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-[800px] mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors duration-200 mb-8 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-muted text-accent text-xs font-semibold rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-secondary mb-10 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User size={14} />
              <span>Bio Lumbantoruan</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-secondary prose-strong:text-foreground prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-primary prose-pre:text-zinc-200 prose-li:text-secondary prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("# ")) {
                return (
                  <h1 key={i} className="text-3xl font-extrabold mt-10 mb-4">
                    {line.slice(2)}
                  </h1>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-3">
                    {line.slice(3)}
                  </h2>
                );
              }
              if (line.startsWith("```")) {
                const isOpening = !line.startsWith("```", 3);
                return (
                  <pre key={i} className="bg-primary text-zinc-200 p-4 rounded-xl overflow-x-auto my-4 text-sm font-mono">
                    <code>
                      {/* Will be followed by content lines until closing ``` */}
                    </code>
                  </pre>
                );
              }
              if (line.trim() === "") {
                return <br key={i} />;
              }
              return (
                <p key={i} className="text-lg leading-relaxed mb-4 text-secondary">
                  {line}
                </p>
              );
            })}
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-border">
              <h2 className="text-2xl font-extrabold text-foreground mb-6">
                Related Posts
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                    <div className="bg-card border border-border rounded-xl p-5 hover:border-accent hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                      <div className="flex items-center gap-2 text-xs text-secondary mb-2">
                        <Calendar size={12} />
                        <span>{formatDate(rp.date)}</span>
                      </div>
                      <h3 className="font-semibold text-foreground line-clamp-2">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
