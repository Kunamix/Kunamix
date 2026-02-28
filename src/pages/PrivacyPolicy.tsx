import { motion } from "motion/react";
import { Shield, Lock, Eye, UserCheck, Mail, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { sections } from "@/constants/privacyPolicy";
import { useEffect } from "react";
import useSEOMeta from "@/hooks/useSEOMeta";

const PrivacyPolicy = () => {
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

  const dataProtectionPrinciples = [
    {
      icon: Lock,
      title: "Security",
      description:
        "We protect your data with industry-standard encryption and security measures",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We are open about how we collect, use, and share your information",
    },
    {
      icon: UserCheck,
      title: "Control",
      description:
        "You have control over your personal data and privacy preferences",
    },
    {
      icon: Shield,
      title: "Compliance",
      description:
        "We comply with all applicable data protection laws and regulations",
    },
  ];

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
          title="Privacy Policy"
          subtitle="We are committed to protecting your privacy and handling your data with care and transparency."
          badge="🛡️ Your Privacy Matters"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Last Updated */}
            <p className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: January 30, 2026
            </p>

            {/* Data Protection Principles */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-center mb-8">
                Our Commitment to Your Privacy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dataProtectionPrinciples.map((principle, index) => {
                  const IconComponent = principle.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">
                            {principle.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {principle.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Privacy Policy Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => {
                const SectionIcon = section.icon;
                return (
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
                            <SectionIcon className="w-6 h-6 text-white" />
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
                );
              })}
            </div>

            {/* Data Rights Summary */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-primary">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      Your Data, Your Rights
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6">
                      You have the right to access, correct, delete, or export
                      your personal data at any time. You can also withdraw
                      consent for data processing or opt-out of marketing
                      communications.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-primary/20">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm">Access Your Data</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-primary/20">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm">Request Deletion</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-primary/20">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm">Opt-Out Anytime</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">
                      Questions About Your Privacy?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Our Data Protection team is here to help. Contact us for
                      any privacy-related inquiries.
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary font-medium">
                      <Mail className="w-4 h-4" />
                      <a
                        href="mailto:contact@kunamix.com"
                        className="hover:underline"
                      >
                        contact@kunamix.com
                      </a>
                    </div>
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

export default PrivacyPolicy;
