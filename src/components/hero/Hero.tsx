import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { HeroScene } from '../3d/HeroScene';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 lg:py-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column: Typography, Information, CTAs */}
          <div className="lg:col-span-7 flex items-center order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Right Column: Interactive 3D Holographic Core */}
          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 w-full">
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Floating Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 z-10 pointer-events-auto"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-1 text-[10px] font-mono tracking-widest text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <span className="flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-purple-400" />
            <span>SCROLL TO EXPLORE</span>
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="p-1 rounded-full border border-purple-500/30 group-hover:border-cyan-400/50 bg-[#070617]/80"
          >
            <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
