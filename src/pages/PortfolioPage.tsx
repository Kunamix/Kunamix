import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import PageHero from "@/components/PageHero";
import { useEffect } from "react";
import useSEOMeta from "@/hooks/useSEOMeta";

const PortfolioPage = () => {
  // Set SEO meta tags
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <main>
        <PageHero
          title="Our Portfolio"
          subtitle="Explore our collection of successful projects — real solutions delivering real impact for our clients."
          badge="✨ Featured Work"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        />
        <Portfolio />
      </main>
      <Footer />
    </motion.div>
  );
};

export default PortfolioPage;
