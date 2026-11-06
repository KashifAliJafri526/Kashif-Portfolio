import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Database, Server, Code2, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { SkillCard } from './SkillCard';
import { SkillsOrbitScene } from '../3d/SkillsOrbitScene';
import { SKILLS } from '../../data/portfolioData';
import type { Skill } from '../../types';

type CategoryFilter = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Languages' | 'Tools';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: { label: CategoryFilter; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Frontend', icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: 'Backend', icon: <Server className="w-3.5 h-3.5" /> },
    { label: 'Database', icon: <Database className="w-3.5 h-3.5" /> },
    { label: 'Languages', icon: <Terminal className="w-3.5 h-3.5" /> },
    { label: 'Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const filteredSkills: Skill[] =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-purple-700/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeNumber="02"
          badgeText="TECHNICAL ARSENAL"
          badgeIcon={<Cpu className="w-3.5 h-3.5" />}
          title="Mastering the Modern MERN &"
          titleGradient="Full-Stack Ecosystem."
          subtitle="A structured overview of my technical proficiencies, specialized frontend and backend frameworks, databases, and development tooling."
        />

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const count =
              cat.label === 'All'
                ? SKILLS.length
                : SKILLS.filter((s) => s.category === cat.label).length;
            const isActive = activeCategory === cat.label;

            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActiveCategory(cat.label)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 glass-panel border border-purple-500/15 hover:border-purple-500/30'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 rounded-xl bg-purple-600/30 border border-cyan-400/50"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: 3D Tech Orbit & Stack Summary on Left, Skill Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): 3D Scene + Stack Insights Card */}
          <div className="lg:col-span-4 space-y-6">
            {/* Interactive 3D Stack Scene */}
            <SkillsOrbitScene />

            {/* Stack Highlights Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-5 rounded-2xl border border-purple-500/20 space-y-4"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-purple-500/15">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h4 className="font-display font-semibold text-sm text-white">
                  Stack Architecture Overview
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="font-medium text-slate-200">Client-Side:</span>{' '}
                    <span className="text-slate-400">
                      React 19, TypeScript, Tailwind CSS, Responsive Design, Three.js / R3F.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="font-medium text-slate-200">Server-Side:</span>{' '}
                    <span className="text-slate-400">
                      Node.js, Express.js, RESTful APIs, JWT Authentication, Modular Routing.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="font-medium text-slate-200">Persistence:</span>{' '}
                    <span className="text-slate-400">
                      MongoDB, Mongoose ODM, Schema Validation, Aggregation Queries.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0"></span>
                  <div>
                    <span className="font-medium text-slate-200">Foundations:</span>{' '}
                    <span className="text-slate-400">
                      B.Tech CS grounding in Data Structures, Algorithms, DBMS, and Python basics.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (8 cols): Filtered Skill Cards Grid */}
          <div className="lg:col-span-8">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* CS Engineering Foundations Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-purple-600/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1 md:col-span-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Academic Rigor
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                Computer Science Foundation
              </h4>
              <p className="text-xs text-slate-400 font-sans">
                Reinforced by B.Tech in CS curriculum and continuous engineering practice.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#060417]/80 border border-purple-500/15">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-medium text-xs text-slate-200 block">
                    Data Structures & Algorithms
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Time/space complexity awareness and algorithmic efficiency.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#060417]/80 border border-purple-500/15">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-medium text-xs text-slate-200 block">
                    Database System Design
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Schema modeling, indexing, document relationships, and ACID principles.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#060417]/80 border border-purple-500/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-medium text-xs text-slate-200 block">
                    REST Protocol & Networking
                  </span>
                  <span className="text-[11px] text-slate-400">
                    HTTP lifecycle, status codes, authentication headers, and stateless APIs.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#060417]/80 border border-purple-500/15">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-display font-medium text-xs text-slate-200 block">
                    Agile & Clean Code Habits
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Meaningful git commit histories, documentation, and maintainability.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
