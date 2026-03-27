import { motion } from "motion/react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { TERMS_SECTIONS } from "@/data/termsAndConditions";

// Smart parser: If a sentence starts with "Keyword: ", it bolds the keyword.
const formatLegalText = (text: string) => {
  const colonIndex = text.indexOf(":");
  // Only bold if the colon appears early in the sentence (like a title)
  if (colonIndex !== -1 && colonIndex < 35) {
    const title = text.substring(0, colonIndex + 1);
    const rest = text.substring(colonIndex + 1);
    return (
      <>
        <strong className="text-foreground font-semibold">{title}</strong>
        {rest}
      </>
    );
  }
  return text;
};

const TermsContent = () => {
  return (
    <section className="pb-20 md:pb-32 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[800px] mx-auto">
      {/* Date */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[0.875rem] text-muted-foreground text-center mb-10 font-mono tracking-tight"
      >
        Last Updated: January 30, 2026
      </motion.p>

      {/* Notice Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-muted/30 border border-border rounded-[14px] p-6 sm:p-8 mb-12 flex flex-col sm:flex-row gap-5 items-start"
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-[1.125rem] font-display font-bold text-foreground mb-2 leading-tight">
            Important Notice
          </h3>
          <p className="text-[0.9375rem] text-muted-foreground leading-[1.6]">
            These Terms and Conditions constitute a legally binding agreement
            between you and Kunamix Digital Solutions regarding your use of our
            services. By engaging our services, you acknowledge that you have
            read, understood, and agree to be bound by these terms. If you are
            entering into this agreement on behalf of a company or other legal
            entity, you represent that you have the authority to bind such
            entity to these terms.
          </p>
        </div>
      </motion.div>

      {/* Terms Sections */}
      <div className="flex flex-col gap-8">
        {TERMS_SECTIONS.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-card rounded-[14px] border border-border p-6 sm:p-8 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h2 className="text-[1.25rem] font-display font-bold text-foreground leading-tight tracking-[-0.01em]">
                  {section.title}
                </h2>
              </div>

              <div className="flex flex-col gap-4 sm:pl-14">
                {section.content.map((paragraph, pIndex) => (
                  <div key={pIndex} className="flex gap-3 items-start">
                    {/* Legal Clause Bullet Point */}
                    <div className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                    <p className="text-[0.9375rem] text-muted-foreground leading-[1.65]">
                      {formatLegalText(paragraph)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Acceptance Bottom Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 bg-card border border-border rounded-[14px] p-8 text-center flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-[1.25rem] font-display font-bold text-foreground mb-3 leading-tight tracking-[-0.01em]">
          Acceptance of Terms
        </h3>
        <p className="text-[0.9375rem] text-muted-foreground leading-[1.6] max-w-xl">
          By using Kunamix Digital Solutions services, you acknowledge that you
          have read and understood these Terms and Conditions and agree to be
          bound by them. If you do not agree to these terms, please do not use
          our services.
        </p>
      </motion.div>
    </section>
  );
};

export default TermsContent;
