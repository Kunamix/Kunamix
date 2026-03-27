// components/home/Process.tsx
import { motion } from "motion/react";

const STEPS = [
  {
    num: "01 / Discovery",
    title: "Scope & Architecture",
    desc: "We define exactly what we're building and what we're not — before writing a single line of code.",
    badge: "Wk 1",
  },
  {
    num: "02 / Design",
    title: "Prototype & Validate",
    desc: "High-fidelity Figma prototype reviewed and approved by you before anything is built.",
    badge: "Wk 1–2",
  },
  {
    num: "03 / Build",
    title: "Ship in Sprints",
    desc: "Two-week sprints. Weekly demos. You see real progress every Friday — not just status updates.",
    badge: "Wk 2–7",
  },
  {
    num: "04 / Launch",
    title: "Deploy & Hand Off",
    desc: "Production deployment, full codebase handoff with docs, and 30 days of post-launch support. It's yours.",
    badge: "Wk 7–8",
  },
];

const Process = () => (
  <section
    className="process-glow-tr process-glow-bl relative overflow-hidden
               bg-dark-bg py-20 md:py-24 px-4 xs:px-5 sm:px-6 md:px-5"
    id="process"
  >
    <div className="relative z-10 max-w-[1280px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-[1.125rem]">
          <span className="w-[22px] h-px bg-primary shrink-0" />
          <span className="font-mono text-[0.5875rem] font-medium text-primary tracking-[0.14em] uppercase">
            How we work
          </span>
        </div>
        <h2
          className="font-display font-bold leading-[1.08] tracking-[-0.025em]
                     text-white max-w-[560px] mb-12 md:mb-14
                     text-[clamp(1.875rem,3.5vw,2.875rem)]"
        >
          No 6-month timelines.
          <br />
          <em
            className="font-light text-white/28"
            style={{ fontStyle: "italic" }}
          >
            No guesswork.
          </em>
        </h2>
      </motion.div>

      {/* Steps grid
          320px  → 1 col
          640px  → 2 col
          1024px → 4 col
      */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                   rounded-[14px] overflow-hidden border border-[hsl(var(--dark-border))]"
      >
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="
              flex flex-col p-6 sm:p-8
              border-b border-[hsl(var(--dark-border))]
              lg:border-b-0 lg:border-r lg:last:border-r-0
              sm:[&:nth-child(2n)]:border-r-0
              sm:border-r sm:border-[hsl(var(--dark-border))]
              last:border-b-0
              hover:bg-white/[0.025] transition-colors duration-200
            "
          >
            <span className="font-mono text-[0.5875rem] text-primary tracking-[0.1em] mb-[1.125rem]">
              {step.num}
            </span>
            <h3
              className="font-display text-[1.0625rem] font-semibold text-white
                         tracking-[-0.015em] mb-[0.625rem]"
            >
              {step.title}
            </h3>
            <p className="text-[0.8125rem] leading-[1.65] text-white/35 flex-1">
              {step.desc}
            </p>
            <span
              className="inline-flex self-start mt-[1.375rem] font-mono text-[0.5875rem]
                         font-medium text-primary bg-primary/10 border border-primary/22
                         px-[0.625rem] py-1 rounded-[4px]"
            >
              {step.badge}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
