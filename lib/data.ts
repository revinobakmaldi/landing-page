import { PersonalInfo, Project, BlogPost } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Revino B Akmaldi",
  tagline: "Building products with AI & Code",
  bio: "I'm a developer and creator passionate about building digital products. I leverage AI and modern web technologies to bring ideas to life.",
  avatar: "/avatar.jpg",
  socials: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/revinobakmaldi",
    email: "hello@example.com"
  }
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Dashboard",
    description: "A modern dashboard for visualizing AI model performance metrics with real-time updates.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    demo: "https://example.com",
    github: "https://github.com/yourusername/ai-dashboard",
    image: "/project-1.jpg"
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A simple yet powerful task management app with drag-and-drop functionality.",
    tech: ["React", "Next.js", "Prisma", "PostgreSQL"],
    demo: "https://example.com",
    github: "https://github.com/yourusername/task-manager"
  },
  {
    id: 3,
    title: "Weather App",
    description: "Beautiful weather app with location-based forecasts and animations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Weather API"],
    demo: "https://example.com",
    github: "https://github.com/yourusername/weather-app"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 16",
    excerpt: "Learn how to build modern web applications with the latest Next.js features including App Router and Server Actions.",
    date: "2024-01-15",
    slug: "getting-started-nextjs-16",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Beautiful UIs with Tailwind CSS",
    excerpt: "Discover tips and tricks for creating stunning user interfaces using Tailwind CSS utility classes.",
    date: "2024-01-10",
    slug: "beautiful-ui-tailwind",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "My Journey into AI-Powered Development",
    excerpt: "How AI tools like Claude and GitHub Copilot have transformed my development workflow.",
    date: "2024-01-05",
    slug: "ai-powered-development",
    readTime: "6 min read"
  }
];

export const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Node.js", "Python", "AI/ML", "Figma"
];
