// components/home/CTABlock.tsx
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const CTABlock = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 xs:px-5 sm:px-6 md:px-5 pb-16 md:pb-20 max-w-[1280px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="cta-glow cta-top-line relative bg-dark-bg rounded-[18px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 px-6 sm:px-10 md:px-16 py-10 sm:py-12 md:py-20 overflow-hidden"
      >
        <div className="flex-1 relative z-10 min-w-0">
          <p className="font-mono text-[0.5875rem] text-primary tracking-[0.12em] uppercase mb-4 opacity-80">
            Ready to start?
          </p>
          <h2 className="font-display font-bold text-white tracking-[-0.025em] leading-[1.1] mb-4 text-[clamp(1.5rem,3vw,2.5rem)]">
            Your product idea deserves{" "}
            <em
              className="font-light text-white/35"
              style={{ fontStyle: "italic" }}
            >
              a real technical review.
            </em>
          </h2>
          <p className="text-[0.9375rem] text-white/38 leading-[1.65] max-w-[440px]">
            Book a free 30-minute call. We'll review your idea, scope it
            honestly, and tell you exactly what it'll cost and take — no pitch,
            no obligation, no fluff.
          </p>
        </div>

        <div className="flex flex-col gap-[0.875rem] shrink-0 relative z-10 w-full md:w-auto items-center">
          <Button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white hover:bg-primary-dark shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200 font-semibold gap-2 px-7 h-11 text-[0.9375rem] justify-center w-full md:w-auto cursor-pointer"
          >
            Get My Free Technical Review <ArrowRight size={14} />
          </Button>
          <Link
            to="/portfolio"
            className="text-[0.875rem] font-medium text-white/60 hover:text-white underline underline-offset-4 transition-colors text-center mt-2"
          >
            View Our Work
          </Link>
          <p className="font-mono text-[0.5875rem] text-white/22 text-center tracking-[0.04em] mt-2">
            Free · No obligation · You get a real estimate
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CTABlock;
