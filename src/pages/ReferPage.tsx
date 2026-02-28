import { motion } from "motion/react";
import {
  Gift,
  Users,
  CheckCircle2,
  ArrowRight,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { benefits, howItWorks, services } from "@/constants/refer";
import { useReferForm } from "@/hooks/useContactFrom";
import useSEOMeta from "@/hooks/useSEOMeta";

const ReferralProgram = () => {
  const { sendReferForm, loading, error } = useReferForm();

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

  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientCompany: "",
    projectDetails: "",
    estimatedBudget: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await sendReferForm(formData);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          yourName: "",
          yourEmail: "",
          yourPhone: "",
          clientName: "",
          clientEmail: "",
          clientPhone: "",
          clientCompany: "",
          projectDetails: "",
          estimatedBudget: "",
        });
      }, 3000);
    } catch (err) {
      console.error("Error submitting referral:", err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          title="Refer & Earn"
          subtitle="Know someone who needs exceptional digital solutions? Refer them to us and earn up to 20% commission for every successful project!"
          badge="🎁 Referral Program"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Refer & Earn" }]}
        />

        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Benefits Grid */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* How It Works */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-center mb-10">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-4 shadow-primary">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full">
                        <ArrowRight className="w-6 h-6 text-primary/30 mx-auto -ml-3" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <Card className="border-border/50 bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Services We Offer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/30"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Referral Form */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">
                      Submit a Referral
                    </h2>
                    <p className="text-muted-foreground">
                      Fill in the details below and we'll take care of the rest
                    </p>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-center"
                    >
                      {error}
                    </motion.div>
                  )}

                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your referral has been submitted successfully. We'll
                        reach out to them soon!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Your Information */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <User className="w-5 h-5 text-primary" />
                          Your Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Your Name *
                            </label>
                            <Input
                              name="yourName"
                              value={formData.yourName}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                              disabled={loading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Your Email *
                            </label>
                            <Input
                              type="email"
                              name="yourEmail"
                              value={formData.yourEmail}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                              disabled={loading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Your Phone *
                            </label>
                            <Input
                              type="tel"
                              name="yourPhone"
                              value={formData.yourPhone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              required
                              disabled={loading}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Client Information */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          Client Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Client Name *
                            </label>
                            <Input
                              name="clientName"
                              value={formData.clientName}
                              onChange={handleChange}
                              placeholder="Jane Smith"
                              required
                              disabled={loading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Client Email *
                            </label>
                            <Input
                              type="email"
                              name="clientEmail"
                              value={formData.clientEmail}
                              onChange={handleChange}
                              placeholder="jane@company.com"
                              required
                              disabled={loading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Client Phone *
                            </label>
                            <Input
                              type="tel"
                              name="clientPhone"
                              value={formData.clientPhone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              required
                              disabled={loading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Company Name
                            </label>
                            <Input
                              name="clientCompany"
                              value={formData.clientCompany}
                              onChange={handleChange}
                              placeholder="Acme Corp"
                              disabled={loading}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <MessageSquare className="w-5 h-5 text-primary" />
                          Project Details
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Project Description *
                            </label>
                            <Textarea
                              name="projectDetails"
                              value={formData.projectDetails}
                              onChange={handleChange}
                              placeholder="Describe the project requirements, timeline, and any specific needs..."
                              rows={4}
                              required
                              disabled={loading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Estimated Budget *
                            </label>
                            <select
                              name="estimatedBudget"
                              value={formData.estimatedBudget}
                              onChange={handleChange}
                              className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground disabled:opacity-50"
                              required
                              disabled={loading}
                            >
                              <option value="">Select budget range</option>
                              <option value="under-50k">
                                Under ₹50,000 (15% commission)
                              </option>
                              <option value="50k-1l">
                                ₹50,000 - ₹1,00,000 (15% commission)
                              </option>
                              <option value="1l-3l">
                                ₹1,00,000 - ₹3,00,000 (20% commission)
                              </option>
                              <option value="3l-5l">
                                ₹3,00,000 - ₹5,00,000 (20% commission)
                              </option>
                              <option value="5l-plus">
                                ₹5,00,000+ (20% commission)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-center pt-4">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="
                          bg-gradient-primary 
                          text-primary-foreground
                          hover:opacity-90
                          hover:shadow-primary 
                          hover:scale-105
                          disabled:opacity-50
                          disabled:cursor-not-allowed
                          transition-all 
                          duration-300
                          px-8 
                          py-6 
                          text-lg
                          cursor-pointer
                        "
                        >
                          <Gift className="w-5 h-5 mr-2" />
                          {loading ? "Submitting..." : "Submit Referral"}
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Terms & Conditions */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 text-center text-sm text-muted-foreground"
            >
              <p className="mb-2">
                * Commission rates: 20% for projects ₹1L and above, 15% for
                projects under ₹1L
              </p>
              <p>
                ** Payouts are processed within 7 business days after receiving
                the project payment from the client
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default ReferralProgram;
