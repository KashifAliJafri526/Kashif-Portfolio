import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS, PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon } from '../common/SocialIcons';
import type { Project } from '../../types';

type ProjectCategoryFilter = 'All' | 'Full Stack' | 'Enterprise' | 'Frontend';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { label: ProjectCategoryFilter; icon: React.ReactNode }[] = [
    { label: 'All', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { label: 'Full Stack', icon: <Layers className="w-3.5 h-3.5" /> },
    { label: 'Enterprise', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { label: 'Frontend', icon: <Layers className="w-3.5 h-3.5" /> },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-purple-700/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeNumber="03"
          badgeText="FEATURED WORK"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          title="Engineered Applications &"
          titleGradient="Full-Stack Systems."
          subtitle="A showcase of full-stack MERN platforms, enterprise management suites, citizen portals, and clean energy applications."
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const count =
              cat.label === 'All'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat.label).length;
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
                    layoutId="activeProjectCategory"
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

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onInspect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Call-to-Action Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Continuous Development
            </span>
            <h4 className="font-display font-bold text-lg sm:text-xl text-white">
              Explore More Source Code on GitHub
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Review repository commit histories, documentation, and frontend/backend implementations.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono text-white bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 hover:border-cyan-400/50 shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-cyan-300" />
            <span>Visit GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </motion.div>
      </div>

      {/* Architecture Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
