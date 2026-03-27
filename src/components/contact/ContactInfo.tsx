import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/contact";

const DiscordIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[1.125rem] h-[1.125rem]"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.993a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "github":
      return <Github className="w-[1.125rem] h-[1.125rem]" />;
    case "linkedin":
      return <Linkedin className="w-[1.125rem] h-[1.125rem]" />;
    case "twitter":
      return <Twitter className="w-[1.125rem] h-[1.125rem]" />;
    case "instagram":
      return <Instagram className="w-[1.125rem] h-[1.125rem]" />;
    case "discord":
      return <DiscordIcon />;
    default:
      return <Mail className="w-[1.125rem] h-[1.125rem]" />;
  }
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT_INFO.address,
    href: null,
  },
] as const;

const sharedCardClass =
  "flex items-center gap-5 p-5 bg-card rounded-[14px] border border-border group hover:border-primary/40 transition-colors duration-300";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-8"
    >
      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-green-500/10 border border-green-500/20 self-start">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
        <span className="text-[0.8125rem] font-medium text-green-700 dark:text-green-400">
          Currently accepting new projects
        </span>
      </div>

      {/* Contact methods */}
      <div className="flex flex-col gap-4">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          const inner = (
            <>
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 shrink-0">
                <Icon className="w-[1.35rem] h-[1.35rem]" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[0.625rem] text-primary tracking-[0.1em] uppercase mb-1">
                  {method.label}
                </span>
                <span className="text-[0.9375rem] font-medium text-foreground truncate">
                  {method.value}
                </span>
              </div>
            </>
          );

          return method.href ? (
            <a
              key={method.label}
              href={method.href}
              className={sharedCardClass}
            >
              {inner}
            </a>
          ) : (
            <div key={method.label} className={sharedCardClass}>
              {inner}
            </div>
          );
        })}
      </div>

      {/* Social links */}
      <div className="pt-4 border-t border-border">
        <span className="font-mono text-[0.625rem] text-muted-foreground tracking-[0.1em] uppercase mb-4 block">
          Follow our work
        </span>
        <div className="flex flex-wrap gap-3">
          {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              {getSocialIcon(platform)}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
