import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import PageHero from "@/components/PageHero";
import { useEffect } from "react";
import useSEOMeta from "@/hooks/useSEOMeta";

const AboutPage = () => {
  // Set SEO meta tags
  useSEOMeta({
    title: "About Us | Kunamix - Digital Solutions & MVP Development",
    description:
      "Learn about Kunamix - a results-driven digital agency specializing in MVP development, web applications, and enterprise-grade solutions. Meet our expert team.",
    canonical: "https://kunamix.com/about",
    ogTitle: "About Kunamix | Digital Solutions Agency",
    ogDescription:
      "Expert developers and designers delivering enterprise-grade digital solutions with rapid deployment and measurable results.",
    ogUrl: "https://kunamix.com/about",
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
          title="About Us"
          subtitle="A passionate team of developers and designers creating beautiful, functional digital solutions that make a real difference."
          badge="✨ Meet Kunamix Digital Solutions"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
        <About />
      </main>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
