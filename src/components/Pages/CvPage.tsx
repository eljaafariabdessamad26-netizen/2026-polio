import React, { useState } from 'react';
import { Language, PageId } from '../../types';
import { TRANSLATIONS, CV_DATA } from '../../data/portfolioData';
import { Download, Printer, CheckCircle, ArrowUpRight, Award, GraduationCap, Briefcase, FileText, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CvPageProps {
  language: Language;
  onNavigate: (page: PageId) => void;
}

export const CvPage: React.FC<CvPageProps> = ({ language, onNavigate }) => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setDownloadModalOpen(true);
    }, 600);
  };

  const printCv = () => {
    window.print();
  };

  return (
    <div id="page-cv" className="w-full pt-28 pb-24 space-y-20 max-w-6xl mx-auto px-6 md:px-10">
      {/* 1. EDITORIAL HEADER & DOWNLOAD CTA */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-[#6D0808]/20">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6D0808] uppercase tracking-[0.25em] font-semibold">
            <span className="w-2 h-2 bg-[#6D0808]"></span>
            <span>PAGE 03 // CURRICULUM</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2D0000] tracking-tight uppercase">
            {TRANSLATIONS.cv.title}
          </h1>

          <p className="font-serif-editorial text-xl sm:text-2xl text-[#6D0808] italic font-medium leading-relaxed max-w-xl">
            {TRANSLATIONS.cv.subtitle[language]}
          </p>
        </div>

        {/* Sophisticated Download Button */}
        <div>
          <button
            id="download-cv-btn"
            onClick={handleDownload}
            disabled={isGenerating}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#6D0808] text-[#EEEAD7] font-semibold text-xs tracking-widest uppercase rounded-xs overflow-hidden shadow-md hover:bg-[#2D0000] transition-all duration-300 cursor-pointer"
          >
            {/* Subtle animated border sheen */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <Download
              size={16}
              className={`transition-transform duration-300 ${
                isGenerating ? 'animate-bounce' : 'group-hover:-translate-y-0.5'
              }`}
            />
            <span className="relative z-10">
              {isGenerating
                ? language === 'FR'
                  ? 'Génération...'
                  : 'Preparing PDF...'
                : TRANSLATIONS.cv.downloadBtn[language]}
            </span>
          </button>
        </div>
      </section>

      {/* 2. PROFILE SECTION */}
      <section className="p-8 sm:p-10 rounded-xl border border-[#6D0808]/20 bg-[#2D0000]/5 space-y-6">
        <div className="flex items-center justify-between border-b border-[#6D0808]/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#6D0808]"></span>
            <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#2D0000]">
              {TRANSLATIONS.cv.profileSection[language]}
            </h2>
          </div>
          <span className="font-mono text-xs text-[#757D6F]">
            {CV_DATA.profile.location}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
          <div className="md:col-span-4 space-y-1">
            <h3 className="font-display text-2xl font-extrabold text-[#2D0000]">
              {CV_DATA.profile.name}
            </h3>
            <p className="font-mono text-xs text-[#6D0808] font-bold uppercase tracking-wider">
              {language === 'FR' ? CV_DATA.profile.titleFr : CV_DATA.profile.titleEn}
            </p>
          </div>
          <div className="md:col-span-8 font-sans-body text-sm sm:text-base text-[#2D0000]/85 leading-relaxed">
            {language === 'FR' ? CV_DATA.profile.bioFr : CV_DATA.profile.bioEn}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE TIMELINE (Connected with thin lines & geometric nodes) */}
      <section className="space-y-10">
        <div className="flex items-center gap-3 pb-4 border-b border-[#6D0808]/20">
          <Briefcase size={20} className="text-[#6D0808]" />
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D0000] uppercase tracking-wide">
            {TRANSLATIONS.cv.experienceSection[language]}
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-10 space-y-12">
          {/* Continuous Thin Timeline Axis Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[1.5px] bg-[#6D0808]/30"></div>

          {CV_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Geometric Node Marker on timeline */}
              <div className="absolute -left-[30px] sm:-left-[42px] top-1.5 w-6 h-6 rounded-xs bg-[#EEEAD7] border-2 border-[#6D0808] flex items-center justify-center transition-all duration-300 group-hover:bg-[#6D0808] group-hover:scale-110 shadow-xs">
                <div className="w-1.5 h-1.5 bg-[#6D0808] group-hover:bg-[#EEEAD7] transition-colors"></div>
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-xl border border-[#6D0808]/15 bg-[#EEEAD7] glass-card-hover space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#6D0808]/10 pb-3">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#2D0000] group-hover:text-[#6D0808] transition-colors">
                      {language === 'FR' ? exp.roleFr : exp.roleEn}
                    </h3>
                    <div className="font-mono text-xs text-[#757D6F] font-semibold mt-0.5">
                      {exp.company} — <span className="italic">{exp.location}</span>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-[#6D0808] px-3 py-1 bg-[#6D0808]/10 rounded-xs border border-[#6D0808]/20 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="font-sans-body text-sm text-[#2D0000]/80 leading-relaxed">
                  {language === 'FR' ? exp.descFr : exp.descEn}
                </p>

                {/* Key Accomplishments with editorial check nodes */}
                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono tracking-widest text-[#757D6F] uppercase">
                    {language === 'FR' ? 'RÉALISATIONS MAJEURES :' : 'KEY ACHIEVEMENTS :'}
                  </div>
                  <ul className="space-y-1.5">
                    {(language === 'FR' ? exp.achievementsFr : exp.achievementsEn).map(
                      (ach, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs font-sans-body text-[#2D0000]/85"
                        >
                          <span className="w-1.5 h-1.5 bg-[#6D0808] rounded-full mt-1.5 shrink-0"></span>
                          <span>{ach}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EDUCATION SECTION (Connected Timeline) */}
      <section className="space-y-10">
        <div className="flex items-center gap-3 pb-4 border-b border-[#6D0808]/20">
          <GraduationCap size={20} className="text-[#6D0808]" />
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D0000] uppercase tracking-wide">
            {TRANSLATIONS.cv.educationSection[language]}
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-10 space-y-8">
          <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[1.5px] bg-[#6D0808]/30"></div>

          {CV_DATA.education.map((edu, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[30px] sm:-left-[42px] top-1.5 w-6 h-6 rounded-xs bg-[#EEEAD7] border-2 border-[#757D6F] flex items-center justify-center transition-all duration-300 group-hover:border-[#6D0808] group-hover:bg-[#6D0808]">
                <div className="w-1.5 h-1.5 bg-[#757D6F] group-hover:bg-[#EEEAD7]"></div>
              </div>

              <div className="p-6 rounded-xl border border-[#6D0808]/15 bg-[#EEEAD7] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#2D0000]">
                    {language === 'FR' ? edu.degreeFr : edu.degreeEn}
                  </h3>
                  <span className="font-mono text-xs text-[#757D6F]">{edu.period}</span>
                </div>
                <div className="font-mono text-xs text-[#6D0808] font-semibold">
                  {edu.institution} — {edu.location}
                </div>
                {edu.honorsEn && (
                  <p className="font-serif-editorial text-sm italic text-[#2D0000]/75 pt-1">
                    {language === 'FR' ? edu.honorsFr : edu.honorsEn}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LANGUAGES & SOFTWARE GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Languages */}
        <div className="p-8 rounded-xl border border-[#6D0808]/20 bg-[#2D0000]/5 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#6D0808]/15">
            <Globe size={18} className="text-[#6D0808]" />
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#2D0000]">
              {TRANSLATIONS.cv.languagesSection[language]}
            </h3>
          </div>

          <div className="space-y-3 pt-2">
            {CV_DATA.profile.languages.map((l, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xs bg-[#EEEAD7] border border-[#6D0808]/15"
              >
                <span className="font-display text-sm font-bold text-[#2D0000]">
                  {language === 'FR' ? l.nameFr : l.nameEn}
                </span>
                <span className="font-mono text-xs text-[#6D0808] font-semibold">
                  {language === 'FR' ? l.levelFr : l.levelEn}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Software Mastery Summary */}
        <div className="p-8 rounded-xl border border-[#6D0808]/20 bg-[#2D0000]/5 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#6D0808]/15">
            <Award size={18} className="text-[#6D0808]" />
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#2D0000]">
              {TRANSLATIONS.cv.softwareSection[language]}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {CV_DATA.software.slice(0, 6).map((s) => (
              <div
                key={s.name}
                className="p-3 rounded-xs bg-[#EEEAD7] border border-[#6D0808]/15 text-xs space-y-1"
              >
                <div className="font-bold text-[#2D0000] truncate">{s.name}</div>
                <div className="font-mono text-[10px] text-[#6D0808]">{s.proficiency}% PROFICIENCY</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD / PRINT PREVIEW MODAL */}
      <AnimatePresence>
        {downloadModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#2D0000]/70 backdrop-blur-sm flex justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#EEEAD7] text-[#2D0000] rounded-xl border border-[#6D0808]/20 shadow-2xl p-6 sm:p-10 my-auto space-y-6"
            >
              <div className="flex items-center justify-between border-b border-[#6D0808]/15 pb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#6D0808]" />
                  <span className="font-display text-lg font-bold text-[#2D0000]">
                    {language === 'FR' ? 'CURRICULUM VITAE — ÉDITION 2026 PRÊTE' : 'CURRICULUM VITAE — 2026 EDITION READY'}
                  </span>
                </div>
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="px-3 py-1 font-mono text-xs border border-[#6D0808]/20 rounded-xs hover:bg-[#6D0808] hover:text-[#EEEAD7] cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="font-sans-body text-sm text-[#2D0000]/80">
                {language === 'FR'
                  ? 'Le document a été formaté selon la charte typographique du portfolio. Vous pouvez l’imprimer directement ou l’enregistrer en PDF haute définition.'
                  : 'The document has been formatted according to the portfolio typographic grid. You can print directly or save as high-resolution PDF.'}
              </p>

              {/* Document Mockup Summary Sheet */}
              <div className="p-6 rounded-lg border border-[#6D0808]/20 bg-white/60 space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-[#6D0808]/10 pb-2">
                  <span className="font-bold text-[#6D0808]">{CV_DATA.profile.name}</span>
                  <span className="text-[#757D6F]">A4 FORMAT // 300 DPI READY</span>
                </div>
                <div className="text-[11px] text-[#2D0000]/80">
                  {language === 'FR' ? CV_DATA.profile.titleFr : CV_DATA.profile.titleEn}
                </div>
                <div className="text-[10px] text-[#757D6F] flex gap-4">
                  <span>EXPÉRIENCE: 9+ YEARS</span>
                  <span>SPECIALTY: DATA VISUALIZATION</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-mono text-[#2D0000] border border-[#6D0808]/20 rounded-xs hover:bg-[#2D0000]/5 cursor-pointer"
                >
                  {language === 'FR' ? 'Fermer' : 'Close'}
                </button>
                <button
                  onClick={printCv}
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#6D0808] text-[#EEEAD7] font-semibold text-xs tracking-wider uppercase rounded-xs hover:bg-[#2D0000] transition-colors cursor-pointer"
                >
                  <Printer size={15} />
                  <span>{language === 'FR' ? 'Imprimer / Sauvegarder PDF' : 'Print / Save PDF'}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
