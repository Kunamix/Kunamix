import { motion } from "motion/react";
import { Shield, CheckCircle2, Mail } from "lucide-react";
import { PRIVACY_PRINCIPLES, PRIVACY_SECTIONS } from "@/data/privacyPolicy";

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

const PrivacyContent = () => {
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

      {/* Principles Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
      >
        {PRIVACY_PRINCIPLES.map((principle, index) => {
          const IconComponent = principle.icon;
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-[14px] p-6 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 mb-4">
                <IconComponent className="w-4 h-4" />
              </div>
              <h3 className="text-[1.125rem] font-display font-bold text-foreground mb-2 leading-tight tracking-[-0.01em]">
                {principle.title}
              </h3>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.6]">
                {principle.description}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* Privacy Policy Sections */}
      <div className="flex flex-col gap-8 mb-12">
        {PRIVACY_SECTIONS.map((section, index) => {
          const SectionIcon = section.icon;
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
                  <SectionIcon className="w-4 h-4" />
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

      {/* Data Rights Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-muted/30 border border-border rounded-[14px] p-8 text-center flex flex-col items-center mb-8"
      >
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Shield className="w-6 h-6" />
        </div>
        <h3 className="text-[1.25rem] font-display font-bold text-foreground mb-3 leading-tight tracking-[-0.01em]">
          Your Data, Your Rights
        </h3>
        <p className="text-[0.9375rem] text-muted-foreground leading-[1.6] max-w-xl mb-6">
          You have the right to access, correct, delete, or export your personal
          data at any time. You can also withdraw consent for data processing or
          opt-out of marketing communications.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["Access Your Data", "Request Deletion", "Opt-Out Anytime"].map(
            (badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-[0.8125rem] font-medium text-foreground"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                {badge}
              </span>
            ),
          )}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card border border-border rounded-[14px] p-8 text-center flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground mb-4">
          <Mail className="w-5 h-5" />
        </div>
        <h3 className="text-[1.25rem] font-display font-bold text-foreground mb-2 leading-tight tracking-[-0.01em]">
          Questions About Your Privacy?
        </h3>
        <p className="text-[0.9375rem] text-muted-foreground leading-[1.6] mb-5">
          Our Data Protection team is here to help. Contact us for any
          privacy-related inquiries.
        </p>
        <a
          href="mailto:contact@kunamix.com"
          className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          <Mail className="w-4 h-4" />
          contact@kunamix.com
        </a>
      </motion.div>
    </section>
  );
};

export default PrivacyContent;
