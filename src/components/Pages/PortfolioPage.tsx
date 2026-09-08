import React, { useState } from 'react';
import { Category, Project, Language, PageId } from '../../types';
import { CATEGORIES, PROJECTS, TRANSLATIONS } from '../../data/portfolioData';
import { Folder, ArrowRight, ArrowLeft, Eye, Grid, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioPageProps {
  initialCategoryId?: string | null;
  onSelectProject: (p: Project) => void;
  language: Language;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  initialCategoryId,
  onSelectProject,
  language,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
    initialCategoryId || null
  );

  const activeCategory = CATEGORIES.find((c) => c.id === activeCategoryId);

  // Filter projects if category is selected, otherwise all or preview
  const categoryProjects = activeCategoryId
    ? PROJECTS.filter((p) => p.categoryId === activeCategoryId)
    : PROJECTS;

  return (
    <div id="page-portfolio" className="w-full pt-28 pb-24 space-y-16 max-w-7xl mx-auto px-6 md:px-10">
      {/* 1. EDITORIAL HEADER */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#6D0808]/20">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6D0808] uppercase tracking-[0.25em] font-semibold">
            <span className="w-2 h-2 bg-[#6D0808]"></span>
            <span>PAGE 04 // ARCHIVES & DOSSIERS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2D0000] tracking-tight uppercase">
            {TRANSLATIONS.portfolio.title}
          </h1>

          <p className="font-serif-editorial text-xl sm:text-2xl text-[#6D0808] italic font-medium leading-relaxed">
            {activeCategory
              ? language === 'FR'
                ? activeCategory.descFr
                : activeCategory.descEn
              : TRANSLATIONS.portfolio.subtitle[language]}
          </p>
        </div>

        {/* Status / Category Controls */}
        <div className="flex items-center gap-3">
          {activeCategoryId && (
            <button
              id="back-to-all-folders-btn"
              onClick={() => setActiveCategoryId(null)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-[#6D0808] bg-[#6D0808]/10 hover:bg-[#6D0808] hover:text-[#EEEAD7] border border-[#6D0808]/20 rounded-xs transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>{TRANSLATIONS.portfolio.backToFolders[language]}</span>
            </button>
          )}

          <div className="text-xs font-mono text-[#757D6F] px-3 py-1.5 rounded-xs border border-[#6D0808]/15 bg-[#2D0000]/5">
            <span className="font-bold text-[#6D0808]">{CATEGORIES.length}</span>{' '}
            {TRANSLATIONS.portfolio.folderCount[language]}
          </div>
        </div>
      </section>

      {/* VIEW A: 10 FOLDERS GRID (When no category is active) */}
      {!activeCategoryId && (
        <section id="folders-grid-section" className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, index) => {
              // Collect matching project covers for abstract mini previews
              const matchingProjects = PROJECTS.filter((p) => p.categoryId === cat.id);
              const previewImg =
                matchingProjects[0]?.coverImage ||
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80';

              return (
                <motion.div
                  key={cat.id}
                  id={`folder-card-${cat.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => {
                    setActiveCategoryId(cat.id);
                    window.scrollTo({ top: 180, behavior: 'smooth' });
                  }}
                  className="group relative cursor-pointer pt-6"
                >
                  {/* FOLDER TAB (Folder Shoulder Geometry) */}
                  <div className="absolute top-0 left-0 h-6 w-36 sm:w-44 bg-[#EEEAD7] border-t border-l border-r border-[#6D0808]/30 rounded-t-md px-3 flex items-center justify-between text-[10px] font-mono font-bold text-[#6D0808] z-10 transition-colors group-hover:bg-[#6D0808] group-hover:text-[#EEEAD7]">
                    <span>DIR // {cat.number}</span>
                    <span className="text-[9px] opacity-75">{cat.highlightStat}</span>
                  </div>

                  {/* FOLDER BODY CONTAINER */}
                  <div className="relative rounded-b-xl rounded-tr-xl border border-[#6D0808]/25 bg-[#EEEAD7]/80 backdrop-blur-md p-6 sm:p-7 shadow-[0_8px_30px_rgb(45,0,0,0.06)] glass-card-hover space-y-6 overflow-hidden">
                    {/* Subtle folder diagonal watermark lines */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#6D0808]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                    {/* Header with big number and title */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono text-4xl sm:text-5xl font-black text-[#6D0808]/25 group-hover:text-[#6D0808]/40 transition-colors">
                          {cat.number}
                        </span>
                        <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#2D0000] tracking-wide mt-1 group-hover:text-[#6D0808] transition-colors">
                          {language === 'FR' ? cat.titleFr : cat.titleEn}
                        </h2>
                      </div>

                      <div className="w-8 h-8 rounded-full border border-[#6D0808]/20 flex items-center justify-center text-[#6D0808] group-hover:bg-[#6D0808] group-hover:text-[#EEEAD7] transition-all">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Mini Visual Preview (Abstract miniature) */}
                    <div className="relative h-28 w-full rounded-sm overflow-hidden bg-[#2D0000]/10 border border-[#6D0808]/15">
                      <img
                        src={previewImg}
                        alt={cat.titleEn}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute bottom-2 left-2 bg-[#EEEAD7]/90 px-2 py-0.5 rounded-xs text-[9px] font-mono text-[#2D0000] border border-[#6D0808]/20">
                        {matchingProjects.length}{' '}
                        {language === 'FR' ? 'projets archivés' : 'archived works'}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <p className="font-sans-body text-xs text-[#2D0000]/80 leading-relaxed min-h-[36px]">
                        {language === 'FR' ? cat.descFr : cat.descEn}
                      </p>

                      <div className="text-[10px] font-mono text-[#757D6F] italic border-t border-[#6D0808]/10 pt-2 truncate">
                        {language === 'FR' ? cat.taglineFr : cat.taglineEn}
                      </div>
                    </div>

                    {/* Bottom Action strip */}
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono font-bold text-[#6D0808]">
                      <span>{TRANSLATIONS.portfolio.clickToOpen[language]}</span>
                      <span>→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* VIEW B: DEDICATED CATEGORY VIEW (PROJECTS GRID) */}
      {activeCategoryId && activeCategory && (
        <motion.section
          id="category-detail-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-10"
        >
          {/* Active Category Header Banner */}
          <div className="p-8 sm:p-10 rounded-xl border border-[#6D0808]/25 bg-[#2D0000]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-[#6D0808] text-[#EEEAD7] font-mono text-xs font-bold rounded-xs">
                  {activeCategory.number}
                </span>
                <span className="font-mono text-xs text-[#757D6F] tracking-widest uppercase">
                  CATÉGORIE SÉLECTIONNÉE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2D0000] uppercase">
                {language === 'FR' ? activeCategory.titleFr : activeCategory.titleEn}
              </h2>
              <p className="font-serif-editorial text-lg text-[#6D0808] italic max-w-2xl">
                {language === 'FR' ? activeCategory.taglineFr : activeCategory.taglineEn}
              </p>
            </div>

            <div className="text-right font-mono text-xs text-[#757D6F] space-y-1 self-start sm:self-auto">
              <div>DISCIPLINE REF: DIR-{activeCategory.number}</div>
              <div>INDEX COUNT: {categoryProjects.length} DOSSIERS</div>
              <div className="text-[#6D0808] font-bold">HIGH RESOLUTION ARCHIVE</div>
            </div>
          </div>

          {/* Projects Masonry/Grid */}
          {categoryProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProjects.map((proj, idx) => (
                <div
                  key={proj.id}
                  id={`project-card-${proj.id}`}
                  onClick={() => onSelectProject(proj)}
                  className="group relative cursor-pointer rounded-xl border border-[#6D0808]/20 bg-[#EEEAD7] overflow-hidden glass-card-hover flex flex-col"
                >
                  {/* Image Container with Zoom & Burgundy Overlay */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#2D0000]/10">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Burgundy Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#6D0808]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="px-4 py-2 bg-[#EEEAD7] text-[#2D0000] font-mono text-xs font-bold rounded-xs flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye size={14} />
                        <span>{TRANSLATIONS.portfolio.viewProject[language]}</span>
                      </div>
                    </div>

                    {/* Metadata Badge */}
                    <div className="absolute top-3 left-3 bg-[#EEEAD7]/90 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#6D0808]/20 text-[10px] font-mono font-bold text-[#6D0808]">
                      {proj.year}
                    </div>
                  </div>

                  {/* Text Description Box */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] tracking-wider text-[#757D6F] uppercase block">
                        {language === 'FR' ? proj.typeFr : proj.typeEn}
                      </span>
                      <h3 className="font-display text-xl font-bold text-[#2D0000] group-hover:text-[#6D0808] transition-colors leading-snug">
                        {proj.title}
                      </h3>
                      <p className="font-sans-body text-xs text-[#2D0000]/75 line-clamp-2 leading-relaxed">
                        {language === 'FR' ? proj.summaryFr : proj.summaryEn}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#6D0808]/10 flex items-center justify-between text-[11px] font-mono text-[#6D0808] font-semibold">
                      <span>{proj.client}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-xl border border-[#6D0808]/20 bg-[#2D0000]/5 space-y-4">
              <p className="font-serif-editorial text-xl text-[#2D0000]">
                {language === 'FR'
                  ? 'Aucun projet visible pour cette catégorie pour le moment.'
                  : 'No public projects archived in this folder yet.'}
              </p>
              <button
                onClick={() => setActiveCategoryId(null)}
                className="px-6 py-2.5 bg-[#6D0808] text-[#EEEAD7] font-mono text-xs rounded-xs"
              >
                {TRANSLATIONS.portfolio.backToFolders[language]}
              </button>
            </div>
          )}
        </motion.section>
      )}
    </div>
  );
};
