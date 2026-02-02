import { Metadata } from "next";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Lab - Innovative Solutions for the Future",
  description: "Building cutting-edge AI solutions and digital products that transform businesses and drive innovation.",
  keywords: ["AI", "Machine Learning", "Digital Products", "Innovation", "Technology"],
  authors: [{ name: "AI Lab" }],
  openGraph: {
    title: "AI Lab - Innovative Solutions for the Future",
    description: "Building cutting-edge AI solutions and digital products that transform businesses and drive innovation.",
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
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
