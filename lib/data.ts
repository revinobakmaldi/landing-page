import { PersonalInfo, Project, BlogPost, DigitalProduct } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Revino B Akmaldi",
  tagline: "Turning data into digital products",
  bio: "I turn complex data into products people actually use. With 7+ years in analytics and data science, I build dashboards, AI-powered tools, iOS apps, and digital solutions that make data accessible to everyone.",
  avatar: "/avatar.jpg",
  socials: {
    github: "https://github.com/revinobakmaldi",
    linkedin: "https://linkedin.com/in/revinobakmaldi",
    email: "revinobakmaldi@gmail.com"
  }
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Chat with Data",
    description: "Upload a CSV and ask questions in plain English — AI writes SQL, executes it client-side via DuckDB-WASM, and visualizes results with interactive charts.",
    tech: ["Next.js", "DuckDB-WASM", "Python", "Recharts"],
    demo: "https://chat-with-data-csv.vercel.app",
    github: "https://github.com/revinobakmaldi/chat-with-data"
  },
  {
    id: 2,
    title: "Chat with PDF",
    description: "Upload a PDF and ask questions in plain English — AI extracts text client-side via PDF.js and answers with accurate page references.",
    tech: ["Next.js", "PDF.js", "Python", "OpenRouter"],
    demo: "https://chat-with-pdf-ai.vercel.app",
    github: "https://github.com/revinobakmaldi/chat-with-pdf"
  },
  {
    id: 3,
    title: "Claude Limit Notif Scheduler",
    description: "Automatically starts a 5-hour countdown when you send your first message in Claude Code, then notifies you when your session limit resets. Uses a Claude Code hook with macOS and iPhone push notifications via ntfy.",
    tech: ["Python", "Claude Code Hooks", "ntfy"],
    github: "https://github.com/revinobakmaldi/claude-limit-notif-scheduler"
  },
  {
    id: 4,
    title: "IronNotes",
    description: "iOS gym workout tracker with smart set logging, automatic PR detection, 1RM progression charts, and a background rest timer with push notifications.",
    tech: ["SwiftUI", "SwiftData", "Charts", "iOS"],
    github: "https://github.com/revinobakmaldi/iron-notes"
  },
  {
    id: 5,
    title: "Auto EDA",
    description: "Web tool for instant exploratory data analysis — upload a CSV and get comprehensive stats, distributions, correlations, and missing value analysis.",
    tech: ["Next.js", "Python", "Pandas", "Recharts"],
    demo: "https://auto-eda-csv.vercel.app/",
    github: "https://github.com/revinobakmaldi/auto-eda"
  },
  {
    id: 6,
    title: "Sales Analytics Automation Bot",
    description: "Automated reporting bot that generates weekly sales insights, detects anomalies, and sends Slack summaries to leadership.",
    tech: ["Python", "Pandas", "Slack API", "Airflow"],
    github: "https://github.com/revinobakmaldi/sales-analytics-bot"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Unveiling the Future: Data-Driven Technology Trends Shaping Tomorrow",
    excerpt: "Exploring five pivotal data-centric technology trends — from big data analytics and IoT to edge computing, data privacy, and AI-powered personalization.",
    date: "2023-07-26",
    slug: "data-driven-technology-trends",
    readTime: "6 min read",
    url: "https://www.linkedin.com/pulse/unveiling-future-data-driven-technology-trends-revino-b-akmaldi/"
  },
  {
    id: 2,
    title: "Getting Started with Microsoft Fabric for Analytics Engineers",
    excerpt: "A hands-on walkthrough of Microsoft Fabric's lakehouse architecture and how it simplifies the modern data stack.",
    date: "2024-11-15",
    slug: "microsoft-fabric-guide",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "Deploying ML Models in Production: Lessons Learned",
    excerpt: "Real-world lessons from deploying machine learning models at scale — monitoring, retraining, and avoiding silent failures.",
    date: "2024-10-05",
    slug: "ml-in-production",
    readTime: "12 min read"
  }
];

export const skills = [
  "Data Analytics", "Machine Learning", "AI Products", "Python",
  "SQL", "Power BI", "Microsoft Fabric", "Web Development",
  "iOS Development", "SwiftUI"
];

export const digitalProducts: DigitalProduct[] = [
  {
    id: 1,
    title: "Dashboard Templates",
    description: "Production-ready Power BI and analytics dashboard templates for common business use cases.",
    icon: "LayoutDashboard",
    category: "Templates",
    comingSoon: true,
    features: [
      "Executive KPI dashboards",
      "Sales & revenue analytics",
      "Supply chain monitoring",
      "Plug-and-play data models"
    ]
  },
  {
    id: 2,
    title: "AI Tools & Apps",
    description: "Lightweight AI-powered tools for data professionals — from auto-EDA to smart report generators.",
    icon: "Bot",
    category: "Tools",
    comingSoon: true,
    features: [
      "Auto exploratory data analysis",
      "Smart report generator",
      "Data quality checker",
      "Natural language to SQL"
    ]
  },
  {
    id: 3,
    title: "Courses & Guides",
    description: "Step-by-step courses on building data products, from analytics engineering to deploying ML APIs.",
    icon: "GraduationCap",
    category: "Education",
    comingSoon: true,
    features: [
      "Analytics to product thinking",
      "Power BI advanced techniques",
      "ML deployment playbook",
      "Data career roadmap"
    ]
  }
];
