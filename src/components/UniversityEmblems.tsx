import React from 'react';

export type UniversityCode = 'SNU' | 'KNU' | 'CNU' | 'CLSU';

interface UniversityEmblemProps {
  code: UniversityCode;
  size?: number;
  className?: string;
  showText?: boolean;
}

export const UniversityEmblem: React.FC<UniversityEmblemProps> = ({
  code,
  size = 56,
  className = '',
}) => {
  switch (code) {
    case 'SNU':
      // Seoul National University Official UI Emblem (서울대학교 공식 엠블럼)
      return (
        <div
          className={`relative rounded-full shadow-md shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 ${className}`}
          style={{ width: size, height: size }}
          title="서울대학교 공식 엠블럼 (Seoul National University Official UI)"
        >
          <img
            src="https://www.snu.ac.kr/_skin/kor/layout/image/lnb-snu-logo_lg.png"
            alt="서울대학교 공식 엠블럼"
            className="w-full h-full object-contain p-0.5"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-full bg-[#0F2052] text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight">서울대</span>
            <span className="text-[8px] text-blue-200">SNU</span>
          </div>
        </div>
      );

    case 'KNU':
      // Kyungpook National University Official UI Emblem (경북대학교 공식 엠블럼)
      return (
        <div
          className={`relative rounded-full shadow-md shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 ${className}`}
          style={{ width: size, height: size }}
          title="경북대학교 공식 엠블럼 (Kyungpook National University Official UI)"
        >
          <img
            src="https://www.knu.ac.kr/wbbs/img/intro/ui_emblem01.jpg"
            alt="경북대학교 공식 엠블럼"
            className="w-full h-full object-contain p-0.5"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to high quality text badge if remote image is blocked
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-full bg-[#851928] text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight">경북대</span>
            <span className="text-[8px] text-amber-200">KNU</span>
          </div>
        </div>
      );

    case 'CNU':
      // Chungnam National University Official UI Emblem (충남대학교 공식 엠블럼)
      return (
        <div
          className={`relative rounded-full shadow-md shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 ${className}`}
          style={{ width: size, height: size }}
          title="충남대학교 공식 엠블럼 (Chungnam National University Official UI)"
        >
          <img
            src="/assets/aistudio/____0fe5e1ed.png"
            alt="충남대학교 공식 엠블럼"
            className="w-full h-full object-contain p-0.5"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-full bg-[#003366] text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight">충남대</span>
            <span className="text-[8px] text-blue-200">CNU</span>
          </div>
        </div>
      );

    case 'CLSU':
      // Central Luzon State University (Philippines) Official UI Emblem (루손주립대 공식 엠블럼)
      return (
        <div
          className={`relative rounded-full shadow-md shrink-0 flex items-center justify-center select-none overflow-hidden bg-white border border-slate-200 ${className}`}
          style={{ width: size, height: size }}
          title="필리핀 국립 루손주립대학교 공식 엠블럼 (Central Luzon State University Official UI)"
        >
          <img
            src="https://oad.clsu.edu.ph/images/clsu-logo-green.png"
            alt="루손주립대학교 공식 엠블럼"
            className="w-full h-full object-contain p-0.5"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div
            style={{ display: 'none' }}
            className="w-full h-full rounded-full bg-[#0E693B] text-white flex flex-col items-center justify-center font-black text-center"
          >
            <span className="text-[10px] leading-tight">루손주립대</span>
            <span className="text-[8px] text-amber-200">CLSU</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
