// components/home/Hero.tsx
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";

const CheckIcon = () => (
  <svg className="text-primary shrink-0" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" />
    <path d="M5 7.5l2 2 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TRUST_ITEMS = [
  "Pay per milestone — you only pay when you see working software",
  "Miss a weekly demo? That sprint is on us — free",
  "Full source code yours from day one — no lock-in",
  "Fixed price agreed before we write a single line of code",
];

const METRICS = [
  { value: "50+", label: "products shipped — MVPs, SaaS, mobile apps", accent: true },
  { value: "100%", label: "on-time delivery — across all 50+ projects", accent: false },
  { value: "6–8 wks", label: "average time to MVP — from kickoff to launch", accent: false },
  { value: "3+ yrs", label: "Operating · UK, US, EU, India served", accent: true },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-svh grid grid-cols-1 md2:grid-cols-2 gap-10 md2:gap-20 items-center pt-[100px] pb-[72px] px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto md:pt-[88px]">
      <div className="flex flex-col min-w-0">
        <motion.div className="inline-flex items-center gap-[0.625rem] mb-6 md:mb-7" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-blink shrink-0" />
          <span className="font-mono text-[0.625rem] xs:text-[0.6875rem] text-muted-foreground tracking-[0.08em] uppercase leading-none">Custom Software Development · India</span>
        </motion.div>

        <motion.h1 className="font-display font-bold leading-[1.03] tracking-[-0.026em] text-foreground mb-5 md:mb-6 text-[clamp(2.25rem,8vw,4.375rem)]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
          Stop explaining<br />your idea to devs<br /><em className="not-italic italic font-light text-primary">who don't ship.</em>
        </motion.h1>

        <motion.p className="text-[1rem] md:text-[1.125rem] leading-[1.72] text-muted-foreground max-w-[430px] mb-8 md:mb-10" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}>
          <strong className="text-foreground font-semibold">Kunamix</strong> takes your idea from spec to working product in 6–8 weeks — with weekly demos, milestone payments, and zero surprise billing. 50+ products shipped. 100% on time. You see working software every Friday or that sprint is free.
        </motion.p>

        <motion.div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 mb-8 md:mb-10" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <Button onClick={() => navigate("/contact")} className="bg-primary text-white hover:bg-primary-dark shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200 font-semibold px-5 h-10 gap-2 text-[0.875rem] justify-center cursor-pointer">
            Get a Free Technical Review <ArrowRight className="w-4 h-4 shrink-0" />
          </Button>
          <Link to="/portfolio" className="text-[0.875rem] font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors px-2 text-center">
            View Our Work
          </Link>
        </motion.div>

        <motion.ul className="flex flex-col gap-3" aria-label="Key guarantees" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}>
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-[0.75rem] text-[0.9375rem] sm:text-[1rem] font-medium text-foreground">
              <CheckIcon /> <span className="leading-snug">{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div className="flex flex-col gap-[1.125rem] w-full md2:max-w-[520px]" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}>
        <div className="grid grid-cols-2 rounded-[14px] overflow-hidden border border-border" style={{ gap: "1px", background: "hsl(var(--border))" }}>
          {METRICS.map(({ value, label, accent }) => (
            <div key={label} className="bg-card hover:bg-muted transition-colors duration-150 flex flex-col gap-[0.2rem] px-4 sm:px-6 py-5 sm:py-7">
              <span className={["font-display font-bold leading-none tracking-[-0.03em]", "text-[clamp(1.75rem,5vw,2.375rem)]", accent ? "text-primary" : "text-foreground"].join(" ")}>{value}</span>
              <span className="font-mono text-[0.5875rem] xs:text-[0.625rem] text-muted-foreground tracking-[0.07em] uppercase">{label}</span>
            </div>
          ))}
        </div>

        <div className="project-bar-line relative bg-dark-bg rounded-xl flex items-center justify-between gap-3 px-4 sm:px-6 py-4 sm:py-5 overflow-hidden group cursor-pointer" onClick={() => navigate("/portfolio")} role="button" tabIndex={0} aria-label="View portfolio" onKeyDown={(e) => e.key === "Enter" && navigate("/portfolio")}>
          <div className="flex flex-col gap-[0.2rem] min-w-0">
            <span className="font-mono text-[0.5875rem] text-white/30 tracking-[0.1em] uppercase">Latest Project</span>
            <span className="text-[0.875rem] sm:text-[0.9375rem] font-semibold text-white tracking-[-0.01em] truncate">SaaS Fintech Dashboard</span>
            <div className="flex gap-[0.3rem] mt-[0.375rem] flex-wrap">
              {["React", "Node.js", "AWS"].map((t) => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="w-[34px] h-[34px] shrink-0 rounded-lg border border-white/10 flex items-center justify-center text-white/35 group-hover:border-primary/40 group-hover:text-primary transition-all duration-150">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2.5 10.5l8-8M4 2.5h6v6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;