import { Star } from "lucide-react";
import { motion } from "motion/react";

const ServicesHero = () => {
  return (
    <section className="pt-[120px] pb-[72px] px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto md:pt-[140px]">
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
            What We Offer
          </span>
        </motion.div>

        {/* Headline — specific, differentiated */}
        <motion.h1
          className="font-display font-bold leading-[1.03] tracking-[-0.026em] text-foreground mb-6 text-[clamp(2.25rem,7vw,4.375rem)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Your MVP. Scoped, designed, <br className="hidden sm:block" />
          <em className="not-italic italic font-light text-primary">
            and shipped in 6–8 weeks.
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[0.9375rem] md:text-[1.0625rem] leading-[1.72] text-muted-foreground max-w-[560px] mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          No delays. No excuses. No vanishing dev teams. We work with startup
          founders and business owners who need software that actually ships —
          not agency promises that drag on for 6 months.
        </motion.p>

        {/* Social proof pill */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 bg-muted/60 border border-border rounded-full px-4 py-2"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-[0.8125rem] text-muted-foreground">
            <span className="text-foreground font-semibold">50+ projects</span>{" "}
            delivered for startups worldwide
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
