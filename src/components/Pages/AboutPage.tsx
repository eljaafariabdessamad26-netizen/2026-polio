import React from 'react';
import { Language, PageId } from '../../types';
import { TRANSLATIONS, CV_DATA } from '../../data/portfolioData';
import { Compass, Sparkles, Layers, PenTool, Cpu, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language, onNavigate }) => {
  return (
    <div id="page-about" className="w-full pt-28 pb-24 space-y-24 max-w-7xl mx-auto px-6 md:px-10">
      {/* 1. ASYMMETRIC EDITORIAL HEADER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#6D0808]/15 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#6D0808] uppercase tracking-[0.25em] font-semibold">
            <span className="w-2 h-2 bg-[#6D0808]"></span>
            <span>PAGE 02 // PROFILE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2D0000] tracking-tight leading-none uppercase">
            {TRANSLATIONS.about.title[language]}
          </h1>

          <p className="font-serif-editorial text-xl sm:text-2xl text-[#6D0808] italic font-medium leading-relaxed">
            {TRANSLATIONS.about.subtitle[language]}
          </p>

          <div className="pt-4 text-xs font-mono text-[#757D6F] space-y-1">
            <div>DISCIPLINE: INFORMATION ARCHITECTURE & ART DIRECTION</div>
            <div>HERITAGE: MOROCCO / FRANCE // GLOBAL COMMISSIONS</div>
            <div>STATUS: SENIOR LEAD DESIGNER (9+ YEARS)</div>
          </div>
        </motion.div>

        {/* Lead Biography & Approach */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="p-8 sm:p-10 rounded-xl bg-[#2D0000]/5 border border-[#6D0808]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6D0808]/5 rounded-bl-full pointer-events-none"></div>
            <p className="font-serif-editorial text-2xl sm:text-3xl text-[#2D0000] font-medium leading-snug">
              « {TRANSLATIONS.about.leadBio[language]} »
            </p>
          </div>

          <div className="space-y-4 text-[#2D0000]/80 font-sans-body leading-relaxed text-base">
            <p>{TRANSLATIONS.about.bodyBio[language]}</p>
          </div>
        </motion.div>
      </section>

      {/* 2. CREATIVE PHILOSOPHY (Editorial 3-Column Pillar) */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-[#6D0808]/20">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D0000] uppercase tracking-wide">
            {TRANSLATIONS.about.philosophyTitle[language]}
          </h2>
          <span className="text-xs font-mono text-[#757D6F] tracking-widest">
            AXIOMES DE CRÉATION // 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSLATIONS.about.philosophyPoints.map((p) => (
            <div
              key={p.number}
              className="p-8 rounded-xl border border-[#6D0808]/20 bg-[#EEEAD7] glass-card-hover space-y-4 relative"
            >
              <span className="font-mono text-4xl font-extrabold text-[#6D0808]/30 block">
                {p.number}
              </span>
              <h3 className="font-display text-lg font-bold text-[#2D0000]">
                {language === 'FR' ? p.titleFr : p.titleEn}
              </h3>
              <p className="font-sans-body text-sm text-[#2D0000]/75 leading-relaxed">
                {language === 'FR' ? p.descFr : p.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VISUAL SKILL INDICATORS (Geometric Radial & Proportion Indicators) */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-4 border-b border-[#6D0808]/20">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D0000] uppercase tracking-wide">
              {TRANSLATIONS.about.skillsTitle[language]}
            </h2>
            <p className="text-xs font-mono text-[#757D6F] tracking-wider mt-1">
              {language === 'FR'
                ? 'Indicateurs géométriques de compétence & proportion de maîtrise'
                : 'Geometric skill indicators & mastery proportions'}
            </p>
          </div>
          <span className="text-xs font-mono text-[#6D0808] font-bold">
            8 DISCIPLINES SPÉCIALISÉES
          </span>
        </div>

        {/* Geometric Circular/Proportional Meters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CV_DATA.skills.map((skill, index) => {
            const circumference = 2 * Math.PI * 34; // radius 34
            const strokeDashoffset = circumference - (circumference * skill.level) / 100;

            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-[#6D0808]/20 bg-[#2D0000]/5 hover:bg-[#EEEAD7] hover:border-[#6D0808] transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#757D6F] uppercase">
                    MOD-0{index + 1}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#6D0808]">
                    {skill.level}%
                  </span>
                </div>

                {/* Circular Geometric Dial */}
                <div className="flex items-center justify-center py-2">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 80 80">
                      {/* Track */}
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="#757D6F"
                        strokeWidth="4"
                        fill="transparent"
                        strokeOpacity="0.2"
                      />
                      {/* Value Arc */}
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="#6D0808"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-sm font-extrabold text-[#2D0000]">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h4 className="font-display text-sm font-bold text-[#2D0000] group-hover:text-[#6D0808] transition-colors">
                    {language === 'FR' ? skill.nameFr : skill.nameEn}
                  </h4>
                  <p className="text-[11px] font-sans-body text-[#757D6F] leading-tight line-clamp-2">
                    {language === 'FR' ? skill.descriptorFr : skill.descriptorEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TOOLS & SOFTWARE ECOSYSTEM */}
      <section className="space-y-8">
        <div className="pb-4 border-b border-[#6D0808]/20 flex items-center justify-between">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D0000] uppercase tracking-wide">
            {TRANSLATIONS.about.toolsTitle[language]}
          </h2>
          <span className="text-xs font-mono text-[#757D6F]">STACK LOGICIEL // 2026</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CV_DATA.software.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-lg border border-[#6D0808]/15 bg-[#EEEAD7] hover:border-[#6D0808] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-sm font-bold text-[#2D0000]">
                  {tool.name}
                </span>
                <span className="font-mono text-xs text-[#6D0808] font-bold">
                  {tool.proficiency}%
                </span>
              </div>
              <div className="text-[10px] font-mono text-[#757D6F] truncate mb-2">
                {tool.category}
              </div>
              {/* Micro geometric segmented meter */}
              <div className="grid grid-cols-5 gap-1">
                {[1, 2, 3, 4, 5].map((segment) => {
                  const filled = tool.proficiency >= segment * 20;
                  return (
                    <div
                      key={segment}
                      className={`h-1.5 rounded-xs transition-colors ${
                        filled ? 'bg-[#6D0808]' : 'bg-[#757D6F]/25'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. EDITORIAL BOTTOM CTA */}
      <section className="pt-6 border-t border-[#6D0808]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#757D6F] block">
            DÉCOUVRIR LE PARCOURS DÉTAILLÉ
          </span>
          <h3 className="font-display text-2xl font-bold text-[#2D0000]">
            {language === 'FR' ? 'Consulter le Curriculum Vitae' : 'Review Curriculum Vitae'}
          </h3>
        </div>

        <button
          onClick={() => onNavigate('cv')}
          className="group flex items-center gap-3 px-8 py-3.5 bg-[#6D0808] text-[#EEEAD7] font-semibold text-xs tracking-widest uppercase rounded-xs hover:bg-[#2D0000] transition-colors cursor-pointer"
        >
          <span>{language === 'FR' ? 'Explorer le CV' : 'Explore CV'}</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>
    </div>
  );
};
