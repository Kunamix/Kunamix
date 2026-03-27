import { useEffect } from "react";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useSEOMeta from "@/hooks/useSEOMeta";

// Contact components
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactProofBar from "@/components/contact/ContactProofBar";
import ContactFAQ from "@/components/contact/ContactFAQ";

const ContactPage = () => {
  useSEOMeta({
    title: "Contact Us | Kunamix - Get In Touch",
    description:
      "Contact Kunamix for your digital project needs. Schedule a free consultation to discuss web development, mobile apps, MVP development, and more.",
    canonical: "https://kunamix.com/contact",
    ogTitle: "Contact Us | Kunamix Digital Solutions",
    ogDescription:
      "Get in touch with our team to discuss your project. Free consultation available for web, mobile, and MVP development.",
    ogUrl: "https://kunamix.com/contact",
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
        <ContactHero />

        <section className="pb-24 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[1280px] mx-auto">
          {/* Social proof bar */}
          <ContactProofBar />

          {/* Info + Form grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>

          {/* FAQ */}
          <ContactFAQ />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default ContactPage;
