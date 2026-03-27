import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useSEOMeta from "@/hooks/useSEOMeta";

// Modular Components
import TermsHero from "@/components/legal/TermsHero";
import TermsContent from "@/components/legal/TermsContent";

const TermsAndConditions = () => {
  // Keep existing SEO meta tags
  useSEOMeta({
    title: "Terms & Conditions | Kunamix - Legal",
    description:
      "Read the Kunamix terms and conditions. Please review these terms carefully before using our services.",
    canonical: "https://kunamix.com/terms-conditions",
    ogTitle: "Terms & Conditions | Kunamix Digital Solutions",
    ogDescription:
      "Please read these terms and conditions carefully before using our services.",
    ogUrl: "https://kunamix.com/terms-conditions",
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
        <TermsHero />
        <TermsContent />
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default TermsAndConditions;
