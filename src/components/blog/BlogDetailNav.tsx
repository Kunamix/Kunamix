import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blog";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BlogDetailNavProps {
  previousBlog: BlogPost | null;
  nextBlog: BlogPost | null;
}

const BlogDetailNav = ({ previousBlog, nextBlog }: BlogDetailNavProps) => {
  if (!previousBlog && !nextBlog) return null;

  return (
    <section className="py-12 md:py-16 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[800px] mx-auto border-t border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Previous Post */}
        {previousBlog ? (
          <Link
            to={`/blog/${previousBlog.slug}`}
            className="group flex flex-col justify-center p-6 bg-card border border-border rounded-[14px] hover:border-primary/40 transition-colors duration-300"
          >
            <span className="flex items-center gap-1.5 text-[0.75rem] text-muted-foreground font-bold uppercase tracking-widest mb-3 group-hover:text-primary transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Previous
            </span>
            <h4 className="text-[1.125rem] font-display font-bold text-foreground leading-tight line-clamp-2">
              {previousBlog.title}
            </h4>
          </Link>
        ) : <div />}

        {/* Next Post */}
        {nextBlog && (
          <Link
            to={`/blog/${nextBlog.slug}`}
            className="group flex flex-col justify-center p-6 bg-card border border-border rounded-[14px] hover:border-primary/40 transition-colors duration-300 text-right items-end"
          >
            <span className="flex items-center gap-1.5 text-[0.75rem] text-muted-foreground font-bold uppercase tracking-widest mb-3 group-hover:text-primary transition-colors">
              Next <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <h4 className="text-[1.125rem] font-display font-bold text-foreground leading-tight line-clamp-2">
              {nextBlog.title}
            </h4>
          </Link>
        )}
      </div>
    </section>
  );
};

export default BlogDetailNav;