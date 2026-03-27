import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/data/blog";

interface BlogDetailContentProps {
  blog: BlogPost;
}

// Parses **bold**, bullet lines starting with "- ", and numbered lines "1. "
const parseContent = (text: string) => {
  const lines = text.split("\n");

  const result: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return;
    if (listType === "ul") {
      result.push(
        <ul key={key} className="my-4 space-y-2 pl-0 list-none">
          {listBuffer.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-muted-foreground text-[1.0625rem] leading-[1.75]"
            >
              <span className="mt-[0.45em] w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>{parseLine(item)}</span>
            </li>
          ))}
        </ul>,
      );
    } else {
      result.push(
        <ol key={key} className="my-4 space-y-2 pl-0 list-none">
          {listBuffer.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-muted-foreground text-[1.0625rem] leading-[1.75]"
            >
              <span className="mt-[0.1em] text-[0.75rem] font-bold text-primary border border-primary/30 bg-primary/5 rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <span>{parseLine(item)}</span>
            </li>
          ))}
        </ol>,
      );
    }
    listBuffer = [];
    listType = null;
  };

  lines.forEach((line, idx) => {
    const ulMatch = line.match(/^[-•]\s(.+)/);
    const olMatch = line.match(/^\d+\.\s(.+)/);

    if (ulMatch) {
      if (listType === "ol") flushList(`list-${idx}`);
      listType = "ul";
      listBuffer.push(ulMatch[1]);
    } else if (olMatch) {
      if (listType === "ul") flushList(`list-${idx}`);
      listType = "ol";
      listBuffer.push(olMatch[1]);
    } else {
      flushList(`list-${idx}`);
      if (line.trim() === "") {
        result.push(<div key={`gap-${idx}`} className="h-4" />);
      } else {
        result.push(
          <p
            key={`p-${idx}`}
            className="text-muted-foreground text-[1.0625rem] leading-[1.8]"
          >
            {parseLine(line)}
          </p>,
        );
      }
    }
  });
  flushList("final");
  return result;
};

// Inline bold parser
const parseLine = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-foreground font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
};

const BlogDetailContent = ({ blog }: BlogDetailContentProps) => {
  const hasContent = blog.content?.sections && blog.content.sections.length > 0;

  return (
    <article className="pb-16 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[800px] mx-auto">
      {/* Intro */}
      {blog.content?.intro && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1.125rem] md:text-[1.25rem] leading-[1.7] text-muted-foreground mb-12 font-medium"
        >
          {blog.content.intro}
        </motion.p>
      )}

      {/* Main Sections */}
      {hasContent && (
        <div className="flex flex-col gap-12 mb-16">
          {blog.content.sections.map((section: any, index: number) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="scroll-mt-24"
              id={section.id}
            >
              {/* Section number accent */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[0.625rem] font-mono font-bold text-primary/60 tracking-[0.12em] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-border max-w-[40px]" />
              </div>

              <h2 className="text-[1.5rem] md:text-[1.75rem] font-display font-bold text-foreground mb-6 leading-tight tracking-[-0.01em]">
                {section.heading}
              </h2>

              <div className="space-y-1">{parseContent(section.body)}</div>
            </motion.section>
          ))}
        </div>
      )}

      {/* Conclusion */}
      {blog.content?.conclusion && (
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 p-6 md:p-8 bg-muted/30 border-l-2 border-primary rounded-r-[14px]"
        >
          <p className="text-[1.125rem] font-medium italic text-foreground leading-relaxed">
            "{blog.content.conclusion}"
          </p>
        </motion.blockquote>
      )}

      {/* Inline CTA Block */}
      {blog.content?.cta && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 p-8 md:p-10 bg-dark-bg text-center rounded-[14px] flex flex-col items-center"
        >
          <h3 className="text-[1.5rem] font-display font-bold text-white mb-3 tracking-[-0.01em]">
            {blog.content.cta.heading}
          </h3>
          <p className="text-[0.9375rem] text-white/70 leading-[1.6] mb-8 max-w-lg">
            {blog.content.cta.subheading}
          </p>
          <Button
            onClick={() => (window.location.href = blog.content.cta.buttonLink)}
            className="bg-primary text-white hover:bg-primary-dark shadow-brand transition-all duration-200 font-semibold h-12 px-6 gap-2 text-[0.9375rem] cursor-pointer"
          >
            {blog.content.cta.buttonText}
            <ArrowRight className="w-4 h-4" />
          </Button>
          {blog.content.cta.note && (
            <p className="mt-4 text-[0.8125rem] text-white/40">
              {blog.content.cta.note}
            </p>
          )}
        </motion.div>
      )}

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pt-8 border-t border-border flex flex-wrap gap-2"
      >
        <span className="w-full text-[0.75rem] font-bold text-muted-foreground uppercase tracking-widest mb-2 block">
          Tagged In
        </span>
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 bg-muted border border-border text-foreground text-[0.8125rem] font-medium rounded-full hover:border-primary/40 hover:text-primary transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </article>
  );
};

export default BlogDetailContent;
