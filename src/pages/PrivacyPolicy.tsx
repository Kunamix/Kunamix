import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useSEOMeta from "@/hooks/useSEOMeta";

// Modular Components
import PrivacyHero from "@/components/legal/PrivacyHero";
import PrivacyContent from "@/components/legal/PrivacyContent";

const PrivacyPolicy = () => {
  // Keep existing SEO meta tags
  useSEOMeta({
    title: "Privacy Policy | Kunamix - Your Privacy Matters",
    description:
      "Read the Kunamix privacy policy. We are committed to protecting your privacy and handling your data with care and transparency.",
    canonical: "https://kunamix.com/privacy-policy",
    ogTitle: "Privacy Policy | Kunamix Digital Solutions",
    ogDescription:
      "We are committed to protecting your privacy and handling your data with care and transparency.",
    ogUrl: "https://kunamix.com/privacy-policy",
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
        <PrivacyHero />
        <PrivacyContent />
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default PrivacyPolicy;
