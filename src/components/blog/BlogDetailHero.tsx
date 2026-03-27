import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/data/blog";
import { toast } from "sonner";

interface BlogDetailHeroProps {
  blog: BlogPost;
}

const BlogDetailHero = ({ blog }: BlogDetailHeroProps) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.metaDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <section className="pt-[120px] pb-10 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[800px] mx-auto md:pt-[140px]">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 mb-6 text-[0.8125rem] text-muted-foreground flex-wrap"
      >
        <Link to="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-border" />
        <Link to="/blog" className="hover:text-foreground transition-colors">
          Blog
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-border" />
        <span className="text-foreground font-medium line-clamp-1 max-w-[220px] sm:max-w-none">
          {blog.title}
        </span>
      </motion.nav>

      {/* Meta Row */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center gap-4 mb-6"
      >
        <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full">
          {blog.category}
        </span>
        <span className="text-[0.8125rem] font-medium text-muted-foreground flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(blog.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <span className="text-[0.8125rem] font-medium text-muted-foreground flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {blog.readTime}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground mb-8"
      >
        {blog.title}
      </motion.h1>

      {/* Author & Share */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-between gap-4 py-5 border-y border-border mb-10"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-foreground font-display font-bold text-[1.125rem] border border-border">
            {blog.author.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-[0.9375rem] font-bold text-foreground leading-none mb-1">
              {blog.author}
            </span>
            <span className="text-[0.75rem] text-muted-foreground">
              {blog.authorTitle}
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          onClick={handleShare}
          className="border-border bg-transparent text-foreground hover:border-primary/40 hover:text-white font-medium px-4 h-9 text-[0.8125rem] gap-2 cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          Share
        </Button>
      </motion.div>

      {/* Cover Image */}
      {blog.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[16/9] rounded-[14px] overflow-hidden border border-border bg-muted mb-12"
        >
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </motion.div>
      )}
    </section>
  );
};

export default BlogDetailHero;
