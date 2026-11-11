/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoreCompetencies } from './components/CoreCompetencies';
import { ProductSection } from './components/ProductSection';
import { GlobalCountersSection } from './components/GlobalCountersSection';
import { ValidationStatsSection } from './components/ValidationStatsSection';
import { VisualGallerySection } from './components/VisualGallerySection';
import { OnlineInquirySection } from './components/OnlineInquirySection';
import { Footer } from './components/Footer';
import { Language, MainCategoryKey } from './types';
import { downloadBrochurePdf } from './utils';

// Code-split heavy page views to keep the initial page bundle ultra-light
const CategoryPageView = React.lazy(() =>
  import('./components/CategoryPageView').then((m) => ({ default: m.CategoryPageView }))
);
const PolicyPageView = React.lazy(() =>
  import('./components/PolicyPageView').then((m) => ({ default: m.PolicyPageView }))
);

const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return null;
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch {
      // Ignore quota or security restrictions in iframe
    }
  },
};

/**
 * Detect whether the visitor is accessing from Korea or overseas.
 * - Korea access -> Korean ('ko')
 * - Foreign access -> English ('en')
 * - Explicit user toggle stored in localStorage is always respected.
 */
function detectInitialLanguage(): Language {
  try {
    // 1. Check if the user explicitly chose a language before
    const saved = safeStorage.getItem('growfeed_user_lang');
    if (saved === 'ko' || saved === 'en') {
      return saved;
    }

    // 2. Check Device Timezone (Korea Standard Time uses Asia/Seoul or ROK)
    const timeZone = (typeof Intl !== 'undefined' && Intl.DateTimeFormat().resolvedOptions().timeZone) || '';
    const isKoreaTimezone =
      timeZone === 'Asia/Seoul' ||
      timeZone === 'ROK' ||
      timeZone.includes('Seoul') ||
      timeZone.includes('Korea');

    // 3. Check browser locale language
    const langs =
      typeof navigator !== 'undefined' && navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [typeof navigator !== 'undefined' ? navigator.language || '' : ''];
    const primaryLang = (langs[0] || '').toLowerCase();
    const isKoreanLocale = primaryLang.startsWith('ko');

    // If connected from Korea (Korean timezone or Korean browser language) -> 'ko'
    if (isKoreaTimezone || isKoreanLocale) {
      return 'ko';
    }

    return 'en';
  } catch {
    return 'ko';
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>(detectInitialLanguage);
  
  // In-page view state: 'home' or a specific category key or policy pages
  const [currentView, setCurrentView] = useState<'home' | MainCategoryKey | 'privacy' | 'anti-spam'>('home');
  const [activeSubId, setActiveSubId] = useState<string | undefined>(undefined);
  
  // Initial inquiry topic
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  const handleDownloadBrochure = () => {
    downloadBrochurePdf(lang);
  };

  // Synchronize document lang, title, and meta descriptions dynamically for Naver & Google SEO
  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;

        const viewTitlesKo: Record<string, string> = {
          home: '맥섬석GM(주) | Growfeed® - 친환경 축산 사료첨가제·저메탄 사료·ESG 바이오 비료',
          about: '회사 개요 및 본사 공장 현황도 | 맥섬석GM(주)',
          feed: '그로피드 사료첨가제 (이톡스·프로테인·DCM) | 맥섬석GM(주)',
          egg: '치유계란® - 콜린 2.6배·오메가3 고영양 프리미엄란 | 맥섬석GM(주)',
          'core-fertilizer': '코어 유기질 비료 - 축산부산물 100% 자원순환 | 맥섬석GM(주)',
          rnd: 'R&D 연구개발 및 서울대·경북대 산학실증 | 맥섬석GM(주)',
          csr: 'ESG 지속가능경영 및 탄소중립 실천 | 맥섬석GM(주)',
          notice: '공지사항 및 52개국 특허 인증 | 맥섬석GM(주)',
          customer: '고객지원 및 온라인 제품 구매/상담 문의 | 맥섬석GM(주)',
          privacy: '개인정보처리방침 | 맥섬석GM(주)',
          'anti-spam': '이메일무단수집거부 | 맥섬석GM(주)'
        };

        const viewTitlesEn: Record<string, string> = {
          home: 'Macsumsuk GM | Growfeed® - Eco-Friendly Livestock Feed Additives & Low-Methane Tech',
          about: 'About Us & Head Office Complex Blueprint | Macsumsuk GM',
          feed: 'Growfeed® Feed Additives (E-TOX, Protein, DCM) | Macsumsuk GM',
          egg: 'Healing Egg® - 2.6x Choline & Omega-3 Premium Bio Egg | Macsumsuk GM',
          'core-fertilizer': 'Core Eco-Fertilizer - 100% Circular Organic Fertilizer | Macsumsuk GM',
          rnd: 'R&D & University Academic Field Trials | Macsumsuk GM',
          csr: 'ESG Sustainable Management & Carbon Neutrality | Macsumsuk GM',
          notice: 'Announcements & Global 52-Nation Patents | Macsumsuk GM',
          customer: 'Customer Inquiries & Product Consultation | Macsumsuk GM',
          privacy: 'Privacy Policy | Macsumsuk GM',
          'anti-spam': 'Anti-Spam Policy | Macsumsuk GM'
        };

        const newTitle = lang === 'ko' 
          ? (viewTitlesKo[currentView] || viewTitlesKo.home)
          : (viewTitlesEn[currentView] || viewTitlesEn.home);

        document.title = newTitle;

        // Sync og:title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', newTitle);
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle) twTitle.setAttribute('content', newTitle);
      }
    } catch {
      // Ignore in non-browser env
    }
  }, [lang, currentView]);

  const toggleLanguage = () => {
    setLang((prev) => {
      const next: Language = prev === 'ko' ? 'en' : 'ko';
      safeStorage.setItem('growfeed_user_lang', next);
      return next;
    });
  };

  const handleOpenCategory = (catKey: MainCategoryKey, subId?: string) => {
    setCurrentView(catKey);
    setActiveSubId(subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPolicy = (type: 'privacy' | 'anti-spam') => {
    setCurrentView(type);
    setActiveSubId(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setCurrentView('home');
    setActiveSubId(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToInquiry = (topic?: string) => {
    if (topic) setInquiryTopic(topic);
    
    // If not in home view, switch to home first, then scroll
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById('online-inquiry-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('online-inquiry-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Header & Global Navigation */}
      <Header
        lang={lang}
        currentView={currentView}
        onToggleLang={toggleLanguage}
        onGoHome={handleGoHome}
        onOpenCategory={handleOpenCategory}
        onOpenInquiry={() => handleScrollToInquiry()}
        onOpenBrochure={handleDownloadBrochure}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            {/* 1. Hero Zone & Main Copy */}
            <HeroSection
              lang={lang}
              onOpenCategory={handleOpenCategory}
              onScrollToInquiry={() => handleScrollToInquiry()}
              onOpenBrochure={handleDownloadBrochure}
            />

            {/* 2. Key Products Highlights: 그로피드(Growfeed®) 핵심 제품군 */}
            <ProductSection
              lang={lang}
              onOpenProduct={(prodId) => handleOpenCategory('products', prodId)}
              onOpenLivestockGuide={() => handleOpenCategory('products', 'livestock-guide')}
            />

            {/* 3. Global Performance Counters: 글로벌 성과 & 정량 지표 */}
            <GlobalCountersSection
              lang={lang}
              onOpenGlobal={() => handleOpenCategory('global', 'export-status')}
            />

            {/* 4. 3 Core Competency Boxes: 맥섬석GM 3대 핵심 경쟁력 */}
            <CoreCompetencies
              lang={lang}
              onOpenCategory={handleOpenCategory}
            />

            {/* 5. Scientific Validation & Proofs */}
            <ValidationStatsSection
              lang={lang}
              onOpenRnd={() => handleOpenCategory('rnd', 'methane-trials')}
            />

            {/* 6. Production Facilities & Global Field Photo Gallery */}
            <VisualGallerySection
              lang={lang}
              onOpenPR={() => handleOpenCategory('pr', 'gallery')}
            />

            {/* 7. Online Inquiry Form Directly Visible at the Bottom */}
            <OnlineInquirySection
              lang={lang}
              onOpenBrochure={handleDownloadBrochure}
              initialCategory={inquiryTopic}
            />
          </>
        ) : (
          <Suspense
            fallback={
              <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 py-24">
                <div className="w-10 h-10 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs font-semibold text-slate-400 tracking-wide">
                  {lang === 'ko' ? '화면을 로딩 중입니다...' : 'Loading view...'}
                </p>
              </div>
            }
          >
            {currentView === 'privacy' || currentView === 'anti-spam' ? (
              /* Privacy & Anti-Spam Policy Page View */
              <PolicyPageView
                lang={lang}
                initialTab={currentView}
                onGoHome={handleGoHome}
              />
            ) : (
              /* Detailed Category Page View (Rendered in the Same Window) */
              <CategoryPageView
                categoryKey={currentView}
                subCategoryId={activeSubId}
                lang={lang}
                onGoHome={handleGoHome}
                onSwitchCategory={(catKey, subId) => {
                  setCurrentView(catKey);
                  setActiveSubId(subId);
                }}
                onOpenInquiry={(topic) => handleScrollToInquiry(topic)}
                onOpenBrochure={handleDownloadBrochure}
              />
            )}
          </Suspense>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenCategory={handleOpenCategory}
        onOpenBrochure={handleDownloadBrochure}
        onOpenPolicy={handleOpenPolicy}
      />
    </div>
  );
}
