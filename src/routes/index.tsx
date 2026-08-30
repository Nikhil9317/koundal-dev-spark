import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Training } from "@/components/portfolio/Training";
import { Certificates } from "@/components/portfolio/Certificates";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow, Loader, ScrollProgress } from "@/components/portfolio/Chrome";

const title = "Nikhil Koundal — B.Tech CSE Student";
const description =
  "Portfolio of Nikhil Koundal, a B.Tech CSE student building projects with Python, JavaScript, web technologies, AI and computer vision.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
