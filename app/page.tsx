import Hero from "./components/home/Hero";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
