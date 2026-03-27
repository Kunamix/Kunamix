import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface BlogFeaturedPostProps {
  blog: BlogPost;
}

const BlogFeaturedPost = ({ blog }: BlogFeaturedPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto"
    >
      <Link to={`/blog/${blog.slug}`} className="group block outline-none">
        <article className="relative grid grid-cols-1 lg:grid-cols-2 bg-card border border-border rounded-[18px] overflow-hidden group-hover:border-primary/40 group-focus-visible:border-primary/40 transition-colors duration-300">
          {/* Image */}
          <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-muted lg:min-h-[360px]">
            {blog.coverImage ? (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[0.8125rem] text-muted-foreground font-mono uppercase tracking-widest">
                  No Image
                </span>
              </div>
            )}
            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-[0.625rem] font-bold font-mono uppercase tracking-widest rounded-full shadow-brand">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-7 sm:p-10">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-[0.75rem] font-medium text-muted-foreground flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-[0.75rem] font-medium text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {blog.readTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-[1.5rem] sm:text-[1.875rem] leading-tight tracking-[-0.015em] text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
              {blog.title}
            </h2>

            {/* Description */}
            <p className="text-[0.9375rem] text-muted-foreground leading-[1.65] line-clamp-3 mb-7">
              {blog.metaDescription}
            </p>

            {/* Author + CTA row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground font-display font-bold text-[0.875rem] border border-border">
                  {blog.author.charAt(0)}
                </div>
                <span className="text-[0.8125rem] font-semibold text-foreground">
                  {blog.author}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-primary">
                Read Article
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default BlogFeaturedPost;
