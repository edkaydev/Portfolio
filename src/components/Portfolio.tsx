import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Github, ExternalLink, X } from 'lucide-react';
import { portfolioData } from '../data/data';

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

  const categories = ['All', 'Web Application', 'Landing Page', 'WordPress', 'StartUp'];
  const filteredProjects = filter === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === filter);

  return (
    <section className="animate-fade-in">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`cursor-pointer group ${project.title === 'Manira Store' ? 'md:col-span-2' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-3xl mb-4 bg-brand-card border border-brand-border group-hover:border-brand-accent/50 transition-all">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full ${project.title === 'Manira Store' ? 'aspect-video' : 'aspect-[4/3]'} object-cover transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-[#00000066] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 bg-brand-card rounded-xl text-brand-accent shadow-2xl border border-brand-border">
                    <Eye size={24} />
                  </div>
                </div>
              </div>

              <h3 className="mb-1 text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-brand-muted uppercase tracking-widest font-semibold">{project.category}</p>
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
              className="bg-[#1e1e1f] border border-[#383838] w-full max-w-2xl rounded-3xl overflow-hidden relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#2b2b2c] rounded-xl text-white z-10 hover:text-[#ffdb70] transition-colors border border-[#383838]"
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
                  <p className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider mb-4">
                    {selectedProject.category}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech?.map(t => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-[#2b2b2c] border border-[#383838] rounded-full text-[10px] text-white font-medium"
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
                        className="flex-1 bg-[#ffdb70] py-3 rounded-2xl flex items-center justify-center gap-2 text-black font-bold hover:bg-[#ffd34d] transition-all shadow-[0_0_20px_rgba(255,219,112,0.2)]"
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