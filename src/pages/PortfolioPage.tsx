import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useSEOMeta from "@/hooks/useSEOMeta";

// Modular Portfolio Components
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

const PortfolioPage = () => {
  // Keep existing comprehensive SEO setup
  useSEOMeta({
    title: "Portfolio | Kunamix - Our Work & Case Studies",
    description:
      "Explore our portfolio of successful projects including web applications, mobile apps, MVPs, and enterprise solutions. See the quality of our work.",
    canonical: "https://kunamix.com/portfolio",
    ogTitle: "Portfolio | Kunamix Digital Solutions",
    ogDescription:
      "View our collection of successful digital projects, case studies, and client work showcasing our expertise.",
    ogUrl: "https://kunamix.com/portfolio",
  });

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
        <PortfolioHero />
        <PortfolioGrid />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-5 pb-16 text-center">
          <p className="text-[0.9375rem] md:text-[1rem] text-muted-foreground bg-muted/50 border border-border rounded-[12px] p-6 max-w-2xl mx-auto inline-block">
            <strong className="text-foreground">
              Several of our strongest projects are under NDA
            </strong>{" "}
            — including a Series A fintech SaaS, a US-based healthcare platform,
            and a UK marketplace. Ask us about them on a call.
          </p>
        </div>
        <PortfolioCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default PortfolioPage;
