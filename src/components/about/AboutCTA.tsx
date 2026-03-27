import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutCTA = () => {
  const navigate = useNavigate();

  return (
    // ADDED: pt-20 md:pt-28 to push the card down and create visual separation
    <section className="bg-background px-4 xs:px-5 sm:px-6 md:px-5 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="cta-glow cta-top-line relative bg-dark-bg rounded-[18px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 px-6 sm:px-10 md:px-16 py-12 md:py-20 overflow-hidden"
        >
          <div className="flex-1 relative z-10 min-w-0">
            <p className="font-mono text-[0.5875rem] text-primary tracking-[0.12em] uppercase mb-4 opacity-80">
              Let's work together
            </p>
            <h2 className="font-display font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4 text-[clamp(1.75rem,3.5vw,2.75rem)]">
              Ready to build something{" "}
              <em
                className="font-light text-white/35"
                style={{ fontStyle: "italic" }}
              >
                your users love?
              </em>
            </h2>
            <p className="text-[0.9375rem] md:text-[1.0625rem] text-white/38 leading-[1.65] max-w-[480px]">
              30 minutes. Free. We'll scope your project, give you an honest
              timeline, and tell you exactly what it costs — upfront.
            </p>
          </div>

          <div className="flex flex-col gap-[0.875rem] shrink-0 relative z-10 w-full md:w-auto items-center">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-primary text-white hover:bg-primary-dark shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200 font-semibold gap-2 px-8 h-12 text-[0.9375rem] justify-center w-full md:w-auto rounded-md cursor-pointer"
            >
              Book Free Consultation <ArrowRight size={16} />
            </Button>
            <Button
              onClick={() => navigate("/portfolio")}
              variant="outline"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white transition-all duration-200 font-semibold px-8 h-12 text-[0.9375rem] w-full md:w-auto rounded-md cursor-pointer"
            >
              See Our Work First
            </Button>
            <p className="font-mono text-[0.5875rem] text-white/22 text-center tracking-[0.05em] mt-3 uppercase">
              Free · No obligation · 30 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
