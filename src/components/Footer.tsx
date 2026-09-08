import React from 'react';
import { PageId, Language } from '../types';
import { TRANSLATIONS } from '../data/portfolioData';
import { ArrowUp, Instagram, Linkedin, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
  onLanguageChange,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages: { id: PageId; labelFr: string; labelEn: string }[] = [
    { id: 'home', labelFr: 'Accueil', labelEn: 'Home' },
    { id: 'about', labelFr: 'À Propos', labelEn: 'About Me' },
    { id: 'cv', labelFr: 'CV', labelEn: 'Curriculum' },
    { id: 'portfolio', labelFr: 'Portfolio', labelEn: 'Portfolio' },
    { id: 'contact', labelFr: 'Contact', labelEn: 'Contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="border-t border-[#6D0808]/20 bg-[#EEEAD7] text-[#2D0000] pt-16 pb-12 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#6D0808]/15">
          {/* Col 1: Identity & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-[#6D0808]"></span>
              <h3 className="font-display text-2xl font-extrabold tracking-widest text-[#2D0000]">
                PORTFOLIO 2026
              </h3>
            </div>
            <p className="font-mono text-xs text-[#6D0808] uppercase tracking-[0.25em]">
              {language === 'FR' ? 'DESIGNER INFOGRAPHISTE' : 'INFOGRAPHIC DESIGNER'}
            </p>
            <p className="font-sans-body text-sm text-[#2D0000]/75 max-w-sm leading-relaxed">
              {language === 'FR'
                ? 'Conception de diagrammes cognitifs, identités visuelles rigoureuses et architectures éditoriales à haute valeur graphique.'
                : 'Crafting cognitive diagrams, rigorous visual identities, and editorial architectures of high graphic distinction.'}
            </p>
            <div className="pt-2 text-xs font-mono text-[#757D6F] flex items-center gap-3">
              <span>LAT: 33°31'N</span>
              <span>•</span>
              <span>LON: 07°35'W</span>
              <span>•</span>
              <span className="text-[#6D0808] font-bold">2026 EDITION</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#757D6F] pb-1">
              {language === 'FR' ? 'SECTIONS DU SITE' : 'SITE SECTIONS'}
            </div>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      onNavigate(p.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-sans-body font-medium tracking-wide text-[#2D0000]/80 hover:text-[#6D0808] hover:translate-x-1 transition-all duration-200 cursor-pointer"
                  >
                    {language === 'FR' ? p.labelFr : p.labelEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials & External */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#757D6F] pb-1">
              {language === 'FR' ? 'CONNEXIONS & GALERIES' : 'CHANNELS & PORTFOLIOS'}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: 'Behance', url: 'https://behance.net', icon: Globe },
                { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
                { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#2D0000] bg-[#2D0000]/5 hover:bg-[#6D0808] hover:text-[#EEEAD7] border border-[#6D0808]/20 rounded-xs transition-colors duration-200"
                >
                  <s.icon size={13} />
                  <span>{s.name}</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#757D6F] mb-1.5">
                {language === 'FR' ? 'LANGUE DE L’INTERFACE' : 'INTERFACE LANGUAGE'}
              </div>
              <div className="inline-flex rounded-xs border border-[#6D0808]/20 bg-[#2D0000]/5 p-0.5">
                <button
                  onClick={() => onLanguageChange('FR')}
                  className={`px-3 py-1 text-xs font-mono font-bold transition-colors cursor-pointer ${
                    language === 'FR' ? 'bg-[#6D0808] text-[#EEEAD7]' : 'text-[#2D0000]/70'
                  }`}
                >
                  FRANÇAIS
                </button>
                <button
                  onClick={() => onLanguageChange('EN')}
                  className={`px-3 py-1 text-xs font-mono font-bold transition-colors cursor-pointer ${
                    language === 'EN' ? 'bg-[#6D0808] text-[#EEEAD7]' : 'text-[#2D0000]/70'
                  }`}
                >
                  ENGLISH
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#757D6F]">
          <div>
            <span className="font-bold text-[#2D0000]">© 2026 — All Rights Reserved</span>
            <span className="hidden sm:inline mx-2">•</span>
            <span className="block sm:inline mt-1 sm:mt-0 text-[11px]">
              {language === 'FR'
                ? 'Conception graphique originale — Typographie & Infographie'
                : 'Original typographic & infographic design'}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#2D0000] hover:text-[#6D0808] border border-[#6D0808]/20 rounded-xs hover:border-[#6D0808] transition-all cursor-pointer group"
          >
            <span>{language === 'FR' ? 'HAUT DE PAGE' : 'BACK TO TOP'}</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
