import { motion } from "motion/react";
import { ExternalLink, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";

// ─── Add `results?: { val: string; label: string }[]` to your portfolio data type ───
// Example entry in portfolio.ts:
// results: [
//   { val: "2K+", label: "Active users" },
//   { val: "99.9%", label: "Uptime" },
//   { val: "7 wks", label: "Delivered" },
// ]

const PortfolioGrid = () => {
  return (
    <section className="pb-16 md:pb-24 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col h-full bg-card rounded-[14px] border border-border overflow-hidden group hover:border-primary/40 transition-colors duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted border-b border-border bg-white">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {project.featured && (
                  <span className="bg-background/90 backdrop-blur-md text-foreground text-[0.6875rem] font-bold px-3 py-1.5 rounded-full border border-border flex items-center gap-1.5 w-fit">
                    ⭐ Featured
                  </span>
                )}
                {project.confidential && (
                  <span className="bg-amber-500/10 backdrop-blur-md text-amber-600 dark:text-amber-500 text-[0.6875rem] font-bold px-3 py-1.5 rounded-full border border-amber-500/20 flex items-center gap-1.5 w-fit">
                    <Lock className="w-3 h-3" />
                    Confidential
                  </span>
                )}
              </div>

              {/* Clean Hover Overlay */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                {project.link ? (
                  <Button
                    className="bg-primary text-white hover:bg-primary-dark shadow-brand transition-all duration-200 font-semibold px-6 h-10 gap-2 text-[0.875rem]"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    View Project
                  </Button>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-3">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-[0.875rem] font-semibold text-foreground mb-1">
                      NDA Protected
                    </span>
                    <span className="text-[0.75rem] text-muted-foreground max-w-[200px]">
                      Source code and live link are confidential.
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-5 sm:p-6 flex flex-col flex-grow min-w-0">
              <div className="mb-3">
                <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-[1.25rem] font-display font-bold text-foreground leading-tight tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {project.problem && (
                <p className="text-[0.9375rem] text-foreground font-medium mb-2">
                  {project.problem}
                </p>
              )}

              <p className="text-[0.9375rem] text-muted-foreground leading-[1.6] mb-5 flex-grow">
                {project.description}
              </p>

              {/* Outcome metrics — shown when project.results exists */}
              {project.results && project.results.length > 0 && (
                <div className="flex gap-5 mb-5 pb-5 border-b border-border flex-wrap">
                  {project.results.map(
                    ({ val, label }: { val: string; label: string }) => (
                      <div key={label}>
                        <div className="font-display font-bold text-primary text-[1.1rem] leading-none tracking-[-0.02em]">
                          {val}
                        </div>
                        <div className="font-mono text-[0.5625rem] text-muted-foreground tracking-[0.07em] uppercase mt-[0.2rem]">
                          {label}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}

              {/* Technologies Array */}
              <div
                className={`mt-auto ${!project.results || project.results.length === 0 ? "pt-5 border-t border-border" : ""}`}
              >
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[0.6875rem] font-medium bg-muted text-foreground/80 px-2.5 py-1 rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[0.6875rem] font-medium bg-transparent text-muted-foreground px-2 py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
