import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import PageHero from "@/components/PageHero";
import { useEffect } from "react";
import useSEOMeta from "@/hooks/useSEOMeta";

const ServicesPage = () => {
  // Set SEO meta tags
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
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <main>
        <PageHero
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your business needs — from web development to brand design."
          badge="🚀 What We Offer"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
        <Services />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ServicesPage;
