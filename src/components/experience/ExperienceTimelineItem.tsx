import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Server, Sparkles, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import type { ExperienceItem } from '../../types';

interface ExperienceTimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

export const ExperienceTimelineItem: React.FC<ExperienceTimelineItemProps> = ({
  item,
  index,
  isLast,
}) => {
  const getIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Experience':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Milestone':
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const getTypeBadge = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Education':
        return 'bg-cyan-950/60 text-cyan-300 border-cyan-400/30';
      case 'Experience':
        return 'bg-purple-950/60 text-purple-300 border-purple-400/30';
      case 'Milestone':
      default:
        return 'bg-amber-950/60 text-amber-300 border-amber-400/30';
    }
  };

  return (
    <div className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0">
      {/* Timeline Node & Spine */}
      <div className="flex flex-col items-center">
        {/* Glowing Node Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative z-10 w-12 h-12 rounded-2xl bg-[#090620] border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] shrink-0"
        >
          {getIcon(item.type)}
          {/* Subtle outer pulse ring */}
          <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 animate-pulse pointer-events-none" />
        </motion.div>

        {/* Vertical connecting line */}
        {!isLast && (
          <div className="w-0.5 grow bg-gradient-to-b from-purple-500/50 via-cyan-400/30 to-purple-500/10 my-2" />
        )}
      </div>

      {/* Milestone Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="grow glass-panel p-6 sm:p-7 rounded-2xl border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 space-y-4 group"
      >
        {/* Header Bar */}
        <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-purple-500/15">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${getTypeBadge(item.type)}`}>
                {item.type}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-cyan-300">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>{item.location}</span>
              </span>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-purple-300/90 mt-0.5">
              {item.company}
            </p>
          </div>

          <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-[#07051a] text-slate-300 border border-purple-500/20 shrink-0">
            <Calendar className="w-3 h-3 text-purple-400" />
            <span>{item.period}</span>
          </span>
        </div>

        {/* Description Bullets */}
        <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {item.description.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Technologies Involved */}
        <div className="pt-2 border-t border-purple-500/10">
          <div className="flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-950/40 text-slate-300 border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
