import { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import { getLatestPosts } from "@/lib/blog";

const About = dynamic(() => import("@/components/about"), {
  loading: () => <section className="min-h-[50vh]" />,
});

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <section className="min-h-[50vh]" />,
});

const Products = dynamic(() => import("@/components/products"), {
  loading: () => <section className="min-h-[50vh]" />,
});

const Blog = dynamic(() => import("@/components/blog"), {
  loading: () => <section className="min-h-[50vh]" />,
});

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <section className="min-h-[50vh]" />,
});

export const metadata: Metadata = {
  title: "Revino B Akmaldi - Data & AI Product Builder",
  description: "Turning enterprise data into scalable digital products and iOS apps. Explore projects, templates, and tools built from real-world analytics and data science experience.",
  keywords: ["Data Science", "Analytics", "AI Products", "Machine Learning", "Power BI", "Microsoft Fabric", "Python", "iOS Development", "SwiftUI", "Swift"],
  authors: [{ name: "Revino B Akmaldi" }],
  openGraph: {
    title: "Revino B Akmaldi - Data & AI Product Builder",
    description: "Turning enterprise data into scalable digital products and iOS apps. Explore projects, templates, and tools built from real-world analytics and data science experience.",
    type: "website",
  },
};

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Products />
      <Blog posts={posts} />
      <Contact />
      <Footer />
    </main>
  );
}
