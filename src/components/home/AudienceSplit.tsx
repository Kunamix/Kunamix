// components/home/AudienceSplit.tsx
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CheckIcon = () => (
  <svg
    className="text-primary shrink-0 mt-[1px]"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7.5" stroke="currentColor" />
    <path
      d="M5 8l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const STARTUP_ITEMS = [
  "Discovery + scope definition (no runaway projects)",
  "Full-stack engineering — frontend, backend, infra",
  "Complete source code ownership from day one",
  "Post-launch iteration support included",
];


const AudienceSplit = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-muted border-y border-border py-20 md:py-[5.5rem] px-4 xs:px-5 sm:px-6 md:px-5">
      <div
        className="max-w-[800px] mx-auto rounded-[18px] overflow-hidden border border-border"
        style={{ background: "hsl(var(--border))" }}
      >
        {/* ── Startups ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card px-6 sm:px-9 md:px-11 py-10 md:py-12 flex flex-col items-center text-center"
        >
          <h3
            className="font-display font-bold tracking-[-0.025em]
                       text-foreground leading-[1.1] mb-4
                       text-[clamp(1.5rem,3vw,2rem)]"
          >
            MVP in 6–8 weeks. Investor-ready.
          </h3>
          <p className="text-[1rem] leading-[1.65] text-muted-foreground mb-8 max-w-[500px]">
            You have the idea. We scope, design, and ship — fast enough to
            matter.
          </p>
          <ul
            className="flex flex-col gap-3 mb-10 text-left w-full max-w-[400px]"
            aria-label="What's included for startups"
          >
            {STARTUP_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.875rem] text-foreground leading-[1.4]"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white hover:bg-primary-dark shadow-brand
                       hover:shadow-brand-hover hover:-translate-y-px
                       transition-all duration-200 font-semibold w-full xs:w-auto cursor-pointer"
          >
            Build My MVP →
          </Button>
        </motion.div>

        {/* ── Businesses ──
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="bg-dark-bg px-6 sm:px-9 md:px-11 py-10 md:py-12"
        >
          <p className="font-mono text-[0.5875rem] text-primary tracking-[0.12em] uppercase mb-4">
            For Businesses
          </p>
          <h3
            className="font-display font-bold tracking-[-0.025em]
                       text-white leading-[1.1] mb-4
                       text-[clamp(1.5rem,3vw,1.875rem)]"
          >
            Your online presence deserves better.
          </h3>
          <p className="text-[0.9375rem] leading-[1.65] text-white/38 mb-8">
            Professional websites and web apps that actually generate leads.
            Fixed price, fast delivery, no hidden costs.
          </p>
          <ul
            className="flex flex-col gap-3 mb-10"
            aria-label="What's included for businesses"
          >
            {BUSINESS_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.875rem] text-white/65 leading-[1.4]"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-display text-[0.875rem] italic font-light text-white/25 mb-[0.875rem]">
            Fixed price · Fast delivery · No hidden costs
          </p>
          <Button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white hover:bg-primary-dark shadow-brand
                       hover:shadow-brand-hover hover:-translate-y-px
                       transition-all duration-200 font-semibold w-full xs:w-auto"
          >
            Start My Project →
          </Button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default AudienceSplit;
