import React from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';

interface GlassBannerProps {
  language: Language;
}

export const GlassBanner: React.FC<GlassBannerProps> = ({ language }) => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        id="top-glass-banner"
        className="w-full max-w-5xl relative overflow-hidden rounded-xl glass-panel-banner p-6 sm:p-10 md:p-12 text-center"
      >
        {/* Subtle decorative grid lines and infographic registration marks */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 opacity-60">
          <span className="w-1.5 h-1.5 bg-[#6D0808]"></span>
          <span className="font-mono text-[9px] tracking-widest text-[#757D6F]">
            REF: 2026.ID-01
          </span>
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-2 opacity-60">
          <span className="font-mono text-[9px] tracking-widest text-[#757D6F]">
            33°31'N / 07°35'W
          </span>
          <div className="w-2.5 h-2.5 border border-[#6D0808]/40 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-[#6D0808] rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-3 left-4 hidden sm:flex items-center gap-4 text-[9px] font-mono text-[#757D6F] opacity-70">
          <span>RATIO: 1.618</span>
          <span>•</span>
          <span>GRID: 12-COL</span>
          <span>•</span>
          <span>SCALE: METRIC</span>
        </div>

        <div className="absolute bottom-3 right-4 hidden sm:flex items-center gap-2 text-[9px] font-mono text-[#6D0808] opacity-80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6D0808] animate-pulse"></span>
          <span>ARCHIVE DISCIPLINE</span>
        </div>

        {/* Minimal hairline geometric corner accents */}
        <div className="absolute top-0 left-0 w-8 h-[1px] bg-[#6D0808]/40"></div>
        <div className="absolute top-0 left-0 w-[1px] h-8 bg-[#6D0808]/40"></div>
        <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-[#6D0808]/40"></div>
        <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-[#6D0808]/40"></div>

        {/* Central Dominant Typography */}
        <div className="relative z-10 py-3 sm:py-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#6D0808]/10 border border-[#6D0808]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D0808]"></span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] font-semibold text-[#6D0808] uppercase">
              {language === 'FR' ? 'ARCHITECTURE DE L’INFORMATION' : 'INFORMATION ARCHITECTURE'}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight sm:tracking-normal font-black text-[#2D0000] leading-none select-none uppercase">
            PORTFOLIO <span className="text-[#6D0808] font-serif-editorial italic font-normal tracking-wide">2026</span>
          </h1>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-16 bg-[#6D0808]/30"></div>
            <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] text-[#6D0808] uppercase">
              {language === 'FR' ? 'DESIGNER INFOGRAPHISTE' : 'INFOGRAPHIC DESIGNER'}
            </p>
            <div className="h-[1px] w-8 sm:w-16 bg-[#6D0808]/30"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
