export type Experience = {
  organization: string;
  href: string;
  role: string;
  timeline: string;
  actions: string[];
};

export const experiences: Experience[] = [
  {
    organization: "Meta & MLH",
    href: "https://fellowship.mlh.io",
    role: "Production Engineering Fellow",
    timeline: "june 2025 - sept 2025",
    actions: [
      "Developed experience with large-scale distributed systems, focusing on deploying, monitoring, and debugging production services",
      "Containerized a Flask web service, MySQL database, and Nginx reverse proxy with SSL, deploying a production-ready stack supported by CI/CD pipelines built in Bash and GitHub Actions, load-tested for 1000 concurrent connections",
      "Placed 7th out of 25 teams in a CTF event, solving challenges across networking, CLI tooling, digital forensics, and encryption",
    ],
  },
  {
    organization: "Jane Street",
    href: "https://www.janestreet.com",
    role: "Software Engineering Fellow",
    timeline: "june 2025 - aug 2025",
    actions: [
      "Selected as one of 12 fellows for an 8-week intensive program with hands-on mentorship and code reviews from full-time engineers",
      "Developed an OCaml trading bot that tracks exchange state and executes live trades using market making and arbitrage strategies across ETFs, ADRs, and bonds, placing 1st in a program-wide electronic trading competition",
      "Engineered a suite of applications covering graph traversal, game AIs, and web scraping, developing system design skills",
      "Built a multiplayer social deduction game featuring state-machine-driven UI architecture and async RPC networking, supporting 16+ concurrent players and 120+ real-time messages with minimal latency",
    ],
  },
  {
    organization: "NYU Stern Blockchain & Fintech",
    href: "https://www.nyubnf.com/",
    role: "Development Coordinator",
    timeline: "oct 2024 - present",
    actions: [
      "Built backend API and smart contracts using Express.js and Privy for an L2 blockchain solution focused on verifiable digital IDs emphasizing corporate identification, serving an onchain ecosystem of 7M users",
      "Chosen for QuickNode's Rollup Accelerator (26 of 200+ teams), securing $80M in credits and partner support",
      "Worked in collaboration with Microsoft Blockchain, presenting progress at Microsoft's Ethical Tech Summit",
    ],
  },
  {
    organization: "HackNYU",
    href: "https://hacknyu.org",
    role: "Co-Director",
    timeline: "mar 2025 - present",
    actions: [
      "Managing 5 teams comprising design, marketing, logistics, sponsorships, and technology to organize NYU's student-led hackathon for the 2025-2026 season, overseeing 25 people across all teams with the 2025-2026 hackathon attracting 240+ participants",
      "Managed essential logistics including venue planning, catering, and sponsorship relations, securing over $23k+ in prizes to distribute to participants",
      "Collaborated with a team of 4 to develop website for the 2025 hackathon using React & TailwindCSS, attracting over 600+ participants",
    ],
  },
  {
    organization: "The Silicon Project",
    href: "https://www.thesiliconproject.org/",
    role: "IT Director",
    timeline: "sept 2022 - aug 2025",
    actions: [
      "Led a team of 6 to develop website and improve SEO performance to bring page visits to over 1,000+ per month",
      "Developed a full-stack student CRM with Next.js, utilizing NextAuth for user authentication, PostgreSQL for data storage, and AWS S3 for document processing, streamlining laptop distribution for 230+ students",
      "Built a digital storefront with Stripe for purchases of refurbished laptops totaling $1000+ in revenue",
      "Created web forms to facilitate technology donation requests, securing $200k worth of donations",
    ],
  },
  {
    organization: "Steel City Codes",
    href: "https://www.steelcitycodes.org/",
    role: "Curriculum Manager",
    timeline: "sept 2022 - june 2024",
    actions: [
      "Tutored small cohorts of middle schoolers on fundamentals of programming with Python and Java",
      "Helped to create and update lesson plans for 600+ students nationwide to utilize",
    ],
  },
];
