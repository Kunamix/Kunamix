import { motion } from "motion/react";

const PrivacyHero = () => {
  return (
    <section className="pt-[120px] pb-[40px] px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto md:pt-[140px]">
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
            Your Privacy Matters
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-bold leading-[1.03] tracking-[-0.026em] text-foreground mb-6 text-[clamp(2.25rem,7vw,4.375rem)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Privacy <em className="not-italic italic font-light text-primary">Policy</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[0.9375rem] md:text-[1.0625rem] leading-[1.72] text-muted-foreground max-w-[560px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          We are committed to protecting your privacy and handling your data with care and transparency.
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyHero;