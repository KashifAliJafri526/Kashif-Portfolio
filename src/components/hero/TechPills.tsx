import { motion } from 'framer-motion';
import { Database, Server, Code2, Globe, Cpu, Layers } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
  accent: string; // color highlight
}

const PRIMARY_TECH: TechItem[] = [
  { name: 'React', category: 'Frontend UI', icon: <Code2 className="w-3.5 h-3.5" />, accent: '#00f0ff' },
  { name: 'TypeScript', category: 'Type Safety', icon: <Cpu className="w-3.5 h-3.5" />, accent: '#38bdf8' },
  { name: 'Node.js', category: 'Runtime', icon: <Server className="w-3.5 h-3.5" />, accent: '#34d399' },
  { name: 'Express', category: 'REST APIs', icon: <Globe className="w-3.5 h-3.5" />, accent: '#c084fc' },
  { name: 'MongoDB', category: 'Database', icon: <Database className="w-3.5 h-3.5" />, accent: '#10b981' },
  { name: 'Three.js / R3F', category: '3D Graphics', icon: <Layers className="w-3.5 h-3.5" />, accent: '#f43f5e' },
];

export const TechPills = () => {
  return (
    <div className="pt-2">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
        <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
          Primary Engineering Stack
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRIMARY_TECH.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + idx * 0.08, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-panel border border-purple-500/20 hover:border-cyan-400/50 transition-all cursor-default group"
          >
            <span style={{ color: tech.accent }}>{tech.icon}</span>
            <span className="text-xs font-medium text-slate-200 group-hover:text-white">
              {tech.name}
            </span>
            <span className="hidden sm:inline text-[9px] font-mono text-purple-400/80 bg-purple-950/50 px-1.5 py-0.5 rounded border border-purple-800/40">
              {tech.category}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
