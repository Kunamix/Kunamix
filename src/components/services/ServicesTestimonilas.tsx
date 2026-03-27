import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Kunamix delivered our MVP in under 4 weeks. The quality was production-ready from day one — no corner-cutting. Exactly what an early-stage startup needs.",
    name: "Alex Morgan",
    role: "Founder, Stackly",
    country: "🇺🇸 United States",
    avatar: "AM",
  },
  {
    quote:
      "We'd worked with three agencies before Kunamix. None of them communicated like this team does. Every update was clear, every deadline was met.",
    name: "Priya Nair",
    role: "Product Lead, Finlytic",
    country: "🇸🇬 Singapore",
    avatar: "PN",
  },
  {
    quote:
      "The mobile app they built for us has a 4.8-star rating on the App Store. Our users keep commenting on how polished it feels. Highly recommend.",
    name: "James Okafor",
    role: "CEO, Tracktile",
    country: "🇬🇧 United Kingdom",
    avatar: "JO",
  },
];

const ServicesTestimonials = () => {
  return (
    <section className="px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto pb-16 md:pb-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10"
      >
        <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase mb-3 block">
          Client Stories
        </span>
        <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-[-0.02em] text-foreground">
          Don't take our word for it
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col bg-card border border-border rounded-[14px] p-6 sm:p-7 gap-5"
          >
            <Quote className="w-6 h-6 text-primary/40 shrink-0" />
            <p className="text-[0.9375rem] text-foreground leading-[1.65] flex-grow">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 pt-1 border-t border-border">
              {/* Avatar initials */}
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[0.75rem] font-bold shrink-0">
                {t.avatar}
              </div>
              <div className="min-w-0">
                <p className="text-[0.875rem] font-semibold text-foreground leading-tight truncate">
                  {t.name}
                </p>
                <p className="text-[0.75rem] text-muted-foreground truncate">
                  {t.role} · {t.country}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesTestimonials;
