import React from 'react';

export type AwardCode = 
  | 'tower' 
  | 'world-class' 
  | 'pride' 
  | 'patent' 
  | 'ip-star' 
  | 'gyeongbuk-sme' 
  | 'taxpayer' 
  | 'gmp-iso' 
  | 'innobiz' 
  | 'halal';

interface AwardEmblemProps {
  code: AwardCode;
  size?: number;
  className?: string;
}

export const AwardEmblem: React.FC<AwardEmblemProps> = ({
  code,
  size = 56,
  className = '',
}) => {
  switch (code) {
    case 'tower':
      // 대한민국 정부 은탑산업훈장 (National Order of Industrial Merit Silver Tower)
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white p-1.5 border border-amber-400/60 shadow-amber-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="대한민국 정부 은탑산업훈장"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            {/* Outer Laurel / Star */}
            <circle cx="24" cy="24" r="22" stroke="#FEF08A" strokeWidth="1.5" strokeDasharray="3 1.5" />
            <circle cx="24" cy="24" r="19" fill="#B45309" />
            <circle cx="24" cy="24" r="16" fill="#F59E0B" stroke="#FEF3C7" strokeWidth="1" />
            {/* Korean Mugunghwa Motif */}
            <path d="M24 13 L26 19 L32 20 L27.5 24 L29 30 L24 26.5 L19 30 L20.5 24 L16 20 L22 19 Z" fill="#FEF08A" stroke="#78350F" strokeWidth="0.8" />
            <circle cx="24" cy="22" r="3" fill="#DC2626" />
            {/* Badge Text */}
            <text x="24" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="900" fontFamily="sans-serif">은탑훈장</text>
          </svg>
        </div>
      );

    case 'world-class':
      // 산업통상자원부 / KOTRA 세계일류상품
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white p-1.5 border border-blue-400/60 shadow-blue-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="산업통상자원부·KOTRA 세계일류상품"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#93C5FD" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="19" fill="#1E40AF" />
            {/* Globe Lat/Long lines */}
            <circle cx="24" cy="20" r="12" stroke="#60A5FA" strokeWidth="1" />
            <ellipse cx="24" cy="20" rx="6" ry="12" stroke="#93C5FD" strokeWidth="0.8" />
            <line x1="12" y1="20" x2="36" y2="20" stroke="#93C5FD" strokeWidth="0.8" />
            {/* Star on top */}
            <path d="M24 10 L25.5 14 L29 14.5 L26.5 17 L27.5 21 L24 19 L20.5 21 L21.5 17 L19 14.5 L22.5 14 Z" fill="#FBBF24" />
            {/* Badge Text */}
            <text x="24" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">세계일류</text>
          </svg>
        </div>
      );

    case 'pride':
      // 경상북도 우수 수출 공동브랜드 PRIDE 기업
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-800 to-slate-900 text-white p-1.5 border border-indigo-400/60 shadow-indigo-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="경상북도 수출 공동브랜드 PRIDE 기업"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <rect x="5" y="5" width="38" height="38" rx="10" fill="#1E1B4B" stroke="#818CF8" strokeWidth="1.5" />
            <path d="M24 10 L35 15 L35 27 C35 34 24 38 24 38 C24 38 13 34 13 27 L13 15 Z" fill="#4338CA" stroke="#A5B4FC" strokeWidth="1.2" />
            <path d="M24 14 L26 19 L31 20 L27 24 L28 29 L24 26 L20 29 L21 24 L17 20 L22 19 Z" fill="#FDE047" />
            <text x="24" y="44" textAnchor="middle" fill="#E0E7FF" fontSize="5" fontWeight="900" fontFamily="sans-serif">경북PRIDE</text>
          </svg>
        </div>
      );

    case 'patent':
      // 대한민국 특허청 원천특허 등록 (KIPO)
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white p-1.5 border border-emerald-400/60 shadow-emerald-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="대한민국 특허청 원천특허 등록"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#6EE7B7" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="18" fill="#065F46" />
            {/* Gear / Patent Stamp Motif */}
            <circle cx="24" cy="20" r="10" stroke="#A7F3D0" strokeWidth="1.5" strokeDasharray="2.5 1.5" />
            <circle cx="24" cy="20" r="6" fill="#047857" stroke="#FEF08A" strokeWidth="1" />
            <path d="M22 17 L26 17 L26 23 L22 23 Z" fill="#FEF08A" />
            <path d="M24 14 L24 17 M24 23 L24 26 M18 20 L21 20 M27 20 L30 20" stroke="#FEF08A" strokeWidth="1.5" />
            {/* Badge Text */}
            <text x="24" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="900" fontFamily="sans-serif">특허등록</text>
          </svg>
        </div>
      );

    case 'ip-star':
      // 특허청 글로벌 IP스타기업
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-950 text-white p-1.5 border border-sky-400/60 shadow-sky-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="특허청 글로벌 IP스타기업"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#7DD3FC" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="18" fill="#075985" />
            {/* Dynamic IP Star Wings */}
            <path d="M24 11 L27 18 L34 19 L29 24 L30.5 31 L24 27 L17.5 31 L19 24 L14 19 L21 18 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="0.8" />
            <text x="24" y="40" textAnchor="middle" fill="#BAE6FD" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">IP-STAR</text>
          </svg>
        </div>
      );

    case 'gyeongbuk-sme':
      // 경상북도 중소기업대상
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-800 to-green-950 text-white p-1.5 border border-emerald-400/60 shadow-emerald-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="경상북도 중소기업대상"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#A7F3D0" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="19" fill="#064E3B" />
            {/* Laurel Wreath */}
            <path d="M14 28 C13 22 15 16 20 13 M34 28 C35 22 33 16 28 13" stroke="#FDE047" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="24" cy="18" r="5" fill="#10B981" stroke="#FEF08A" strokeWidth="1" />
            <path d="M24 15 L25 17 L27 18 L25.5 19.5 L26 21.5 L24 20.5 L22 21.5 L22.5 19.5 L21 18 L23 17 Z" fill="#FEF08A" />
            {/* Badge Text */}
            <text x="24" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">경북대상</text>
          </svg>
        </div>
      );

    case 'taxpayer':
      // 부총리 겸 재정경제부 장관 성실납세자상 / 국세청
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 text-white p-1.5 border border-slate-400/60 shadow-slate-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="성실납세자상 (부총리 겸 재정경제부 장관)"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <rect x="5" y="5" width="38" height="38" rx="10" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Seal / Scales of Justice Motif */}
            <circle cx="24" cy="20" r="11" fill="#334155" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="24" y1="13" x2="24" y2="25" stroke="#F1F5F9" strokeWidth="1.5" />
            <line x1="17" y1="16" x2="31" y2="16" stroke="#F1F5F9" strokeWidth="1.5" />
            <path d="M16 19 C16 22 20 22 20 19 Z M28 19 C28 22 32 22 32 19 Z" fill="#F8FAFC" />
            {/* Badge Text */}
            <text x="24" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">성실납세</text>
          </svg>
        </div>
      );

    case 'gmp-iso':
      // 국제 GMP & ISO 22000 인증 (KMR)
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-red-600 via-rose-700 to-rose-950 text-white p-1.5 border border-rose-400/60 shadow-rose-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="국제 GMP & ISO22000 인증 (KMR)"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <rect x="5" y="5" width="38" height="38" rx="10" fill="#9F1239" stroke="#FDA4AF" strokeWidth="1.5" />
            <circle cx="24" cy="20" r="10" fill="#BE123C" stroke="#FFE4E6" strokeWidth="1" />
            {/* Checkmark Quality Mark */}
            <path d="M19 20 L23 24 L29 16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="24" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">ISO·GMP</text>
          </svg>
        </div>
      );

    case 'innobiz':
      // 중소벤처기업부 Inno-Biz & 기술혁신 벤처기업
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-700 to-slate-900 text-white p-1.5 border border-teal-400/60 shadow-teal-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="중소벤처기업부 Inno-Biz & 벤처기업"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <rect x="5" y="5" width="38" height="38" rx="10" fill="#0E7490" stroke="#67E8F9" strokeWidth="1.5" />
            {/* Tech Hexagon */}
            <path d="M24 11 L32 15.5 L32 24.5 L24 29 L16 24.5 L16 15.5 Z" fill="#155E75" stroke="#A5F3FC" strokeWidth="1.2" />
            <circle cx="24" cy="20" r="3" fill="#67E8F9" />
            <line x1="24" y1="14" x2="24" y2="17" stroke="#A5F3FC" strokeWidth="1.2" />
            <line x1="19" y1="22" x2="22" y2="21" stroke="#A5F3FC" strokeWidth="1.2" />
            <line x1="29" y1="22" x2="26" y2="21" stroke="#A5F3FC" strokeWidth="1.2" />
            <text x="24" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="900" fontFamily="sans-serif">INNOBIZ</text>
          </svg>
        </div>
      );

    case 'halal':
      // 한국이슬람교중앙회(KMF) 국제 할랄(HALAL) 공식 인증
      return (
        <div
          className={`relative rounded-2xl shadow-sm shrink-0 flex items-center justify-center select-none overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-green-950 text-white p-1.5 border border-emerald-400/60 shadow-emerald-900/20 ${className}`}
          style={{ width: size, height: size }}
          title="KMF 국제 할랄(HALAL) 인증"
        >
          <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#86EFAC" strokeWidth="1.5" />
            <circle cx="24" cy="24" r="19" fill="#15803D" />
            {/* Crescent & Star */}
            <path d="M27 13 C21 13 16 18 16 24 C16 30 21 35 27 35 C24 33 22 29 22 24 C22 19 24 15 27 13 Z" fill="#FEF08A" />
            <path d="M28 17 L29 20 L32 20 L29.5 22 L30.5 25 L28 23.5 L25.5 25 L26.5 22 L24 20 L27 20 Z" fill="#FEF08A" />
            <text x="24" y="41" textAnchor="middle" fill="#FFFFFF" fontSize="5" fontWeight="900" fontFamily="sans-serif">HALAL할랄</text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
