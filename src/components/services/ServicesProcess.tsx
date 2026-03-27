import { motion } from "motion/react";
import { MessageSquare, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery call",
    description:
      "We spend 30 minutes understanding your goals, timeline, and budget. No pitch — just honest questions so we can tell you exactly what's possible.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Proposal & scope",
    description:
      "You get a clear written proposal within 48 hours: deliverables, milestones, fixed price. No vague estimates, no surprise invoices.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build & iterate",
    description:
      "Weekly check-ins, staging previews throughout, and a shared project channel so you always know what's happening. You're never left in the dark.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & handoff",
    description:
      "We deploy, test, and hand over full ownership — source code, credentials, documentation. Post-launch support included for 30 days.",
  },
];

const ServicesProcess = () => {
  return (
    <section className="px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto pb-16 md:pb-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase mb-3 block">
          How We Work
        </span>
        <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.02em] text-foreground mb-3">
          From your first message to your launch day — here's exactly what
          happens
        </h2>
        <p className="text-[0.9375rem] text-muted-foreground max-w-md mx-auto leading-[1.6]">
          A predictable, low-drama process so you always know what's happening
          with your project.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative">
        {/* Connector line — desktop only */}
        <div className="hidden lg:block absolute top-[2.75rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-border z-0" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col bg-card border border-border rounded-[14px] p-6 z-10"
            >
              {/* Icon + number */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center text-foreground shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[0.75rem] text-muted-foreground tracking-widest">
                  {step.number}
                </span>
              </div>

              <h3 className="text-[1rem] font-display font-bold text-foreground mb-2 leading-snug tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.65]">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesProcess;
