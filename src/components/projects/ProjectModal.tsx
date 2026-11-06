import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, CheckCircle2, Workflow, Layers, ArrowUpRight, UserCheck } from 'lucide-react';
import type { Project } from '../../types';
import { GithubIcon } from '../common/SocialIcons';
import { ProjectGraphic } from './ProjectGraphic';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030014]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel bg-[#090620]/95 rounded-2xl border border-purple-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0a0724] border-b border-purple-500/15">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                Project Architecture & Details // {project.category}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-900/40 border border-transparent hover:border-purple-500/30 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Visual Graphic Header */}
            <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-inner">
              <ProjectGraphic id={project.id} category={project.category} />
            </div>

            {/* Title & Tagline */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-950/60 text-purple-300 border border-purple-400/30">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-400/30">
                    Featured Project
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-cyan-300 mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Developer Role */}
            {project.role && (
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#060417] border border-purple-500/20 text-xs font-mono">
                <UserCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-purple-400 uppercase tracking-wider font-semibold">My Role:</span>
                <span className="text-slate-200 font-medium">{project.role}</span>
              </div>
            )}

            {/* Full Description */}
            <div className="text-sm text-slate-300 leading-relaxed font-sans space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                About the System
              </div>
              <p>{project.description}</p>
            </div>

            {/* Key Implemented Features */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Implemented Features</span>
                </div>
                <div className="space-y-2">
                  {project.highlights.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#060417]/80 border border-purple-500/15 text-xs text-slate-300 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Pipeline Flow */}
            {project.architecture && (
              <div className="p-4 rounded-xl bg-[#060417] border border-purple-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  <Workflow className="w-4 h-4" />
                  <span className="uppercase tracking-wider">Architecture Pipeline</span>
                </div>
                <p className="font-mono text-xs text-cyan-300 bg-purple-950/40 p-2.5 rounded-lg border border-purple-800/40">
                  {project.architecture}
                </p>
              </div>
            )}

            {/* Key Engineering Challenges Solved */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Technical Challenges & Solutions</span>
                </div>
                <div className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#060417]/80 border border-purple-500/15 text-xs text-slate-300 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Performance Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl glass-panel border border-purple-500/20 text-center"
                  >
                    <div className="font-display font-bold text-base sm:text-lg text-cyan-300">
                      {m.value}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Technologies Utilized</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-950/40 text-slate-200 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-[#07051e] border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white glass-panel border border-purple-500/20 hover:border-cyan-400/40 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              ) : null}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] border border-purple-400/30 transition-all cursor-pointer"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
