import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useSEOMeta from "@/hooks/useSEOMeta";

// Modular About Components
import AboutHero from "@/components/about/AboutHero";
import TeamStats from "@/components/about/TeamStats";
import CoreValues from "@/components/about/CoreValues";
import Expertise from "@/components/about/Expertise";
import AboutCTA from "@/components/about/AboutCTA";

const AboutPage = () => {
  // Keep existing comprehensive SEO setup
  useSEOMeta({
    title: "About Us | Kunamix - Digital Solutions & MVP Development",
    description:
      "Learn about Kunamix - a results-driven digital agency specializing in MVP development, web applications, and enterprise-grade solutions. Meet our expert team.",
    canonical: "https://kunamix.com/about",
    ogTitle: "About Kunamix | Digital Solutions Agency",
    ogDescription:
      "Expert developers and designers delivering enterprise-grade digital solutions with rapid deployment and measurable results.",
    ogUrl: "https://kunamix.com/about",
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
        <AboutHero />

        {/* Why We're Different Block */}
        <section className="px-4 xs:px-5 sm:px-6 md:px-5 py-16 max-w-[800px] mx-auto text-center">
          <h2 className="font-display font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-foreground tracking-[-0.02em] mb-6">
            We know what you're thinking.
          </h2>
          <div className="text-[1rem] md:text-[1.125rem] leading-[1.75] text-muted-foreground text-left space-y-5">
            <p>
              "Another Indian dev agency promising the world." Fair. Here's
              what's actually different:
            </p>
            <p>
              Every project is run directly by Kunal — not handed off to a
              junior team you never meet. You get direct access to the engineer
              building your product. Weekly demos. Milestone payments. Source
              code yours from day one. That's not something agencies offer.
              That's a partnership.
            </p>
            <p className="font-medium text-foreground">
              50+ founders trusted us with their most important idea. 100%
              received full source code on launch day.
            </p>
          </div>
        </section>

        <TeamStats />

        {/* We build for others. We also build for ourselves. */}
        <section className="px-4 xs:px-5 sm:px-6 md:px-5 py-16 md:py-24 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
            <div>
              <div className="flex items-center gap-3 mb-[1.125rem]">
                <span className="w-[22px] h-px bg-primary shrink-0" />
                <span className="font-mono text-[0.5875rem] font-medium text-primary tracking-[0.14em] uppercase">
                  Our Portfolio
                </span>
              </div>
              <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] text-foreground leading-[1.1] tracking-[-0.02em]">
                We build for others.
                <br />
                <em className="text-muted-foreground font-light italic">
                  We also build for ourselves.
                </em>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Live SaaS Card */}
            <div className="group bg-card border border-border hover:border-primary/40 transition-colors duration-300 rounded-[14px] p-8 md:p-10 flex flex-col items-start relative overflow-hidden">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[0.6875rem] font-bold tracking-[0.05em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />{" "}
                Live SaaS
              </span>
              <h3 className="font-display font-bold text-[1.5rem] mb-3 text-foreground group-hover:text-primary transition-colors">
                FillFeedback
              </h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-[1.65] mb-8 max-w-[400px]">
                Our own SaaS product. Feedback collection and analytics for
                product teams. Live and growing.
              </p>
              <a
                href="https://fillfeedback.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-foreground hover:text-primary transition-colors mt-auto"
              >
                Visit fillfeedback.com
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Currently Building Card */}
            <div className="bg-background border-2 border-dashed border-border/60 rounded-[14px] p-8 md:p-10 flex flex-col items-center justify-center min-h-[280px] text-center">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-5 border border-border/50">
                <svg
                  className="w-5 h-5 text-muted-foreground/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-[1.125rem] text-foreground mb-2">
                Currently building
              </h3>
              <p className="text-[0.9375rem] text-muted-foreground max-w-[280px]">
                MediaDock — An a open source product for media handing.
              </p>
            </div>
          </div>
        </section>

        <CoreValues />

        {/* Visual Break Component */}
        <section className="py-20 md:py-28 bg-[#f9f7f5] dark:bg-zinc-950/50 px-4 xs:px-5 sm:px-6 md:px-5 border-y border-border relative">
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
            <svg
              className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-6 text-primary/30"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-light text-muted-foreground italic leading-[1.2]">
              "
              <strong className="font-bold text-foreground not-italic">
                50+ founders
              </strong>{" "}
              trusted us with their most important idea."
            </h2>
          </div>
        </section>

        <Expertise />
        <AboutCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default AboutPage;
