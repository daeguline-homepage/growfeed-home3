import React from 'react';
import { 
  Globe2, 
  Ship, 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  CheckCircle, 
  Award,
  Building2,
  Users
} from 'lucide-react';
import { STATS_COUNTERS } from '../data/companyData';
import { Language } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface GlobalCountersProps {
  lang: Language;
  onOpenGlobal: () => void;
}

export const GlobalCountersSection: React.FC<GlobalCountersProps> = ({
  lang,
  onOpenGlobal,
}) => {
  const bgImgUrl = "https://lh3.googleusercontent.com/d/1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6";
  const fallbackBgUrl = "https://drive.google.com/uc?export=view&id=1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6";

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800">
      {/* Background Image with 90% Opacity & Gradient Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={bgImgUrl}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== fallbackBgUrl) {
              target.src = fallbackBgUrl;
            }
          }}
          alt="Global Performance Background"
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-900/65 to-slate-950/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-950 text-emerald-300 border border-emerald-700 shadow-xs">
            <Globe2 className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'ko' ? '글로벌 성과 & 정량 지표' : 'Global Track Record & Numbers'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            {lang === 'ko' ? '숫자로 입증된 공신력' : 'Proven Global Track Record'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {lang === 'ko'
              ? '동남아시아 9년 연속 수출과 52개국 글로벌 특허, 수많은 축산 농가의 선택이 맥섬석GM의 신뢰를 증명합니다.'
              : 'Consistent exports across Southeast Asia and patents in 52 nations reflect our unwavering reliability.'}
          </p>
        </div>

        {/* Counters Grid (6 Metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-10">
          {STATS_COUNTERS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-850/90 p-4 sm:p-5 rounded-2xl border border-slate-700 text-center hover:border-emerald-500 transition-all group"
            >
              <div className="text-2xl sm:text-3xl lg:text-3xl font-black text-emerald-400 tracking-tight group-hover:scale-105 transition-transform">
                <AnimatedCounter
                  end={stat.value}
                  suffix={lang === 'ko' ? stat.suffix : (stat.suffixEn || stat.suffix)}
                />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1.5">
                {lang === 'ko' ? stat.labelKo : stat.labelEn}
              </div>
              <div className="text-xs text-slate-300 mt-1 line-clamp-1 font-medium">
                {lang === 'ko' ? stat.descKo : (stat.descEn || stat.descKo)}
              </div>
            </div>
          ))}
        </div>

        {/* Global Export Banner Box */}
        <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2.5 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="px-3 py-1 rounded bg-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-bold border border-emerald-500/40">
                {lang === 'ko' ? '수출 파트너십' : 'Export Partnerships'}
              </span>
              <span className="text-xs sm:text-sm text-slate-200 font-semibold">
                {lang === 'ko'
                  ? '필리핀 Bio star JNG Megatrade · 말레이시아 · 방글라데시 · 태국 CBP그룹'
                  : 'Philippines Bio star JNG Megatrade · Malaysia · Bangladesh · Thailand CBP Group'}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {lang === 'ko'
                ? '필리핀 400톤(L/C) 수출 완료 및 200톤 공급 준비 중'
                : 'Completed 400-ton (L/C) export and preparing 200 tons for Philippines partner'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {lang === 'ko'
                ? '국제 GMP, ISO22000 인증으로 해외 수출 통관 및 글로벌 바이어 요구조건을 100% 충족합니다.'
                : 'GMP and ISO22000 certified, fulfilling all international customs and buyer compliance standards.'}
            </p>
          </div>

          <button
            onClick={onOpenGlobal}
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            {lang === 'ko' ? '해외사업 및 인증 자세히 보기' : 'View Global Operations'}
          </button>
        </div>
      </div>
    </section>
  );
};
