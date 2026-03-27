import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Three micro trust signals shown above the CTA buttons
const GUARANTEES = [
  "Pay per milestone — never a lump sum",
  "Miss a weekly demo? That sprint is free",
  "Source code yours on day one",
];

const PortfolioCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-dark-bg rounded-[20px] p-8 md:p-16 relative overflow-hidden
                   flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16"
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Left — copy */}
        <div className="relative z-10 flex-1 min-w-0">
          <p className="font-mono text-[0.5875rem] text-primary tracking-[0.12em] uppercase mb-4 opacity-80">
            Ready to start?
          </p>
          <h3
            className="font-display font-bold text-white leading-[1.05]
                       tracking-[-0.025em] mb-4
                       text-[clamp(1.75rem,4vw,2.75rem)]"
          >
            You've seen what we ship.
            <br />
            <em className="font-light text-white/35 italic">
              Let's build yours next.
            </em>
          </h3>
          <p className="text-[0.9375rem] text-white/50 leading-[1.65] max-w-[420px] mb-8">
            Book a free 30-minute technical review. We'll scope your idea, give
            you an honest timeline, and tell you exactly what it'll cost —
            before you commit a single rupee.
          </p>

          {/* Micro guarantees */}
          <ul className="flex flex-col gap-[0.5rem]">
            {GUARANTEES.map((g) => (
              <li
                key={g}
                className="flex items-center gap-[0.5rem] text-[0.8125rem] text-white/40"
              >
                <svg
                  className="text-primary shrink-0"
                  width="14"
                  height="14"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" />
                  <path
                    d="M5 7.5l2 2 3-3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — CTAs */}
        <div className="relative z-10 flex flex-col gap-3 shrink-0 w-full md:w-auto">
          <Button
            onClick={() => navigate("/contact")}
            className="bg-primary text-white hover:bg-primary-dark shadow-brand
                       hover:shadow-brand-hover hover:-translate-y-px
                       transition-all duration-200 font-semibold
                       px-7 h-12 gap-2 text-[0.9375rem] justify-center
                       w-full md:w-auto cursor-pointer"
          >
            Get My Free Technical Review
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Button>

          {/* Secondary — WhatsApp for quick chat (higher intent than "Contact Us") */}
          <a
            href="https://wa.me/918788523391" // TODO: replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2
                       border border-white/12 text-white/70
                       hover:border-white/28 hover:text-white
                       rounded-md h-12 px-7 text-[0.9375rem] font-medium
                       transition-all duration-150 w-full md:w-auto cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quick chat on WhatsApp
          </a>

          <p className="font-mono text-[0.5875rem] text-white/22 text-center tracking-[0.04em]">
            Free · No obligation · You get a real estimate
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioCTA;
