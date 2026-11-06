import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, GraduationCap, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GlowButton } from '../common/GlowButton';
import { TechPills } from './TechPills';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center space-y-6 sm:space-y-8 z-10 max-w-2xl">
      {/* Top Status & Location Badges */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center gap-2.5"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Location & Degree Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-purple-500/20 text-xs font-mono text-slate-300">
          <MapPin className="w-3 h-3 text-cyan-400" />
          <span>{PERSONAL_INFO.location}</span>
          <span className="text-purple-400/40">•</span>
          <GraduationCap className="w-3 h-3 text-purple-400" />
          <span>{PERSONAL_INFO.education}</span>
        </div>
      </motion.div>

      {/* Main Headline & Intro */}
      <div className="space-y-3">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>Hello World, I'm</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] font-display"
        >
          <span className="text-white block">Kashif Ali</span>
          <span className="text-gradient-primary block">Jafri</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-2xl font-semibold text-slate-300 flex items-center gap-2 font-display"
        >
          <span className="text-cyan-300">{PERSONAL_INFO.role}</span>
          <span className="text-purple-400/60 font-light">•</span>
          <span className="text-slate-400 font-normal text-base sm:text-xl">Full-Stack Engineer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans pt-1"
        >
          {PERSONAL_INFO.shortPitch}
        </motion.p>
      </div>

      {/* Interactive CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-wrap items-center gap-3 pt-1"
      >
        <GlowButton
          href="#projects"
          variant="primary"
          size="lg"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Explore Projects
        </GlowButton>

        <GlowButton
          href="#contact"
          variant="secondary"
          size="lg"
          icon={<Mail className="w-4 h-4 text-cyan-400" />}
          iconPosition="left"
        >
          Get in Touch
        </GlowButton>

        {/* Quick Social Buttons */}
        <div className="flex items-center gap-2 pl-1">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-all border border-purple-500/20 shadow-md"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-all border border-purple-500/20 shadow-md"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Primary Tech Stack Pills */}
      <TechPills />

      {/* Quick Metrics Counter strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-purple-500/15"
      >
        {PERSONAL_INFO.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl text-cyan-300">
              {stat.value}
            </span>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
