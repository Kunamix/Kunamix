// components/Header.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import KunamixLogo from "./KunamixLogo";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 6h8M7 3l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  const go = (href: string) => {
    setMobileOpen(false);
    navigate(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed top-0 left-0 right-0 z-50 h-[58px]",
          "flex items-center justify-between",
          "px-4 xs:px-5 sm:px-6 md:px-8",
          "bg-[rgba(245,242,236,0.88)] backdrop-blur-xl backdrop-saturate-[160%]",
          "border-b border-border transition-shadow duration-300",
          scrolled
            ? "shadow-[0_1px_0_0_hsl(var(--border)),0_4px_24px_rgba(15,14,13,0.06)]"
            : "",
        ].join(" ")}
        role="banner"
      >
        {/* ── Logo ── */}
        <button
          onClick={() => go("/")}
          className="flex items-center gap-[0.5rem] xs:gap-[0.625rem] cursor-pointer
                     select-none hover:opacity-80 transition-opacity shrink-0"
          aria-label="Kunamix home"
        >
          <KunamixLogo size={28} gradientId="header-logo" />
          {/* Hide text below 360px to prevent overflow */}
          <span
            className="hidden xs:block font-mono text-[0.8125rem] font-medium
                           text-foreground tracking-[0.06em] uppercase"
          >
            Kunamix
          </span>
        </button>

        {/* ── Desktop nav (hidden below 1100px) ── */}
        <nav
          className="hidden md2:flex items-center gap-0.5"
          aria-label="Primary navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => go(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={[
                "relative px-[0.875rem] py-[0.4rem] text-[0.8125rem] font-medium",
                "rounded-md transition-colors duration-150 cursor-pointer",
                isActive(item.href)
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-black/[0.04]",
              ].join(" ")}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-2 -bottom-px h-px bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md2:flex items-center gap-[0.625rem]">
          <Button
            onClick={() => go("/contact")}
            className="bg-foreground text-white hover:bg-[#1E1C1A]
                       shadow-[0_2px_8px_rgba(0,0,0,0.18)]
                       hover:shadow-[0_4px_20px_rgba(0,0,0,0.26)]
                       hover:-translate-y-px transition-all duration-200
                       font-semibold text-[0.8125rem] px-5 h-9 gap-2 cursor-pointer"
          >
            Get Started
            <ArrowIcon />
          </Button>
        </div>

        {/* ── Mobile controls ── */}
        <div className="md2:hidden flex items-center gap-1.5">
          {/* Get Started — visible on sm+ but below md2 */}
          <Button
            onClick={() => go("/contact")}
            className="hidden sm:flex bg-foreground text-white hover:bg-[#1E1C1A]
                       font-semibold text-[0.75rem] px-3.5 h-8 gap-1.5"
          >
            Get Started
            <ArrowIcon />
          </Button>
          {/* Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((v) => !v)}
            className="h-9 w-9 border border-border rounded-md text-foreground shrink-0"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </motion.header>

      {/* ── Mobile nav drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[58px] inset-x-0 z-40
                       bg-[rgba(245,242,236,0.96)] backdrop-blur-xl
                       border-b border-border shadow-lg md2:hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-4 xs:px-5 py-4">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => go(item.href)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={[
                      "text-left px-[0.875rem] py-[0.625rem] rounded-md",
                      "text-[0.9375rem] font-medium transition-colors duration-150",
                      isActive(item.href)
                        ? "bg-primary/8 text-primary"
                        : "text-foreground hover:bg-muted",
                    ].join(" ")}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <Button
                  onClick={() => go("/contact")}
                  className="w-full bg-foreground text-white font-semibold"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
