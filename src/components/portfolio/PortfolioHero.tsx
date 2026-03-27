import { motion } from "motion/react";

const STATS = [
  { value: "50+", label: "Products shipped" },
  { value: "100%", label: "On-time delivery" },
  { value: "6–8 wks", label: "Avg. time to MVP" },
  { value: "3+ yrs", label: "In production" },
];

const PortfolioHero = () => {
  return (
    <section className="pt-[120px] pb-[64px] px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto md:pt-[140px]">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto min-w-0">
        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center justify-center gap-[0.625rem] mb-6"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-blink shrink-0" />
          <span className="font-mono text-[0.625rem] xs:text-[0.6875rem] text-muted-foreground tracking-[0.08em] uppercase leading-none">
            Selected Work · 50+ Products Shipped
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-bold leading-[1.03] tracking-[-0.026em] text-foreground mb-5 text-[clamp(2.25rem,7vw,4.375rem)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Products clients
          <br className="hidden sm:block" />
          actually{" "}
          <em className="not-italic italic font-light text-primary">
            use and grow with.
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[0.9375rem] md:text-[1.0625rem] leading-[1.72] text-muted-foreground max-w-[520px] mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Every project below was scoped, designed, and shipped by Kunamix —
          with full source code handed to the client on launch day. No lock-in,
          no retainers unless you want them.
        </motion.p>

        {/* NDA note */}
        <motion.p
          className="font-mono text-[0.5875rem] text-muted-foreground tracking-[0.06em]
                     border border-border rounded-full px-4 py-[0.375rem] mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Some projects are NDA-protected — we show what we can. Ask us for a
          private walkthrough.
        </motion.p>

        {/* Stat strip */}
        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-px
                     bg-border rounded-[14px] overflow-hidden border border-border"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-card flex flex-col items-center justify-center
                         gap-[0.2rem] py-5 px-4"
            >
              <span className="font-display font-bold text-primary text-[1.5rem] leading-none tracking-[-0.03em]">
                {value}
              </span>
              <span className="font-mono text-[0.5625rem] text-muted-foreground tracking-[0.07em] uppercase text-center">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
