import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../../data/portfolioData';
import { GlowButton } from './GlowButton';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#030014]/80 backdrop-blur-xl border-b border-purple-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all">
              <div className="w-full h-full bg-[#070617] rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-cyan-300">
                &lt;K/&gt;
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                Kashif Ali Jafri
              </span>
              <span className="font-mono text-[10px] text-purple-400 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>MERN DEVELOPER</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-panel border border-purple-500/20">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-purple-500/20 border border-cyan-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="px-1.5 py-0.2 text-[9px] font-mono rounded bg-purple-500/30 text-purple-300 border border-purple-400/30">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-purple-950/40 rounded-lg transition-colors border border-transparent hover:border-purple-500/30"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-purple-950/40 rounded-lg transition-colors border border-transparent hover:border-purple-500/30"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <GlowButton href="#contact" variant="primary" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
              Connect
            </GlowButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-cyan-300 rounded-lg border border-purple-500/20 glass-panel"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-18 z-40 p-4 md:hidden"
          >
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 shadow-2xl space-y-4 bg-[#0a0720]/95 backdrop-blur-2xl">
              <div className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-purple-900/30 transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs font-mono rounded bg-purple-500/20 text-purple-300">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-300 hover:text-cyan-300 rounded-lg glass-panel"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-300 hover:text-cyan-300 rounded-lg glass-panel"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.socials.email}`}
                    className="p-2 text-slate-300 hover:text-cyan-300 rounded-lg glass-panel"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <GlowButton
                  href="#contact"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Contact
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
