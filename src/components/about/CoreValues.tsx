// components/about/CoreValues.tsx
import { motion } from "motion/react";
import { CORE_VALUES } from "@/data/about";

const CoreValues = () => (
  <section
    className="px-4 xs:px-5 sm:px-6 md:px-5 py-16 md:py-24 max-w-[1280px] mx-auto"
    id="values"
  >
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
    >
      <div className="max-w-[560px]">
        <div className="flex items-center gap-3 mb-[1.125rem]">
          <span className="w-[22px] h-px bg-primary shrink-0" />
          <span className="font-mono text-[0.5875rem] font-medium text-primary tracking-[0.14em] uppercase">
            Our Principles
          </span>
        </div>
        <h2
          className="font-display font-bold leading-[1.08] tracking-[-0.025em] text-foreground
                     text-[clamp(1.875rem,3.5vw,2.875rem)]"
        >
          How we work
          <br />
          <em
            className="font-light text-muted-foreground"
            style={{ fontStyle: "italic" }}
          >
            every single project.
          </em>
        </h2>
      </div>
      <p className="text-[0.9375rem] text-muted-foreground leading-[1.65] max-w-[340px]">
        These aren't values we hang on the wall. They're the decisions we make
        every sprint, every code review, every client call.
      </p>
    </motion.div>

    {/* Values grid */}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                 rounded-[14px] overflow-hidden border border-border"
      style={{ gap: "1px", background: "hsl(var(--border))" }}
    >
      {CORE_VALUES.map((value, i) => {
        const Icon = value.icon;
        return (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: (i % 3) * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative bg-card hover:bg-background
                       flex flex-col p-6 sm:p-8 overflow-hidden
                       transition-colors duration-200"
          >
            {/* Hover accent line — matches service card pattern */}
            <span
              className="absolute bottom-0 left-0 right-0 h-0.5 pointer-events-none
                         bg-gradient-to-r from-primary to-[#e8641a]
                         scale-x-0 group-hover:scale-x-100 origin-left
                         transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />

            {/* Icon */}
            <div
              className="w-[38px] h-[38px] rounded-[9px] border border-border
                         bg-background flex items-center justify-center
                         text-foreground mb-5 shrink-0
                         group-hover:border-primary group-hover:text-primary
                         transition-colors duration-200"
            >
              <Icon className="w-[18px] h-[18px]" />
            </div>

            <h3
              className="font-display text-[1.0625rem] font-semibold
                         tracking-[-0.015em] text-foreground mb-[0.625rem]"
            >
              {value.title}
            </h3>
            <p className="text-[0.875rem] leading-[1.65] text-muted-foreground">
              {value.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default CoreValues;
