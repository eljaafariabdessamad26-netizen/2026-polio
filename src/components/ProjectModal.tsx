import React, { useEffect } from 'react';
import { Project, Category, Language } from '../types';
import { TRANSLATIONS, CATEGORIES } from '../data/portfolioData';
import { X, ArrowRight, ArrowLeft, Calendar, Tag, UserCheck, Wrench, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
  language: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
  language,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentCategory = CATEGORIES.find((c) => c.id === project.categoryId);

  // Find next project in the catalogue
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];

  const prevProject =
    currentIndex > 0
      ? allProjects[currentIndex - 1]
      : allProjects[allProjects.length - 1];

  return (
    <AnimatePresence>
      <motion.div
        id="project-detail-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#2D0000]/70 backdrop-blur-md flex justify-center p-2 sm:p-6 md:p-10"
      >
        <motion.div
          id="project-detail-card"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#EEEAD7] text-[#2D0000] rounded-xl border border-[#6D0808]/20 shadow-2xl overflow-hidden my-auto"
        >
          {/* Top Sticky Bar with Controls */}
          <div className="sticky top-0 z-30 bg-[#EEEAD7]/95 backdrop-blur-md px-6 py-4 border-b border-[#6D0808]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#6D0808] px-2 py-0.5 rounded-xs bg-[#6D0808]/10 border border-[#6D0808]/20">
                {currentCategory?.number || '00'}
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-[#757D6F] hidden sm:inline">
                {language === 'FR' ? currentCategory?.titleFr : currentCategory?.titleEn}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-1.5 text-xs text-[#2D0000] hover:text-[#6D0808] border border-[#6D0808]/20 rounded-xs hover:border-[#6D0808] cursor-pointer transition-colors"
                title={language === 'FR' ? 'Projet précédent' : 'Previous project'}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-1.5 text-xs text-[#2D0000] hover:text-[#6D0808] border border-[#6D0808]/20 rounded-xs hover:border-[#6D0808] cursor-pointer transition-colors"
                title={language === 'FR' ? 'Projet suivant' : 'Next project'}
              >
                <ArrowRight size={16} />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-xs text-[#2D0000] hover:bg-[#6D0808] hover:text-[#EEEAD7] border border-[#6D0808]/20 rounded-xs transition-colors cursor-pointer ml-2"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="p-6 sm:p-10 md:p-14 space-y-12">
            {/* Header / Title Block */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#757D6F]">
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[#6D0808]" />
                  {project.year}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Tag size={13} className="text-[#6D0808]" />
                  {language === 'FR' ? project.typeFr : project.typeEn}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-black text-[#2D0000] leading-tight">
                {project.title}
              </h1>

              <p className="font-serif-editorial text-lg sm:text-xl text-[#6D0808] italic font-medium leading-relaxed">
                {language === 'FR' ? project.summaryFr : project.summaryEn}
              </p>
            </div>

            {/* Large Visual Showcase Image */}
            <div className="relative rounded-lg overflow-hidden border border-[#6D0808]/20 bg-[#2D0000]/5">
              <img
                src={project.coverImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[460px] md:h-[540px] object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-[#EEEAD7]/90 backdrop-blur-xs px-3 py-1 rounded-xs border border-[#6D0808]/20 text-[10px] font-mono text-[#2D0000]">
                FIGURE 1.0 — MASTER VISUAL & TYPOGRAPHY
              </div>
            </div>

            {/* Metadata & Technical Specifications Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-lg bg-[#2D0000]/5 border border-[#6D0808]/15">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#757D6F] mb-1">
                  {TRANSLATIONS.portfolio.client[language]}
                </div>
                <div className="text-sm font-semibold font-sans-body text-[#2D0000]">
                  {project.client}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#757D6F] mb-1">
                  {TRANSLATIONS.portfolio.role[language]}
                </div>
                <div className="text-sm font-semibold font-sans-body text-[#2D0000]">
                  {language === 'FR' ? project.roleFr : project.roleEn}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#757D6F] mb-1">
                  ENVIRONNEMENT & OUTILS
                </div>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono bg-[#EEEAD7] border border-[#6D0808]/20 rounded-xs text-[#2D0000]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Infographic Metrics Section (if present) */}
            {project.infographicMetrics && project.infographicMetrics.length > 0 && (
              <div className="p-6 rounded-lg border border-[#6D0808]/30 bg-[#6D0808]/5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6D0808] tracking-wider uppercase">
                  <BarChart2 size={16} />
                  <span>{TRANSLATIONS.portfolio.metricsTitle[language]}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.infographicMetrics.map((m, idx) => (
                    <div key={idx} className="bg-[#EEEAD7] p-3 rounded-xs border border-[#6D0808]/20 text-center">
                      <div className="font-display text-2xl font-extrabold text-[#6D0808]">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-[#757D6F] uppercase tracking-wider mt-1">
                        {language === 'FR' ? m.labelFr : m.labelEn}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Study Core Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
              {/* The Brief */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#6D0808] font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 bg-[#6D0808]"></span>
                  <span>{TRANSLATIONS.portfolio.theBrief[language]}</span>
                </div>
                <p className="font-sans-body text-sm leading-relaxed text-[#2D0000]/85">
                  {language === 'FR' ? project.briefFr : project.briefEn}
                </p>
              </div>

              {/* The Concept */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#6D0808] font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 bg-[#6D0808]"></span>
                  <span>{TRANSLATIONS.portfolio.theConcept[language]}</span>
                </div>
                <p className="font-sans-body text-sm leading-relaxed text-[#2D0000]/85">
                  {language === 'FR' ? project.conceptFr : project.conceptEn}
                </p>
              </div>

              {/* Design Process */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#6D0808] font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 bg-[#6D0808]"></span>
                  <span>{TRANSLATIONS.portfolio.theProcess[language]}</span>
                </div>
                <p className="font-sans-body text-sm leading-relaxed text-[#2D0000]/85">
                  {language === 'FR' ? project.processFr : project.processEn}
                </p>
              </div>

              {/* Final Result */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-[#6D0808] font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 bg-[#6D0808]"></span>
                  <span>{TRANSLATIONS.portfolio.theResult[language]}</span>
                </div>
                <p className="font-sans-body text-sm leading-relaxed text-[#2D0000]/85">
                  {language === 'FR' ? project.resultFr : project.resultEn}
                </p>
              </div>
            </div>

            {/* Additional Project Gallery Images */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-[#6D0808]/15">
                <div className="font-mono text-xs tracking-widest uppercase text-[#757D6F]">
                  DÉTAILS VISUELS & RECHERCHES GRAPHIQUES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.galleryImages.map((imgUrl, i) => (
                    <div
                      key={i}
                      className="rounded-lg overflow-hidden border border-[#6D0808]/20 bg-[#2D0000]/5"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} detail ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-64 sm:h-80 object-cover hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Next Project Section */}
            <div className="pt-10 border-t border-[#6D0808]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#757D6F] uppercase block">
                  {language === 'FR' ? 'POURSUIVRE L’EXPLORATION' : 'CONTINUE EXPLORING'}
                </span>
                <span className="font-display text-xl font-bold text-[#2D0000]">
                  {nextProject.title}
                </span>
              </div>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="group flex items-center gap-3 px-6 py-3 bg-[#6D0808] text-[#EEEAD7] font-semibold text-xs tracking-widest uppercase rounded-xs hover:bg-[#2D0000] transition-colors cursor-pointer"
              >
                <span>{TRANSLATIONS.portfolio.nextProject[language]}</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
