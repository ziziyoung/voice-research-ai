import Hero from "@/components/Hero";
import { Projects, Experience } from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Achievements />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
