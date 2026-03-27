import { motion } from "motion/react";
import { HOW_IT_WORKS } from "@/data/refer";

const ReferHowItWorks = () => {
  return (
    <section className="py-16 md:py-24 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase mb-4 block">
          The Process
        </span>
        <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-foreground">
          How it works.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
        {HOW_IT_WORKS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center font-mono text-[1rem] font-bold text-foreground mb-5 relative group hover:border-primary/50 transition-colors">
              {item.step}
              {/* Connector Line for Desktop */}
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-border -translate-y-1/2 -z-10" />
              )}
            </div>
            <h3 className="text-[1.125rem] font-bold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-[0.875rem] text-muted-foreground leading-[1.6] max-w-[240px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReferHowItWorks;