import React from 'react';
import { Mail, Phone, Calendar, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/data';

export const Sidebar = () => (
  <aside className="flex flex-col items-center w-full p-8 border shadow-2xl lg:w-72 bg-brand-black border-brand-border rounded-3xl lg:sticky lg:top-10">
    {/* Profile Image */}
    <div className="mb-5 overflow-hidden border shadow-inner bg-brand-card rounded-3xl border-brand-border">
      <img 
        src={personalInfo.avatar} 
        alt={personalInfo.name} 
        className="object-cover w-32 h-32 transition-all duration-500" 
      />
    </div>

    {/* Identity */}
    <h1 className="mb-2 text-xl font-bold tracking-tight text-center text-white">{personalInfo.brandName}</h1>
    <p className="mb-4 text-[10px] font-bold text-brand-muted uppercase tracking-[0.3em] font-mono">{personalInfo.name}</p>
    <p className="bg-brand-card border border-brand-border text-[10px] text-brand-muted px-4 py-1.5 rounded-lg mb-6 font-bold uppercase tracking-widest font-mono">{personalInfo.role}</p>
    
    <div className="w-full my-6 border-t border-brand-border"></div>

    {/* Contact List */}
    <ul className="w-full space-y-6">
      <ContactItem 
        icon={<Mail size={16}/>} 
        label="EMAIL" 
        value={personalInfo.email} 
        href={`mailto:${personalInfo.email}`} 
      />
      <ContactItem 
        icon={<Phone size={16}/>} 
        label="PHONE" 
        value={personalInfo.phone} 
        href={`tel:${personalInfo.phone}`} 
      />
      <ContactItem 
        icon={<Calendar size={16}/>} 
        label="BIRTHDAY" 
        value={personalInfo.birthday} 
      />
      <ContactItem 
        icon={<MapPin size={16}/>} 
        label="LOCATION" 
        value={personalInfo.location} 
      />
    </ul>

    {/* Social Links */}
    <div className="flex gap-4 mt-8 text-gray-400">
      <SocialLink href={personalInfo.socials.github} icon={<Github size={18} />} label="GitHub" />
      <SocialLink href={personalInfo.socials.twitter} icon={<Twitter size={18} />} label="Twitter" />
      <SocialLink href={personalInfo.socials.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" />
      <SocialLink href={personalInfo.socials.instagram} icon={<Instagram size={18} />} label="Instagram" />
    </div>
  </aside>
);

/**
 * Reusable Contact Item Component
 * @param icon - Icon element
 * @param label - Field label
 * @param value - Display value
 * @param href - Optional link (mailto, tel)
 */
const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => (
  <li className="flex items-center gap-4 group">
    <div className="p-3 transition-all duration-300 border shadow-md bg-brand-card rounded-xl text-brand-accent border-brand-border group-hover:bg-brand-accent group-hover:text-white">
      {icon}
    </div>
    <div className="overflow-hidden">
      <p className="text-[9px] text-brand-muted font-bold mb-1 font-mono tracking-tighter">{label}</p>
      {href ? (
        <a 
          href={href} 
          className="block text-xs text-gray-200 truncate transition-colors hover:text-brand-accent"
        >
          {value}
        </a>
      ) : (
        <p className="text-xs text-gray-200 truncate">{value}</p>
      )}
    </div>
  </li>
);

/**
 * Reusable Social Link Component
 * @param href - Link URL
 * @param icon - Icon JSX element
 */
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    className="p-1 transition-colors hover:text-brand-accent"
  >
    {icon}
  </a>
);