import { MainCategory, ProductItem, EvidenceItem, NewsItem, GalleryItem, FacilityPhoto, PatentCertificate } from '../types';

export const COMPANY_INFO = {
  nameKo: '맥섬석GM㈜',
  nameEn: 'Macsumsuk GM Co., Ltd.',
  brandKo: '그로피드 (Growfeed®)',
  brandEn: 'Growfeed®',
  ceo: '곽성근',
  ceoEn: 'Sung-Keun Kwak',
  establishedYear: '1986',
  address: '경상북도 영천시 대창면 한제길 44',
  addressEn: '44, Hanje-gil, Daechang-myeon, Yeongcheon-si, Gyeongsangbuk-do, Korea',
  phone: '054-336-6000',
  mobile: '010-3191-5500 / 010-9672-8000',
  fax: '054-336-0567',
  email: 'mls6000@naver.com',
  website: 'www.macsumsuk.com',
  brandWebsite: 'www.growfeed.com',
  mineSize: '223ha (맥섬석 원료광산 자체 소유 및 독점 채굴권)',
  factories: [
    {
      nameKo: '영천 본사 및 본사 공장 (1·2·3번 토지)',
      nameEn: 'Yeongcheon Head Office & Main Complex (Plots 1, 2, 3)',
      siteArea: '부지 32,708㎡ / 건물 5,157㎡ (총 부지 34,495㎡)',
      capacity: '시간당 6~8톤 생산능력(설비 90% 구축), 소성·포장 자동화, 전기 720kW 인프라',
      role: '그로피드 이톡스·DCM·프로테인(단미·보조사료) 대량 양산 및 폐기물종합재활용 생산'
    },
    {
      nameKo: '경주 분체 및 소성 2공장',
      nameEn: 'Gyeongju Powder & Calcination Plant 2',
      siteArea: '부지 8,769㎡ / 건물 1,199㎡',
      capacity: '보조사료 월 600~800톤 생산',
      role: '맥섬석 원광 분체가공 및 특허 고열소성 전문 시설'
    },
    {
      nameKo: '산란계 시험 전용 사육장 (4번 토지)',
      nameEn: 'Dedicated Layer Research Poultry Farm (Plot 4)',
      siteArea: '부지 1,787㎡ (사리리 439-2, 436-2번지, 2차선 도로 접함)',
      capacity: '계란 사양시험 및 난각/난황 품질 실시간 모니터링',
      role: '치유계란 및 현장 필드 사양시험 테스트베드'
    }
  ]
};

// 맥섬석GM(주) 본사 공장·토지 현황 공식 학습 데이터 (2026 최신 공식 자료 기반)
export const HQ_LAND_STATUS = {
  totalLandAreaM2: 34495, // 34,495 m²
  totalBuildingAreaM2: 5157, // 5,157 m²
  summaryKo: '경북 영천시 대창면 사리리 일대 총 34,495㎡(약 10,435평) 부지 및 5,157㎡(약 1,560평) 제조 인프라',
  plots: [
    {
      plotNumber: 1,
      nameKo: '1번 토지: 그로피드 이톡스 · DCM',
      locationKo: '사리리 432번지 (공장부지), 건물 600평',
      focus: '톡신바인더 · 저메탄 사료첨가제 전문 생산',
      pointsKo: [
        '톡신바인더·저메탄 사료첨가제 전문 생산',
        '생산능력 시간당 6~8톤, 설비 약 90% 구축 계획',
        '소성·포장 자동화 설비 완료, 보조사료 생산 중',
        '경북대학교 축산학과(김은중 교수) 2014년 1차 저메탄 IN VITRO 시험',
        '경북대학교 축산학과(김은중 교수) 2025년 2차 저메탄 IN VITRO 시험',
        '서울대학교 평창캠퍼스 2025~2026년 8월 24일 IN VIVO 실증시험 완료',
        '국립축산과학원 저메탄 사료첨가제 심의 승인 완료'
      ]
    },
    {
      plotNumber: 2,
      nameKo: '2번 토지: 그로피드 프로테인',
      locationKo: '사리리 432번지 (공장부지), 건물 960평',
      focus: '폐기물종합재활용허가 기반 단백질 사료첨가제 생산',
      pointsKo: [
        '단백질 사료첨가제 및 단미사료첨가제 생산 중',
        '혈액가공품 과립 및 펠렛 생산 중',
        '경북·김제시 등 혈액가공품 농가보조사업 선정 (50% 보조)'
      ]
    },
    {
      plotNumber: 3,
      nameKo: '3번 토지: 유기질비료 · 사료',
      locationKo: '사리리 439번지 (공장부지), 2차선 도로 접함',
      focus: '폐기물종합재활용허가 기반 유기질비료 및 사료 생산',
      pointsKo: [
        '코어 유기질비료·사료 생산 계획 (특허 등록)',
        '허가: 비료 7종 외 유기질코어비료 및 사료(혈액원료)'
      ]
    },
    {
      plotNumber: 4,
      nameKo: '4번 토지: 산란계 시험사육장',
      locationKo: '사리리 439-2번지, 436-2번지 (1,787㎡), 2차선 도로 접함',
      focus: '산란계 사양 시험 및 치유계란 연구',
      pointsKo: [
        '산란계 전용 시험사육장 1,787㎡ 운영',
        '치유계란 상표등록, 중국 등 디자인 특허 등록 연계 연구'
      ]
    }
  ],
  commonCertificationsKo: [
    '1·2·3번 토지 공통: 폐기물종합재활용허가 완료',
    '보조사료 생산 · 단미사료 생산 라인 구축',
    '그로피드 프로테인(단백질 사료) 생산 설비',
    '유기질 비료 8종 허가 보유',
    '대기, 폐수, 진동, 분쇄 환경 인허가 완료',
    '수전 용량 전기 720kW 및 오폐수 정화 설비 완비',
    'Growfeed 상표등록 52개국 단백질 사료 특허',
    '미국, 중국, 일본 등 30개국 혈액 가공품 특허 (정부 무상 보조 3억 지원)',
    '펠렛 단백질 사료(무상 3억 지원) 제조 국내 및 국외 특허 보유',
    '치유계란 상표등록 및 중국 등 디자인 특허 등록'
  ]
};

export const GNB_CATEGORIES: MainCategory[] = [
  {
    key: 'about',
    depth1Ko: '회사소개',
    depth1En: 'About Us',
    shortDescKo: '40년 업력과 52개국 특허를 보유한 대한민국 대표 축산바이오 기업',
    shortDescEn: 'Korea’s leading livestock biotech enterprise with 40 years of heritage & 52-nation patents',
    subCategories: [
      {
        id: 'overview',
        titleKo: '회사 개요',
        titleEn: 'Company Overview',
        descKo: 'CI/슬로건, 대표이사 인사말, 비전·미션 및 핵심 생산 인프라',
        descEn: 'CI & slogan, CEO message, corporate vision, and key manufacturing infrastructure'
      },
      {
        id: 'awards',
        titleKo: '수상 실적 및 국내외 공인 인증',
        titleEn: 'Honors, Awards & Global Certifications',
        descKo: '은탑산업훈장, 세계일류상품(KOTRA), 글로벌 IP 스타기업, 국제 GMP, ISO22000',
        descEn: 'Tower of Industrial Merit, World-Class Product, GMP, and ISO22000'
      },
      {
        id: 'history',
        titleKo: '주요 연혁',
        titleEn: 'Milestones & History',
        descKo: '1986년 창업 이래 40년간 축적된 글로벌 성장 스토리와 주요 마일스톤',
        descEn: '40 years of innovation journey and major milestones since 1986'
      },
      {
        id: 'location',
        titleKo: '사업장 및 본사',
        titleEn: 'Business Sites & Head Office',
        descKo: '영천 본사·공장, 경주 분체공장 및 연구시설 오시는 길 안내',
        descEn: 'Maps and directions to Yeongcheon headquarters and manufacturing facilities'
      }
    ]
  },
  {
    key: 'products',
    depth1Ko: '제품소개',
    depth1En: 'Products',
    shortDescKo: '저메탄·독소흡착·자원순환 고기능성 단미·보조사료 프리미엄 라인업',
    shortDescEn: 'Premium eco-friendly livestock feed additives for methane reduction and health',
    subCategories: [
      {
        id: 'livestock-guide',
        titleKo: '그로피드 축종별 맞춤 컨설팅',
        titleEn: 'Growfeed® Livestock Tailored Consulting',
        descKo: '소(육우/젖소), 양돈(모돈/자돈), 양계(산란계/육계), 양어·새우(수산양식) 맞춤 급여법',
        descEn: 'Tailored feeding dosage and application manuals for cattle, swine, poultry, and aquaculture (fish & shrimp)'
      },
      {
        id: 'etox',
        titleKo: '그로피드 이톡스',
        titleEn: 'Growfeed® E-TOX',
        descKo: '저메탄 사료첨가제 & 톡신바인더 (세계일류상품 선정, 곰팡이독소 87~94% 제거)',
        descEn: 'Anti-mold toxin binder & eco-friendly feed additive with 87-94% toxin removal'
      },
      {
        id: 'protein',
        titleKo: '그로피드 프로테인 [ESG사업]',
        titleEn: 'Growfeed® Protein [ESG Initiative]',
        descKo: '혈액가공품 기반 ESG 단백질 사료첨가제 (국내유일 법적근거, 조단백 30%+)',
        descEn: 'Recycled livestock blood protein feed additive (Crude protein 30%+)'
      },
      {
        id: 'dcm',
        titleKo: '그로피드 디씨엠',
        titleEn: 'Growfeed® DCM',
        descKo: '메탄저감·기후위기 대응 사료 (반추위 메탄 61.5% 저감, 화학물질 無, 실온 1년)',
        descEn: 'De-Carbon & Methane reduction additive, reducing rumen methane up to 61.5%'
      },
      {
        id: 'healing-egg',
        titleKo: '프리미엄 계란 (치유계란®)',
        titleEn: 'Premium Egg (Healing Egg®)',
        descKo: '그로피드 전용사료 급여로 콜린 2.6배·오메가3 65%·루테인 75% 증대 및 난각 강도 48% 강화된 고영양 계란',
        descEn: 'Premium bio egg enriched with 2.6x Choline, 65% Omega-3, 75% Lutein, and 48% stronger eggshell strength'
      },
      {
        id: 'core-fertilizer',
        titleKo: '코어 비료',
        titleEn: 'Core Fertilizer',
        descKo: '축산 부산물(도축 혈액 등)의 고기능성 과립비료의 순환자원화. 웰리온 유기질 비료 외 7종',
        descEn: 'Upcycling livestock byproducts into high-performance granular bio-fertilizer (Wellion Organic Fertilizer & 7 Products)'
      }
    ]
  },
  {
    key: 'rnd',
    depth1Ko: '연구개발',
    depth1En: 'R&D',
    shortDescKo: '맥섬석 223ha 광산 기반 원적외선 고방사 기술과 국내외 최고 대학 공동연구',
    shortDescEn: 'Far-infrared high-radiation mineral technology & university-backed field trials',
    subCategories: [
      {
        id: 'methane-trials',
        titleKo: '저메탄 기술 및 시험성적',
        titleEn: 'Methane Reduction Data',
        descKo: '경북대 2014.10 1차, 2025.7 2차 in-vitro 시험 및 서울대 호흡대사챔버 한우 실증시험 데이터',
        descEn: 'In-vitro data from Kyungpook Nat’l Univ and Seoul Nat’l Univ chamber trials'
      },
      {
        id: 'mineral-tech',
        titleKo: '맥섬석 원적외선 기술',
        titleEn: 'Macsumsuk Far-Infrared Tech',
        descKo: '8~11μm 인체/가축 유익 파장 Wellion Ray, 방사율 90%+ 공인 기술 (KRISS 공인)',
        descEn: '8-11μm bio-active wavelength with over 90% emissivity certified by KRISS'
      },
      {
        id: 'patents',
        titleKo: '특허·지식재산권',
        titleEn: 'Patents & Intellectual Property',
        descKo: '세계 52개국 특허 및 상표 등록, 글로벌 IP 스타기업 선정 포트폴리오',
        descEn: 'Portfolio of patents & trademarks registered across 52 nations worldwide'
      }
    ]
  },
  {
    key: 'esg',
    depth1Ko: 'ESG 경영',
    depth1En: 'ESG',
    shortDescKo: '축산 온실가스 감축과 도축 부산물 100% 자원순환을 실현하는 순환경제 모델',
    shortDescEn: 'Realizing circular economy through methane reduction and livestock blood recycling',
    subCategories: [
      {
        id: 'circular-mechanism',
        titleKo: '자원선순환 메커니즘',
        titleEn: 'Resource Circularity Mechanism',
        descKo: '도축 혈액 100% 밀폐 수거부터 초고온 순간멸균, 조단백 30%+ 사료화, 메탄 저감의 5단계 순환경제',
        descEn: '5-step closed-loop mechanism from sealed blood recovery to 30%+ protein upcycling and farm prosperity'
      },
      {
        id: 'ghg-reduction',
        titleKo: '온실가스·메탄 저감',
        titleEn: 'GHG & Methane Mitigation',
        descKo: '벌집구조 맥섬석 바이오세라믹 특허 기술로 반추위 장내발효 메탄 최대 61.5% 급감',
        descEn: 'Patented natural ceramic mineral technology cutting enteric ruminant methane up to 61.5%'
      },
      {
        id: 'blood-recycle',
        titleKo: '혈액가공품 자원순환',
        titleEn: 'Blood Byproduct Circularity',
        descKo: '도축 폐기 동물 혈액 전량 수거·순간멸균으로 수질오염 87.5% 방지 및 조단백 30%+ 고부가가치 사료화',
        descEn: 'Converting slaughterhouse blood into high-value 30%+ protein feed via instant flash sterilization'
      },
      {
        id: 'farm-income',
        titleKo: '농가 소득 증대',
        titleEn: 'Farm Income & Prosperity',
        descKo: 'FCR 1.69 글로벌 1위, 출하일령 2~4일 단축 및 경상북도 50% 보조사업을 통한 농가 실익 증진',
        descEn: 'FCR 1.69, shortened market days by 2-4 days & 50% provincial farm subsidy partnership'
      },
      {
        id: 'granular-fertilizer',
        titleKo: '정부 및 지자체 협업 성과',
        titleEn: 'Gov & Municipality Collaboration',
        descKo: '경북도지사 본사 방문, 도축장 혈액(돈혈) 자원화 협의, 세계 13개국 특허 및 60여 농가 납품 성과',
        descEn: 'Gyeongbuk Governor visit, slaughterhouse blood upcycling agreement, 13-country patents, and supply to 60+ farms'
      }
    ]
  },
  {
    key: 'global',
    depth1Ko: '해외진출',
    depth1En: 'Global',
    shortDescKo: '누적 수출량 4,220톤+, 9년 연속 필리핀 수출과 동남아·유럽 시장 확장',
    shortDescEn: 'Over 4,220 tons exported globally with 9 consecutive years in Southeast Asia',
    subCategories: [
      {
        id: 'export-status',
        titleKo: '수출 현황 및 실적',
        titleEn: 'Export Track Record',
        descKo: '필리핀 Bio star 9년 연속 수출, 말레이시아, 방글라데시, 태국 등 글로벌 실적',
        descEn: 'Long-term export partnerships in the Philippines, Malaysia, Bangladesh, Thailand, etc.'
      },
      {
        id: 'global-cert',
        titleKo: '국제 인증 현황',
        titleEn: 'International Certifications',
        descKo: '국제 GMP, ISO22000 등 수출용 국제 표준 인증 획득',
        descEn: 'International compliance with GMP and ISO 22000 certificates'
      }
    ]
  },
  {
    key: 'pr',
    depth1Ko: '홍보센터',
    depth1En: 'PR',
    shortDescKo: '맥섬석GM의 홍보갤러리 및 최신 소식',
    shortDescEn: 'Latest photo archives and news updates of Macsumsuk GM',
    subCategories: [
      {
        id: 'gallery',
        titleKo: '홍보갤러리',
        titleEn: 'PR Gallery',
        descKo: '스마트 제조공장 현장, 해외 박람회 부스, 산학 시험 현장 사진 아카이브',
        descEn: 'High-resolution photo archives of manufacturing plants and global expos'
      },
      {
        id: 'news',
        titleKo: '최신 소식',
        titleEn: 'Latest News',
        descKo: '국내외 주요 일간지 및 농축산 전문지 언론보도 및 최신 소식',
        descEn: 'Media highlights, newspaper articles, and corporate news updates'
      }
    ]
  },
  {
    key: 'contact',
    depth1Ko: '고객지원',
    depth1En: 'Contact',
    shortDescKo: '제품 구매, 기술 제휴, OEM/ODM 및 해외 총판 문의 창구',
    shortDescEn: 'Direct channel for purchasing, technical partnerships, OEM/ODM, and dealerships',
    subCategories: [
      {
        id: 'contact-info',
        titleKo: '연락처 및 운영시간',
        titleEn: 'Contact & Operating Hours',
        descKo: '대표전화(054-336-6000), 팩스, 담당자 직통 및 고객센터 운영시간 안내',
        descEn: 'Office phone, direct contacts, email, and customer operating hours'
      },
      {
        id: 'location',
        titleKo: '오시는 길',
        titleEn: 'Directions & Location',
        descKo: '경상북도 영천시 대창면 한제길 44 맥섬석GM 본사 및 공장 오시는 길',
        descEn: '44, Hanje-gil, Daechang-myeon, Yeongcheon-si, Gyeongsangbuk-do, Korea'
      },
      {
        id: 'online-inquiry',
        titleKo: '온라인 문의',
        titleEn: 'Online Inquiry',
        descKo: '축종별 맞춤 컨설팅, 견적 문의, OEM/ODM 사료 개발 및 제휴 상담',
        descEn: 'Livestock consulting, quotations, OEM/ODM formulations, and partnerships'
      }
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'etox',
    name: '그로피드 이톡스',
    engName: 'Growfeed® E-TOX',
    badge: '글로벌 품질검증 사료첨가제',
    badgeEn: 'Globally Validated Feed Additive',
    category: '온실가스 사료첨가제 / 톡신바인더 (복합기능성)',
    categoryEn: 'GHG Reduction Feed Additive / Mycotoxin Binder (Multi-Functional)',
    taglineKo: '주요 곰팡이독소 87~94% 흡착 제거 및 사료효율 극대화 (생산성 향상)',
    taglineEn: '87-94% Mycotoxin Adsorption & Feed Conversion Optimization (Productivity Boost)',
    summaryKo: '맥섬석 천연 미네랄 광물 원료를 특허 고열소성하여 제조한 고기능성 사료첨가제. 아프라톡신, 오크라톡신 등 5대 사료 곰팡이독소를 완벽에 가깝게 흡착 배출하며, 9년 연속 필리핀 수출(누적 4,220톤+)로 글로벌 품질이 입증되었습니다.',
    summaryEn: 'High-functional feed additive utilizing patented calcined Macsumsuk natural mineral raw materials. Effectively binds and eliminates major mycotoxins (87-94%), proven with over 4,220 tons exported across 9 consecutive years.',
    specs: [
      { labelKo: '포장 단위', labelEn: 'Packaging', valueKo: '20kg / 포 (bag)', valueEn: '20kg / bag' },
      { labelKo: '권장 사용량', labelEn: 'Dosage', valueKo: '사료 1톤당 1~2kg 첨가 (0.1 ~ 0.2%)', valueEn: '1-2kg per ton of feed (0.1 - 0.2%)' },
      { labelKo: '제품 제형', labelEn: 'Form', valueKo: '소성공정 과립형 규산염제 (분진 없는 그래뉼)\nYucca 등 혼합의 집대성', valueEn: 'Calcined Granular Silicate (Dust-free)\nSynergistic formulation blended with Yucca extract' },
      { labelKo: '주요 원료', labelEn: 'Main Ingredients', valueKo: '맥섬석 천연 미네랄 (무항생제 천연소재)', valueEn: '100% Natural Macsumsuk Mineral' },
      { labelKo: '적용 축종', labelEn: 'Target Livestock', valueKo: '반추동물(한우/젖소), 양돈, 양계(산란계/육계), 양어, 펫', valueEn: 'Ruminants (Beef & Dairy Cattle), Swine, Poultry (Layers & Broilers), Aquaculture, Pet' }
    ],
    keyFeaturesKo: [
      '국가공인 사료검증기관(충남대) 시험결과 5대 곰팡이 독소 87~94% 흡착 제거',
      '소성가공 과립형으로 분진 날림이 없고 사료 배합 시 균일 혼합 우수',
      '축사 내 암모니아 및 유해가스 20~30% 감소로 사육 환경 쾌적화',
      '사료요구율(FCR) 개선으로 출하기일 2~4일 단축 및 증체율 향상',
      '9년 연속 해외 수출(누적 4,220톤+)'
    ],
    keyFeaturesEn: [
      'Certified 87-94% elimination of 5 major mycotoxins by Chungnam Nat’l Univ',
      'Granular formula with zero dust emissions and superior mixing homogeneity',
      '20-30% reduction in ammonia and barn odors for healthier livestock',
      'Improved Feed Conversion Ratio (FCR), shortening market days by 2-4 days',
      'Proven track record: 4,220+ tons exported globally over 9 continuous years'
    ],
    testResultsKo: [
      { metric: '오크라톡신 A 제거율', value: '93.7%', note: '충남대 공인 분석 (접수일 2016.05)' },
      { metric: '아프라톡신 전체 제거율', value: '89.6%', note: '국가사료검증기관 공인 시험' },
      { metric: 'T-2 톡신 제거율', value: '89.7%', note: '0.2% 첨가 기준' },
      { metric: '육계 FCR 개선', value: '1.69', note: '필리핀 CLSU 시험 (대조군 1.87 대비 대폭 개선)' }
    ],
    testResultsEn: [
      { metric: 'Ochratoxin A Adsorption', value: '93.7%', note: 'Chungnam Nat’l Univ Certified Assay' },
      { metric: 'Total Aflatoxin Adsorption', value: '89.6%', note: 'Official Feed Inspection Agency' },
      { metric: 'T-2 Toxin Adsorption', value: '89.7%', note: 'At 0.2% inclusion rate' },
      { metric: 'Broiler FCR', value: '1.69', note: 'CLSU Trial (vs Control 1.87)' }
    ],
    applicableAnimalsKo: ['육우·젖소·양', '모돈·비육돈·자돈', '산란계·육계·오리', '틸라피아·새우', '반려견·반려묘'],
    applicableAnimalsEn: ['Beef & Dairy Cattle', 'Breeding & Fattening Pigs', 'Layers, Broilers & Ducks', 'Tilapia & Shrimp', 'Dogs & Cats'],
    packagingKo: '20kg / 포',
    packagingEn: '20kg / Bag',
    dosageKo: '사료 1톤당 1~2kg (0.1~0.2%)',
    dosageEn: '1-2kg per ton of feed (0.1-0.2%)',
    patentNo: '특허 제10-13286XX호 (가축사료 첨가제 제조방법) · 제10-13544XX호 / 상표 제40-09997XX호 / 디자인 제30-08844XX호',
    patentNoEn: 'Patent No. 10-13286XX & No. 10-13544XX / Trademark No. 40-09997XX / Design No. 30-08844XX',
    imageUrl: 'https://lh3.googleusercontent.com/d/1L8ZtL9QfU1KwtGzoXgRMFaxNTf1F22Hw',
    colorScheme: {
      primary: '#059669',
      bgBadge: 'bg-emerald-50',
      textBadge: 'text-emerald-800',
      lightBg: 'bg-emerald-50/50',
      border: 'border-emerald-200'
    }
  },
  {
    id: 'protein',
    name: '그로피드 프로테인',
    engName: 'Growfeed® Protein',
    badge: '도축혈액 자원순환 ESG 사료첨가제',
    badgeEn: 'ESG Bio-Recycled Blood Protein Additive',
    category: '기능성 단백질 사료첨가제 (순환자원형)',
    categoryEn: 'Functional Bio-Protein Feed Additive (Circular Resource)',
    taglineKo: '국내 유일 혈액+규산염 복합 제조기술로 탄생한 고품질 단백질',
    taglineEn: 'Korea’s Only Patented Blood + Mineral Bio-Recycled Protein Feed',
    summaryKo: '도축장에서 발생하는 신선한 가축 혈액과 맥섬석 미네랄을 결합하여 순간멸균(180~350℃, 5~7초) 과립 건조한 친환경 단백질 사료첨가제입니다. 단미·보조사료 공정 규격집에 공식 등재된 국내 유일의 독보적 혈액가공품입니다.',
    summaryEn: 'An eco-friendly protein feed additive combining fresh livestock blood with Macsumsuk minerals through 180-350°C instant sterilization. Officially registered as Korea’s only authorized blood-processed feed.',
    specs: [
      { labelKo: '성분 함량', labelEn: 'Nutrients', valueKo: '조단백질 30%+ 이상, 천연 규산염(SiO2) 35~40%, 필수미네랄 10종', valueEn: 'Crude Protein 30%+, SiO2 35-40%, 10 Essential Minerals' },
      { labelKo: '제조 공법', labelEn: 'Manufacturing', valueKo: '180~350℃ 5~7초 순간멸균 과립건조\n(영양소 열변성 제로)', valueEn: '180-350°C 5-7 sec Instant Sterilization Granulation\n(Zero Nutrient Thermal Degradation)' },
      { labelKo: '제품 제형', labelEn: 'Form', valueKo: '과립형(초기용) / 펠렛형(중·후기용)', valueEn: 'Granule (Starter) / Pellet (Grower-Finisher)' },
      { labelKo: '법적 근거', labelEn: 'Regulatory', valueKo: '사료공정규격집 제2편 (혈액가공품) 공식 등록 품목', valueEn: 'Officially Authorized Blood-processed Feed Product' },
      { labelKo: '납품 현황', labelEn: 'Supply Record', valueKo: '전국 60여 산란계·육돈 농가 및 영천·포항·울산 축협 납품', valueEn: 'Supplied to 60+ commercial poultry/swine farms & Livestock Cooperatives' }
    ],
    keyFeaturesKo: [
      '혈장과 혈구를 전량 활용하는 전라인 연결공법으로 환경오염 제로화 (수질 폐수 87.5% 절감)',
      '180~350℃ 초고온 5~7초 순간 멸균으로 유해 병원균 완벽 살균 및 단백질 영양소 원형 보존',
      '타사 일반 건조혈분(135℃ 10분 삶음 방식) 대비 소화 흡수율 월등히 우수',
      '산란계 급여 시 난각 강도 증가, 난황색 진해짐, 축사 암모니아 냄새 현저한 감소',
      '경상북도, 김제시 혈액가공품 농가 지원사업(50% 지원) 품목 선정'
    ],
    keyFeaturesEn: [
      'Zero wastewater discharge by processing whole blood through sealed in-line system',
      '180-350°C instant flash sterilization destroying pathogens while preserving amino acids',
      'Far superior digestibility compared to conventional blood meal (135°C 10-min boiling)',
      'Improves eggshell thickness, deep yolk pigmentation, and reduces coop odor',
      'Selected for Gyeongbuk & Gimje-si Farm Subsidy Program (50% Funded)'
    ],
    testResultsKo: [
      { metric: '조단백질 함량', value: '30% 이상', note: '필수 아미노산 18종 및 복합 미네랄 풍부' },
      { metric: '순간멸균 시간', value: '5~7초', note: '180~350℃ 순간 가열로 영양소 파괴 최소화' },
      { metric: '국내 납품 농가', value: '60+ 개소', note: '대한산란계협회장 영주 거성농장(30만수) 등' },
      { metric: '출하일령 단축', value: '2~5일', note: '경북 축산기술연구소 사양시험 결과' }
    ],
    testResultsEn: [
      { metric: 'Crude Protein Content', value: '30%+', note: 'Rich in 18 amino acids & minerals' },
      { metric: 'Flash Sterilization', value: '5-7 sec', note: '180-350°C preserving intact protein' },
      { metric: 'Domestic Supply Farms', value: '60+ Farms', note: 'Including 300,000-layer farm & Cooperatives' },
      { metric: 'Market Days Reduction', value: '2-5 Days', note: 'Gyeongbuk Livestock Tech Institute' }
    ],
    applicableAnimalsKo: ['산란계·육계·오리 (산란율 및 난각 강화)', '모돈·자돈 (설사 예방 및 면역 강화)', '넙치·뱀장어·어류·새우 양식', '양식장 수질 정화 및 폐사율 저감'],
    applicableAnimalsEn: ['Layers, Broilers & Ducks', 'Sows & Piglets (Anti-diarrhea)', 'Flounder, Eel, Fish & Shrimp Aqua', 'Aquaculture Water Purification'],
    packagingKo: '20kg / 포 (과립형, 펠렛형)',
    packagingEn: '20kg / Bag (Granules & Pellets)',
    dosageKo: '사료 1톤당 2-3kg(0.2-0.3%)',
    dosageEn: '2-3kg per ton of feed (0.2-0.3%)',
    patentNo: '특허 제10-24962XX호 (가축 혈액·맥섬석 진공 압출 펠렛, 13개국 등록) 한국환경기술원 (무상자금 3억지원) 개발· 제10-18295XX호 외 중국 등 38개국·특허 등록',
    patentNoEn: 'Patent No. 10-24962XX (13 Global Countries) KEITI ₩300M Grant R&D & No. 10-18295XX plus 38 Global Patents',
    extraBadgeKo: '국가 무상 3억원 개발사업으로 완수',
    extraBadgeEn: 'Completed via ₩300M National Grant R&D Project',
    imageUrl: 'https://lh3.googleusercontent.com/d/1pdtWxYpffVq5L-x08vP2b85kJffn9vOL',
    colorScheme: {
      primary: '#0284c7',
      bgBadge: 'bg-sky-50',
      textBadge: 'text-sky-900',
      lightBg: 'bg-sky-50/50',
      border: 'border-sky-200'
    }
  },
  {
    id: 'dcm',
    name: '그로피드 디씨엠',
    engName: 'Growfeed® DCM',
    badge: '서울대 완료 / 저메탄 사료첨가제 승인',
    badgeEn: 'SNU Completed / Low-Methane Additive Approved',
    category: '메탄가스-온실가스 저감형 보조단미사료',
    categoryEn: 'Methane & GHG Reducing Supplementary Feed',
    taglineKo: '천연 미네랄 기반으로 반추위 메탄 발생량을 획기적으로 줄이는 저메탄 사료',
    taglineEn: 'Natural Mineral-Based Enteric Methane Reduction Feed Additive',
    summaryKo: '맥섬석 천연 미네랄 원료의 다공질 벌집 구조와 수소 흡착 특성을 응용하여 반추동물(한우, 젖소) 장내 발효 메탄을 저감시키는 차세대 친환경 보조사료입니다. 화학 합성물과 달리 인체·가축에 무해하며 상온에서 2년간 장기 보관이 가능합니다.',
    summaryEn: 'Next-generation eco-friendly feed supplement cutting enteric methane through natural porous mineral honeycomb mechanics. Unlike synthetic chemicals, 100% non-hazardous with 2-year room temperature stability.',
    specs: [
      { labelKo: '주요 원료', labelEn: 'Raw Material', valueKo: '99.8% 천연 맥섬석 미네랄(고열소성 규산염)\n+ 0.02% (Yucca)', valueEn: '99.8% Natural Macsumsuk Mineral (Calcined Silicate)\n+ 0.02% (Yucca)' },
      { labelKo: '메탄 저감 효과', labelEn: 'Methane Cut', valueKo: '반추위 장내발효 메탄 발생량 저감 (경북대·서울대 실증)', valueEn: 'Enteric methane reduction verified by KNU & SNU trials' },
      { labelKo: '안전성 분류', labelEn: 'Safety', valueKo: '유해성 분류 비대상 (Non-hazardous) / 인체 및 축종 유해성 전혀 없음', valueEn: 'Classified Non-Hazardous / Zero toxicity to humans and cattle' },
      { labelKo: '보관 및 유통', labelEn: 'Storage & Shelf Life', valueKo: '실온 보관 가능 / 유통기한 최대 2년 (냉장 불필요)', valueEn: 'Room temperature storage / Up to 2 years shelf-life (No fridge required)' },
      { labelKo: '실증 현황', labelEn: 'Field Trials', valueKo: '서울대 그린바이오연구원 호흡대사챔버 한우실증시험 진행 완료\n(2025.12~2026.6)', valueEn: 'Seoul Nat’l Univ GreenBio Institute Respiration Metabolic Chamber Hanwoo Cattle Trial Completed\n(2025.12~2026.6)' }
    ],
    keyFeaturesKo: [
      '반추위 내 수소(H2) 이용 경로를 프로피온산 생성으로 전환시켜 메탄 생성을 억제하고 에너지 효율 극대화',
      '네덜란드 DSM의 화학합성 저메탄제(Bovaer) 대비 뛰어난 안전성, 실온 2년 보관 편의성, 복합 효능(톡신바인더+사료효율+유량)',
      '1차 시험(2014년)에서 최고 메탄저감 항생제 ‘모넨신’과 동등 이상의 효과 확인 (경북대 축산학과)',
      '2차 시험(2025년 7월)에서 MAC+HV 0.5% 투여군 메탄 발생률 1.81%로 대조군 대비 격감 확인',
      '전 축종(육우, 젖소, 양돈, 양계)에 안전하게 적용 가능'
    ],
    keyFeaturesEn: [
      'Shifts rumen H2 pathways toward propionate synthesis, suppressing CH4 and boosting energy',
      'Superior to synthetic Bovaer: 100% natural, 1-year shelf life at room temp, plus toxin binding & FCR gains',
      '1st trial (KNU 2014) confirmed efficacy equivalent to antibiotic monensin without negative side-effects',
      '2nd trial (KNU 2025) confirmed sharp methane reduction (1.81% CH4 vs control)',
      'Versatile & safe across ruminants (beef cattle, dairy cows) and monogastrics'
    ],
    testResultsKo: [
      { metric: '메탄(CH4) 저감율', value: '하이비타 최대 61.5%', note: '경북대 2차 시험 (MAC+HV 0.5% 처리구)' },
      { metric: '보관 편의성', value: '실온 2년 (52배)', note: '(냉장 2주 필수) 대비 압도적 편의성' },
      { metric: '화학합성 물질', value: '0% (천연광물)', note: '흡입/피부 자극성 없는 안전한 천연 원료' },
      { metric: '한우 실증 검증', value: '서울대 실증 시험 완료', note: '국내 최초 농진청 공식 승인 목표 과제\n저메탄 사료첨가제 인증 접수 및 검토' }
    ],
    testResultsEn: [
      { metric: 'Methane (CH4) Reduction', value: 'Hi-Vita Up to 61.5%', note: 'KNU 2nd Trial (MAC+HV 0.5% group)' },
      { metric: 'Shelf Stability', value: '2 Years at Room Temp', note: 'Overwhelming stability compared to 2-week refrigeration' },
      { metric: 'Synthetic Chemical', value: '0% (All Natural)', note: 'Non-irritant natural mineral formulation' },
      { metric: 'Hanwoo Cattle Validation', value: 'SNU Validation Completed', note: 'Korea’s First Target for RDA Official Approval\nLow-Methane Additive Certification Submitted & Under Review' }
    ],
    applicableAnimalsKo: ['한우·육우 (메탄 저감, 사료효율 증대, 육질 개선)', '젖소 (유량 증가, 체세포수 감소, 고온스트레스 완화)', '양돈 및 양계 (유해가스 저감 및 FCR 개선)'],
    applicableAnimalsEn: ['Beef Cattle (CH4 Cut, FCR, Meat Quality)', 'Dairy Cows (Milk Yield, Somatic Cell Cut)', 'Swine & Poultry (Odor Cut, Energy Gains)'],
    packagingKo: '20kg / 포 (과립형)',
    packagingEn: '20kg / Bag (Granules)',
    dosageKo: '사료 1톤당 3~5kg (0.3~0.5%)',
    dosageEn: '3-5kg per ton of feed (0.3-0.5%)',
    patentNo: '특허 제10-23698XX호',
    patentNoEn: 'Patent No. 10-23698XX',
    imageUrl: 'https://lh3.googleusercontent.com/d/1DIrMSRRXwFMxgf6zfIMJFKCT2hPFnpG1',
    isComingSoon: false,
    colorScheme: {
      primary: '#0d9488',
      bgBadge: 'bg-teal-50',
      textBadge: 'text-teal-900',
      lightBg: 'bg-teal-50/50',
      border: 'border-teal-200'
    }
  },
  {
    id: 'healing-egg',
    name: '프리미엄 계란(치유계란®)',
    engName: 'Premium Egg (Healing Egg®)',
    badge: '공인 시험기관 검증 / 콜린 2.6배 · 오메가3 65% 증대',
    badgeEn: 'State-Certified / 2.6x Choline & 65% Omega-3',
    category: '데이터 기반 프리미엄 기능성 계란 (신선식품 브랜드)',
    categoryEn: 'Data-Driven Premium Functional Bio Egg',
    taglineKo: '그로피드 전용사료 급여를 통해 입증된 객관적 품질 지표의 프리미엄 고영양 계란',
    taglineEn: 'Premium functional bio eggs with scientifically proven nutritional superiority through Growfeed dedicated feed',
    summaryKo: '맥섬석 그로피드 전용 산란계 사료 급여를 통해 생산된 프리미엄 기능성 계란입니다. 한국품질시험원, 한국식품연구원, 충남대 농과원 등 공인 시험기관의 객관적 분석을 통해 뇌 건강에 필수적인 콜린(2.6배↑), 오메가-3(65%↑), 눈 건강 루테인(75%↑) 성분이 대폭 강화되었으며, 난각 강도(48%↑)와 난황 탄력이 획기적으로 개선되어 비린내가 없고 고소한 최고급 계란입니다.',
    summaryEn: 'Premium functional eggs produced by feeding Macsumsuk Growfeed dedicated layer feed. Validated by official testing institutes (Korea Quality Testing Institute, Korea Food Research Institute, Chungnam National University), featuring 2.6x Choline for brain health, 65% more Omega-3, 75% more Lutein, 48% stronger eggshell, and firm yolks free from fishy odor.',
    specs: [
      { labelKo: '주요 급여 사료', labelEn: 'Feed Program', valueKo: '맥섬석 그로피드 E-TOX 및 천연 미네랄 전용 배합사료', valueEn: 'Growfeed E-TOX & Natural Mineral Formulated Layer Feed' },
      { labelKo: '핵심 영양 성분', labelEn: 'Key Nutrients', valueKo: '콜린 322.0 (2.6배↑) / 오메가-3 223.3mg (65%↑) / 루테인 2.1mg (75%↑)', valueEn: 'Choline 322.0 (2.6x) / Omega-3 223.3mg (+65%) / Lutein 2.1mg (+75%)' },
      { labelKo: '난질 및 물성 개선', labelEn: 'Egg Quality', valueKo: '난각 강도 4.18 (48%↑, 파란율 격감) / 난황 크기 12.03 (26%↑, 고탄력)', valueEn: 'Shell Strength 4.18 (+48%) / Yolk Size 12.03 (+26%, High Elasticity)' },
      { labelKo: '공인 시험기관', labelEn: 'Accredited Testing', valueKo: '한국품질시험원, 한국식품연구원, 충남대학교 농과원 정밀 분석 검증 완비', valueEn: 'Officially verified by Korea Quality Testing Inst., KFRI & Chungnam Nat’l Univ' },
      { labelKo: '안전성 및 사육 환경', labelEn: 'Safety & Welfare', valueKo: '곰팡이독소·살모넬라 불검출, 항생제·산란촉진제 無, 축사 악취 저감 친환경 사육', valueEn: 'Zero mycotoxin/Salmonella, No antibiotics, Eco-friendly barn odor reduction' }
    ],
    keyFeaturesKo: [
      '한국품질시험원 공인: 두뇌 신경전달물질 및 간 건강 필수 영양소 ‘콜린(Choline)’ 322.0으로 일반란(125.6) 대비 약 2.6배 증가',
      '한국식품연구원 공인: 혈관 건강 오메가-3(Omega-3) 223.3mg/100g으로 약 65% 증가, 눈 건강 루테인(Lutein) 2.1mg/100g으로 약 75% 증가',
      '충남대학교 농과원 공인: 난각 강도 4.18로 약 48% 강화되어 유통 중 파란율 최소화, 난황 크기 12.03으로 약 26% 확대 및 핀셋으로 집어도 터지지 않는 탄력 구현',
      '체계적 사양 관리 및 친환경 사육: 전용 미네랄 사료 급여를 통한 비린내 제거 및 축사 악취 저감 친환경 생산 체계 구축',
      '5단계 통합 가치사슬(Value Chain): 사료 규격 확정 ➔ 농장 생산·이력 관리 ➔ 정밀 품질 검사 ➔ 등급별 선별·포장 ➔ 프리미엄 온·오프라인 유통'
    ],
    keyFeaturesEn: [
      'Korea Quality Testing Institute Certified: Choline reaches 322.0, an impressive ~2.6x increase over standard eggs (125.6)',
      'Korea Food Research Institute Certified: Omega-3 surges by ~65% (223.3mg/100g) and eye-health Lutein increases by ~75% (2.1mg/100g)',
      'Chungnam Nat’l Univ Agricultural Science Certified: Eggshell strength improved by ~48% (4.18), reducing cracks; yolk size up ~26% (12.03) with high firmness',
      'Systematic Farm Management: Dedicated mineral feeding eliminating fishy odor and reducing poultry barn odors',
      '5-Stage Integrated Value Chain: Dedicated feed formulation ➔ Farm production & tracking ➔ Rigorous quality testing ➔ Sorting & packing ➔ Premium multi-channel retail'
    ],
    testResultsKo: [
      { metric: '콜린 (Choline)', value: '약 2.6배 ↑', note: '일반란 125.6 → 322.0\n한국품질시험원' },
      { metric: '오메가-3 (Omega-3)', value: '약 65% ↑', note: '135.7 → 223.3mg/100g\n한국식품연구원' },
      { metric: '루테인 (Lutein)', value: '약 75% ↑', note: '1.2 → 2.1mg/100g\n한국식품연구원' },
      { metric: '난각 강도 (Strength)', value: '약 48% ↑', note: '2.83 → 4.18 강도 향상\n충남대 농과원' }
    ],
    testResultsEn: [
      { metric: 'Choline Content', value: '~2.6x Increase', note: 'Standard 125.6 → 322.0\nKorea Quality Testing Inst.' },
      { metric: 'Omega-3', value: '+65% Increase', note: '135.7 → 223.3mg/100g\nKorea Food Research Inst.' },
      { metric: 'Lutein', value: '+75% Increase', note: '1.2 → 2.1mg/100g\nKorea Food Research Inst.' },
      { metric: 'Shell Strength', value: '+48% Stronger', note: '2.83 → 4.18 strength\nChungnam Nat’l Univ' }
    ],
    applicableAnimalsKo: ['산란계 (영양 강화란, 파란율 저감, 난황 탄력 증대, 산란율 유지)', '육계 (간·내장 건강 개선, 육질 향상, 안심 축산 실증)', '소비자 및 단체급식 (성장기 어린이, 수험생, 노년층 맞춤형 고영양 안심 계란)'],
    applicableAnimalsEn: ['Layer Hens (Nutrient enrichment, eggshell reinforcement, yolk elasticity)', 'Broilers (Liver & gut health, meat quality improvement)', 'Consumers & B2B (Child development, brain health, premium dietary supply)'],
    packagingKo: '10구 / 15구 / 20구 / 30구 전용 난좌 포장 (냉장 콜드체인 유통)',
    packagingEn: '10 / 15 / 20 / 30-egg dedicated carton (Cold-chain distribution)',
    dosageKo: '산란계 전용사료 급여 프로그램 (사료 1톤당 3~5kg 첨가)',
    dosageEn: 'Dedicated layer feeding program (3-5kg per ton of feed)',
    patentNo: '사료 원천특허 제10-13286XX호 (가축사료 첨가제 제조방법) / ‘치유계란®’ 상표·디자인 등록 자산',
    patentNoEn: 'Feed Patent No. 10-13286XX (Layer Feed Additive) / ‘Healing Egg®’ Trademark & Design Assets',
    imageUrl: '/assets/aistudio/_____02896e00.png',
    isComingSoon: false,
    colorScheme: {
      primary: '#d97706',
      bgBadge: 'bg-amber-50',
      textBadge: 'text-amber-900',
      lightBg: 'bg-amber-50/50',
      border: 'border-amber-200'
    }
  },
  {
    id: 'core-fertilizer',
    name: '코어 비료',
    engName: 'Core Fertilizer',
    badge: '고기능성 과립 비료 & 순환자원화 모델',
    badgeEn: 'High-Performance Granular Bio-Fertilizer Model',
    category: '',
    categoryEn: '',
    taglineKo: '축산 부산물(도축 혈액 등)의 고기능성 과립비료의 순환자원화.\n웰리온 유기질 비료 외 7종',
    taglineEn: 'Upcycling Livestock Byproducts (Slaughter Blood, etc.) into High-Performance Granular Bio-Fertilizer.\nWellion Organic Fertilizer & 7 Product Lines',
    summaryKo: '맥섬석GM(주)이 고기능성 과립 비료를 개발하고 고부가 순환 비료 시장으로 확장하는 친환경 자원순환 프로젝트입니다. 축산 공정에서 발생하는 부산물(가축 혈액 등)을 전량 환경친화적으로 회수하고, 맥섬석 초고온 순간멸균 및 원적외선 바이오 융합 공법을 적용하여 균일한 고기능성 과립 비료로 제조함으로써 비산 방지·기계 살포 편의성을 극대화하고 국내외 고부가 순환 비료 시장을 선도합니다.',
    summaryEn: 'An eco-friendly circular resource project by Macsumsuk GM to develop high-performance granular bio-fertilizers and expand into high-value circular fertilizer markets. Recovering livestock byproducts, applying flash sterilization and far-infrared bio-fusion to produce uniform granular fertilizers with zero dusting and superior mechanical spreading efficiency.',
    specs: [
      { labelKo: '핵심 전략 목표', labelEn: 'Strategic Goal', valueKo: '고기능성 과립 비료 개발 및 고부가 순환 비료 시장 확장', valueEn: 'Granular Fertilizer R&D & High-Value Circular Market Expansion' },
      { labelKo: '원천 기술 및 공정', labelEn: 'Core Technology', valueKo: '맥섬석GM㈜ 친환경 바이오 자원순환 공정', valueEn: 'Macsumsuk GM Proprietary Bio-Circulation Process' },
      { labelKo: '제형 및 형태', labelEn: 'Form & Granule', valueKo: '고기능성 과립(Granular) 제형 — 비산 방지, 살포기 적합성 및 균일 시비', valueEn: 'High-Performance Granular — Non-dusting, spreader-compatible, uniform' },
      { labelKo: '주요 기술', labelEn: 'Core Technology', valueKo: '도축혈액 초고온 순간멸균 & 맥섬석 원적외선(8~11㎛) 바이오 과립화 융합', valueEn: 'Flash Sterilization & Far-Infrared Bio-Granulation Synthesis' }
    ],
    keyFeaturesKo: [
      '고기능성 과립(Granular) 비료 개발: 분진 및 비산 걱정 없이 기계 살포가 완벽하게 가능한 고강도·균일 과립 성형 공법',
      '고부가 순환 비료 시장 진출 & 시장 확장: 전국 농축산 유통 네트워크와 연계하여 고부가가치 순환자원 비료 시장 선점',
      '도축·가공 부산물 100% 청정 자원화: 폐기 대상이던 축산 혈액 등을 밀폐 전용 라인으로 전량 수거하여 청정 원료로 전환',
      '초고온 순간멸균 및 천연 아미노산 보존: 유해 병원균을 완전 불활성화하고 조단백질 30%+ 및 천연 아미노산 무손상 보존',
      '맥섬석 원적외선 바이오 융합: 8~11㎛ 원적외선 규산염 미네랄과 결합하여 토양 개선 및 작물 생육용 고기능성 순환자재화'
    ],
    keyFeaturesEn: [
      'High-Performance Granular Fertilizer R&D: High-strength uniform granulation enabling mechanical spreading with zero dust and drift',
      'High-Value Circular Market Expansion: Pioneering premium circular bio-fertilizer markets leveraging nationwide agricultural network',
      '100% Clean Byproduct Recovery: Fully sealed recovery of slaughterhouse blood, converting waste into clean raw materials',
      'Instant Flash Sterilization: Pathogens eliminated completely while preserving 30%+ crude protein and amino acids',
      'Far-Infrared Bio-Mineral Fusion: Synthesizing with 8-11μm silicate minerals for soil restoration and crop vitality'
    ],
    testResultsKo: [],
    testResultsEn: [],
    applicableAnimalsKo: [],
    applicableAnimalsEn: [],
    imageUrl: 'https://lh3.googleusercontent.com/d/1pfceSi84IctA9CGx3_mHDZcgx01mFjWX',
    isComingSoon: false,
    colorScheme: {
      primary: '#d97706',
      bgBadge: 'bg-amber-50',
      textBadge: 'text-amber-950',
      lightBg: 'bg-amber-50/50',
      border: 'border-amber-300'
    }
  }
];

export const CORE_COMPETENCIES = [
  {
    num: '01',
    titleKo: '세계 52개국 특허 & 글로벌 인증(Growfeed®)',
    titleEn: '52-Nation Patents & Global Certifications (Growfeed®)',
    subtitleKo: '은탑산업훈장 수훈 & 경북 PRIDE 수출기업',
    subtitleEn: 'Tower of Industrial Merit & Gyeongbuk PRIDE Exporter',
    descKo: '미국, 중국, 일본, 유럽 등 52개국 특허 및 상표 등록. 국제 GMP, ISO22000, 벤처기업, IP산업, 이노비즈 및 정부 은탑산업훈장 수훈으로 입증된 품질.',
    descEn: 'Over 52 country patents/trademarks, Tower of Industrial Merit, Gyeongbuk PRIDE Exporter, Venture Business, IP Industry, Inno-Biz, GMP, and ISO22000 certified.',
    badgeKo: '국가 공인 신뢰도',
    badgeEn: 'State-Certified Excellence',
    stat: '52개국',
    statEn: '52 Nations',
    statLabelKo: '글로벌 특허/상표',
    statLabelEn: 'Global Patents & IP'
  },
  {
    num: '02',
    titleKo: '대학 공동연구 공인 사양시험',
    titleEn: 'University-Backed Empirical Trial Data',
    subtitleKo: '서울대·경북대·충남대 & 필리핀 CLSU',
    subtitleEn: 'Seoul Nat’l, Kyungpook, Chungnam & CLSU',
    descKo: '경북대 2014.10 1차 메탄시험(모넨신), 경북대 2차 시험 메탄 61.5% 저감, 충남대 곰팡이독소 93.7% 제거, 서울대 호흡대사챔버 실증시험 및 필리핀 루손주립대 300수 육계 시험 완료. 필리핀 ISDA(양식과 어업 발전 통합서비스) 수행.',
    descEn: 'Rigorous empirical trial data: KNU 1st methane trial (Monensin, Oct 2014), KNU 2nd trial 61.5% methane cut, 93.7% toxin removal (CNU), SNU respiration chamber field trials, and Philippines ISDA project implementation.',
    badgeKo: '데이터 기반 실증',
    badgeEn: 'Empirically Validated Data',
    stat: '61.5%',
    statEn: '61.5%',
    statLabelKo: '최대 메탄 저감률',
    statLabelEn: 'Peak Methane Cut'
  },
  {
    num: '03',
    titleKo: '저메탄·원적외선 원천기술',
    titleEn: 'Proprietary Low-Methane & Far-Infrared Tech',
    subtitleKo: '223ha 자체 광산 & 8~11μm Wellion Ray',
    subtitleEn: '223ha Proprietary Mine & 8-11μm Wellion Ray',
    descKo: '세계적 희귀광물 맥섬석 223ha 광산을 독점 보유. 방사율 90%+의 인체·가축 유익 원적외선 고방사 기술로 삼성 Bio TV 브라운관 코팅용 사용, 장내 미생물 활성화 및 메탄 발생 원천 억제.',
    descEn: 'Proprietary 223ha Macsumsuk mineral mine with 90%+ far-infrared emissivity technology (utilized in Samsung Bio TV CRT coating), suppressing enteric methane at the source and activating beneficial gut microbes.',
    badgeKo: '원천소재 독점 보유',
    badgeEn: 'Exclusive Mineral Mine',
    stat: '223ha',
    statLabelKo: '자체 원천기술',
    statLabelEn: 'Proprietary Technology'
  }
];

export const EVIDENCE_DATA: EvidenceItem[] = [
  {
    id: 'methane-trial-2',
    category: 'methane',
    titleKo: '경북대학교 반추위 메탄가스 저감 2차 시험 성적 (in-vitro)',
    titleEn: 'Kyungpook National University 2nd Methane Reduction Trial (In-Vitro)',
    institutionKo: '경북대학교 생태환경대학 축산학과 (연구책임자: 김은중 교수)',
    institutionEn: 'Kyungpook Nat’l Univ, Dept. of Animal Science (Prof. Eun-Joong Kim)',
    date: '2025년 07월',
    dateEn: 'July 2025',
    summaryKo: '반추위 소화발효 모델에서 천연광물 맥섬석 복합체(MAC+HV) 0.5% 투여 시 메탄가스(CH4) 농도가 대조군 4.53%에서 1.81%로 급감하여 61.5%의 경이적인 메탄 저감율을 기록하였습니다.',
    summaryEn: 'In-vitro rumen fermentation model demonstrated that 0.5% MAC+HV inclusion drastically plunged methane (CH4) from 4.53% CON to 1.81%, achieving a landmark 61.5% reduction without disrupting digestion.',
    highlightNumber: '61.5%',
    highlightNumberEn: '61.5%',
    highlightUnit: '저감',
    highlightUnitEn: 'Cut',
    highlightLabelKo: '메탄(CH4) 농도 최대 감소율 (2025.7)',
    highlightLabelEn: 'Peak Enteric Methane (CH4) Reduction (July 2025)',
    metrics: [
      { label: '대조군 (CON) CH4 농도', labelEn: 'Control (CON) CH4 Conc.', value: '4.53%', valueEn: '4.53%', baseline: '기준치 100%', baselineEn: 'Baseline 100%' },
      { label: 'MAC+HV 0.5% 투여군 CH4 농도', labelEn: 'MAC+HV 0.5% Treatment CH4 Conc.', value: '1.81%', valueEn: '1.81%', diff: '-61.5% 급감 (통계적 유의차 P<0.05)', diffEn: '-61.5% (Statistically significant P<0.05)' },
      { label: '메탄 절대발생량 (CON vs MAC+HV)', labelEn: 'Absolute CH4 Volume (CON vs MAC+HV)', value: '3.82ml ➔ 1.47ml', valueEn: '3.82ml ➔ 1.47ml', diff: '-61.5% 감소', diffEn: '-61.5% Reduction' },
      { label: '건물소화율 (DMD %)', labelEn: 'Dry Matter Digestibility (DMD %)', value: '50.41 ~ 51.99%', valueEn: '50.41 ~ 51.99%', note: '정상 발효 유지', noteEn: 'Normal rumen fermentation preserved' }
    ],
    keyTakeawaysKo: [
      '반추위 발효 환경에 악영향 없이 메탄 생성균의 수소 이용 경로를 propionate 생성으로 전환',
      '화학 합성 항생제 모넨신(Monensin) 및 네덜란드 Bovaer 대비 동등 이상의 저감 효과 확인',
      '사료 소화율 저하 없이 사료 에너지 이용 효율 동시 개선'
    ],
    keyTakeawaysEn: [
      'Shifts microbial hydrogen pathways toward propionate synthesis rather than methane generation',
      'Equal or superior efficacy to monensin antibiotic and synthetic Bovaer without chemical hazards',
      'Improves feed energy efficiency while maintaining normal dry matter digestibility'
    ]
  },
  {
    id: 'toxin-trial-cnu',
    category: 'toxin',
    titleKo: '충남대학교 국가사료검증기관 곰팡이독소 5종 흡착 공인 성적서',
    titleEn: 'Chungnam National University Certified Mycotoxin Binding Assay',
    institutionKo: '충남대학교 농업과학연구소 (국가공인 사료검증기관)',
    institutionEn: 'Chungnam Nat’l Univ, Institute of Agricultural Science (Certified Laboratory)',
    date: '공인 시험번호: SERIAL NO. 1605195-4',
    dateEn: 'Cert. Serial No. 1605195-4',
    summaryKo: '사료 내 0.2%(2kg/ton)의 극소량 첨가만으로 가축 소화기 및 면역체계를 파괴하는 치명적 곰팡이독소 5종(아프라톡신, 오크라톡신, 제랄레논, 푸모니신, T-2)을 87~94% 흡착·제거함을 공인 검증받았습니다.',
    summaryEn: 'Certified laboratory assay confirmed 87-94% adsorption of 5 critical feed mycotoxins (Aflatoxin, Ochratoxin, Zearalenone, Fumonisin, T-2) with just 0.2% (2kg/ton) inclusion.',
    highlightNumber: '93.7%',
    highlightNumberEn: '93.7%',
    highlightUnit: '제거',
    highlightUnitEn: 'Bound',
    highlightLabelKo: '오크라톡신 A 최대 흡착률',
    highlightLabelEn: 'Peak Ochratoxin A Binding Rate',
    metrics: [
      { label: '오크라톡신 A (Ochratoxin A)', labelEn: 'Ochratoxin A', value: '93.7% 제거', valueEn: '93.7% Bound', baseline: '국제 허용기준 완벽 대응', baselineEn: 'Meets Strict Global Limits' },
      { label: 'T-2 톡신 (T-2 Toxin)', labelEn: 'T-2 Toxin', value: '89.7% 제거', valueEn: '89.7% Bound', diff: '가축 출혈성 장염 예방', diffEn: 'Prevents hemorrhagic bowel lesions' },
      { label: '아프라톡신 전체 (Total Aflatoxin)', labelEn: 'Total Aflatoxin', value: '89.6% 제거', valueEn: '89.6% Bound', diff: '간독성 및 폐사 억제', diffEn: 'Suppresses hepatotoxicity & mortality' },
      { label: '푸모니신 (Fumonisin)', labelEn: 'Fumonisin', value: '88.8% 제거', valueEn: '88.8% Bound', diff: '사료 섭취량 정상화', diffEn: 'Restores feed intake appetite' },
      { label: '제랄레논 (Zearalenone)', labelEn: 'Zearalenone', value: '87.9% 제거', valueEn: '87.9% Bound', diff: '생식장애/사산 예방', diffEn: 'Prevents stillbirths & infertility' }
    ],
    keyTakeawaysKo: [
      '소성 가공 규산염 미네랄의 강력한 극성 정전기 흡착력으로 독소 선택적 바인딩',
      '위장관 내에서 비가역적으로 흡착되어 체내 흡수되지 않고 분변으로 안전하게 배출',
      '사료 내 유익 영양소(비타민, 미네랄)의 흡수는 저해하지 않는 스마트 바인딩 메커니즘'
    ],
    keyTakeawaysEn: [
      'Irreversible electrostatic polar binding permanently captures mycotoxin molecules',
      'Safely excretes toxins via feces without being absorbed through intestinal walls',
      'Smart binding mechanism that does not deplete essential dietary vitamins and minerals'
    ]
  },
  {
    id: 'clsu-poultry-trial',
    category: 'field',
    titleKo: '필리핀 루손주립대학교(CLSU) 300수 육계 사양 비교시험',
    titleEn: 'Central Luzon State University (CLSU) 300 Broiler Comparison Trial',
    institutionKo: '필리핀 축산과학 전문 루손주립대학교 (CLSU Biotechnology & Animal Science)',
    institutionEn: 'Central Luzon State University, Animal Science / Biotechnology',
    date: '300수 수컷 브로일러 · 32일간 · 6반복 사양시험',
    dateEn: '300 Male Broilers · 32-Day · 6-Replicate Trial',
    summaryKo: '세계 최고 수준의 미국산(CO-BIND AZ), 벨기에산(ELITOX) 제품과 직접 비교 사양한 결과, 그로피드 이톡스가 사료요구율(FCR 1.69), 생존율(98.33%), 간·콩팥 장기 건강도에서 전 항목 1위를 기록하였습니다.',
    summaryEn: 'Direct head-to-head trial against top global brands (CO-BIND AZ from USA, ELITOX from Belgium) demonstrated Growfeed E-TOX achieving superior FCR (1.69), 98.33% livability, and pristine organ health.',
    highlightNumber: '1.69',
    highlightNumberEn: '1.69',
    highlightUnit: 'FCR',
    highlightUnitEn: 'FCR',
    highlightLabelKo: '사료요구율 (사료 낭비 최소화)',
    highlightLabelEn: 'Feed Conversion Ratio (Top Global Rank)',
    metrics: [
      { label: '사료요구율 (FCR, 32일령)', labelEn: 'Feed Conversion Ratio (FCR, Day 32)', value: '그로피드 1.69 (1위)', valueEn: 'Growfeed 1.69 (Rank 1)', baseline: '미국 1.87 / 벨기에 1.89', baselineEn: 'USA 1.87 / Belgium 1.89' },
      { label: '출하시 생존율 (Livability %)', labelEn: 'Flock Livability (%)', value: '그로피드 98.33% (1위)', valueEn: 'Growfeed 98.33% (Rank 1)', baseline: '미국 96.67% / 벨기에 93.33%', baselineEn: 'USA 96.67% / Belgium 93.33%' },
      { label: '0~32일 체중 증가 (g)', labelEn: 'Weight Gain 0-32 Days (g)', value: '1,597g 증체 (1위)', valueEn: '1,597g (Rank 1)', baseline: '미국 1,434g / 벨기에 1,415g', baselineEn: 'USA 1,434g / Belgium 1,415g' },
      { label: '내장/간 장기 검사 결과', labelEn: 'Liver & Kidney Necropsy Health', value: '간·콩팥 상태 최우수', valueEn: 'Cleanest Liver & Kidney', note: '독소로 인한 장기 손상 없음', noteEn: 'Zero toxin-induced organ lesions' }
    ],
    keyTakeawaysKo: [
      '미국·유럽 최고가 프리미엄 사료첨가제 대비 사료 섭취당 증체 효율 11.4% 우위',
      '부검 결과 그로피드 급여군(T3 & T4)의 간 크기와 윤기가 정상 유지되어 독소 해독력 실증',
      '필리핀 Bio star 및 KFC 납품 양계농가 9년 연속 수출의 핵심 과학적 근거'
    ],
    keyTakeawaysEn: [
      '11.4% higher feed-to-meat conversion efficiency than highest-priced US and European brands',
      'Necropsy verified healthy glistening livers in Growfeed cohorts with zero fatty degeneration',
      'Serves as the scientific foundation for 9 continuous years of exports to Biostar and KFC poultry suppliers'
    ]
  }
];

export const STATS_COUNTERS = [
  { value: 4220, suffix: '톤+', suffixEn: 'tons+', labelKo: '누적 해외 수출량', labelEn: 'Cumulative Export Volume', descKo: '9년 연속 필리핀 및 동남아 수출', descEn: '9 Consecutive Years in SE Asia' },
  { value: 52, suffix: '개국', suffixEn: 'Nations', labelKo: '글로벌 특허·상표 등록', labelEn: 'Global Patents & IP', descKo: '미국, 유럽, 일본, 중국 등', descEn: 'US, EU, Japan, China, etc.' },
  { value: 60, suffix: '개소+', suffixEn: 'Farms+', labelKo: '국내 사양 농가 및 축협', labelEn: 'Commercial Farm Clients', descKo: '산란계 30만수 거성농장, 영천축협 등', descEn: '300,000-Layer Farms & Cooperatives' },
  { value: 40, suffix: '년', suffixEn: 'Years', labelKo: '바이오광물 기술 업력', labelEn: 'Decades of Bio-Heritage', descKo: '1986년 화성실업 창업 이래 축적', descEn: 'Pioneering mineral biotech since 1986' },
  { value: 223, suffix: 'ha', suffixEn: 'ha', labelKo: '맥섬석 원료광산 규모', labelEn: 'Proprietary Mine Reserve', descKo: '자체 소유 및 독점 채굴권', descEn: 'Sole ownership & exclusive mining rights' },
  { value: 6, suffix: '톤/hr', suffixEn: 'tons/hr', labelKo: '시간당 사료 생산 능력', labelEn: 'Hourly Plant Output', descKo: '대량 공급 가능한 첨단 자동화 설비', descEn: 'Automated mass-production facilities' }
];

export const HISTORY_TIMELINE = [
  { year: '1986', titleKo: '화성실업 창업', titleEn: 'Founding of Hwaseong Enterprise', descKo: '맥섬석 광물 바이오 응용 기술 개발 착수', descEn: 'Commenced R&D on bio-active applications of Macsumsuk mineral' },
  { year: '1987', titleKo: '맥섬석 광산 개발 (223ha)', titleEn: 'Acquisition & Mining Rights (223ha)', descKo: '경북 지역 내 맥섬석 원료 광산 자체 소유 및 채굴권 확보', descEn: 'Secured sole ownership and exclusive rights of 223ha mineral deposit' },
  { year: '1989', titleKo: '화성실업 금호공장 설립', titleEn: 'Geumho Manufacturing Plant Built', descKo: '원광 소성 및 가공 양산 라인 구축', descEn: 'Constructed initial high-heat calcination and processing plant' },
  { year: '1993', titleKo: '맥섬석GM㈜ 상호 변경', titleEn: 'Incorporated as Macsumsuk GM Co., Ltd.', descKo: '중국 등 해외 상표 등록 및 법인 조직 확대', descEn: 'Registered international trademarks and expanded corporate structure' },
  { year: '1999', titleKo: '원적외선 응용기술 부설연구소 설립', titleEn: 'Corporate R&D Center Established', descKo: '국가공인 연구개발 전담조직 인가', descEn: 'Certified as state-recognized institutional R&D laboratory' },
  { year: '2006', titleKo: '제41회 발명의 날 "은탑산업훈장" 수훈', titleEn: 'Awarded Tower of Industrial Merit (Silver)', descKo: '국가 산업 기술 혁신 공로 인정 (조세의 날 성실납세자 표창 병행)', descEn: 'Conferred supreme governmental honor for industrial patent innovation' },
  { year: '2008', titleKo: '경북 수출 공동 브랜드 "PRIDE" 기업 선정', titleEn: 'Designated Gyeongbuk PRIDE Export Leader', descKo: '지자체 공식 유망 수출기업 지정', descEn: 'Designated premier regional exporter by provincial government' },
  { year: '2009', titleKo: '과립성형 맥섬석 사료첨가제 제조기술 특허', titleEn: 'Patented Granular Feed Additive Formulation', descKo: '분진 없는 그래뉼 사료 제형화 성공', descEn: 'Successfully developed dust-free high-density granule formulations' },
  { year: '2010', titleKo: '항곰팡이 톡신바인더 사료첨가제(E-TOX) 개발', titleEn: 'Launched Growfeed E-TOX Toxin Binder', descKo: '축산 곰팡이독소 억제제 본격 출시', descEn: 'Commercially released multi-action mycotoxin adsorption additive' },
  { year: '2013', titleKo: '그로피드(Growfeed) 상표 52개국 등록', titleEn: 'Growfeed® Trademark Registered in 52 Countries', descKo: '글로벌 사료 전문 브랜드 아이덴티티 확립', descEn: 'Established global livestock brand presence across 52 nations' },
  { year: '2014', titleKo: '그로피드 사료 국제 할랄(HALAL) 인증 획득', titleEn: 'Received International HALAL Certification', descKo: '반추위 메탄저감 1차 사양시험 (경북대 김은중 교수)', descEn: 'Obtained HALAL compliance & completed 1st KNU rumen methane trial' },
  { year: '2015', titleKo: '가축 혈액 활용 다공질 과립 사료 제조 특허', titleEn: 'Patented Porous Blood-Recycled Feed Process', descKo: '국제특허(미국, 중국, 일본 등 13개국) 등록 및 규정집 최초 등재', descEn: 'Registered patents in 13 countries & listed in Official Feed Compendium' },
  { year: '2016', titleKo: '필리핀 그로피드이톡스 총판 계약 체결', titleEn: 'Signed Sole Distributorship in Philippines', descKo: '미국 Cobind AZ, 벨기에 Elitox 대비 비교사양 우위 입증', descEn: 'Outperformed top US and Belgian brands in CLSU poultry trials' },
  { year: '2019', titleKo: '경상북도 혈액가공품 농가 지원사업 품목 선정(50% 지원보조)', titleEn: 'Selected for Provincial Farm Subsidy Program (50% Subsidy)', descKo: '도축 혈액 자원순환 공공 가치 인정', descEn: 'Endorsed for 50% subsidized supply to regional livestock farms' },
  { year: '2020', titleKo: '글로벌 IP(특허) 스타기업 선정 & 경상북도지사 방문', titleEn: 'Designated Global IP Star Enterprise & Governor Visit', descKo: '단미사료/단백질류 사료제조업 정식 등록', descEn: 'Recognized for 52-country IP portfolio & certified protein manufacturing' },
  { year: '2022', titleKo: '혈액가공품 종합재활용업 공식 허가 획득', titleEn: 'Certified Comprehensive Resource Recycling Facility', descKo: 'ESG 순환경제 도축 혈액 자원화 인프라 완성', descEn: 'Established end-to-end zero-pollution animal blood recycling infrastructure' },
  { year: '2025', titleKo: '반추위 메탄 61.5% 저감 2차 검증 & 바이오세라믹 특허', titleEn: '61.5% Methane Cut Verification & Bio-Ceramic Patent', descKo: '경북대 2차 시험 메탄 최대 61.5% 저감 검증, 벌집모양 Bio세라믹 특허 신청', descEn: 'KNU verified up to 61.5% methane reduction & filed patent for honeycomb bio-ceramics' },
  { year: '2026', titleKo: '서울대 한우 메탄저감 호흡대사챔버 실증시험 & 640t(L/C) 수출', titleEn: 'SNU Hanwoo Methane Cut Respiration Chamber Trial & 640-Ton (L/C) Export', descKo: '서울대 김경훈 교수 연구팀 실증 완료, 국립축산과학원 저메탄 사료첨가제 승인 완료, 필리핀 바이오스타 640t(L/C) 수출(2026.10)', descEn: 'SNU Prof. Kyung-Hoon Kim team validation completed, NIAS low-methane feed additive approved, 640-ton (L/C) export to Biostar (Oct 2026)' }
];

export const AWARDS_LIST = [
  { code: 'tower' as const, titleKo: '은탑산업훈장', titleEn: 'Tower of Industrial Merit (Silver)', hostKo: '대한민국 정부 (제41회 발명의 날)', hostEn: 'Government of Republic of Korea', descKo: '원적외선 바이오 광물 응용 및 기술 혁신 국가 최고 훈장', descEn: 'Supreme state honor recognizing pioneering bio-mineral patent technologies' },
  { code: 'pride' as const, titleKo: '경상북도 수출 공동브랜드 PRIDE 기업', titleEn: 'Gyeongbuk PRIDE Export Brand Leader', hostKo: '경상북도 / 경북테크노파크', hostEn: 'Gyeongbuk Provincial Government', descKo: '글로벌 수출 경쟁력과 우수한 바이오 기술력을 공인받은 경북 대표 수출 기업', descEn: 'Designated leading provincial exporter for global competitiveness and bio-mineral innovation' },
  { code: 'ip-star' as const, titleKo: '글로벌 IP 스타기업', titleEn: 'Global IP Star Enterprise', hostKo: '특허청 / 경북지식재산센터', hostEn: 'Korean Intellectual Property Office (KIPO)', descKo: '52개국 지식재산권 확보 및 수출 기술 경쟁력 입증', descEn: 'Acknowledged for robust patent portfolios across 52 countries' },
  { code: 'gyeongbuk-sme' as const, titleKo: '경상북도 중소기업대상', titleEn: 'Gyeongbuk Best SME Grand Prize', hostKo: '경상북도', hostEn: 'Gyeongbuk Provincial Government', descKo: '지역 산업 발전 및 일자리 창출 우수 기업 표창', descEn: 'Honored for outstanding contribution to regional agricultural industry' },
  { code: 'taxpayer' as const, titleKo: '성실납세자상', titleEn: 'Exemplary Taxpayer Commendation', hostKo: '부총리 겸 재정경제부 장관', hostEn: 'Deputy Prime Minister & Ministry of Finance', descKo: '투명하고 건전한 기업 경영 및 납세 의무 성실 이행', descEn: 'Commended for transparent corporate governance and financial integrity' },
  { code: 'gmp-iso' as const, titleKo: '국제 GMP & ISO22000 인증', titleEn: 'International GMP & ISO 22000 Certified', hostKo: '국제인증기관 KMR', hostEn: 'KMR International Certification', descKo: '사료 안전 및 우수 제조 품질 관리 시스템 국제 표준 획득', descEn: 'Certified compliance with global feed safety and good manufacturing standards' },
  { code: 'innobiz' as const, titleKo: '기술혁신형 중소기업(Inno-Biz) & 벤처기업', titleEn: 'Inno-Biz & Certified Venture Enterprise', hostKo: '중소벤처기업부', hostEn: 'Ministry of SMEs and Startups', descKo: '기술력 및 성장 잠재력 공인 확인', descEn: 'Verified for proprietary technological innovation and future scalability' },
  { code: 'halal' as const, titleKo: '국제 HALAL(할랄) 인증', titleEn: 'International HALAL Certified', hostKo: '한국이슬람교중앙회', hostEn: 'Korea Muslim Federation (KMF)', descKo: '동남아 및 이슬람권 시장 수출 적격 인증', descEn: 'Export authorization certificate for Southeast Asia and Islamic markets' }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: 'news-1',
    type: 'media',
    titleKo: '맥섬석GM, 서울대학교와 반추가축 메탄저감 사료 호흡대사챔버 실증 완료',
    titleEn: 'Macsumsuk GM completes SNU respiration chamber trial for cattle methane reduction',
    source: '',
    sourceEn: '',
    date: '2026.01.15',
    summaryKo: '맥섬석GM(주)은 서울대 그린바이오과학기술연구원 김경훈 교수 연구팀과 천연 규산염 기반 저메탄 사료의 한우 장내발효 메탄 배출 저감 효과를 공인 검증하는 3차 실증 완료 하였다.',
    summaryEn: 'Macsumsuk GM and Seoul National University GreenBio Institute (Prof. Kyung-Hoon Kim) have completed the 3rd empirical trial validating enteric methane reduction in Hanwoo beef cattle in respiration chambers.',
    badge: '산학 R&D',
    badgeEn: 'Joint R&D',
    imageUrl: 'https://www.amnews.co.kr/news/photo/202404/58690_45674_1723.jpg'
  },
  {
    id: 'news-2',
    type: 'media',
    titleKo: '그로피드 E-TOX, 필리핀 400톤 L/C 수출, 200톤 준비 중',
    titleEn: 'Growfeed E-TOX: 400-ton L/C export completed, 200 tons in preparation with Philippines partner',
    source: '',
    sourceEn: '',
    date: '2025.11.20',
    summaryKo: '맥섬석GM의 대표 수출 제품인 Growfeed E-TOX가 필리핀 Biostar사와 9년 연속 신뢰를 바탕으로 400톤 L/C 수출을 완료하고, 추가 200톤 공급 준비를 순조롭게 진행하고 있다.',
    summaryEn: 'Growfeed E-TOX completed a 400-ton L/C export order with long-term partner Biostar Philippines and is actively preparing an additional 200 tons.',
    badge: '수출 성과',
    badgeEn: 'Export Milestone',
    imageUrl: 'https://lh3.googleusercontent.com/d/1UBw4MRQ8NDpTnmXgctsqTtfDQkkwvFu0'
  },
  {
    id: 'news-3',
    type: 'media',
    titleKo: '도축장 혈액 자원화. 맥섬석GM, 친환경 ESG 단백질 사료로 축산 순환경제 선도',
    titleEn: 'Recycling slaughterhouse blood: Macsumsuk GM leads livestock circular economy',
    source: '',
    sourceEn: '',
    date: '2025.08.12',
    summaryKo: '환경오염을 유발하던 폐기 가축 혈액을 맥섬석 규산염과 결합해 고단백(30%+) 사료로 재탄생시킨 ‘Growfeed Protein’이 경북도 지원사업으로서 ESG 모델로도 주목받고 있다.',
    summaryEn: 'Converting slaughterhouse animal blood into 30%+ high-protein feed with zero waste discharge: Growfeed Protein gains acclaim as a benchmark for livestock ESG circularity.',
    badge: 'ESG 경영',
    badgeEn: 'ESG Leadership',
    imageUrl: 'https://lh3.googleusercontent.com/d/1IAA96PObg2p6BHz6kWlxdtHaM8jsGXou'
  },
  {
    id: 'news-4',
    type: 'exhibition',
    titleKo: '2025 한국국제축산박람회(KISTOCK) 참가 및 차세대 저메탄 사료 라인업 공개',
    titleEn: 'Exhibiting at KISTOCK 2025: Unveiling next-generation low-carbon livestock solutions',
    source: '',
    sourceEn: '',
    date: '2025.09.10',
    summaryKo: '대구 EXCO에서 열린 한국국제축산박람회에 대형 부스로 참가하여 Growfeed DCM, Protein, E-TOX 등 4대 핵심 라인업을 국내외 바이어 및 축산 농가에 성황리에 선보였다.',
    summaryEn: 'Showcasing our 4 major product lines at KISTOCK EXCO Daegu, attracting enthusiastic interest from both domestic agricultural cooperatives and overseas delegations.',
    badge: '전시회',
    badgeEn: 'Exhibition'
  }
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'mine',
    categoryKo: '맥섬석 원료광산',
    categoryEn: 'Mineral Reserve Mine',
    titleKo: '223ha 맥섬석 원료 광산 & 소성공정',
    titleEn: '223ha Macsumsuk Mineral Mine & Calcination Process',
    descKo: '1,200℃ 특허 초고온 소성 터널 킬른과 360메시 초미분쇄 가공 라인',
    descEn: 'Patented 1,200°C ultra-high-temperature calcination tunnel kilns and 360-mesh ultra-fine pulverization processing line',
    imageUrl: 'https://lh3.googleusercontent.com/d/1KQavIN9Kl2Mziu722kZ3ZB1L7eT4BfbQ'
  },
  {
    id: 'gal-2',
    category: 'factory',
    categoryKo: '자동화 양산공장',
    categoryEn: 'Automated Smart Plant',
    titleKo: '영천 본사 스마트 설비',
    titleEn: 'Yeongcheon HQ Smart Production Facility',
    descKo: '시간당 6톤 대량 생산 능력과 첨단 순간멸균(180~350℃) 과립 제형화 라인.',
    descEn: 'Hourly 6-ton automated mass production line equipped with instant flash sterilization and dust-free granulation.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy'
  },
  {
    id: 'gal-3',
    category: 'rnd',
    categoryKo: 'R&D 중앙연구소',
    categoryEn: 'Biotech R&D Center',
    titleKo: '원적외선 바이오 소재 정밀 분석',
    titleEn: 'Far-Infrared Nano-Biomaterial Analytical Laboratory',
    descKo: '서울대·경북대 산학 공동연구 및 전자현미경(SEM) 다공질 벌집 세라믹 미세구조 분석.',
    descEn: 'State-certified corporate R&D center conducting SEM honeycomb microstructure analysis and in-vitro simulations.',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'gal-4',
    category: 'farm',
    categoryKo: '사양시험 농가',
    categoryEn: 'Empirical Farm Trials',
    titleKo: '산란계 30만수 실증',
    titleEn: '300,000-Layer Commercial Farm Validation',
    descKo: '국내 60여 회원 농가 및 영천·포항 축협 납품을 통한 실질적 사료효율 및 면역 개선.',
    descEn: 'Supplying over 60 commercial livestock farms and agricultural cooperatives nationwide with proven FCR gains.',
    imageUrl: 'https://lh3.googleusercontent.com/d/19zdjbZq1gmvBD4e8SLhMP-7-RH4M19ql'
  },
  {
    id: 'gal-5',
    category: 'global',
    categoryKo: '글로벌 수출',
    categoryEn: 'Global Export & Shipping',
    titleKo: '누적 4,220톤+ 9년 연속 동남아 수출 선적',
    titleEn: '4,220+ Tons Cumulative Export Container Shipping across 9 Years',
    descKo: '필리핀, 방글라데시, 태국, 말레이시아 등 세계 52개국 특허 기반의 지속적 글로벌 시장 공급.',
    descEn: 'Consistent maritime container export to Southeast Asian markets backed by patents in 52 countries.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1XgVriiisqtSigvpcmJIVxiIHkaaz6B1b'
  },
  {
    id: 'gal-6',
    category: 'global',
    categoryKo: '해외 박람회',
    categoryEn: 'International Expo',
    titleKo: 'VIV Asia, Europe, Select China 참가',
    titleEn: 'VIV Asia, Europe, Select China Livestock Expositions',
    descKo: '유럽 및 아시아 유수 축산 바이어들과의 기술 수출 상담 및 글로벌 파트너십 구축.',
    descEn: 'Showcasing proprietary low-methane bio-feed additives to global industry leaders and overseas buyers.',
    imageUrl: 'https://lh3.googleusercontent.com/d/18W9rAvw5mY0IUMcjt1w0w0Df6y6VoyK-'
  }
];

export const FACILITY_PHOTOS: FacilityPhoto[] = [
  {
    id: 'fac-1',
    category: 'plant-1',
    titleKo: '영천 본사 및 제1공장 (사료첨가제 자동화 라인)',
    titleEn: 'Yeongcheon HQ & Plant 1 (Automated Feed Additives)',
    descKo: '경북 영천시 사리리 1·2·3번 토지(부지 32,708㎡, 건물 5,157㎡)에 걸친 대규모 제조 복합단지로 시간당 6~8톤의 첨단 자동화 설비와 폐기물종합재활용 생산 라인을 완비하고 있습니다.',
    descEn: 'Yeongcheon Complex (Plots 1, 2, 3: 32,708㎡ site, 5,157㎡ building) equipped with 6~8 tons/hr automated lines and comprehensive recycling licenses.',
    specKo: '시간당 6~8톤 생산능력 / 단미·보조사료·프로테인 전용 라인 / 전기 720kW 인프라',
    specEn: '6~8 tons/hr capacity / Dedicated single, additive & protein lines / 720kW power',
    imageUrl: 'https://lh3.googleusercontent.com/d/1NdKzZtf6Mwu3gYyuXuiJemqeGnok2-Wy'
  },
  {
    id: 'fac-2',
    category: 'plant-2',
    titleKo: '경주 제2공장 (맥섬석 분체 및 고열소성 설비)',
    titleEn: 'Gyeongju Plant 2 (Micro-powder & Calcination Kiln)',
    descKo: '1,200℃ 특허 초고온 소성 터널 킬른과 360메시 초미분쇄 가공 라인을 통해 다공성 활성 세라믹을 제조합니다.',
    descEn: '1,200°C patented high-temperature tunnel kilns and 360-mesh micronizing mills producing high-porosity bio-ceramics.',
    specKo: '소성 및 초미립 분쇄',
    specEn: 'Calcination & Micro-milling',
    imageUrl: 'https://lh3.googleusercontent.com/d/1KQavIN9Kl2Mziu722kZ3ZB1L7eT4BfbQ'
  },
  {
    id: 'fac-3',
    category: 'rnd',
    titleKo: '부설 바이오생명공학 연구소 (국가공인 R&D)',
    titleEn: 'Corporate Bio-Biotech Research Institute (Certified R&D)',
    descKo: '',
    descEn: '',
    specKo: '',
    specEn: '',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop'
  }
];

export const PATENT_CERTIFICATES: PatentCertificate[] = [
  {
    id: 'cert-1',
    type: 'gmp',
    typeKo: '국제 GMP 인증서',
    typeEn: 'GMP Certificate',
    titleKo: '우수제조품질기준 (GMP) 인증',
    titleEn: 'Good Manufacturing Practices (GMP)',
    regNo: 'SK3059-GMP',
    issueDate: '2022.07.18 ~ 2025.08.07',
    inventionKo: '사료첨가제 개발 및 제조 품질 안전 시스템 (Food Safety Program GMP)',
    inventionEn: 'Food Safety Program - Good Manufacturing Practices (GMP)',
    authorityKo: 'TQCS International Pty Ltd (AACB)',
    authorityEn: 'TQCS International Pty Ltd (AACB Accredited)',
    descKo: '사료첨가제의 원료 입고부터 배합, 소성, 멸균, 포장에 이르는 전 공정 국제 GMP 공인',
    descEn: 'Certified compliance for feed additive development & manufacturing safety process.',
    badgeKo: 'GMP 국제인증',
    badgeEn: 'GMP Certified',
    colorScheme: 'amber',
    imageUrl: 'https://lh3.googleusercontent.com/d/1xDk8abCgyG4tAJRVKFq-B3vqoiPXhZgz'
  },
  {
    id: 'cert-2',
    type: 'iso',
    typeKo: 'ISO 22000 국제인증서',
    typeEn: 'ISO 22000 Certificate',
    titleKo: '식품안전경영시스템 KS Q ISO 22000',
    titleEn: 'Food Safety Management System (ISO 22000:2018)',
    regNo: 'RFM0116',
    issueDate: '2022.08.09 ~ 2025.08.08',
    inventionKo: '맥섬석을 주원료로 하는 사료첨가제 개발 및 생산 (KS Q ISO 22000:2018 / ISO 22000:2018)',
    inventionEn: 'Development and production of feed additives mainly using Macsumsuk',
    authorityKo: '한국경영인증원 (KMR) / IAF',
    authorityEn: 'Korea Management Registrar (KMR) / IAF Accredited',
    descKo: '글로벌 식품·사료안전 경영시스템 국제 표준 규격 인증 획득',
    descEn: 'Global benchmark standard certification for international feed safety management.',
    badgeKo: 'ISO 22000',
    badgeEn: 'ISO 22000',
    colorScheme: 'blue',
    imageUrl: 'https://lh3.googleusercontent.com/d/1C0rnR-1lVD6CC5RMMLy7_o7DNz5lh-JT'
  },
  {
    id: 'cert-3',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '메탄가스 저감용 칼슘사료 첨가제 제조방법',
    titleEn: 'Methane Reduction Calcium Feed Additive Method',
    regNo: '제 10-23698XX 호',
    issueDate: '2022.02.25',
    inventionKo: '굴 패각과 점토광물을 이용한 메탄가스 저감용 칼슘사료 첨가제 제조방법',
    inventionEn: 'Manufacturing method of calcium feed additive for methane gas reduction using oyster shells and clay minerals',
    authorityKo: '대한민국 특허청 (특허청장 김용래)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '반추위 메탄 61.5% 저감 및 사료효율 향상 핵심 원천 특허 등록',
    descEn: 'Core proprietary patent achieving 61.5% in-vitro methane gas reduction in ruminants.',
    badgeKo: '특허 제10-23698XX호',
    badgeEn: 'Patent 10-23698XX',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1f2ZFNpwZeguobP7bo3l6Ky-u7-ZcARa9'
  },
  {
    id: 'cert-4',
    type: 'patent',
    typeKo: '대한민국 특허증 (세계 13개국 등록)',
    typeEn: 'Patent (13 Global Countries)',
    titleKo: '가축 혈액·맥섬석·칼슘 진공 압출 펠렛 제조방법',
    titleEn: 'Vacuum-Extruded Feed Pellet Manufacturing Method',
    regNo: '제 10-24962XX 호',
    issueDate: '2023.02.01',
    inventionKo: '가축 혈액, 맥섬석, 법제칼슘을 이용한 양어사료용 또는 배합사료 보조용 진공 압출성형 펠렛의 제조방법',
    inventionEn: 'Manufacturing method of vacuum-extruded pellets for aquaculture or compound feed using livestock blood, Macsumsuk, and legal calcium',
    authorityKo: '대한민국 특허청 (특허청장 이인실)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '도축 혈액 100% 자원화 및 고단백 펠렛 압출 성형 원천기술 (미국, 일본, 중국 등 글로벌 13개국 등록)',
    descEn: 'Zero-waste animal blood recycling technology patented across 13 major nations.',
    badgeKo: '특허 제10-24962XX호',
    badgeEn: 'Patent 10-24962XX',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1IHgRWVmXIbWcNRfK-xCgl9GqdVfw3ibo'
  },
  {
    id: 'cert-5',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '가축 혈액 및 맥섬석 포함 사료첨가제 제조방법',
    titleEn: 'Feed Additive Comprising Blood & Macsumsuk',
    regNo: '제 10-18295XX 호',
    issueDate: '2018.02.08',
    inventionKo: '가축 혈액 및 맥섬석을 포함하는 사료첨가제의 제조방법',
    inventionEn: 'Manufacturing method of feed additive comprising livestock blood and Macsumsuk',
    authorityKo: '대한민국 특허청 (특허청장 성윤모)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '천연 바이오광물 맥섬석과 혈액 단백질의 결합 안정화 제조 특허',
    descEn: 'Stabilization & formulation technology for blood protein and bio-active minerals.',
    badgeKo: '특허 제10-18295XX호',
    badgeEn: 'Patent 10-18295XX',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1WOuqZiOsXg0J1pKVysoAm5nZBMDwua6y'
  },
  {
    id: 'cert-6',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '유기 코팅 다공질 과립 사료 제조방법',
    titleEn: 'Organic-Coated Porous Granule Feed Method',
    regNo: '제 10-17653XX 호',
    issueDate: '2017.07.31',
    inventionKo: '가축 혈액과 점토광물을 이용한 양어 사료용 또는 배합사료 보조용 유기 코팅 다공질 과립의 제조 방법',
    inventionEn: 'Manufacturing method of organic-coated porous granules for aqua feed using livestock blood and clay minerals',
    authorityKo: '대한민국 특허청 (특허청장 성윤모)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '분진 발생을 원천 차단하고 영양소 용출률을 극대화한 다공질 그래뉼 코팅 기술',
    descEn: 'Dust-free porous micro-encapsulated granule manufacturing method.',
    badgeKo: '특허 제10-17653XX호',
    badgeEn: 'Patent 10-17653XX',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/11Ak9t0BEiW4US7NXb5psqBILcVfG5zKp'
  },
  {
    id: 'cert-7',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '가축 혈액과 패각 이용 유기 코팅 다공질 과립',
    titleEn: 'Porous Granules using Blood and Shells',
    regNo: '제 10-14622XX 호',
    issueDate: '2014.11.10',
    inventionKo: '가축 혈액과 패각을 이용한 양어 사료용 또는 배합사료 보조용 유기 코팅 다공질 과립 및 그 제조 방법',
    inventionEn: 'Organic-coated porous granules and its manufacturing method using livestock blood and oyster shell',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '패각(굴껍질)의 칼슘 자원화 및 혈액 단백질 고정화 특허 기술',
    descEn: 'Shell bio-calcium conversion and animal blood protein immobilizing tech.',
    badgeKo: '특허 제10-14622XX호',
    badgeEn: 'Patent 10-14622XX',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1SawcsnceTrR1sbDhm_5pD3Qqd3nY0vgL'
  },
  {
    id: 'cert-8',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '칼슘 보강 가축사료 첨가제 제조방법',
    titleEn: 'Calcium-Fortified Feed Additive Method',
    regNo: '제 10-13286XX 호',
    issueDate: '2013.11.06',
    inventionKo: '맥섬석과 패각을 포함하며, 칼슘이 보강된 가축사료 첨가제의 제조방법 및 그로부터 수득되는 칼슘이 보강된 가축사료 첨가제 및 이를 포함하는 가축사료',
    inventionEn: 'Manufacturing method of calcium-fortified feed additive containing Macsumsuk and oyster shells',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '생체 흡수율이 탁월한 천연 이온화 칼슘 및 맥섬석 복합제제 원천 특허',
    descEn: 'Proprietary high-bioavailability calcium complex for strong bones and eggshell thickness.',
    badgeKo: '특허 제10-13286XX호',
    badgeEn: 'Patent 10-13286XX',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/12Zeij2-0z77KkGh-a-qltoMsKJw2roY2'
  },
  {
    id: 'cert-9',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '맥섬석·한방제재 복합 사료첨가제 및 가축사양방법',
    titleEn: 'Herbal Bio-Mineral Feed Additive & Farming Method',
    regNo: '제 10-13544XX 호',
    issueDate: '2014.01.16',
    inventionKo: '맥섬석과 한방제재를 혼합한 가축용 사료첨가제 생산방법, 이 방법으로 생산되는 혼합 사료첨가제 및 이의 첨가제를 급여하여 가축을 사양하는 것을 특징으로 하는 가축사양방법',
    inventionEn: 'Livestock feed additive mixing Macsumsuk and oriental herbal formulations, and livestock farming method using the same',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '천연 생약 성분과 원적외선 맥섬석 광물의 복합 작용으로 가축 면역력 극대화',
    descEn: 'Immunity enhancement feed additive combining oriental herbs and far-infrared Macsumsuk.',
    badgeKo: '특허 제10-13544XX호',
    badgeEn: 'Patent 10-13544XX',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1seKR75d9dhuhrkIhYBzx7JPHXpxz7thZ'
  },
  {
    id: 'cert-10',
    type: 'design',
    typeKo: '대한민국 디자인등록증',
    typeEn: 'Certificate of Design Registration',
    titleKo: '가축용 사료 제형 디자인등록',
    titleEn: 'Livestock Feed Formulation Design Registration',
    regNo: '제 30-08844XX 호',
    issueDate: '2014.07.23',
    inventionKo: '가축용 사료 (디자인의 대상이 되는 물품) / 창작자 곽성근',
    inventionEn: 'Livestock Feed Product Design & Form (Creator: Sung-Keun Kwak)',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '특수 다공성 입자 구조 및 기능성 형상에 대한 독점적 지식재산권 확보',
    descEn: 'Exclusive design registration for unique porous feed morphology and granule structure.',
    badgeKo: '디자인 제30-08844XX호',
    badgeEn: 'Design 30-08844XX',
    colorScheme: 'indigo',
    imageUrl: 'https://lh3.googleusercontent.com/d/1oXrbcgFJDv4QGRwZq-AWiq2Bl2_qWOPC'
  },
  {
    id: 'cert-11',
    type: 'trademark',
    typeKo: '대한민국 상표등록증',
    typeEn: 'Certificate of Trademark Registration',
    titleKo: '그로피드 (Growfeed®) 상표권 등록',
    titleEn: 'Growfeed® Trademark Registration',
    regNo: '제 40-09997XX 호',
    issueDate: '2013.10.08',
    inventionKo: '상표: Growfeed 그로피드 (상품구분 제31류 가금산란용 조합제 등 20건)',
    inventionEn: 'Trademark: Growfeed (Classification of Goods: Class 31, 20 items)',
    authorityKo: '대한민국 특허청 (특허청장 김영민)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '친환경 사료 전문 브랜드 그로피드(Growfeed®) 52개국 글로벌 브랜드 상표권',
    descEn: 'Official trademark registration covering Growfeed® livestock brand across 52 nations.',
    badgeKo: '상표 제40-09997XX호',
    badgeEn: 'Trademark 40-09997XX',
    colorScheme: 'rose',
    imageUrl: 'https://lh3.googleusercontent.com/d/1rHjeQDCseLqaEZxp0GEbxi2EzAtEIVxA'
  },
  {
    id: 'cert-12',
    type: 'global',
    typeKo: '해외 52개국 특허 포트폴리오',
    typeEn: 'Global 52-Nation Patent Portfolio',
    titleKo: '세계 52개국 글로벌 지식재산권(IP)',
    titleEn: '52-Nation Global Intellectual Property Network',
    regNo: 'PCT / US / EU / JP / CN',
    issueDate: '1993 ~ 현재 등록',
    inventionKo: '미국, 일본, 중국, 유럽연합 등 세계 52개국 특허 및 상표권 보유',
    inventionEn: 'Global patents & trademarks registered across US, EU, Japan, China, Southeast Asia',
    authorityKo: 'KIPO, USPTO, EPO, JPO, CNIPA',
    authorityEn: 'USPTO (USA), EPO (EU), JPO (Japan), CNIPA (China)',
    descKo: 'KOTRA 세계일류상품 선정 및 글로벌 수출 경쟁력을 뒷받침하는 세계적 특허망',
    descEn: 'Comprehensive global IP barrier supporting 9-year continuous export success.',
    badgeKo: '글로벌 52개국 IP',
    badgeEn: '52-Country IP',
    colorScheme: 'teal',
    imageUrl: 'https://lh3.googleusercontent.com/d/1PqfjXhqARS64_UroA-Sj8YSKeDos2HGO'
  },
  {
    id: 'cert-13',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '맥섬석 바이오 사료 제조 특허',
    titleEn: 'Macsumsuk Bio-Feed Manufacturing Patent',
    regNo: '특허 등록 공인',
    issueDate: '공식 등록',
    inventionKo: '맥섬석을 활용한 친환경 고기능성 바이오 사료 및 원료 조성물',
    inventionEn: 'Eco-friendly high-functional bio-feed and raw material composition utilizing Macsumsuk',
    authorityKo: '대한민국 특허청 (KIPO)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '맥섬석 바이오 원천기술 및 친환경 기능성 사료 지식재산권',
    descEn: 'Core Macsumsuk bio-technology and functional feed intellectual property.',
    badgeKo: '공인 특허',
    badgeEn: 'Official Patent',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1UgB98m5dmtMsAHAKR4tEnWOvebBrS7UW'
  },
  {
    id: 'cert-14',
    type: 'patent',
    typeKo: '대한민국 특허증',
    typeEn: 'Certificate of Patent',
    titleKo: '친환경 축산 사료 첨가제 특허',
    titleEn: 'Eco Livestock Feed Additive Patent',
    regNo: '특허 등록 공인',
    issueDate: '공식 등록',
    inventionKo: '악취 저감 및 가축 면역 증진용 기능성 사료 첨가제 기술',
    inventionEn: 'Functional feed additive technology for odor reduction and livestock immunity enhancement',
    authorityKo: '대한민국 특허청 (KIPO)',
    authorityEn: 'Korean Intellectual Property Office (KIPO)',
    descKo: '축산 환경 개선 및 사료 효율성 극대화 공인 특허',
    descEn: 'Certified patent for livestock environmental improvement and feed efficiency.',
    badgeKo: '공인 특허',
    badgeEn: 'Official Patent',
    colorScheme: 'emerald',
    imageUrl: 'https://lh3.googleusercontent.com/d/1lH8xjCdxFl4cDy9xdcVZRpKfr6bc-5aq'
  }
];


