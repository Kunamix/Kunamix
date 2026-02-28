import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import { useEffect } from "react";
import useSEOMeta from "@/hooks/useSEOMeta";

const ContactPage = () => {
  // Set SEO meta tags
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
          title="Get In Touch"
          subtitle="Have a project in mind? We'd love to hear about it. Reach out and let's build something amazing together."
          badge="💬 Let's Talk"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
