import React, { useState, useEffect } from 'react';
import { AnimatedCounter } from './AnimatedCounter';
import { Language } from '../types';

interface GlobalExportMapProps {
  lang: Language;
}

interface CountryDot {
  id: string;
  nameKo?: string;
  nameEn?: string;
  x: number; // percentage (0 to 100)
  y: number; // percentage (0 to 100)
  isOrigin?: boolean;
  showName?: boolean;
}

// 52 Global Nodes with specific named target locations
const GLOBAL_DOTS: CountryDot[] = [
  // HQ / Origin Korea
  { id: 'kr', nameKo: '대한민국 (본사·광산)', nameEn: 'South Korea (HQ)', x: 80.5, y: 38.0, isOrigin: true, showName: true },
  
  // Asia / Middle East
  { id: 'ph', x: 79.5, y: 53.0 },
  { id: 'vn', x: 74.5, y: 49.5 },
  { id: 'th', nameKo: '태국', nameEn: 'Thailand', x: 72.5, y: 51.5, showName: true },
  { id: 'my', x: 74.0, y: 59.0 },
  { id: 'id', x: 78.5, y: 64.0 },
  { id: 'jp', x: 84.5, y: 37.0 },
  { id: 'cn', nameKo: '중국', nameEn: 'China', x: 74.0, y: 39.0, showName: true },
  { id: 'tw', nameKo: '대만', nameEn: 'Taiwan', x: 78.0, y: 45.0, showName: true },
  { id: 'sg', x: 74.5, y: 60.5 },
  { id: 'in', nameKo: '인도', nameEn: 'India', x: 65.5, y: 47.0, showName: true },
  { id: 'ae', x: 58.5, y: 45.5 },
  { id: 'sa', x: 55.5, y: 45.0 },
  { id: 'qa', x: 57.5, y: 44.5 },
  { id: 'kz', x: 62.0, y: 31.0 },
  { id: 'uz', x: 60.0, y: 34.0 },
  { id: 'bd', nameKo: '방글라데시', nameEn: 'Bangladesh', x: 69.5, y: 46.5, showName: true },
  { id: 'pk', x: 63.0, y: 43.0 },

  // Europe
  { id: 'de', x: 48.0, y: 29.0 },
  { id: 'fr', nameKo: '프랑스', nameEn: 'France', x: 45.0, y: 32.0, showName: true },
  { id: 'gb', nameKo: '영국', nameEn: 'UK', x: 43.5, y: 27.0, showName: true },
  { id: 'nl', x: 46.5, y: 28.0 },
  { id: 'es', nameKo: '스페인', nameEn: 'Spain', x: 42.5, y: 36.0, showName: true },
  { id: 'it', nameKo: '이탈리아', nameEn: 'Italy', x: 48.5, y: 34.5, showName: true },
  { id: 'pl', x: 51.0, y: 28.5 },
  { id: 'dk', nameKo: '덴마크', nameEn: 'Denmark', x: 47.5, y: 24.5, showName: true },
  { id: 'be', x: 45.8, y: 29.5 },
  { id: 'se', nameKo: '스웨덴', nameEn: 'Sweden', x: 49.5, y: 22.0, showName: true },
  { id: 'no', nameKo: '노르웨이', nameEn: 'Norway', x: 47.0, y: 19.5, showName: true },
  { id: 'ch', x: 46.8, y: 31.5 },
  { id: 'at', x: 49.5, y: 31.0 },
  { id: 'cz', x: 49.8, y: 29.5 },
  { id: 'hu', x: 51.5, y: 32.0 },
  { id: 'tr', nameKo: '터키', nameEn: 'Turkey', x: 55.0, y: 35.5, showName: true },

  // Americas
  { id: 'us', nameKo: '미국', nameEn: 'USA', x: 22.0, y: 34.0, showName: true },
  { id: 'ca', x: 20.0, y: 24.0 },
  { id: 'mx', x: 19.5, y: 44.0 },
  { id: 'br', nameKo: '브라질', nameEn: 'Brazil', x: 34.0, y: 65.0, showName: true },
  { id: 'ar', x: 30.5, y: 76.0 },
  { id: 'cl', x: 27.5, y: 73.0 },
  { id: 'co', x: 26.5, y: 52.0 },
  { id: 'pe', x: 26.0, y: 60.0 },
  { id: 'uy', x: 33.0, y: 74.0 },

  // Oceania
  { id: 'au', x: 86.5, y: 72.0 },
  { id: 'nz', x: 94.0, y: 81.0 },

  // Africa
  { id: 'eg', x: 53.5, y: 40.0 },
  { id: 'za', x: 52.0, y: 74.0 },
  { id: 'ng', x: 46.0, y: 51.0 },
  { id: 'ke', x: 57.0, y: 55.0 },
  { id: 'ma', x: 40.0, y: 38.0 },
  { id: 'gh', x: 43.5, y: 52.5 },
  { id: 'et', x: 56.5, y: 50.0 },
  { id: 'dz', x: 44.0, y: 39.5 },
];

export const GlobalExportMap: React.FC<GlobalExportMapProps> = ({ lang }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  // Cycling across dots (prioritizing named & key global nodes)
  useEffect(() => {
    const namedIndices = GLOBAL_DOTS.map((d, i) => (d.showName ? i : -1)).filter((i) => i !== -1);
    let step = 0;
    
    const timer = setInterval(() => {
      // Rotate through named countries periodically along with global twinkle
      step++;
      const nextIdx = namedIndices[step % namedIndices.length];
      setActiveIdx(nextIdx);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg relative isolate z-0 overflow-hidden">
      {/* Inline styles for streaming connection lines and moving particle pulses */}
      <style>{`
        @keyframes streamLineForward {
          from {
            stroke-dashoffset: 60;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-stream-fast {
          animation: streamLineForward 1.8s linear infinite;
        }
        .animate-stream-medium {
          animation: streamLineForward 2.6s linear infinite;
        }
        .animate-stream-slow {
          animation: streamLineForward 3.6s linear infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: PURE NUMERIC STATS DISPLAY ONLY */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-6">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
            <span id="global-expansion-status-label" className="text-base sm:text-[16.5px] font-black uppercase tracking-wide text-emerald-800">
              {lang === 'ko' ? '글로벌 진출 현황' : 'Global Expansion Status'}
            </span>
          </div>

          {/* Metric 1: 52개국 */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-500/40 transition-colors">
            <span className="text-xs font-medium text-slate-700 block mb-0.5">
              {lang === 'ko' ? '수출 및 특허 진출국' : 'Export & Patent Nations'}
            </span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter end={52} />
              </span>
              <span className="text-sm font-bold text-emerald-800">
                {lang === 'ko' ? '개국 글로벌' : 'Nations'}
              </span>
            </div>
          </div>

          {/* Metric 2: 400톤 + 200톤 2026년 10월 까지의 실적 */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-500/40 transition-colors">
            <span className="text-xs font-medium text-slate-700 block mb-1">
              {lang === 'ko' ? '2026년 10월 까지의 실적' : 'Performance through Oct 2026'}
            </span>
            <div className="flex flex-col space-y-0.5">
              <span className="text-2xl sm:text-3xl font-black text-emerald-800 tracking-tight leading-tight">
                {lang === 'ko' ? '400톤 + 200톤' : '400 Tons + 200 Tons'}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                {lang === 'ko' ? '(수출 실적)' : '(Exports)'}
              </span>
            </div>
          </div>

          {/* Metric 3: 4,220톤+ 누적 수출량 */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-500/40 transition-colors">
            <span className="text-xs font-medium text-slate-700 block mb-0.5">
              {lang === 'ko' ? '단일 품목 누적 수출량' : 'Cumulative Export Volume'}
            </span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter end={4220} />
              </span>
              <span className="text-sm font-bold text-emerald-800">
                {lang === 'ko' ? '톤+ (9년 연속)' : 'Tons+'}
              </span>
            </div>
          </div>

          {/* Metric 4: 223ha 독점 광산 */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-500/40 transition-colors">
            <span className="text-xs font-medium text-slate-700 block mb-0.5">
              {lang === 'ko' ? '맥섬석 독점 원료 광산' : 'Exclusive Mineral Mine'}
            </span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter end={223} />
              </span>
              <span className="text-sm font-bold text-slate-800">
                {lang === 'ko' ? 'ha (본사 보유)' : 'ha Mine Base'}
              </span>
            </div>
          </div>

          {/* Bottom small 기준 년도 표기 (Right Aligned) */}
          <div className="pt-1 w-full text-right flex justify-end">
            <span id="base-year-label" className="text-[11px] text-slate-700 font-medium tracking-tight">
              {lang === 'ko' ? '(2026년 기준)' : '(As of 2026)'}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: PURE DOT-MATRIX WORLD MAP WITH MOVING CONNECTION STREAM LINES */}
        {/* ========================================================================= */}
        <div className="lg:col-span-8 relative flex items-center justify-center">
          <div className="relative w-full aspect-[16/9] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] bg-white rounded-2xl overflow-hidden flex items-center justify-center select-none">
            
            {/* SVG Dot Matrix World Map Pattern (Clean Gray Dots on Pure White) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Regular Background Matrix Dots Pattern */}
                <pattern id="dot-matrix-clean" width="16" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="8" cy="8" r="1.2" fill="#e2e8f0" />
                </pattern>

                {/* Soft Gradient for Arcs */}
                <linearGradient id="line-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#059669" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Dot Grid Background */}
              <rect width="1000" height="500" fill="url(#dot-matrix-clean)" />

              {/* Continents Outline Shaped with Denser Dot Matrix in SVG */}
              {/* North America Dotted Silhouette */}
              <g fill="#94a3b8" opacity="0.85">
                <circle cx="150" cy="90" r="2" /><circle cx="170" cy="80" r="2" /><circle cx="190" cy="70" r="2.2" /><circle cx="210" cy="70" r="2.2" /><circle cx="230" cy="80" r="2.2" />
                <circle cx="140" cy="110" r="2" /><circle cx="160" cy="100" r="2.2" /><circle cx="180" cy="90" r="2.2" /><circle cx="200" cy="90" r="2.2" /><circle cx="220" cy="90" r="2.2" /><circle cx="240" cy="100" r="2.2" /><circle cx="260" cy="100" r="2.2" />
                <circle cx="150" cy="130" r="2.2" /><circle cx="170" cy="120" r="2.2" /><circle cx="190" cy="110" r="2.2" /><circle cx="210" cy="110" r="2.2" /><circle cx="230" cy="110" r="2.2" /><circle cx="250" cy="120" r="2.2" /><circle cx="270" cy="120" r="2.2" />
                <circle cx="160" cy="150" r="2.2" /><circle cx="180" cy="140" r="2.2" /><circle cx="200" cy="130" r="2.2" /><circle cx="220" cy="130" r="2.2" /><circle cx="240" cy="130" r="2.2" /><circle cx="260" cy="140" r="2.2" /><circle cx="280" cy="150" r="2" />
                <circle cx="170" cy="170" r="2.2" /><circle cx="190" cy="160" r="2.2" /><circle cx="210" cy="150" r="2.2" /><circle cx="230" cy="150" r="2.2" /><circle cx="250" cy="160" r="2.2" /><circle cx="270" cy="170" r="2" />
                <circle cx="180" cy="190" r="2" /><circle cx="200" cy="180" r="2.2" /><circle cx="220" cy="180" r="2.2" /><circle cx="240" cy="180" r="2" />
                <circle cx="190" cy="210" r="2" /><circle cx="210" cy="200" r="2" /><circle cx="230" cy="210" r="1.8" />
              </g>

              {/* South America Dotted Silhouette */}
              <g fill="#94a3b8" opacity="0.85">
                <circle cx="260" cy="250" r="2" /><circle cx="280" cy="245" r="2.2" /><circle cx="300" cy="250" r="2.2" /><circle cx="320" cy="260" r="2.2" />
                <circle cx="260" cy="275" r="2.2" /><circle cx="280" cy="270" r="2.2" /><circle cx="300" cy="275" r="2.2" /><circle cx="320" cy="285" r="2.2" /><circle cx="340" cy="295" r="2.2" />
                <circle cx="260" cy="300" r="2.2" /><circle cx="280" cy="300" r="2.2" /><circle cx="300" cy="305" r="2.2" /><circle cx="320" cy="315" r="2.2" /><circle cx="340" cy="325" r="2.2" /><circle cx="350" cy="335" r="2.2" />
                <circle cx="260" cy="330" r="2.2" /><circle cx="280" cy="330" r="2.2" /><circle cx="300" cy="335" r="2.2" /><circle cx="320" cy="345" r="2.2" /><circle cx="340" cy="355" r="2.2" />
                <circle cx="270" cy="360" r="2.2" /><circle cx="290" cy="365" r="2.2" /><circle cx="310" cy="370" r="2.2" /><circle cx="330" cy="380" r="2" />
                <circle cx="280" cy="390" r="2.2" /><circle cx="300" cy="395" r="2" /><circle cx="310" cy="410" r="2" />
                <circle cx="290" cy="425" r="2" /><circle cx="300" cy="440" r="1.8" />
              </g>

              {/* Europe Dotted Silhouette */}
              <g fill="#94a3b8" opacity="0.85">
                <circle cx="430" cy="110" r="2" /><circle cx="450" cy="100" r="2" /><circle cx="470" cy="90" r="2.2" /><circle cx="490" cy="90" r="2.2" /><circle cx="510" cy="90" r="2.2" /><circle cx="530" cy="95" r="2" />
                <circle cx="425" cy="130" r="2.2" /><circle cx="445" cy="120" r="2.2" /><circle cx="465" cy="115" r="2.2" /><circle cx="485" cy="115" r="2.2" /><circle cx="505" cy="115" r="2.2" /><circle cx="525" cy="120" r="2.2" /><circle cx="545" cy="125" r="2.2" />
                <circle cx="420" cy="150" r="2.2" /><circle cx="440" cy="145" r="2.2" /><circle cx="460" cy="140" r="2.2" /><circle cx="480" cy="140" r="2.2" /><circle cx="500" cy="140" r="2.2" /><circle cx="520" cy="145" r="2.2" /><circle cx="540" cy="150" r="2.2" />
                <circle cx="430" cy="170" r="2" /><circle cx="450" cy="165" r="2.2" /><circle cx="470" cy="165" r="2.2" /><circle cx="490" cy="165" r="2.2" /><circle cx="510" cy="170" r="2.2" /><circle cx="530" cy="175" r="2" />
              </g>

              {/* Africa Dotted Silhouette */}
              <g fill="#94a3b8" opacity="0.85">
                <circle cx="435" cy="200" r="2.2" /><circle cx="455" cy="195" r="2.2" /><circle cx="475" cy="195" r="2.2" /><circle cx="495" cy="195" r="2.2" /><circle cx="515" cy="195" r="2.2" /><circle cx="535" cy="200" r="2.2" /><circle cx="555" cy="205" r="2" />
                <circle cx="430" cy="225" r="2.2" /><circle cx="450" cy="220" r="2.2" /><circle cx="470" cy="220" r="2.2" /><circle cx="490" cy="220" r="2.2" /><circle cx="510" cy="220" r="2.2" /><circle cx="530" cy="225" r="2.2" /><circle cx="550" cy="230" r="2.2" /><circle cx="570" cy="235" r="2" />
                <circle cx="435" cy="250" r="2.2" /><circle cx="455" cy="245" r="2.2" /><circle cx="475" cy="245" r="2.2" /><circle cx="495" cy="245" r="2.2" /><circle cx="515" cy="250" r="2.2" /><circle cx="535" cy="255" r="2.2" /><circle cx="555" cy="260" r="2.2" />
                <circle cx="455" cy="275" r="2.2" /><circle cx="475" cy="275" r="2.2" /><circle cx="495" cy="275" r="2.2" /><circle cx="515" cy="280" r="2.2" /><circle cx="535" cy="285" r="2.2" /><circle cx="555" cy="290" r="2" />
                <circle cx="475" cy="305" r="2.2" /><circle cx="495" cy="305" r="2.2" /><circle cx="515" cy="310" r="2.2" /><circle cx="535" cy="315" r="2.2" /><circle cx="545" cy="325" r="2" />
                <circle cx="485" cy="335" r="2.2" /><circle cx="505" cy="335" r="2.2" /><circle cx="525" cy="340" r="2" /><circle cx="535" cy="350" r="1.8" />
                <circle cx="495" cy="365" r="2" /><circle cx="515" cy="365" r="2" /><circle cx="525" cy="375" r="1.8" />
              </g>

              {/* Asia Dotted Silhouette */}
              <g fill="#94a3b8" opacity="0.85">
                <circle cx="580" cy="90" r="2" /><circle cx="610" cy="80" r="2" /><circle cx="640" cy="75" r="2.2" /><circle cx="670" cy="70" r="2.2" /><circle cx="700" cy="70" r="2.2" /><circle cx="730" cy="70" r="2.2" /><circle cx="760" cy="75" r="2.2" /><circle cx="790" cy="80" r="2.2" /><circle cx="820" cy="85" r="2" />
                <circle cx="570" cy="115" r="2.2" /><circle cx="600" cy="110" r="2.2" /><circle cx="630" cy="105" r="2.2" /><circle cx="660" cy="100" r="2.2" /><circle cx="690" cy="100" r="2.2" /><circle cx="720" cy="100" r="2.2" /><circle cx="750" cy="105" r="2.2" /><circle cx="780" cy="110" r="2.2" /><circle cx="810" cy="115" r="2.2" /><circle cx="840" cy="120" r="2" />
                <circle cx="575" cy="140" r="2.2" /><circle cx="605" cy="135" r="2.2" /><circle cx="635" cy="130" r="2.2" /><circle cx="665" cy="125" r="2.2" /><circle cx="695" cy="125" r="2.2" /><circle cx="725" cy="125" r="2.2" /><circle cx="755" cy="130" r="2.2" /><circle cx="785" cy="135" r="2.2" /><circle cx="815" cy="140" r="2.2" /><circle cx="845" cy="145" r="2" />
                <circle cx="590" cy="165" r="2.2" /><circle cx="620" cy="160" r="2.2" /><circle cx="650" cy="155" r="2.2" /><circle cx="680" cy="150" r="2.2" /><circle cx="710" cy="150" r="2.2" /><circle cx="740" cy="150" r="2.2" /><circle cx="770" cy="155" r="2.2" /><circle cx="800" cy="160" r="2.2" /><circle cx="830" cy="165" r="2" />
                <circle cx="625" cy="190" r="2.2" /><circle cx="655" cy="185" r="2.2" /><circle cx="685" cy="180" r="2.2" /><circle cx="715" cy="180" r="2.2" /><circle cx="745" cy="180" r="2.2" /><circle cx="775" cy="185" r="2.2" /><circle cx="805" cy="190" r="2.2" />
                <circle cx="645" cy="215" r="2.2" /><circle cx="675" cy="210" r="2.2" /><circle cx="705" cy="205" r="2.2" /><circle cx="735" cy="205" r="2.2" /><circle cx="765" cy="210" r="2.2" /><circle cx="795" cy="215" r="2" />
                <circle cx="660" cy="240" r="2" /><circle cx="720" cy="235" r="2" /><circle cx="750" cy="235" r="2" /><circle cx="780" cy="240" r="2" />
                <circle cx="735" cy="265" r="2" /><circle cx="765" cy="265" r="2" /><circle cx="795" cy="270" r="2" />
              </g>

              {/* Australia / Oceania Dotted Silhouette */}
              <g fill="#94a3b8" opacity="0.85">
                <circle cx="810" cy="330" r="2" /><circle cx="830" cy="325" r="2.2" /><circle cx="850" cy="325" r="2.2" /><circle cx="870" cy="330" r="2.2" /><circle cx="890" cy="340" r="2" />
                <circle cx="805" cy="355" r="2.2" /><circle cx="825" cy="350" r="2.2" /><circle cx="845" cy="350" r="2.2" /><circle cx="865" cy="355" r="2.2" /><circle cx="885" cy="365" r="2.2" /><circle cx="905" cy="375" r="2" />
                <circle cx="815" cy="380" r="2.2" /><circle cx="835" cy="375" r="2.2" /><circle cx="855" cy="375" r="2.2" /><circle cx="875" cy="380" r="2.2" /><circle cx="895" cy="390" r="2" />
                <circle cx="830" cy="405" r="2" /><circle cx="850" cy="405" r="2" /><circle cx="870" cy="410" r="2" />
                <circle cx="930" cy="420" r="1.8" /><circle cx="945" cy="435" r="1.8" />
              </g>

              {/* ========================================================================= */}
              {/* DYNAMIC FLOWING / STREAMING CONNECTION LINES */}
              {/* ========================================================================= */}
              
              {/* 1. Korea -> Southeast Asia (Philippines / Vietnam / Thailand / Taiwan) */}
              <path
                d="M 805,190 Q 810,230 795,265"
                fill="none"
                stroke="url(#line-glow-grad)"
                strokeWidth="2"
                strokeDasharray="6 4"
                className="animate-stream-fast"
              />
              <path
                d="M 805,190 Q 770,220 745,248"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                className="animate-stream-medium"
                opacity="0.85"
              />
              <path
                d="M 805,190 Q 755,235 725,258"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.4"
                strokeDasharray="6 4"
                className="animate-stream-slow"
                opacity="0.75"
              />

              {/* 2. Korea -> Europe (France / UK / Sweden / Norway / Italy / Denmark / Spain / Turkey) */}
              <path
                d="M 805,190 Q 640,90 480,145"
                fill="none"
                stroke="url(#line-glow-grad)"
                strokeWidth="2"
                strokeDasharray="8 5"
                className="animate-stream-medium"
              />
              <path
                d="M 805,190 Q 620,110 435,135"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.3"
                strokeDasharray="6 4"
                className="animate-stream-slow"
                opacity="0.7"
              />
              <path
                d="M 805,190 Q 630,70 495,110"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.3"
                strokeDasharray="5 4"
                className="animate-stream-fast"
                opacity="0.75"
              />
              <path
                d="M 805,190 Q 610,60 470,98"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.2"
                strokeDasharray="6 4"
                className="animate-stream-slow"
                opacity="0.7"
              />
              <path
                d="M 805,190 Q 660,140 550,178"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.4"
                strokeDasharray="5 4"
                className="animate-stream-medium"
                opacity="0.75"
              />

              {/* 3. Korea -> Americas (USA / Brazil) */}
              <path
                d="M 805,190 Q 950,130 1000,170 M 0,170 Q 110,170 220,170"
                fill="none"
                stroke="url(#line-glow-grad)"
                strokeWidth="2"
                strokeDasharray="8 5"
                className="animate-stream-fast"
              />
              <path
                d="M 805,190 Q 980,240 1000,280 M 0,280 Q 160,320 340,325"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.4"
                strokeDasharray="7 5"
                className="animate-stream-medium"
                opacity="0.7"
              />

              {/* 4. Korea -> India / China / Taiwan */}
              <path
                d="M 805,190 Q 730,220 655,235"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                className="animate-stream-fast"
                opacity="0.8"
              />
              <path
                d="M 805,190 Q 760,185 740,195"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.3"
                strokeDasharray="4 3"
                className="animate-stream-fast"
                opacity="0.85"
              />
            </svg>

            {/* ========================================================================= */}
            {/* 52 GLOWING DOTS LAYER (z-20) */}
            {/* ========================================================================= */}
            {GLOBAL_DOTS.map((dot, idx) => {
              const isOrigin = dot.isOrigin;
              const isTwinkling = activeIdx === idx;

              return (
                <div
                  key={dot.id}
                  style={{
                    left: `${dot.x}%`,
                    top: `${dot.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`absolute pointer-events-none transition-all duration-300 ${
                    isOrigin ? 'z-30' : isTwinkling ? 'z-25' : 'z-10'
                  }`}
                >
                  {/* Glowing Radar Pulse Wave */}
                  {(isTwinkling || isOrigin) && (
                    <span
                      className={`absolute -inset-3 rounded-full animate-ping opacity-75 ${
                        isOrigin ? 'bg-amber-400' : 'bg-emerald-500'
                      }`}
                    />
                  )}

                  {/* Soft Radiant Halo */}
                  {isTwinkling && (
                    <span className="absolute -inset-4 rounded-full bg-emerald-400/30 animate-pulse blur-xs" />
                  )}

                  {/* Glowing Core Dot */}
                  <div
                    className={`rounded-full transition-all duration-300 shadow-sm flex items-center justify-center ${
                      isOrigin
                        ? 'w-4 h-4 bg-amber-500 ring-4 ring-amber-300/60 border-2 border-white'
                        : isTwinkling
                        ? 'w-3.5 h-3.5 bg-emerald-500 ring-4 ring-emerald-300/70 border-2 border-white scale-125'
                        : 'w-2 h-2 bg-slate-400 border border-white opacity-85'
                    }`}
                  >
                    <div
                      className={`rounded-full ${
                        isOrigin ? 'w-1.5 h-1.5 bg-white' : isTwinkling ? 'w-1 h-1 bg-white' : 'w-0.5 h-0.5 bg-white/60'
                      }`}
                    />
                  </div>
                </div>
              );
            })}

            {/* ========================================================================= */}
            {/* TOPMOST COUNTRY NAME LABELS LAYER (z-30) - ALWAYS ABOVE MAP DOTS, BELOW TOP GNB */}
            {/* ========================================================================= */}
            {GLOBAL_DOTS.map((dot, idx) => {
              const isOrigin = dot.isOrigin;
              const isTwinkling = activeIdx === idx;
              const hasName = dot.showName && dot.nameKo;

              if (!isOrigin && (!hasName || !isTwinkling)) return null;

              return (
                <div
                  key={`label-${dot.id}`}
                  style={{
                    left: `${dot.x}%`,
                    top: `${dot.y}%`,
                    transform: 'translate(-50%, -100%)',
                  }}
                  className="absolute z-30 pointer-events-none pb-2.5 transition-all duration-200"
                >
                  {/* 1. KOREA HQ BADGE */}
                  {isOrigin ? (
                    <div className="px-2.5 py-1 rounded-lg text-[11px] font-black whitespace-nowrap shadow-md border bg-amber-500 text-white border-amber-300 flex items-center space-x-1.5 ring-2 ring-white drop-shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" />
                      <span>{lang === 'ko' ? '대한민국 (본사·광산)' : 'South Korea (HQ)'}</span>
                    </div>
                  ) : (
                    /* 2. SPECIFIED COUNTRIES: CLEAN HIGH-CONTRAST FLOATING NAME */
                    <div className="px-2.5 py-1 rounded-lg text-xs font-black whitespace-nowrap shadow-xl border bg-slate-950 text-emerald-400 border-emerald-400/80 ring-2 ring-white drop-shadow-lg flex items-center space-x-1.5 animate-bounce">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
                      <span className="text-white tracking-wide">{lang === 'ko' ? dot.nameKo : dot.nameEn}</span>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
};
