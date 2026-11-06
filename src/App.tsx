import { BackgroundGlow } from './components/common/BackgroundGlow';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Experience } from './components/experience/Experience';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/common/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 selection:bg-purple-500/30 selection:text-cyan-300 font-sans">
      {/* Dynamic Cybernetic Lighting and Grid */}
      <BackgroundGlow />

      {/* Futuristic Glassmorphic Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero with 3D Quantum Core */}
        <Hero />

        {/* Section 2: About Me & Developer Dossier */}
        <About />

        {/* Section 3: Technical Skills Matrix & 3D Tech Orbit */}
        <Skills />

        {/* Section 4: Featured Projects & Architectural Inspector */}
        <Projects />

        {/* Section 5: Experience & Engineering Milestones */}
        <Experience />

        {/* Section 6: Contact Console & Transmission Dispatch */}
        <Contact />
      </main>

      {/* Futuristic Cinematic Footer */}
      <Footer />
    </div>
  );
}
