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
    name: "Coinza Dashboard",
    type: "Crypto portfolio dashboard",
    period: "2026 — Now",
    status: "Public repository",
    summary:
      "A crypto portfolio dashboard with account access, live market data, wallet tools, trading flows, and a subscription experience.",
    contribution:
      "Built Supabase authentication, CoinGecko-powered market views, buy and sell workflows, wallet management, and Chapa subscription payments.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "CoinGecko"],
    live: "https://crypto-coinza-dashboard.vercel.app/",
    repository: "https://github.com/yonimillipro/crypto-CoinzaDashboard",
    tone: "lime",
  },
  {
    name: "Giveaway Fair",
    type: "Community commerce",
    period: "2026 — Now",
    status: "Public repository",
    summary:
      "A web and mobile giveaway ecosystem where people discover promotions while companies manage branded pages, products, and campaigns.",
    contribution:
      "Building the responsive product experience with multi-role accounts, ownership safeguards, and a Supabase-backed content model.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    live: "https://giveaway-fair.vercel.app/",
    repository: "https://github.com/yonimillipro/giveaway-fair",
    tone: "violet",
  },
  {
    name: "ServiceLink + GiveawayConnect",
    type: "Private product builds",
    period: "2026 — Now",
    status: "Private build",
    summary:
      "Two private product builds spanning a local service marketplace and a connected giveaway experience for customers, providers, and companies.",
    contribution:
      "Designing and building role-aware customer, provider, company, and admin workflows while keeping both repositories private.",
    stack: ["React", "TypeScript", "Supabase", "Responsive UI"],
    tone: "orange",
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
    tone: "blue",
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
