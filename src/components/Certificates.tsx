import React from 'react';
import { resumeData } from '../data/data';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates = () => (
  <section className="animate-fade-in">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {resumeData.certifications.map((cert, index) => (
        <div 
          key={index}
          className="p-6 transition-all duration-300 border shadow-sm bg-brand-card border-brand-border rounded-3xl hover:border-brand-accent group"
        >
          <div className="flex items-start gap-5">
            <div className="p-3 transition-all duration-300 border bg-brand-black text-brand-accent border-brand-border rounded-2xl group-hover:bg-brand-accent group-hover:text-white group-hover:shadow-[0_0_15px_rgba(10,132,255,0.3)]">
              <Award size={24} />
            </div>
            <div className="flex-1">
              <h4 className="mb-1 text-lg font-bold tracking-tight text-white">
                {cert.title}
              </h4>
              <p className="mb-3 text-xs font-bold tracking-widest uppercase text-brand-accent">
                {cert.issuer}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-brand-muted">
                {cert.desc}
              </p>
              {(cert as any).link && (
                <a 
                  href={(cert as any).link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold transition-colors text-brand-accent hover:text-white group/link"
                >
                  View Credential 
                  <ExternalLink size={14} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
