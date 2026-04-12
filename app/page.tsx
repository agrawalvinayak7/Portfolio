import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import About from "./components/home/About";
import Blog from "./components/home/Blog";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Blog />
      <Contact />
    </main>
  );
}
