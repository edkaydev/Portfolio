import React from 'react';
import { resumeData } from '../data/data';
import { BookOpen, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

// Type definitions for education/experience
type TimelineItem = {
  title: string;
  date: string;
  desc: string;
};

type TimelineProps = {
  title: string;
  icon: React.ReactNode;
  items: TimelineItem[];
};

export const Resume = () => (
  <section className="animate-fade-in">
    <Timeline title="Education" icon={<BookOpen size={20} />} items={resumeData.education} />
    <Timeline title="Experience" icon={<Briefcase size={20} />} items={resumeData.experience} />

    <h3 className="mt-12 mb-8 text-xl font-bold text-white">Key Skills</h3>
    <div className="bg-brand-card p-8 rounded-3xl border border-brand-border space-y-6">
      {resumeData.skills.map(skill => (
        <div key={skill.name}>
          <div className="flex justify-between mb-2 text-sm font-bold">
            <span className="text-white">{skill.name}</span>
            <span className="text-brand-muted">{skill.level}%</span>
          </div>
          <div className="h-2 bg-brand-border rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: `${skill.level}%` }} 
              transition={{ duration: 1 }} 
              className="h-full bg-brand-accent shadow-[0_0_10px_rgba(10,132,255,0.5)]" 
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Timeline = ({ title, icon, items }: TimelineProps) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 bg-brand-card rounded-xl text-brand-accent border border-brand-border">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="ml-7 border-l border-brand-border space-y-8">
      {items.map((item, i) => (
        <div 
          key={i} 
          className="relative pl-8 before:content-[''] before:absolute before:left-[-5px] before:top-1 before:w-[10px] before:h-[10px] before:bg-brand-accent before:rounded-full before:shadow-[0_0_0_4px_#1E293B]"
        >
          <h4 className="mb-1 text-sm font-bold text-white">{item.title}</h4>
          <p className="text-brand-accent text-xs mb-2">{item.date}</p>
          <p className="text-xs leading-relaxed text-gray-400">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);