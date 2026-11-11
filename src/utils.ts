import { Language } from './types';

/**
 * Directly downloads the company brochure PDF without opening any modal dialog or explanation popup.
 */
export const UPLOADED_BROCHURE_PDF = '/Macsumsuk_GM_Company_and_Product_Profile_2026.pdf';

export function downloadBrochurePdf(lang: Language): void {
  const downloadName = lang === 'ko' ? '맥섬석GM_기업및제품_종합소개서_2026.pdf' : 'Macsumsuk_GM_Company_Profile_2026.pdf';
  
  try {
    fetch(UPLOADED_BROCHURE_PDF)
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.blob();
      })
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = downloadName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 2000);
      })
      .catch(() => {
        // Fallback to direct anchor link
        const link = document.createElement('a');
        link.href = UPLOADED_BROCHURE_PDF;
        link.download = downloadName;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  } catch {
    const link = document.createElement('a');
    link.href = UPLOADED_BROCHURE_PDF;
    link.download = downloadName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
