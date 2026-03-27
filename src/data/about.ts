import { Users, Code2, Palette, Target, Zap, Award } from "lucide-react";

export const ABOUT_BREADCRUMB = [
  { label: "Home", href: "/" },
  { label: "About Us" },
];

export const TEAM_STATS = [
  {
    icon: Users,
    title: "One team, full ownership",
    description:
      "React, Node.js, PostgreSQL, AWS — one team owns your entire product. No handoffs between frontend and backend. No miscommunication. No gaps.",
  },
  {
    icon: Target,
    title: "You see it before you pay for it",
    description:
      "Every sprint ends with a live working demo. No black-box development. No 'trust us, it's almost done.' You review, you approve, then we continue.",
  },
  {
    icon: Code2,
    title: "Code you'll still be proud of in 3 years",
    description:
      "Clean architecture, fully documented, properly tested. Not a spaghetti codebase that collapses when you try to scale from 100 to 10,000 users.",
  },
];

export const CORE_VALUES = [
  {
    icon: Zap,
    title: "You only pay when you see it working",
    description:
      "Milestone-based payments. Each milestone ends with a demo. You approve the demo before the next milestone is charged. No working software = no payment.",
  },
  {
    icon: Award,
    title: "6–8 weeks is a promise, not a pitch",
    description:
      "We've shipped 50+ products on this exact timeline. If you want to verify — ask us to show you the project delivery records.",
  },
  {
    icon: Palette,
    title: "Fixed price. Zero surprises.",
    description:
      "Your price is agreed and documented before we start. Scope changes are discussed openly, priced transparently, and require your approval. Your invoice will never surprise you.",
  },
];

export const EXPERTISE = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "UI/UX Design",
  "Responsive Design",
  "API Development",
  "Database Design",
  "Performance Optimization",
  "SEO Best Practices",
  "Git & Version Control",
  "Agile Methodology",
];
