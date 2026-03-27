import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface BlogGridProps {
  blogs: BlogPost[];
}

const BlogGrid = ({ blogs }: BlogGridProps) => {
  if (blogs.length === 0) {
    return (
      <div className="text-center py-20 px-4">
        <p className="text-[1.0625rem] text-muted-foreground mb-2">
          No articles found matching your criteria.
        </p>
        <p className="text-[0.875rem] text-muted-foreground/70">
          Try adjusting your search term or category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="pb-24 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Link
            to={`/blog/${blog.slug}`}
            key={blog.id}
            className="group h-full outline-none"
          >
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col h-full bg-card rounded-[14px] border border-border overflow-hidden group-hover:border-primary/40 group-focus-visible:border-primary/40 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-muted border-b border-border">
                {blog.coverImage ? (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[0.8125rem] text-muted-foreground font-mono uppercase tracking-widest">
                      No Image
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow min-w-0">
                {/* Meta Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1 text-[0.75rem] text-muted-foreground font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {blog.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[1.25rem] font-display font-bold text-foreground leading-tight tracking-[-0.01em] group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[0.9375rem] text-muted-foreground leading-[1.6] line-clamp-3 mb-6 flex-grow">
                  {blog.metaDescription}
                </p>

                {/* Footer Row */}
                <div className="flex items-center justify-between pt-5 border-t border-border mt-auto">
                  <div className="flex items-center gap-1.5 text-[0.75rem] text-muted-foreground font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    Read Post
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 text-center"
      >
        {blogs.length > 9 ? (
          <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-card hover:bg-muted border border-border text-[0.875rem] font-medium text-foreground transition-colors cursor-pointer">
            Load more articles
          </button>
        ) : null}
      </motion.div>
    </div>
  );
};

export default BlogGrid;
