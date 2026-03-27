// components/about/AboutHero.tsx
import { motion } from "motion/react";
// import { Link } from "react-router-dom";
// import { ChevronRight } from "lucide-react";
// import { ABOUT_BREADCRUMB } from "@/data/about";

const PROOF_PILLS = [
  { num: "50+", label: "Projects shipped" },
  { num: "3+", label: "Years operating" },
  { num: "100%", label: "On-time delivery" },
  { num: "₹0", label: "Scope-creep charge" },
];

const AboutHero = () => {
  return (
    <section className="pt-[120px] md:pt-[140px] pb-0 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto">

      {/* Hero content */}
      <div className="flex flex-col items-center text-center max-w-[820px] mx-auto">
        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-[0.625rem] mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-blink shrink-0" />
          <span className="font-mono text-[0.625rem] xs:text-[0.6875rem] text-muted-foreground tracking-[0.08em] uppercase">
            Meet Kunamix Digital Solutions
          </span>
        </motion.div>

        {/* Headline — rewritten to be specific + credible */}
        <motion.h1
          className="font-display font-bold leading-[1.03] tracking-[-0.026em]
                     text-foreground mb-5
                     text-[clamp(2.25rem,7vw,4.25rem)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          We ship products
          <br className="hidden sm:block" /> founders are{" "}
          <em className="not-italic italic font-light text-primary">
            proud to show.
          </em>
        </motion.h1>

        {/* Subtitle — specific, not vague */}
        <motion.p
          className="text-[0.9375rem] md:text-[1.0625rem] leading-[1.72]
                     text-muted-foreground max-w-[520px] mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Kunamix is a lean engineering team from India — we move fast, write
          clean code, and hand you a product you can actually demo to investors
          on day 50.
        </motion.p>

        {/* Proof pills row */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {PROOF_PILLS.map(({ num, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 bg-card border border-border
                         rounded-full px-4 py-2"
            >
              <span className="font-display font-bold text-primary text-[1rem] leading-none tracking-[-0.02em]">
                {num}
              </span>
              <span className="font-mono text-[0.625rem] text-muted-foreground tracking-[0.06em] uppercase">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="h-16 md:h-20" />
    </section>
  );
};

export default AboutHero;
