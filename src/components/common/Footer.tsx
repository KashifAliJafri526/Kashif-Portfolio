import { ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/15 bg-[#02000d]/90 backdrop-blur-xl pt-16 pb-12 overflow-hidden z-10">
      {/* Background glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-purple-500/10 items-start">
          {/* Brand & Bio Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <div className="w-full h-full bg-[#070617] rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
                  &lt;K/&gt;
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm font-sans leading-relaxed">
              Junior MERN Stack Developer based in India with a B.Tech in Computer Science. Focused on scalable web software, clean RESTful architectures, and interactive 3D web experiences.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-300">
                Available for New Roles & Projects
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-purple-400/50">/</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top Column */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Connect Channels
            </span>
            <div className="flex items-center md:justify-end gap-2.5">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors border border-purple-500/20"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors border border-purple-500/20"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors border border-purple-500/20 cursor-pointer"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              India (IST / UTC+5:30)
            </p>
          </div>
        </div>

        {/* Bottom Technology Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>React 19 • Three.js • R3F • Tailwind CSS • Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
