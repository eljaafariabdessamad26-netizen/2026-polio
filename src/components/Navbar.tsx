import React, { useState, useEffect } from 'react';
import { PageId, Language } from '../types';
import { TRANSLATIONS } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  language,
  onLanguageChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; labelFr: string; labelEn: string; num: string }[] = [
    { id: 'home', labelFr: 'ACCUEIL', labelEn: 'HOME', num: '01' },
    { id: 'about', labelFr: 'À PROPOS', labelEn: 'ABOUT ME', num: '02' },
    { id: 'cv', labelFr: 'CV', labelEn: 'CV', num: '03' },
    { id: 'portfolio', labelFr: 'PORTFOLIO', labelEn: 'PORTFOLIO', num: '04' },
    { id: 'contact', labelFr: 'CONTACT', labelEn: 'CONTACT', num: '05' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#EEEAD7]/80 backdrop-blur-md border-b border-[#6D0808]/15 py-3 shadow-[0_4px_20px_-8px_rgba(45,0,0,0.08)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Identity / Monogram */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group text-left cursor-pointer flex items-center gap-3 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-sm bg-[#6D0808] flex items-center justify-center text-[#EEEAD7] font-mono text-xs tracking-tighter font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
              26
            </div>
            <div>
              <span className="block font-display text-sm tracking-[0.2em] font-extrabold text-[#2D0000] uppercase">
                PORTFOLIO
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#757D6F] uppercase font-mono">
                {language === 'FR' ? 'INFOGRAPHISTE' : 'INFOGRAPHICS'}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-navbar" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const label = language === 'FR' ? item.labelFr : item.labelEn;

              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 text-xs tracking-[0.18em] font-semibold transition-colors duration-300 rounded-sm cursor-pointer ${
                    isActive
                      ? 'text-[#6D0808]'
                      : 'text-[#2D0000]/80 hover:text-[#6D0808]'
                  }`}
                >
                  <span className="font-mono text-[9px] mr-1.5 opacity-40">
                    {item.num}
                  </span>
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#6D0808]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Controls: Language Switcher & Contact CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div
              id="language-switcher"
              className="flex items-center bg-[#2D0000]/5 p-1 rounded-sm border border-[#6D0808]/15"
            >
              <button
                id="lang-fr-btn"
                onClick={() => onLanguageChange('FR')}
                className={`px-2 py-0.5 text-[11px] font-mono font-bold tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                  language === 'FR'
                    ? 'bg-[#6D0808] text-[#EEEAD7] shadow-xs'
                    : 'text-[#2D0000]/60 hover:text-[#2D0000]'
                }`}
                title="Passer en Français"
              >
                FR
              </button>
              <span className="text-[#757D6F]/40 text-xs px-0.5">/</span>
              <button
                id="lang-en-btn"
                onClick={() => onLanguageChange('EN')}
                className={`px-2 py-0.5 text-[11px] font-mono font-bold tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                  language === 'EN'
                    ? 'bg-[#6D0808] text-[#EEEAD7] shadow-xs'
                    : 'text-[#2D0000]/60 hover:text-[#2D0000]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Quick Action Button */}
            <button
              id="nav-quick-cta"
              onClick={() => handleNavClick('contact')}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#6D0808] border border-[#6D0808] rounded-xs hover:bg-[#6D0808] hover:text-[#EEEAD7] transition-all duration-300 cursor-pointer"
            >
              <span>{language === 'FR' ? 'CONTACT' : 'CONTACT'}</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2D0000] hover:text-[#6D0808] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#EEEAD7] flex flex-col justify-between pt-24 pb-12 px-8 md:hidden overflow-y-auto"
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#757D6F] mb-6 pb-2 border-b border-[#6D0808]/15">
                {language === 'FR' ? 'NAVIGATION ÉDITORIALE' : 'EDITORIAL NAVIGATION'}
              </div>

              <div className="space-y-4">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  const label = language === 'FR' ? item.labelFr : item.labelEn;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left font-display text-2xl tracking-wider py-2 cursor-pointer transition-colors duration-200 ${
                        isActive ? 'text-[#6D0808] font-bold' : 'text-[#2D0000] hover:text-[#6D0808]'
                      }`}
                    >
                      <span className="font-mono text-xs text-[#757D6F] mr-3">
                        {item.num}
                      </span>
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-[#6D0808]/15 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#757D6F]">
                  {language === 'FR' ? 'CHOIX DE LANGUE' : 'SELECT LANGUAGE'}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onLanguageChange('FR')}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-xs ${
                      language === 'FR' ? 'bg-[#6D0808] text-[#EEEAD7]' : 'text-[#2D0000]'
                    }`}
                  >
                    FRANÇAIS
                  </button>
                  <button
                    onClick={() => onLanguageChange('EN')}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-xs ${
                      language === 'EN' ? 'bg-[#6D0808] text-[#EEEAD7]' : 'text-[#2D0000]'
                    }`}
                  >
                    ENGLISH
                  </button>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#757D6F] pt-2">
                PORTFOLIO 2026 // CASABLANCA & PARIS
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
