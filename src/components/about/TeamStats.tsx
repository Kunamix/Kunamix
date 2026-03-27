// components/about/TeamStats.tsx
// Replaces the generic icon-card layout with a split "why us" + metrics grid
// that reads like proof, not a brochure.

import { motion } from "motion/react";
import { TEAM_STATS } from "@/data/about";

// /* ── Small inline accent line ── */
// const AccentLine = () => (
//   <span className="inline-block w-[22px] h-px bg-primary align-middle mr-2 shrink-0" />
// );

const TeamStats = () => (
  <section className="px-4 xs:px-5 sm:px-6 md:px-5 pb-0 max-w-[1280px] mx-auto">
    {/* ── Grid:  left narrative  |  right 3 stat cards ── */}
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
      {/* Left — story copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="lg:sticky lg:top-[88px]"
      >
        <div className="flex items-center gap-3 mb-[1.125rem]">
          <span className="w-[22px] h-px bg-primary shrink-0" />
          <span className="font-mono text-[0.5875rem] font-medium text-primary tracking-[0.14em] uppercase">
            Why Kunamix
          </span>
        </div>

        <h2
          className="font-display font-bold leading-[1.08] tracking-[-0.025em]
                     text-foreground mb-5
                     text-[clamp(1.875rem,3.5vw,2.5rem)]"
        >
          Not an agency.
          <br />
          <em
            className="font-light text-muted-foreground"
            style={{ fontStyle: "italic" }}
          >
            A founding-level partner.
          </em>
        </h2>

        <p className="text-[0.9375rem] leading-[1.72] text-muted-foreground mb-6">
          We don't operate like a typical dev shop. Every project gets direct
          access to the engineers building it — no account managers, no ticket
          queues, no guesswork.
        </p>

        <ul className="flex flex-col gap-3">
          {[
            "Fixed scope, fixed price — surprises stay off your invoice",
            "Weekly demos you can share with your team or investors",
            "Full codebase handoff — it's yours, forever",
            "India-based team, global communication standards",
          ].map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-[0.875rem] text-foreground leading-[1.5]"
            >
              <svg
                className="text-primary shrink-0 mt-[2px]"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" />
                <path
                  d="M5 7.5l2 2 3-3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right — stat cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 rounded-[14px] overflow-hidden border border-border"
        style={{ gap: "1px", background: "hsl(var(--border))" }}
      >
        {TEAM_STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-card hover:bg-muted/50 transition-colors duration-200
                         flex items-start gap-5 p-6 sm:p-8"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15
                           flex items-center justify-center text-primary shrink-0 mt-0.5"
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3
                  className="font-display font-semibold text-foreground
                             tracking-[-0.015em] leading-tight mb-[0.375rem]
                             text-[1.0625rem] sm:text-[1.125rem]"
                >
                  {stat.title}
                </h3>
                <p className="text-[0.875rem] text-muted-foreground leading-[1.6]">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>

    <div className="h-16 md:h-24" />
  </section>
);

export default TeamStats;
