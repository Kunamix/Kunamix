import { Code, Globe, Smartphone, Monitor, Palette, Zap } from "lucide-react";

export const SERVICES_BREADCRUMB = [
  { label: "Home", href: "/" },
  { label: "Our Services" },
];

export const SERVICES_LIST = [
  {
    id: "web-development",
    title: "Custom Website Development",
    description:
      "Modern, conversion-focused websites built on React / Next.js. Fast, SEO-optimised, and designed to turn visitors into leads — not just look good in a portfolio.",
    icon: Code,
    features: [
      "React / Next.js",
      "Responsive Design",
      "SEO Optimized",
      "Performance Focused",
    ],
    ctaText: "Start with a free scope call",
    startingFrom: "From $1,500",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "Full-stack web apps with authentication, dashboards, third-party integrations, and cloud deployment. Built to handle real users from day one — not rebuilt when you scale.",
    icon: Globe,
    features: [
      "Full-Stack Development",
      "API Integration",
      "Database Design",
      "Cloud Deployment",
    ],
    ctaText: "Start with a free scope call",
    startingFrom: "From $5,000",
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    description:
      "iOS and Android from a single codebase using React Native or Flutter. Native performance, smooth UX, App Store ready. No double budget for two platforms.",
    icon: Smartphone,
    features: [
      "React Native / Flutter",
      "Native Performance",
      "App Store Ready",
      "Push Notifications",
    ],
    ctaText: "Start with a free scope call",
    startingFrom: "From $8,000",
  },
  {
    id: "desktop-apps",
    title: "Desktop Applications",
    description:
      "Native desktop apps for Windows, macOS, and Linux with system tray support, auto-updates, and deep OS integration. Built with Electron or Tauri.",
    icon: Monitor,
    features: [
      "Electron / Tauri",
      "Cross-Platform",
      "Auto-Updates",
      "System Tray Support",
    ],
    ctaText: "Start with a free scope call",
    startingFrom: "From $6,000",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User research, wireframes, high-fidelity Figma prototypes, and full design systems. Design that developers can actually build from — not just beautiful static screens.",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    ctaText: "Start with a free scope call",
    startingFrom: "From $2,000",
  },
  {
    id: "branding",
    title: "Logo Design & Branding",
    description:
      "Logo, color system, typography, and brand guidelines that make you look established from day one. Complete brand identity — not just a logo file.",
    icon: Zap,
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Color Palette",
      "Typography",
    ],
    ctaText: "Start with a free scope call",
    startingFrom: "From $800",
  },
];
