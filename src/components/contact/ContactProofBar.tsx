import { motion } from "motion/react";

const STATS = [
  { value: "50+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24h", label: "First response time" },
  { value: "5+", label: "Industries served" },
] as const;

const ContactProofBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-[16px] overflow-hidden border border-border mb-12"
    >
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center gap-1 py-5 px-4 bg-card"
        >
          <span className="text-[1.75rem] font-display font-bold text-primary leading-none">
            {stat.value}
          </span>
          <span className="text-[0.75rem] text-muted-foreground text-center">
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default ContactProofBar;
