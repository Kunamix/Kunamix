import { motion } from "motion/react";

const EXPERTISE_TAGS = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "UX/UI Design",
  "Responsive Design",
  "API Development",
  "Database Design",
  "Performance Optimization",
  "SEO Best Practices",
  "Git & Version Control",
  "Agile Methodology",
];

const Expertise = () => {
  return (
    // ADDED: pb-20 md:pb-28 to give it deep breathing room at the bottom
    <section className="bg-[#151313] py-20 md:pt-28 md:pb-28 px-4 xs:px-5 sm:px-6 md:px-5 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="flex-1 md:max-w-[540px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-primary shrink-0" />
              <span className="font-mono text-[0.625rem] font-medium text-primary tracking-[0.15em] uppercase">
                Technical Capabilities
              </span>
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-white leading-[1.05] tracking-[-0.02em] mb-4">
              The stack we use
              <br />
              <em className="font-light italic text-white/40">
                to build what you need.
              </em>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center"
        >
          <p className="text-[1rem] md:text-[1.125rem] text-white/50 leading-[1.6]">
            Modern tools, proven patterns — chosen for your project, not our
            comfort zone.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-[1280px] mx-auto mt-16 md:mt-20"
      >
        <div className="flex flex-wrap gap-3 md:gap-4">
          {EXPERTISE_TAGS.map((tag, index) => (
            <span
              key={index}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-[0.8125rem] md:text-[0.875rem] font-mono tracking-wide hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-mono text-[0.625rem] text-white/30 tracking-[0.05em] uppercase mt-8 md:mt-10">
          + custom tech choices made per-project. we pick the right tool, not
          the trendy one.
        </p>
      </motion.div>
    </section>
  );
};

export default Expertise;
