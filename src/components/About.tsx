// src/components/About.tsx
import { aboutData } from '../data/data';
import { Code, Globe, Terminal, User2Icon, AppWindow } from 'lucide-react';

// Types for About data
type Service = {
  title: string;
  description: string;
  icon: string;
};

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

// Helper to map your data titles to specific Lucide icons
const IconMap = ({ title }: { title: string }) => {
  const iconProps = { size: 22, strokeWidth: 1.5 }; // Smaller size, thinner lines for pro look
  if (title.includes('Frontend')) return <Code {...iconProps} />;
  if (title.includes('Applications')) return <AppWindow {...iconProps} />;
  return <Terminal {...iconProps} />;
};

export const About = () => (
  <section className="animate-fade-in">
    {/* Description */}
    {aboutData.description.map((p: string, i: number) => (
      <p key={i} className="mb-6 text-sm leading-relaxed text-gray-400">{p}</p>
    ))}

    {/* Services */}
    <h3 className="mt-10 mb-8 text-xl font-bold text-white uppercase tracking-widest">Engineering Focus</h3>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {aboutData.services.map((s: Service, i: number) => (
        <div 
          key={i} 
          className="relative flex gap-5 p-6 bg-brand-card border border-brand-border rounded-[24px] shadow-sm group hover:border-brand-accent transition-all"
        >
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-black text-brand-accent shadow-inner border border-brand-border group-hover:scale-110 transition-transform">
              <IconMap title={s.title} />
            </div>
          </div>
          <div>
            <h4 className="mb-1 text-lg font-bold text-white">{s.title}</h4>
            <p className="text-xs leading-relaxed text-gray-400">{s.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Testimonials */}
    <h3 className="mt-12 mb-10 text-xl font-bold text-white uppercase tracking-widest">Client Insights</h3>
    <div className="flex gap-6 pb-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {aboutData.testimonials.map((t: Testimonial, i: number) => (
        <div 
          key={i} 
          className="min-w-[320px] md:min-w-[400px] bg-brand-card border border-brand-border p-8 rounded-[24px] relative mt-10 snap-center"
        >
          <div className="absolute p-1 -top-10 left-8 rounded-2xl bg-brand-border shadow-2xl">
            <div className="bg-brand-black rounded-xl overflow-hidden w-10 h-10 flex items-center justify-center border border-brand-border">
              <User2Icon className="w-8 h-8 text-brand-accent" />
            </div>
          </div>

          <h4 className="mt-8 text-lg font-bold text-white">{t.name}</h4>
          <p className="text-brand-accent text-[10px] mb-4 uppercase font-bold tracking-widest">{t.role}</p>
          <p className="text-xs italic leading-relaxed text-gray-400">"{t.text}"</p>
        </div>
      ))}
    </div>

    {/* Clients (optional) */}
    {aboutData.clients.length > 0 && (
      <>
        <h3 className="mt-12 mb-6 text-xl font-bold text-white">Clients</h3>
        <div className="flex flex-wrap items-center gap-12 transition-all opacity-40 grayscale hover:grayscale-0">
          {aboutData.clients.map((c: string, i: number) => (
            <img key={i} src={c} className="h-8" alt="client" />
          ))}
        </div>
      </>
    )}
  </section>
);