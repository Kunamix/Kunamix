// components/home/FounderStrip.tsx
// Place this between Testimonials and CTABlock in your home page layout.
//
// TODO: Replace `/images/kunal-kumar.jpg` with your actual photo path.
// Recommended: square crop, min 400×400px, WebP format.

import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kunal003/", // TODO: replace
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.104v1.561h.046c.433-.82 1.49-1.684 3.065-1.684 3.276 0 3.88 2.156 3.88 4.961v6.614zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.554 13.019H3.783V9h3.108v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/KUNAL01011", // TODO: replace
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/Kunal_098", // TODO: replace
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const FounderStrip = () => {
  const navigate = useNavigate();

  return (
    <section
      className="px-4 xs:px-5 sm:px-6 md:px-5 py-16 md:py-20 max-w-[1280px] mx-auto"
      id="founder"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border border-border rounded-[18px] overflow-hidden
                   flex flex-col md:flex-row items-start gap-0"
      >
        {/* Photo column */}
        <div
          className="w-full md:w-[260px] lg:w-[300px] shrink-0 bg-muted
                        flex items-center justify-center
                        min-h-[220px] md:min-h-full"
        >
          {/* Replace with <img> once you have your photo */}
          <div
            className="w-full h-full min-h-[220px] bg-gradient-to-br
                       from-muted to-muted-foreground/10
                       flex flex-col items-center justify-center gap-3
                       text-muted-foreground"
          >
            {/* Placeholder — swap with: */}
            {/* <img src="/images/kunal-kumar.jpg" alt="Kunal Kumar, Founder of Kunamix"
                    className="w-full h-full object-cover object-top" /> */}
            <div
              className="w-20 h-20 rounded-full bg-primary text-white
                         flex items-center justify-center
                         font-display font-bold text-2xl"
            >
              KK
            </div>
            <p className="text-xs font-mono opacity-50">Add your photo here</p>
          </div>
        </div>

        {/* Content column */}
        <div className="flex-1 px-7 sm:px-10 py-8 sm:py-10">
          <p className="font-mono text-[0.5875rem] text-primary tracking-[0.12em] uppercase mb-4">
            From the founder
          </p>

          <h2
            className="font-display font-bold leading-[1.1] tracking-[-0.025em]
                       text-foreground mb-5
                       text-[clamp(1.25rem,2.5vw,1.75rem)]"
          >
            I'm Kunal. I built Kunamix because most dev agencies promise fast
            and deliver{" "}
            <em className="font-light text-muted-foreground italic">never.</em>
          </h2>

          <div className="flex flex-col gap-3 text-[0.9375rem] leading-[1.72] text-muted-foreground max-w-[540px] mb-7">
            <p>
              I've shipped 50+ products — MVPs, SaaS platforms, mobile apps —
              for founders in India, the UK, and the US. I started Kunamix after
              watching too many good ideas die in 6-month agency timelines and
              vague retainer contracts.
            </p>
            <p>
              At Kunamix, you talk directly to the engineer building your
              product. Weekly demos. Milestone payments. Source code yours from
              day one. That's it.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 mb-7 flex-wrap">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-lg border border-border bg-background
                           flex items-center justify-center text-muted-foreground
                           hover:border-primary hover:text-primary
                           transition-all duration-150"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <Button
            onClick={() => navigate("/about")}
            variant="outline"
            className="border-border gap-2 text-[0.875rem] cursor-pointer"
          >
            More about how we work →
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderStrip;
