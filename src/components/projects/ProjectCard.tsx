import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, CheckCircle2, Info } from 'lucide-react';
import type { Project } from '../../types';
import { ProjectGraphic } from './ProjectGraphic';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectCardProps {
  project: Project;
  index: number;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onInspect }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group glass-panel rounded-2xl border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Project Graphic / Visual Preview Header */}
        <div className="relative overflow-hidden cursor-pointer" onClick={() => onInspect(project)}>
          <ProjectGraphic id={project.id} category={project.category} />

          {/* Overlay Hover Hint */}
          <div className="absolute inset-0 bg-[#030014]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-400/50 text-xs font-mono text-cyan-300 shadow-lg">
              <Info className="w-3.5 h-3.5" />
              <span>Click to Inspect Architecture</span>
            </span>
          </div>

          {/* Badges on Top of Graphic */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#030014]/85 text-purple-300 border border-purple-500/30 backdrop-blur-md">
              {project.category}
            </span>

            {project.featured && (
              <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#030014]/85 text-cyan-300 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                <span>Featured</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3
              onClick={() => onInspect(project)}
              className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h3>
            <p className="text-xs font-mono text-purple-300/90 mt-1 line-clamp-1">
              {project.tagline}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Highlights Bullets */}
          <div className="space-y-1.5 pt-1">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#07051c] text-slate-300 border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 py-4 bg-[#050317]/80 border-t border-purple-500/15 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onInspect(project)}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-200 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="p-2 rounded-lg glass-panel text-slate-400 hover:text-white hover:border-purple-400/40 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] cursor-pointer"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
