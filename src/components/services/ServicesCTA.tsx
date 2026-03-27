import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ServicesCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase mb-4 block">
          Let's Build Together
        </span>
        <h3 className="font-display font-bold text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-foreground mb-5">
          Ready to start your project?
        </h3>
        <p className="text-[0.9375rem] md:text-[1.0625rem] text-muted-foreground leading-[1.6] mb-4">
          Book a free 30-minute call. We'll listen to what you're building, tell
          you honestly what's possible within your budget, and send a proposal
          within 48 hours — no obligation.
        </p>

        {/* Trust micro-copy */}
        <div className="flex items-center gap-2 text-[0.8125rem] text-muted-foreground mb-8">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>
            Free 30-min call · Proposal in 48h · No commitment required
          </span>
        </div>

        <Button
          onClick={() => navigate("/contact")}
          className="bg-primary text-white hover:bg-primary-dark shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200 font-semibold px-8 h-12 gap-2 text-[0.9375rem] justify-center xs:w-auto cursor-pointer"
        >
          Book a Free Call
          <ArrowRight className="w-4 h-4 shrink-0" />
        </Button>
      </motion.div>
    </section>
  );
};

export default ServicesCTA;
