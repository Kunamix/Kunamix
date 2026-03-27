import { motion } from "motion/react";
import { Clock, CheckCircle, FileText } from "lucide-react";

const TRUST_PILLS = [
  { icon: Clock, label: "Response within 24hrs" },
  { icon: CheckCircle, label: "No commitment required" },
  { icon: FileText, label: "Free project scoping call" },
] as const;

const ContactHero = () => {
  return (
    <section className="pt-[120px] pb-[56px] px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto md:pt-[140px]">
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
            Let's Talk
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-bold leading-[1.03] tracking-[-0.026em] text-foreground mb-6 text-[clamp(2.25rem,6vw,3.75rem)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Still figuring out if <br className="hidden sm:block" />
          <em className="not-italic italic font-light text-primary">
            we're the right fit?
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[0.9375rem] md:text-[1.0625rem] leading-[1.72] text-muted-foreground max-w-[560px] mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          That's exactly what the 30-minute call is for. No pitch. No pressure.
          We'll look at what you're building, tell you honestly what it'll take,
          and give you a realistic cost estimate — whether you work with us or
          not.
        </motion.p>

        {/* Trust pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {TRUST_PILLS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-muted border border-border text-[0.8125rem] text-muted-foreground"
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-10 w-[26px] h-[42px] rounded-full border-[1.5px] border-border flex justify-center pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
