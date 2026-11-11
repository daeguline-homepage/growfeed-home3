import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  TrendingDown, 
  CheckCircle2, 
  FileCheck2, 
  Download,
  Building2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Language, MainCategoryKey } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroSectionProps {
  lang: Language;
  onOpenCategory: (key: MainCategoryKey, subId?: string) => void;
  onScrollToInquiry: () => void;
  onOpenBrochure: () => void;
}

// 5 Hero Background Images (Ordered strictly: A1 -> A2 -> A3 -> A4 -> A5)
const HERO_BG_SLIDES = [
  {
    name: 'A1',
    titleKo: '농가 실증 사양시험',
    titleEn: 'Livestock Farm Trials',
    imageUrl: 'https://lh3.googleusercontent.com/d/1lXmeFmbIF4VrjPxU-uRBIfcf61Pmvpr_',
    driveId: '1lXmeFmbIF4VrjPxU-uRBIfcf61Pmvpr_',
    filterClass: ''
  },
  {
    name: 'A2',
    titleKo: '바이오 R&D 연구',
    titleEn: 'Biotech R&D Research',
    imageUrl: 'https://lh3.googleusercontent.com/d/1WcduTcbRuYUMQt5wFnoJzj9GDfsquv-D',
    driveId: '1WcduTcbRuYUMQt5wFnoJzj9GDfsquv-D',
    filterClass: ''
  },
  {
    name: 'A3',
    titleKo: '자동화 양산 라인',
    titleEn: 'Automated Mass Production Line',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy',
    driveId: '1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy',
    filterClass: ''
  },
  {
    name: 'A4',
    titleKo: '글로벌 항만 수출 컨테이너 선적',
    titleEn: 'Global Port Export Container Shipping',
    imageUrl: 'https://lh3.googleusercontent.com/d/1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0',
    driveId: '1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0',
    filterClass: ''
  },
  {
    name: 'A5',
    titleKo: '맥섬석GM 본사 및 제조 단지',
    titleEn: 'Macsumsuk GM Head Complex & Plant',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6',
    driveId: '1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6',
    filterClass: ''
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenCategory,
  onScrollToInquiry,
  onOpenBrochure,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-cycling Dissolve Slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BG_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-24 border-b border-slate-800 min-h-[620px] flex items-center">
      
      {/* 5 Dissolve Background Slides with Full 100% Opacity & Vivid Clear Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {HERO_BG_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.name}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={`Hero Slide ${slide.name}`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = `https://drive.google.com/uc?export=view&id=${slide.driveId}`;
                  }
                }}
                className={`w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out ${slide.filterClass || ''} ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Lightweight Semi-Transparent Scrim (Optimized for perfect text legibility & vivid backdrop) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 to-slate-950/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>
        
        {/* Subtle Decorative Bio Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Block (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-emerald-950/90 border border-emerald-600/70 text-emerald-300 text-xs sm:text-sm font-bold shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>
                {lang === 'ko'
                  ? '대한민국 축산바이오 40년 헤리티지 · 세계 52개국 특허'
                  : '40 Years of Livestock Biotech Innovation · 52-Nation Patents'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.2] drop-shadow-md">
              {lang === 'ko' ? (
                <>
                  <span className="text-emerald-400">고신뢰 · 저메탄</span> 축산바이오
                  <br className="hidden sm:inline" />
                  그로피드 사료첨가제
                </>
              ) : (
                <>
                  High-Trust · <span className="text-emerald-400">Low-Methane</span> Livestock Biotech
                  <br />
                  Growfeed Feed Additives
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-slate-200 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal drop-shadow-xs">
              {lang === 'ko' ? (
                <>
                  희귀광물 맥섬석 223ha 독점 원료광산 기반의 원적외선 고방사 기술과 서울대·경북대 공인 사양시험 검증.
                  <br className="hidden sm:inline" />
                  곰팡이독소 87~94% 흡착부터 메탄 61.5% 저감까지, 지속가능한 사료의 프리미엄 표준을 제시합니다.
                </>
              ) : (
                <>
                  Pioneering sustainable livestock agriculture with 223ha exclusive rare mineral mine & far-infrared technologies,
                  eliminating 87-94% of mycotoxins and reducing enteric methane by up to 61.5%.
                </>
              )}
            </p>

            {/* 2 Trust Proof Badges - Compact Refined Layout */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-4 border-t border-slate-800/60">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-sm shadow-xs hover:border-amber-500/50 transition-colors">
                <div className="p-1 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight flex items-center space-x-1.5">
                  <span className="text-[11px] text-slate-400 font-medium">{lang === 'ko' ? '대한민국' : 'Gov.'}</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{lang === 'ko' ? '은탑산업훈장 수훈' : 'Tower of Merit'}</span>
                </div>
              </div>

              <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-sm shadow-xs hover:border-sky-500/50 transition-colors">
                <div className="p-1 rounded-lg bg-sky-500/20 text-sky-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight flex items-center space-x-1.5">
                  <span className="text-[11px] text-slate-400 font-medium">{lang === 'ko' ? '글로벌 IP' : 'Global IP'}</span>
                  <span className="text-xs sm:text-sm font-bold text-white">{lang === 'ko' ? '세계 52개국 특허' : '52 Patents'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/35 hover:bg-slate-950/45 rounded-3xl border border-white/15 shadow-2xl overflow-hidden relative backdrop-blur-xs transition-all">
              <div className="p-6 sm:p-7 space-y-5">
                {/* Highlight Metrics */}
                <div className="grid grid-cols-2 gap-3.5 text-left">
                  <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xs">
                    <div className="text-xs text-slate-200 font-semibold">{lang === 'ko' ? '누적 수출량' : 'Export Volume'}</div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 drop-shadow-sm">
                      <AnimatedCounter
                        end={4220}
                        suffix={lang === 'ko' ? ' 톤+' : ' tons+'}
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xs">
                    <div className="text-xs text-slate-200 font-semibold">{lang === 'ko' ? '메탄 저감율' : 'Methane Cut'}</div>
                    <div className="text-2xl sm:text-3xl font-black text-teal-300 mt-1 drop-shadow-sm">
                      <AnimatedCounter
                        prefix={lang === 'ko' ? '최대 ' : 'Up to '}
                        end={61.5}
                        decimals={1}
                        suffix="%"
                      />
                    </div>
                  </div>
                </div>

                {/* 3 Major Lines Quick Preview */}
                <div className="space-y-2 pt-1 text-left">
                  <span className="text-slate-200 font-bold text-xs sm:text-sm block drop-shadow-2xs">
                    {lang === 'ko' ? '그로피드(Growfeed®) 3대 핵심 라인업' : '3 Major Product Lines'}
                  </span>

                  <div 
                    onClick={() => onOpenCategory('products', 'etox')}
                    className="p-2.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/10 hover:border-emerald-400/50 flex items-center justify-between cursor-pointer transition-all group backdrop-blur-xs"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-xs"></span>
                      <span className="font-bold text-sm text-white group-hover:text-emerald-300">Growfeed® E-TOX</span>
                      <span className="text-xs text-slate-300 font-medium">({lang === 'ko' ? '독소 87~94% 흡착' : 'Toxin Binder'})</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <div 
                    onClick={() => onOpenCategory('products', 'protein')}
                    className="p-2.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/10 hover:border-sky-400/50 flex items-center justify-between cursor-pointer transition-all group backdrop-blur-xs"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-xs"></span>
                      <span className="font-bold text-sm text-white group-hover:text-sky-300">Growfeed® Protein</span>
                      <span className="text-xs text-slate-300 font-medium">({lang === 'ko' ? '도축혈액 순환자원' : 'Recycled Protein'})</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <div 
                    onClick={() => onOpenCategory('products', 'dcm')}
                    className="p-2.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/10 hover:border-teal-400/50 flex items-center justify-between cursor-pointer transition-all group backdrop-blur-xs"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-400 shadow-xs"></span>
                      <span className="font-bold text-sm text-white group-hover:text-teal-300">Growfeed® DCM</span>
                      <span className="text-xs text-slate-300 font-medium">({lang === 'ko' ? '메탄저감·온실가스' : 'Methane Reduction'})</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dissolve Slides Navigator & Indicators */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800/60">
          <div className="flex items-center flex-wrap gap-3">
            <div className="flex items-center space-x-2">
              {HERO_BG_SLIDES.map((slide, idx) => (
                <button
                  key={slide.name}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide 
                      ? 'w-8 bg-emerald-400 shadow-sm' 
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  title={`${slide.name} - ${lang === 'ko' ? slide.titleKo : slide.titleEn}`}
                />
              ))}
            </div>

            {/* Small Disclaimer Footnote */}
            <span className="text-[11px] sm:text-xs text-slate-400/90 font-normal tracking-tight select-none">
              {lang === 'ko'
                ? '* 이해를 돕기 위한 연출 된 이미지가 포함되어 있습니다.'
                : '* Contains staged images for illustrative purposes.'}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs text-slate-400 font-medium">
            <span className="text-slate-200 font-semibold">
              {lang === 'ko' ? HERO_BG_SLIDES[currentSlide].titleKo : HERO_BG_SLIDES[currentSlide].titleEn}
            </span>
            <div className="flex items-center space-x-1 ml-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_BG_SLIDES.length) % HERO_BG_SLIDES.length)}
                className="p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title={lang === 'ko' ? '이전 슬라이드' : 'Previous Slide'}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_BG_SLIDES.length)}
                className="p-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title={lang === 'ko' ? '다음 슬라이드' : 'Next Slide'}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
