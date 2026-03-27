// components/home/Services.tsx
import { motion } from "motion/react";
import {
  Monitor,
  LayoutGrid,
  Smartphone,
  Package,
  FileText,
  Clock,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Service {
  icon: React.ReactNode;
  name: string;
  desc: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    icon: <Monitor size={18} />,
    name: "MVP Development",
    desc: "Your idea → working product → real users. We scope ruthlessly, cut what isn't needed in v1, and ship something real in 6–8 weeks.",
    tags: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    icon: <LayoutGrid size={18} />,
    name: "Web App Development",
    desc: "Not just a pretty frontend. A full-stack web app with proper architecture built to handle real traffic from day one.",
    tags: ["Next.js", "TypeScript", "GraphQL", "Redis"],
  },
  {
    icon: <Smartphone size={18} />,
    name: "Mobile App Development",
    desc: "Cross-platform iOS and Android that doesn't feel like a compromise. Native performance, polished UX, App Store ready.",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
  },
  {
    icon: <Package size={18} />,
    name: "SaaS Product Development",
    desc: "Multi-tenant SaaS with auth, billing, dashboards, and infrastructure to grow from 10 to 10,000 users without rewrites.",
    tags: ["Stripe", "Clerk", "Prisma", "Docker"],
  },
  {
    icon: <FileText size={18} />,
    name: "UI/UX Design",
    desc: "Design that converts. We research your users, prototype interactions, and deliver Figma files developers can actually build from.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    icon: <Clock size={18} />,
    name: "White Label Development",
    desc: "Need a technical partner behind the scenes? We build and maintain products under your brand. Silent execution, full reliability.",
    tags: ["White Label", "NDA Signed", "Full Stack"],
  },
];

const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="px-4 xs:px-5 sm:px-6 md:px-5 py-20 md:py-24 max-w-[1280px] mx-auto"
      id="services"
    >
      {/* Header */}
      <div className={`reveal ${visible ? "visible" : ""}`}>
        <div className="section-label">
          <span className="section-label-line" />
          <span className="section-label-tag">What we build</span>
        </div>
        <h2 className="section-title">
          From idea to deployed
          <br />
          <em>product</em>
        </h2>
      </div>

      {/* Grid — 1 col → 2 col (sm) → 3 col (lg) */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   rounded-[14px] overflow-hidden border border-border"
        style={{ gap: "1px", background: "hsl(var(--border))" }}
      >
        {SERVICES.map((svc, i) => (
          <motion.div
            key={svc.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            className="svc-card-accent relative bg-card hover:bg-background
                       flex flex-col p-6 sm:p-8 overflow-hidden
                       transition-colors duration-200"
          >
            {/* Icon box */}
            <div
              className="w-[38px] h-[38px] rounded-[9px] border border-border
                         bg-background flex items-center justify-center
                         mb-5 text-foreground shrink-0
                         transition-colors duration-200"
            >
              {svc.icon}
            </div>

            <h3
              className="font-display text-[1.0625rem] font-semibold
                         tracking-[-0.015em] text-foreground mb-[0.625rem]"
            >
              {svc.name}
            </h3>

            <p className="text-[0.875rem] leading-[1.65] text-muted-foreground flex-1 mb-6">
              {svc.desc}
            </p>

            <div className="flex flex-wrap gap-[0.3rem]">
              {svc.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
