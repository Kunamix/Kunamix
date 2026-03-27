import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SERVICES_LIST } from "@/data/services";
import { useNavigate } from "react-router-dom";

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-16 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {SERVICES_LIST.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col h-full bg-card rounded-[14px] border border-border hover:border-primary/30 hover:bg-muted/30 transition-all duration-300 p-6 sm:p-8 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 mb-6 shrink-0">
                <Icon className="w-6 h-6" />
              </div>

              {/* Text Content */}
              <div className="flex-grow flex flex-col min-w-0">
                <h3 className="text-[1.25rem] font-display font-bold text-foreground mb-3 leading-tight tracking-[-0.01em] group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[0.9375rem] text-muted-foreground leading-[1.6] mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-2 gap-x-3 mb-6 mt-auto">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-[0.8125rem] text-muted-foreground"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full shrink-0 mt-[0.4rem]"></span>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing signal */}
                {service.startingFrom && (
                  <div className="mb-5 inline-flex items-center gap-1.5 text-[0.8125rem] text-muted-foreground bg-muted/60 border border-border rounded-full px-3 py-1 w-fit">
                    <span className="text-foreground font-semibold">
                      {service.startingFrom}
                    </span>
                    <span>· Free consultation</span>
                  </div>
                )}
              </div>

              {/* Service CTA — always goes to contact, honest label */}
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-foreground group-hover:text-primary transition-colors duration-300 w-fit cursor-pointer"
              >
                {service.ctaText}
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;
