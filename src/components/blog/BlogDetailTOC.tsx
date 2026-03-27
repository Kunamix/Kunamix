import { useState, useEffect } from "react";
import { motion } from "motion/react";
import type { BlogPost } from "@/data/blog";

interface BlogDetailTOCProps {
  blog: BlogPost;
}

const BlogDetailTOC = ({ blog }: BlogDetailTOCProps) => {
  const [activeId, setActiveId] = useState<string>("");

  const sections = blog.content?.sections ?? [];

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    sections.forEach((s: any) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 2) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="hidden xl:block sticky top-28 self-start w-[220px] shrink-0"
    >
      <p className="text-[0.625rem] font-mono font-bold text-muted-foreground uppercase tracking-[0.12em] mb-4">
        On This Page
      </p>
      <nav className="flex flex-col gap-1">
        {sections.map((section: any, _i: number) => {
          const isActive = activeId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`group flex items-start gap-2.5 py-1.5 text-[0.8125rem] leading-snug transition-colors duration-200 ${
                isActive
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`mt-[0.35em] w-1 h-1 rounded-full shrink-0 transition-all duration-200 ${
                  isActive
                    ? "bg-primary scale-125"
                    : "bg-border group-hover:bg-muted-foreground"
                }`}
              />
              <span className="line-clamp-2">{section.heading}</span>
            </a>
          );
        })}
      </nav>
    </motion.aside>
  );
};

export default BlogDetailTOC;
