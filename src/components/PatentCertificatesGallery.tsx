import React from 'react';
import { Award, ShieldCheck, Globe2, FileCheck } from 'lucide-react';
import { Language, PatentCertificate } from '../types';
import { PATENT_CERTIFICATES } from '../data/companyData';

interface PatentCertificatesGalleryProps {
  lang: Language;
}

export const PatentCertificatesGallery: React.FC<PatentCertificatesGalleryProps> = ({ lang }) => {
  const getSchemeStyles = (scheme: PatentCertificate['colorScheme']) => {
    switch (scheme) {
      case 'amber':
        return {
          border: 'border-amber-200',
          bgBadge: 'bg-amber-100 text-amber-900 border-amber-300',
          sealColor: 'border-red-600 text-red-600 bg-red-50/70',
          headerBg: 'bg-gradient-to-b from-amber-50/80 to-white'
        };
      case 'blue':
        return {
          border: 'border-sky-200',
          bgBadge: 'bg-sky-100 text-sky-900 border-sky-300',
          sealColor: 'border-red-600 text-red-600 bg-red-50/70',
          headerBg: 'bg-gradient-to-b from-sky-50/80 to-white'
        };
      case 'indigo':
        return {
          border: 'border-indigo-200',
          bgBadge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
          sealColor: 'border-red-600 text-red-600 bg-red-50/70',
          headerBg: 'bg-gradient-to-b from-indigo-50/80 to-white'
        };
      case 'rose':
        return {
          border: 'border-rose-200',
          bgBadge: 'bg-rose-100 text-rose-900 border-rose-300',
          sealColor: 'border-red-600 text-red-600 bg-red-50/70',
          headerBg: 'bg-gradient-to-b from-rose-50/80 to-white'
        };
      case 'teal':
        return {
          border: 'border-teal-200',
          bgBadge: 'bg-teal-100 text-teal-900 border-teal-300',
          sealColor: 'border-red-600 text-red-600 bg-red-50/70',
          headerBg: 'bg-gradient-to-b from-teal-50/80 to-white'
        };
      case 'emerald':
      default:
        return {
          border: 'border-emerald-200',
          bgBadge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          sealColor: 'border-red-600 text-red-600 bg-red-50/70',
          headerBg: 'bg-gradient-to-b from-emerald-50/50 to-white'
        };
    }
  };

  return (
    <div className="space-y-4 pt-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
        <div className="flex items-center space-x-2">
          <FileCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="text-base sm:text-lg font-black text-slate-900">
            {lang === 'ko' ? '외 글로벌 인증서 및 특허증' : 'Global Certificates & Patents'}
          </h3>
        </div>
      </div>

      {/* 7 columns x 2 rows Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5 sm:gap-3">
        {PATENT_CERTIFICATES.map((cert) => {
          const styles = getSchemeStyles(cert.colorScheme);

          return (
            <div
              key={cert.id}
              className="flex flex-col rounded-xl bg-white border border-slate-200 shadow-2xs overflow-hidden"
            >
              {/* Certificate Image Frame */}
              <div className="relative w-full aspect-[3/4] bg-stone-100 overflow-hidden flex items-center justify-center">
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={lang === 'ko' ? cert.titleKo : cert.titleEn}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  /* Certificate Document Visualization */
                  <div className={`w-full h-full p-2.5 flex flex-col justify-between ${styles.headerBg} relative`}>
                    {/* Certificate Top Header */}
                    <div className="space-y-1 text-center">
                      <div className="flex justify-center items-center space-x-1 text-slate-700">
                        {cert.type === 'gmp' || cert.type === 'iso' ? (
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                        ) : cert.type === 'global' ? (
                          <Globe2 className="w-3.5 h-3.5 text-teal-600" />
                        ) : (
                          <Award className="w-3.5 h-3.5 text-emerald-600" />
                        )}
                        <span className="text-[10px] font-black tracking-wider text-slate-800 uppercase">
                          {lang === 'ko' ? cert.typeKo : cert.typeEn}
                        </span>
                      </div>
                      <div className="text-[9px] font-black text-slate-700 tracking-tight">
                        {cert.regNo}
                      </div>
                    </div>

                    {/* Certificate Center Subject */}
                    <div className="p-1.5 rounded bg-white/80 border border-slate-200/80 text-center">
                      <p className="text-[10px] font-bold text-slate-900 line-clamp-2 leading-tight">
                        {lang === 'ko' ? cert.titleKo : cert.titleEn}
                      </p>
                      <p className="text-[8px] text-slate-500 mt-0.5 truncate">
                        {lang === 'ko' ? '맥섬석GM㈜' : 'Macsumsuk GM'}
                      </p>
                    </div>

                    {/* Official Seal / Authority */}
                    <div className="flex items-end justify-between pt-1">
                      <span className="text-[8px] font-medium text-slate-500">
                        {cert.issueDate.split(' ')[0]}
                      </span>
                      <div className="w-6 h-6 rounded border border-red-600 bg-red-50 flex items-center justify-center text-[7px] font-black text-red-600 leading-none text-center">
                        {cert.type === 'gmp' ? 'GMP' : cert.type === 'iso' ? 'KMR' : (lang === 'ko' ? '특허청' : 'KIPO')}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
