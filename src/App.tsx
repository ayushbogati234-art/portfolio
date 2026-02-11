import { Github, Linkedin, Mail, Code2, GraduationCap, Briefcase, User, ExternalLink } from 'lucide-react';
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
