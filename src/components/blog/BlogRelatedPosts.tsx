import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface BlogRelatedPostsProps {
  currentBlog: BlogPost;
  allBlogs: BlogPost[];
}

const BlogRelatedPosts = ({ currentBlog, allBlogs }: BlogRelatedPostsProps) => {
  // Find posts in the same category, excluding current
  const related = allBlogs
    .filter(
      (b) =>
        b.id !== currentBlog.id &&
        (b.category === currentBlog.category ||
          b.tags.some((t) => currentBlog.tags.includes(t))),
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-12 md:py-16 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[0.625rem] font-mono font-bold text-primary uppercase tracking-[0.12em]">
            Keep Reading
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-card border border-border rounded-[12px] overflow-hidden hover:border-primary/40 transition-colors duration-300"
              >
                {/* Image */}
                {post.coverImage && (
                  <div className="aspect-[16/9] overflow-hidden bg-muted border-b border-border">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <span className="font-mono text-[0.5625rem] text-primary tracking-[0.1em] uppercase mb-2 block">
                    {post.category}
                  </span>
                  <h4 className="text-[0.9375rem] font-display font-bold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200 mb-3 flex-grow">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className="flex items-center gap-1 text-[0.75rem] text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-[0.75rem] font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      Read
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogRelatedPosts;
