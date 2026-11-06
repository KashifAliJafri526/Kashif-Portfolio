import React from 'react';
import { Sun, Building2, Users, HeartPulse, Film, Home, Activity } from 'lucide-react';

interface ProjectGraphicProps {
  id: string;
  category: string;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ id }) => {
  switch (id) {
    case 'solar-path':
    case 'solarpath':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0c0a24] to-[#040212] overflow-hidden flex items-center justify-center p-6 border-b border-purple-500/15">
          {/* Cyber grid lines */}
          <div className="absolute inset-0 cyber-grid opacity-50" />
          {/* Glowing sun and solar array wireframe */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-3">
              <div className="absolute w-16 h-16 rounded-full bg-amber-500/20 blur-md animate-pulse" />
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <Sun className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            {/* Solar panel grid simulation */}
            <div className="grid grid-cols-4 gap-1.5 w-44 p-2 rounded-lg bg-[#07051a]/90 border border-amber-500/20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-3 rounded-sm bg-gradient-to-b from-cyan-500/30 to-amber-500/20 border border-cyan-400/20"
                />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-cyan-300">
              <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span>Solar Telemetry: Active (8.4 kW Output)</span>
            </div>
          </div>
        </div>
      );

    case 'msmart-chandigarh':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0a0822] to-[#030111] overflow-hidden flex items-center justify-center p-6 border-b border-purple-500/15">
          <div className="absolute inset-0 cyber-grid opacity-50" />
          <div className="relative z-10 flex flex-col items-center">
            {/* Civic Radar Ping */}
            <div className="relative flex items-center justify-center mb-3">
              <div className="absolute w-20 h-20 rounded-full border border-cyan-500/30 animate-ping" />
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <Building2 className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            {/* Municipal dispatch status bar */}
            <div className="w-48 bg-[#07051a]/90 p-2 rounded-lg border border-cyan-500/20 space-y-1.5">
              <div className="flex justify-between text-[10px] font-mono text-slate-300">
                <span>Citizen Grievances</span>
                <span className="text-emerald-400">98.2% Resolved</span>
              </div>
              <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      );

    case 'myems':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0d0928] to-[#040113] overflow-hidden flex items-center justify-center p-6 border-b border-purple-500/15">
          <div className="absolute inset-0 cyber-grid opacity-50" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-3">
              <div className="absolute w-16 h-16 rounded-full bg-purple-500/20 blur-md animate-pulse" />
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            {/* Enterprise Hierarchy node diagram */}
            <div className="flex items-center gap-2 bg-[#07051a]/90 px-3 py-1.5 rounded-lg border border-purple-500/20 text-[10px] font-mono text-slate-300">
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Admin
              </span>
              <span>→</span>
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                HR
              </span>
              <span>→</span>
              <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Staff
              </span>
            </div>
            <span className="text-[10px] font-mono text-purple-300 mt-2">
              Role-Based Access Control Active
            </span>
          </div>
        </div>
      );

    case 'bodhmantraa':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#090b26] to-[#020311] overflow-hidden flex items-center justify-center p-6 border-b border-purple-500/15">
          <div className="absolute inset-0 cyber-grid opacity-50" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-3">
              <div className="absolute w-16 h-16 rounded-full bg-teal-500/20 blur-md animate-pulse" />
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                <HeartPulse className="w-6 h-6 text-teal-400" />
              </div>
            </div>
            {/* Sound waveform & course progress */}
            <div className="flex items-end gap-1 h-6 w-36 px-2 py-1 rounded bg-[#07051a]/90 border border-teal-500/20">
              {[40, 75, 55, 90, 60, 100, 45, 80, 65, 95, 50, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-teal-500 to-cyan-300 rounded-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <span className="text-[10px] font-mono text-teal-300 mt-2">
              Interactive Course Modules & Audio
            </span>
          </div>
        </div>
      );

    case 'movix':
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#12071d] to-[#04010b] overflow-hidden flex items-center justify-center p-6 border-b border-purple-500/15">
          <div className="absolute inset-0 cyber-grid opacity-50" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-3">
              <div className="absolute w-16 h-16 rounded-full bg-rose-500/20 blur-md animate-pulse" />
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                <Film className="w-6 h-6 text-rose-400" />
              </div>
            </div>
            {/* Movie discovery reel */}
            <div className="flex items-center gap-1.5 w-44 bg-[#07051a]/90 p-1.5 rounded-lg border border-rose-500/20">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1/4 h-8 rounded bg-gradient-to-br from-rose-500/30 via-purple-600/30 to-slate-900 border border-rose-400/20"
                />
              ))}
            </div>
            <span className="text-[10px] font-mono text-rose-300 mt-2">
              TMDB API Infinite Catalog
            </span>
          </div>
        </div>
      );

    case 'stech-interior':
    default:
      return (
        <div className="relative w-full h-48 bg-gradient-to-br from-[#0c0926] to-[#030213] overflow-hidden flex items-center justify-center p-6 border-b border-purple-500/15">
          <div className="absolute inset-0 cyber-grid opacity-50" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center mb-3">
              <div className="absolute w-16 h-16 rounded-full bg-indigo-500/20 blur-md animate-pulse" />
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <Home className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            {/* Isometric interior layout box */}
            <div className="w-40 bg-[#07051a]/90 p-2 rounded-lg border border-indigo-500/20 text-center">
              <div className="text-[10px] font-mono text-indigo-300">
                Architectural Showcase
              </div>
              <div className="flex justify-center gap-1 mt-1 text-[9px] font-mono text-slate-400">
                <span>Lightbox</span> • <span>Portfolio</span> • <span>Inquiry</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
