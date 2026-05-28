import { useState } from 'react';
import { MessageSquare, Mail, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/data';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Application',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const services = [
    'Web Application',
    'Landing Page',
    'WhatsApp Commerce',
    'WordPress',
    'Consultation'
  ];

  const handleWhatsAppSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 700));

    const cleanPhone = personalInfo.whatsapp.replace(/\D/g, '');
    const budgetInfo = formData.budget ? `*Budget:* ${formData.budget}` : '';
    const emailInfo = formData.email ? `*Email:* ${formData.email}` : '*Email:* Not provided';

    const message = `
*New Project Inquiry*

*Name:* ${formData.name}
${emailInfo}
*Service:* ${formData.service}
${budgetInfo ? budgetInfo : ''}

*Project Details:*
${formData.message}

*Sent via Portfolio*
    `.trim();

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="relative max-w-3xl px-4 py-16 mx-auto animate-fade-in sm:px-6 lg:px-8">
      {/* Success Toast */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[200] bg-brand-card border border-brand-accent px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 className="text-brand-accent" size={20} />
            <span className="text-sm font-medium text-white">
              Opening Secure WhatsApp Chat...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heading */}
      <h3 className="mb-8 text-3xl font-bold tracking-tighter text-white sm:text-4xl">
        Start a Conversation
      </h3>

      <form onSubmit={handleWhatsAppSend} className="space-y-8">
        {/* Service Selection */}
        <div className="space-y-3">
          <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">
            Select Service
          </label>
          <div className="flex flex-wrap gap-3">
            {services.map(service => (
              <button
                key={service}
                type="button"
                onClick={() => setFormData({ ...formData, service })}
                className={`px-5 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                  formData.service === service
                    ? 'border-brand-accent text-brand-accent bg-brand-accent/10 shadow-[0_0_15px_rgba(10,132,255,0.2)]'
                    : 'border-brand-border text-brand-muted hover:border-gray-500 hover:text-white'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Name & Email */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 text-white transition-all border outline-none bg-brand-card/50 border-brand-border rounded-2xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase">Email (Optional)</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 text-white transition-all border outline-none bg-brand-card/50 border-brand-border rounded-2xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            />
          </div>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-500 uppercase">Estimated Budget (Optional)</label>
          <input
            type="text"
            placeholder="e.g. $500 - $1,000"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full p-4 text-white transition-all border outline-none bg-brand-card/50 border-brand-border rounded-2xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-500 uppercase">Project Details</label>
          <textarea
            rows={5}
            placeholder="Tell me about your project..."
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-4 text-white transition-all border outline-none resize-none bg-brand-card/50 border-brand-border rounded-2xl focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col justify-end gap-4 mt-4 sm:flex-row">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center gap-2 px-6 py-4 font-medium transition-colors border text-brand-muted border-brand-border bg-brand-card rounded-2xl hover:text-white hover:border-brand-accent"
          >
            <Mail size={18} />
            <span>Send Email</span>
          </a>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex items-center justify-center gap-3 px-10 py-4 font-bold text-white transition-all shadow-lg bg-brand-accent rounded-2xl hover:bg-brand-accent/90 active:scale-95 disabled:opacity-70"
          >
            {status === 'sending'
              ? <Loader2 size={20} className="animate-spin" />
              : <MessageSquare size={20} />}
            {status === 'sending' ? 'Sending...' : 'Send via WhatsApp'}
          </button>
        </div>
      </form>
    </section>
  );
};
