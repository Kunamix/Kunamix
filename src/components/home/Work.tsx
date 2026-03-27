// components/home/Work.tsx
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";

const ArrowBox = () => (
  <div
    className="absolute top-5 sm:top-7 right-5 sm:right-7
               w-[30px] h-[30px] rounded-md border border-border
               flex items-center justify-center text-muted-foreground
               group-hover:border-primary group-hover:text-primary
               transition-all duration-150"
    aria-hidden="true"
  >
    <ArrowUpRight size={12} />
  </div>
);

const Work = () => {
  const navigate = useNavigate();

  // Grab the first 3 projects for the homepage grid
  const recentProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section
      className="px-4 xs:px-5 sm:px-6 md:px-5 py-20 md:py-24 max-w-[1280px] mx-auto"
      id="portfolio"
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
            <span className="section-label-tag">Selected work</span>
          </div>
          <h2
            className="font-display font-bold leading-[1.08] tracking-[-0.025em]
                       text-foreground max-w-[560px]
                       text-[clamp(1.875rem,3.5vw,2.875rem)]"
          >
            Built by us,
            <br />
            <em
              className="font-light text-muted-foreground"
              style={{ fontStyle: "italic" }}
            >
              owned by you
            </em>
          </h2>
        </motion.div>

        <Button
          onClick={() => navigate("/portfolio")}
          variant="outline"
          className="border-border text-foreground hover:border-muted-foreground gap-2 shrink-0 cursor-pointer"
        >
          All Projects
          <ArrowRight size={12} />
        </Button>
      </div>

      {/* Grid:
          320px  → 1 col
          768px  → 2 col (first project spans full width)
      */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 rounded-[14px] overflow-hidden border border-border"
        style={{ gap: "1px", background: "hsl(var(--border))" }}
      >
        {recentProjects.map((project, i) => {
          // Force the first item to span 2 columns for the classic grid layout
          const isFeatured = i === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => navigate("/portfolio")}
              className={[
                "group relative bg-card hover:bg-muted transition-colors duration-200",
                "p-5 sm:p-8 overflow-hidden cursor-pointer flex",
                isFeatured
                  ? "col-span-1 md:col-span-2 flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 min-h-[260px]"
                  : "flex-col justify-between min-h-[200px] sm:min-h-[220px]",
              ].join(" ")}
            >
              <ArrowBox />

              {/* Content */}
              <div className={isFeatured ? "flex-1 min-w-0" : "flex-1"}>
                <p
                  className="font-mono text-[0.5875rem] text-muted-foreground
                             tracking-[0.08em] uppercase mb-[0.625rem]"
                >
                  {project.category}
                </p>
                <h3
                  className="font-display font-bold tracking-[-0.02em]
                             text-foreground leading-[1.15] mb-[0.625rem]
                             text-[1.25rem] sm:text-[1.375rem]"
                >
                  {project.title}
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.6] max-w-[520px] mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-[0.3rem]">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              {project.results && (
                <div
                  className={[
                    "flex shrink-0 flex-wrap",
                    isFeatured
                      ? "gap-6 sm:gap-9 pt-2 md:pt-0"
                      : "gap-4 sm:gap-6 pt-4 border-t border-border mt-5 w-full",
                  ].join(" ")}
                >
                  {project.results.map(({ val, label }) => (
                    <div key={label}>
                      <div
                        className={[
                          "font-display font-bold text-primary tracking-[-0.025em] leading-none",
                          isFeatured
                            ? "text-[1.5rem] sm:text-[1.75rem]"
                            : "text-[1.125rem] sm:text-[1.25rem]",
                        ].join(" ")}
                      >
                        {val}
                      </div>
                      <div
                        className="font-mono text-[0.5625rem] text-muted-foreground
                                   tracking-[0.08em] uppercase mt-[0.3rem]"
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;