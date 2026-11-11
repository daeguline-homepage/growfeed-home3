import React from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ExternalLink, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language, MainCategoryKey } from '../types';

interface FooterProps {
  lang: Language;
  onOpenCategory: (key: MainCategoryKey, subId?: string) => void;
  onOpenBrochure: () => void;
  onOpenPolicy?: (type: 'privacy' | 'anti-spam') => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenCategory,
  onOpenBrochure,
  onOpenPolicy,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Main Corporate Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="h-9 flex items-center shrink-0 bg-white/10 rounded-lg p-1">
              <img
                src="https://lh3.googleusercontent.com/d/1PD7I_QfLtcn5SMlGT07tG2tYzQa_9bCD"
                alt="맥섬석GM Logo"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="h-7 w-auto object-contain brightness-105"
              />
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-lg sm:text-xl font-black text-white">맥섬석GM㈜</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 tracking-tight">Growfeed®</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 flex items-center space-x-1.5 transition-colors cursor-pointer font-bold"
            >
              <span>{lang === 'ko' ? '맨 위로' : 'Top'}</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Business details - 2 Lines Layout with enhanced font size & legibility */}
        <div className="text-sm sm:text-[15px] text-slate-300 space-y-2.5 leading-relaxed font-normal">
          {/* Line 1: Corporate & Contact Core */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              <strong className="text-white font-semibold">{lang === 'ko' ? '법인명:' : 'Company:'}</strong> {lang === 'ko' ? '맥섬석GM㈜ (Macsumsuk GM Co., Ltd.)' : 'Macsumsuk GM Co., Ltd.'}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-white font-semibold">{lang === 'ko' ? '대표이사:' : 'CEO:'}</strong> {lang === 'ko' ? COMPANY_INFO.ceo : COMPANY_INFO.ceoEn}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-white font-semibold">{lang === 'ko' ? '사료 브랜드:' : 'Brand:'}</strong> {lang === 'ko' ? COMPANY_INFO.brandKo : COMPANY_INFO.brandEn}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-white font-semibold">{lang === 'ko' ? '공식 이메일:' : 'E-mail:'}</strong>{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-400 hover:text-emerald-300 transition-colors underline-offset-2 hover:underline">
                {COMPANY_INFO.email}
              </a>
            </span>
          </div>

          {/* Line 2: Location, Phone, Fax & Direct line */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-400">
            <span>
              <strong className="text-slate-200 font-semibold">{lang === 'ko' ? '본사 및 1공장:' : 'Headquarters:'}</strong> {lang === 'ko' ? COMPANY_INFO.address : COMPANY_INFO.addressEn}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-slate-200 font-semibold">{lang === 'ko' ? '대표전화:' : 'Tel:'}</strong> {COMPANY_INFO.phone}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-slate-200 font-semibold">{lang === 'ko' ? '팩스:' : 'Fax:'}</strong> {COMPANY_INFO.fax}
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              <strong className="text-slate-200 font-semibold">{lang === 'ko' ? '담당자 직통:' : 'Direct:'}</strong>{' '}
              <span className="text-slate-200 font-medium">{COMPANY_INFO.mobile}</span>
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div>
            Copyright © {new Date().getFullYear()} {lang === 'ko' ? '맥섬석GM㈜' : 'Macsumsuk GM Co., Ltd.'} / Growfeed®. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onOpenPolicy?.('privacy')}
              className="hover:text-emerald-400 text-slate-300 transition-colors cursor-pointer"
            >
              {lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenPolicy?.('anti-spam')}
              className="hover:text-emerald-400 text-slate-300 transition-colors cursor-pointer"
            >
              {lang === 'ko' ? '이메일무단수집거부' : 'Anti-Spam Policy'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
