import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import type { JSX } from "react";

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

/** Simple markdown-to-HTML converter (no external libraries) */
function renderMarkdown(markdown: string) {
  const lines = markdown.split("\n");
  const elements: JSX.Element[] = [];
  let inCodeBlock = false;
  let codeBlockContent = "";
  let codeBlockLang = "";
  let key = 0;

  const pushCodeBlock = () => {
    if (codeBlockContent.trim()) {
      elements.push(
        <pre
          key={key++}
          className="overflow-x-auto my-6 p-5 rounded-xl text-sm font-[family-name:var(--font-mono)] leading-relaxed"
          style={{ background: "var(--color-bg-tertiary)", border: "1px solid var(--color-border)" }}
        >
          <code>{codeBlockContent.replace(/\n$/, "")}</code>
        </pre>
      );
      codeBlockContent = "";
      codeBlockLang = "";
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks
    if (line.trimStart().startsWith("```")) {
      if (inCodeBlock) {
        pushCodeBlock();
        inCodeBlock = false;
        continue;
      } else {
        pushCodeBlock();
        inCodeBlock = true;
        codeBlockLang = line.trim().slice(3).trim();
        continue;
      }
    }

    if (inCodeBlock) {
      codeBlockContent += line + "\n";
      continue;
    }

    // Handle inline formatting within a line (bold, code)
    const renderInline = (text: string) => {
      const parts: (string | JSX.Element)[] = [];
      let remaining = text;

      // Bold: **text**
      const boldRegex = /\*\*(.+?)\*\*/g;
      let boldMatch;
      let lastBoldIdx = 0;
      const boldParts: (string | JSX.Element)[] = [];

      while ((boldMatch = boldRegex.exec(remaining)) !== null) {
        if (boldMatch.index > lastBoldIdx) {
          boldParts.push(remaining.slice(lastBoldIdx, boldMatch.index));
        }
        boldParts.push(<strong key={`b-${boldMatch.index}`} className="text-[var(--color-text-primary)] font-semibold">{boldMatch[1]}</strong>);
        lastBoldIdx = boldMatch.index + boldMatch[0].length;
      }
      if (lastBoldIdx < remaining.length) {
        boldParts.push(remaining.slice(lastBoldIdx));
      }

      // Inline code: `text`
      const result = boldParts.map((part, idx) => {
        if (typeof part !== "string") return part;
        const codeParts: (string | JSX.Element)[] = [];
        const codeRegex = /`([^`]+)`/g;
        let codeMatch;
        let lastIdx = 0;

        while ((codeMatch = codeRegex.exec(part)) !== null) {
          if (codeMatch.index > lastIdx) {
            codeParts.push(part.slice(lastIdx, codeMatch.index));
          }
          codeParts.push(
            <code key={`c-${idx}-${codeMatch.index}`} className="px-1.5 py-0.5 rounded text-sm font-[family-name:var(--font-mono)]"
              style={{ background: "var(--color-accent-subtle)", color: "var(--color-indigo-light)" }}
            >
              {codeMatch[1]}
            </code>
          );
          lastIdx = codeMatch.index + codeMatch[0].length;
        }
        if (lastIdx < part.length) {
          codeParts.push(part.slice(lastIdx));
        }
        return codeParts.length === 1 ? codeParts[0] : <>{...codeParts}</>;
      });

      return result.length === 1 ? result[0] : <>{...result}</>;
    };

    const trimmed = line.trim();

    // Skip empty lines between blocks
    if (trimmed === "") {
      elements.push(<br key={key++} />);
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold mt-8 mb-3 text-[var(--color-text-primary)] font-[family-name:var(--font-display)]">
          {renderInline(line.slice(4))}
        </h3>
      );
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-10 mb-4 text-[var(--color-text-primary)] font-[family-name:var(--font-display)]">
          {renderInline(line.slice(3))}
        </h2>
      );
      continue;
    }
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="text-3xl font-bold mt-10 mb-4 text-[var(--color-text-primary)] font-[family-name:var(--font-display)]">
          {renderInline(line.slice(2))}
        </h1>
      );
      continue;
    }

    // Lists
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items: { text: string; index: number }[] = [{ text: trimmed.slice(2), index: i }];
      // Collect subsequent list items
      let j = i + 1;
      while (j < lines.length) {
        const nextTrimmed = lines[j].trim();
        if (nextTrimmed.startsWith("- ") || nextTrimmed.startsWith("* ")) {
          items.push({ text: nextTrimmed.slice(2), index: j });
          j++;
        } else if (nextTrimmed === "") {
          j++;
        } else {
          break;
        }
      }
      i = j - 1;
      elements.push(
        <ul key={key++} className="list-disc pl-6 mb-5 space-y-1.5 text-[var(--color-text-secondary)] leading-relaxed">
          {items.map((item) => (
            <li key={item.index}>{renderInline(item.text)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="text-base md:text-lg leading-relaxed mb-5 text-[var(--color-text-secondary)]">
        {renderInline(line)}
      </p>
    );
  }

  // Flush any remaining code block
  if (inCodeBlock) {
    pushCodeBlock();
  }

  return elements;
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
        <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 mb-8 cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-md font-[family-name:var(--font-mono)]"
                style={{
                  background: "var(--color-accent-subtle)",
                  color: "var(--color-indigo-light)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-6">
            <span className="gradient-text">{post.title}</span>
          </h1>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-tertiary)] mb-10 pb-8" style={{ borderBottom: "1px solid var(--color-border)" }}>
            <div className="flex items-center gap-2">
              <User size={14} />
              <span className="font-[family-name:var(--font-mono)]">Bio Lumbantoruan</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span className="font-[family-name:var(--font-mono)]">{formatDate(post.date)}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose-content max-w-none">
            {renderMarkdown(post.content)}
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10" style={{ borderTop: "1px solid var(--color-border)" }}>
              <p className="section-label mb-6">/related</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                    <div className="card p-5 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full">
                      <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] mb-2">
                        <Calendar size={12} />
                        <span className="font-[family-name:var(--font-mono)]">{formatDate(rp.date)}</span>
                      </div>
                      <h3 className="font-semibold text-[var(--color-text-primary)] line-clamp-2 mb-2 font-[family-name:var(--font-display)] group-hover:text-[var(--color-accent-hover)] transition-colors duration-200">
                        {rp.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-tertiary)] line-clamp-2">{rp.description}</p>
                      <div className="flex items-center gap-1 mt-3 text-xs text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <span>Read</span>
                        <ArrowRight size={12} />
                      </div>
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
