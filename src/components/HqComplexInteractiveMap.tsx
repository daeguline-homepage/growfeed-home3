import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Zap, 
  Award, 
  Factory, 
  FlaskConical, 
  Sparkles, 
  Egg, 
  ShieldCheck, 
  FileCheck2,
  Info,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';

interface HqComplexInteractiveMapProps {
  lang: Language;
}

export type PlotKey = 'all' | 'plot-1' | 'plot-2' | 'plot-3' | 'plot-4' | 'common';

interface HotspotConfig {
  key: PlotKey;
  plotNumber: number;
  labelKo: string;
  labelEn: string;
  badgeKo: string;
  badgeEn: string;
  locationKo: string;
  locationEn: string;
  sizeKo: string;
  sizeEn: string;
  focusKo: string;
  focusEn: string;
  // Exact label positions smoothed & matched from user's 4 images
  tagXPercent: number;
  tagYPercent: number;
  // User uploaded reference image path (optional)
  referenceImagePath?: string;
  // Smoothed SVG Path for viewBox="0 0 1000 516"
  svgPathD: string;
  pointsKo: Array<{ text: string; isHighlightRed?: boolean }>;
  pointsEn: Array<{ text: string; isHighlightRed?: boolean }>;
}

// 4개 토지 구역 데이터 (사용자 학습 이미지 1, 2, 3, 4번 토지 기반 자연스러운 곡선 정밀 설계)
const PLOT_CONFIGS: HotspotConfig[] = [
  {
    key: 'plot-1',
    plotNumber: 1,
    labelKo: '1번 토지: 그로피드 이톡스 · DCM',
    labelEn: 'Plot 1: Growfeed E-TOX · DCM',
    badgeKo: '1번 토지',
    badgeEn: 'Plot 1',
    locationKo: '사리리 432번지(공장부지), 건물 600평',
    locationEn: '432 Sari-ri (Factory Site), Building 600 Pyung',
    sizeKo: '건물 600평 (공장부지)',
    sizeEn: 'Building 600 Pyung (~1,983㎡)',
    focusKo: '톡신바인더 · 저메탄 사료첨가제 전문 생산',
    focusEn: 'Toxin Binder & Enteric Methane Reducer Production',
    tagXPercent: 43.5, // 1번 토지 상단 라벨 위치
    tagYPercent: 20.5,
    // 1번 토지: 상단 맥섬석 GM그룹 공장 및 돔형 창고 구역을 감싸는 매끄러운 라운드 패스
    svgPathD: 'M 390,132 C 390,120 402,114 418,114 L 778,114 C 794,114 804,120 804,134 L 804,158 C 804,172 794,178 778,178 L 418,178 C 402,178 390,172 390,158 Z',
    pointsKo: [
      { text: '톡신바인더·저메탄 사료첨가제 전문 생산' },
      { text: '생산능력 시간당 6~8톤, 설비 약 90% 구축 계획' },
      { text: '소성·포장 자동화 설비 완료, 보조사료 생산 중' },
      { text: '경대 축산학과(김은중교수) 2014년 1차 저메탄 IN VITRO시험' },
      { text: '경대 축산학과(김은중교수) 2025년 2차 저메탄 IN VITRO시험' },
      { text: '서울대학교 평창캠퍼스 2025~2026년 8월 24일 IN VIVO 실증시험 완료', isHighlightRed: true },
      { text: '국립축산과학원 저메탄 사료첨가제 심의 승인 완료' }
    ],
    pointsEn: [
      { text: 'Dedicated production of toxin binder & enteric methane reducer additives' },
      { text: 'Capacity 6~8 tons/hour, ~90% facility establishment plan' },
      { text: 'Automated calcination & robotic packaging completed, supplementary feed in active production' },
      { text: 'Kyungpook Nat’l Univ. (Prof. Kim Eun-joong) 2014 1st In Vitro trial passed' },
      { text: 'Kyungpook Nat’l Univ. (Prof. Kim Eun-joong) 2025 2nd In Vitro in-depth testing' },
      { text: 'Seoul National University (Pyeongchang) 2025~2026.08.24 In Vivo trial completed', isHighlightRed: true },
      { text: 'NIAS (National Institute of Animal Science) low-methane additive deliberation approved' }
    ]
  },
  {
    key: 'plot-2',
    plotNumber: 2,
    labelKo: '2번 토지: 그로피드 프로테인 (폐기물종합재활용허가)',
    labelEn: 'Plot 2: Growfeed Protein (Comprehensive Recycling License)',
    badgeKo: '2번 토지',
    badgeEn: 'Plot 2',
    locationKo: '사리리 432번지(공장부지), 건물 960평',
    locationEn: '432 Sari-ri (Factory Site), Building 960 Pyung',
    sizeKo: '건물 960평 (공장부지)',
    sizeEn: 'Building 960 Pyung (~3,174㎡)',
    focusKo: '단백질 사료첨가제 및 단미사료첨가제 생산중',
    focusEn: 'Protein Feed Additives & Single-Ingredient Feed Production',
    tagXPercent: 24.5, // 2번 토지 상단 라벨 위치
    tagYPercent: 32.0,
    // 2번 토지: 본관동, 제조공장, 앞마당 잔디광장, 석축 경사지를 감싸는 부드러운 유기적 베지어 곡선
    svgPathD: 'M 85,190 C 145,184 245,176 345,176 L 730,176 C 746,176 754,186 750,206 L 738,255 C 742,276 764,306 776,336 C 786,360 766,390 748,396 C 620,380 430,360 250,345 C 140,336 40,332 6,332 L 6,252 C 8,245 40,242 85,240 Z',
    pointsKo: [
      { text: '단백질 사료첨가제 및 단미사료첨가제 생산중' },
      { text: '혈액가공품 과립 및 펠렛 생산 중' },
      { text: '경북·김제시 등 혈액가공품 농가보조사업 선정(50% 보조)', isHighlightRed: true }
    ],
    pointsEn: [
      { text: 'Mass production of functional protein & single-ingredient feed additives' },
      { text: 'Continuous production of blood-processed granules and pellets' },
      { text: 'Selected for Gyeongbuk & Gimje-si local gov 50% farm subsidies', isHighlightRed: true }
    ]
  },
  {
    key: 'plot-3',
    plotNumber: 3,
    labelKo: '3번 토지: 유기질비료 · 사료 (폐기물종합재활용허가)',
    labelEn: 'Plot 3: Organic Fertilizer & Feed (Recycling License)',
    badgeKo: '3번 토지',
    badgeEn: 'Plot 3',
    locationKo: '사리리 439번지(공장부지), 2차선 도로 접함',
    locationEn: '439 Sari-ri (Factory Site), 2-lane road frontage',
    sizeKo: '공장부지 (2차선 도로 접함)',
    sizeEn: 'Factory Site (Direct 2-lane road access)',
    focusKo: '코어 유기질비료 · 사료 생산 계획 (특허 등록)',
    focusEn: 'Core Organic Fertilizer & Feed Production (Patented)',
    tagXPercent: 9.0, // 3번 토지 좌측 상단 라벨 위치
    tagYPercent: 65.0,
    // 3번 토지: 하단 석축 아래 넓은 포장 주차장 및 부지 전역을 감싸는 매끄러운 곡선
    svgPathD: 'M 6,336 C 40,336 140,340 250,349 C 430,364 620,384 660,394 C 690,402 725,450 790,510 L 6,510 Z',
    pointsKo: [
      { text: '코어 유기질비료·사료 생산 계획 (특허 등록)' },
      { text: '허가 : 비료 7종 외 유기질코어비료 및 사료(혈액원료)' }
    ],
    pointsEn: [
      { text: 'Core organic fertilizer & feed production line plan (Patent registered)' },
      { text: 'Permits: Licensed for 7 types of fertilizers plus blood-derived organic core fertilizer & feed' }
    ]
  },
  {
    key: 'plot-4',
    plotNumber: 4,
    labelKo: '4번 토지: 산란계 시험사육장',
    labelEn: 'Plot 4: Dedicated Layer Research Poultry Farm',
    badgeKo: '4번 토지',
    badgeEn: 'Plot 4',
    locationKo: '사리리 439-2번지, 436-2번지 (산란계 시험사육장), 2차선 도로 접함',
    locationEn: '439-2 & 436-2 Sari-ri (Layer Research Farm), 2-lane road frontage',
    sizeKo: '토지 면적 1,787 ㎡',
    sizeEn: 'Site Area 1,787 ㎡',
    focusKo: '산란계 전용 시험사육장 및 치유계란 연구',
    focusEn: 'Layer Feeding Trials & Healing Egg Research',
    tagXPercent: 74.0, // 4번 토지 우측 상단 라벨 위치
    tagYPercent: 74.0,
    // 4번 토지: 주차장 우측 진입로 및 정문 경비실 인근 녹지 구역을 감싸는 자연스러운 곡선
    svgPathD: 'M 685,388 C 725,395 790,402 875,415 C 890,422 935,455 994,496 L 994,510 L 780,510 C 740,490 700,455 682,415 Z',
    pointsKo: [
      { text: '산란계 전용 시험사육장 (부지 1,787㎡, 2차선 도로 접함)' },
      { text: '치유계란 상표등록 완료, 중국 등 디자인 특허 등록 연계 연구' }
    ],
    pointsEn: [
      { text: 'Dedicated layer research poultry farm (1,787㎡ site, direct road access)' },
      { text: 'Trademark registered for Healing Egg & design patents secured in China' }
    ]
  }
];

const COMMON_ITEMS_KO = [
  '보조사료생산 · 단미사료 생산',
  '그로피드 프로테인(단백질 사료) 생산',
  '유기질 비료 8종 허가',
  '대기, 폐수, 진동, 분쇄 허가',
  '전기 720kw, 오폐수 완료',
  'Growfeed 상표등록 52개국 단백질 사료 특허',
  '미국, 중국, 일본 등 30개국(혈액 가공품) (정부 무상 보조 3억 지원)',
  '펠렛 단백질 사료(무상 3억 지원) 제조 국내 및 국외 특허 등',
  '치유계란 상표등록, 중국 등 디자인 특허 등록'
];

const COMMON_ITEMS_EN = [
  'Supplementary feed & single-ingredient feed manufacturing',
  'Growfeed Protein (functional protein feed) production',
  '8 registered organic fertilizer permits',
  'Comprehensive environmental permits for air, wastewater, vibration, and crushing',
  'Electrical capacity 720 kW & complete wastewater treatment system',
  'Growfeed trademark & protein feed patents across 52 countries',
  'Blood processing patents in 30 countries including US, China, Japan (KRW 300M gov grant)',
  'Patents for pelletized protein feed manufacture (KRW 300M gov grant) domestic & overseas',
  'Healing Egg registered trademark & design patents registered in China'
];

export const HqComplexInteractiveMap: React.FC<HqComplexInteractiveMapProps> = ({ lang }) => {
  const [selectedKey, setSelectedKey] = useState<PlotKey>('plot-1');
  const [hoveredKey, setHoveredKey] = useState<PlotKey | null>(null);

  const activePlot = PLOT_CONFIGS.find(h => h.key === selectedKey);

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden p-4 sm:p-7 space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-black uppercase tracking-wider mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <Building2 className="w-4 h-4 text-emerald-600" />
            {lang === 'ko' ? '토지 구획 공식 현황도' : 'Official Plot & Facility Blueprint'}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {lang === 'ko' ? '맥섬석GM(주) 본사 공장·토지 현황' : 'Macsumsuk GM Head Office Plant & Land Status'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {lang === 'ko' 
              ? '토지 버튼이나 지도의 토지 구역을 클릭하시면 상세 스펙이 안내됩니다.' 
              : 'Click any plot button or area on the map to view detailed specifications.'}
          </p>
        </div>

        {/* Filter Navigation Buttons: 1번~4번 토지만 깔끔하게 배치 */}
        <div className="flex flex-wrap items-center gap-1.5 shrink-0">
          {PLOT_CONFIGS.map((plot) => {
            const isSelected = selectedKey === plot.key;
            return (
              <button
                key={plot.key}
                type="button"
                onClick={() => setSelectedKey(plot.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-emerald-700 text-white font-black shadow ring-2 ring-emerald-400 border-emerald-800 scale-105'
                    : 'bg-emerald-50 text-emerald-950 hover:bg-emerald-100 border-emerald-300'
                }`}
              >
                <span>{lang === 'ko' ? plot.badgeKo : plot.badgeEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Interactive Aerial Map with Soft Feathered Deep Green Zones (No Text on Map) + Table */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border-2 border-slate-300 bg-slate-950 shadow-md select-none group">
            {/* Base Aerial Photograph (Company.jpg) */}
            <img
              src="/assets/aistudio/Company_d0b52d17.jpg"
              alt={lang === 'ko' ? '맥섬석GM 본사 전경' : 'Macsumsuk GM Head Office Aerial View'}
              className="w-full h-auto object-cover block"
              referrerPolicy="no-referrer"
            />

            {/* SVG Soft Feathered Deep Green Boundary Overlay (High Visibility, No Hard Lines) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 516"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Standard Feather Filter: Natural soft blur edge without hard lines */}
                <filter id="plot-feather-green" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="9" />
                </filter>

                {/* Hover Feather Filter: Slightly expanded gentle glow */}
                <filter id="plot-feather-green-hover" x="-25%" y="-25%" width="150%" height="150%">
                  <feGaussianBlur stdDeviation="11" />
                </filter>

                {/* Active Selected Feather Filter: Soft ambient radiant bloom with breathing animated blur */}
                <filter id="plot-feather-green-active" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="10">
                    <animate
                      attributeName="stdDeviation"
                      values="8; 13; 8"
                      dur="1.68s"
                      repeatCount="indefinite"
                    />
                  </feGaussianBlur>
                </filter>

                {/* Pulsing Aura Filter for active plot highlight */}
                <filter id="plot-aura-green" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="16">
                    <animate
                      attributeName="stdDeviation"
                      values="11; 20; 11"
                      dur="1.68s"
                      repeatCount="indefinite"
                    />
                  </feGaussianBlur>
                </filter>
              </defs>

              {/* Render smoothed feathered deep green zones for all 4 plots with highlight animations */}
              {PLOT_CONFIGS.map((plot) => {
                const isSelected = selectedKey === plot.key;
                const isHovered = hoveredKey === plot.key;
                const isAll = selectedKey === 'all';

                // Deep, rich, high-visibility emerald green with soft feathered edges
                let fill = 'rgba(16, 185, 129, 0.46)';
                let filterId = 'url(#plot-feather-green)';

                if (isSelected) {
                  fill = 'rgba(5, 150, 105, 0.78)';
                  filterId = 'url(#plot-feather-green-active)';
                } else if (isHovered) {
                  fill = 'rgba(16, 185, 129, 0.62)';
                  filterId = 'url(#plot-feather-green-hover)';
                } else if (!isAll && selectedKey !== 'common') {
                  fill = 'rgba(16, 185, 129, 0.14)';
                  filterId = 'url(#plot-feather-green)';
                }

                return (
                  <g key={plot.key}>
                    {/* Dynamic animated breathing glow aura behind active green zone */}
                    {isSelected && (
                      <path
                        d={plot.svgPathD}
                        fill="rgba(52, 211, 153, 0.72)"
                        stroke="none"
                        filter="url(#plot-aura-green)"
                        className="pointer-events-none"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.35; 0.95; 0.35"
                          dur="1.68s"
                          repeatCount="indefinite"
                        />
                      </path>
                    )}

                    {/* Main feathered green land plot zone with subtle pulse animation */}
                    <path
                      d={plot.svgPathD}
                      fill={fill}
                      stroke="none"
                      filter={filterId}
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredKey(plot.key)}
                      onMouseLeave={() => setHoveredKey(null)}
                      onClick={() => setSelectedKey(plot.key)}
                      className={`transition-all duration-300 ${isSelected ? 'animate-pulse [animation-duration:1.68s]' : ''}`}
                    >
                      {isSelected && (
                        <animate
                          attributeName="fill-opacity"
                          values="0.75; 1; 0.75"
                          dur="1.68s"
                          repeatCount="indefinite"
                        />
                      )}
                      <title>{lang === 'ko' ? plot.labelKo : plot.labelEn}</title>
                    </path>
                  </g>
                );
              })}
            </svg>

            {/* 지도 위 1번 토지, 2번 토지, 3번 토지, 4번 토지 제목 글씨 창 (홈페이지 메뉴 강조색 녹색) */}
            {PLOT_CONFIGS.map((plot) => {
              const isSelected = selectedKey === plot.key;
              const isHovered = hoveredKey === plot.key;
              return (
                <div
                  key={`label-${plot.key}`}
                  style={{ left: `${plot.tagXPercent}%`, top: `${plot.tagYPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedKey(plot.key)}
                    onMouseEnter={() => setHoveredKey(plot.key)}
                    onMouseLeave={() => setHoveredKey(null)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-lg border-2 transition-all duration-200 cursor-pointer select-none ${
                      isSelected
                        ? 'bg-emerald-700 text-white border-emerald-300 ring-4 ring-emerald-400/80 scale-110 font-black shadow-emerald-950/50'
                        : isHovered
                        ? 'bg-emerald-600 text-white border-emerald-300 ring-2 ring-emerald-300 scale-105 font-black'
                        : 'bg-emerald-800/95 hover:bg-emerald-700 text-white border-emerald-400/80 font-black shadow-md'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-200 animate-ping' : 'bg-emerald-300'} shrink-0`} />
                    <span className="text-xs sm:text-sm font-black tracking-tight whitespace-nowrap drop-shadow-sm">
                      {lang === 'ko' ? `${plot.plotNumber}번 토지` : `Plot ${plot.plotNumber}`}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Official Land & Building Area Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-300 bg-white shadow-xs">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                  <th className="py-2.5 px-2.5 border-r border-slate-300 text-center whitespace-nowrap">{lang === 'ko' ? '구분' : 'Plot'}</th>
                  <th className="py-2.5 px-3 border-r border-slate-300">{lang === 'ko' ? '소재지 (경북 영천시 대창면 사리리)' : 'Location (Sari-ri, Yeongcheon)'}</th>
                  <th className="py-2.5 px-2 border-r border-slate-300 text-right whitespace-nowrap w-20 sm:w-22">{lang === 'ko' ? '토지 면적' : 'Site Area'}</th>
                  <th className="py-2.5 px-2 text-right whitespace-nowrap w-20 sm:w-22">{lang === 'ko' ? '건물 면적' : 'Building Area'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr 
                  onClick={() => setSelectedKey('plot-1')}
                  className={`cursor-pointer transition-colors ${selectedKey === 'plot-1' ? 'bg-emerald-100/70 font-bold' : 'hover:bg-emerald-50/40'}`}
                >
                  <td className="py-2 px-2.5 border-r border-slate-200 text-center font-black text-slate-900 whitespace-nowrap">
                    <span className="bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded text-[11px] border border-emerald-300 font-bold whitespace-nowrap inline-block">{lang === "ko" ? "1번 토지" : "Plot 1"}</span>
                  </td>
                  <td className="py-2 px-3 border-r border-slate-200 text-slate-800">
                    {lang === "ko" ? "사리리 432번지(공장부지), 건물 600평" : "432 Sari-ri (Factory Site), Building 600 Pyung (~1,983㎡)"}
                  </td>
                  <td rowSpan={3} className="py-2 px-2 border-r border-slate-200 text-right font-black text-slate-900 bg-slate-50/50 align-middle whitespace-nowrap">
                    32,708 m²
                  </td>
                  <td rowSpan={3} className="py-2 px-2 text-right font-black text-slate-900 bg-slate-50/50 align-middle whitespace-nowrap">
                    5,157 m²
                  </td>
                </tr>

                <tr 
                  onClick={() => setSelectedKey('plot-2')}
                  className={`cursor-pointer transition-colors ${selectedKey === 'plot-2' ? 'bg-emerald-100/70 font-bold' : 'hover:bg-emerald-50/40'}`}
                >
                  <td className="py-2 px-2.5 border-r border-slate-200 text-center font-black text-slate-900 whitespace-nowrap">
                    <span className="bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded text-[11px] border border-emerald-300 font-bold whitespace-nowrap inline-block">{lang === "ko" ? "2번 토지" : "Plot 2"}</span>
                  </td>
                  <td className="py-2 px-3 border-r border-slate-200 text-slate-800">
                    {lang === "ko" ? "사리리 432번지(공장부지), 건물 960평" : "432 Sari-ri (Factory Site), Building 960 Pyung (~3,174㎡)"}
                  </td>
                </tr>

                <tr 
                  onClick={() => setSelectedKey('plot-3')}
                  className={`cursor-pointer transition-colors ${selectedKey === 'plot-3' ? 'bg-emerald-100/70 font-bold' : 'hover:bg-emerald-50/40'}`}
                >
                  <td className="py-2 px-2.5 border-r border-slate-200 text-center font-black text-slate-900 whitespace-nowrap">
                    <span className="bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded text-[11px] border border-emerald-300 font-bold whitespace-nowrap inline-block">{lang === "ko" ? "3번 토지" : "Plot 3"}</span>
                  </td>
                  <td className="py-2 px-3 border-r border-slate-200 text-slate-800">
                    {lang === "ko" ? "사리리 439번지(공장부지), 2차선 도로 접함" : "439 Sari-ri (Factory Site), 2-lane road access"}
                  </td>
                </tr>

                <tr 
                  onClick={() => setSelectedKey('plot-4')}
                  className={`cursor-pointer transition-colors ${selectedKey === 'plot-4' ? 'bg-emerald-100/70 font-bold' : 'hover:bg-emerald-50/40'}`}
                >
                  <td className="py-2 px-2.5 border-r border-slate-200 text-center font-black text-slate-900 whitespace-nowrap">
                    <span className="bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded text-[11px] border border-emerald-300 font-bold whitespace-nowrap inline-block">{lang === "ko" ? "4번 토지" : "Plot 4"}</span>
                  </td>
                  <td className="py-2 px-3 border-r border-slate-200 text-slate-800">
                    {lang === "ko" ? "사리리 439-2번지, 436-2번지 (산란계 시험사육장), 2차선 도로 접함" : "439-2 & 436-2 Sari-ri (Layer Research Farm), 2-lane road access"}
                  </td>
                  <td className="py-2 px-2 border-r border-slate-200 text-right font-black text-slate-900 whitespace-nowrap">
                    1,787 m²
                  </td>
                  <td className="py-2 px-2 text-right text-slate-400 font-semibold whitespace-nowrap">-</td>
                </tr>

                {/* Total Row */}
                <tr className="bg-emerald-100/90 font-black text-slate-900 border-t-2 border-emerald-400">
                  <td colSpan={2} className="py-2.5 px-3 border-r border-emerald-300 text-center font-black">
                    {lang === 'ko' ? '공장부지 및 토지∙건물 총합계' : 'Total Land & Building Complex Area'}
                  </td>
                  <td className="py-2.5 px-2 border-r border-emerald-300 text-right text-xs sm:text-sm font-black text-slate-950 whitespace-nowrap">
                    34,495 m²
                  </td>
                  <td className="py-2.5 px-2 text-right text-xs sm:text-sm font-black text-slate-950 whitespace-nowrap">
                    5,157 m²
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Learned Content & Academic Validation Details */}
        <div className="lg:col-span-6 space-y-4">
          {/* Active Selection / Filter Banner */}
          <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between border-l-4 border-emerald-500 shadow-sm">
            <div className="font-black text-white text-[15.2px]">
              {lang === 'ko' ? activePlot?.labelKo : activePlot?.labelEn}
            </div>
          </div>

          {/* Detailed Cards */}
          <div className="space-y-4">
            {/* 1번 토지 카드 */}
            {selectedKey === 'plot-1' && (
              <div className="p-4 rounded-xl border-2 transition-all border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-300/80">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-200">
                  <h4 className="text-[15.2px] font-black text-slate-900 flex items-center gap-1.5">
                    <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 px-2 py-0.5 rounded text-[13px] font-black">{lang === "ko" ? "1번 토지" : "Plot 1"}</span>
                    <span>{lang === "ko" ? "그로피드 이톡스 · DCM" : "Growfeed E-TOX · DCM"}</span>
                  </h4>
                </div>
                <ul className="text-[13px] leading-relaxed space-y-1.5 text-slate-700 pl-4 list-disc marker:text-emerald-600">
                  {PLOT_CONFIGS[0].pointsKo.map((pt, idx) => {
                    const isSnuInVivo = pt.text.includes('서울대학교 평창캠퍼스') || PLOT_CONFIGS[0].pointsEn[idx].text.includes('Seoul National University');
                    return (
                      <li 
                        key={idx} 
                        className={`${pt.isHighlightRed ? 'text-red-700 font-black' : ''} ${isSnuInVivo ? 'text-xs' : 'text-[13px]'}`}
                      >
                        {lang === 'ko' ? pt.text : PLOT_CONFIGS[0].pointsEn[idx].text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* 2번 토지 카드 */}
            {selectedKey === 'plot-2' && (
              <div className="p-4 rounded-xl border-2 transition-all border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-300/80">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-200">
                  <h4 className="text-[15.2px] font-black text-slate-900 flex items-center gap-1.5">
                    <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 px-2 py-0.5 rounded text-[13px] font-black">{lang === "ko" ? "2번 토지" : "Plot 2"}</span>
                    <span>{lang === "ko" ? "그로피드 프로테인" : "Growfeed Protein"}</span>
                    <span className="text-[12px] font-semibold text-slate-700">{lang === "ko" ? "(폐기물종합재활용허가)" : "(Comprehensive Recycling License)"}</span>
                  </h4>
                </div>
                <ul className="text-[13px] leading-relaxed space-y-1.5 text-slate-700 pl-4 list-disc marker:text-emerald-600">
                  {PLOT_CONFIGS[1].pointsKo.map((pt, idx) => (
                    <li key={idx} className={pt.isHighlightRed ? 'text-red-700 font-black' : ''}>
                      {lang === 'ko' ? pt.text : PLOT_CONFIGS[1].pointsEn[idx].text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3번 토지 카드 */}
            {selectedKey === 'plot-3' && (
              <div className="p-4 rounded-xl border-2 transition-all border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-300/80">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-200">
                  <h4 className="text-[15.2px] font-black text-slate-900 flex items-center gap-1.5">
                    <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 px-2 py-0.5 rounded text-[13px] font-black">{lang === "ko" ? "3번 토지" : "Plot 3"}</span>
                    <span>{lang === "ko" ? "유기질비료 · 사료" : "Organic Fertilizer & Feed"}</span>
                    <span className="text-[12px] font-semibold text-slate-700">{lang === "ko" ? "(폐기물종합재활용허가)" : "(Comprehensive Recycling License)"}</span>
                  </h4>
                </div>
                <ul className="text-[13px] leading-relaxed space-y-1.5 text-slate-700 pl-4 list-disc marker:text-emerald-600">
                  {PLOT_CONFIGS[2].pointsKo.map((pt, idx) => (
                    <li key={idx} className={pt.isHighlightRed ? 'text-red-700 font-black' : ''}>
                      {lang === 'ko' ? pt.text : PLOT_CONFIGS[2].pointsEn[idx].text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4번 토지 카드 */}
            {selectedKey === 'plot-4' && (
              <div className="p-4 rounded-xl border-2 transition-all border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-300/80">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-200">
                  <h4 className="text-[15.2px] font-black text-slate-900 flex items-center gap-1.5">
                    <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 px-2 py-0.5 rounded text-[13px] font-black">{lang === "ko" ? "4번 토지" : "Plot 4"}</span>
                    <span>{lang === "ko" ? "산란계 시험사육장" : "Dedicated Layer Research Farm"}</span>
                  </h4>
                </div>
                <ul className="text-[13px] leading-relaxed space-y-1.5 text-slate-700 pl-4 list-disc marker:text-emerald-600">
                  {PLOT_CONFIGS[3].pointsKo.map((pt, idx) => (
                    <li key={idx}>
                      {lang === 'ko' ? pt.text : PLOT_CONFIGS[3].pointsEn[idx].text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 1·2·3번 토지 공통사항 (4번 토지 선택 시 미표시) */}
            {selectedKey !== 'plot-4' && (
              <div className="rounded-xl border-2 border-emerald-400 overflow-hidden bg-white shadow-sm mt-4">
                {/* Emerald Header Bar */}
                <div className="bg-emerald-700 px-4 py-2.5 text-white font-black text-[13px] sm:text-[15.2px] flex items-center justify-between border-b border-emerald-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-200 shrink-0" />
                    <span>
                      {lang === 'ko' 
                        ? '1·2·3번 토지 공통사항 (인허가·특허·인프라)' 
                        : 'Common Permits & Infrastructure (Plots 1, 2, 3)'}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50/40 space-y-3">
                  <ul className="text-[13px] leading-relaxed space-y-2 text-slate-800 pl-4 list-disc marker:text-emerald-600">
                    {(lang === 'ko' ? COMMON_ITEMS_KO : COMMON_ITEMS_EN).map((item, idx) => {
                      if (idx === 6 || idx === 7 || item.includes('3억')) {
                        return (
                          <li 
                            key={idx} 
                            className="font-black text-slate-950 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-300 inline-block my-0.5 text-[13px] tracking-tight whitespace-nowrap max-w-full overflow-x-auto align-middle"
                          >
                            {item}
                          </li>
                        );
                      }
                      return (
                        <li key={idx}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
