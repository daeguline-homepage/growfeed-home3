import React from 'react';
import { 
  Package, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  ExternalLink,
  Flame,
  Droplets,
  Wind,
  HeartHandshake,
  Clock,
  BookOpen
} from 'lucide-react';
import { PRODUCTS } from '../data/companyData';
import { Language } from '../types';
import { AnimatedCounter } from './AnimatedCounter';
import { BioAnimatedBackground } from './BioAnimatedBackground';

interface ProductSectionProps {
  lang: Language;
  onOpenProduct: (productId: string) => void;
  onOpenLivestockGuide: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  lang,
  onOpenProduct,
  onOpenLivestockGuide,
}) => {
  return (
    <section className="relative py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200 overflow-hidden">
      {/* Biotechnology Animated Dynamic Canvas & Ambient Halo Background */}
      <BioAnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3.5 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-100/90 text-emerald-950 border border-emerald-300 shadow-2xs">
              <Package className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'ko' ? '그로피드(Growfeed®) 핵심 제품군' : 'Key Product Portfolio'}</span>
            </div>
            <h2 className="tracking-tight leading-snug break-keep">
              {lang === 'ko' ? (
                <div className="space-y-1.5">
                  <span className="text-sm sm:text-base md:text-lg text-emerald-700 font-bold block tracking-normal">
                    과학으로 검증하고
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl text-slate-700 font-extrabold block leading-snug">
                    농가를 생각하고 자연을 생각하는 마음을 담아 완성된
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 block pt-0.5">
                    프리미엄 친환경 기능성 사료첨가제
                  </span>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <span className="text-sm sm:text-base md:text-lg text-emerald-700 font-bold block tracking-normal">
                    Scientifically Proven &amp; Verified
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl text-slate-700 font-extrabold block leading-snug">
                    Crafted with Dedication to Farmers and Nature
                  </span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 block pt-0.5">
                    Premium Eco-Friendly Bio-Feed Additives
                  </span>
                </div>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl pt-1">
              {lang === 'ko'
                ? '저메탄 톡신바인더부터 도축혈액 순환자원 단백질, 메탄저감 사료까지 축산업의 가치를 극대화합니다.'
                : 'From anti-mold toxin binders to circular bio-protein and enteric methane reducers.'}
            </p>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.filter((prod) => prod.id !== 'healing-egg' && prod.id !== 'core-fertilizer').map((prod) => {
            return (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-300 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Product Image Header */}
                {prod.isComingSoon || !prod.imageUrl ? (
                  <div className={`relative w-full h-[288px] overflow-hidden ${prod.colorScheme.bgBadge} bg-gradient-to-b from-teal-50/80 via-slate-50 to-teal-50/80 flex flex-col items-center justify-center p-6 border-b border-slate-200/80 text-center space-y-3`}>
                    <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shadow-xs">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-lg font-black text-teal-950 tracking-tight block">
                        {lang === 'ko' ? '출시 준비 中' : 'Coming Soon'}
                      </span>
                      <span className="text-xs text-slate-500 font-medium block">
                        {lang === 'ko' ? '공식 검증 및 승인 진행 중' : 'Official Certification in Progress'}
                      </span>
                    </div>
                    <span className={`absolute bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-center max-w-[90%] truncate px-2.5 py-1 rounded-md text-xs font-bold ${prod.colorScheme.bgBadge} ${prod.colorScheme.textBadge} border ${prod.colorScheme.border} shadow-sm backdrop-blur-xs`}>
                      {lang === 'ko' ? prod.badge : (prod.badgeEn || prod.badge)}
                    </span>
                  </div>
                ) : (
                  <div className={`relative w-full h-[288px] overflow-hidden ${prod.colorScheme.bgBadge} bg-gradient-to-b from-slate-100/90 via-white/80 to-slate-100/90 flex items-center justify-center p-3 border-b border-slate-200/80`}>
                    <img
                      src={prod.imageUrl}
                      alt={lang === 'ko' ? prod.name : prod.engName}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        if (prod.id === 'healing-egg') {
                          target.src = '/assets/aistudio/_____02896e00.png';
                        } else if (prod.id === 'etox') {
                          target.src = 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop';
                        } else if (prod.id === 'protein') {
                          target.src = 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop';
                        } else {
                          target.src = 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800&auto=format&fit=crop';
                        }
                      }}
                      className="w-[288px] h-[288px] max-w-full max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-center max-w-[90%] truncate px-2.5 py-1 rounded-md text-xs font-bold ${prod.colorScheme.bgBadge} ${prod.colorScheme.textBadge} border ${prod.colorScheme.border} shadow-sm backdrop-blur-xs`}>
                      {lang === 'ko' ? prod.badge : (prod.badgeEn || prod.badge)}
                    </span>
                  </div>
                )}

                {/* Card Main Body */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <h3 className="text-[22px] sm:text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                        {lang === 'ko' ? prod.name : prod.engName}
                      </h3>
                      <div className="text-[13.5px] sm:text-sm font-bold text-slate-500 truncate tracking-wide">
                        {prod.engName}
                      </div>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
                      {lang === 'ko' ? prod.summaryKo : prod.summaryEn}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="p-4 bg-slate-50 border-t border-slate-200">
                  <button
                    onClick={() => onOpenProduct(prod.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 group-hover:bg-emerald-600 shadow-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                  >
                    <span>{lang === 'ko' ? '상세 스펙 & 시험성적' : 'View Full Details'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growfeed® Livestock Tailored Consulting Banner Card - Clean White Theme */}
        <div className="mt-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-300 shadow-md p-5 sm:p-6 space-y-4">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3.5 border-b border-slate-200">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-emerald-700" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {lang === 'ko' ? '그로피드® 축종별 맞춤 컨설팅' : 'Growfeed® Livestock Tailored Consulting'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold">
              {lang === 'ko' ? (
                <>
                  전 축종 사육 환경에 맞춘{' '}
                  <span className="text-emerald-700 font-bold">최적의 그로피드 맞춤 솔루션</span>
                  을 제공합니다.
                </>
              ) : (
                <>
                  Providing{' '}
                  <span className="text-emerald-700 font-bold">optimal Growfeed tailored solutions</span>{' '}
                  for all livestock environments.
                </>
              )}
            </p>
          </div>

          {/* 4 Compact Species Photo Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Card 1: Cattle */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs">
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/1_rjC1lbuxqETQ4KSv_80Fsovau1cHAXX"
                  alt={lang === 'ko' ? '소 · 젖소 (반추동물)' : 'Beef & Dairy Cattle'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 65%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="font-bold text-white text-xs sm:text-sm drop-shadow-sm line-clamp-1">
                    {lang === 'ko' ? '소 · 젖소 (반추동물)' : 'Beef & Dairy Cattle'}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Swine */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs">
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop"
                  alt={lang === 'ko' ? '양돈 (모돈 / 자돈 / 비육돈)' : 'Swine'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="font-bold text-white text-xs sm:text-sm drop-shadow-sm line-clamp-1">
                    {lang === 'ko' ? '양돈 (모돈/자돈/비육돈)' : 'Swine'}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Poultry */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs">
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop"
                  alt={lang === 'ko' ? '양계 (산란계 / 육계 / 오리)' : 'Poultry'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="font-bold text-white text-xs sm:text-sm drop-shadow-sm line-clamp-1">
                    {lang === 'ko' ? '양계 (산란계/육계/오리)' : 'Poultry'}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: Aqua & Fish */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs">
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/d/1jKgwQhKVR20zQiOKX_uEcwPMngouP_rV"
                  alt={lang === 'ko' ? '양어 · 새우 (수산양식)' : 'Aquaculture (Fish & Shrimp)'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3">
                  <span className="font-bold text-white text-xs sm:text-sm drop-shadow-sm line-clamp-1">
                    {lang === 'ko' ? '양어 · 새우' : 'Aquaculture'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
