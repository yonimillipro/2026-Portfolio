export type Project = {
  name: string;
  type: string;
  period: string;
  status: string;
  summary: string;
  contribution: string;
  stack: string[];
  repository?: string;
  live?: string;
  tone: "blue" | "lime" | "orange" | "violet";
};

export const projects: Project[] = [
  {
    name: "ServiceLink",
    type: "Service marketplace",
    period: "2026 — Now",
    status: "Active product",
    summary:
      "A multi-sided marketplace that helps customers find local providers and gives providers a focused workspace for managing their services.",
    contribution:
      "Designing and building the product across customer, provider, and admin journeys, with live marketplace data and role-aware experiences.",
    stack: ["React", "TypeScript", "Supabase", "Responsive UI"],
    repository: "https://github.com/yonimillipro/servicelink-hub",
    live: "https://servicelink-hub.vercel.app/",
    tone: "lime",
  },
  {
    name: "GiveawayFair",
    type: "Community commerce",
    period: "2026 — Now",
    status: "Private build",
    summary:
      "A web and mobile giveaway ecosystem where people discover promotions while companies manage branded pages, products, and campaigns.",
    contribution:
      "Building the PWA and Expo mobile experience, including multi-role accounts, ownership safeguards, and a Supabase-backed content model.",
    stack: ["Expo", "React Native", "TypeScript", "Supabase"],
    tone: "violet",
  },
  {
    name: "Dr. Saba Medium Clinic",
    type: "Healthcare website",
    period: "2025 — Now",
    status: "Live",
    summary:
      "The clinic's public digital front door: a clear, responsive experience for understanding services and reaching the care team.",
    contribution:
      "Leading the website design and development while supporting the clinic as IT Officer and Website Developer.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    repository:
      "https://github.com/yonimillipro/Dr.-Saba-Medium-Clinic-Health-Services",
    live: "https://dr-saba-medium-clinic-health-servic.vercel.app/",
    tone: "blue",
  },
  {
    name: "Hotel Reservation System",
    type: "Booking platform",
    period: "2023 — 2024",
    status: "Earlier work",
    summary:
      "A full-stack reservation system covering hotel discovery, room selection, booking details, and the supporting data workflow.",
    contribution:
      "Built the responsive interface and connected the booking flow to a PHP and MySQL backend as an end-to-end academic product.",
    stack: ["React", "PHP", "MySQL", "REST APIs"],
    repository: "https://github.com/yonimillipro/reservation",
    tone: "orange",
  },
];

export const capabilities = [
  {
    title: "Product interface",
    description:
      "Turning requirements into responsive, accessible flows with strong hierarchy and thoughtful interaction states.",
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mobile products",
    description:
      "Building cross-platform experiences that feel intentional on small screens, not compressed desktop pages.",
    tools: ["React Native", "Expo", "PWA", "Responsive systems"],
  },
  {
    title: "Full-stack delivery",
    description:
      "Connecting interfaces to real data, authentication, permissions, and dependable application architecture.",
    tools: ["Supabase", "Node.js", "Express", "REST APIs", "MySQL"],
  },
  {
    title: "Quality & shipping",
    description:
      "Improving speed, maintainability, and release confidence from the first implementation through deployment.",
    tools: ["Git & GitHub", "Vite", "Vercel", "Lighthouse", "Figma"],
  },
];

export const experience = [
  {
    period: "2025 — Present",
    role: "IT Officer & Website Developer",
    company: "Dr. Saba Medium Clinic",
    detail:
      "Own the clinic's website experience and support day-to-day digital systems, bridging product thinking with practical IT operations.",
  },
  {
    period: "2026 — Present",
    role: "Independent Product Builder",
    company: "ServiceLink & GiveawayFair",
    detail:
      "Designing and shipping web and mobile products across marketplace, company, customer, provider, and admin workflows.",
  },
  {
    period: "2018 — 2023",
    role: "BSc, Computer Science",
    company: "HilCoE School of Computer Science & Technology",
    detail:
      "Built the computer-science foundation behind my product work, from software architecture and databases to full-stack delivery.",
  },
];
