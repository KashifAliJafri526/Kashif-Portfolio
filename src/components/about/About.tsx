import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Layers,
  Code2,
  Cpu,
  Server,
  Sparkles,
  CheckCircle2,
  Boxes,
  Compass,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TerminalCard } from './TerminalCard';
import { PERSONAL_INFO } from '../../data/portfolioData';

type TabKey = 'philosophy' | 'education' | 'workflow';

export const About = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('philosophy');

  const tabContent: Record<TabKey, { title: string; desc: string; bullets: string[] }> = {
    philosophy: {
      title: 'Architecting for Longevity & Maintainability',
      desc: 'I approach web development with an engineering-first mentality. Every schema, API route, and UI component is structured for scalability, modularity, and readability.',
      bullets: [
        'Strict separation of concerns between presentation, business logic, and database layer',
        'Type-safe engineering using TypeScript to catch bugs early in development',
        'Design systems crafted with Tailwind CSS for pixel-perfect responsiveness',
      ],
    },
    education: {
      title: 'Academic Roots in Computer Science',
      desc: 'Graduated with a Bachelor of Technology (B.Tech) in Computer Science, grounding my engineering intuition in rigorous software engineering and computing principles.',
      bullets: [
        'Strong grasp of Data Structures, Algorithms, and Object-Oriented Programming',
        'Database Management Systems (DBMS), relational normalization & NoSQL schemas',
        'Computer Networks, HTTP protocols, REST architectural constraints, and API design',
      ],
    },
    workflow: {
      title: 'Modern Development Workflow & Tooling',
      desc: 'Adopting standard developer tooling and best practices to build, test, and ship production-ready applications with confidence.',
      bullets: [
        'Git & GitHub version control with feature branch workflows and structured commits',
        'API testing, validation, and endpoint documentation using Postman',
        'Continuous exploration of creative 3D web technologies (Three.js, R3F)',
      ],
    },
  };

  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: 'Full-Stack MERN Architecture',
      desc: 'End-to-end web engineering from MongoDB schemas and Express APIs to dynamic React clients.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      title: 'Modern Frontend & TypeScript',
      desc: 'Component-driven user interfaces built with React, strict typing, and clean state lifecycles.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: 'Interactive 3D Web Exploration',
      desc: 'Pushing web boundaries with Three.js and React Three Fiber for memorable digital products.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: 'Computer Science Fundamentals',
      desc: 'B.Tech CS foundation in algorithms, databases, and core problem-solving methodologies.',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-700/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeNumber="01"
          badgeText="ABOUT THE DEVELOPER"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
          title="Bridging Computational Foundations with"
          titleGradient="Modern Web Engineering."
          subtitle="A look into my background, academic grounding in Computer Science, and full-stack development philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dossier Card with Interactive Tabs */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/25 relative overflow-hidden"
            >
              {/* Subtle top border gradient */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-600" />

              {/* Developer Intro Header */}
              <div className="flex items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/15">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <div className="w-full h-full bg-[#08061a] rounded-[10px] flex items-center justify-center font-display font-bold text-lg text-cyan-300">
                      KJ
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                      <span>{PERSONAL_INFO.role}</span>
                      <span className="text-purple-400/60">•</span>
                      <span className="text-slate-400">{PERSONAL_INFO.location}</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-purple-950/60 text-purple-300 border border-purple-500/30">
                    B.Tech CS
                  </span>
                </div>
              </div>

              {/* Core Narrative */}
              <div className="py-6 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  I am a passionate <span className="text-white font-medium">Junior MERN Stack Developer</span> based in India with a formal <span className="text-cyan-300 font-medium">B.Tech in Computer Science</span>. My passion lies in transforming theoretical computer science principles into practical, reliable, and delightful web solutions.
                </p>
                <p>
                  I focus on writing structured code across the full stack: modeling schema logic with <span className="text-purple-300 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/50">MongoDB</span>, engineering performant REST APIs with <span className="text-purple-300 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/50">Node.js</span> & <span className="text-purple-300 font-mono text-xs px-1.5 py-0.5 rounded bg-purple-950/50">Express</span>, and crafting responsive frontend applications with <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/50">React</span> and <span className="text-cyan-300 font-mono text-xs px-1.5 py-0.5 rounded bg-cyan-950/50">TypeScript</span>.
                </p>
                <p>
                  Beyond standard CRUD applications, I am deeply intrigued by creative web technologies like <span className="text-white font-medium">Three.js</span> and <span className="text-white font-medium">React Three Fiber</span>, bridging technical backend engineering with immersive digital user experiences.
                </p>
              </div>

              {/* Interactive Detail Tabs */}
              <div className="pt-2 border-t border-purple-500/15">
                <div className="flex items-center gap-1.5 mb-4 bg-[#050314]/70 p-1 rounded-xl border border-purple-500/20">
                  <button
                    type="button"
                    onClick={() => setActiveTab('philosophy')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono rounded-lg transition-all ${
                      activeTab === 'philosophy'
                        ? 'bg-purple-600/30 text-cyan-300 border border-purple-400/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Philosophy</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('education')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono rounded-lg transition-all ${
                      activeTab === 'education'
                        ? 'bg-purple-600/30 text-cyan-300 border border-purple-400/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Education</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('workflow')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-mono rounded-lg transition-all ${
                      activeTab === 'workflow'
                        ? 'bg-purple-600/30 text-cyan-300 border border-purple-400/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Boxes className="w-3.5 h-3.5" />
                    <span>Workflow</span>
                  </button>
                </div>

                {/* Tab Body */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl bg-[#060417]/80 border border-purple-500/20 space-y-3"
                >
                  <h4 className="font-display font-semibold text-sm text-cyan-300">
                    {tabContent[activeTab].title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {tabContent[activeTab].desc}
                  </p>
                  <ul className="space-y-2 pt-1">
                    {tabContent[activeTab].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Terminal Inspector & 4 Engineering Pillars */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Interactive Terminal Inspector */}
            <TerminalCard />

            {/* 4 Core Engineering Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 px-1">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                  Core Development Pillars
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((pillar) => (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="p-4 rounded-xl glass-panel border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                  >
                    <div className="p-2 w-fit rounded-lg bg-purple-950/60 border border-purple-500/30 mb-3 group-hover:border-cyan-400/40 transition-colors">
                      {pillar.icon}
                    </div>
                    <h5 className="font-display font-semibold text-xs text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
