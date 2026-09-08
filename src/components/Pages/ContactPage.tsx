import React, { useState } from 'react';
import { Language } from '../../types';
import { TRANSLATIONS } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Instagram, Linkedin, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div id="page-contact" className="w-full pt-28 pb-24 space-y-16 max-w-6xl mx-auto px-6 md:px-10">
      {/* 1. HEADER SECTION */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-mono text-[#6D0808] uppercase tracking-[0.25em] font-semibold">
          <span className="w-2 h-2 bg-[#6D0808]"></span>
          <span>PAGE 05 // PRISE DE CONTACT</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#2D0000] tracking-tight uppercase leading-none">
          {TRANSLATIONS.contact.title[language]}
        </h1>

        <p className="font-serif-editorial text-xl sm:text-2xl text-[#6D0808] italic font-medium leading-relaxed">
          {TRANSLATIONS.contact.subtitle[language]}
        </p>

        <p className="font-sans-body text-sm text-[#2D0000]/75 leading-relaxed pt-2">
          {TRANSLATIONS.contact.intro[language]}
        </p>
      </section>

      {/* 2. CONTACT GRID: FORM & INFORMATION CHANNELS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
        {/* Left Col: Contact Form */}
        <div className="lg:col-span-7 bg-[#EEEAD7] p-8 sm:p-10 rounded-xl border border-[#6D0808]/20 shadow-sm space-y-6">
          <div className="border-b border-[#6D0808]/15 pb-4">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-[#2D0000]">
              {language === 'FR' ? 'FORMULAIRE DE TRANSMISSION' : 'TRANSMISSION FORM'}
            </h2>
            <p className="text-xs font-mono text-[#757D6F] mt-1">
              DISPONIBILITÉ : 24H À 48H DE RÉPONSE GARANTIE
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-lg bg-[#6D0808]/10 border border-[#6D0808]/30 text-center space-y-4 my-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#6D0808] text-[#EEEAD7] flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2D0000]">
                {language === 'FR' ? 'Message Transmis' : 'Message Transmitted'}
              </h3>
              <p className="font-sans-body text-sm text-[#2D0000]/80 max-w-md mx-auto">
                {TRANSLATIONS.contact.form.success[language]}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs font-mono text-[#6D0808] underline cursor-pointer hover:text-[#2D0000]"
              >
                {language === 'FR' ? 'Envoyer un autre message' : 'Send another inquiry'}
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-bold tracking-wider text-[#2D0000] uppercase"
                  >
                    {language === 'FR' ? 'NOM / ORGANISATION *' : 'NAME / ENTITY *'}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={TRANSLATIONS.contact.form.name[language]}
                    className="w-full px-4 py-3 text-sm bg-white/70 border border-[#6D0808]/20 rounded-xs focus:outline-none focus:border-[#6D0808] focus:ring-1 focus:ring-[#6D0808] text-[#2D0000] placeholder:text-[#757D6F]/60"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-bold tracking-wider text-[#2D0000] uppercase"
                  >
                    {language === 'FR' ? 'EMAIL PROFESSIONNEL *' : 'BUSINESS EMAIL *'}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={TRANSLATIONS.contact.form.email[language]}
                    className="w-full px-4 py-3 text-sm bg-white/70 border border-[#6D0808]/20 rounded-xs focus:outline-none focus:border-[#6D0808] focus:ring-1 focus:ring-[#6D0808] text-[#2D0000] placeholder:text-[#757D6F]/60"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono font-bold tracking-wider text-[#2D0000] uppercase"
                >
                  {language === 'FR' ? 'OBJET DE LA DEMANDE' : 'SUBJECT / TOPIC'}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={TRANSLATIONS.contact.form.subject[language]}
                  className="w-full px-4 py-3 text-sm bg-white/70 border border-[#6D0808]/20 rounded-xs focus:outline-none focus:border-[#6D0808] focus:ring-1 focus:ring-[#6D0808] text-[#2D0000] placeholder:text-[#757D6F]/60"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono font-bold tracking-wider text-[#2D0000] uppercase"
                >
                  {language === 'FR' ? 'DESCRIPTIF DU PROJET *' : 'PROJECT BRIEF & SCOPE *'}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={TRANSLATIONS.contact.form.message[language]}
                  className="w-full px-4 py-3 text-sm bg-white/70 border border-[#6D0808]/20 rounded-xs focus:outline-none focus:border-[#6D0808] focus:ring-1 focus:ring-[#6D0808] text-[#2D0000] placeholder:text-[#757D6F]/60 resize-y"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-[#6D0808] text-[#EEEAD7] font-semibold text-xs tracking-widest uppercase rounded-xs hover:bg-[#2D0000] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send size={15} className={isSubmitting ? 'animate-pulse' : ''} />
                <span>
                  {isSubmitting
                    ? TRANSLATIONS.contact.form.sending[language]
                    : TRANSLATIONS.contact.form.send[language]}
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Right Col: Contact Information & Direct Channels */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Coordinate Channels */}
          <div className="p-8 rounded-xl border border-[#6D0808]/20 bg-[#2D0000]/5 space-y-6">
            <div className="border-b border-[#6D0808]/15 pb-3">
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#2D0000]">
                COORDONNÉES DIRECTES
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xs bg-[#6D0808] text-[#EEEAD7] mt-0.5">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#757D6F] uppercase block">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${TRANSLATIONS.contact.channels.email}`}
                    className="font-mono text-sm font-bold text-[#2D0000] hover:text-[#6D0808] transition-colors"
                  >
                    {TRANSLATIONS.contact.channels.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xs bg-[#6D0808] text-[#EEEAD7] mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#757D6F] uppercase block">
                    {language === 'FR' ? 'TÉLÉPHONE' : 'TELEPHONE'}
                  </span>
                  <a
                    href={`tel:${TRANSLATIONS.contact.channels.phone}`}
                    className="font-mono text-sm font-bold text-[#2D0000] hover:text-[#6D0808] transition-colors"
                  >
                    {TRANSLATIONS.contact.channels.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xs bg-[#757D6F] text-[#EEEAD7] mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#757D6F] uppercase block">
                    LOCALISATION
                  </span>
                  <span className="font-sans-body text-sm font-semibold text-[#2D0000]">
                    {TRANSLATIONS.contact.channels.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels & Online Portfolios */}
          <div className="p-8 rounded-xl border border-[#6D0808]/20 bg-[#2D0000]/5 space-y-4">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#2D0000] border-b border-[#6D0808]/15 pb-3">
              {TRANSLATIONS.contact.channels.socialsTitle[language]}
            </h3>

            <div className="space-y-2.5">
              {[
                { name: 'Behance', handle: 'behance.net/abdessamad-design', icon: Globe, url: 'https://behance.net' },
                { name: 'Instagram', handle: '@abdessamad.infographics', icon: Instagram, url: 'https://instagram.com' },
                { name: 'LinkedIn', handle: 'linkedin.com/in/abdessamad-design', icon: Linkedin, url: 'https://linkedin.com' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xs bg-[#EEEAD7] border border-[#6D0808]/15 hover:border-[#6D0808] group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <s.icon size={16} className="text-[#6D0808]" />
                    <div>
                      <div className="font-display text-xs font-bold text-[#2D0000]">
                        {s.name}
                      </div>
                      <div className="font-mono text-[10px] text-[#757D6F]">{s.handle}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-[#757D6F] group-hover:text-[#6D0808] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
