import { Metadata } from "next";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Products from "@/components/products";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { getLatestPosts } from "@/lib/blog";

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
