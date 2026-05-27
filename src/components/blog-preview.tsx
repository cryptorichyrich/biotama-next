"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { getLatestPosts } from "@/data/blog-posts";
import { SectionHeading } from "@/components/section-heading";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const posts = getLatestPosts(6);

  return (
    <section
      id="blog"
      ref={ref}
      className="py-24 md:py-32 bg-white scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          label="Blog"
          title="Thoughts on engineering"
          description="Writing about fintech, architecture, and the craft of software."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <div className="w-full h-40 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-border select-none">
                      BL
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-secondary mb-3">
                    <Calendar size={12} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
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
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-blue-700 transition-colors duration-200 cursor-pointer"
          >
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
