import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
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

/**
 * Vault Terminal markdown renderer.
 * Converts simple markdown to JSX elements using the amber/gold/black design.
 * h1-h3 → Spectral (heading-text, hover amber)
 * p/code/pre/ul/li/bold/inline-code all in body text with terminal accents.
 * Code blocks get .glass-inset styling.
 */
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
          className="glass-inset overflow-x-auto my-6 p-5 text-sm font-[family-name:var(--font-mono)] leading-relaxed text-[var(--color-text-secondary)]"
        >
          {codeBlockLang && (
            <div className="text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-green-term)] mb-2 uppercase tracking-wider">
              // {codeBlockLang}
            </div>
          )}
          <code className="text-[var(--color-text-body)]">{codeBlockContent.replace(/\n$/, "")}</code>
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
        boldParts.push(<strong key={`b-${boldMatch.index}`} className="text-[var(--color-text-heading)] font-semibold">{boldMatch[1]}</strong>);
        lastBoldIdx = boldMatch.index + boldMatch[0].length;
      }
      if (lastBoldIdx < remaining.length) {
        boldParts.push(remaining.slice(lastBoldIdx));
      }

      // Links: [text](url)
      const boldResolved = boldParts.map((part, idx) => {
        if (typeof part !== "string") return part;
        const linkParts: (string | JSX.Element)[] = [];
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let linkMatch;
        let lastLinkIdx = 0;

        while ((linkMatch = linkRegex.exec(part as string)) !== null) {
          if (linkMatch.index > lastLinkIdx) {
            linkParts.push(part.slice(lastLinkIdx, linkMatch.index));
          }
          linkParts.push(
            <a key={`l-${idx}-${linkMatch.index}`} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-[var(--color-green-term)] underline underline-offset-2 hover:text-[var(--color-gold)] transition-colors duration-200">
              {linkMatch[1]}
            </a>
          );
          lastLinkIdx = linkMatch.index + linkMatch[0].length;
        }
        if (lastLinkIdx < part.length) {
          linkParts.push(part.slice(lastLinkIdx));
        }
        return linkParts.length === 1 ? linkParts[0] : linkParts.length > 1 ? <>{...linkParts}</> : part;
      });

      // Inline code: `text`
      const result = boldResolved.map((part, idx) => {
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
            <code key={`c-${idx}-${codeMatch.index}`} className="glass-legend text-sm font-[family-name:var(--font-mono)] text-[var(--color-green-term)]">
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

    // Headings — Spectral gold in both modes (via CSS variable)
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold mt-8 mb-3 text-[var(--color-gold)] font-[family-name:var(--font-display)] hover:text-[var(--color-gold-bright)] transition-colors duration-200">
          {renderInline(line.slice(4))}
        </h3>
      );
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold mt-10 mb-4 text-[var(--color-gold)] font-[family-name:var(--font-display)] hover:text-[var(--color-gold-bright)] transition-colors duration-200">
          {renderInline(line.slice(3))}
        </h2>
      );
      continue;
    }
    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={key++} className="text-3xl font-bold mt-10 mb-4 text-[var(--color-gold)] font-[family-name:var(--font-display)] hover:text-[var(--color-gold-bright)] transition-colors duration-200">
          {renderInline(line.slice(2))}
        </h1>
      );
      continue;
    }

    // Lists
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items: { text: string; index: number }[] = [{ text: trimmed.slice(2), index: i }];
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
        <ul key={key++} className="list-none pl-0 mb-5 space-y-1.5 font-[family-name:var(--font-mono)] leading-relaxed">
          {items.map((item) => (
            <li key={item.index} className="flex items-start gap-2 text-[var(--color-text-body)]">
              <span className="text-[var(--color-green-term)] shrink-0 mt-1">&gt;</span>
              <span>{renderInline(item.text)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered lists: 1. item
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      const items: { text: string; index: number }[] = [{ text: olMatch[2], index: i }];
      let j = i + 1;
      while (j < lines.length) {
        const nextTrimmed = lines[j].trim();
        const nextOlMatch = nextTrimmed.match(/^(\d+)\.\s+(.*)/);
        if (nextOlMatch) {
          items.push({ text: nextOlMatch[2], index: j });
          j++;
        } else if (nextTrimmed === "") {
          j++;
        } else {
          break;
        }
      }
      i = j - 1;
      elements.push(
        <ol key={key++} className="list-none pl-0 mb-5 space-y-1.5 font-[family-name:var(--font-mono)] leading-relaxed">
          {items.map((item) => (
            <li key={item.index} className="flex items-start gap-2 text-[var(--color-text-body)]">
              <span className="text-[var(--color-gold)] shrink-0 mt-0.5 font-semibold">{item.index + 1}.</span>
              <span>{renderInline(item.text)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Horizontal rule
    if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      elements.push(
        <hr key={key++} className="my-10 border-t border-[var(--color-amber-dim)]/30" />
      );
      continue;
    }

    // Image: ![alt](src)
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      elements.push(
        <figure key={key++} className="my-8">
          <img
            src={imgMatch[2]}
            alt={imgMatch[1]}
            className="w-full rounded-lg border border-[var(--color-amber-dim)]/20"
            loading="lazy"
          />
          {imgMatch[1] && (
            <figcaption className="mt-2 text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)] text-center">
              {imgMatch[1]}
            </figcaption>
          )}
        </figure>
      );
      continue;
    }

    // Regular paragraph — body text in mono
    elements.push(
      <p key={key++} className="text-base md:text-lg leading-relaxed mb-5 font-[family-name:var(--font-mono)] text-[var(--color-text-body)]">
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
          {/* Back link — green arrow */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 mb-8 cursor-pointer group"
          >
            <span className="text-[var(--color-green-term)] group-hover:-translate-x-1 transition-transform duration-200">&lt;-</span>
            Back to Blog
          </Link>

          {/* Tags as .glass-legend badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="glass-legend text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title — gold gradient-text */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-6">
            <span className="gradient-text">{post.title}</span>
          </h1>

          {/* Article JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.description,
                author: {
                  "@type": "Person",
                  name: "Bio Lumbantoruan",
                  url: "https://biotama.cv",
                },
                datePublished: post.date,
                dateModified: post.date,
                keywords: post.tags.join(", "),
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://biotama.cv/blog/${post.slug}`,
                },
                publisher: {
                  "@type": "Person",
                  name: "Bio Lumbantoruan",
                },
              }),
            }}
          />

          {/* Meta bar — date in amber dim mono */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] mb-10 pb-8 section-divider">
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-green-term)]">$</span>
              <span>author: Bio Lumbantoruan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--color-green-term)]">$</span>
              <span>date: {formatDate(post.date)}</span>
            </div>
          </div>

          {/* Content — Vault Terminal styled */}
          <div className="prose-content max-w-none">
            {renderMarkdown(post.content)}
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10">
              <p className="section-label mb-6">
                <span className="text-[var(--color-green-term)]">$</span> /related
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                    <div className="glass-card p-5 transition-all duration-300 cursor-pointer h-full hover:-translate-y-1">
                      <div className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-tertiary)] mb-2">
                        {formatDate(rp.date)}
                      </div>
                      <h3 className="font-semibold text-[var(--color-gold)] line-clamp-2 mb-2 font-[family-name:var(--font-display)] group-hover:text-[var(--color-gold-bright)] transition-colors duration-200">
                        {rp.title}
                      </h3>
                      <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-tertiary)] line-clamp-2">{rp.description}</p>
                      <div className="flex items-center gap-1 mt-3 text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span>&gt; Read</span>
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
