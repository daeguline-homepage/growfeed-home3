export type Language = 'ko' | 'en';

export type MainCategoryKey = 
  | 'about' 
  | 'products' 
  | 'rnd' 
  | 'esg' 
  | 'global' 
  | 'pr' 
  | 'contact';

export interface SubCategoryItem {
  id: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
}

export interface MainCategory {
  key: MainCategoryKey;
  depth1Ko: string;
  depth1En: string;
  shortDescKo: string;
  shortDescEn: string;
  subCategories: SubCategoryItem[];
}

export interface ProductItem {
  id: string;
  name: string;
  engName: string;
  badge: string;
  badgeEn: string;
  category: string;
  categoryEn: string;
  taglineKo: string;
  taglineEn: string;
  summaryKo: string;
  summaryEn: string;
  specs: { labelKo: string; labelEn: string; valueKo: string; valueEn: string }[];
  keyFeaturesKo: string[];
  keyFeaturesEn: string[];
  testResultsKo: { metric: string; value: string; note: string }[];
  testResultsEn: { metric: string; value: string; note: string }[];
  applicableAnimalsKo?: string[];
  applicableAnimalsEn?: string[];
  packagingKo?: string;
  packagingEn?: string;
  dosageKo?: string;
  dosageEn?: string;
  patentNo?: string;
  patentNoEn?: string;
  extraBadgeKo?: string;
  extraBadgeEn?: string;
  imageUrl?: string;
  isComingSoon?: boolean;
  colorScheme: {
    primary: string;
    bgBadge: string;
    textBadge: string;
    lightBg: string;
    border: string;
  };
}

export interface GalleryItem {
  id: string;
  category: 'factory' | 'rnd' | 'mine' | 'global' | 'farm' | 'expo' | 'product';
  categoryKo: string;
  categoryEn: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  imageUrl: string;
}

export interface FacilityPhoto {
  id: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  noticeKo?: string;
  noticeEn?: string;
  specKo?: string;
  specEn?: string;
  category: string;
  imageUrl: string;
}

export interface EvidenceItem {
  id: string;
  category: 'methane' | 'toxin' | 'field' | 'comparison';
  titleKo: string;
  titleEn: string;
  institutionKo: string;
  institutionEn: string;
  date: string;
  dateEn: string;
  summaryKo: string;
  summaryEn: string;
  highlightNumber: string;
  highlightNumberEn?: string;
  highlightUnit: string;
  highlightUnitEn: string;
  highlightLabelKo: string;
  highlightLabelEn: string;
  metrics: { 
    label: string; 
    labelEn?: string; 
    value: string; 
    valueEn?: string;
    baseline?: string; 
    baselineEn?: string;
    diff?: string; 
    diffEn?: string;
    note?: string; 
    noteEn?: string;
  }[];
  keyTakeawaysKo: string[];
  keyTakeawaysEn: string[];
}

export interface NewsItem {
  id: string;
  type: 'media' | 'notice' | 'exhibition';
  titleKo: string;
  titleEn: string;
  source: string;
  sourceEn: string;
  date: string;
  summaryKo: string;
  summaryEn: string;
  badge: string;
  badgeEn: string;
  imageUrl?: string;
}

export interface InquiryFormData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  category: string;
  livestockType: string;
  message: string;
  agreePrivacy: boolean;
}

export interface PatentCertificate {
  id: string;
  type: 'gmp' | 'iso' | 'patent' | 'design' | 'trademark' | 'global';
  typeKo: string;
  typeEn: string;
  titleKo: string;
  titleEn: string;
  regNo: string;
  issueDate: string;
  inventionKo: string;
  inventionEn: string;
  authorityKo: string;
  authorityEn: string;
  descKo: string;
  descEn: string;
  badgeKo: string;
  badgeEn: string;
  colorScheme: 'emerald' | 'amber' | 'blue' | 'indigo' | 'rose' | 'teal';
  imageUrl?: string;
}

