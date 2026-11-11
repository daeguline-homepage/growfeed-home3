import React from 'react';

export const BioAnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
      {/* 1. Subtle Bio Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 via-slate-50/20 to-transparent" />

      {/* 2. Soft Ambient Bio-Orbs using lightweight CSS */}
      <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-2xl pointer-events-none transform-gpu" />
      <div className="absolute top-1/3 -right-24 w-[24rem] h-[24rem] rounded-full bg-teal-100/40 blur-2xl pointer-events-none transform-gpu" />
      <div className="absolute -bottom-20 left-1/4 w-[22rem] h-[22rem] rounded-full bg-amber-50/50 blur-2xl pointer-events-none transform-gpu" />

      {/* 3. Subtle Hexagonal Bio-Mineral SVG Wireframes */}
      <div className="absolute top-12 right-12 w-40 h-40 opacity-[0.06] text-emerald-800 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.6">
          <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" strokeDasharray="3 3" />
          <circle cx="50" cy="15" r="2" fill="currentColor" />
          <circle cx="80" cy="32" r="2" fill="currentColor" />
          <circle cx="80" cy="68" r="2" fill="currentColor" />
          <circle cx="50" cy="85" r="2" fill="currentColor" />
          <circle cx="20" cy="68" r="2" fill="currentColor" />
          <circle cx="20" cy="32" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="15" strokeWidth="0.4" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="absolute bottom-12 left-10 w-36 h-36 opacity-[0.05] text-teal-800 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.6">
          <ellipse cx="50" cy="50" rx="35" ry="22" transform="rotate(-30 50 50)" strokeDasharray="2 2" />
          <ellipse cx="50" cy="50" rx="35" ry="22" transform="rotate(30 50 50)" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="25" cy="35" r="2" fill="currentColor" />
          <circle cx="75" cy="65" r="2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};


