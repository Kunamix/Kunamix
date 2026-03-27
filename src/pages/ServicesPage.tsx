import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useSEOMeta from "@/hooks/useSEOMeta";

// Modular Services Components
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import ServicesMetrics from "@/components/services/ServicesMetrics";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesFAQ from "@/components/services/ServicesFAQ";

const ServicesPage = () => {
  // Keep existing SEO meta tags
  useSEOMeta({
    title: "Our Services | Kunamix - Web, Mobile & MVP Development",
    description:
      "Explore our comprehensive digital services including web development, mobile apps, UI/UX design, MVP development, and enterprise solutions. Get started today.",
    canonical: "https://kunamix.com/services",
    ogTitle: "Services | Kunamix Digital Solutions",
    ogDescription:
      "Full-stack web development, mobile apps, UI/UX design, and MVP development services tailored to your business needs.",
    ogUrl: "https://kunamix.com/services",
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen max-w-screen overflow-x-hidden bg-background"
    >
      <Header />

      <main id="main-content">
        <ServicesHero />
        <ServicesMetrics />
        {/* <ServicesTestimonials /> */}
        <ServicesProcess />
        {/* Risk Reversal Block */}
        <section className="px-4 xs:px-5 sm:px-6 md:px-5 pb-16 md:pb-24 max-w-[800px] mx-auto">
          <div className="bg-muted border border-border rounded-[18px] p-8 md:p-10">
            <h2 className="font-display font-bold text-[1.5rem] md:text-[1.75rem] text-foreground mb-4">
              How you're protected
            </h2>
            <p className="text-[1rem] text-muted-foreground mb-6">
              We know the biggest fear is paying for software that never ships,
              or working with a team that disappears mid-project. Here's how
              that can't happen with Kunamix:
            </p>
            <ul className="space-y-4 text-[0.9375rem] text-foreground">
              <li className="flex gap-3">
                <strong className="text-primary">→</strong>{" "}
                <span>
                  <strong>Milestone payments</strong> — you pay in stages, not
                  upfront. Each stage requires your approval.
                </span>
              </li>
              <li className="flex gap-3">
                <strong className="text-primary">→</strong>{" "}
                <span>
                  <strong>Weekly demos</strong> — you see working software every
                  Friday. No updates means no payment.
                </span>
              </li>
              <li className="flex gap-3">
                <strong className="text-primary">→</strong>{" "}
                <span>
                  <strong>Written scope document</strong> — everything we will
                  build (and won't build) is agreed in writing before we start.
                </span>
              </li>
              <li className="flex gap-3">
                <strong className="text-primary">→</strong>{" "}
                <span>
                  <strong>Full ownership on day one</strong> — the GitHub repo
                  is under your account from the first commit.
                </span>
              </li>
            </ul>
          </div>
        </section>
        <ServicesFAQ />
        <ServicesGrid />
        <ServicesCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default ServicesPage;
