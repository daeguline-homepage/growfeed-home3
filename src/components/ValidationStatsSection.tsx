import React from 'react';
import { 
  Microscope, 
  ExternalLink,
  TrendingDown,
  ShieldCheck,
  Award,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import { EVIDENCE_DATA } from '../data/companyData';
import { Language } from '../types';
import { UniversityEmblem } from './UniversityEmblems';

interface ValidationStatsProps {
  lang: Language;
  onOpenRnd: () => void;
}

export const ValidationStatsSection: React.FC<ValidationStatsProps> = ({
  lang,
  onOpenRnd,
}) => {
  const getCategoryMeta = (cat: string) => {
    switch (cat) {
      case 'methane':
        return {
          labelKo: '메탄 저감 실증',
          labelEn: 'Methane Reduction',
          icon: TrendingDown,
          badgeBg: 'bg-emerald-50 text-emerald-900 border-emerald-200/80',
          numberColor: 'text-emerald-800',
          gradientBg: 'from-emerald-700/5 to-transparent',
          borderHover: 'hover:border-emerald-300',
          accentDot: 'bg-emerald-700'
        };
      case 'toxin':
        return {
          labelKo: '5대 곰팡이독소 제거',
          labelEn: 'Mycotoxin Adsorption',
          icon: ShieldCheck,
          badgeBg: 'bg-amber-50/80 text-amber-950 border-amber-200/80',
          numberColor: 'text-amber-800',
          gradientBg: 'from-amber-700/5 to-transparent',
          borderHover: 'hover:border-amber-300',
          accentDot: 'bg-amber-700'
        };
      case 'field':
        return {
          labelKo: '육계 사양효율',
          labelEn: 'Broiler FCR',
          icon: Award,
          badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
          numberColor: 'text-slate-800',
          gradientBg: 'from-slate-700/5 to-transparent',
          borderHover: 'hover:border-slate-300',
          accentDot: 'bg-slate-700'
        };
      default:
        return {
          labelKo: '상온 보관성 1년',
          labelEn: '1-Year Stability',
          icon: Zap,
          badgeBg: 'bg-teal-50 text-teal-950 border-teal-200/80',
          numberColor: 'text-teal-850',
          gradientBg: 'from-teal-700/5 to-transparent',
          borderHover: 'hover:border-teal-300',
          accentDot: 'bg-teal-700'
        };
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-50 text-emerald-900 border border-emerald-300 shadow-xs">
              <Microscope className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'ko' ? '공인 검증자료 및 실증 효과' : 'Certified Empirical Data'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              {lang === 'ko' ? '숫자와 데이터로 증명하는 기술력' : 'Proven by Rigorous Scientific Evidence'}
            </h2>
            <p className="text-[13px] sm:text-[14.5px] text-slate-700 leading-relaxed">
              {lang === 'ko'
                ? '서울대, 경북대, 충남대, 필리핀 루손주립대 등 국내외 최고 공인 연구기관의 엄격한 사양시험 및 성적서 보유'
                : 'Empirical trial reports from Seoul Nat’l Univ, Kyungpook Nat’l Univ, Chungnam Nat’l Univ, and CLSU.'}
            </p>
          </div>

          <button
            onClick={onOpenRnd}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs flex items-center space-x-2 transition-all cursor-pointer"
          >
            <span>{lang === 'ko' ? 'R&D 시험성적서 전체보기' : 'View Full R&D Hub'}</span>
            <ExternalLink className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* 1. Certified Metrics Grid with Large Animated Numbers - 3 Columns Balanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-2">
          {EVIDENCE_DATA.map((item, idx) => {
            const meta = getCategoryMeta(item.category);
            const Icon = meta.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.015 }}
                onClick={onOpenRnd}
                className={`group relative p-6 sm:p-7 rounded-2xl text-left bg-gradient-to-b from-slate-50/90 to-white border border-slate-200/90 shadow-sm ${meta.borderHover} hover:shadow-md transition-all cursor-pointer overflow-hidden flex flex-col justify-between`}
              >
                {/* Subtle Hover Gradient Light */}
                <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                <div>
                  {/* Top Badge & Category Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center space-x-1.5 text-xs font-black uppercase px-2.5 py-1 rounded-lg border ${meta.badgeBg} shadow-2xs`}>
                      <Icon className="w-3.5 h-3.5" />
                      <span>{lang === 'ko' ? meta.labelKo : meta.labelEn}</span>
                    </span>
                    <span className={`w-2 h-2 rounded-full ${meta.accentDot} animate-pulse`} />
                  </div>

                  {/* High Impact Animated Big Number */}
                  <div className="my-2.5">
                    <motion.div 
                      className="flex items-baseline space-x-1 whitespace-nowrap overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    >
                      {(() => {
                        const numStr = lang === 'ko' ? item.highlightNumber : (item.highlightNumberEn || item.highlightNumber.replace(/배$/, '-Fold'));
                        if (numStr.includes('-Fold')) {
                          const [baseNum] = numStr.split('-Fold');
                          return (
                            <span className={`text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight ${meta.numberColor} drop-shadow-2xs inline-flex items-baseline`}>
                              <span>{baseNum}</span>
                              <span className="text-xl sm:text-2xl font-bold ml-0.5 tracking-normal opacity-90">-fold</span>
                            </span>
                          );
                        }
                        return (
                          <span className={`text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight ${meta.numberColor} drop-shadow-2xs`}>
                            {numStr}
                          </span>
                        );
                      })()}
                      {item.highlightUnit && (
                        <span className="text-sm sm:text-base font-extrabold text-slate-500 shrink-0 ml-1.5">
                          {lang === 'ko' ? item.highlightUnit : (item.highlightUnitEn || item.highlightUnit)}
                        </span>
                      )}
                    </motion.div>
                  </div>

                  {/* Main Highlight Metric Label */}
                  <h3 className="text-base sm:text-[16px] font-bold text-slate-900 mt-2.5 group-hover:text-emerald-950 transition-colors leading-snug">
                    {(() => {
                      const text = lang === 'ko' ? item.highlightLabelKo : (item.highlightLabelEn || item.highlightLabelKo);
                      const match = text.match(/^(.*?)\s*(\([^()]*\))$/);
                      if (match) {
                        return (
                          <span className="flex flex-col space-y-1">
                            <span className="font-bold text-slate-900 leading-snug text-sm sm:text-base">{match[1]}</span>
                            <span className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed">{match[2]}</span>
                          </span>
                        );
                      }
                      return <span>{text}</span>;
                    })()}
                  </h3>
                </div>

                {/* Institution & Date Footer Bar */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500 font-medium">
                  <span className="truncate max-w-[85%] font-medium">
                    {lang === 'ko' ? item.institutionKo.split('(')[0] : item.institutionEn.split(',')[0]}
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. 4 Certified Academic Institutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Seoul National University */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4 group hover:border-indigo-300 hover:bg-slate-100/80 transition-all">
            <UniversityEmblem code="SNU" size={65} className="shadow-md hover:scale-105 transition-transform shrink-0" />
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base block truncate">
                  {lang === 'ko' ? '서울대학교 그린바이오과학기술연구원' : 'Seoul Nat’l Univ GreenBio Institute'}
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 shrink-0">
                  SNU
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                <strong className="text-slate-900 font-bold">
                  {lang === 'ko' ? '김경훈 교수 연구팀' : 'Prof. Kyung-Hoon Kim Team'}
                </strong>{' '}
                {lang === 'ko'
                  ? '— 한우 호흡대사챔버 메탄저감 3차 실증시험 (2025.12~2026.06)'
                  : '— Hanwoo cattle respiration chamber 3rd stage methane reduction verification'}
              </p>
            </div>
          </div>

          {/* Kyungpook National University */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4 group hover:border-rose-300 hover:bg-slate-100/80 transition-all">
            <UniversityEmblem code="KNU" size={65} className="shadow-md hover:scale-105 transition-transform shrink-0" />
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base block truncate">
                  {lang === 'ko' ? '경북대학교 생태환경대학 축산학과' : 'Kyungpook Nat’l Univ Dept. Animal Sci'}
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 shrink-0">
                  KNU
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                <strong className="text-slate-900 font-bold">
                  {lang === 'ko' ? '김은중 교수 연구팀' : 'Prof. Eun-Joong Kim Team'}
                </strong>{' '}
                {lang === 'ko'
                  ? '— 반추위 메탄 61.5% 저감 2014.10 1차, 2025.7 2차 in-vitro 시험 및 사양성적 검증'
                  : '— 61.5% rumen methane reduction (1st Oct 2014, 2nd Jul 2025 in-vitro) & feeding performance validation'}
              </p>
            </div>
          </div>

          {/* Chungnam National University */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4 group hover:border-sky-300 hover:bg-slate-100/80 transition-all">
            <UniversityEmblem code="CNU" size={65} className="shadow-md hover:scale-105 transition-transform shrink-0" />
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base block truncate">
                  {lang === 'ko' ? '충남대학교 국가사료검증기관 (농업과학연구소)' : 'Chungnam Nat’l Univ Feed Center'}
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 shrink-0">
                  CNU
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                <strong className="text-slate-900 font-bold">
                  {lang === 'ko' ? '농업과학연구소 분석팀' : 'Agricultural Science Center Team'}
                </strong>{' '}
                {lang === 'ko'
                  ? '— 5대 곰팡이독소(아프라/오크라/제랄레논/푸모니신/T-2) 87~94% 흡착 공인 성적'
                  : '— 87-94% adsorption verification for top 5 mycotoxins (Aflatoxin, Ochratoxin, etc.)'}
              </p>
            </div>
          </div>

          {/* Central Luzon State University */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4 group hover:border-emerald-300 hover:bg-slate-100/80 transition-all">
            <UniversityEmblem code="CLSU" size={65} className="shadow-md hover:scale-105 transition-transform shrink-0" />
            <div className="space-y-1 flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base block truncate">
                  {lang === 'ko' ? '필리핀 국립 루손주립대학교 (CLSU)' : 'Central Luzon State Univ (CLSU)'}
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                  CLSU
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                <strong className="text-slate-900 font-bold">
                  {lang === 'ko' ? '축산생명공학 연구팀' : 'Animal Biotechnology Team'}
                </strong>{' '}
                {lang === 'ko'
                  ? '— 300수 브로일러 사양시험 (FCR 1.69 달성 및 생존율 1위 검증)'
                  : '— 300-head broiler feeding trials (FCR 1.69 & top livability rank)'}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Global Fisheries & Aquaculture Partnership: 필리핀 ISDA 독립 배너 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:bg-slate-100/80 transition-all flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 min-w-0 w-full md:w-auto">
            <div className="h-12 w-24 sm:h-14 sm:w-28 px-2 py-1 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
              <img
                src="/assets/aistudio/ISDA_8e33b6ef.png"
                alt="ISDA Inc."
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">
                  {lang === 'ko' ? '필리핀 ISDA(양식과 어업발전 통합서비스) 수행' : 'Philippines ISDA (Integrated Services for Aquaculture & Fisheries)'}
                </span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 shrink-0">
                  ISDA Inc.
                </span>
              </div>
            </div>
          </div>
          <div className="self-end md:self-center shrink-0">
            <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 inline-flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>{lang === 'ko' ? '글로벌 프로젝트 협력' : 'Global Partnership'}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

