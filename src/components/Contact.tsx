"use client";

import React from 'react';
import { Mail, MessageCircle, Calendar, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/data';

export const Contact = () => {
  return (
    <section className="animate-fade-in">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* WhatsApp Card */}
        <ContactCard
          title="WhatsApp"
          value={personalInfo.phone}
          subtitle="Direct Message"
          href={`https://wa.me/${personalInfo.whatsapp}`}
          icon={<MessageCircle size={24} />}
        />

        {/* Email Card */}
        <ContactCard
          title="Email"
          value={personalInfo.email}
          subtitle="Professional Inquiry"
          href={`mailto:${personalInfo.email}`}
          icon={<Mail size={24} />}
        />

        {/* Calendly Card */}
        <ContactCard
          title="Calendly"
          value="Schedule a Meeting"
          subtitle="15-30 min discovery call"
          href="https://calendly.com/edkaydev/new-meeting"
          icon={<Calendar size={24} />}
          isFullWidth={true}
        />
      </div>
    </section>
  );
};

interface ContactCardProps {
  title: string;
  value: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  isFullWidth?: boolean;
}

const ContactCard = ({ title, value, subtitle, href, icon, isFullWidth }: ContactCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-6 transition-all duration-300 border shadow-sm bg-brand-card border-brand-border rounded-3xl hover:border-brand-accent group flex items-start gap-5 ${
      isFullWidth ? 'md:col-span-2' : ''
    }`}
  >
    <div className="p-3 transition-all duration-300 border bg-brand-black text-brand-accent border-brand-border rounded-2xl group-hover:bg-brand-accent group-hover:text-white group-hover:shadow-[0_0_15px_rgba(10,132,255,0.3)]">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-lg font-bold tracking-tight text-white">{title}</h4>
        <ArrowUpRight size={18} className="transition-transform text-brand-muted group-hover:text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className="mb-1 text-sm font-bold truncate text-brand-accent">
        {value}
      </p>
      <p className="text-xs font-medium text-brand-muted">
        {subtitle}
      </p>
    </div>
  </a>
);
