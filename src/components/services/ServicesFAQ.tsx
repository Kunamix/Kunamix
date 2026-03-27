"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Will there be a language or communication barrier?",
    answer:
      "No. Our team is fluent in English and we communicate clearly in writing and on calls. We use shared project channels (Slack or WhatsApp), provide weekly written updates, and all deliverables are documented in English. Most of our clients are US, UK, and EU based.",
  },
  {
    question: "What does the project cost? Do you have fixed prices?",
    answer:
      "Every project is scoped individually, but we're always transparent upfront. Simple websites start around $1,500. Web and mobile apps typically range from $5,000–$25,000 depending on complexity. You'll receive a fixed-price proposal before any work begins — no surprises.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A landing site or branding project usually takes 1–2 weeks. A full web or mobile app MVP typically takes 3–6 weeks. We'll give you a precise timeline in the proposal, broken down by milestone so you can track progress.",
  },
  {
    question: "Do I need to be technical to work with you?",
    answer:
      "Not at all. Many of our clients are non-technical founders. We translate your business goals into technical requirements — you just need to know what you want to build and who it's for. We handle the rest.",
  },
  {
    question: "How do I know you won't take my money and disappear?",
    answer:
      "You don't pay in a lump sum. Ever. We work in milestone payments — you pay for a sprint, we deliver working software, you review it live with us, then we continue. If we don't deliver, you don't pay. Simple.",
  },
  {
    question: "I've been burned by developers before. Why is this different?",
    answer:
      "Most dev teams optimize for their own workflow. We optimize for your launch date. We start every project with a written scope document — what we will build, what we won't, what it costs, and exactly when it ships. You approve it before we write a single line of code.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[0.9375rem] font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
          {faq.question}
        </span>
        <span className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-primary/10">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-primary cursor-pointer" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[0.9375rem] text-muted-foreground leading-[1.7] pb-5 pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto pb-16 md:pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase mb-3 block">
            Common Questions
          </span>
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.02em] text-foreground">
            Questions we get asked a lot
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-border rounded-[14px] px-6 sm:px-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
