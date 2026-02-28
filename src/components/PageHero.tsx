import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumb?: { label: string; href?: string }[];
}

const PageHero = ({ title, subtitle, badge, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-28 pb-16 lg:pt-36 lg:pb-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mb-6"
          >
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                {item.href ? (
                  <Link
                    to={item.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">
                    {item.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-5"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <p className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
                {badge}
              </p>
            </div>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-5"
        >
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <div className="w-24 h-1 rounded-full bg-gradient-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
