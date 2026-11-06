import { motion } from 'framer-motion';
import { History, ShieldCheck, Award, Code2, Rocket } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { ExperienceTimelineItem } from './ExperienceTimelineItem';
import { EXPERIENCE_MILESTONES } from '../../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-700/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          badgeNumber="04"
          badgeText="JOURNEY & MILESTONES"
          badgeIcon={<History className="w-3.5 h-3.5" />}
          title="Academic Foundations &"
          titleGradient="Engineering Milestones."
          subtitle="A transparent timeline of my Computer Science degree, practical full-stack project engineering, and modern web specializations."
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12 mb-16">
          {EXPERIENCE_MILESTONES.map((item, index) => (
            <ExperienceTimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === EXPERIENCE_MILESTONES.length - 1}
            />
          ))}
        </div>

        {/* Integrity & Readiness Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/20 relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-1.5 md:col-span-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Engineering Integrity</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                Genuine Skills, Measurable Impact
              </h4>
              <p className="text-xs text-slate-400 font-sans">
                Focused on demonstrated competency and scalable code architectures over inflated claims.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#060417]/80 border border-purple-500/15 flex flex-col justify-between">
                <Award className="w-5 h-5 text-purple-400 mb-2" />
                <div>
                  <div className="font-display font-bold text-base text-white">B.Tech CS</div>
                  <div className="text-[11px] font-mono text-slate-400">Computer Science Degree</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060417]/80 border border-purple-500/15 flex flex-col justify-between">
                <Code2 className="w-5 h-5 text-cyan-400 mb-2" />
                <div>
                  <div className="font-display font-bold text-base text-white">6+ Systems</div>
                  <div className="text-[11px] font-mono text-slate-400">Production Applications</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#060417]/80 border border-purple-500/15 flex flex-col justify-between">
                <Rocket className="w-5 h-5 text-emerald-400 mb-2" />
                <div>
                  <div className="font-display font-bold text-base text-white">Ready for Hire</div>
                  <div className="text-[11px] font-mono text-slate-400">Junior MERN Developer</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
