import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Clock,
  Sparkles,
  Building2,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language, InquiryFormData } from '../types';
import { downloadBrochurePdf } from '../utils';

interface OnlineInquiryProps {
  lang: Language;
  onOpenBrochure?: () => void;
  initialCategory?: string;
}

export const OnlineInquirySection: React.FC<OnlineInquiryProps> = ({
  lang,
  initialCategory,
}) => {
  const defaultCategory = lang === 'ko' ? '축종별 맞춤 컨설팅' : 'Livestock Tailored Consulting';

  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'done'>('idle');
  const [formData, setFormData] = useState<InquiryFormData>({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    category: initialCategory || defaultCategory,
    livestockType: '반추동물(한우/젖소)',
    message: '',
    agreePrivacy: true,
  });

  useEffect(() => {
    if (initialCategory) {
      setFormData(prev => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.phone) {
      setErrorMsg(lang === 'ko' ? '회사명, 담당자 성명, 연락처는 필수 입력 항목입니다.' : 'Please fill in Company, Name, and Phone.');
      return;
    }
    if (!formData.agreePrivacy) {
      setErrorMsg(lang === 'ko' ? '개인정보 처리방침에 동의해 주셔야 합니다.' : 'Please accept the privacy terms.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const payload: Record<string, string> = {
        '회사명/농장명': formData.companyName,
        '담당자 성명': formData.contactName,
        '연락처': formData.phone,
        '이메일': formData.email || '미입력 (Not provided)',
        '문의 항목': formData.category,
        '적용 축종': formData.livestockType,
        '문의 및 요청 내용': formData.message || '내용 없음 (No message)',
        '개인정보 수집 동의': formData.agreePrivacy ? '동의함 (Agreed)' : '동의안함',
        '_subject': `[맥섬석GM 홈페이지 문의] ${formData.companyName} / ${formData.contactName}`,
        '접수 일시': new Date().toLocaleString(lang === 'ko' ? 'ko-KR' : 'en-US', { hour12: false }),
        '접수 언어': lang.toUpperCase(),
      };

      // Add _replyto if email is provided so notifications can be replied to directly
      if (formData.email && formData.email.trim()) {
        payload['_replyto'] = formData.email.trim();
      }

      const response = await fetch('https://formspree.io/f/mppqwzll', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const result = await response.json().catch(() => null);
        if (result && result.errors && Array.isArray(result.errors) && result.errors.length > 0) {
          const detail = result.errors.map((item: { message: string }) => item.message).join(', ');
          setErrorMsg(lang === 'ko' ? `접수 전송 오류: ${detail}` : `Submission error: ${detail}`);
        } else {
          setErrorMsg(
            lang === 'ko'
              ? `문의 전송 중 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주시거나 대표전화(${COMPANY_INFO.phone})로 문의해주세요.`
              : `A temporary error occurred while sending your inquiry. Please try again or call us (+82-54-336-6000).`
          );
        }
      }
    } catch (err) {
      console.error('Formspree submission error:', err);
      setErrorMsg(
        lang === 'ko'
          ? `네트워크 연결 상태를 확인 후 다시 시도해주시거나 대표전화(${COMPANY_INFO.phone})로 문의해주세요.`
          : 'Network error. Please check your connection and try again, or reach us by phone.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      category: defaultCategory,
      livestockType: '반추동물(한우/젖소)',
      message: '',
      agreePrivacy: true,
    });
    setIsSubmitted(false);
  };

  const handleBrochureDownload = () => {
    setDownloadState('downloading');
    
    // Direct file download without popup or explanation window
    downloadBrochurePdf(lang);

    setTimeout(() => {
      setDownloadState('done');
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    }, 400);
  };

  return (
    <section id="online-inquiry-section" className="py-16 sm:py-24 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
            <Mail className="w-4 h-4" />
            <span>{lang === 'ko' ? '온라인 고객 문의 및 파트너십 제안' : 'Online Inquiry & Partnership'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            {lang === 'ko' ? '견적 · 축종별 맞춤 컨설팅 · 샘플 신청 · 제휴 문의' : 'Quotation · Species-Tailored Consulting · Sample Request · Partnerships'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {lang === 'ko'
              ? '문의를 남겨주시면 맥섬석GM 전문 기술영업팀이 검토 후 24시간 이내에 신속하게 답변드립니다.'
              : 'Our technical team will review your request and get back to you within 24 business hours.'}
          </p>
        </div>

        {/* 2-Column Layout: Left Contact Card & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact & Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone & Email Box */}
            <div className="bg-slate-850 p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center">
                <Building2 className="w-5 h-5 text-emerald-400 mr-2.5" />
                {lang === 'ko' ? '본사 및 직통 연락처' : 'Headquarters & Direct Line'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-800/90 border border-slate-700/70">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-medium">{lang === 'ko' ? '대표 전화 (상담/주문)' : 'Main Telephone'}</span>
                    <span className="text-lg font-black text-white mt-0.5 block">{COMPANY_INFO.phone}</span>
                    <span className="text-xs text-slate-400 block mt-1">
                      {lang === 'ko' ? '평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)' : 'Mon-Fri 09:00 ~ 18:00 KST'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-800/90 border border-slate-700/70">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-medium">{lang === 'ko' ? '기술영업 담당자 직통' : 'Direct Technical Rep'}</span>
                    <span className="text-base font-bold text-emerald-300 mt-0.5 block">{COMPANY_INFO.mobile}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-800/90 border border-slate-700/70">
                  <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-medium">{lang === 'ko' ? '공식 접수 이메일' : 'Official Email'}</span>
                    <span className="text-sm font-semibold text-slate-200 block mt-0.5">{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-800/90 border border-slate-700/70">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-xs font-medium">{lang === 'ko' ? '본사 및 메인 1공장' : 'Headquarters & Plant 1'}</span>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed block mt-0.5 font-normal">
                      {lang === 'ko' ? COMPANY_INFO.address : COMPANY_INFO.addressEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Brochure Download Trigger (No explanation modal window) */}
              <div className="pt-2">
                <button
                  id="inquiry-download-brochure-btn"
                  onClick={handleBrochureDownload}
                  disabled={downloadState === 'downloading'}
                  title={lang === 'ko' ? '맥섬석GM(주) 기업 및 제품 종합 소개서 2026 PDF 다운로드' : 'Download Macsumsuk GM Company & Product Profile 2026 PDF'}
                  className="w-full py-3.5 px-4 bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-xl flex items-center justify-center space-x-2.5 shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/50 transition-all cursor-pointer disabled:opacity-80"
                >
                  {downloadState === 'downloading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                      <span>{lang === 'ko' ? 'PDF 다운로드 진행 중...' : 'Downloading PDF...'}</span>
                    </>
                  ) : downloadState === 'done' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                      <span>{lang === 'ko' ? '종합 소개서 PDF 다운로드 완료' : 'PDF Download Complete'}</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 text-emerald-200" />
                      <span>{lang === 'ko' ? '기업 및 제품 종합 소개서 PDF 다운로드' : 'Download Company & Product Profile PDF'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-850 p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl">
              {isSubmitted ? (
                /* Submission Success State */
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {lang === 'ko' ? '온라인 문의가 정상 접수되었습니다' : 'Inquiry Submitted Successfully'}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-normal">
                    {lang === 'ko'
                      ? '접수해주신 문의사항이 맥섬석GM㈜ 담당자 메일로 안전하게 전송되었습니다. 담당자가 확인 후 신속하게 연락드리겠습니다.'
                      : 'Your inquiry has been routed to our technical support team. We will be in touch shortly.'}
                  </p>
                  <div className="p-5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-slate-300 max-w-md mx-auto space-y-2 text-left">
                    <div>{lang === 'ko' ? '접수 회사:' : 'Company:'} <span className="font-semibold text-white">{formData.companyName}</span></div>
                    <div>{lang === 'ko' ? '담당자:' : 'Contact:'} <span className="font-semibold text-white">{formData.contactName} ({formData.phone})</span></div>
                    <div>{lang === 'ko' ? '문의 항목:' : 'Category:'} <span className="font-semibold text-emerald-400">{formData.category}</span></div>
                  </div>
                  <div className="pt-3">
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      {lang === 'ko' ? '새로운 문의 작성' : 'Submit Another Inquiry'}
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                    <h3 className="text-lg font-bold text-white">
                      {lang === 'ko' ? '온라인 문의 양식' : 'Inquiry Form'}
                    </h3>
                    <span className="text-xs text-emerald-400 font-medium">
                      * {lang === 'ko' ? '필수 입력 항목' : 'Required'}
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-300 text-sm flex items-center space-x-2.5">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Row 1: Company & Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1.5">
                        {lang === 'ko' ? '회사명 / 농장명' : 'Company / Farm Name'} <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder={lang === 'ko' ? '예: OO농장, OO사료' : 'e.g. Acme Feed Ltd.'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1.5">
                        {lang === 'ko' ? '담당자 성명' : 'Contact Name'} <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder={lang === 'ko' ? '예: 홍길동 팀장' : 'e.g. John Doe'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1.5">
                        {lang === 'ko' ? '연락처 (휴대폰/일반전화)' : 'Phone Number'} <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={lang === 'ko' ? '예: 010-0000-0000' : '+1-000-000-0000'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1.5">
                        {lang === 'ko' ? '이메일 주소' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={lang === 'ko' ? '예: example@company.com' : 'example@company.com'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Inquiry Category & Livestock */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1.5">
                        {lang === 'ko' ? '문의 항목' : 'Inquiry Item'}
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      >
                        <option value={lang === 'ko' ? "Growfeed® 축종별 맞춤 컨설팅" : "Growfeed® Livestock Tailored Consulting"}>
                          {lang === 'ko' ? "1. Growfeed® 축종별 맞춤 컨설팅" : "1. Growfeed® Livestock Tailored Consulting"}
                        </option>
                        <option value={lang === 'ko' ? "견적 문의" : "Price Quote Inquiry"}>
                          {lang === 'ko' ? "2. 견적 문의" : "2. Price Quote Inquiry"}
                        </option>
                        <option value={lang === 'ko' ? "OEM / ODM 맞춤 사료 배합 개발" : "OEM / ODM Custom Feed Formulation"}>
                          {lang === 'ko' ? "3. OEM / ODM 맞춤 사료 배합 개발" : "3. OEM / ODM Custom Feed Formulation"}
                        </option>
                        <option value={lang === 'ko' ? "해외 총판 / 국내 대리점 제휴" : "Global Distributor / Dealership Partnership"}>
                          {lang === 'ko' ? "4. 해외 총판 / 국내 대리점 제휴" : "4. Global Distributor / Dealership Partnership"}
                        </option>
                        <option value={lang === 'ko' ? "기타 문의" : "General Inquiry"}>
                          {lang === 'ko' ? "5. 기타 문의" : "5. General Inquiry"}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1.5">
                        {lang === 'ko' ? '적용 축종 (선택)' : 'Target Livestock Species'}
                      </label>
                      <select
                        name="livestockType"
                        value={formData.livestockType}
                        onChange={(e) => setFormData({ ...formData, livestockType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                      >
                        <option value={lang === 'ko' ? "반추동물(한우/젖소)" : "Ruminants (Beef / Dairy)"}>
                          {lang === 'ko' ? "반추동물 (한우 / 육우 / 젖소)" : "Ruminants (Beef / Dairy)"}
                        </option>
                        <option value={lang === 'ko' ? "양돈(모돈/자돈/비육돈)" : "Swine (Sows / Piglets / Fattening)"}>
                          {lang === 'ko' ? "양돈 (모돈 / 자돈 / 비육돈)" : "Swine (Sows / Piglets / Fattening)"}
                        </option>
                        <option value={lang === 'ko' ? "양계(산란계/육계/오리)" : "Poultry (Layers / Broilers / Ducks)"}>
                          {lang === 'ko' ? "양계 (산란계 / 육계 / 오리)" : "Poultry (Layers / Broilers / Ducks)"}
                        </option>
                        <option value={lang === 'ko' ? "어류/새우(양식장)" : "Aquaculture (Fish / Shrimp)"}>
                          {lang === 'ko' ? "어류 / 새우 (내수면/해수 양식)" : "Aquaculture (Fish / Shrimp)"}
                        </option>
                        <option value={lang === 'ko' ? "반려동물(반려견/반려묘)" : "Pets (Canine / Feline)"}>
                          {lang === 'ko' ? "반려동물 (반려견 / 반려묘)" : "Pets (Canine / Feline)"}
                        </option>
                        <option value={lang === 'ko' ? "기타/배합사료 제조" : "Other / Feed Mill"}>
                          {lang === 'ko' ? "기타 / 배합사료 제조공장" : "Other / Feed Mill"}
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-1.5">
                      {lang === 'ko' ? '문의 및 요청 내용' : 'Message / Details'}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'ko' ? '사육 두수, 요구 규격, 필요 수량, 샘플 요청 등 상세 내용을 입력해주시면 더욱 정확한 상담이 가능합니다.' : 'Please describe your request in detail...'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors leading-relaxed"
                    />
                  </div>

                  {/* Privacy Check */}
                  <div className="flex items-center space-x-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="privacy-agree"
                      checked={formData.agreePrivacy}
                      onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-700 text-emerald-600 focus:ring-emerald-500 bg-slate-800 cursor-pointer"
                    />
                    <label htmlFor="privacy-agree" className="text-xs sm:text-sm text-slate-300 cursor-pointer">
                      {lang === 'ko' ? '개인정보 수집 및 이용(상담 처리 및 제품 안내 목적)에 동의합니다.' : 'I agree to the privacy terms for inquiry handling.'}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>{lang === 'ko' ? '접수 처리 중...' : 'Submitting...'}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>{lang === 'ko' ? '온라인 문의 접수하기' : 'Send Inquiry'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
