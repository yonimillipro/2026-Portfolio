export type Project = {
  name: string;
  type: string;
  period: string;
  status: string;
  summary: string;
  contribution: string;
  stack: string[];
  repository?: string;
  repositoryLabel?: string;
  live?: string;
  caseStudy?: { problem: string; approach: string; stage: string };
  tone: "blue" | "lime" | "orange" | "violet";
};

export const projects: Project[] = [
  {
    name: "ClinicFlow", type: "Clinic management software", period: "2026", status: "In development",
    summary: "A clinic management system connecting registration, staged payments, nursing, consultation, and laboratory workflows.",
    contribution: "Building role-specific workspaces, a Fastify API, PostgreSQL data models, and a clinic LAN deployment configuration.",
    stack: ["React", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "Docker"],
    caseStudy: {
      problem: "Clinic staff need a shared patient journey with clear handoffs between reception, nurses, doctors, and the laboratory.",
      approach: "A React PWA connects to a clinic-owned LAN server. Role permissions and staged invoices define which actions and services are available; laboratory approval is a separate workflow step.",
      stage: "The application and deployment tooling are implemented. Live clinic installation, backup restoration, printing, and operational acceptance still need verification. Clinical writes require the LAN server to be available.",
    },
    tone: "blue",
  },
  {
    name: "Giveaway Hub", type: "iOS & Android application", period: "2026", status: "In development",
    summary: "A native mobile application for GiveawayFair, connecting discovery and consumer, company, and admin experiences.",
    contribution: "Building the Expo client around shared accounts and content, with native authentication storage, uploads, and notification lifecycle handling.",
    stack: ["React Native", "TypeScript", "Expo", "Expo Router", "TanStack Query", "Supabase"],
    caseStudy: {
      problem: "An existing web platform needs a mobile experience that keeps accounts and content consistent across devices.",
      approach: "The native client reuses the platform's Supabase contracts while organizing discovery, authentication, consumer, company, and admin screens into native routes.",
      stage: "The mobile application is in development. Backend release validation, push configuration, and store submission remain pending.",
    },
    tone: "violet",
  },
  {
    name: "Smart Timer for Windows", type: "Windows desktop application", period: "2026", status: "Unsigned beta",
    summary: "A keyboard-first productivity app with countdown, stopwatch, clock, Pomodoro, and Tabata modes.",
    contribution: "Built natural time commands, timestamp-based timer state, tray actions, global shortcuts, a compact overlay, and Windows packaging.",
    stack: ["Electron", "React", "TypeScript", "Electron Vite", "Vitest"],
    repository: "https://github.com/yonimillipro/smart-timer-windows", repositoryLabel: "Project",
    caseStudy: {
      problem: "A desktop timer must remain useful beyond its main window and keep accurate state through pause, sleep, and display changes.",
      approach: "Timestamp-based countdowns reconcile suspend and resume. A narrow Electron preload bridge connects the React interface with tray controls, shortcuts, notifications, and window persistence.",
      stage: "Installer and portable builds are prepared as an unsigned beta. Final Windows release checks and public download availability remain pending.",
    },
    tone: "orange",
  },
  {
    name: "Dr. Saba Medium Clinic", type: "Healthcare website", period: "2025 — Now", status: "Live",
    summary: "The clinic's public digital front door: a responsive experience for understanding services and reaching the care team.",
    contribution: "Leading the website design and development while supporting the clinic as IT Officer and Website Developer.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    repository: "https://github.com/yonimillipro/Dr.-Saba-Medium-Clinic-Health-Services",
    live: "https://dr-saba-medium-clinic-health-servic.vercel.app/", tone: "blue",
  },
  {
    name: "Giveaway Fair", type: "Web platform", period: "2026 — Now", status: "Public repository",
    summary: "A giveaway platform where people discover promotions and companies manage branded pages, products, and campaigns.",
    contribution: "Building the responsive web experience with multi-role accounts, ownership safeguards, and a Supabase-backed content model.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    live: "https://giveaway-fair.vercel.app/", repository: "https://github.com/yonimillipro/giveaway-fair", tone: "violet",
  },
  {
    name: "Coinza Dashboard", type: "Market-data dashboard", period: "2026 — Now", status: "Public repository",
    summary: "A portfolio dashboard with account access, market-data views, wallet interfaces, and a subscription experience.",
    contribution: "Built Supabase authentication, CoinGecko-powered views, and wallet and subscription interfaces.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "CoinGecko"],
    live: "https://crypto-coinza-dashboard.vercel.app/", repository: "https://github.com/yonimillipro/crypto-CoinzaDashboard", tone: "lime",
  },
  {
    name: "Hotel Reservation System", type: "Academic full-stack project", period: "2023 — 2024", status: "Earlier work",
    summary: "A reservation system covering hotel discovery, room selection, booking details, and the supporting data workflow.",
    contribution: "Built the responsive interface and connected the booking flow to a PHP and MySQL backend.",
    stack: ["React", "PHP", "MySQL", "REST APIs"], repository: "https://github.com/yonimillipro/reservation", tone: "blue",
  },
];

export const capabilities = [
  {
    title: "Web development",
    description: "Responsive websites and accessible product interfaces, from content hierarchy to complex application states.",
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    title: "Mobile applications",
    description: "Building multiple mobile applications with native navigation, persistent sessions, and thoughtful loading and error states.",
    tools: ["React Native", "Expo", "Expo Router", "TanStack Query"],
  },
  {
    title: "Desktop applications",
    description: "Windows tools that work beyond the main window, with tray actions, shortcuts, persistent state, and installable builds.",
    tools: ["Electron", "React", "TypeScript", "Electron Builder"],
  },
  {
    title: "APIs & data",
    description: "Connecting interfaces to authentication, permissions, relational data, and explicit workflow rules.",
    tools: ["Fastify", "Node.js", "PostgreSQL", "Prisma", "Supabase", "Docker"],
  },
];

export const approach = [
  { title: "Understand", detail: "Start with the people, the workflow, and the problem." },
  { title: "Define", detail: "Map journeys, roles, data, and delivery priorities." },
  { title: "Build", detail: "Connect useful interfaces to working application logic." },
  { title: "Verify", detail: "Check behavior, permissions, errors, and device layouts." },
  { title: "Deliver", detail: "Document setup, release boundaries, and maintenance." },
];

export const experience = [
  {
    period: "2025 — Present", role: "IT Officer & Website Developer", company: "Dr. Saba Medium Clinic",
    detail: "Own the clinic's website experience and support day-to-day digital systems, connecting software development with practical IT operations.",
  },
  {
    period: "2026 — Present", role: "Independent Software & Product Development", company: "Web, mobile & desktop applications",
    detail: "Building multiple mobile applications, GiveawayFair's web experience, Windows productivity software, and clinic systems.",
  },
  {
    period: "2018 — 2023", role: "BSc, Computer Science", company: "HiLCoE School of Computer Science & Technology",
    detail: "A foundation in programming, software architecture, databases, and full-stack application development.",
  },
];
