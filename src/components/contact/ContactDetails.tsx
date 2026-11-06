import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, ArrowUpRight, Clock, Radio } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const ContactDetails = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Availability Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-6 rounded-2xl border border-purple-500/25 relative overflow-hidden"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider font-semibold">
            Status: Active & Open for Roles
          </span>
        </div>

        <h3 className="font-display font-bold text-lg text-white mb-2">
          Ready for High-Impact Software Engineering
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
          Seeking junior full-stack opportunities where I can leverage my <span className="text-cyan-300 font-medium">B.Tech in Computer Science</span> and hands-on <span className="text-purple-300 font-medium">MERN stack</span> experience to build scalable web software.
        </p>

        {/* Telemetry pill */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-purple-500/15 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>India (Flexible / Remote)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>IST (UTC+5:30)</span>
          </div>
        </div>
      </motion.div>

      {/* Copyable Email Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-panel p-5 rounded-2xl border border-purple-500/20 hover:border-cyan-400/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              Direct Inquiries
            </span>
            <span className="font-mono text-sm text-white font-medium">
              {PERSONAL_INFO.socials.email}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 transition-colors cursor-pointer shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied to Clipboard</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Email</span>
            </>
          )}
        </button>
      </motion.div>

      {/* Social Network Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-xl glass-panel border border-purple-500/20 hover:border-cyan-400/40 transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#07051a] border border-purple-500/20 text-slate-300 group-hover:text-cyan-300">
              <GithubIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-semibold text-xs text-white group-hover:text-cyan-300 transition-colors block">
                GitHub
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Repositories & Code
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href={PERSONAL_INFO.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-xl glass-panel border border-purple-500/20 hover:border-cyan-400/40 transition-all group flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#07051a] border border-purple-500/20 text-slate-300 group-hover:text-cyan-300">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-semibold text-xs text-white group-hover:text-cyan-300 transition-colors block">
                LinkedIn
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Professional Network
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>

      {/* Quick Transmission Note */}
      <div className="p-4 rounded-xl bg-[#060417]/80 border border-purple-500/15 flex items-center gap-3 text-xs text-slate-400 font-sans">
        <Radio className="w-4 h-4 text-purple-400 shrink-0 animate-pulse" />
        <span>
          Looking to discuss tech stack architecture or schedule an engineering interview? I typically reply within 24 hours.
        </span>
      </div>
    </div>
  );
};
