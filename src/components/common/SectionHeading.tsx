import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badgeNumber?: string;
  badgeText: string;
  badgeIcon?: React.ReactNode;
  title: string;
  titleGradient?: string;
  subtitle: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeNumber,
  badgeText,
  badgeIcon,
  title,
  titleGradient,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`space-y-3 mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      {/* Badge with glowing pill */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-purple-500/25 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] ${
          centered ? 'mx-auto' : ''
        }`}
      >
        {badgeIcon && <span className="text-purple-400">{badgeIcon}</span>}
        {badgeNumber && <span className="text-purple-400 font-semibold">{badgeNumber} //</span>}
        <span className="tracking-widest uppercase">{badgeText}</span>
      </motion.div>

      {/* Main Gradient Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display text-white"
      >
        {title}{' '}
        {titleGradient && (
          <span className="text-gradient-primary block sm:inline">{titleGradient}</span>
        )}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};
