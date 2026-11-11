import React from 'react';
import { 
  Sparkles, 
  Award, 
  FlaskConical, 
  ArrowRight,
  ShieldCheck,
  Microscope,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { CORE_COMPETENCIES } from '../data/companyData';
import { Language, MainCategoryKey } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface CoreCompetenciesProps {
  lang: Language;
  onOpenCategory: (key: MainCategoryKey, subId?: string) => void;
}

export const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({
  lang,
  onOpenCategory,
}) => {
  const getSubCategoryTarget = (idx: number) => {
    if (idx === 0) return { cat: 'about' as MainCategoryKey, sub: 'awards' };
    if (idx === 1) return { cat: 'rnd' as MainCategoryKey, sub: 'methane-trials' };
    return { cat: 'rnd' as MainCategoryKey, sub: 'mineral-tech' };
  };

  const icons = [
    <Award className="w-6 h-6 text-amber-600" key="0" />,
    <GraduationCap className="w-6 h-6 text-teal-600" key="1" />,
    <FlaskConical className="w-6 h-6 text-emerald-600" key="2" />,
  ];

  const competencyImages = [
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop', // Global Worldwide Cargo Ocean Shipping & Export (52국 특허/인증)
    'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop', // Korean & Global University Academic Research Campus & Laboratory (산학연 연구)
    'https://lh3.googleusercontent.com/d/1au4PHzhesC2WdiSFrb6T0LRZ4SErAv5j', // 223ha 원료 광산 & 원천기술
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200 overflow-hidden">
      {/* Subtle Engineering/Architectural Grid Pattern with Soft Radial Vignette */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] opacity-45 pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-emerald-900 border border-emerald-300/80 shadow-2xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'ko' ? '맥섬석GM 3대 핵심 경쟁력' : '3 Core Strategic Advantages'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            {lang === 'ko' ? '타협하지 않는 원천기술' : 'Proprietary Technology'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto break-keep">
            {lang === 'ko' ? (
              <>
                <span className="block font-normal">
                  원료 광산 자체 보유부터 52개국 특허, 서울대·경북대 산학 실증까지
                </span>
                <span className="block font-semibold text-slate-800 pt-0.5">
                  축산 바이오의 독보적 신뢰를 구축했습니다.
                </span>
              </>
            ) : (
              <>
                <span className="block font-normal">
                  From owning 223ha raw mineral mines to 52-nation global patents and joint university trials,
                </span>
                <span className="block font-semibold text-slate-800 pt-0.5">
                  Building unparalleled trust in livestock biotechnology.
                </span>
              </>
            )}
          </p>
        </div>

        {/* 3 Core Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CORE_COMPETENCIES.map((box, idx) => {
            const target = getSubCategoryTarget(idx);
            return (
              <div
                key={box.num}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Photo Top Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={competencyImages[idx]}
                    alt={lang === 'ko' ? box.titleKo : box.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
                  
                  {/* Top Bar Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white shadow-md text-emerald-700">
                      {icons[idx]}
                    </div>
                    <span className="text-xl font-black text-white/90 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                      {box.num}
                    </span>
                  </div>

                  {/* Stat over Image */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-baseline justify-between text-white">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-md text-emerald-300">
                      <AnimatedCounter
                        end={lang === 'ko' ? box.stat : (box.statEn || box.stat)}
                      />
                    </span>
                    <span className="text-xs font-bold text-slate-200 bg-slate-950/60 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      {lang === 'ko' ? box.statLabelKo : (box.statLabelEn || box.statLabelKo)}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Headings */}
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {lang === 'ko' ? box.titleKo : box.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-emerald-700">
                        {lang === 'ko' ? box.subtitleKo : (box.subtitleEn || box.subtitleKo)}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {lang === 'ko' ? box.descKo : box.descEn}
                    </p>
                  </div>

                  {/* Bottom Area (Clean Spacing) */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
