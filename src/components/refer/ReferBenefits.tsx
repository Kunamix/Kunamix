import { motion } from "motion/react";
import { REFER_BENEFITS, REFER_SERVICES } from "@/data/refer";

const ReferBenefits = () => {
  return (
    <section className="pb-16 md:pb-24 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto">
      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16">
        {REFER_BENEFITS.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col bg-card rounded-[14px] border border-border p-6 hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 mb-5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-[1.125rem] font-display font-bold text-foreground mb-2 leading-tight tracking-[-0.01em]">
                {benefit.title}
              </h3>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.6]">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Services Included */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-muted/30 border border-border rounded-[14px] p-8 sm:p-10 text-center"
      >
        <h3 className="font-display font-bold text-[1.5rem] leading-tight tracking-[-0.01em] text-foreground mb-6">
          Eligible Services
        </h3>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto">
          {REFER_SERVICES.map((service) => (
            <span
              key={service}
              className="px-4 py-2 bg-card border border-border text-foreground text-[0.8125rem] xs:text-[0.875rem] font-medium rounded-full cursor-default"
            >
              {service}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ReferBenefits;