import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useSEOMeta from "@/hooks/useSEOMeta";

// Modular Refer Components
import ReferHero from "@/components/refer/ReferHero";
import ReferBenefits from "@/components/refer/ReferBenefits";
import ReferHowItWorks from "@/components/refer/ReferHowItWorks";
import ReferForm from "@/components/refer/ReferForm";

const ReferralProgram = () => {
  useSEOMeta({
    title: "Refer & Earn | Kunamix - Earn Up to 20% Commission",
    description:
      "Refer clients to Kunamix and earn generous commission rewards. Up to 20% for every successful project. Join our referral program today.",
    canonical: "https://kunamix.com/refer",
    ogTitle: "Refer & Earn | Kunamix Digital Solutions",
    ogDescription:
      "Know someone who needs digital solutions? Refer them and earn up to 20% commission on every successful project.",
    ogUrl: "https://kunamix.com/refer",
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
        <ReferHero />
        <ReferBenefits />
        <ReferHowItWorks />
        <ReferForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default ReferralProgram;
