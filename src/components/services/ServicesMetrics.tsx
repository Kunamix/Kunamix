import { motion } from "motion/react";

const metrics = [
  { value: "50+", label: "Projects delivered" },
  { value: "6–8 wks", label: "Average MVP timeline" },
  { value: "8+", label: "Countries served" },
  { value: "98%", label: "Client satisfaction" },
];

const ServicesMetrics = () => {
  return (
    <section className="px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-[14px] overflow-hidden border border-border"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex flex-col items-center justify-center text-center bg-card px-6 py-8 gap-1"
          >
            <span className="font-display font-bold text-[clamp(2rem,4vw,2.75rem)] leading-none tracking-[-0.03em] text-primary">
              {metric.value}
            </span>
            <span className="text-[0.8125rem] text-muted-foreground leading-snug mt-1">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesMetrics;
