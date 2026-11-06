import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Check, Copy, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const TerminalCard = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'config' | 'bash'>('config');

  const configCode = `// Kashif Ali Jafri — Profile Configuration
export const developer: DeveloperProfile = {
  name: "${PERSONAL_INFO.name}",
  role: "${PERSONAL_INFO.role}",
  location: "${PERSONAL_INFO.location}",
  education: "${PERSONAL_INFO.education}",
  status: "${PERSONAL_INFO.status}",
  coreStack: [
    "React", "TypeScript", "Node.js", 
    "Express.js", "MongoDB"
  ],
  foundation: [
    "Data Structures", "Algorithms", 
    "DBMS", "RESTful Architecture"
  ],
  interests: ["Interactive 3D Web", "Python Basics", "System Design"],
  availableForWork: true
};`;

  const bashLogs = `$ npx kashif-status --inspect
[OK] Initializing runtime environment...
[OK] Computer Science B.Tech verified.
[OK] Primary Stack: MERN (React, Node, Express, MongoDB)
[OK] TypeScript & REST APIs loaded.
[READY] Open for high-impact software engineering roles.`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'config' ? configCode : bashLogs;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-panel rounded-2xl border border-purple-500/25 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] group hover:border-cyan-400/40 transition-all duration-300"
    >
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0720]/80 border-b border-purple-500/15">
        <div className="flex items-center gap-2">
          {/* Cyber dots */}
          <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.4)]"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>

          {/* Tab selector */}
          <div className="flex items-center gap-1 ml-4 bg-[#030014]/60 p-0.5 rounded-lg border border-purple-500/20">
            <button
              type="button"
              onClick={() => setActiveTab('config')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                activeTab === 'config'
                  ? 'bg-purple-600/30 text-cyan-300 border border-purple-400/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>developer.ts</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('bash')}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-md transition-colors ${
                activeTab === 'bash'
                  ? 'bg-purple-600/30 text-cyan-300 border border-purple-400/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <TerminalIcon className="w-3 h-3" />
              <span>status.sh</span>
            </button>
          </div>
        </div>

        {/* Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-300 hover:bg-purple-500/10 transition-colors border border-transparent hover:border-purple-500/20"
          title="Copy snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 text-[10px]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[10px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Code Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-[#040212]/95 text-slate-300 leading-relaxed max-h-[360px]">
        {activeTab === 'config' ? (
          <pre className="space-y-1">
            <span className="text-purple-400">// Kashif Ali Jafri — Profile Configuration</span>
            {'\n'}
            <span className="text-cyan-400">export const</span>{' '}
            <span className="text-indigo-300">developer</span>:{' '}
            <span className="text-amber-300">DeveloperProfile</span> = &#123;
            {'\n'}
            {'  '}<span className="text-slate-400">name</span>:{' '}
            <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
            {'\n'}
            {'  '}<span className="text-slate-400">role</span>:{' '}
            <span className="text-emerald-300">"{PERSONAL_INFO.role}"</span>,
            {'\n'}
            {'  '}<span className="text-slate-400">location</span>:{' '}
            <span className="text-emerald-300">"{PERSONAL_INFO.location}"</span>,
            {'\n'}
            {'  '}<span className="text-slate-400">education</span>:{' '}
            <span className="text-emerald-300">"{PERSONAL_INFO.education}"</span>,
            {'\n'}
            {'  '}<span className="text-slate-400">status</span>:{' '}
            <span className="text-cyan-300">"{PERSONAL_INFO.status}"</span>,
            {'\n'}
            {'  '}<span className="text-slate-400">coreStack</span>: [
            {'\n'}
            {'    '}<span className="text-purple-300">"React"</span>,{' '}
            <span className="text-purple-300">"TypeScript"</span>,{' '}
            <span className="text-purple-300">"Node.js"</span>,{' '}
            <span className="text-purple-300">"Express"</span>,{' '}
            <span className="text-purple-300">"MongoDB"</span>
            {'\n'}
            {'  '}],
            {'\n'}
            {'  '}<span className="text-slate-400">foundation</span>: [
            {'\n'}
            {'    '}<span className="text-amber-300">"Data Structures"</span>,{' '}
            <span className="text-amber-300">"Algorithms"</span>,{' '}
            <span className="text-amber-300">"DBMS"</span>,{' '}
            <span className="text-amber-300">"REST APIs"</span>
            {'\n'}
            {'  '}],
            {'\n'}
            {'  '}<span className="text-slate-400">availableForWork</span>:{' '}
            <span className="text-cyan-400 font-bold">true</span>
            {'\n'}
            &#125;;
          </pre>
        ) : (
          <div className="space-y-2 text-cyan-300/90">
            <p className="text-purple-400">$ npx kashif-status --inspect</p>
            <p className="text-emerald-400">[OK] Initializing runtime environment...</p>
            <p className="text-slate-300">[OK] Computer Science B.Tech verified.</p>
            <p className="text-cyan-300">[OK] Primary Stack: MERN (React, Node, Express, MongoDB)</p>
            <p className="text-slate-300">[OK] TypeScript & REST APIs loaded.</p>
            <p className="text-indigo-300">[OK] 6 Core Applications Engineered.</p>
            <p className="text-emerald-300 font-bold">[READY] Open for high-impact software engineering roles.</p>
          </div>
        )}
      </div>

      {/* Terminal Footer status */}
      <div className="px-4 py-2 bg-[#07051a] border-t border-purple-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>UTF-8 • TypeScript 5+</span>
        </span>
        <span className="text-purple-400/70">MERN Developer Environment</span>
      </div>
    </motion.div>
  );
};
