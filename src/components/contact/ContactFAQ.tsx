import { motion } from "motion/react";

const FAQS = [
  {
    q: "How quickly can you start?",
    a: "We typically begin new projects within 1–2 weeks of scoping. Rush starts are possible depending on current availability.",
  },
  {
    q: "What tech stack do you work with?",
    a: "Primarily TypeScript, React, Next.js, Node.js, and Go — but we adapt to your existing stack when needed.",
  },
  {
    q: "Do you offer fixed-price projects?",
    a: "Yes. After a scoping call we provide a detailed fixed-price proposal with clear milestones and deliverables.",
  },
  {
    q: "What happens after I submit the form?",
    a: "You'll hear from us within 24 hours. We'll schedule a free 30-min discovery call to understand your project.",
  },
  {
    q: "What happens if I'm not happy with the work?",
    a: "We don't move to the next milestone until you've approved the current one. If something isn't right, we fix it before we ask for the next payment. That's how milestone-based development works.",
  },
] as const;

const ContactFAQ = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-16 pb-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-[1.25rem] font-display font-bold text-foreground tracking-[-0.01em]">
          Common questions
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FAQS.map((faq, i) => (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-card rounded-[14px] border border-border p-5 hover:border-primary/30 transition-colors duration-300"
          >
            <p className="text-[0.9375rem] font-semibold text-foreground mb-2">
              {faq.q}
            </p>
            <p className="text-[0.875rem] text-muted-foreground leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ContactFAQ;
