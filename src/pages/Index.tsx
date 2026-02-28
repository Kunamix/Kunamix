import { motion } from "motion/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCorousel";
import Testimonials from "@/components/Testimonial";
import Blog from "@/components/Blog";

const Index = () => {
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
