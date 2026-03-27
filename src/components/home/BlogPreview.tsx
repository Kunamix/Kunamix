// components/home/BlogPreview.tsx
// Replace static POSTS with: import blogData from "@/constants/blog.json"

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  author: string;
  publishedAt: string;
  gradient: "node" | "react" | "mvp";
}

const POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "nodejs-development-services",
    title:
      "Node.js Development Services: What You Get, What It Costs, and How to Choose the Right Partner",
    category: "Tech Stack",
    readTime: "7 min read",
    author: "Kunal Kumar",
    publishedAt: "2026-03-19",
    gradient: "node",
  },
  {
    id: "2",
    slug: "react-development-company-india",
    title:
      "How to Choose the Right React Development Company in India (2026 Guide)",
    category: "Tech Stack",
    readTime: "7 min read",
    author: "Kunal Kumar",
    publishedAt: "2026-03-16",
    gradient: "react",
  },
  {
    id: "3",
    slug: "mvp-development-company",
    title: "How to Choose the Right MVP Development Company (2026 Guide)",
    category: "Startup Guide",
    readTime: "6 min read",
    author: "Kunal Kumar",
    publishedAt: "2026-02-28",
    gradient: "mvp",
  },
];

const GRADIENTS = {
  node: "linear-gradient(135deg, #0A1628 0%, #1a3050 50%, #0A2040 100%)",
  react: "linear-gradient(135deg, #0D1F3C 0%, #162D52 50%, #0A1A30 100%)",
  mvp: "linear-gradient(135deg, #111827 0%, #1F2A3C 50%, #0A1020 100%)",
};

const TechIcon = ({ type }: { type: BlogPost["gradient"] }) => {
  if (type === "node")
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
          stroke="#4ade80"
          strokeWidth="1.5"
        />
        <path d="M2 7l10 5 10-5M12 12v10" stroke="#4ade80" strokeWidth="1.5" />
      </svg>
    );
  if (type === "react")
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="2.5" fill="#61dafb" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.5"
          stroke="#61dafb"
          strokeWidth="1.2"
          transform="rotate(0 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.5"
          stroke="#61dafb"
          strokeWidth="1.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.5"
          stroke="#61dafb"
          strokeWidth="1.2"
          transform="rotate(-60 12 12)"
        />
      </svg>
    );
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2l2.4 7.2H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4 2.4-7.3L2 9.2h7.6L12 2z"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BlogPreview = () => (
  <section
    className="px-4 xs:px-5 sm:px-6 md:px-5 py-20 md:py-24 max-w-[1280px] mx-auto"
    id="blog"
  >
    {/* Header */}
    <div className="flex items-end justify-between gap-6 mb-8 md:mb-10 flex-wrap">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label">
          <span className="section-label-line" />
          <span className="section-label-tag">Writing</span>
        </div>
        <h2
          className="font-display font-bold leading-[1.08] tracking-[-0.025em]
                     text-foreground max-w-[560px]
                     text-[clamp(1.875rem,3.5vw,2.875rem)]"
        >
          Latest from
          <br />
          <em
            className="font-light text-muted-foreground"
            style={{ fontStyle: "italic" }}
          >
            the blog
          </em>
        </h2>
      </motion.div>

      <Link to="/blog">
        <Button variant="outline" className="border-border gap-2 shrink-0 cursor-pointer">
          All Articles
          <ArrowRight size={12} />
        </Button>
      </Link>
    </div>

    {/* Cards grid:
        320px → 1 col
        640px → stacked (1 col)
        768px → 3 col
    */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
      {POSTS.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
        >
          <Link to={`/blog/${post.slug}`}>
            <article
              className="group bg-card rounded-xl border border-border overflow-hidden
                         flex flex-col cursor-pointer
                         hover:border-primary/30 hover:shadow-[0_4px_24px_rgba(15,14,13,0.08)]
                         transition-all duration-200"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Cover image / gradient */}
              <div
                className="relative h-[168px] overflow-hidden shrink-0"
                style={{ background: GRADIENTS[post.gradient] }}
              >
                <span
                  className="absolute top-[10px] left-[10px] font-mono text-[0.5875rem]
                             font-medium text-primary tracking-[0.08em] uppercase
                             bg-[rgba(245,242,236,.92)] backdrop-blur-sm
                             border border-primary/25 px-[0.625rem] py-[0.25rem] rounded-full"
                >
                  {post.category}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-xl bg-white/8 border border-white/10
                               flex items-center justify-center"
                  >
                    <TechIcon type={post.gradient} />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-5 py-5">
                <div
                  className="flex items-center gap-2 font-mono text-[0.5875rem]
                             text-muted-foreground mb-3"
                >
                  <span>{post.readTime}</span>
                  <span className="w-[2px] h-[2px] rounded-full bg-muted-foreground" />
                  <span>{post.category}</span>
                </div>

                <h3
                  className="font-display text-[0.9875rem] font-semibold leading-[1.45]
                             tracking-[-0.01em] text-foreground flex-1 mb-4
                             group-hover:text-primary transition-colors duration-150 line-clamp-3"
                  itemProp="headline"
                >
                  {post.title}
                </h3>

                <div
                  className="flex items-center justify-between pt-[0.875rem]
                             border-t border-border"
                >
                  <div className="flex items-center gap-2 text-[0.75rem] text-muted-foreground">
                    <div
                      className="w-[22px] h-[22px] rounded-full bg-primary
                                 flex items-center justify-center text-white
                                 font-mono text-[0.5rem] font-bold shrink-0"
                      aria-hidden="true"
                    >
                      KK
                    </div>
                    <span itemProp="author">{post.author}</span>
                  </div>
                  <time
                    dateTime={post.publishedAt}
                    itemProp="datePublished"
                    className="font-mono text-[0.5875rem] text-muted-foreground"
                  >
                    {new Date(post.publishedAt).toLocaleDateString("en-IN")}
                  </time>
                </div>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default BlogPreview;
