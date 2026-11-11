import React, { useEffect, useState } from 'react';
import { 
  ChevronRight, 
  Download, 
  CheckCircle2, 
  Shield, 
  Award, 
  FlaskConical, 
  Building2, 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  Printer, 
  Layers, 
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  TrendingDown,
  Sparkles,
  Microscope,
  Home,
  FileCheck,
  FileCheck2,
  Factory,
  Globe2,
  Calendar,
  Zap,
  BookOpen,
  GraduationCap,
  Landmark,
  Image as ImageIcon,
  X,
  ExternalLink,
  Recycle,
  RotateCw,
  Sprout,
  Droplets,
  HeartHandshake,
  Handshake,
  Clock,
  Navigation,
  Copy,
  Check,
  ShieldCheck,
  Egg,
  TrendingUp,
  Brain,
  Eye,
  Truck,
  Store,
  Heart,
  Users,
  BarChart3,
  FileText,
  Fish,
  Waves
} from 'lucide-react';
import { 
  GNB_CATEGORIES, 
  PRODUCTS, 
  EVIDENCE_DATA, 
  HISTORY_TIMELINE, 
  AWARDS_LIST, 
  NEWS_LIST, 
  COMPANY_INFO,
  GALLERY_PHOTOS,
  FACILITY_PHOTOS
} from '../data/companyData';
import { Language, MainCategoryKey } from '../types';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { UniversityEmblem } from './UniversityEmblems';
import { AwardEmblem } from './AwardEmblems';
import { GlobalExportMap } from './GlobalExportMap';
import { PatentCertificatesGallery } from './PatentCertificatesGallery';
import { HqComplexInteractiveMap } from './HqComplexInteractiveMap';

interface CategoryPageViewProps {
  categoryKey: MainCategoryKey;
  subCategoryId?: string;
  lang: Language;
  onGoHome: () => void;
  onSwitchCategory: (key: MainCategoryKey, subId?: string) => void;
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenBrochure: () => void;
}

export const CategoryPageView: React.FC<CategoryPageViewProps> = ({
  categoryKey,
  subCategoryId,
  lang,
  onGoHome,
  onSwitchCategory,
  onOpenInquiry,
  onOpenBrochure,
}) => {
  const currentCategory = GNB_CATEGORIES.find((c) => c.key === categoryKey) || GNB_CATEGORIES[0];

  // Scroll to sub-section if subCategoryId is given, otherwise scroll to top
  useEffect(() => {
    if (subCategoryId) {
      const element = document.getElementById(subCategoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [subCategoryId, categoryKey]);

  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Category Hero / Breadcrumb Bar */}
      <div className="bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        {/* Hero Background Image (About: HQ/Company / ESG: ESG Bio Eco / Global: Container Ship / Contact: Contact Center / Other: R&D Laboratory) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={
              categoryKey === 'products'
                ? 'https://lh3.googleusercontent.com/d/1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy'
                : categoryKey === 'about'
                ? 'https://lh3.googleusercontent.com/d/1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6'
                : categoryKey === 'esg'
                ? 'https://lh3.googleusercontent.com/d/1ifuZxeqcBqKYpTf0xtmju6u2SurDOLkH'
                : categoryKey === 'global'
                ? 'https://lh3.googleusercontent.com/d/1_MlW2tEUjEoCtul-ONR9tKDZQvHRlvFR'
                : categoryKey === 'pr'
                ? 'https://lh3.googleusercontent.com/d/1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0'
                : categoryKey === 'contact'
                ? 'https://lh3.googleusercontent.com/d/1yrRN-UUTNynrCHAgPLFeuRDKL_AukqXV'
                : 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2000&auto=format&fit=crop'
            }
            alt={
              categoryKey === 'products'
                ? '맥섬석GM Growfeed 친환경 바이오 사료첨가제 라인업'
                : categoryKey === 'about'
                ? '맥섬석GM 기업개요 및 본사 인프라'
                : categoryKey === 'esg'
                ? '맥섬석GM ESG 지속가능 경영 및 친환경 바이오 순환'
                : categoryKey === 'global'
                ? '맥섬석GM 글로벌 해상 수출 및 전 세계 수출 물류'
                : categoryKey === 'pr'
                ? '맥섬석GM 홍보센터 및 언론 보도자료'
                : categoryKey === 'contact'
                ? '맥섬석GM 고객 문의 및 비즈니스 상담 센터'
                : '맥섬석 바이오 첨단 R&D 연구소'
            }
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = categoryKey === 'products'
                ? 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2000&auto=format&fit=crop'
                : categoryKey === 'about'
                ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
                : categoryKey === 'esg'
                ? 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop'
                : categoryKey === 'global'
                ? 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2000&auto=format&fit=crop'
                : categoryKey === 'pr'
                ? 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop'
                : categoryKey === 'contact'
                ? 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop'
                : 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop';
            }}
            className={`w-full h-full object-cover ${
              categoryKey === 'about'
                ? '[object-position:center_25%]'
                : categoryKey === 'esg'
                ? '[object-position:center_75%]'
                : categoryKey === 'contact'
                ? '[object-position:center_60%]'
                : categoryKey === 'pr'
                ? '[object-position:center_62%]'
                : 'object-center'
            } ${
              categoryKey === 'contact' || categoryKey === 'pr'
                ? 'opacity-[0.95]'
                : categoryKey === 'products' || categoryKey === 'about' || categoryKey === 'esg' || categoryKey === 'global'
                ? 'opacity-[0.98]'
                : 'opacity-[0.97]'
            } brightness-95 contrast-110`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative z-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <button
                onClick={onGoHome}
                className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" />
                <span>{lang === 'ko' ? '홈' : 'Home'}</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-emerald-400 font-semibold">
                {lang === 'ko' ? currentCategory.depth1Ko : currentCategory.depth1En}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={onGoHome}
                className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                <span>{lang === 'ko' ? '메인 홈으로' : 'Back to Home'}</span>
              </button>
            </div>
          </div>

          {/* Category Title */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              {lang === 'ko' ? currentCategory.depth1Ko : currentCategory.depth1En}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Category Content: Stacked Sequential Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. ABOUT US (모든 세부항목 순서대로 나열) */}
        {/* ========================================================================= */}
        {categoryKey === 'about' && (
          <div className="space-y-12">
            {/* Section 1: 회사 개요 & 인사말 & 생산 인프라 */}
            <section id="overview" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Building2 className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 회사 개요' : '1. Company Overview'}
                </h2>
              </div>

              {/* CEO Message with Photo */}
              <div className="bg-white rounded-2xl border border-slate-300 shadow-sm overflow-hidden">
                <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6"
                    alt="맥섬석GM 본사 및 연구시설"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to direct uc format if needed
                      const target = e.currentTarget;
                      if (!target.src.includes('drive.google.com/uc')) {
                        target.src = 'https://drive.google.com/uc?export=view&id=1Y--RowI3rCGsjAGXTbQ-yGhHAWSQoTV6';
                      }
                    }}
                    className="w-full h-full object-cover object-[50%_15%] opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="px-3 py-1.5 rounded-md bg-emerald-500/90 text-white text-sm sm:text-[14px] font-black uppercase tracking-wider mb-1.5 inline-block">
                        {lang === 'ko' ? '맥섬석GM 바이오 비전' : 'Macsumsuk Biotech Vision'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {lang === 'ko' ? '천연 광물 바이오로 여는 지속가능한 축산의 미래' : 'Sustainable Livestock Future via Mineral Biotech'}
                      </h3>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700 shrink-0">
                      {lang === 'ko' ? '본사 전경' : 'Headquarters'}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-4 font-normal">
                    {lang === 'ko' ? (
                      <>
                        <p>
                          안녕하십니까. 맥섬석GM㈜ 대표이사 <strong>곽성근</strong>입니다.
                        </p>
                        <p>
                          당사는 1986년 창립 이래 40년간 223ha 규모의 독점적인 맥섬석 천연 광산을 기반으로, 인체와 가축에 유익한 8~11μm 파장대의 고방사 원적외선 세라믹 기술을 독자적으로 확립하였습니다.
                          이를 축산 사료 분야에 접목하여 곰팡이독소를 87~94% 흡착하는 <strong>Growfeed E-TOX</strong>, 도축 혈액을 100% 자원화하는 <strong>Growfeed Protein</strong>, 그리고 반추동물 장내 메탄을 최대 61.5% 감축시키는 <strong>Growfeed DCM</strong>을 성공적으로 개발하였습니다.
                        </p>
                        <p>
                          미국, 일본, 중국, 유럽 등 52개국 글로벌 특허와 정부 은탑산업훈장, 2025 세계일류상품 선정에 이르기까지 국내외에서 검증받은 압도적 품질을 통해 세계 축산 농가의 경쟁력을 높이고 지구 환경을 지키는 100년 기업으로 정진하겠습니다.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Greetings. I am <strong>Sung-Geun Kwak</strong>, CEO of Macsumsuk GM Co., Ltd.
                        </p>
                        <p>
                          Since our founding in 1986, Macsumsuk GM has harnessed our exclusive 223ha natural mineral reserve to pioneer high-emissivity (8-11μm Wellion Ray) far-infrared bio-ceramics. By infusing this mineral technology into livestock nutrition, we developed <strong>Growfeed® E-TOX</strong> (87-94% mycotoxin adsorption), <strong>Growfeed® Protein</strong> (100% circular bio-recycled slaughterhouse blood), and <strong>Growfeed® DCM</strong> (up to 61.5% enteric methane reduction).
                        </p>
                        <p>
                          Backed by patents across 52 nations, the Korean Government’s Tower of Industrial Merit, and KOTRA’s 2025 World-Class Product designation, we are committed to strengthening global farm productivity and preserving planetary health as an enduring century enterprise.
                        </p>
                      </>
                    )}
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs sm:text-sm text-slate-600 gap-2">
                    <span className="font-semibold text-slate-800">{lang === 'ko' ? '맥섬석GM㈜ 대표이사 곽성근' : 'Sung-Geun Kwak, CEO of Macsumsuk GM Co., Ltd.'}</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">{lang === 'ko' ? '창립 1986년' : 'Founded 1986'}</span>
                  </div>
                </div>
              </div>

              {/* Head Office Complex Interactive Map & Land Status (Company.jpg based) */}
              <HqComplexInteractiveMap lang={lang} />

              {/* Manufacturing Facilities Photo Grid */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center">
                    <Factory className="w-6 h-6 text-emerald-600 mr-2" />
                    {lang === 'ko' ? '핵심 생산 거점 및 제조 인프라' : 'Key Manufacturing Hubs & Infrastructure'}
                  </h3>
                  <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-xs">
                    {lang === 'ko' ? '연간 40,000톤+ 생산 역량' : '40,000+ Tons Annual Capacity'}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {FACILITY_PHOTOS.map((fac) => (
                    <div
                      key={fac.id}
                      className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden group hover:border-emerald-400 hover:shadow-md transition-all flex flex-col sm:flex-row items-stretch"
                    >
                      <div className="relative h-48 sm:h-auto w-full sm:w-72 md:w-80 min-h-[195px] shrink-0 overflow-hidden bg-slate-900">
                        <img
                          src={fac.imageUrl}
                          alt={lang === 'ko' ? fac.titleKo : fac.titleEn}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (fac.imageUrl.includes('googleusercontent.com/d/')) {
                              const id = fac.imageUrl.split('/d/')[1];
                              if (id) target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                            }
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-transparent"></div>
                        <span className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-black tracking-wider uppercase shadow-xs">
                          {fac.category.toUpperCase()}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <h4 className="font-black text-slate-900 text-base sm:text-lg leading-snug group-hover:text-emerald-700 transition-colors">
                            {(() => {
                              const text = lang === 'ko' ? fac.titleKo : fac.titleEn;
                              const match = text.match(/^([^(]+)(.*)$/);
                              if (match && match[2]) {
                                return (
                                  <>
                                    <span className="text-slate-950">{match[1].trim()}</span>{' '}
                                    <span className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 inline-block ml-1">
                                      {match[2].trim()}
                                    </span>
                                  </>
                                );
                              }
                              return text;
                            })()}
                          </h4>
                          {(lang === 'ko' ? fac.descKo : fac.descEn) && (
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                              {lang === 'ko' ? fac.descKo : fac.descEn}
                            </p>
                          )}
                          {(fac.noticeKo || fac.noticeEn) && (
                            <p className="text-[11px] sm:text-xs text-slate-500 font-medium bg-slate-100/90 border border-slate-200/80 rounded-md px-2.5 py-1.5 leading-relaxed">
                              {lang === 'ko' ? fac.noticeKo : fac.noticeEn}
                            </p>
                          )}
                        </div>

                        {(lang === 'ko' ? fac.specKo : fac.specEn) && (
                          <div className="pt-2.5 border-t border-slate-200 flex items-center text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50/60 -mx-5 -mb-5 px-5 py-2.5">
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 shrink-0"></span>
                            <span>{lang === 'ko' ? fac.specKo : fac.specEn}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2: 인증 및 수상 (Awards & Certifications) */}
            <section id="awards" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Award className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 수상 실적 및 국내외 공인 인증' : '2. Honors, Awards & Global Certifications'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {AWARDS_LIST.map((award, idx) => (
                    <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 flex items-start space-x-4 group hover:border-emerald-300 hover:bg-slate-100/70 transition-all">
                      <AwardEmblem code={award.code} size={58} className="shadow-sm border border-slate-200 bg-white group-hover:scale-105 transition-transform shrink-0" />
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                          {lang === 'ko' ? award.titleKo : award.titleEn}
                        </h3>
                        <span className="text-xs sm:text-sm font-semibold text-emerald-700 block">
                          {lang === 'ko' ? award.hostKo : award.hostEn}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                          {lang === 'ko' ? award.descKo : award.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: 회사 연혁 (History) */}
            <section id="history" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Calendar className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '3. 주요 연혁' : '3. Milestones & History'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-8">
                {/* 1986 Heritage Highlight Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white shadow-md relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent pointer-events-none"></div>
                  <div className="space-y-1.5 z-10">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/30 text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-400/30">
                        {lang === 'ko' ? '1986년부터 창업부터 이어진 해리티지' : 'Heritage Since Foundation in 1986'}
                      </span>
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      {lang === 'ko' ? '독보적 원천 바이오 광물 기술의 역사' : 'History of Proprietary Bio-Mineral Innovation'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal">
                      {lang === 'ko'
                        ? '1986년 화성실업 창업부터 서울대 한우 메탄저감 실증 및 글로벌 수출 확대까지 끊임없는 기술 혁신'
                        : 'From 1986 foundation to SNU low-methane trials and expanding global exports.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 z-10 shrink-0">
                    <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                      <span className="text-[11px] text-emerald-300 font-bold block uppercase tracking-wider">
                        {lang === 'ko' ? '창립 연도' : 'Founded'}
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-white">1986</span>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Milestones Vertical Timeline */}
                <div className="relative border-l-2 border-emerald-400/80 ml-4 sm:ml-6 space-y-6 py-2">
                  {HISTORY_TIMELINE.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
                      className="relative pl-6 sm:pl-8 group"
                    >
                      {/* Timeline Node Dot with glowing effect */}
                      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 group-hover:border-emerald-500 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.7)] transition-all duration-300"></div>

                      <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 group-hover:border-emerald-300 group-hover:bg-emerald-50/30 group-hover:shadow-sm transition-all duration-300">
                        <div className="flex items-center space-x-2.5 mb-1.5 flex-wrap gap-y-1">
                          <span className="px-2.5 py-0.5 rounded-md bg-emerald-100/90 text-emerald-900 text-sm sm:text-base font-black tracking-tight group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            {item.year}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                            {lang === 'ko' ? item.titleKo : item.titleEn}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed pl-0.5">
                          {lang === 'ko' ? item.descKo : item.descEn}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: 오시는 길 (Location & Facilities) */}
            <section id="location" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <MapPin className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '4. 사업장 및 본사' : '4. Business Sites & Head Office'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-lg font-bold text-slate-900">
                      {lang === 'ko' ? '영천 본사 및 메인 1공장' : 'Yeongcheon HQ & Plant 1'}
                    </h3>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm text-slate-800">
                    <div><strong>{lang === 'ko' ? '주소:' : 'Address:'}</strong> {lang === 'ko' ? COMPANY_INFO.address : COMPANY_INFO.addressEn}</div>
                    <div><strong>{lang === 'ko' ? '대표전화:' : 'Tel:'}</strong> {COMPANY_INFO.phone}</div>
                    <div><strong>{lang === 'ko' ? '팩스번호:' : 'Fax:'}</strong> {COMPANY_INFO.fax}</div>
                    <div><strong>{lang === 'ko' ? '이메일:' : 'E-mail:'}</strong> {COMPANY_INFO.email}</div>
                    <div><strong>{lang === 'ko' ? '담당자 직통:' : 'Direct Contact:'}</strong> {COMPANY_INFO.mobile}</div>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-teal-600" />
                    <h3 className="text-lg font-bold text-slate-900">
                      {lang === 'ko' ? '경주 분체 및 소성 2공장' : 'Gyeongju Calcination Plant 2'}
                    </h3>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm text-slate-800">
                    <div><strong>{lang === 'ko' ? '소재지:' : 'Location:'}</strong> {lang === 'ko' ? '경상북도 경주시 소재' : 'Gyeongju-si, Gyeongsangbuk-do'}</div>
                    <div><strong>{lang === 'ko' ? '부지 면적:' : 'Site Area:'}</strong> 8,769㎡ (Building 1,199㎡)</div>
                    <div><strong>{lang === 'ko' ? '생산 역량:' : 'Capacity:'}</strong> {lang === 'ko' ? '보조사료 월 600~800톤 생산' : '600-800 tons/month'}</div>
                    <div><strong>{lang === 'ko' ? '주요 기능:' : 'Key Operations:'}</strong> {lang === 'ko' ? '맥섬석 원광 분체가공 및 특허 고열소성 전문 라인' : 'Rotary Kiln Calcination & Micro-particle Grinding'}</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. PRODUCTS (축종별 맞춤 컨설팅 1순위 + 전체 제품 순차 나열) */}
        {/* ========================================================================= */}
        {categoryKey === 'products' && (
          <div className="space-y-12">
            {/* 1. Livestock Application Guide (1순위) */}
            <section id="livestock-guide" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <BookOpen className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 그로피드 축종별 맞춤 컨설팅' : '1. Growfeed® Livestock Tailored Consulting'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="py-5 px-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-2">
                  <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-tight">
                    {lang === 'ko' 
                      ? '반추동물(한우/젖소) · 양돈(모돈/자돈) · 양계(산란계/육계) · 양어/새우 (수산양식)' 
                      : 'Ruminants (Beef & Dairy Cattle) · Swine · Poultry · Aquaculture (Fish & Shrimp)'}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {lang === 'ko' ? (
                      <>
                        전 축종 사육 환경에 맞춘{' '}
                        <span className="text-emerald-700 font-black decoration-emerald-300 underline underline-offset-4 decoration-2">
                          최적의 그로피드 맞춤 솔루션
                        </span>
                        을 제공합니다.
                      </>
                    ) : (
                      <>
                        Tailored for all livestock environments with{' '}
                        <span className="text-emerald-700 font-black decoration-emerald-300 underline underline-offset-4 decoration-2">
                          Optimal Growfeed Solutions
                        </span>.
                      </>
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Card 1: Cattle / Ruminants */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src="https://lh3.googleusercontent.com/d/1_rjC1lbuxqETQ4KSv_80Fsovau1cHAXX"
                        alt={lang === 'ko' ? '소 · 젖소 (반추동물)' : 'Beef & Dairy Cattle (Ruminants)'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: 'center 65%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="font-bold text-white text-base drop-shadow-sm">
                          {lang === 'ko' ? '소 · 젖소 (반추동물)' : 'Beef & Dairy Cattle (Ruminants)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Swine */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop"
                        alt={lang === 'ko' ? '양돈 (모돈 / 자돈 / 비육돈)' : 'Swine'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="font-bold text-white text-base drop-shadow-sm">
                          {lang === 'ko' ? '양돈 (모돈 / 자돈 / 비육돈)' : 'Swine (Sows, Piglets & Fattening)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Poultry */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop"
                        alt={lang === 'ko' ? '양계 (산란계 / 육계 / 오리)' : 'Poultry'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="font-bold text-white text-base drop-shadow-sm">
                          {lang === 'ko' ? '양계 (산란계 / 육계 / 오리)' : 'Poultry (Layers, Broilers & Ducks)'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Aqua & Fish */}
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-200">
                      <img
                        src="https://lh3.googleusercontent.com/d/1jKgwQhKVR20zQiOKX_uEcwPMngouP_rV"
                        alt={lang === 'ko' ? '양어 · 새우 (수산양식)' : 'Aquaculture (Fish & Shrimp)'}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent"></div>
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                        <span className="font-bold text-white text-base drop-shadow-sm">
                          {lang === 'ko' ? '양어 · 새우 (수산양식)' : 'Aquaculture (Fish & Shrimp)'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consulting Inquiry CTA Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <div className="text-center sm:text-left space-y-0.5">
                    <h4 className="font-bold text-emerald-950 text-base">
                      {lang === 'ko' ? '농가 및 사료회사 맞춤 솔루션 컨설팅' : 'Farm & Feed Mill Tailored Consulting'}
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 font-normal">
                      {lang === 'ko' 
                        ? '사육 환경과 사료 배합에 맞춘 1:1 맞춤형 급여 설계 및 시험 적용을 안내해 드립니다.' 
                        : 'We provide 1:1 customized feeding design and trial application suited for your environment.'}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenInquiry(lang === 'ko' ? '축종별 맞춤 컨설팅' : 'Livestock Tailored Consulting')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
                  >
                    <span>{lang === 'ko' ? '컨설팅 문의하기' : 'Request Consulting'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* All Products Stacked (2순위부터 나열) */}
            {PRODUCTS.map((prod, index) => (
              <section key={prod.id} id={prod.id} className="scroll-mt-32 space-y-6">
                <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                  <Layers className="w-7 h-7 text-emerald-600" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {index + 2}. {lang === 'ko' ? (prod.id === 'protein' ? `${prod.name} [ESG사업]` : prod.name) : (prod.id === 'protein' ? `${prod.engName} [ESG Initiative]` : prod.engName)}
                  </h2>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6 overflow-hidden">
                  {/* Card Top Header */}
                  <div className="pb-6 border-b border-slate-200">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
                      {prod.id === 'core-fertilizer' && prod.imageUrl ? (
                        <div className="w-full sm:w-[280px] md:w-[320px] h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-300 shrink-0 shadow-md relative group">
                          <img
                            src={prod.imageUrl}
                            alt={lang === 'ko' ? '코어 비료 및 고기능성 과립 비료' : 'Core Fertilizer & High-Performance Granular Fertilizer'}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.src = 'https://drive.google.com/uc?export=view&id=1pfceSi84IctA9CGx3_mHDZcgx01mFjWX';
                            }}
                            className="w-[108%] max-w-none h-full object-cover object-[45%_50%] -translate-x-[5%] group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ) : prod.isComingSoon || !prod.imageUrl ? (
                        <div className="w-full sm:w-[260px] md:w-[300px] h-[220px] sm:h-[260px] md:h-[290px] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50 via-slate-50 to-emerald-50/60 border-2 border-dashed border-teal-400 shrink-0 shadow-xs flex flex-col items-center justify-center p-6 text-center space-y-3.5 relative group hover:scale-[1.02] transition-transform">
                          <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                          
                          <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-700/20">
                            <Clock className="w-7 h-7" />
                          </div>
                          
                          <div className="space-y-1.5 z-10">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-teal-100 text-teal-900 border border-teal-300">
                              {lang === 'ko' ? '신규 R&D 프로젝트' : 'New R&D Project'}
                            </span>
                            <span className="text-xl sm:text-2xl font-black text-teal-950 tracking-tight block">
                              {lang === 'ko' ? '출시 준비 中' : 'Coming Soon'}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-600 font-medium block">
                              {lang === 'ko' ? '공식 검증 및 특허 인증 진행' : 'Certification & Trials in Progress'}
                            </span>
                          </div>
                        </div>
                      ) : prod.id === 'healing-egg' && prod.imageUrl ? (
                        <div className="w-full sm:w-[280px] md:w-[320px] h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-300 shrink-0 shadow-md relative group">
                          <img
                            src={prod.imageUrl}
                            alt={lang === 'ko' ? prod.name : prod.engName}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.src = '/assets/aistudio/_____02896e00.png';
                            }}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="w-full sm:w-[260px] md:w-[300px] h-[240px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100/90 via-white to-slate-100/80 border border-slate-300/80 shrink-0 shadow-sm flex items-center justify-center p-4 relative group hover:shadow-md transition-shadow">
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                          <img
                            src={prod.imageUrl}
                            alt={lang === 'ko' ? prod.name : prod.engName}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.onerror = null;
                              if (prod.id === 'etox') {
                                target.src = 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop';
                              } else if (prod.id === 'protein') {
                                target.src = 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop';
                              } else if (prod.id === 'dcm') {
                                target.src = 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=800&auto=format&fit=crop';
                              }
                            }}
                            className="w-[280px] h-[300px] max-w-full max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="flex-1 space-y-3.5 w-full">
                        {/* Badges & Category Header */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold ${prod.colorScheme.bgBadge} ${prod.colorScheme.textBadge} border ${prod.colorScheme.border} shadow-2xs`}>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{lang === 'ko' ? prod.badge : prod.badgeEn}</span>
                          </span>
                          {prod.id === 'protein' && (
                            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-sky-100 text-sky-950 border border-sky-300 shadow-2xs">
                              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                              <span>{lang === 'ko' ? '혈액가공품 (최초)' : 'Blood Processed Product (First)'}</span>
                            </span>
                          )}
                          {prod.id === 'healing-egg' && (
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-50 text-amber-950 border border-amber-300 shadow-2xs">
                              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                              <span>{lang === 'ko' ? '비교할 수 없는 난황 탄력' : 'Incomparable Yolk Elasticity'}</span>
                            </span>
                          )}
                          {prod.id === 'core-fertilizer' && (
                            <>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-amber-900 border border-amber-300 shadow-2xs">
                                <Leaf className="w-3.5 h-3.5 text-amber-600" />
                                <span>{lang === 'ko' ? '맥섬석GM 순환자원화 모델' : 'Macsumsuk GM Circular Model'}</span>
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-amber-100 text-amber-950 border border-amber-300 shadow-2xs">
                                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                <span>{lang === 'ko' ? '친환경 ESG 순환가치' : 'Circular Value'}</span>
                              </span>
                            </>
                          )}
                          {prod.id !== 'core-fertilizer' && (prod.category || prod.categoryEn) && (
                            <span className="text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/90">
                              {lang === 'ko' ? prod.category : prod.categoryEn}
                            </span>
                          )}
                          {prod.patentNo && prod.id !== 'healing-egg' && (
                            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80 flex items-center space-x-1">
                              <Shield className="w-3.5 h-3.5 text-emerald-600" />
                              <span>
                                {lang === 'ko' ? '특허 등록 원천기술' : 'Patented Technology'}
                              </span>
                            </span>
                          )}
                          {(prod.extraBadgeKo || prod.extraBadgeEn) && (
                            <span className="text-xs sm:text-sm font-bold text-indigo-900 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-200 flex items-center space-x-1.5 shadow-2xs">
                              <Award className="w-3.5 h-3.5 text-indigo-700" />
                              <span>{lang === 'ko' ? prod.extraBadgeKo : prod.extraBadgeEn}</span>
                            </span>
                          )}
                        </div>

                        {/* Title and Subtitle */}
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-baseline gap-2.5">
                            <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                              {lang === 'ko' ? prod.name : prod.engName}
                            </h3>
                            {lang === 'ko' && (
                              <span className="text-lg sm:text-xl font-bold text-slate-500">
                                {prod.engName}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Tagline Bar with Animated Pulse Indicator */}
                        <div className={`flex items-center px-4 py-2.5 rounded-xl ${prod.colorScheme.bgBadge} border ${prod.colorScheme.border} text-sm sm:text-base font-bold text-slate-900 shadow-2xs`}>
                          <span className="relative flex h-2.5 w-2.5 mr-2.5 shrink-0">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${prod.id === 'core-fertilizer' || prod.id === 'healing-egg' ? 'bg-amber-400' : 'bg-emerald-400'} opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${prod.id === 'core-fertilizer' || prod.id === 'healing-egg' ? 'bg-amber-600' : 'bg-emerald-600'}`}></span>
                          </span>
                          <span className="leading-snug whitespace-pre-line">{lang === 'ko' ? prod.taglineKo : prod.taglineEn}</span>
                        </div>

                        {/* Quick Spec Highlights Strip */}
                        {prod.id !== 'healing-egg' && prod.id !== 'core-fertilizer' && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm">
                            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                              <span className="font-bold text-slate-900 shrink-0">
                                {lang === 'ko' ? '권장 급여량:' : 'Dosage:'}
                              </span>
                              <span className="font-semibold text-emerald-700 truncate">{lang === 'ko' ? prod.dosageKo : prod.dosageEn}</span>
                            </div>
                            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                              <span className="font-bold text-slate-900 shrink-0">
                                {lang === 'ko' ? '검증 축종:' : 'Target:'}
                              </span>
                              <span className="font-semibold text-slate-800 truncate">
                                {prod.id === 'dcm'
                                  ? (lang === 'ko' ? '반추동물(한우/젖소)' : 'Ruminants (Beef & Dairy)')
                                  : (lang === 'ko' ? '반추동물(한우/젖소), 돼지, 산란계/육계' : 'Ruminants, Swine, Poultry')}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  {prod.id === 'core-fertilizer' ? (
                    <div className="bg-gradient-to-r from-amber-50/90 via-amber-50/60 to-yellow-50/50 p-5 rounded-xl border border-amber-300 shadow-xs space-y-2">
                      <div className="flex items-center space-x-2 text-amber-950 font-black text-xs sm:text-sm">
                        <TrendingUp className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                        <span>{lang === 'ko' ? '핵심 전략: 고기능성 과립 비료 개발 및 고부가 순환 비료 시장 확장' : 'Strategic Focus: Granular Fertilizer R&D & Circular Market Expansion'}</span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                        {lang === 'ko' ? prod.summaryKo : prod.summaryEn}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200 font-normal">
                      {lang === 'ko' ? prod.summaryKo : prod.summaryEn}
                    </p>
                  )}

                  {/* Specs Table & Features */}
                  {prod.id === 'core-fertilizer' ? (
                    <div className="space-y-5">
                      <div className="space-y-3.5">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider flex items-center">
                          <Recycle className="w-5 h-5 text-amber-600 mr-2" />
                          {lang === 'ko' ? '맥섬석GM(주) 친환경 자원순환 및 웰리온 유기질 비료 생산 체계' : 'Macsumsuk GM Eco-Friendly Circular & Wellion Organic Fertilizer Production System'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                            <div className="flex items-center space-x-2 text-amber-950 font-bold text-sm sm:text-base">
                              <Sprout className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                              <span>{lang === 'ko' ? '원료 수거: 청정 축산 부산물 회수 인프라' : 'Raw Material: Clean Byproduct Recovery'}</span>
                            </div>
                            <p className="text-[13.5px] sm:text-[15px] text-slate-700 leading-relaxed pl-6.5 font-normal">
                              {lang === 'ko'
                                ? '축우·양돈·양계 등 축산 공정에서 발생하는 부산물(도축 혈액 등)을 전용 밀폐 라인으로 청정 회수하여 유기농 과립 비료 원료화'
                                : 'Clean, sealed recovery of livestock byproducts, upcycling organic materials into premium eco-fertilizer.'}
                            </p>
                          </div>

                          <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                            <div className="flex items-center space-x-2 text-amber-950 font-bold text-sm sm:text-base">
                              <Factory className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                              <span>{lang === 'ko' ? '맥섬석GM: 원적외선 바이오 소재 및 특허 가공 기술' : 'Macsumsuk GM: Far-Infrared Materials & Patent Tech'}</span>
                            </div>
                            <p className="text-[13.5px] sm:text-[15px] text-slate-700 leading-relaxed pl-6.5 font-normal">
                              {lang === 'ko'
                                ? '맥섬석 고유의 원적외선 고방사 세라믹 가공 노하우와 가축혈액 유기질 아미노산 자원순환 특허 기술을 현장 생산에 투입'
                                : 'Deploying Macsumsuk GM’s proprietary far-infrared ceramic processing and livestock blood recycling patent technologies'}
                            </p>
                          </div>

                          <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                            <div className="flex items-center space-x-2 text-amber-950 font-bold text-sm sm:text-base">
                              <RotateCw className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                              <span>{lang === 'ko' ? '완결형 자원순환 가치사슬(Closed-Loop) 구축' : 'Closed-Loop Circular Value Chain Integration'}</span>
                            </div>
                            <p className="text-[13.5px] sm:text-[15px] text-slate-700 leading-relaxed pl-6.5 font-normal">
                              {lang === 'ko'
                                ? '축산 부산혈(血) 청정 회수 ➔ 초고온 순간멸균 및 바이오 하이비타 혼합 ➔ 고부가가치 순환 비료 제조 ➔ 농경지 환원 및 친환경 농업의 원스톱 사이클 ➔ 친환경 비료'
                                : 'Clean Recovery of Livestock Blood ➔ Flash Sterilization & Bio Hi-Vita Blending ➔ High-Value Circular Fertilizer Production ➔ Farmland Application & Sustainable Agriculture One-Stop Cycle ➔ Eco-Friendly Fertilizer'}
                            </p>
                          </div>

                          <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                            <div className="flex items-center space-x-2 text-amber-950 font-bold text-sm sm:text-base">
                              <Globe2 className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                              <span>{lang === 'ko' ? 'ESG 탄소중립 실천 & 자원순환 국가과제' : 'ESG Carbon Neutrality & Circular Economy'}</span>
                            </div>
                            <p className="text-[13.5px] sm:text-[15px] text-slate-700 leading-relaxed pl-6.5 font-normal">
                              {lang === 'ko' ? (
                                <>
                                  정부 친환경 순환자원화 정책 부응 및 탄소배출 저감을 선도하는 지속가능한 미래 친환경 비전
                                  <span className="block mt-2 pt-2 border-t border-slate-200 text-xs sm:text-[13px] font-semibold text-amber-950 space-y-0.5">
                                    <span className="block">• 하이비타⁺ 농축산 비료 강원대학교 실용화</span>
                                    <span className="block">• (주)판코리아 농업환경과학연구소 비해시험 결과 확인</span>
                                  </span>
                                </>
                              ) : (
                                <>
                                  A sustainable future vision aligning with national eco-circulation policies and driving carbon reduction
                                  <span className="block mt-2 pt-2 border-t border-slate-200 text-xs sm:text-[13px] font-semibold text-amber-950 space-y-0.5">
                                    <span className="block">• Hi-Vita⁺ Agri-Livestock Fertilizer Kangwon Nat’l Univ Commercialization</span>
                                    <span className="block">• Pan Korea Agricultural & Environmental Science Lab Crop Safety Test Verified</span>
                                  </span>
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-3.5">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
                          <FileCheck className="w-4.5 h-4.5 text-emerald-600 mr-2" />
                          {lang === 'ko' ? '제품 상세 스펙 (Specifications)' : 'Product Specifications'}
                        </h4>
                        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
                          {prod.specs.map((spec, i) => (
                            <div key={i} className="flex px-4 py-3">
                              <span className="w-36 font-bold text-slate-800 shrink-0">
                                {lang === 'ko' ? spec.labelKo : spec.labelEn}
                              </span>
                              <span className="text-slate-700 font-medium whitespace-pre-line">
                                {lang === 'ko' ? spec.valueKo : spec.valueEn}
                              </span>
                            </div>
                          ))}
                          {prod.id === 'healing-egg' ? (
                            <div className="flex flex-col sm:flex-row px-4 py-3.5 bg-gradient-to-br from-amber-50/90 via-amber-100/40 to-emerald-50/50 border-t border-amber-200">
                              <span className="w-36 font-bold text-amber-950 shrink-0 flex items-center gap-1.5 mb-1.5 sm:mb-0">
                                <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" />
                                <span>{lang === 'ko' ? '상품 가치 & 유통' : 'Value & Distribution'}</span>
                              </span>
                              <div className="space-y-1.5">
                                <div className="text-xs sm:text-sm font-black text-amber-950 leading-snug flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                  <span>
                                    {lang === 'ko'
                                      ? '객관적 품질 지표를 바탕으로 상품 가치 극대화 및 프리미엄 브랜드 유통 추진'
                                      : 'Maximizing product value and driving premium brand distribution based on objective quality indicators'}
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-0.5">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/90 text-amber-900 border border-amber-200/90 shadow-2xs">
                                    {lang === 'ko' ? '공인 4대 영양·물성 실증 성적서 완비' : 'Accredited 4-Core Nutrient Metrics'}
                                  </span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/90 text-emerald-900 border border-emerald-200/90 shadow-2xs">
                                    {lang === 'ko' ? '백화점 · 유기농 프리미엄 유통 추진' : 'Department Stores & Premium Channels'}
                                  </span>
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/90 text-slate-800 border border-slate-200 shadow-2xs">
                                    {lang === 'ko' ? '사료 특허 제10-13286XX호 & ‘치유계란®’ 상표 자산 연계' : 'Feed Patent No. 10-13286XX & Trademark'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ) : prod.patentNo ? (
                            <div className="flex px-4 py-3 bg-emerald-50/70">
                              <span className="w-36 font-bold text-emerald-950 shrink-0">
                                {lang === 'ko' ? '특허 번호' : 'Patent No.'}
                              </span>
                              <span className="text-emerald-900 font-bold">
                                {lang === 'ko' ? prod.patentNo : prod.patentNoEn}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="space-y-3.5">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
                          <Shield className="w-4.5 h-4.5 text-emerald-600 mr-2" />
                          {lang === 'ko' ? '주요 핵심 특장점' : 'Key Advantages & Features'}
                        </h4>
                        <div className="space-y-2.5">
                          {(lang === 'ko' ? prod.keyFeaturesKo : prod.keyFeaturesEn).map((feat, i) => (
                            <div key={i} className="flex items-start text-xs sm:text-sm text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                              <span className="font-normal leading-relaxed">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                    {/* Test Results (사료첨가제 제품군 전용) */}
                    {prod.id !== 'healing-egg' && prod.testResultsKo && prod.testResultsKo.length > 0 && (
                      <div className="space-y-3.5 pt-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center">
                          <Microscope className="w-4.5 h-4.5 text-emerald-600 mr-2" />
                          {lang === 'ko' ? '공인 시험 및 실증 성적 지표' : 'Empirical Laboratory & Field Results'}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                          {(lang === 'ko' ? prod.testResultsKo : (prod.testResultsEn || prod.testResultsKo)).map((res, i) => (
                            <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center flex flex-col justify-between">
                              <span className="text-xs sm:text-sm text-slate-600 font-medium block truncate">{res.metric}</span>
                              <div className="text-lg sm:text-xl font-black text-emerald-700 my-1.5 leading-snug">
                                {res.value}
                              </div>
                              <span className="text-xs text-slate-500 block font-normal leading-relaxed whitespace-pre-line">{res.note}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 그로피드 이톡스 전용: 과립형 사료 현미경 사진 (단순 소개형 - 콤팩트 화이트 디자인) */}
                    {prod.id === 'etox' && (
                      <div className="space-y-3 pt-5 border-t border-slate-200">
                        {/* 상단 간결한 헤더 */}
                        <div className="flex items-center pb-1.5 border-b border-slate-200">
                          <div className="flex items-center space-x-2">
                            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                              <Microscope className="w-4 h-4" />
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-slate-900">
                              {lang === 'ko' ? '과립형 사료 현미경 사진 (Granule Type)' : 'Microscope Photo of Granule Feed'}
                            </h4>
                          </div>
                        </div>

                        {/* 화이트 계열 카드 (이미지 30% 축소, 캡션, 2문장 장점 요약) */}
                        <div className="w-full bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col items-center text-center space-y-3">
                          {/* 사진 본체 (30% 축소: max-w-[70%]) */}
                          <div className="w-full max-w-[70%] rounded-lg overflow-hidden bg-white border border-slate-200 shadow-xs flex items-center justify-center p-1">
                            <img
                              src="/drive_img_1Qe.png"
                              alt="A microscope photo of an Growfeed granule"
                              className="w-full h-auto object-contain block rounded"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* 이미지 바로 밑 영문 텍스트 */}
                          <p className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                            A microscope photo of an Growfeed granule
                          </p>

                          {/* SEM 10㎛~20㎛ 글자 창 */}
                          <div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-white border border-slate-300 shadow-2xs text-xs sm:text-sm font-black text-slate-900">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 mr-2 shrink-0"></span>
                            <span>SEM 10㎛~20㎛</span>
                          </div>

                          {/* 삼성 Bio TV 납품. 글자 창 (삼성 공식 로고 적용) */}
                          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-white border border-blue-200 shadow-2xs hover:shadow-xs transition-shadow">
                            <img
                              src="/samsung_logo.svg"
                              alt="SAMSUNG"
                              className="h-4 sm:h-5 w-auto object-contain block"
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                e.currentTarget.src = '/Samsung.png';
                              }}
                            />
                            <span className="h-3 w-px bg-slate-300"></span>
                            <span className="text-xs sm:text-sm font-black text-blue-950 tracking-tight">
                              {lang === 'ko' ? 'Bio TV 납품.' : 'Bio TV Supply.'}
                            </span>
                          </div>

                          {/* 맥섬석 과립형 사료 미세구조 3대 핵심 효과 (색상 디자인 카드 3종) */}
                          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-left">
                            {/* 1. 유익 미생물 생존 공간 */}
                            <div className="p-3 sm:p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 shadow-2xs space-y-1">
                              <span className="inline-block text-[13px] font-extrabold text-blue-700 bg-white px-2.5 py-1 rounded-md border border-blue-200">
                                {lang === 'ko' ? '1. 유익 미생물 생존 공간' : '1. Microbe Survival Habitat'}
                              </span>
                              <p className="text-xs text-blue-950 font-medium leading-relaxed">
                                {lang === 'ko'
                                  ? '미세 다공성 구조가 고온 열처리 후에도 유익 미생물을 안전하게 보호하여 60%~90%의 높은 생존율을 시각적으로 입증합니다.'
                                  : 'The microporous structure shields beneficial microbes even after heat treatment, proving a 60%–90% high survival rate.'}
                              </p>
                            </div>

                            {/* 2. 입자의 균일성과 구조적 안정성 */}
                            <div className="p-3 sm:p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 shadow-2xs space-y-1">
                              <span className="inline-block text-[13px] font-extrabold text-emerald-700 bg-white px-2.5 py-1 rounded-md border border-emerald-200">
                                {lang === 'ko' ? '2. 입자 균일성 & 구조 안정성' : '2. Uniformity & Stability'}
                              </span>
                              <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                                {lang === 'ko'
                                  ? '쉽게 부서지지 않는 단단한 구형 과립으로 사료와 배합 시 분리되지 않고 고르게 섞이는 뛰어난 물리적 특성을 제공합니다.'
                                  : 'Sturdy spherical granules resist crushing and blend seamlessly with feed without segregation.'}
                              </p>
                            </div>

                            {/* 3. 소화율 개선 및 악취 감소 */}
                            <div className="p-3 sm:p-3.5 rounded-xl bg-purple-50/80 border border-purple-200/80 shadow-2xs space-y-1">
                              <span className="inline-block text-[13px] font-extrabold text-purple-700 bg-white px-2.5 py-1 rounded-md border border-purple-200">
                                {lang === 'ko' ? '3. 소화율 개선 & 악취 감소' : '3. Digestibility & Odor Reduction'}
                              </span>
                              <p className="text-xs text-purple-950 font-medium leading-relaxed">
                                {lang === 'ko'
                                  ? '장내 완충 작용과 유익균 활성화로 사료 소화흡수율을 높이고 가축 면역력 증진 및 분뇨 악취를 획기적으로 줄여줍니다.'
                                  : 'Intestinal buffering and microbe activation boost nutrient absorption, improve animal immunity, and sharply cut manure odor.'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {prod.id === 'protein' && (
                      <div className="space-y-8 pt-6 border-t border-slate-200">
                        {/* 섹션 타이틀 헤더 */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
                              <Globe2 className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                  {lang === 'ko' ? '글로벌 공인 사양 실증 성과' : 'Global Empirical Field Trials'}
                                </span>
                              </div>
                              <h4 className="text-base sm:text-lg font-black text-slate-950 mt-0.5">
                                {lang === 'ko' 
                                  ? '해외 실증 사례: 말레이시아 KFC 육계 도체 검증 & 태국 CBP그룹 양식장' 
                                  : 'Overseas Field Trials: Malaysia KFC Poultry & Thailand CBP Aquaculture'}
                              </h4>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 self-start sm:self-center">
                            {lang === 'ko' ? '국제 공인 시험 및 현장 실사' : 'Certified International Trials'}
                          </span>
                        </div>

                        {/* 1. 말레이시아 산란계·육계 농장 적용 성과 (Malaysia KFC) */}
                        <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
                          {/* 상단 헤더 바 */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-extrabold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                                  {lang === 'ko' ? '글로벌 적용 사례 · 말레이시아' : 'Global Application · Malaysia'}
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                                  Malaysia (KFC)
                                </span>
                              </div>
                              <h5 className="text-lg sm:text-xl font-black text-slate-900 mt-1.5">
                                {lang === 'ko' 
                                  ? '말레이시아 산란계·육계 농장 적용 성과' 
                                  : 'Malaysia Layer & Broiler Farm Validation'}
                              </h5>
                              <p className="text-xs text-slate-500 font-medium mt-0.5">
                                {lang === 'ko' 
                                  ? 'KFC 공급망 육질 및 내장 무결성 검증을 위한 도체 부검(Necropsy) 실사' 
                                  : 'Carcass necropsy verification for KFC supply chain meat quality and internal organ integrity'}
                              </p>
                            </div>
                            <span className="text-[13.54px] sm:text-[15.23px] font-black text-emerald-900 bg-emerald-100 px-[16.9px] py-[8.46px] rounded-xl border-2 border-emerald-400 shadow-sm self-start sm:self-center tracking-wide whitespace-nowrap">
                              {lang === 'ko' ? 'KFC 납품 규격 통과' : 'KFC Supply Certified'}
                            </span>
                          </div>

                          {/* 실제 사진 기반 도체 부검 비교 프레임 (말레이시아 현장 실증사진 스타일 기반, 육계 도체 검증 특화 디자인) */}
                          <div className="bg-slate-50/90 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
                            <div className="text-xs text-slate-500 pb-2.5 border-b border-slate-200">
                              <span className="font-bold text-slate-900 flex items-center gap-1.5 text-[13px] sm:text-[14px]">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                {lang === 'ko' ? '도체 및 소화장기 부검 비교 실사 (Necropsy Comparison)' : 'Carcass & Internal Organ Necropsy'}
                              </span>
                            </div>

                            {/* 좌우 사진 비교 그리드 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* 좌측: 대조군 (| Commercial) */}
                              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-2xs space-y-3 flex flex-col">
                                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-[4/3] shadow-2xs">
                                  <img 
                                    src="/C1.png"
                                    alt="Commercial Control Broiler C1"
                                    className="w-full h-full object-cover object-[center_20%]"
                                    onError={(e) => {
                                      e.currentTarget.src = '/F1.png';
                                    }}
                                  />
                                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-xs text-[11px] font-extrabold text-slate-100 border border-slate-700 shadow-xs z-10">
                                    {lang === 'ko' ? '도체 부검 01 · 대조군' : 'Necropsy 01 · Control'}
                                  </div>
                                </div>

                                <div className="p-2.5 sm:p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-[12.5px] text-amber-950 font-medium leading-relaxed shadow-2xs">
                                  {lang === "ko" ? (
                                    <>
                                      • 간 비대증 및 복부 지방 과다 침착 관찰<br/>
                                      • 소화 잔류물 및 장벽 충혈 소견
                                    </>
                                  ) : (
                                    <>
                                      • Hepatomegaly (enlarged liver) & excessive abdominal fat observed<br/>
                                      • Digestive residue & intestinal wall hyperemia noted
                                    </>
                                  )}
                                </div>

                                <div className="text-center pt-0.5 mt-auto">
                                  <span className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl text-xs sm:text-[12.5px] font-bold bg-slate-100 text-slate-700 border border-slate-300">
                                    {lang === "ko" ? "| Commercial (일반 사료군)" : "| Commercial (Control Group)"}
                                  </span>
                                </div>
                              </div>

                              {/* 우측: 그로피드 적용군 (| Growfeed applied) */}
                              <div className="bg-white rounded-2xl p-3 sm:p-4 border-2 border-emerald-500 shadow-xs space-y-3 flex flex-col">
                                <div className="relative rounded-xl overflow-hidden border-2 border-emerald-400 bg-slate-50 aspect-[4/3] shadow-2xs">
                                  <img 
                                    src="/C2.png"
                                    alt="Growfeed Applied Broiler C2"
                                      className="w-full h-full object-cover object-[center_80%]"
                                      style={{ transform: "translate(10%, -10%) scale(1.25)" }}
                                  />
                                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-emerald-950/85 backdrop-blur-xs text-[11px] font-extrabold text-emerald-100 border border-emerald-400/50 shadow-xs z-10">
                                    {lang === 'ko' ? '도체 부검 02 · 그로피드' : 'Necropsy 02 · Growfeed'}
                                  </div>
                                </div>

                                <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-[12.5px] text-emerald-950 font-medium leading-relaxed shadow-2xs">
                                  {lang === "ko" ? (
                                    <>
                                      • 선홍색의 단단하고 윤기 나는 정상 간<br/>
                                      • 위(근위)와 소화장기 내벽이 매우 깨끗하고 탄력 유지
                                    </>
                                  ) : (
                                    <>
                                      • Bright pink, firm, glossy normal liver<br/>
                                      • Clean gizzard & digestive organ inner walls with superior elasticity
                                    </>
                                  )}
                                </div>

                                <div className="text-center pt-0.5 mt-auto">
                                  <span className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl text-xs sm:text-[12.5px] font-black bg-emerald-600 text-white shadow-xs">
                                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-200" />
                                    {lang === "ko" ? "| Growfeed applied (KFC 통과)" : "| Growfeed applied (KFC Certified)"}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* 실증 슬라이드 원문 강조 배너 (그로피드 첨가 후 시험 DIV와 동일한 네이비 #1a365d 배경 및 흰색 글자) */}
                            <div className="mt-2 py-3 px-4 rounded-xl bg-[#1a365d] border border-sky-800/80 text-center shadow-sm">
                              <span className="text-[12.72px] sm:text-[14.84px] font-black text-white tracking-wide flex items-center justify-center gap-1.5">
                                <CheckCircle2 className="w-[16.96px] h-[16.96px] text-sky-300 shrink-0" />
                                <span>{lang === "ko" ? "간, 위등 내장이 깨끗하고 육질의 차이가 확연함 (KFC 납품)" : "Clean liver, gizzard, and internal organs with distinctly superior meat quality (KFC Supply Qualified)"}</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 2. 태국 새우양식장 적용 및 수질 개선 (Thailand CBP Group) */}
                        <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
                          {/* 상단 헤더 바 */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-extrabold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                                  {lang === 'ko' ? '글로벌 적용 사례 · 태국' : 'Global Application · Thailand'}
                                </span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black bg-teal-100 text-teal-800 border border-teal-300">
                                  Thailand · CBP Group
                                </span>
                              </div>
                              <h5 className="text-lg sm:text-xl font-black text-slate-900 mt-1.5">
                                {lang === 'ko' 
                                  ? '태국 새우양식장 적용 및 수질 개선' 
                                  : 'Thailand Shrimp Aquaculture & Water Purification'}
                              </h5>
                              <p className="text-xs text-slate-500 font-medium mt-0.5">
                                {lang === 'ko' 
                                  ? '양어 배합사료 내 맥섬석 수준별 첨가에 따른 성장 및 수질 영양성분 분석' 
                                  : 'Growth and water nutritional analysis according to Macsumsuk addition in aquaculture feed'}
                              </p>
                            </div>

                            {/* 연구 및 공인 기관 태그 (4% 확대 적용) */}
                            <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-right self-start sm:self-center">
                              <div className="text-[12.5px] sm:text-[13px] font-black text-slate-800 tracking-tight">
                                {lang === "ko" ? "국립부경대학교 · 국립군산대학교 배승철 교수" : "Prof. Seung-Cheol Bae, Pukyong & Kunsan Nat’l Universities"}
                              </div>
                              <div className="text-[11.5px] font-bold text-slate-500 mt-0.5 flex items-center justify-end space-x-1.5">
                                <span>{lang === "ko" ? "해양바이오 신소재학과" : "Dept. of Marine Bio-Materials"}</span>
                                <span>•</span>
                                <span className="text-amber-700 font-black bg-amber-100 px-1.5 py-0.5 rounded text-[11px]">2012.2.29</span>
                                <span>{lang === "ko" ? "한국생산기술연구원" : "KITECH"}</span>
                              </div>
                            </div>
                          </div>

                          {/* 필리핀 ISDA 국제 공동 실증 협력 배너 카드 */}
                          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
                            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                              <div className="w-full md:w-[320px] lg:w-[380px] xl:w-[420px] h-[300px] sm:h-[360px] md:h-[400px] shrink-0 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm flex items-center justify-center p-2.5">
                                <img 
                                  src="/isda_mud_crab_trial.jpg" 
                                  alt="Philippines ISDA Mangrove Mud Crab Culture Using GrowFeed Aqua"
                                  className="w-full h-full object-contain block hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                                />
                              </div>
                              <div className="space-y-3.5 flex-1 w-full">
                                <div className="flex flex-wrap items-center gap-2.5">
                                  <span className="px-3 py-1 rounded-lg text-xs sm:text-sm font-black bg-teal-100 text-teal-900 border border-teal-300 shadow-2xs">
                                    {lang === 'ko' ? '국제 공인 공동 실증' : 'International Joint Study'}
                                  </span>
                                  <span className="px-3 py-1 rounded-lg text-xs sm:text-sm font-extrabold bg-indigo-100 text-indigo-950 border border-indigo-200 shadow-2xs">
                                    {lang === 'ko' ? '세계적 석학 연구진 (World-Renowned Authorities)' : 'World-Renowned Authorities'}
                                  </span>
                                </div>
                                <h6 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                                  {lang === 'ko' 
                                    ? '필리핀 ISDA(양식과 어업발전 통합서비스) 수행' 
                                    : 'Philippines ISDA (Integrated Services for Aquaculture & Fisheries) Joint Research'}
                                </h6>
                                <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200/80 space-y-0.5">
                                    <span className="text-[11px] sm:text-xs text-slate-500 font-bold block">{lang === 'ko' ? '프로젝트 팀장' : 'Project Leader'}</span>
                                    <span className="text-xs sm:text-sm text-slate-900 font-black block">{lang === "ko" ? "에밀리아 박사 (Emilia T. Quinitio, D.Sc.)" : "Emilia T. Quinitio, D.Sc."}</span>
                                    <span className="text-[11px] text-teal-700 font-bold block">{lang === 'ko' ? '세계적 갑각류 양식 권위자' : 'Renowned Crustacean Authority'}</span>
                                  </div>
                                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200/80 space-y-0.5">
                                    <span className="text-[11px] sm:text-xs text-slate-500 font-bold block">{lang === 'ko' ? '공동 제안자' : 'Co-proponents'}</span>
                                    <span className="text-xs sm:text-sm text-slate-900 font-black block">{lang === "ko" ? "에스테파 박사 (Fe D. P. Estepa, Ph.D.), 로드리고 (Rodrigo Lacierda, M.Aq.)" : "Fe D. P. Estepa, Ph.D., Rodrigo Lacierda, M.Aq."}</span>
                                    <span className="text-[11px] text-teal-700 font-bold block">{lang === 'ko' ? '국제 공인 수산 석학 연구진' : 'Distinguished International Scientists'}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 시험 대상 직접 사진 영역 */}
                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center space-x-1.5">
                              <Fish className="w-4 h-4 text-teal-600" />
                              <span>{lang === 'ko' ? '실제 시험 대상 어종 및 갑각류 사진' : 'Target Species Tested (Live Photographs)'}</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                                <img 
                                  src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=800&auto=format&fit=crop" 
                                  alt={lang === "ko" ? "틸라피아" : "Tilapia"} 
                                  className="w-16 h-16 rounded-lg object-cover border border-slate-200 shrink-0"
                                  referrerPolicy="no-referrer"
                                />
                                <div>
                                  <div className="text-sm font-black text-slate-900">{lang === "ko" ? "틸라피아 (Tilapia)" : "Tilapia"}</div>
                                  <p className="text-xs text-slate-500 mt-0.5">
                                    {lang === 'ko' ? '담수·기수 고밀도 양식 어종 사양' : 'Freshwater dense aquaculture species'}
                                  </p>
                                  <span className="inline-block mt-1 text-[10.5px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Growfeed 0.25g/L
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                                <img 
                                  src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800&auto=format&fit=crop" 
                                  alt={lang === "ko" ? "흰다리새우" : "Whiteleg Shrimp"} 
                                  className="w-16 h-16 rounded-lg object-cover border border-slate-200 shrink-0"
                                  referrerPolicy="no-referrer"
                                />
                                <div>
                                  <div className="text-sm font-black text-slate-900">{lang === "ko" ? "흰다리새우 (Whiteleg Shrimp)" : "Whiteleg Shrimp"}</div>
                                  <p className="text-xs text-slate-500 mt-0.5">
                                    {lang === 'ko' ? '태국 CBP 그룹 주력 양식 새우' : 'Thailand CBP Group commercial shrimp'}
                                  </p>
                                  <span className="inline-block mt-1 text-[10.5px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                                    Growfeed 0.5g/L
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 2대 핵심 실증 그래프 및 암모니아 저감 */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {/* 기간별 생존율 그래프 */}
                            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                <span className="text-xs sm:text-sm font-bold text-slate-900">
                                  {lang === "ko" ? "기간별 생존율 (Survival Rate)" : "Survival Rate by Period"}
                                </span>
                                <span className="text-[11px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                  {lang === "ko" ? "4일간 80%+ 유지" : "80%+ Maintained (4 Days)"}
                                </span>
                              </div>

                              <div className="space-y-3 text-xs">
                                <div className="space-y-1">
                                  <div className="flex justify-between font-bold text-slate-800">
                                    <span>{lang === 'ko' ? '그로피드 (0.25~0.5g/L)' : 'Growfeed (0.25~0.5g/L)'}</span>
                                    <span className="text-teal-700 font-black">{lang === "ko" ? "80% ~ 85% 유지" : "80% ~ 85% Maintained"}</span>
                                  </div>
                                  <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
                                    <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full w-[84%]"></div>
                                  </div>
                                </div>

                                <div className="space-y-1 pt-1.5 border-t border-slate-100">
                                  <div className="flex justify-between font-bold text-slate-600">
                                    <span>{lang === "ko" ? "대조군 (Control)" : "Control Group"}</span>
                                    <span className="text-rose-600 font-black">20% ~ 28%</span>
                                  </div>
                                  <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
                                    <div className="h-full bg-slate-300 rounded-full w-[24%]"></div>
                                  </div>
                                </div>
                              </div>
                              <p className="text-[11px] text-slate-500 pt-1">
                                {lang === "ko" ? "* 사육 4일 경과 시 대조군은 폐사율이 70%를 초과한 반면, 그로피드 투여군은 80% 이상의 높은 생존율을 유지함" : "* After 4 days of rearing, control mortality exceeded 70%, whereas the Growfeed group maintained over 80% high survival rate."}
                              </p>
                            </div>

                            {/* 수조내 암모니아 감소효과 */}
                            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                                <span className="text-xs sm:text-sm font-bold text-slate-900">
                                  {lang === "ko" ? "수조내 암모니아 감소효과 (Ammonia Reduction)" : "Tank Ammonia Reduction"}
                                </span>
                                <span className="text-[11px] font-black text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                                  {lang === "ko" ? "50% 이상 감소" : "50%+ Reduction"}
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-3 pt-1">
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                                  <span className="text-[11px] text-slate-500 font-bold block">{lang === "ko" ? "대조군 수조 (Control)" : "Control Tank"}</span>
                                  <div className="text-xl font-black text-rose-600 my-0.5">100 PPM</div>
                                  <span className="text-[10px] text-slate-400">{lang === "ko" ? "암모니아 급증" : "Ammonia Surge"}</span>
                                </div>
                                <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-center">
                                  <span className="text-[11px] text-teal-800 font-bold block">{lang === 'ko' ? '그로피드 수조' : 'Growfeed Tank'}</span>
                                  <div className="text-xl font-black text-teal-700 my-0.5">25 PPM</div>
                                  <span className="text-[10px] text-teal-700 font-bold">{lang === "ko" ? "50% 이상 신속 흡착" : "50%+ Rapid Adsorption"}</span>
                                </div>
                              </div>
                              <p className="text-[11px] text-slate-500 pt-1">
                                {lang === "ko" ? "* 사육수 내 유독성 암모니아 및 아질산 축적을 50% 이상 억제하여 수질 악화 방지 및 환수 주기 연장" : "* Suppresses toxic ammonia and nitrite accumulation by over 50%, preventing water degradation and extending water exchange cycles."}
                              </p>
                            </div>
                          </div>

                          {/* 슬라이드 원문 네이비 결과 요약 카드 */}
                          <div className="p-4 sm:p-5 rounded-xl bg-[#1a365d] text-white space-y-2.5">
                            <div className="text-[15px] sm:text-[17.2px] font-black text-sky-300 pb-1.5 border-b border-sky-800/80 tracking-tight">
                              {lang === 'ko' ? '그로피드 첨가 후 시험결과' : 'Test Results After Growfeed Addition'}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[12.84px] sm:text-[13.5px] font-bold text-slate-100">
                              <div className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                <span>{lang === "ko" ? "출하 시까지 성장을 1.5배 향상" : "1.5x accelerated growth until market harvest"}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                <span>{lang === "ko" ? "면역력 향상으로 폐사율 감소" : "Enhanced immunity & significantly reduced mortality"}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                                <span>{lang === "ko" ? "개체 크기 대비 평균 중량 증가" : "Higher average body weight relative to individual size"}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 그로피드 (Growfeed) 해외 젖소 농장 현장 적용 사례 (말레이시아 & 방글라데시) */}
                    {prod.id === 'dcm' && (
                      <div className="space-y-8 pt-6 border-t border-slate-200">
                        {/* 1. 상단 섹션 메인 헤더 */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-xl bg-teal-100 text-teal-800">
                              <Globe2 className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                                  {lang === 'ko' ? '해외 농장 현장 적용 성과' : 'Global Farm Field Verification'}
                                </span>
                              </div>
                              <h4 className="text-base sm:text-xl font-black text-slate-950 mt-0.5">
                                {lang === 'ko' 
                                  ? '그로피드 해외 젖소 농장 현장 적용 사례' 
                                  : 'Growfeed Global Dairy Farm Field Application Case Studies'}
                              </h4>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200 self-start sm:self-center">
                            {lang === 'ko' ? '100두 이상 젖소 농장 현장 검증' : '100+ Head Dairy Farms Verified'}
                          </span>
                        </div>

                        {/* 2. 말레이시아 젖소 농장 적용 사례 (23페이지) */}
                        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs space-y-5">
                          {/* 헤더 바 */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                            <div>
                              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-1">
                                <span>{lang === 'ko' ? '해외 적용 사례' : 'Overseas Application Case'}</span>
                                <span>•</span>
                                <span className="font-bold text-teal-700">Malaysia</span>
                              </div>
                              <h5 className="text-lg sm:text-xl font-black text-slate-950">
                                <span>{lang === 'ko' ? '말레이시아 젖소 농장 적용 사례' : 'Malaysia Dairy Farm Application Case'}</span>
                              </h5>
                              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                                {lang === 'ko' 
                                  ? '100두 이상 규모 젖소 농장 — Growfeed 급여 후 현장 확인 결과' 
                                  : '100+ Head Dairy Farm Scale — Field Observation Results After Growfeed Supplementation'}
                              </p>
                            </div>
                            <span className="text-[13.54px] sm:text-[15.23px] font-black text-teal-900 bg-teal-100 px-[16.9px] py-[8.46px] rounded-xl border-2 border-teal-400 shadow-sm self-start sm:self-center tracking-wide whitespace-nowrap">
                              {lang === 'ko' ? '현장 확인 완료' : 'Field Verified'}
                            </span>
                          </div>

                          {/* 실제 사진 기반 말레이시아 젖소 현장 실증 프레임 (밝고 통일감 있는 실증 결과 레이아웃) */}
                          <div className="bg-slate-50/90 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
                            <div className="text-xs text-slate-500 pb-2.5 border-b border-slate-200/80 flex items-center justify-between">
                              <span className="font-bold text-slate-800 flex items-center gap-1.5 text-[12.84px] sm:text-[13.91px]">
                                <CheckCircle2 className="w-[17.12px] h-[17.12px] text-teal-600 shrink-0" />
                                {lang === 'ko' ? '말레이시아 젖소 농장 현장 실증 결과 (Field Results)' : 'Malaysia Dairy Farm Field Inspection Results'}
                              </span>
                              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                                {lang === 'ko' ? '사육 시험 성과' : 'Trial Outcomes'}
                              </span>
                            </div>

                            {/* 좌우 사진 실증 결과 그리드 (풍부한 컬러와 통일된 성과 디자인 적용) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                              {/* 실증사진 01 - 유방염 감소 및 발정주기 (Sky/Teal 컬러 테마) */}
                              <div className="bg-gradient-to-br from-sky-50/90 via-teal-50/50 to-white rounded-2xl p-3.5 sm:p-5 border-2 border-sky-300/80 shadow-xs hover:border-sky-400 hover:shadow-md transition-all flex flex-col space-y-3.5">
                                <div className="relative rounded-xl overflow-hidden border-2 border-sky-200 bg-slate-100 aspect-[16/9] flex items-center justify-center shadow-2xs">
                                  <img 
                                    src="/malaysia_dairy_1.png" 
                                    alt={lang === 'ko' ? '말레이시아 젖소 농장 현장 확인 사진' : 'Malaysia Dairy Farm Field Inspection'}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-sky-950/85 backdrop-blur-xs text-[11px] font-extrabold text-sky-100 border border-sky-400/40 shadow-xs">
                                    {lang === 'ko' ? '현장 실증사진 01' : 'Field Photo 01'}
                                  </div>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl bg-sky-100/70 border border-sky-200 text-[13px] text-slate-900 font-semibold leading-relaxed shadow-2xs">
                                  {lang === 'ko' 
                                    ? '• 100두이상의 젖소농장에서의 사육시험에서 유방염이 감소하고 발정주기가 일정한 결과를 얻음' 
                                    : '• In feeding trials on dairy farms with over 100 head, mastitis decreased and estrus cycles became regular.'}
                                </div>

                                <div className="text-center pt-1 mt-auto">
                                  <span className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-black bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-xs tracking-wide">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-sky-200" />
                                    {lang === 'ko' ? '유방염 감소 및 발정주기 안정' : 'Mastitis Reduction & Regular Estrus'}
                                  </span>
                                </div>
                              </div>

                              {/* 실증사진 02 - 고온스트레스 극복 (Teal/Emerald 컬러 테마) */}
                              <div className="bg-gradient-to-br from-teal-50/90 via-emerald-50/50 to-white rounded-2xl p-3.5 sm:p-5 border-2 border-teal-300/80 shadow-xs hover:border-teal-400 hover:shadow-md transition-all flex flex-col space-y-3.5">
                                <div className="relative rounded-xl overflow-hidden border-2 border-teal-200 bg-slate-100 aspect-[16/9] flex items-center justify-center shadow-2xs">
                                  <img 
                                    src="/malaysia_dairy_2.png" 
                                    alt={lang === 'ko' ? '말레이시아 젖소 고온스트레스 유량 회복 현장 사진' : 'Malaysia Dairy Heat Stress Recovery'}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-teal-950/85 backdrop-blur-xs text-[11px] font-extrabold text-teal-100 border border-teal-400/40 shadow-xs">
                                    {lang === 'ko' ? '현장 실증사진 02' : 'Field Photo 02'}
                                  </div>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl bg-teal-100/70 border border-teal-200 text-[13px] text-slate-900 font-semibold leading-relaxed shadow-2xs">
                                  {lang === 'ko' 
                                    ? '• 그로피드를 급여후 고온스트레스로 유량감소 젖소가 회복되는 결과를 얻음' 
                                    : '• Following Growfeed supplementation, dairy cows experiencing milk yield drop due to heat stress achieved full recovery.'}
                                </div>

                                <div className="text-center pt-1 mt-auto">
                                  <span className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-black bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xs tracking-wide">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-200" />
                                    {lang === 'ko' ? '고온스트레스 유량 감소 젖소 회복' : 'Heat Stress Milk Yield Recovery'}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* 실증 원문 강조 배너 */}
                            <div className="mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-teal-50 via-teal-100/60 to-teal-50 border border-teal-200 text-center">
                              <span className="text-[12.72px] sm:text-[14.84px] font-bold text-teal-900 tracking-wide flex items-center justify-center gap-1.5">
                                <CheckCircle2 className="w-[16.96px] h-[16.96px] text-teal-600 shrink-0" />
                                {lang === 'ko' 
                                  ? '100두 이상 젖소 농장 사육시험: 유방염 감소, 발정주기 안정 및 고온 스트레스 극복 확인' 
                                  : '100+ Head Dairy Trial: Mastitis Reduction, Estrus Regularity & Heat Stress Recovery'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 3. 방글라데시 농장 적용 사례 (25페이지) */}
                        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs space-y-5">
                          {/* 헤더 바 */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                            <div>
                              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 mb-1">
                                <span>{lang === 'ko' ? '해외 적용 사례' : 'Overseas Application Case'}</span>
                                <span>•</span>
                                <span className="font-bold text-emerald-700">Bangladesh</span>
                              </div>
                              <h5 className="text-lg sm:text-xl font-black text-slate-950">
                                <span>{lang === 'ko' ? '방글라데시 농장 적용 사례' : 'Bangladesh Farm Application Case'}</span>
                              </h5>
                              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                                {lang === 'ko' 
                                  ? '100두 이상 규모 젖소 농장 — Growfeed 급여 후 현장 확인 결과' 
                                  : '100+ Head Dairy Farm Scale — Field Observation Results After Growfeed Supplementation'}
                              </p>
                            </div>
                            <span className="text-[13.54px] sm:text-[15.23px] font-black text-emerald-900 bg-emerald-100 px-[16.9px] py-[8.46px] rounded-xl border-2 border-emerald-400 shadow-sm self-start sm:self-center tracking-wide whitespace-nowrap">
                              {lang === 'ko' ? '현장 확인 완료' : 'Field Verified'}
                            </span>
                          </div>

                          {/* 실제 사진 기반 방글라데시 현장 실증 프레임 (밝고 통일감 있는 실증 결과 레이아웃) */}
                          <div className="bg-slate-50/90 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs space-y-4">
                            <div className="text-xs text-slate-500 pb-2.5 border-b border-slate-200/80 flex items-center justify-between">
                              <span className="font-bold text-slate-800 flex items-center gap-1.5 text-[12.84px] sm:text-[13.91px]">
                                <CheckCircle2 className="w-[17.12px] h-[17.12px] text-emerald-600 shrink-0" />
                                {lang === 'ko' ? '방글라데시 농장 현장 실증 결과 (Field Results)' : 'Bangladesh Farm Field Inspection Results'}
                              </span>
                              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                {lang === 'ko' ? '사육 시험 성과' : 'Trial Outcomes'}
                              </span>
                            </div>

                            {/* 좌우 사진 실증 결과 그리드 (상단 말레이시아 젖소 실증 디자인과 동일한 통일 스타일 적용) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                              {/* 실증사진 01 - 탈수 회복 (Sky/Teal 컬러 테마) */}
                              <div className="bg-gradient-to-br from-sky-50/90 via-teal-50/50 to-white rounded-2xl p-3.5 sm:p-5 border-2 border-sky-300/80 shadow-xs hover:border-sky-400 hover:shadow-md transition-all flex flex-col space-y-3.5">
                                <div className="relative rounded-xl overflow-hidden border-2 border-sky-200 bg-slate-100 aspect-[16/9] flex items-center justify-center shadow-2xs">
                                  <img 
                                    src="/bangladesh_farm_1.png" 
                                    alt={lang === 'ko' ? '방글라데시 설사 탈수증상 회복 현장 사진' : 'Bangladesh Dehydration Recovery'}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-sky-950/85 backdrop-blur-xs text-[11px] font-extrabold text-sky-100 border border-sky-400/40 shadow-xs">
                                    {lang === 'ko' ? '현장 실증사진 01' : 'Field Photo 01'}
                                  </div>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl bg-sky-100/70 border border-sky-200 text-[13px] text-slate-900 font-semibold leading-relaxed shadow-2xs">
                                  {lang === 'ko' 
                                    ? '• 설사로 인한 탈수증상 있는 소에게 그로피드를 급여한 후 탈수증상이 회복됨' 
                                    : '• Cattle showing dehydration symptoms due to diarrhea recovered completely after Growfeed supplementation.'}
                                </div>

                                <div className="text-center pt-1 mt-auto">
                                  <span className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-black bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-xs tracking-wide">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-sky-200" />
                                    {lang === 'ko' ? '설사 탈수증상 소 완치 및 회복' : 'Diarrhea & Dehydration Recovery'}
                                  </span>
                                </div>
                              </div>

                              {/* 실증사진 02 - 유량 증가 (Teal/Emerald 컬러 테마) */}
                              <div className="bg-gradient-to-br from-teal-50/90 via-emerald-50/50 to-white rounded-2xl p-3.5 sm:p-5 border-2 border-teal-300/80 shadow-xs hover:border-teal-400 hover:shadow-md transition-all flex flex-col space-y-3.5">
                                <div className="relative rounded-xl overflow-hidden border-2 border-teal-200 bg-slate-100 aspect-[16/9] flex items-center justify-center shadow-2xs">
                                  <img 
                                    src="/bangladesh_farm_2.png" 
                                    alt={lang === 'ko' ? '방글라데시 유량 증가 현장 사진' : 'Bangladesh Milk Yield Increase'}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-teal-950/85 backdrop-blur-xs text-[11px] font-extrabold text-teal-100 border border-teal-400/40 shadow-xs">
                                    {lang === 'ko' ? '현장 실증사진 02' : 'Field Photo 02'}
                                  </div>
                                </div>

                                <div className="p-3 sm:p-3.5 rounded-xl bg-teal-100/70 border border-teal-200 text-[13px] text-slate-900 font-semibold leading-relaxed shadow-2xs">
                                  {lang === 'ko' 
                                    ? '• 그로피드를 급여 후 유량 증가' 
                                    : '• Milk yield increased significantly following Growfeed supplementation.'}
                                </div>

                                <div className="text-center pt-1 mt-auto">
                                  <span className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs sm:text-[13px] font-black bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xs tracking-wide">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-200" />
                                    {lang === 'ko' ? '착유우 유량 증가 확인' : 'Dairy Cow Milk Yield Increase'}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* 실증 원문 강조 배너 */}
                            <div className="mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-50 via-emerald-100/60 to-emerald-50 border border-emerald-200 text-center">
                              <span className="text-[12.72px] sm:text-[14.84px] font-bold text-emerald-900 tracking-wide flex items-center justify-center gap-1.5">
                                <CheckCircle2 className="w-[16.96px] h-[16.96px] text-emerald-600 shrink-0" />
                                {lang === 'ko' 
                                  ? '현장 사육 검증: 설사로 인한 탈수 소 완치 회복 및 착유우 산유량(유량) 증가' 
                                  : 'Field Trial Verified: Full Dehydration Recovery & Significant Dairy Milk Yield Increase'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 치유계란® 전용 상세 분석 섹션 (데이터 기반 품질 영양 & 가치사슬 운영 모델) */}
                    {prod.id === 'healing-egg' && (
                      <div className="space-y-8 pt-6 border-t border-amber-200/80">
                        {/* 1. 공인 시험기관 데이터 기반 품질 및 영양 차별화 분석 */}
                        <div className="space-y-4">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-amber-200">
                            <div className="flex items-center space-x-2.5">
                              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                                <Egg className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-base sm:text-lg font-black text-slate-950 flex items-center gap-2">
                                  <span>{lang === 'ko' ? '데이터 기반 품질 및 영양 차별화 분석' : 'Data-Driven Nutritional & Quality Differentiation'}</span>
                                </h4>
                                <p className="text-xs text-slate-500 font-medium">
                                  {lang === 'ko' ? '한국품질시험원 · 한국식품연구원 · 충남대학교 농과원 공인 시험성적서 기반' : 'Based on official test reports from state-accredited institutes'}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300 self-start sm:self-center">
                              {lang === 'ko' ? '분석 근거 사본 완비' : 'Official Reports On File'}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                            {lang === 'ko'
                              ? '맥섬석 그로피드 전용 사료 급여를 통해 입증된 객관적 품질 지표를 바탕으로 상품 가치를 극대화하고 프리미엄 브랜드 유통을 추진합니다.'
                              : 'Maximizing product market value and driving premium retail distribution through verified objective quality metrics.'}
                          </p>

                          {/* 5대 지표 비교표 */}
                          <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-xs bg-white">
                            <table className="w-full text-left text-xs sm:text-sm">
                              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                                <tr>
                                  <th className="py-3 px-3 sm:px-4">{lang === 'ko' ? '차별화 지표' : 'Indicator'}</th>
                                  <th className="py-3 px-3 sm:px-4 text-center">{lang === 'ko' ? '일반 계란' : 'Standard Egg'}</th>
                                  <th className="py-3 px-3 sm:px-4 text-center bg-amber-50 text-amber-950 font-black">{lang === 'ko' ? '프리미엄 계란(치유계란®)' : 'Healing Egg®'}</th>
                                  <th className="py-3 px-3 sm:px-4 text-center text-emerald-800 font-black">{lang === 'ko' ? '개선 효과 (Diff)' : 'Improvement'}</th>
                                  <th className="py-3 px-3 sm:px-4">{lang === 'ko' ? '공인 분석 근거' : 'Official Authority'}</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 font-normal">
                                <tr className="hover:bg-amber-50/40 transition-colors">
                                  <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900 flex items-center space-x-2.5">
                                    <Brain className="w-4 h-4 text-purple-600 shrink-0" />
                                    <div>
                                      <div className="text-xs sm:text-sm font-black">{lang === 'ko' ? '콜린 (Choline)' : 'Choline'}</div>
                                      <span className="text-[11px] text-slate-500 font-normal">{lang === 'ko' ? '두뇌 신경전달물질 및 간 해독 핵심 영양소' : 'Brain neurotransmitter & liver metabolism'}</span>
                                    </div>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center text-slate-600 font-medium">125.6</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center font-black text-amber-900 bg-amber-50/60 text-sm sm:text-base">322.0</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
                                      {lang === 'ko' ? '약 2.6배 증가' : '~2.6x Increase'}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-bold">{lang === 'ko' ? '한국품질시험원' : 'Korea Quality Testing Inst.'}</td>
                                </tr>

                                <tr className="hover:bg-amber-50/40 transition-colors">
                                  <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900 flex items-center space-x-2.5">
                                    <Heart className="w-4 h-4 text-rose-600 shrink-0" />
                                    <div>
                                      <div className="text-xs sm:text-sm font-black">{lang === 'ko' ? '오메가-3 (Omega-3)' : 'Omega-3'}</div>
                                      <span className="text-[11px] text-slate-500 font-normal">{lang === 'ko' ? '혈중 중성지질 및 심혈관 혈행 건강' : 'Cardiovascular & lipid circulation'}</span>
                                    </div>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center text-slate-600 font-medium">135.7 mg/100g</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center font-black text-amber-900 bg-amber-50/60 text-sm sm:text-base">223.3 mg/100g</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
                                      {lang === 'ko' ? '약 65% 증가' : '+65% Increase'}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-bold">{lang === 'ko' ? '한국식품연구원' : 'Korea Food Research Inst.'}</td>
                                </tr>

                                <tr className="hover:bg-amber-50/40 transition-colors">
                                  <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900 flex items-center space-x-2.5">
                                    <Eye className="w-4 h-4 text-sky-600 shrink-0" />
                                    <div>
                                      <div className="text-xs sm:text-sm font-black">{lang === 'ko' ? '루테인 (Lutein)' : 'Lutein'}</div>
                                      <span className="text-[11px] text-slate-500 font-normal">{lang === 'ko' ? '황반 색소 밀도 유지 및 시력 보호 영양소' : 'Macular pigment & eye protection'}</span>
                                    </div>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center text-slate-600 font-medium">1.2 mg/100g</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center font-black text-amber-900 bg-amber-50/60 text-sm sm:text-base">2.1 mg/100g</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
                                      {lang === 'ko' ? '약 75% 증가' : '+75% Increase'}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-bold">{lang === 'ko' ? '한국식품연구원' : 'Korea Food Research Inst.'}</td>
                                </tr>

                                <tr className="hover:bg-amber-50/40 transition-colors">
                                  <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900 flex items-center space-x-2.5">
                                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                                    <div>
                                      <div className="text-xs sm:text-sm font-black">{lang === 'ko' ? '난각 강도 (Eggshell Strength)' : 'Shell Strength'}</div>
                                      <span className="text-[11px] text-slate-500 font-normal">{lang === 'ko' ? '유통 중 깨짐(파란율) 방지 및 장기 신선도' : 'Breakage reduction & freshness preservation'}</span>
                                    </div>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center text-slate-600 font-medium">2.83</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center font-black text-amber-900 bg-amber-50/60 text-sm sm:text-base">4.18</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
                                      {lang === 'ko' ? '약 48% 증가' : '+48% Stronger'}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-bold">{lang === 'ko' ? '충남대학교 농과원' : 'Chungnam Nat’l Univ'}</td>
                                </tr>

                                <tr className="hover:bg-amber-50/40 transition-colors">
                                  <td className="py-3.5 px-3 sm:px-4 font-bold text-slate-900 flex items-center space-x-2.5">
                                    <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                                    <div>
                                      <div className="text-xs sm:text-sm font-black">{lang === 'ko' ? '난황 크기 (Yolk Size & Volume)' : 'Yolk Size & Elasticity'}</div>
                                      <span className="text-[11px] text-slate-500 font-normal">{lang === 'ko' ? '고탄력 볼륨, 핀셋으로 집어도 터지지 않는 탄성' : 'Plump yolk volume & high membrane resilience'}</span>
                                    </div>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center text-slate-600 font-medium">9.52</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center font-black text-amber-900 bg-amber-50/60 text-sm sm:text-base">12.03</td>
                                  <td className="py-3.5 px-3 sm:px-4 text-center">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs">
                                      {lang === 'ko' ? '약 26% 증가' : '+26% Bigger'}
                                    </span>
                                  </td>
                                  <td className="py-3.5 px-3 sm:px-4 text-slate-800 font-bold">{lang === 'ko' ? '충남대학교 농과원' : 'Chungnam Nat’l Univ'}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* 현장 실증 및 (사)대한산란계협회 안두영 회장 품질 시연 */}
                        <div className="space-y-4 pt-4 border-t border-slate-200">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-amber-200">
                            <div className="flex items-center space-x-2.5">
                              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-900">
                                <Users className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-base sm:text-lg font-black text-slate-950 flex items-center gap-2">
                                  <span>{lang === 'ko' ? '현장 실증 및 (사)대한산란계협회 안두영 회장 품질 시연' : 'Field Validation & Korea Layer Association Demonstration'}</span>
                                </h4>
                                <p className="text-xs text-slate-500 font-medium">
                                  {lang === 'ko' ? '거성농장 2024년부터 지속 급여 중 및 대구국제축산박람회 공개 시연' : 'Continuous feeding at Geoseong Farm since 2024 & Public KISTOCK Demo'}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-amber-900 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300 self-start sm:self-center">
                              {lang === 'ko' ? '2024년부터 지속 급여' : 'Fed Since 2024'}
                            </span>
                          </div>

                          <div className="w-full">
                            {/* 대한산란계협회 안두영 회장 시연 내용 */}
                            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-50/90 to-amber-100/40 border border-amber-300 space-y-3 flex flex-col justify-between shadow-xs">
                              <div className="space-y-2.5">
                                <div className="flex items-center space-x-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600 shrink-0"></span>
                                  <h5 className="text-sm sm:text-base font-black text-slate-950">
                                    {lang === 'ko' ? '(사)대한산란계협회 안두영 회장 (거성농장) 현장 시연' : 'Korea Layer Association Chairman Farm Demonstration'}
                                  </h5>
                                </div>
                                <blockquote className="p-4 rounded-xl bg-white border border-amber-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium italic shadow-2xs">
                                  {lang === 'ko'
                                    ? '“대구국제축산박람회 부스에서 산란계 적용 효과를 직접 소개했습니다. 그로피드 적용 후 노른자(난황)가 탄탄해져 손이나 핀셋으로 집어도 쉽게 터지지 않을 만큼 탄력이 뛰어나고, 계란 특유의 비린내가 현저히 덜하며 축사 내 악취가 대폭 감소했습니다.”'
                                    : '“At the KISTOCK EXCO booth, I personally presented the results of feeding Growfeed: yolk elasticity increased dramatically so it does not burst when pinched, the characteristic egg odor virtually disappeared, and barn odor dropped remarkably.”'}
                                </blockquote>
                              </div>

                              <div className="pt-3 border-t border-amber-200/80 flex items-center justify-between text-xs text-amber-950 font-bold">
                                <span>{lang === 'ko' ? '거성농장 지속 실증 사육' : 'Geoseong Farm Live Trial'}</span>
                                <span className="px-2.5 py-1 rounded bg-amber-600 text-white text-xs font-bold">
                                  {lang === 'ko' ? '2024년 ~ 현재 사용 중' : '2024 ~ Present'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. R&D / TECHNOLOGY (모든 R&D 항목 순차 나열) */}
        {/* ========================================================================= */}
        {categoryKey === 'rnd' && (
          <div className="space-y-12">
            {/* Section 1: 저메탄 기술 및 대학 공인 시험 성적 */}
            <section id="methane-trials" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Microscope className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 저메탄 기술 및 효능 공인 시험 성적' : '1. Low-Methane Efficacy & Clinical Trials'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-8">
                
                {/* 산학협력 연구기관 로고 및 책임 교수진 */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-base sm:text-lg font-black text-slate-900">
                        {lang === 'ko' ? '국내외 주요 대학 및 국책 연구기관 산학협력 연구진' : 'Academic Research Faculty & Joint Trial Network'}
                      </h3>
                    </div>
                    <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-xs">
                      {lang === 'ko' ? '공인 검증 완료' : 'Officially Validated'}
                    </span>
                  </div>

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

                {/* 대학 공인 시험 성적 데이터 상세 */}
                <div className="space-y-5 pt-2">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-2.5">
                    <Microscope className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      {lang === 'ko' ? '공인 시험 성적 데이터' : 'Official Trial Performance Data'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    {EVIDENCE_DATA.map((ev) => {
                      // 항목별 테마 색상 및 뱃지 설정
                      const themeConfig = {
                        'methane-trial-2': {
                          cardBorder: 'border-emerald-300',
                          cardBg: 'bg-gradient-to-br from-white to-emerald-50/30',
                          titleColor: 'text-slate-900 font-black',
                          badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
                          highlightBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                          badgeLabelKo: '메탄 저감 실증',
                          badgeLabelEn: 'Methane Reduction'
                        },
                        'toxin-trial-cnu': {
                          cardBorder: 'border-sky-300',
                          cardBg: 'bg-gradient-to-br from-white to-sky-50/30',
                          titleColor: 'text-slate-900 font-black',
                          badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
                          highlightBg: 'bg-sky-50 text-sky-800 border-sky-200',
                          badgeLabelKo: '곰팡이독소 공인 흡착',
                          badgeLabelEn: 'Mycotoxin Binding'
                        },
                        'clsu-poultry-trial': {
                          cardBorder: 'border-teal-300',
                          cardBg: 'bg-gradient-to-br from-white to-teal-50/30',
                          titleColor: 'text-slate-900 font-black',
                          badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
                          highlightBg: 'bg-teal-50 text-teal-800 border-teal-200',
                          badgeLabelKo: '육계 300수 사양시험',
                          badgeLabelEn: 'Broiler 300 Trial'
                        }
                      }[ev.id] || {
                        cardBorder: 'border-slate-300',
                        cardBg: 'bg-white',
                        titleColor: 'text-slate-900 font-black',
                        badgeBg: 'bg-slate-100 text-slate-900 border-slate-300',
                        highlightBg: 'bg-slate-50 text-emerald-800 border-slate-200',
                        badgeLabelKo: '공인 성적',
                        badgeLabelEn: 'Official'
                      };

                      return (
                        <div key={ev.id} className={`p-5 sm:p-6 rounded-2xl ${themeConfig.cardBg} border-2 ${themeConfig.cardBorder} space-y-3.5 shadow-xs`}>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                            <div className="space-y-1.5 flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className={`text-xs font-black px-2.5 py-0.5 rounded-md border ${themeConfig.badgeBg}`}>
                                  {lang === 'ko' ? themeConfig.badgeLabelKo : themeConfig.badgeLabelEn}
                                </span>
                              </div>
                              <h3 className={`text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug`}>
                                {lang === 'ko' ? ev.titleKo : ev.titleEn}
                              </h3>
                            </div>
                            <div className={`self-start sm:self-auto px-3.5 py-1.5 rounded-xl border ${themeConfig.highlightBg} flex items-center space-x-1.5 shadow-2xs shrink-0`}>
                              <span className="text-lg sm:text-xl font-black text-emerald-800 tabular-nums">
                                <AnimatedCounter end={lang === 'ko' ? ev.highlightNumber : (ev.highlightNumberEn || ev.highlightNumber.replace(/배$/, '-Fold'))} />
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-emerald-900">
                                {lang === 'ko' ? ev.highlightUnit : (ev.highlightUnitEn || ev.highlightUnit)}
                              </span>
                            </div>
                          </div>

                          <div className="text-xs sm:text-sm text-slate-700 font-bold flex items-center space-x-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/80">
                            <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{lang === 'ko' ? ev.institutionKo : ev.institutionEn} ({lang === 'ko' ? ev.date : (ev.dateEn || ev.date)})</span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                            {lang === 'ko' ? ev.summaryKo : ev.summaryEn}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm">
                            {ev.metrics.map((m, idx) => (
                              <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center shadow-2xs">
                                <span className="text-slate-700 font-semibold">{lang === 'ko' ? m.label : (m.labelEn || m.label)}</span>
                                <span className="font-extrabold text-slate-950">{lang === 'ko' ? m.value : (m.valueEn || m.value)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </section>

            {/* Section 2: 맥섬석 원적외선 고방사 기술 */}
            <section id="mineral-tech" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <FlaskConical className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 맥섬석(麥閃石) 원적외선 고방사 기술 원리' : '2. Far-Infrared Wellion Ray Mineral Technology'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {lang === 'ko'
                    ? '세계적 희귀 광물인 맥섬석은 8~11μm 파장대의 인체·가축 유익 원적외선(Wellion Ray)을 90% 이상 고방사하는 천연 점토광물입니다. 한국표준과학연구원(KRISS) 공인 인증을 획득하였으며, 세포 분자 진동을 유도하여 혈류를 개선하고 유해 미생물 억제 및 사료 소화율을 극대화합니다.'
                    : 'Macsumsuk is a globally rare natural phyllosilicate mineral that emits over 90% bio-beneficial 8-11μm far-infrared resonance rays (Wellion Rays). Certified by KRISS (Korea Research Institute of Standards and Science), it induces cellular rotational vibration to boost blood micro-circulation, suppress pathogens, and optimize nutrient digestion.'}
                </p>

                {/* 맥섬석 원적외선 기술 원리 및 3차원 세라믹 구조 */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6 overflow-hidden space-y-4 shadow-xs">
                  <div className="flex items-center space-x-2 pb-3 border-b border-slate-200">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
                      {lang === 'ko' ? '원적외선 방사 원리 및 과립형 규산염제 메커니즘' : 'FIR Resonance Principle & Granular Silicate Mechanism'}
                    </h4>
                  </div>

                  <div className="relative">
                    {/* 데스크톱 중앙 좌->우 변형 프로세스 은은한 배지 */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
                      <motion.div 
                        initial={{ opacity: 0.95 }}
                        animate={{ 
                          x: [0, 2, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="flex items-center space-x-2.5 bg-white/95 backdrop-blur-xs text-slate-800 px-3.5 py-2 rounded-full border border-emerald-300 shadow-md"
                      >
                        <div className="flex flex-col items-center text-center leading-tight">
                          <span className="text-xs font-extrabold text-slate-900 tracking-tight">
                            {lang === 'ko' ? '소성공정' : 'Calcination'}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-700">
                            {lang === 'ko' ? '(Calcination)' : '(Process)'}
                          </span>
                        </div>
                        
                        <motion.div
                          animate={{ x: [0, 3, 0], opacity: [0.7, 1, 0.7] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-4 h-4 text-emerald-600" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                      {/* 카드 1: 원적외선 방사 기본 원리 */}
                      <div className="rounded-xl bg-white border border-slate-200 p-4 sm:p-5 flex flex-col justify-between space-y-3 relative group hover:border-slate-300 transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-slate-900">
                            {lang === 'ko' ? '원적외선 방사 기본 메커니즘' : 'Base FIR Radiation Mechanism'}
                          </span>
                          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                            {lang === 'ko' ? '한국표준과학연구원(KRISS) 방사율 측정' : 'KRISS Measured'}
                          </span>
                        </div>
                        <div className="flex items-center justify-center p-2 bg-slate-50/60 rounded-lg min-h-[285px]">
                          <img
                            src="https://lh3.googleusercontent.com/d/1JNeNWGUuumr_HjQBjyUzJQVfS4Ajowvt"
                            alt={lang === 'ko' ? '맥섬석 원적외선 기본 방사 원리' : 'Macsumsuk FIR Principle'}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.src = 'https://drive.google.com/uc?export=view&id=1JNeNWGUuumr_HjQBjyUzJQVfS4Ajowvt';
                            }}
                            className="max-h-[285px] w-auto max-w-full object-contain"
                          />
                        </div>
                      </div>

                      {/* 모바일 세로 변형 은은한 배지 */}
                      <div className="flex lg:hidden justify-center items-center py-1">
                        <div className="flex items-center space-x-2 bg-white text-slate-800 px-3 py-1 rounded-full border border-emerald-300 shadow-xs text-xs">
                          <span className="font-bold text-slate-900">{lang === 'ko' ? '소성공정' : 'Calcination'}</span>
                          <span className="text-[10px] text-emerald-700 font-semibold">{lang === 'ko' ? '(Calcination)' : ''}</span>
                          <ArrowDown className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                      </div>

                      {/* 카드 2: 과립형 규산염제 */}
                      <div className="rounded-xl bg-gradient-to-b from-white to-emerald-50/40 border-2 border-emerald-400 p-4 sm:p-5 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-emerald-950">
                            {lang === 'ko' ? '과립형 규산염제(무항생제 천연 미네랄)' : 'Granular Silicate Agent (Antibiotic-Free Natural Mineral)'}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-center p-2 bg-emerald-50/30 rounded-lg min-h-[285px] border border-emerald-100">
                          <img
                            src="https://lh3.googleusercontent.com/d/1IT3pFwzvePTXL2_xFQujw3wHgjUHA8Ct"
                            alt={lang === 'ko' ? '과립형 규산염제 (무항생제 천연 미네랄)' : 'Granular Silicate Agent'}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.src = 'https://drive.google.com/uc?export=view&id=1IT3pFwzvePTXL2_xFQujw3wHgjUHA8Ct';
                            }}
                            className="max-h-[285px] w-auto max-w-full object-contain"
                          />
                        </div>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {lang === 'ko'
                            ? '소성공정 과립형 다공질 규산염 미네랄 구조로 원적외선 고방사 효과로 탈취, 유해가스 흡착, 사료 보존성 개선, 메탄저감, 소화 흡수율등 극대화'
                            : 'Calcined granular porous silicate mineral structure maximizing FIR radiation effects: deodorization, hazardous gas absorption, feed shelf-life improvement, methane reduction, and digestion/absorption rates.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                  {/* Card 1: 유익 방사 파장대 */}
                  <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 text-center flex flex-col justify-between group hover:bg-emerald-100/90 hover:border-emerald-400 hover:shadow-md transition-all">
                    <div>
                      <span className="text-emerald-950 font-bold text-sm block mb-1">{lang === 'ko' ? '유익 방사 파장대' : 'Bio-Active Wavelength'}</span>
                      
                      <span className="text-2xl sm:text-3xl font-black text-emerald-950 my-1 block tracking-tight group-hover:text-emerald-800 transition-colors">
                        <AnimatedCounter end={8} rangeEnd={11} suffix=" μm" />
                      </span>
                      <span className="text-xs text-emerald-800 font-semibold block mb-3">
                        {lang === 'ko' ? '생체 공명 흡수 파장 (Wellion Ray)' : 'Biocompatible Resonance Band'}
                      </span>
                    </div>

                    {/* Wavelength Spectrum Graph */}
                    <div className="bg-white/90 p-3 rounded-xl border border-emerald-200 space-y-2">
                      <div className="relative h-12 w-full flex items-end justify-between px-1 overflow-hidden">
                        <svg viewBox="0 0 160 48" className="w-full h-full text-emerald-600">
                          <defs>
                            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.6"/>
                              <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0.05"/>
                            </linearGradient>
                          </defs>
                          <path
                            d="M 0 44 Q 35 44, 55 35 T 80 8 T 105 35 Q 125 44, 160 44 L 160 48 L 0 48 Z"
                            fill="url(#waveGrad)"
                          />
                          <path
                            d="M 0 44 Q 35 44, 55 35 T 80 8 T 105 35 Q 125 44, 160 44"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <circle cx="80" cy="8" r="3.5" className="fill-emerald-700 animate-ping opacity-75" />
                          <circle cx="80" cy="8" r="3" className="fill-emerald-900" />
                          <text x="80" y="24" textAnchor="middle" className="text-[8px] font-black fill-emerald-950">Peak 9.4μm</text>
                        </svg>
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 px-1 pt-1 border-t border-emerald-100">
                        <span>4 μm</span>
                        <span className="text-emerald-900 font-extrabold bg-emerald-100 px-1.5 py-0.2 rounded">
                          {lang === 'ko' ? '8~11 μm (맥섬석 피크)' : '8-11 μm (Macsumsuk Peak)'}
                        </span>
                        <span>20 μm</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: 원적외선 방사율 */}
                  <div className="p-5 rounded-2xl bg-teal-50/80 border border-teal-200/90 text-center flex flex-col justify-between group hover:bg-teal-100/90 hover:border-teal-400 hover:shadow-md transition-all">
                    <div>
                      <span className="text-teal-950 font-bold text-sm block mb-1">{lang === 'ko' ? '원적외선 방사율' : 'FIR Emissivity'}</span>

                      <span className="text-2xl sm:text-3xl font-black text-teal-950 my-1 block tracking-tight group-hover:text-teal-800 transition-colors">
                        <AnimatedCounter end={90} suffix={lang === 'ko' ? '% 이상' : '%+'} />
                      </span>
                      <span className="text-xs text-teal-800 font-semibold block mb-3">
                        {lang === 'ko' ? 'KRISS 한국표준과학연구원 측정' : 'KRISS Measured'}
                      </span>
                    </div>

                    <div className="bg-white/90 p-4 rounded-xl border border-teal-200 space-y-2 flex flex-col justify-center">
                      <div className="flex justify-between text-xs font-bold text-teal-950">
                        <span>{lang === 'ko' ? '맥섬석(천연바이오)' : 'Macsumsuk Bio'}</span>
                        <span className="text-teal-900 font-extrabold text-sm">90.4%</span>
                      </div>
                      <div className="text-[11px] font-bold text-teal-800 pt-2 border-t border-teal-100 flex items-center justify-center">
                        <span>{lang === 'ko' ? '방사에너지 3.74 × 10² W/m² (40℃)' : '3.74 × 10² W/m² (40℃)'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: 자체 보유 광산 */}
                  <div className="p-5 rounded-2xl bg-sky-50/80 border border-sky-200/90 text-center flex flex-col justify-between group hover:bg-sky-100/90 hover:border-sky-400 hover:shadow-md transition-all">
                    <div>
                      <span className="text-sky-950 font-bold text-sm block mb-1">{lang === 'ko' ? '자체 보유 광산' : 'Exclusive Deposit'}</span>

                      <span className="text-2xl sm:text-3xl font-black text-sky-950 my-1 block tracking-tight group-hover:text-sky-800 transition-colors">
                        <AnimatedCounter end={223} suffix=" ha" />
                      </span>
                      <span className="text-xs text-sky-800 font-semibold block mb-3">
                        {lang === 'ko' ? '국내 독점 채굴권 67만평 보유' : 'Sole Mining Rights (670k Pyung)'}
                      </span>
                    </div>

                    <div className="bg-white/90 p-4 rounded-xl border border-sky-200 space-y-2 flex flex-col justify-center">
                      <div className="flex items-center justify-center text-xs font-bold text-sky-950">
                        <span>{lang === 'ko' ? '최대 맥섬석 광산 보유' : 'Largest Macsumsuk Deposit'}</span>
                      </div>
                      <div className="text-[11px] font-bold text-sky-800 pt-2 border-t border-sky-100 flex items-center justify-center">
                        <span>{lang === 'ko' ? '원료 채굴부터 가공까지 일원화' : 'Fully Integrated Supply Chain'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 세계 52개국 특허 */}
            <section id="patents" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Award className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '3. 세계 52개국 특허 및 지식재산권(IP) 포트폴리오' : '3. 52-Country Global Patent & IP Portfolio'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">
                      {lang === 'ko' ? '천연 미네랄 기반 점토광물 메탄가스 저감용 사료첨가제' : 'Natural Mineral Methane Reduction Feed Additive'}
                    </span>
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm block">
                      {lang === 'ko' ? '특허등록 제10-23698XX호' : 'Patent Reg. No. 10-23698XX'}
                    </span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">
                      {lang === 'ko' ? '가축혈액·맥섬석 이용 다공질 과립 사료 제조방법' : 'Porous Granular Feed Production using Livestock Blood & Macsumsuk'}
                    </span>
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm block">
                      {lang === 'ko' ? '특허등록 제10-24962XX호 (세계 13개국 등록)' : 'Patent Reg. No. 10-24962XX (Registered in 13 Countries)'}
                    </span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">
                      {lang === 'ko' ? '원적외선방사 및 온실가스저감용 벌집형 Bio세라믹' : 'Honeycomb Bio-Ceramics for FIR Emission & Greenhouse Gas Reduction'}
                    </span>
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm block">
                      {lang === 'ko' ? '특허출원 제10-2025-0079XX호' : 'Patent App. No. 10-2025-0079XX'}
                    </span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <span className="font-bold text-slate-900 text-sm sm:text-base block">
                      {lang === 'ko' ? '사료 브랜드 "그로피드(Growfeed®)" 상표권' : 'Feed Brand "Growfeed®" Trademark Rights'}
                    </span>
                    <span className="text-emerald-700 font-bold text-xs sm:text-sm block">
                      {lang === 'ko' ? '상표등록 제40-09997XX호 (세계 52개국 글로벌 브랜드 자산)' : 'Trademark Reg. No. 40-09997XX (Global Brand in 52 Nations)'}
                    </span>
                  </div>
                </div>

                {/* 6 items x 2 rows Certificate Gallery */}
                <PatentCertificatesGallery lang={lang} />
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. ESG */}
        {/* ========================================================================= */}
        {categoryKey === 'esg' && (
          <div className="space-y-10">
            {/* Section 1: 자원선순환 메커니즘 (5단계 순환경제 모델) */}
            <section id="circular-mechanism" className="scroll-mt-32 space-y-8">
              {/* Header Title Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Leaf className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 자원선순환 메커니즘' : '1. Closed-Loop Circular Bio-Economy'}
                </h2>
              </div>

              {/* 1. 상단 순환경제모델 픽토그램 컴포넌트 (화이트톤 3D 인포그래픽 다이어그램) */}
              <div className="rounded-3xl bg-white p-6 sm:p-8 text-slate-800 border-2 border-slate-200 shadow-md overflow-hidden relative">
                {/* Subtle Ambient Background */}
                <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sky-50 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-7">
                  {/* Top Bar with Rotating Recycle Icon Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-200">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 uppercase tracking-wider">
                          Closed-Loop Circular Bio-Economy
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {lang === 'ko' ? '맥섬석GM 순환 바이오경제 5단계 자원선순환 메커니즘' : 'Macsumsuk GM 5-Step Closed-Loop Circular Bio-Economy'}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal">
                        {lang === 'ko'
                          ? '도축 혈액 100% 밀폐 수거부터 초고온 순간멸균, 조단백 30%+ 사료화, 메탄 61.5% 저감, 농가 상생에 이르는 순환 메커니즘'
                          : 'From 100% sealed blood recovery to flash sterilization, 30%+ protein upcycling, 61.5% CH4 reduction, and farm prosperity.'}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2.5 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-300 self-start sm:self-auto shrink-0 shadow-xs">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                      >
                        <Recycle className="w-5 h-5 text-emerald-600" />
                      </motion.div>
                      <span className="text-xs font-black text-emerald-900">
                        {lang === 'ko' ? '100% 자원선순환' : '100% Circularity'}
                      </span>
                    </div>
                  </div>

                  {/* 3D Full-Circle Infographic Wheel + 5-Step Horizontal Cards */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                    {/* Left: Full 360° Circular Infographic Hub */}
                    <div className="lg:col-span-5 flex items-center justify-center py-4">
                      <div className="relative w-[300px] sm:w-[340px] h-[300px] sm:h-[340px] flex items-center justify-center">
                        
                        {/* SVG Full 360° Circular 5 Slices with 3D Bevel Styling */}
                        <svg viewBox="0 0 340 340" className="w-full h-full drop-shadow-xl overflow-visible">
                          <defs>
                            {/* Sector 1 Gradient: Deep Sky/Blue (수질·수거) */}
                            <linearGradient id="grad-sec-1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#38bdf8" />
                              <stop offset="100%" stopColor="#0284c7" />
                            </linearGradient>
                            {/* Sector 2 Gradient: Amber/Gold (초고온 열처리) */}
                            <linearGradient id="grad-sec-2" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#fbbf24" />
                              <stop offset="100%" stopColor="#d97706" />
                            </linearGradient>
                            {/* Sector 3 Gradient: Vibrant Emerald (바이오 단백질 사료) */}
                            <linearGradient id="grad-sec-3" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#34d399" />
                              <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                            {/* Sector 4 Gradient: Deep Teal (저탄소 메탄감축) */}
                            <linearGradient id="grad-sec-4" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#2dd4bf" />
                              <stop offset="100%" stopColor="#0d9488" />
                            </linearGradient>
                            {/* Sector 5 Gradient: Forest/Sage Green (농가상생) */}
                            <linearGradient id="grad-sec-5" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#4ade80" />
                              <stop offset="100%" stopColor="#15803d" />
                            </linearGradient>
                            
                            {/* Inner Drop Shadow for Bezel */}
                            <filter id="bevel-shadow" x="-10%" y="-10%" width="130%" height="130%">
                              <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.2" />
                            </filter>
                          </defs>

                          {/* 5 Slices (Full 360°, each 72 degrees, starting at top -90°) */}
                          
                          {/* Sector 1: Sky/Blue (-90° to -18°) */}
                          {/* Start: (170, 15), End: (317.4, 122.1) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 170,15 A 155,155 0 0,1 317.4,122.1 Z"
                              fill="url(#grad-sec-1)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at approx -54°, r=105 -> x=231, y=85) */}
                            <g transform="translate(232, 86)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">01</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '혈액수거' : 'RECOVERY'}
                              </text>
                            </g>
                          </g>

                          {/* Sector 2: Amber/Gold (-18° to +54°) */}
                          {/* Start: (317.4, 122.1), End: (261.1, 295.4) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 317.4,122.1 A 155,155 0 0,1 261.1,295.4 Z"
                              fill="url(#grad-sec-2)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at approx +18°, r=105 -> x=270, y=202) */}
                            <g transform="translate(268, 202)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">02</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '순간멸균' : 'STERILIZE'}
                              </text>
                            </g>
                          </g>

                          {/* Sector 3: Emerald (+54° to +126°) */}
                          {/* Start: (261.1, 295.4), End: (78.9, 295.4) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 261.1,295.4 A 155,155 0 0,1 78.9,295.4 Z"
                              fill="url(#grad-sec-3)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at +90°, r=105 -> x=170, y=275) */}
                            <g transform="translate(170, 268)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">03</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '단백사료' : 'FEED'}
                              </text>
                            </g>
                          </g>

                          {/* Sector 4: Deep Teal (+126° to +198°) */}
                          {/* Start: (78.9, 295.4), End: (22.6, 122.1) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 78.9,295.4 A 155,155 0 0,1 22.6,122.1 Z"
                              fill="url(#grad-sec-4)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at approx +162°, r=105 -> x=70, y=202) */}
                            <g transform="translate(72, 202)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">04</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '항곰팡이제' : 'TOXIN BINDER'}
                              </text>
                            </g>
                          </g>

                          {/* Sector 5: Forest Green (+198° to +270° / -90°) */}
                          {/* Start: (22.6, 122.1), End: (170, 15) */}
                          <g className="transition-transform duration-300 hover:scale-[1.03] origin-[170px_170px] cursor-pointer">
                            <path
                              d="M 170,170 L 22.6,122.1 A 155,155 0 0,1 170,15 Z"
                              fill="url(#grad-sec-5)"
                              stroke="#ffffff"
                              strokeWidth="3.5"
                              filter="url(#bevel-shadow)"
                            />
                            {/* Icon & Label (at approx +234° / -126°, r=105 -> x=108, y=85) */}
                            <g transform="translate(108, 86)">
                              <circle cx="0" cy="0" r="13" fill="#ffffff" fillOpacity="0.25" />
                              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">05</text>
                              <text x="0" y="20" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">
                                {lang === 'ko' ? '농가상생' : 'CO-GROWTH'}
                              </text>
                            </g>
                          </g>
                        </svg>

                        {/* Central Circular 3D Floating Hub Badge (완전 중앙 배치) */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-4 border-emerald-500 shadow-2xl flex flex-col items-center justify-center p-3 text-center z-20">
                          <span className="text-[10px] sm:text-[11px] font-black text-slate-900 tracking-wider leading-tight">
                            CIRCULAR
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-extrabold text-emerald-700 tracking-widest uppercase">
                            BIO-ECONOMY
                          </span>
                          
                          {/* 5 Cohesive Indicator Dots */}
                          <div className="flex items-center space-x-1 mt-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                            <span className="w-1.5 h-1.5 rounded-full bg-green-700" />
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Right: 5 Horizontal 3D Block Cards (홈페이지 브랜드 하모니 컬러) */}
                    <div className="lg:col-span-7 space-y-3">
                      
                      {/* Card 01 - Deep Sky/Blue (혈액수거) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-sky-500 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-sky-500 to-sky-600 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-sky-600 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">01</span>
                          <Droplets className="w-4 h-4 mt-0.5 text-sky-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-sky-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-sky-700 uppercase tracking-wider">RECOVERY</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '도축 혈액 밀폐 전량 수거' : 'Sealed Blood Recovery'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-sky-100 text-sky-800 text-[11px] font-black shrink-0 border border-sky-200">
                            {lang === 'ko' ? '폐수 -87.5%' : '-87.5% Cut'}
                          </span>
                        </div>
                      </motion.div>

                      {/* Card 02 - Amber/Gold (초고온 멸균) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-amber-500 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-amber-600 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">02</span>
                          <Sparkles className="w-4 h-4 mt-0.5 text-amber-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-amber-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-amber-700 uppercase tracking-wider">STERILIZATION</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '초고온 순간멸균 & 소성' : 'Flash Sterilization'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 text-[11px] font-black shrink-0 border border-amber-200">
                            {lang === 'ko' ? '180~350℃ 멸균' : '180-350°C'}
                          </span>
                        </div>
                      </motion.div>

                      {/* Card 03 - Vibrant Emerald (사료화) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-emerald-500 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-emerald-600 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">03</span>
                          <Layers className="w-4 h-4 mt-0.5 text-emerald-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-emerald-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider">UPCYCLING</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '조단백 30%+ 바이오 사료화' : '30%+ Protein Upcycling'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[11px] font-black shrink-0 border border-emerald-200">
                            {lang === 'ko' ? '조단백 30%+' : 'CP 30%+'}
                          </span>
                        </div>
                      </motion.div>

                      {/* Card 04 - Deep Teal (항곰팡이제) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-teal-500 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-teal-500 to-teal-600 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-teal-600 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">04</span>
                          <ShieldCheck className="w-4 h-4 mt-0.5 text-teal-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-teal-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-teal-700 uppercase tracking-wider">TOXIN BINDER</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '항곰팡이제(톡신바인더 기능)' : 'Anti-Mold (Toxin Binder)'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-teal-100 text-teal-800 text-[11px] font-black shrink-0 border border-teal-200">
                            {lang === 'ko' ? '독소 87~94% 흡착' : 'Toxin Binding'}
                          </span>
                        </div>
                      </motion.div>

                      {/* Card 05 - Forest/Sage Green (농가상생) */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-stretch rounded-2xl bg-white border-2 border-green-600 shadow-xs hover:shadow-md transition-all overflow-hidden"
                      >
                        <div className="w-16 sm:w-20 bg-gradient-to-br from-green-600 to-green-700 text-white flex flex-col items-center justify-center p-2 shrink-0 border-r-2 border-green-700 shadow-inner">
                          <span className="text-xl sm:text-2xl font-black tracking-tight">05</span>
                          <HeartHandshake className="w-4 h-4 mt-0.5 text-green-100" />
                        </div>
                        <div className="p-3 sm:p-3.5 flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-gradient-to-r from-green-50/50 to-white">
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-black text-green-800 uppercase tracking-wider">PROSPERITY</span>
                            <h4 className="text-sm font-black text-slate-900">
                              {lang === 'ko' ? '농가 실익 증진 & 상생 발전' : 'Farm Mutual Prosperity'}
                            </h4>
                          </div>
                          <span className="self-start sm:self-auto px-2.5 py-1 rounded-lg bg-green-100 text-green-800 text-[11px] font-black shrink-0 border border-green-200">
                            {lang === 'ko' ? 'FCR 1.69 • 50%보조' : 'FCR 1.69'}
                          </span>
                        </div>
                      </motion.div>

                    </div>
                  </div>

                  {/* Flow Return Loop Banner (화이트 톤) */}
                  <div className="flex items-center justify-between bg-slate-100/90 border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-700">
                    <div className="flex items-center space-x-2.5">
                      <RotateCw className="w-4 h-4 text-emerald-600 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="font-bold text-slate-800">
                        {lang === 'ko'
                          ? '100% 무방류 닫힌 순환 고리 (Closed-Loop Upcycling System)로 친환경 축산 생태계 구축'
                          : 'Achieving zero environmental discharge and sustainable farming via 100% closed-loop upcycling.'}
                      </span>
                    </div>
                    <span className="hidden md:inline-block font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
                      Zero Waste • Carbon Neutral
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: 온실가스·메탄 저감 (GHG Reduction) */}
            <section id="ghg-reduction" className="scroll-mt-32 space-y-6">
              {/* Independent Large Section Header Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <TrendingDown className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 온실가스·메탄 저감' : '2. Enteric Methane & GHG Mitigation'}
                </h2>
              </div>

              <div className="rounded-3xl bg-white border-2 border-emerald-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* 이미지 영역 (가로형 좌측) */}
                  <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] bg-slate-900 overflow-hidden group">
                    <img
                      src="https://lh3.googleusercontent.com/d/1ifuZxeqcBqKYpTf0xtmju6u2SurDOLkH"
                      alt={lang === 'ko' ? '저탄소 친환경 한우 목장 및 메탄가스 감축 축산' : 'Low Carbon Eco Farm with Korean Hanwoo'}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                    
                    {/* 플로팅 배지 */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-emerald-900/90 backdrop-blur-xs text-emerald-200 text-xs font-black px-3 py-1 rounded-full border border-emerald-400 shadow-md">
                        {lang === 'ko' ? '메탄 최대 61.5% 저감' : 'Max -61.5% Methane'}
                      </span>
                      <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                        {lang === 'ko' ? '특허등록 제10-23698XX호' : 'Patent No. 10-23698XX'}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-emerald-300">
                        {lang === 'ko' ? '경북대 2차 시험 & 서울대 호흡대사챔버 실증' : 'KNU 2nd Trial & SNU Respiration Chamber Verification'}
                      </p>
                      <h4 className="text-base sm:text-lg font-black leading-snug">
                        {lang === 'ko' ? '반추위 장내발효 메탄가스 억제 솔루션' : 'Enteric Fermentation Methane Inhibition'}
                      </h4>
                    </div>
                  </div>

                  {/* 텍스트 & 상세 지표 영역 (가로형 우측) */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-br from-white to-emerald-50/20">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                          <TrendingDown className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {lang === 'ko' ? '저탄소 축산 실현 & 장내발효 메탄 억제' : 'Low-Carbon Livestock & Enteric Methane Mitigation'}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '맥섬석 천연 미네랄 원료의 다공질 벌집 구조와 수소 흡착 특성을 통해 반추동물(한우, 젖소) 장내발효 메탄을 최대 61.5% 저감시켜 국가 온실가스 감축목표(NDC)에 직접 기여합니다.'
                          : 'Cuts ruminant enteric methane by up to 61.5% through natural porous mineral mechanics, directly supporting national NDC greenhouse gas reduction targets.'}
                      </p>
                    </div>

                    {/* 메탄가스 억제 및 기능 & 실온 보관 지표 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 sm:p-3.5 bg-white rounded-xl border border-emerald-200 flex flex-col justify-between shadow-xs">
                        <div className="flex items-center space-x-1.5 pb-1.5 border-b border-emerald-100">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
                            {lang === 'ko' ? '메탄가스 억제 및 기능' : 'Methane Suppression & Functions'}
                          </h4>
                        </div>
                        <ul className="space-y-1.5 pt-2 text-[11.5px] font-semibold text-slate-700">
                          <li className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>{lang === 'ko' ? '톡신바인드 기능' : 'Toxin Binding Function'}</span>
                          </li>
                          <li className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>{lang === 'ko' ? '육질 개선' : 'Meat Quality Enhancement'}</span>
                          </li>
                          <li className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span>{lang === 'ko' ? '사료효율 개선' : 'Feed Efficiency Improvement'}</span>
                          </li>
                          <li className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                            <span className="text-emerald-800 font-bold">{lang === 'ko' ? '천연미네랄에 주의사항 거의 없음' : 'Natural Mineral • Virtually No Cautions'}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-3 sm:p-3.5 bg-white rounded-xl border border-emerald-200 flex flex-col justify-between shadow-xs">
                        <div className="flex items-center space-x-1.5 pb-1.5 border-b border-emerald-100">
                          <TrendingDown className="w-4 h-4 text-emerald-600 shrink-0" />
                          <h4 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
                            {lang === 'ko' ? '축사 환경 개선' : 'Barn Environment Improvement'}
                          </h4>
                        </div>
                        <div className="py-2.5 flex flex-col justify-center flex-1">
                          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center space-x-2.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                            <span className="text-xs sm:text-[13px] font-bold text-slate-800">
                              {lang === 'ko' ? '축사 내 암모니아, 황화수소 감축' : 'Reduction of Ammonia & Hydrogen Sulfide in Barns'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 혈액가공품 자원순환 (Blood Byproduct Circularity) */}
            <section id="blood-recycle" className="scroll-mt-32 space-y-6">
              {/* Independent Large Section Header Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-sky-600">
                <Recycle className="w-7 h-7 text-sky-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '3. 혈액가공품 자원순환' : '3. Blood Byproduct Circular Upcycling'}
                </h2>
              </div>

              <div className="rounded-3xl bg-white border-2 border-sky-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* 이미지 영역 (가로형 좌측) */}
                  <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] bg-slate-900 overflow-hidden group">
                    <img
                      src="https://lh3.googleusercontent.com/d/1au4PHzhesC2WdiSFrb6T0LRZ4SErAv5j"
                      alt={lang === 'ko' ? '도축 혈액 친환경 100% 자원화 및 고단백 바이오 가공 설비' : 'Slaughter Blood Bio Upcycling Facility'}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                    {/* 플로팅 배지 */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-sky-900/90 backdrop-blur-xs text-sky-200 text-xs font-black px-3 py-1 rounded-full border border-sky-400 shadow-md">
                        {lang === 'ko' ? '조단백 30%+ 이상' : '30%+ Crude Protein'}
                      </span>
                      <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                        {lang === 'ko' ? '특허 제10-24962XX호' : 'Patent No. 10-24962XX'}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-sky-300">
                        {lang === 'ko' ? '사료공정규격집 공식 등록 품목 (국내 유일)' : 'Officially Authorized Blood-Processed Feed (Korea Only)'}
                      </p>
                      <h4 className="text-base sm:text-lg font-black leading-snug">
                        {lang === 'ko' ? '밀폐 순간멸균 다공질 과립 사료화 기술' : 'Sealed Instant Sterilization Granulation'}
                      </h4>
                    </div>
                  </div>

                  {/* 텍스트 & 상세 지표 영역 (가로형 우측) */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-br from-white to-sky-50/20">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                          <Leaf className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-baseline flex-wrap gap-1.5">
                          <span>
                            {lang === 'ko' ? '도축 부산물 100% 고부가가치 바이오 자원화' : '100% Upcycling of Livestock Byproducts into Bio Feed'}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-sky-700">
                            {lang === 'ko' ? '(ESG사업)' : '(ESG Project)'}
                          </span>
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '도축장에서 발생하는 가축 혈액을 전라인 밀폐 연결공법으로 전량 수거하고 180~350℃ 5~7초 순간멸균하여 조단백 30%+ 고영양 바이오 사료로 전환, 수질오염을 원천 방지합니다.'
                          : 'Recovers 100% of slaughter blood via sealed in-line systems and instant flash sterilization (180-350°C, 5-7s) to produce 30%+ crude protein feed, eliminating water pollution.'}
                      </p>
                    </div>

                    {/* 하이라이트 지표 바 */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-sky-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '조단백질(CP) 함량' : 'Crude Protein Content'}</span>
                        <span className="text-base sm:text-lg font-black text-sky-800">{lang === 'ko' ? '30% 이상' : '30%+ (Min)'}</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-sky-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '수질 폐수 발생량' : 'Wastewater Reduction'}</span>
                        <span className="text-base sm:text-lg font-black text-slate-900">{lang === 'ko' ? '-87.5% 절감' : '-87.5% Cut'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: 농가 소득 증대 (Farm Income & Mutual Prosperity) */}
            <section id="farm-income" className="scroll-mt-32 space-y-6">
              {/* Independent Large Section Header Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-teal-600">
                <HeartHandshake className="w-7 h-7 text-teal-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '4. 농가 소득 증대' : '4. Farm Profitability & Mutual Prosperity'}
                </h2>
              </div>

              <div className="rounded-3xl bg-white border-2 border-teal-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* 이미지 영역 (가로형 좌측) */}
                  <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] bg-slate-900 overflow-hidden group">
                    <img
                      src="https://lh3.googleusercontent.com/d/19zdjbZq1gmvBD4e8SLhMP-7-RH4M19ql"
                      alt={lang === 'ko' ? '축산 농가 상생 발전 및 농가 실익 증진' : 'Livestock Farm Co-prosperity & Farm Profitability'}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=800&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                    {/* 플로팅 배지 */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-teal-900/90 backdrop-blur-xs text-teal-200 text-xs font-black px-3 py-1 rounded-full border border-teal-400 shadow-md">
                        {lang === 'ko' ? 'FCR 1.69' : 'FCR 1.69'}
                      </span>
                      <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                        {lang === 'ko' ? '경북도 50% 보조사업' : 'Provincial Subsidy Item'}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-teal-300">
                        {lang === 'ko' ? '필리핀 CLSU 300수 비교시험 & 경북 축기연 사양시험' : 'CLSU 300-Broiler Trial & Gyeongbuk Institute Trial'}
                      </p>
                      <h4 className="text-base sm:text-lg font-black leading-snug">
                        {lang === 'ko' ? '사료효율 극대화 및 농가 경영비 절감' : 'FCR Maximization & Farm Cost Reduction'}
                      </h4>
                    </div>
                  </div>

                  {/* 텍스트 & 상세 지표 영역 (가로형 우측) */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-br from-white to-teal-50/20">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {lang === 'ko' ? '지속가능 상생 에코시스템 & 농가 실익 증진' : 'Sustainable Mutual Ecosystem & Farm Profitability'}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '사료요구율(FCR) 개선, 가축 출하일령 2~4일 단축 및 경상북도 혈액가공품 농가지원사업(50% 지원)을 통해 축산 농가의 실질 경영 수익성을 높이며, 전국 산란계·육계 60여 농가에서 지속적으로 사용하고 있습니다.'
                          : 'Maximizes real farm profits by optimizing FCR (1.69), shortening fattening cycles by 2-4 days, and providing 50% subsidized supply through provincial farm programs (Continuously used by over 60 layer & broiler farms nationwide).'}
                      </p>
                    </div>

                    {/* 하이라이트 지표 바 */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-teal-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '사료요구율 (FCR)' : 'Feed Conversion (FCR)'}</span>
                        <span className="text-base sm:text-lg font-black text-teal-800">1.69</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-teal-200 flex flex-col justify-center">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '출하일령 단축' : 'Market Day Reduction'}</span>
                        <div className="flex items-baseline flex-wrap gap-1">
                          <span className="text-base sm:text-lg font-black text-slate-900">{lang === 'ko' ? '2~4일 단축' : '2-4 Days Faster'}</span>
                          <span className="text-xs font-bold text-teal-700">{lang === 'ko' ? '(사료비 절감)' : '(Feed Cost Reduction)'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: 정부 및 지자체 협업 성과 (Government & Municipality Collaboration) */}
            <section id="granular-fertilizer" className="scroll-mt-32 space-y-6">
              {/* Independent Large Section Header Bar */}
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Landmark className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '5. 정부 및 지자체 협업 성과' : '5. Government & Municipality Collaboration'}
                </h2>
              </div>

              {/* Main Container Card */}
              <div className="rounded-3xl bg-white border-2 border-emerald-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* 이미지 영역 (가로형 좌측) */}
                  <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] bg-slate-900 overflow-hidden group">
                    <img
                      src="/images/gov_visit_20200706.jpg"
                      alt={lang === 'ko' ? '경북도지사 본사 방문 및 자원화 협의' : 'Gyeongbuk Governor Headquarters Visit'}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/30" />

                    {/* 플로팅 배지 */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-emerald-900/90 backdrop-blur-xs text-emerald-200 text-xs font-black px-3 py-1 rounded-full border border-emerald-400 shadow-md">
                        {lang === 'ko' ? '경북도지사 본사 방문' : 'Governor HQ Visit'}
                      </span>
                      <span className="bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                        2020.07.06
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-medium text-emerald-300">
                        {lang === 'ko' ? '이철우 도지사 · 최기문 영천시장 · 김재수 전 농림축산식품부 장관' : 'Gov. Lee Cheol-woo · Mayor Choi Ki-mun · Ex-Minister Kim Jae-soo'}
                      </p>
                      <h4 className="text-base sm:text-lg font-black leading-snug">
                        {lang === 'ko' ? '도축장 가축 혈액(돈혈) 자원화 사업 협의' : 'Slaughterhouse Blood Upcycling Collaboration'}
                      </h4>
                    </div>
                  </div>

                  {/* 텍스트 & 상세 지표 영역 (가로형 우측) */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-gradient-to-br from-white to-emerald-50/20">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                          <Handshake className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {lang === 'ko' ? '가축 혈액 자원화 정책 협력 및 산업화 성과' : 'Livestock Blood Upcycling Policy & Industrialization'}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '2020년 7월 6일 경북도지사, 영천시장, 전 농림식품부 장관의 본사 방문을 통해 도축장 폐기 혈액(돈혈)의 이동 및 재활용 행정 현안을 협의하고, 맥섬석을 활용한 단백질 과립 사료 원천기술의 정책적 연계와 산업화를 본격 추진했습니다.'
                          : 'On July 6, 2020, Gyeongbuk Governor, Yeongcheon Mayor, and former Minister of Agriculture visited Macsumsuk GM to coordinate administrative solutions for slaughterhouse porcine blood upcycling and integrate our patented protein granular feed technology with regional policy.'}
                      </p>
                    </div>

                    {/* 하이라이트 지표 바 */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-emerald-200 flex flex-col justify-center shadow-2xs">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '세계 국제 특허 보유' : 'Global Patents'}</span>
                        <div className="flex items-baseline flex-wrap gap-1">
                          <span className="text-base sm:text-lg font-black text-emerald-800">{lang === 'ko' ? '세계 13개국' : '13 Countries'}</span>
                          <span className="text-xs font-bold text-slate-600">{lang === 'ko' ? '특허 등록' : 'Patented'}</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-emerald-200 flex flex-col justify-center shadow-2xs">
                        <span className="text-[11px] text-slate-500 font-bold">{lang === 'ko' ? '농가 납품 및 글로벌 진출' : 'Farm Supply & Global Markets'}</span>
                        <div className="flex items-baseline flex-wrap gap-1">
                          <span className="text-base sm:text-lg font-black text-slate-900">{lang === 'ko' ? '60여 농가' : '60+ Farms'}</span>
                          <span className="text-xs font-bold text-emerald-700">{lang === 'ko' ? '(수출 진행 중)' : '(Exporting)'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4대 핵심 가치 및 협업 성과 블록 */}
                <div className="p-5 sm:p-6 bg-slate-50/70 border-t border-slate-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {/* Item 1 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5 hover:border-emerald-300 transition-colors">
                      <div className="flex items-center space-x-2 text-emerald-900 font-bold text-xs sm:text-sm">
                        <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-black text-xs">
                          1
                        </div>
                        <span>{lang === 'ko' ? '경북도지사 본사 방문' : 'Governor HQ Visit'}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '2020.07.06 이철우 도지사, 최기문 영천시장, 김재수 전 농림식품부 장관 본사 방문 및 현장 시찰'
                          : 'July 6, 2020: Governor Lee Cheol-woo, Mayor Choi Ki-mun, and former Minister Kim Jae-soo visited HQ.'}
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5 hover:border-emerald-300 transition-colors">
                      <div className="flex items-center space-x-2 text-emerald-900 font-bold text-xs sm:text-sm">
                        <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-black text-xs">
                          2
                        </div>
                        <span>{lang === 'ko' ? '도축장 혈액 자원화 협의' : 'Blood Upcycling Accord'}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '가축 혈액(돈혈)과 맥섬석을 활용한 단백질 과립사료 기술 및 도축장 내 처리 공정화 논의'
                          : 'Technical review on protein granular feed using slaughterhouse porcine blood and Macsumsuk.'}
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5 hover:border-emerald-300 transition-colors">
                      <div className="flex items-center space-x-2 text-emerald-900 font-bold text-xs sm:text-sm">
                        <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-black text-xs">
                          3
                        </div>
                        <span>{lang === 'ko' ? '세계 13개국 국제 특허' : '13-Country Patents'}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '<혈액 가공품> 국내 특허 및 세계 13개국에 등록 완료된 독보적 다공질 단백질 과립형 기술'
                          : '<Processed Blood Products> Porous protein granule feed technology patented in 13 countries.'}
                      </p>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1.5 hover:border-emerald-300 transition-colors">
                      <div className="flex items-center space-x-2 text-emerald-900 font-bold text-xs sm:text-sm">
                        <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-black text-xs">
                          4
                        </div>
                        <span>{lang === 'ko' ? '60여 농가 납품 & 수출' : '60+ Farms & Export'}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {lang === 'ko'
                          ? '전국 60여 양계 및 산란계 농장 지속 납품 공급 중이며, 해외 글로벌 시장 수출 본격 진행'
                          : 'Continuous supply to 60+ layer/broiler farms nationwide; overseas exports actively underway.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. GLOBAL */}
        {/* ========================================================================= */}
        {categoryKey === 'global' && (
          <div className="space-y-12">
            {/* Section 1: 수출 현황 및 실적 */}
            <section id="export-status" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Globe2 className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 수출 현황 및 실적' : '1. Export Track Record'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    {lang === 'ko' ? '글로벌 수출 실적 및 해외 파트너십' : 'Global Export Milestones & Overseas Partnerships'}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 mt-1 font-normal leading-relaxed">
                    {lang === 'ko'
                      ? '누적 4,220톤+ 수출, 필리핀 Biostar 9년 연속 파트너십 및 동남아·유럽 시장 공략 현황'
                      : 'Over 4,220 tons exported, 9 consecutive years partnership with Biostar (Philippines), expanding across SE Asia and Europe.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-slate-600 font-semibold text-xs sm:text-sm block">{lang === 'ko' ? '누적 수출량' : 'Cumulative Exports'}</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-700 my-1 block">{lang === 'ko' ? '4,220 톤+' : '4,220 Tons+'}</span>
                    <span className="text-xs text-slate-500 font-medium">{lang === 'ko' ? 'Growfeed E-TOX 단일 품목' : 'Growfeed® E-TOX single item'}</span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-slate-600 font-semibold text-xs sm:text-sm block">{lang === 'ko' ? '2026년 10월 까지의 실적' : 'Performance through Oct 2026'}</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-700 my-1 block">{lang === 'ko' ? '400톤 + 200톤' : '400 Tons + 200 Tons'}</span>
                    <span className="text-xs text-slate-500 font-medium">{lang === 'ko' ? '필리핀 L/C 발주 양산 중' : 'Philippines L/C in active production'}</span>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <span className="text-slate-600 font-semibold text-xs sm:text-sm block">{lang === 'ko' ? '글로벌 특허국' : 'Patent Nations'}</span>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-700 my-1 block">{lang === 'ko' ? '52 개국' : '52 Nations'}</span>
                    <span className="text-xs text-slate-500 font-medium">{lang === 'ko' ? '미국·EU·일본·중국 등' : 'USA, EU, Japan, China, etc.'}</span>
                  </div>
                </div>

                {/* 글로벌 특허 & 해상 수출 물류 2개 이미지 갤러리 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                  {/* Image 1: 글로벌 특허 & 파트너십 */}
                  <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xs hover:shadow-md transition-all">
                    <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                      <img
                        src="https://lh3.googleusercontent.com/d/1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0"
                        alt={lang === 'ko' ? '맥섬석GM 글로벌 특허 및 해외 인증 포트폴리오' : 'Macsumsuk GM Global Patents & IP Portfolio'}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Image 2: 바다를 항해하는 컨테이너선 (글로벌 해상 수출) */}
                  <div className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xs hover:shadow-md transition-all">
                    <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                      <img
                        src="https://lh3.googleusercontent.com/d/1_MlW2tEUjEoCtul-ONR9tKDZQvHRlvFR"
                        alt={lang === 'ko' ? '오대양을 항해하는 글로벌 해상 수출 컨테이너선' : 'Container Cargo Ship Sailing Across Ocean for Global Export'}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* 52-Nation Interactive Twinkling World Map Visualizer */}
                <GlobalExportMap lang={lang} />
              </div>
            </section>

            {/* Section 2: 국제 표준 품질 및 수출 인증 (독립된 섹션/DIV) */}
            <section id="global-cert" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Shield className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 국제 인증 현황' : '2. International Certifications'}
                </h2>
              </div>

              {/* International Certifications: GMP, ISO 22000, HALAL Official Logos */}
              <div id="certifications" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-32">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-100 gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                      <h3 className="font-black text-slate-900 text-lg sm:text-xl">
                        {lang === 'ko' ? '국제 표준 품질 및 수출 인증' : 'International Quality & Export Certifications'}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 font-normal">
                      {lang === 'ko'
                        ? '맥섬석GM은 엄격한 글로벌 품질 규격과 위생 기준을 통과하여 전 세계 어디서나 안전한 통관을 보증합니다.'
                        : 'Macsumsuk GM meets stringent global quality and hygiene standards to ensure smooth customs clearance worldwide.'}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto">
                    {lang === 'ko' ? '3대 글로벌 규격 획득' : '3 Major Global Standards'}
                  </span>
                </div>

                {/* 3 Official Certification Logo Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* 1. GMP (Good Manufacturing Practice) */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 hover:border-amber-400 hover:shadow-md transition-all flex flex-col items-center text-center space-y-3">
                    {/* GMP Official Vector Seal */}
                    <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-sm border border-amber-300 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Outer Gold Ring */}
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#d97706" strokeWidth="2.5" strokeDasharray="3 1.5" />
                        <circle cx="50" cy="50" r="42" fill="#fffbeb" stroke="#b45309" strokeWidth="1.5" />
                        {/* Laurel Leaves left & right */}
                        <path d="M22 58 C18 48 20 38 28 32 C26 40 28 48 34 54 Z" fill="#d97706" opacity="0.6" />
                        <path d="M78 58 C82 48 80 38 72 32 C74 40 72 48 66 54 Z" fill="#d97706" opacity="0.6" />
                        {/* Inner Core */}
                        <circle cx="50" cy="50" r="28" fill="#1e293b" />
                        <text x="50" y="47" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">GMP</text>
                        <text x="50" y="58" textAnchor="middle" fill="#ffffff" fontSize="5" fontWeight="700" fontFamily="sans-serif">CERTIFIED</text>
                        {/* Stars */}
                        <polygon points="50,18 52,22 56,22 53,25 54,29 50,26 46,29 47,25 44,22 48,22" fill="#d97706" />
                        <polygon points="50,82 52,78 56,78 53,75 54,71 50,74 46,71 47,75 44,78 48,78" fill="#d97706" />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <div id="cert-title-gmp" className="text-base sm:text-[16.5px] font-black text-slate-900 tracking-tight">
                        {lang === 'ko' ? '국제 우수제조기준 (GMP)' : 'GMP Certification'}
                      </div>
                      <div id="cert-sub-gmp" className="text-xs sm:text-[12.5px] font-bold text-amber-700">
                        Good Manufacturing Practice
                      </div>
                      <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                        {lang === 'ko'
                          ? '원료 입고부터 제조, 포장, 출하까지 전 공정 품질 보증 및 위생관리 기준 100% 충족'
                          : 'Full compliance with international hygiene and manufacturing quality assurance across all processes.'}
                      </p>
                    </div>
                  </div>

                  {/* 2. ISO 22000 (Food Safety Management System) */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-200/80 hover:border-blue-400 hover:shadow-md transition-all flex flex-col items-center text-center space-y-3">
                    {/* ISO 22000 Official Vector Seal */}
                    <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-sm border border-blue-300 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Outer Blue Ring */}
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                        <circle cx="50" cy="50" r="42" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1" />
                        {/* Inner Shield */}
                        <path d="M50 20 L74 30 V52 C74 66 50 78 50 78 C50 78 26 66 26 52 V30 Z" fill="#1e3a8a" />
                        <text x="50" y="42" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">ISO</text>
                        <text x="50" y="55" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="900" fontFamily="sans-serif">22000</text>
                        {/* Checkmark */}
                        <path d="M42 63 L47 68 L58 57" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <div id="cert-title-iso" className="text-base sm:text-[16.5px] font-black text-slate-900 tracking-tight">
                        {lang === 'ko' ? '식품안전경영시스템 (ISO 22000)' : 'ISO 22000 Certified'}
                      </div>
                      <div id="cert-sub-iso" className="text-xs sm:text-[12.5px] font-bold text-blue-700">
                        Food Safety Management System
                      </div>
                      <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                        {lang === 'ko'
                          ? '국제표준화기구(ISO) 사료 및 식품안전 위해요소 차단(HACCP) 통합 글로벌 표준 인증'
                          : 'International standard for food and feed safety management systems integrating HACCP principles.'}
                      </p>
                    </div>
                  </div>

                  {/* 3. HALAL (할랄 공식 인증) */}
                  <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 hover:border-emerald-400 hover:shadow-md transition-all flex flex-col items-center text-center space-y-3">
                    {/* HALAL Official Vector Seal */}
                    <div className="w-20 h-20 rounded-full bg-white p-1.5 shadow-sm border border-emerald-300 flex items-center justify-center relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Outer Emerald Ring */}
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#059669" strokeWidth="2.5" strokeDasharray="5 2" />
                        <circle cx="50" cy="50" r="42" fill="#ecfdf5" stroke="#047857" strokeWidth="1.5" />
                        {/* Crescent & Dome Accent */}
                        <path d="M30 48 A22 22 0 0 0 68 64 A24 24 0 0 1 36 34 A22 22 0 0 0 30 48 Z" fill="#10b981" opacity="0.25" />
                        {/* Inner Circle */}
                        <circle cx="50" cy="50" r="28" fill="#064e3b" />
                        {/* Arabic Style Calligraphy Representation */}
                        <text x="50" y="44" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold" fontFamily="serif">حلال</text>
                        <text x="50" y="58" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">HALAL</text>
                        <text x="50" y="68" textAnchor="middle" fill="#a7f3d0" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">KOREA CERTIFIED</text>
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <div id="cert-title-halal" className="text-base sm:text-[16.5px] font-black text-slate-900 tracking-tight">
                        {lang === 'ko' ? '할랄 공식 인증 (HALAL)' : 'Halal Certified'}
                      </div>
                      <div id="cert-sub-halal" className="text-xs sm:text-[12.5px] font-bold text-emerald-700">
                        Islamic Compliant & Certified
                      </div>
                      <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                        {lang === 'ko'
                          ? '동남아(말레이시아·인도네시아) 및 중동 이슬람권 수출 통관을 위한 무독성·순수 원료 인증'
                          : 'Officially certified for non-toxicity and pure mineral composition for seamless export to Islamic markets.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 6. PR & Media Gallery */}
        {/* ========================================================================= */}
        {categoryKey === 'pr' && (
          <div className="space-y-12">
            {/* PR Photo & Multimedia Gallery */}
            <section id="gallery" className="scroll-mt-32 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b-2 border-emerald-600">
                <div className="flex items-center space-x-3">
                  <ImageIcon className="w-7 h-7 text-emerald-600" />
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {lang === 'ko' ? '홍보갤러리' : 'PR Gallery'}
                  </h2>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                {/* Photo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {GALLERY_PHOTOS.map((photo) => (
                    <div
                      key={photo.id}
                      className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                        <img
                          src={photo.imageUrl}
                          alt={lang === 'ko' ? photo.titleKo : photo.titleEn}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (photo.imageUrl.includes('googleusercontent.com/d/')) {
                              const id = photo.imageUrl.split('/d/')[1];
                              if (id) target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                            }
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-4 space-y-1.5">
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {lang === 'ko' ? photo.titleKo : photo.titleEn}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {lang === 'ko' ? photo.descKo : photo.descEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2: News List */}
            <section id="news" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Sparkles className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '최신 소식' : 'Latest News'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="space-y-3.5">
                  {NEWS_LIST.map((news) => (
                    <div
                      key={news.id}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start group"
                    >
                      {/* Left Thumbnail Image */}
                      {news.imageUrl && (
                        <div className="w-full sm:w-44 md:w-52 h-40 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-2xs relative">
                          <img
                            src={news.imageUrl}
                            alt={lang === 'ko' ? news.titleKo : news.titleEn}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (news.imageUrl && news.imageUrl.includes('googleusercontent.com/d/')) {
                                const id = news.imageUrl.split('/d/')[1];
                                if (id) target.src = `https://drive.google.com/uc?export=view&id=${id}`;
                              }
                            }}
                          />
                        </div>
                      )}

                      {/* Right News Content */}
                      <div className="flex-1 min-w-0 space-y-2 w-full">
                        <div className="flex items-center justify-end text-xs sm:text-sm">
                          <span className="text-slate-500 font-medium text-xs sm:text-sm">
                            {news.date}{news.source ? ` | ${lang === 'ko' ? news.source : (news.sourceEn || news.source)}` : ''}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                          {lang === 'ko' ? news.titleKo : news.titleEn}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {lang === 'ko' ? news.summaryKo : news.summaryEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 7. CONTACT */}
        {/* ========================================================================= */}
        {categoryKey === 'contact' && (
          <div className="space-y-12">
            {/* Section 1: 연락처 및 운영시간 */}
            <section id="contact-info" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Phone className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '1. 연락처 및 운영시간' : '1. Contact & Operating Hours'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {lang === 'ko'
                    ? '사료 첨가제 구매 상담, 기술 제휴, 축종별 맞춤 컨설팅, OEM/ODM 개발 및 대량 발주 문의를 신속하고 정확하게 안내해 드립니다.'
                    : 'We promptly assist with purchasing, technical partnerships, tailored livestock consulting, OEM/ODM development, and bulk supply inquiries.'}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3.5">
                    <div className="flex items-center space-x-2.5 font-bold text-slate-900 text-base">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>{lang === 'ko' ? '유선 연락처 안내' : 'Phone Numbers'}</span>
                    </div>
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '대표전화' : 'Tel'}</span>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-emerald-700 hover:underline">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '담당자 직통' : 'Direct'}</span>
                        <div className="flex items-center space-x-1.5 font-bold text-emerald-700">
                          {COMPANY_INFO.mobile.split(' / ').map((num, i, arr) => (
                            <React.Fragment key={num}>
                              <a href={`tel:${num}`} className="hover:underline">
                                {num}
                              </a>
                              {i < arr.length - 1 && <span className="text-slate-400 font-normal">/</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '팩스 번호' : 'Fax'}</span>
                        <span className="text-slate-600 font-medium">{COMPANY_INFO.fax}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3.5">
                    <div className="flex items-center space-x-2.5 font-bold text-slate-900 text-base">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span>{lang === 'ko' ? '이메일 & 운영시간' : 'Email & Hours'}</span>
                    </div>
                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '공식 이메일' : 'Email'}</span>
                        <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-emerald-700 hover:underline">
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900">{lang === 'ko' ? '운영 시간' : 'Hours'}</span>
                        <span className="text-slate-700 font-medium">
                          {lang === 'ko' ? '평일 09:00 ~ 18:00 (주말·공휴일 휴무)' : 'Mon-Fri 09:00-18:00 KST'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: 오시는 길 */}
            <section id="location" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <MapPin className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '2. 오시는 길' : '2. Directions & Location'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm space-y-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {lang === 'ko' ? '본사 및 스마트 제조공장' : 'HQ & Smart Plant'}
                      </span>
                      <span className="font-bold text-slate-900 text-base">
                        {lang === 'ko' ? '맥섬석GM㈜' : 'Macsumsuk GM Co., Ltd.'}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base text-slate-800 font-medium flex items-center space-x-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {lang === 'ko' ? '도로명 주소' : 'Road Address'}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {lang === 'ko' ? '경상북도 영천시 대창면 한제길 44' : '44, Hanje-gil, Daechang-myeon, Yeongcheon-si, Gyeongsangbuk-do, Korea'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="https://map.naver.com/p/search/경상북도 영천시 대창면 한제길 44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#03C75A] hover:bg-[#02b350] transition-colors flex items-center space-x-1.5 shadow-xs cursor-pointer"
                    >
                      <Navigation className="w-4 h-4 text-white" />
                      <span>{lang === 'ko' ? '네이버지도 길찾기' : 'Naver Map'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="https://map.kakao.com/link/search/경상북도 영천시 대창면 한제길 44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-[#FEE500] hover:bg-[#FADA0A] transition-colors flex items-center space-x-1.5 shadow-2xs cursor-pointer"
                    >
                      <Navigation className="w-4 h-4 text-slate-900" />
                      <span>{lang === 'ko' ? '카카오맵' : 'Kakao Map'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleCopyAddress('경상북도 영천시 대창면 한제길 44')}
                      className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors flex items-center space-x-1.5 cursor-pointer shadow-2xs"
                    >
                      {copiedAddress ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                      <span>{copiedAddress ? (lang === 'ko' ? '주소 복사됨!' : 'Copied!') : (lang === 'ko' ? '주소 복사' : 'Copy Address')}</span>
                    </button>
                  </div>
                </div>

                {/* Interactive Map Visual Card - Naver Map as Main */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-sm bg-slate-900">
                  <div className="w-full h-80 sm:h-96 relative flex items-center justify-center overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950/40"></div>

                    {/* Central Map Pin & Info Card */}
                    <div className="relative z-10 p-6 sm:p-8 max-w-lg mx-4 text-center bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#03C75A] text-white flex items-center justify-center mx-auto shadow-lg ring-4 ring-[#03C75A]/25">
                        <MapPin className="w-8 h-8" />
                      </div>

                      <div className="space-y-1.5">
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#03C75A]/20 border border-[#03C75A]/40 text-emerald-300 text-xs font-bold">
                          <span>{lang === 'ko' ? '네이버지도 공식 등록 사업장' : 'Registered Location on Naver Map'}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">
                          {lang === 'ko' ? '맥섬석GM(주) 본사 · 제조공장' : 'Macsumsuk GM Headquarters & Plant'}
                        </h3>
                        <p className="text-sm text-slate-300 font-medium">
                          {lang === 'ko' ? '[도로명] 경상북도 영천시 대창면 한제길 44' : '44, Hanje-gil, Daechang-myeon, Yeongcheon-si, Gyeongbuk, Korea'}
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href="https://map.naver.com/p/search/경상북도 영천시 대창면 한제길 44"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-[#03C75A] hover:bg-[#02b350] transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                        >
                          <Navigation className="w-4 h-4 text-white" />
                          <span>{lang === 'ko' ? '네이버지도로 길찾기' : 'Open in Naver Map'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                          href="https://map.kakao.com/link/search/경상북도 영천시 대창면 한제길 44"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-[#FEE500] hover:bg-[#FADA0A] transition-all flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                        >
                          <Navigation className="w-4 h-4 text-slate-950" />
                          <span>{lang === 'ko' ? '카카오맵 길찾기' : 'Kakao Map'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Transport guide footer */}
                  <div className="p-4 bg-slate-800/90 border-t border-slate-700 text-xs sm:text-sm text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-emerald-400">{lang === 'ko' ? '고속도로:' : 'Highway:'}</span>
                      <span>{lang === 'ko' ? '경부고속도로 영천IC / 건천IC' : 'Gyeongbu Expwy Yeongcheon / Geoncheon IC'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-emerald-400">{lang === 'ko' ? '철도/KTX:' : 'Train / KTX:'}</span>
                      <span>{lang === 'ko' ? '동대구역 / 신경주역 / 영천역' : 'Dongdaegu / Singyeongju / Yeongcheon Stn.'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-emerald-400">{lang === 'ko' ? '화물/방문:' : 'Freight / Access:'}</span>
                      <span>{lang === 'ko' ? '대형 트럭 및 컨테이너 진입 가능' : 'Heavy Trucks & 40ft Containers Accessible'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: 온라인 문의 */}
            <section id="online-inquiry" className="scroll-mt-32 space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b-2 border-emerald-600">
                <Mail className="w-7 h-7 text-emerald-600" />
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {lang === 'ko' ? '3. 온라인 문의' : '3. Online Inquiry'}
                </h2>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-sm">
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 text-white border border-emerald-700/40 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-xl">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {lang === 'ko' ? '1:1 온라인 전담 상담' : '1:1 Online Consultation'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                      {lang === 'ko' ? '온라인 상담 및 문의 접수' : 'Online Inquiry & Consultation Form'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {lang === 'ko'
                        ? '축종별 맞춤 컨설팅, 견적 문의, OEM/ODM 사료 배합 개발, 해외 총판 및 대리점 제휴 등 원하시는 내용을 남겨주시면 담당 전문가가 24시간 이내에 신속히 회신드립니다.'
                        : 'Submit your inquiries for tailored livestock consulting, quotations, OEM/ODM formulations, or global dealerships. Our specialists will respond within 24 hours.'}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenInquiry()}
                    className="w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-xl transition-all shadow-lg hover:shadow-emerald-900/40 shrink-0 flex items-center justify-center space-x-2.5 cursor-pointer group"
                  >
                    <span>{lang === 'ko' ? '온라인 문의 바로가기' : 'Go to Online Inquiry'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

      </div>
    </div>
  );
};
