import { PersonalInfo, Project, BlogPost, DigitalProduct } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Revino B Akmaldi",
  tagline: "Turning data into digital products",
  bio: "I turn complex data into products people actually use. With 7+ years in analytics and data science, I build dashboards, AI-powered tools, and digital solutions that make data accessible to everyone.",
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
    title: "Supply Chain Demand Forecasting",
    description: "ML-powered demand forecasting system that reduced inventory costs by 18% using time-series models and automated retraining pipelines.",
    tech: ["Python", "Prophet", "FastAPI", "Docker"],
    github: "https://github.com/revinobakmaldi/demand-forecasting"
  },
  {
    id: 2,
    title: "Executive BI Dashboard Suite",
    description: "End-to-end Power BI dashboard suite serving 200+ stakeholders with real-time KPIs, drill-through analytics, and automated data refresh.",
    tech: ["Power BI", "SQL Server", "DAX", "Python"]
  },
  {
    id: 3,
    title: "Claude Limit Notif Scheduler",
    description: "Automated notification system that alerts you when your Claude session limit resets. Runs as a macOS background service with iPhone push notifications via ntfy.",
    tech: ["Python", "macOS launchd", "GitHub Actions", "ntfy"],
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
    title: "AI Landing Page Builder",
    description: "Next.js landing page generator powered by AI, enabling non-technical users to create professional sites in minutes.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Claude API"],
    demo: "https://landing.revinobakmaldi.com",
    github: "https://github.com/revinobakmaldi/ai-landing-builder"
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
    title: "From BI Reports to Data Products: A Practical Guide",
    excerpt: "How to evolve traditional dashboards into self-service data products that scale across the organization.",
    date: "2024-12-20",
    slug: "bi-to-data-products",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Getting Started with Microsoft Fabric for Analytics Engineers",
    excerpt: "A hands-on walkthrough of Microsoft Fabric's lakehouse architecture and how it simplifies the modern data stack.",
    date: "2024-11-15",
    slug: "microsoft-fabric-guide",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Deploying ML Models in Production: Lessons Learned",
    excerpt: "Real-world lessons from deploying machine learning models at scale — monitoring, retraining, and avoiding silent failures.",
    date: "2024-10-05",
    slug: "ml-in-production",
    readTime: "7 min read"
  }
];

export const skills = [
  "Data Analytics", "Machine Learning", "AI Products", "Python",
  "SQL", "Power BI", "Microsoft Fabric", "Web Development"
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
