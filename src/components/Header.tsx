import React, { useState } from 'react';
import { 
  Globe, 
  Phone, 
  Mail, 
  Download, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GNB_CATEGORIES, COMPANY_INFO } from '../data/companyData';
import { Language, MainCategoryKey } from '../types';

interface HeaderProps {
  lang: Language;
  currentView: 'home' | MainCategoryKey | 'privacy' | 'anti-spam';
  onToggleLang: () => void;
  onGoHome: () => void;
  onOpenCategory: (categoryKey: MainCategoryKey, subId?: string) => void;
  onOpenInquiry: () => void;
  onOpenBrochure: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  currentView,
  onToggleLang,
  onGoHome,
  onOpenCategory,
  onOpenInquiry,
  onOpenBrochure,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<MainCategoryKey | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<MainCategoryKey | null>(null);

  const handleNavClick = (catKey: MainCategoryKey, subId?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenCategory(catKey, subId);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs sm:text-[13px] border-b border-slate-800 py-0.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[38.5px] sm:h-[39px] flex items-center justify-between">
          <div className="flex items-center space-x-2.5 sm:space-x-4 text-xs sm:text-[13px]">
            <span className="inline-flex items-center text-emerald-400 font-semibold tracking-tight">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-400 shrink-0" />
              {lang === 'ko' ? '저메탄 · ESG 환경과 사람 · 축산 BIO' : 'Low Methane · ESG Environment, People & Livestock BIO'}
            </span>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <a
              href="http://wellion.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs sm:text-[12.5px] font-bold bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/80 hover:border-emerald-400 transition-all shadow-sm tracking-tight cursor-pointer"
              title={lang === 'ko' ? '맥섬석 본사홈페이지로 바로가기 (새 창)' : 'Visit Macsumsuk HQ Website (New Window)'}
            >
              <span className="font-bold">{lang === 'ko' ? '맥섬석 본사홈페이지로 바로가기' : 'Macsumsuk HQ Website'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-100 shrink-0" />
            </a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Language Switcher */}
            <button
              id="header-lang-toggle-btn"
              onClick={onToggleLang}
              className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/80 hover:bg-emerald-900 transition-colors cursor-pointer"
              title="언어 변경 / Change Language"
            >
              <Globe className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              <span className={lang === 'ko' ? 'font-bold text-white' : 'text-slate-400'}>KOR</span>
              <span className="mx-1 text-slate-600">/</span>
              <span className={lang === 'en' ? 'font-bold text-white' : 'text-slate-400'}>ENG</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main GNB Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* CI Logo */}
          <div 
            onClick={onGoHome}
            className="flex items-center space-x-3 cursor-pointer group py-1 select-none"
          >
            <div className="h-11 sm:h-12 flex items-center shrink-0">
              <img
                src="https://lh3.googleusercontent.com/d/1PD7I_QfLtcn5SMlGT07tG2tYzQa_9bCD"
                alt="맥섬석GM CI Logo"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="h-10 sm:h-12 w-auto max-w-[140px] sm:max-w-[180px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xs"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {lang === 'ko' ? '맥섬석' : 'Macsumsuk'}<span className="text-emerald-700">GM</span><span className="text-xs font-semibold text-slate-500 ml-0.5">{lang === 'ko' ? '㈜' : ' Co., Ltd.'}</span>
                </span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {lang === 'ko' ? '그로피드®' : 'Growfeed®'}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-tight">
                {lang === 'ko' ? '40년 업력 축산바이오 · 52개국 글로벌 특허' : 'Livestock Biotech Heritage Since 1986 · 52 Global Patents'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {GNB_CATEGORIES.map((category) => {
              const isOpen = activeDropdown === category.key;
              const isActive = currentView === category.key;
              return (
                <div
                  key={category.key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(category.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    id={`gnb-btn-${category.key}`}
                    onClick={() => handleNavClick(category.key)}
                    className={`px-3 py-2 rounded-md text-sm font-semibold flex items-center space-x-1 transition-all cursor-pointer ${
                      isActive
                        ? 'text-emerald-800 bg-emerald-100/80 font-bold border-b-2 border-emerald-600'
                        : isOpen
                        ? 'text-emerald-700 bg-emerald-50/80'
                        : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-100/70'
                    }`}
                  >
                    <span>{lang === 'ko' ? category.depth1Ko : category.depth1En}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                  </button>

                  {/* Mega Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-slate-200/90 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="px-3 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">
                          {lang === 'ko' ? category.depth1Ko : category.depth1En}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
                          {lang === 'ko' ? '상세보기' : 'View Detail'}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        {category.subCategories.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(category.key, sub.id)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-emerald-50/80 transition-colors group cursor-pointer flex items-center justify-between"
                          >
                            <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-800">
                              {lang === 'ko' ? sub.titleKo : sub.titleEn}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                          </button>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                        <button
                          onClick={() => handleNavClick(category.key)}
                          className="w-full py-1.5 text-center text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors flex items-center justify-center space-x-1"
                        >
                          <span>{lang === 'ko' ? `${category.depth1Ko} 전체보기` : `View All ${category.depth1En}`}</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              id="header-inquiry-cta"
              onClick={onOpenInquiry}
              className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-linear-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              {lang === 'ko' ? '온라인 문의' : 'Online Inquiry'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenInquiry}
              className="px-2.5 py-1.5 rounded-md text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700"
            >
              {lang === 'ko' ? '문의' : 'Inquiry'}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-emerald-700 hover:bg-slate-100"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 max-h-[80vh] overflow-y-auto px-4 py-4 space-y-3 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900">
              {lang === 'ko' ? '맥섬석GM(주) 전체 메뉴' : 'All Categories'}
            </span>
            <button
              onClick={onOpenBrochure}
              className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded flex items-center"
            >
              <Download className="w-3 h-3 mr-1" />
              {lang === 'ko' ? '소개서 PDF' : 'Brochure'}
            </button>
          </div>

          <div className="space-y-1">
            {GNB_CATEGORIES.map((category) => {
              const isExpanded = mobileExpandedCat === category.key;
              const isActive = currentView === category.key;
              return (
                <div key={category.key} className="border border-slate-100 rounded-lg overflow-hidden">
                  <div className={`flex items-center justify-between px-3 py-2.5 ${isActive ? 'bg-emerald-100/70' : 'bg-slate-50/80'}`}>
                    <button
                      onClick={() => handleNavClick(category.key)}
                      className="text-sm font-bold text-slate-900 text-left flex-1"
                    >
                      {lang === 'ko' ? category.depth1Ko : category.depth1En}
                    </button>
                    <button
                      onClick={() => setMobileExpandedCat(isExpanded ? null : category.key)}
                      className="p-1 text-slate-400 hover:text-slate-700"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-emerald-600' : ''}`} />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="bg-white px-3 py-2 space-y-1.5 border-t border-slate-100">
                      {category.subCategories.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(category.key, sub.id)}
                          className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-50 text-xs flex items-center justify-between text-slate-700"
                        >
                          <span>{lang === 'ko' ? sub.titleKo : sub.titleEn}</span>
                          <ArrowRight className="w-3 h-3 text-slate-400" />
                        </button>
                      ))}
                      <div className="pt-2">
                        <button
                          onClick={() => handleNavClick(category.key)}
                          className="w-full text-center py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded"
                        >
                          {lang === 'ko' ? '상세보기' : 'View Detail'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2.5 bg-emerald-600 text-white font-bold text-sm rounded-lg text-center shadow-sm"
            >
              {lang === 'ko' ? '온라인 문의하기' : 'Contact Us Online'}
            </button>
            <div className="text-center text-xs text-slate-500 pt-1">
              {lang === 'ko' ? '대표번호:' : 'Tel:'} {COMPANY_INFO.phone} | {lang === 'ko' ? '이메일:' : 'Email:'} {COMPANY_INFO.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
