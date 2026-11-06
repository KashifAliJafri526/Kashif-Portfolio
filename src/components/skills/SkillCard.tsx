import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../../types';
import { SkillIcon } from './SkillIcon';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'Core Expertise':
        return 'bg-purple-950/60 text-cyan-300 border-cyan-400/30';
      case 'Advanced':
        return 'bg-indigo-950/60 text-indigo-300 border-indigo-400/30';
      case 'Proficient':
        return 'bg-blue-950/60 text-sky-300 border-sky-400/30';
      default:
        return 'bg-slate-900/60 text-slate-300 border-slate-700/50';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-panel p-5 rounded-xl border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
    >
      <div>
        {/* Top Header: Icon, Name & Level Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#07051a] border border-purple-500/25 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all">
              <SkillIcon iconType={skill.iconType} className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h4>
              <span className="text-[10px] font-mono text-purple-400/80 uppercase tracking-wider">
                {skill.category}
              </span>
            </div>
          </div>

          <span
            className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getBadgeColor(
              skill.level
            )}`}
          >
            {skill.level}
          </span>
        </div>

        {/* Focus description */}
        <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
          {skill.focus}
        </p>
      </div>

      {/* Progress / Proficiency Gauge */}
      <div className="pt-2 border-t border-purple-500/10">
        <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
          <span className="text-slate-400">Mastery Index</span>
          <span className="text-cyan-300 font-semibold">{skill.proficiency}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden p-[1px] border border-purple-900/30">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 + index * 0.03, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)]"
          />
        </div>
      </div>
    </motion.div>
  );
};
