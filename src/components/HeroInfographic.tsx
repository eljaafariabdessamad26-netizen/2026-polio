import React, { useState } from 'react';
import { Language } from '../types';
import { motion } from 'motion/react';
import { Layers, Activity, Compass, Cpu, Target, ArrowRight } from 'lucide-react';

interface HeroInfographicProps {
  language: Language;
}

export const HeroInfographic: React.FC<HeroInfographicProps> = ({ language }) => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'vectors' | 'metrics'>('all');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    {
      id: 'node-1',
      x: 22,
      y: 35,
      labelEn: 'Data Synthesis Node',
      labelFr: 'Nœud de Synthèse de Données',
      value: '420k pts',
      category: 'Analysis'
    },
    {
      id: 'node-2',
      x: 72,
      y: 28,
      labelEn: 'Golden Ratio Grid Matrix',
      labelFr: 'Matrice du Nombre d’Or',
      value: 'Φ = 1.618',
      category: 'Geometry'
    },
    {
      id: 'node-3',
      x: 48,
      y: 65,
      labelEn: 'Cognitive Flow Corridor',
      labelFr: 'Corridor de Flux Cognitif',
      value: '99.4% Clarity',
      category: 'Semiotics'
    },
    {
      id: 'node-4',
      x: 80,
      y: 75,
      labelEn: 'Typographic Baseline Snap',
      labelFr: 'Alignement Typographique Base',
      value: '12-pt Grid',
      category: 'Editorial'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      {/* Outer Container with hairline border & subtle background */}
      <div className="relative rounded-xl border border-[#6D0808]/20 bg-[#EEEAD7]/70 backdrop-blur-sm p-6 sm:p-8 overflow-hidden shadow-[0_12px_36px_-12px_rgba(45,0,0,0.08)]">
        {/* Header bar of the Infographic Canvas */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#6D0808]/15 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#6D0808]"></span>
            <span className="font-bold text-[#2D0000] tracking-wider">
              {language === 'FR'
                ? 'FIG. 01 — DÉCOMPOSITION DE LA MATRICE INFOGRAPHIQUE'
                : 'FIG. 01 — INFOGRAPHIC MATRIX DECOMPOSITION'}
            </span>
            <span className="text-[#757D6F] hidden sm:inline">• [COGNITIVE FLOW // 2026]</span>
          </div>

          {/* Interactive Layer Switches */}
          <div className="flex items-center gap-1 bg-[#2D0000]/5 p-1 rounded-xs border border-[#6D0808]/15">
            <button
              onClick={() => setActiveLayer('all')}
              className={`px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-xs cursor-pointer transition-colors ${
                activeLayer === 'all'
                  ? 'bg-[#6D0808] text-[#EEEAD7]'
                  : 'text-[#2D0000]/70 hover:text-[#2D0000]'
              }`}
            >
              {language === 'FR' ? 'TOUS LES CALQUES' : 'ALL LAYERS'}
            </button>
            <button
              onClick={() => setActiveLayer('vectors')}
              className={`px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-xs cursor-pointer transition-colors ${
                activeLayer === 'vectors'
                  ? 'bg-[#6D0808] text-[#EEEAD7]'
                  : 'text-[#2D0000]/70 hover:text-[#2D0000]'
              }`}
            >
              {language === 'FR' ? 'VECTEURS' : 'VECTORS'}
            </button>
            <button
              onClick={() => setActiveLayer('metrics')}
              className={`px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-xs cursor-pointer transition-colors ${
                activeLayer === 'metrics'
                  ? 'bg-[#6D0808] text-[#EEEAD7]'
                  : 'text-[#2D0000]/70 hover:text-[#2D0000]'
              }`}
            >
              {language === 'FR' ? 'DONNÉES' : 'METRICS'}
            </button>
          </div>
        </div>

        {/* The Visual Infographic Composition */}
        <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] my-4 overflow-hidden rounded-lg bg-gradient-to-b from-[#EEEAD7] via-[#E8E3CF] to-[#EEEAD7] border border-[#6D0808]/10">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(#6D0808 0.75px, transparent 0.75px), radial-gradient(#757D6F 0.5px, transparent 0.5px)`,
              backgroundSize: '24px 24px, 48px 48px',
              backgroundPosition: '0 0, 12px 12px',
            }}
          />

          {/* SVG Complex Geometric & Data Chart Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="burgundyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6D0808" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2D0000" stopOpacity="0.2" />
              </linearGradient>
              <pattern id="hatchPattern" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#757D6F" strokeWidth="1" strokeOpacity="0.3" />
              </pattern>
            </defs>

            {/* Concentric Polar Charts */}
            <g transform="translate(240, 220)" className="opacity-70">
              <circle r="160" fill="none" stroke="#6D0808" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle r="120" fill="none" stroke="#757D6F" strokeWidth="0.75" />
              <circle r="80" fill="url(#hatchPattern)" stroke="#6D0808" strokeWidth="1" />
              <circle r="40" fill="none" stroke="#6D0808" strokeWidth="1.5" />
              <circle r="5" fill="#6D0808" />
              
              {/* Radial tick marks */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1={Math.cos((deg * Math.PI) / 180) * 115}
                  y1={Math.sin((deg * Math.PI) / 180) * 115}
                  x2={Math.cos((deg * Math.PI) / 180) * 125}
                  y2={Math.sin((deg * Math.PI) / 180) * 125}
                  stroke="#6D0808"
                  strokeWidth="1"
                />
              ))}
            </g>

            {/* Isometric Grid Wireframe Projection */}
            <g className="opacity-40">
              <path
                d="M 500 100 L 800 240 L 650 380 L 350 240 Z"
                fill="none"
                stroke="#6D0808"
                strokeWidth="0.75"
              />
              <path
                d="M 500 100 L 500 200 L 800 340 L 800 240"
                fill="none"
                stroke="#757D6F"
                strokeWidth="0.5"
                strokeDasharray="2 3"
              />
              <path
                d="M 650 380 L 650 440"
                stroke="#2D0000"
                strokeWidth="1"
              />
              <path
                d="M 350 240 L 350 340 L 650 480 L 650 380"
                fill="rgba(109, 8, 8, 0.03)"
                stroke="#6D0808"
                strokeWidth="0.75"
              />
            </g>

            {/* Mathematical Flow Curves (Bezier Splines) */}
            <path
              d="M 50 320 C 200 150, 380 400, 600 220 S 900 120, 1050 280"
              fill="none"
              stroke="#6D0808"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            <path
              d="M 50 340 C 200 170, 380 420, 600 240 S 900 140, 1050 300"
              fill="none"
              stroke="#757D6F"
              strokeWidth="1"
            />

            {/* Density Histogram Bars at bottom */}
            <g className="opacity-80">
              {[42, 68, 85, 30, 92, 110, 75, 40, 65, 88, 120, 95, 60, 45, 80, 50].map((h, i) => (
                <rect
                  key={i}
                  x={450 + i * 28}
                  y={420 - h}
                  width="14"
                  height={h}
                  fill={i % 3 === 0 ? '#6D0808' : '#757D6F'}
                  opacity={i % 2 === 0 ? 0.75 : 0.4}
                  rx="1"
                />
              ))}
            </g>
          </svg>

          {/* Interactive Information Nodes */}
          {nodes.map((n) => {
            const isHovered = hoveredNode === n.id;
            return (
              <div
                key={n.id}
                className="absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                onMouseEnter={() => setHoveredNode(n.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Node Target Marker */}
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-7 h-7 rounded-full bg-[#6D0808]/20 animate-ping" />
                  <span className="w-4 h-4 rounded-full border border-[#2D0000] bg-[#EEEAD7] flex items-center justify-center transition-transform group-hover:scale-125">
                    <span className="w-2 h-2 rounded-full bg-[#6D0808]" />
                  </span>
                </div>

                {/* Node Pill Label */}
                <div
                  className={`mt-2 px-2.5 py-1 rounded-xs border text-[11px] font-mono whitespace-nowrap transition-all duration-300 shadow-md ${
                    isHovered
                      ? 'bg-[#2D0000] text-[#EEEAD7] border-[#6D0808] scale-105'
                      : 'bg-[#EEEAD7]/90 text-[#2D0000] border-[#6D0808]/20 backdrop-blur-xs'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    <span>{language === 'FR' ? n.labelFr : n.labelEn}</span>
                    <span className="text-[#6D0808] font-black">{n.value}</span>
                  </div>
                  {isHovered && (
                    <div className="text-[9px] text-[#757D6F] pt-0.5 border-t border-white/20 mt-1">
                      TAG: {n.category} // STATUS: OPTIMIZED
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Overlay Typographic Annotations */}
          <div className="absolute top-4 right-4 text-right font-mono text-[10px] text-[#757D6F] leading-tight space-y-1 select-none pointer-events-none">
            <div className="font-bold text-[#6D0808]">ALGORITHMIC SEMIOTICS</div>
            <div>PROJECTION: ISOMETRIC 30°</div>
            <div>RESOLUTION: 0.125 MM VECTOR</div>
            <div>DATA STREAM: NORMALIZED</div>
          </div>

          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#2D0000]/70 select-none pointer-events-none">
            <div className="font-bold text-[#6D0808] tracking-widest">
              {language === 'FR' ? 'PARAMÈTRES D’AFFICHAGE' : 'DISPLAY METRICS'}
            </div>
            <div>DPI: 300.00 // COLORSPACE: CMYK + PANTONE 1815C</div>
          </div>
        </div>

        {/* Infographic Summary Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-center border-t border-[#6D0808]/15">
          <div className="p-2">
            <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#6D0808]">
              99.4%
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#757D6F]">
              {language === 'FR' ? 'Clarté Cognitive' : 'Cognitive Clarity'}
            </span>
          </div>
          <div className="p-2">
            <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#2D0000]">
              1.618
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#757D6F]">
              {language === 'FR' ? 'Ratio Nombre d’Or' : 'Golden Ratio'}
            </span>
          </div>
          <div className="p-2">
            <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#6D0808]">
              420k+
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#757D6F]">
              {language === 'FR' ? 'Points Traités' : 'Data Points Mapped'}
            </span>
          </div>
          <div className="p-2">
            <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[#2D0000]">
              10
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#757D6F]">
              {language === 'FR' ? 'Disciplines Design' : 'Design Disciplines'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
