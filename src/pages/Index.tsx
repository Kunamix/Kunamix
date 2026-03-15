import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCorousel";
import Testimonials from "@/components/Testimonial";
import Blog from "@/components/Blog";
import useSEOMeta from "@/hooks/useSEOMeta";

const Index = () => {
  useSEOMeta({
    title:
      "Kunamix Digital Solutions | Custom Software Development Company India",
    description:
      "Kunamix builds scalable MVPs, web apps, mobile apps, and SaaS products for startups and businesses globally. React, Next.js, Node.js, Flutter, AWS. Book a free consultation.",
    canonical: "https://kunamix.com",
    ogTitle:
      "Kunamix Digital Solutions | Custom Software Development Company India",
    ogDescription:
      "Scalable MVPs, web apps, mobile apps and SaaS products. Built with React, Node.js, Flutter and AWS. Serving startups and businesses globally.",
    ogUrl: "https://kunamix.com",
    ogImage: "https://kunamix.com/org-image.png",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen max-w-screen bg-background"
    >
      <Header />
      <main>
        <HeroCarousel />
        <Hero />
        <Blog />
        <Testimonials />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;