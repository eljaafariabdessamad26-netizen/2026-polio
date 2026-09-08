import React from 'react';
import { PageId, Language, Project, Category } from '../../types';
import { TRANSLATIONS, CATEGORIES, PROJECTS } from '../../data/portfolioData';
import { GlassBanner } from '../GlassBanner';
import { HeroInfographic } from '../HeroInfographic';
import { ArrowUpRight, ArrowRight, Sparkles, Folder, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId, categoryId?: string) => void;
  onSelectProject: (p: Project) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  language,
}) => {
  // Selected spotlight projects
  const spotlightProjects = PROJECTS.slice(0, 3);

  return (
    <div id="page-home" className="w-full pt-28 pb-20 space-y-16">
      {/* 1. TOP CENTER GLASSMORPHISM BANNER */}
      <section className="w-full">
        <GlassBanner language={language} />
      </section>

      {/* 2. HERO INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6D0808]/20 bg-[#6D0808]/5 text-xs font-mono text-[#6D0808] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D0808] animate-pulse"></span>
            <span>{TRANSLATIONS.home.heroBadge[language]}</span>
          </div>

          <h2 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl text-[#2D0000] font-normal leading-snug sm:leading-tight">
            {TRANSLATIONS.home.heroIntro[language]}
          </h2>

          <p className="font-sans-body text-sm sm:text-base text-[#2D0000]/75 max-w-2xl mx-auto leading-relaxed">
            {TRANSLATIONS.home.heroDetail[language]}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            id="hero-cta-portfolio"
            onClick={() => onNavigate('portfolio')}
            className="group px-8 py-3.5 bg-[#6D0808] text-[#EEEAD7] font-semibold text-xs tracking-widest uppercase rounded-xs hover:bg-[#2D0000] transition-all duration-300 shadow-sm flex items-center gap-2.5 cursor-pointer"
          >
            <span>{TRANSLATIONS.home.ctaPortfolio[language]}</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-cta-contact"
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 border border-[#6D0808]/30 text-[#2D0000] hover:border-[#6D0808] hover:text-[#6D0808] font-semibold text-xs tracking-widest uppercase rounded-xs transition-all duration-300 cursor-pointer"
          >
            <span>{TRANSLATIONS.home.ctaContact[language]}</span>
          </button>
        </motion.div>
      </section>

      {/* 3. VISUAL HERO ELEMENT (Infographic Visual Composition) */}
      <section className="px-4 sm:px-6">
        <HeroInfographic language={language} />
      </section>

      {/* 4. FEATURED DOSSIERS / ARCHIVES PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#6D0808]/20">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#757D6F] uppercase block">
              DOSSIERS RECOMMANDÉS // 2026
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D0000] uppercase tracking-wide mt-1">
              {TRANSLATIONS.home.featuredProjects[language]}
            </h3>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#6D0808] hover:text-[#2D0000] transition-colors cursor-pointer group"
          >
            <span>{TRANSLATIONS.home.viewAllFolders[language]} (10)</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {spotlightProjects.map((p, idx) => (
            <div
              key={p.id}
              onClick={() => onSelectProject(p)}
              className="group cursor-pointer rounded-lg border border-[#6D0808]/15 bg-[#EEEAD7] p-4 glass-card-hover space-y-4"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#2D0000]/10">
                <img
                  src={p.coverImage}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#6D0808]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-3 py-1.5 bg-[#EEEAD7] text-[#2D0000] rounded-xs font-mono text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Eye size={13} />
                    <span>{language === 'FR' ? 'Consulter' : 'View'}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#757D6F]">
                  <span>0{idx + 1} // {p.year}</span>
                  <span className="text-[#6D0808] font-bold">
                    {language === 'FR' ? p.typeFr : p.typeEn}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-[#2D0000] group-hover:text-[#6D0808] transition-colors">
                  {p.title}
                </h4>

                <p className="font-sans-body text-xs text-[#2D0000]/70 line-clamp-2 leading-relaxed">
                  {language === 'FR' ? p.summaryFr : p.summaryEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EDITORIAL QUOTE & ARTISTIC CREDENCE */}
      <section className="max-w-5xl mx-auto px-6 pt-12">
        <div className="p-8 sm:p-12 rounded-xl border border-[#6D0808]/20 bg-[#2D0000]/5 text-center space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#6D0808] uppercase font-bold block">
            — MANIFESTE GRAPHIQUE —
          </span>
          <blockquote className="font-serif-editorial text-xl sm:text-2xl text-[#2D0000] italic leading-relaxed max-w-3xl mx-auto">
            {language === 'FR'
              ? '« Les chiffres sans beauté sont stériles ; la beauté sans données est superficielle. L’art de l’infographie réside dans l’absolue synthèse. »'
              : '“Data without beauty is sterile; beauty without data is superficial. The art of infographic design lives in absolute synthesis.”'}
          </blockquote>
          <div className="font-mono text-[11px] text-[#757D6F] tracking-widest pt-2">
            DESIGN DIRECTIVE // EDITION 2026
          </div>
        </div>
      </section>
    </div>
  );
};
