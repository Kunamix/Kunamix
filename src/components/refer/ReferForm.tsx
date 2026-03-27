import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Gift } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useReferForm } from "@/hooks/useContactFrom";

const ReferForm = () => {
  const { sendReferForm, loading, error } = useReferForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    yourName: "", yourEmail: "", yourPhone: "",
    clientName: "", clientEmail: "", clientPhone: "", clientCompany: "",
    projectDetails: "", estimatedBudget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendReferForm(formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          yourName: "", yourEmail: "", yourPhone: "",
          clientName: "", clientEmail: "", clientPhone: "", clientCompany: "",
          projectDetails: "", estimatedBudget: "",
        });
      }, 4000);
    } catch (err) {
      console.error("Error submitting referral:", err);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 xs:px-5 sm:px-6 md:px-5 max-w-[800px] mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card rounded-[20px] border border-border p-6 sm:p-8 md:p-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-[1.5rem] font-display font-bold text-foreground leading-tight tracking-[-0.01em] mb-2">
            Submit a Referral
          </h2>
          <p className="text-[0.9375rem] text-muted-foreground">
            Fill in the details below and we'll take care of the rest.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-center text-sm font-medium">
            {error}
          </div>
        )}

        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-10"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-[1.25rem] font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-[0.9375rem] text-muted-foreground max-w-sm mx-auto">
              Your referral has been submitted successfully. We will reach out to them within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            {/* 1. Your Information */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[1rem] font-bold text-foreground border-b border-border pb-2">1. Your Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Your Name *</Label>
                  <Input name="yourName" value={formData.yourName} onChange={handleChange} required disabled={loading} className="h-11 bg-background border-border text-[0.875rem]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Your Email *</Label>
                  <Input type="email" name="yourEmail" value={formData.yourEmail} onChange={handleChange} required disabled={loading} className="h-11 bg-background border-border text-[0.875rem]" />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Your Phone *</Label>
                  <Input type="tel" name="yourPhone" value={formData.yourPhone} onChange={handleChange} required disabled={loading} className="h-11 bg-background border-border text-[0.875rem]" />
                </div>
              </div>
            </div>

            {/* 2. Client Information */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[1rem] font-bold text-foreground border-b border-border pb-2">2. Client Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Client Name *</Label>
                  <Input name="clientName" value={formData.clientName} onChange={handleChange} required disabled={loading} className="h-11 bg-background border-border text-[0.875rem]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Company Name</Label>
                  <Input name="clientCompany" value={formData.clientCompany} onChange={handleChange} disabled={loading} className="h-11 bg-background border-border text-[0.875rem]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Client Email *</Label>
                  <Input type="email" name="clientEmail" value={formData.clientEmail} onChange={handleChange} required disabled={loading} className="h-11 bg-background border-border text-[0.875rem]" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Client Phone *</Label>
                  <Input type="tel" name="clientPhone" value={formData.clientPhone} onChange={handleChange} required disabled={loading} className="h-11 bg-background border-border text-[0.875rem]" />
                </div>
              </div>
            </div>

            {/* 3. Project Details */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[1rem] font-bold text-foreground border-b border-border pb-2">3. Project Info</h3>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Project Description *</Label>
                  <Textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} required disabled={loading} rows={4} className="bg-background border-border text-[0.875rem] resize-none pt-3" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-[0.8125rem] font-medium text-foreground">Estimated Budget *</Label>
                  <select
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="h-11 w-full rounded-md border border-border bg-background px-3 py-2 text-[0.875rem] text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:opacity-50"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000 (15% commission)</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000 (15% commission)</option>
                    <option value="1l-3l">₹1,00,000 - ₹3,00,000 (20% commission)</option>
                    <option value="3l-5l">₹3,00,000 - ₹5,00,000 (20% commission)</option>
                    <option value="5l-plus">₹5,00,000+ (20% commission)</option>
                  </select>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="bg-primary text-white hover:bg-primary-dark shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200 font-semibold h-12 gap-2 text-[0.9375rem] w-full mt-4"
            >
              {loading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-1" />
              ) : (
                <Gift className="w-4 h-4 shrink-0" />
              )}
              {loading ? "Submitting..." : "Submit Referral"}
            </Button>
            
          </form>
        )}
      </motion.div>

      <div className="mt-8 text-center text-[0.75rem] text-muted-foreground max-w-2xl mx-auto space-y-1">
        <p>* Commission rates: 20% for projects ₹1L and above, 15% for projects under ₹1L.</p>
        <p>** Payouts are processed within 7 business days after receiving the project payment from the client.</p>
      </div>
    </section>
  );
};

export default ReferForm;