// Personal info
export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  avatar: string;
  socials: {
    github?: string;
    linkedin?: string;
    email: string;
  };
}

// Project
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  image?: string;
}

// Blog post
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime: string;
  url?: string;
}

// Digital product
export interface DigitalProduct {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  comingSoon: boolean;
  features: string[];
}
