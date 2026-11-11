import React, { useState, useEffect } from 'react';
import { ShieldCheck, Mail, ArrowLeft, Home, FileText, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface PolicyPageViewProps {
  lang: Language;
  initialTab?: 'privacy' | 'anti-spam';
  onGoHome: () => void;
}

export const PolicyPageView: React.FC<PolicyPageViewProps> = ({
  lang,
  initialTab = 'privacy',
  onGoHome,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'anti-spam'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTab]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Breadcrumb & Home Navigation Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <button
              onClick={onGoHome}
              className="hover:text-emerald-700 flex items-center transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>{lang === 'ko' ? '홈' : 'Home'}</span>
            </button>
            <span>/</span>
            <span className="text-slate-800 font-bold">
              {activeTab === 'privacy' 
                ? (lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy')
                : (lang === 'ko' ? '이메일무단수집거부' : 'Anti-Spam Policy')}
            </span>
          </div>

          {/* 메인 홈으로 버튼 (Back to Home) */}
          <button
            onClick={onGoHome}
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow-md transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
            <span>{lang === 'ko' ? '메인 홈으로' : 'Back to Home'}</span>
          </button>
        </div>

        {/* Tab Selection Switcher */}
        <div className="flex rounded-xl bg-slate-200/80 p-1.5 max-w-md">
          <button
            onClick={() => {
              setActiveTab('privacy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center justify-center space-x-2 ${
              activeTab === 'privacy'
                ? 'bg-white text-emerald-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('anti-spam');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all cursor-pointer flex items-center justify-center space-x-2 ${
              activeTab === 'anti-spam'
                ? 'bg-white text-emerald-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>{lang === 'ko' ? '이메일무단수집거부' : 'Anti-Spam Policy'}</span>
          </button>
        </div>

        {/* Policy Content Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-10 space-y-8 text-slate-800">
          
          {/* TAB 1: 개인정보처리방침 */}
          {activeTab === 'privacy' && (
            <article className="space-y-8">
              {/* Header Title */}
              <div className="space-y-3 pb-6 border-b border-slate-200">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-900">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-700" />
                  <span>{lang === 'ko' ? '법적 고지 및 준수' : 'Legal Compliance'}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {lang === 'ko' ? '개인정보처리방침' : 'Privacy Policy'}
                </h1>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {lang === 'ko' ? (
                    <><strong>맥섬석GM㈜</strong>(이하 '회사' 또는 '서비스')은 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 본 서비스는 이용자의 개인정보를 수집하지 않음을 원칙으로 하며, 이에 따른 방침을 다음과 같이 안내합니다.</>
                  ) : (
                    <><strong>Macsumsuk GM Co., Ltd.</strong> (hereinafter referred to as the 'Company' or 'Service') values the personal information of our users and strictly complies with the Personal Information Protection Act and related laws. As a principle, this website does not collect, store, or process any personal information, and our policies are outlined below.</>
                  )}
                </p>
              </div>

              {/* Sections 1 to 5 */}
              <div className="space-y-6 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                
                {/* 1. 개인정보의 수집 및 이용 목적 */}
                <div className="space-y-2 bg-slate-50/70 p-5 rounded-xl border border-slate-200">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center">
                    <span className="w-6 h-6 rounded-md bg-emerald-600 text-white inline-flex items-center justify-center text-xs font-bold mr-2.5">1</span>
                    {lang === 'ko' ? '개인정보의 수집 및 이용 목적' : 'Purpose of Collection and Use of Personal Information'}
                  </h2>
                  <p className="text-slate-700 pl-8">
                    {lang === 'ko'
                      ? '본 서비스는 회원가입, 로그인, 유료 결제 등의 기능이 없으며, 어떠한 형태의 개인정보(이름, 이메일, 전화번호, 주소 등)도 수집하거나 저장·활용하지 않습니다.'
                      : 'This service operates without user registration, logins, or payment processing, and does not collect, store, or process any personal information (names, emails, telephone numbers, or physical addresses).'}
                  </p>
                </div>

                {/* 2. 개인정보의 제3자 제공 및 위탁 */}
                <div className="space-y-2 bg-slate-50/70 p-5 rounded-xl border border-slate-200">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center">
                    <span className="w-6 h-6 rounded-md bg-emerald-600 text-white inline-flex items-center justify-center text-xs font-bold mr-2.5">2</span>
                    {lang === 'ko' ? '개인정보의 제3자 제공 및 위탁' : 'Provision to Third Parties and Entrustment'}
                  </h2>
                  <p className="text-slate-700 pl-8">
                    {lang === 'ko'
                      ? '본 서비스는 이용자의 개인정보를 수집하지 않으므로, 수집된 정보를 제3자에게 제공하거나 외부 업체에 처리를 위탁하는 행위가 전혀 발생하지 않습니다.'
                      : 'Since this service collects no personal data, no sharing, disclosure to third parties, or processing entrustment to external agencies occurs under any circumstances.'}
                  </p>
                </div>

                {/* 3. 인터넷 접속정보파일(쿠키 등)의 설치·운영 및 거부 */}
                <div className="space-y-2 bg-slate-50/70 p-5 rounded-xl border border-slate-200">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center">
                    <span className="w-6 h-6 rounded-md bg-emerald-600 text-white inline-flex items-center justify-center text-xs font-bold mr-2.5">3</span>
                    {lang === 'ko' ? '인터넷 접속정보파일(쿠키 등)의 설치·운영 및 거부' : 'Installation, Operation, and Refusal of Cookies'}
                  </h2>
                  <div className="space-y-2 pl-8 text-slate-700">
                    <p>
                      {lang === 'ko'
                        ? '본 서비스는 이용자를 식별하거나 개인화된 마케팅을 목적으로 하는 쿠키(Cookie) 및 추적 기술을 사용하지 않습니다.'
                        : 'This website does not use cookies or tracking technologies for individual user identification, behavioral advertising, or personalized marketing.'}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 bg-white p-3 rounded-lg border border-slate-200">
                      {lang === 'ko'
                        ? '(웹 호스팅 또는 기본 세션 유지를 위한 임시 기술적 로그가 있는 경우: 서비스 접속 시 시스템 보안 및 트래픽 안정성 유지를 위해 생성되는 서버 접속 기록은 개인을 특정할 수 없으며, 일정 기간 후 자동으로 파기됩니다.)'
                        : '(Standard web server access logs generated solely for infrastructure stability and cybersecurity cannot identify individual persons and are automatically purged after a designated retention period.)'}
                    </p>
                  </div>
                </div>

                {/* 4. 개인정보 보호책임자 및 문의처 */}
                <div className="space-y-3 bg-slate-50/70 p-5 rounded-xl border border-slate-200">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center">
                    <span className="w-6 h-6 rounded-md bg-emerald-600 text-white inline-flex items-center justify-center text-xs font-bold mr-2.5">4</span>
                    {lang === 'ko' ? '개인정보 보호책임자 및 문의처' : 'Data Protection Officer & Contact Information'}
                  </h2>
                  <p className="text-slate-700 pl-8">
                    {lang === 'ko'
                      ? '개인정보 보호와 관련된 문의사항이나 의견이 있으신 경우 아래의 연락처로 문의해 주시기 바랍니다.'
                      : 'If you have any questions or feedback regarding privacy and personal data protection, please contact:'}
                  </p>
                  <div className="ml-8 p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 text-slate-800 font-medium">
                    <div><strong>{lang === 'ko' ? '책임자 :' : 'Officer :'}</strong> {lang === 'ko' ? '대표이사 곽성근' : 'CEO Sung-Geun Kwak'}</div>
                    <div><strong>{lang === 'ko' ? '대표번호 :' : 'Telephone :'}</strong> +82-54-336-6000</div>
                    <div><strong>{lang === 'ko' ? '이메일 :' : 'E-mail :'}</strong> {COMPANY_INFO.email}</div>
                  </div>
                </div>

                {/* 5. 개인정보처리방침의 변경 */}
                <div className="space-y-2 bg-slate-50/70 p-5 rounded-xl border border-slate-200">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center">
                    <span className="w-6 h-6 rounded-md bg-emerald-600 text-white inline-flex items-center justify-center text-xs font-bold mr-2.5">5</span>
                    {lang === 'ko' ? '개인정보처리방침의 변경' : 'Amendments to Privacy Policy'}
                  </h2>
                  <p className="text-slate-700 pl-8">
                    {lang === 'ko'
                      ? '본 방침은 법령 개정, 정부 지침 변경 또는 서비스 기능 변경에 따라 내용이 수정될 수 있습니다. 변경 사항이 발생할 경우 웹사이트를 통해 공지합니다.'
                      : 'This policy may be amended in accordance with statutory updates, regulatory directives, or service enhancements. Any modifications will be notified publicly via this website.'}
                  </p>
                </div>

                {/* Dates */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-slate-500">
                  <div>{lang === 'ko' ? '공고일자: 2026년 08월 24일' : 'Notification Date: August 24, 2026'}</div>
                  <div>{lang === 'ko' ? '시행일자: 2026년 08월 24일' : 'Effective Date: August 24, 2026'}</div>
                </div>
              </div>
            </article>
          )}

          {/* TAB 2: 이메일 무단 수집 거부 */}
          {activeTab === 'anti-spam' && (
            <article className="space-y-8">
              {/* Header Title */}
              <div className="space-y-3 pb-6 border-b border-slate-200">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900">
                  <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-700" />
                  <span>{lang === 'ko' ? '전자우편 보호 정책' : 'Anti-Spam Protection'}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {lang === 'ko' ? '이메일 무단 수집 거부' : 'Anti-Spam Email Collection Rejection'}
                </h1>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {lang === 'ko'
                    ? '본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.'
                    : 'We strictly reject the unauthorized scraping, automated extraction, or harvesting of email addresses published on this website using automated software or technical devices.'}
                </p>
              </div>

              {/* Notice Body */}
              <div className="space-y-6 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                
                <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-200/80 space-y-3 text-slate-800">
                  <p className="font-medium leading-relaxed">
                    {lang === 'ko' ? (
                      <>이를 위반하여 이메일 주소를 무단 수집·판매·유통하거나 이를 이용해 영리 목적의 광고성 정보를 전송할 경우, <strong>「개인정보 보호법」</strong> 및 <strong>「정보통신망 이용촉진 및 정보보호 등에 관한 법률」</strong> 등 관련 법령에 의해 형사처벌을 받을 수 있습니다.</>
                    ) : (
                      <>Any unauthorized extraction, distribution, commercial brokerage, or dispatch of unsolicited commercial advertising to harvested addresses is subject to severe criminal penalization under the <strong>Personal Information Protection Act</strong> and the <strong>Act on Promotion of Information and Communications Network Utilization and Information Protection</strong>.</>
                    )}
                  </p>
                  <div className="text-xs font-semibold text-amber-900 pt-2 border-t border-amber-200/60">
                    {lang === 'ko' ? '게시일자: 2026년 08월 24일' : 'Published Date: August 24, 2026'}
                  </div>
                </div>

                {/* Relevant Law Box */}
                <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center text-emerald-800">
                    <FileText className="w-5 h-5 mr-2 text-emerald-600" />
                    {lang === 'ko' ? '관련 법령 안내' : 'Relevant Legal Provisions'}
                  </h2>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 pl-2 sm:pl-7 leading-relaxed">
                    <p className="font-bold text-slate-900">
                      {lang === 'ko'
                        ? '정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조의2 (전자우편주소의 무단 수집행위 등 금지)'
                        : 'Article 50-2 of the Information & Communications Network Act (Prohibition of Unauthorized Collection of Email Addresses)'}
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-2">
                      <li>
                        {lang === 'ko'
                          ? '누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니 된다.'
                          : 'No person shall harvest email addresses from websites using automated email collection programs or other technological means without prior consent of the website operator.'}
                      </li>
                      <li>
                        {lang === 'ko'
                          ? '누구든지 위 규정을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니 된다.'
                          : 'No person shall sell or distribute email addresses collected in violation of the preceding paragraph.'}
                      </li>
                      <li>
                        {lang === 'ko'
                          ? '누구든지 위 규정에 따라 수집·판매 및 유통이 금지된 전자우편주소임을 알면서 이를 정보 전송에 이용하여서는 아니 된다.'
                          : 'No person shall utilize an email address for transmitting information knowing that its collection, sale, or distribution was prohibited under the provisions above.'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Bottom Action Section with Home Button */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              {lang === 'ko' 
                ? '맥섬석GM㈜은 투명하고 안전한 웹 표준 및 개인정보 보호 규정을 철저히 준수합니다.' 
                : 'Macsumsuk GM strictly adheres to transparent web standards and privacy protection.'}
            </div>
            
            <button
              onClick={onGoHome}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
              <span>{lang === 'ko' ? '메인 홈으로 돌아가기' : 'Back to Main Home'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
