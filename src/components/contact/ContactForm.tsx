import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContactForm } from "@/hooks/useContactFrom";
import { toast } from "sonner";

const MAX_MESSAGE_LENGTH = 500;

const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

const PROJECT_TYPES = [
  "Full-stack Web Application",
  "MVP / Prototype",
  "Frontend Development",
  "Backend / API Development",
  "UI/UX Design + Dev",
  "Consulting / Code Review",
  "Other",
] as const;

const BUDGET_RANGES = [
  "Under ₹50K",
  "₹50K – ₹1.5L",
  "₹1.5L – ₹5L",
  "₹5L+",
  "Let's discuss",
] as const;

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

const ContactForm = () => {
  const { sendContactForm, loading } = useContactForm();
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_MESSAGE_LENGTH) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: keyof FormState) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await sendContactForm({
      name: formData.name,
      email: formData.email,
      projectType: formData.projectType,
      budget: formData.budget || undefined,
      message: formData.message,
    });
    if (res.success) {
      trackEvent("form_submission", {
        event_category: "Contact",
        event_label: "Contact Form",
        value: 1,
      });
      toast.success("Message sent successfully!");
      setFormData(INITIAL_FORM);
    } else {
      toast.error(res.message || "Message not sent! Please try again.");
    }
  };

  const charsLeft = MAX_MESSAGE_LENGTH - formData.message.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-card rounded-[20px] border border-border p-6 sm:p-8 md:p-10"
    >
      <div className="mb-8">
        <h3 className="text-[1.5rem] font-display font-bold text-foreground leading-tight tracking-[-0.01em] mb-2">
          Send us a message
        </h3>
        <p className="text-[0.9375rem] text-muted-foreground">
          Tell us about your project — we'll get back to you fast.
        </p>
        <div className="flex flex-col gap-1 mt-3 p-3 bg-muted/50 rounded-lg border border-border text-[0.8125rem]">
          <div className="inline-flex items-center gap-2 text-foreground font-medium">
            <span>⚡</span> Typically responds within 2–4 hours during India
            business hours (IST).
          </div>
          <div className="text-muted-foreground pl-6">
            For urgent projects — WhatsApp is faster.
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="name"
              className="text-[0.8125rem] font-medium text-foreground"
            >
              Your Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="h-12 bg-background border-border focus-visible:ring-primary/20 text-[0.875rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="email"
              className="text-[0.8125rem] font-medium text-foreground"
            >
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="h-12 bg-background border-border focus-visible:ring-primary/20 text-[0.875rem]"
            />
          </div>
        </div>

        {/* Project Type + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Label className="text-[0.8125rem] font-medium text-foreground">
              Project Type{" "}
              <span className="text-destructive" aria-hidden>
                *
              </span>
            </Label>
            <Select
              required
              value={formData.projectType}
              onValueChange={handleSelectChange("projectType")}
            >
              <SelectTrigger className="h-12 bg-background border-border focus:ring-primary/20 text-[0.875rem]">
                <SelectValue placeholder="What are you looking for?" />
              </SelectTrigger>
              <SelectContent>
                {PROJECT_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-[0.8125rem] font-medium text-foreground">
              Budget Range{" "}
              <span className="text-[0.75rem] text-muted-foreground font-normal">
                (optional)
              </span>
            </Label>
            <Select
              value={formData.budget}
              onValueChange={handleSelectChange("budget")}
            >
              <SelectTrigger className="h-12 bg-background border-border focus:ring-primary/20 text-[0.875rem]">
                <SelectValue placeholder="Approximate budget" />
              </SelectTrigger>
              <SelectContent>
                {BUDGET_RANGES.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="message"
              className="text-[0.8125rem] font-medium text-foreground"
            >
              Message
            </Label>
            <span
              className={`text-[0.75rem] tabular-nums transition-colors ${
                charsLeft <= 50 ? "text-destructive" : "text-muted-foreground"
              }`}
            >
              {charsLeft} / {MAX_MESSAGE_LENGTH}
            </span>
          </div>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Describe your project, timeline, and any specific requirements..."
            rows={5}
            className="bg-background border-border focus-visible:ring-primary/20 text-[0.875rem] resize-none pt-3"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading || !formData.projectType}
          className="bg-primary text-white hover:bg-primary-dark shadow-brand hover:shadow-brand-hover hover:-translate-y-px transition-all duration-200 font-semibold h-12 gap-2 text-[0.9375rem] w-full mt-2"
        >
          {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-1"
            />
          ) : (
            <Send className="w-4 h-4 shrink-0" />
          )}
          {loading ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
