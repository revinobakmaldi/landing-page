import { Metadata } from "next";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Products from "@/components/products";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Revino B Akmaldi - Data & AI Product Builder",
  description: "Data Science & Analytics Manager turning enterprise insights into scalable digital products. Explore projects, templates, and tools built from real-world data experience.",
  keywords: ["Data Science", "Analytics", "AI Products", "Machine Learning", "Power BI", "Microsoft Fabric", "Python"],
  authors: [{ name: "Revino B Akmaldi" }],
  openGraph: {
    title: "Revino B Akmaldi - Data & AI Product Builder",
    description: "Data Science & Analytics Manager turning enterprise insights into scalable digital products. Explore projects, templates, and tools built from real-world data experience.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Products />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
