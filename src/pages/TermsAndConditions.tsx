import { motion } from "motion/react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { sections } from "@/constants/termsAndConditions";
import { useEffect } from "react";
import useSEOMeta from "@/hooks/useSEOMeta";

const TermsAndConditions = () => {
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
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <main>
        <PageHero
          title="Terms & Conditions"
          subtitle="Please read these terms and conditions carefully before using our services."
          badge="⚖️ Legal Document"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Terms & Conditions" },
          ]}
        />

        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Last Updated */}
            <p className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: January 30, 2026
            </p>

            {/* Introduction Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="border-border/50 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <AlertCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        Important Notice
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These Terms and Conditions constitute a legally binding
                        agreement between you and Kunamix Digital Solutions
                        regarding your use of our services. By engaging our
                        services, you acknowledge that you have read,
                        understood, and agree to be bound by these terms. If you
                        are entering into this agreement on behalf of a company
                        or other legal entity, you represent that you have the
                        authority to bind such entity to these terms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${section.gradient} flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground pt-2">
                          {section.title}
                        </h2>
                      </div>

                      <div className="space-y-4 ml-0 md:ml-16">
                        {section.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-muted-foreground leading-relaxed text-[15px]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Acceptance Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-primary">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      Acceptance of Terms
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                      By using Kunamix Digital Solutions services, you
                      acknowledge that you have read and understood these Terms
                      and Conditions and agree to be bound by them. If you do
                      not agree to these terms, please do not use our services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default TermsAndConditions;
