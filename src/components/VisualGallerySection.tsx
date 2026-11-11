import React from 'react';
import { 
  Building2, 
  ArrowRight, 
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/companyData';
import { Language } from '../types';

interface VisualGallerySectionProps {
  lang: Language;
  onOpenPR: () => void;
}

export const VisualGallerySection: React.FC<VisualGallerySectionProps> = ({
  lang,
  onOpenPR,
}) => {
  // Pick top 4 representative photos for the home gallery showcase
  const featuredPhotos = GALLERY_PHOTOS.slice(0, 4);

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'ko' ? '그로피드 소식' : 'Growfeed News & Gallery'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              {lang === 'ko'
                ? '그로피드의 다양한 소식을 전해드립니다'
                : 'Delivering the Diverse News & Updates of Growfeed'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {lang === 'ko'
                ? '독점 원료광산과 스마트 설비부터 글로벌 수출 현장까지 그로피드의 생생한 소식을 전해드립니다.'
                : 'From our 223ha mining reserve and smart production facilities to global export shipments, explore the vibrant stories of Growfeed.'}
            </p>
          </div>

          <button
            onClick={onOpenPR}
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 hover:text-emerald-200 border border-slate-700 font-bold text-xs sm:text-sm transition-all cursor-pointer shrink-0 shadow-md group"
          >
            <span>{lang === 'ko' ? '홍보관 전체 사진 보기' : 'View Full Media Gallery'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Feature Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="bg-slate-850 rounded-2xl border border-slate-700 overflow-hidden shadow-lg hover:shadow-xl hover:border-slate-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
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
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent pointer-events-none"></div>
                </div>

                <div className="p-5 space-y-2 text-left">
                  <h3 className="font-bold text-white text-base text-emerald-300">
                    {lang === 'ko' ? photo.titleKo : photo.titleEn}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-2">
                    {lang === 'ko' ? photo.descKo : photo.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Footnote */}
        <div className="mt-8 text-right">
          <p className="text-[11px] sm:text-xs text-slate-400 font-normal">
            {lang === 'ko'
              ? '* 이해를 돕기 위한 연출 된 이미지가 포함되어 있습니다.'
              : '* Contains staged images for illustrative purposes.'}
          </p>
        </div>
      </div>
    </section>
  );
};
