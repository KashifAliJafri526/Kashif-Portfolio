import React from 'react';
import {
  Code2,
  FileCode,
  Server,
  Globe,
  Database,
  Terminal,
  Layers,
  Send,
  Boxes,
  Cpu,
  Palette,
} from 'lucide-react';
import type { Skill } from '../../types';

interface SkillIconProps {
  iconType: Skill['iconType'];
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ iconType, className = 'w-5 h-5' }) => {
  switch (iconType) {
    case 'react':
      return <Code2 className={`${className} text-cyan-400`} />;
    case 'typescript':
      return <Cpu className={`${className} text-sky-400`} />;
    case 'javascript':
      return <FileCode className={`${className} text-amber-400`} />;
    case 'node':
      return <Server className={`${className} text-emerald-400`} />;
    case 'express':
      return <Globe className={`${className} text-purple-400`} />;
    case 'mongo':
      return <Database className={`${className} text-emerald-500`} />;
    case 'python':
      return <Terminal className={`${className} text-indigo-400`} />;
    case 'tailwind':
      return <Palette className={`${className} text-teal-400`} />;
    case 'three':
      return <Layers className={`${className} text-rose-400`} />;
    case 'git':
      return <Boxes className={`${className} text-orange-400`} />;
    case 'postman':
      return <Send className={`${className} text-amber-500`} />;
    case 'api':
      return <Globe className={`${className} text-cyan-300`} />;
    case 'html':
    default:
      return <Code2 className={`${className} text-purple-400`} />;
  }
};
