import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Github, ExternalLink, X } from 'lucide-react';
import { Eye, Github, ExternalLink, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/data';
import { ParticleSphere } from './ParticleSphere';

// Type for each portfolio project
type PortfolioProject = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech?: string[];
  link?: string;
  gitLink?: string;
};

export const PortfolioGrid = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Web Application', 'Landing Page', 'WordPress', 'StartUp', 'Application'];
  const filteredProjects = filter === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === filter);

  return (
    <section className="animate-fade-in">
      {/* Featured Project Spotlight */}
      {filter === 'All' && (
        <div className="relative mb-16 overflow-hidden border bg-brand-card border-brand-border rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Content */}
            <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12">
              <span className="mb-4 font-mono text-xs font-bold tracking-widest uppercase text-brand-accent">
                Featured System
              </span>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Manira Store
              </h2>
              <p className="max-w-md mb-8 text-base leading-relaxed text-gray-400">
                A specialized commerce engine empowering local craftsmanship through an optimized, mobile-first marketplace experience. Built for scale and conversion.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'TypeScript', 'Firebase'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full bg-brand-black/40 border-brand-border text-brand-muted font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Visuals & CTA */}
            <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-full bg-brand-black/20 border-l border-brand-border/50">
              <div className="absolute inset-0 z-0">
                <ParticleSphere />
              </div>
              <a 
                href="https://manira.store" 
                target="_blank" 
                className="relative z-10 flex items-center justify-center w-24 h-24 transition-all duration-500 border bg-brand-card border-brand-border rounded-2xl group hover:border-brand-accent hover:scale-105"
              >
                <ArrowUpRight size={32} className="transition-transform text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Filter Navigation */}
      <nav className="flex flex-wrap gap-6 mb-8 text-sm font-medium">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`transition-colors duration-300 ${
              filter === cat ? 'text-brand-accent border-b border-brand-accent' : 'text-brand-muted hover:text-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
          {filteredProjects.filter(p => filter !== 'All' || p.id !== 1).map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`cursor-pointer group ${project.title === 'Manira Store' ? 'md:col-span-2 xl:col-span-2' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative mb-4 overflow-hidden transition-all border rounded-3xl bg-brand-card border-brand-border group-hover:border-brand-accent/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full ${project.title === 'Manira Store' ? 'aspect-video' : 'aspect-[4/3]'} object-cover transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-[#00000066] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 border shadow-2xl bg-brand-card rounded-xl text-brand-accent border-brand-border">
                    <Eye size={24} />
                  </div>
                </div>
              </div>

              <h3 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-brand-accent">
                {project.title}
              </h3>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted">{project.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-2xl overflow-hidden border shadow-2xl bg-brand-card border-brand-border rounded-3xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute z-10 p-2 text-white transition-colors border top-4 right-4 bg-brand-black rounded-xl hover:text-brand-accent border-brand-border"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto max-h-[90vh]">
                <img
                  src={selectedProject.image}
                  className="object-cover w-full aspect-video"
                  alt={selectedProject.title}
                />
                <div className="p-8">
                  <h3 className="mb-1 text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-brand-accent text-[10px] font-bold uppercase tracking-wider mb-4">
                    {selectedProject.category}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech?.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-brand-black border border-brand-border rounded-full text-[10px] text-white font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    {selectedProject.gitLink && (
                      <a
                        href={selectedProject.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#2b2b2c] border border-[#383838] py-3 rounded-2xl flex items-center justify-center gap-2 text-white font-bold hover:bg-[#333335] transition-all"
                      >
                        <Github size={18} /> GitHub
                      </a>
                    )}

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-brand-accent py-3 rounded-2xl flex items-center justify-center gap-2 text-white font-bold hover:bg-brand-accent/90 transition-all shadow-[0_0_20px_rgba(10,132,255,0.3)]"
                      >
                        <ExternalLink size={18} /> Live Preview
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};