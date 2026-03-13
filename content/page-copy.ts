import type { SiteLocale } from "@/lib/locale";

type ChromeGroup = {
  title: string;
  links: Array<{ href: string; label: string }>;
};

type ContactPageCopy = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  imageAlt: string;
  summary: string[];
  infoTitle: string;
  infoItems: string[];
  flowTitle: string;
  flowItems: string[];
};

type ContactFormCopy = {
  title: string;
  description: string;
  labels: Record<string, string>;
  placeholders: Record<string, string>;
  focusLegend: string;
  focusOptions: Array<{ value: string; label: string }>;
  stageLegend: string;
  stageOptions: Array<{ value: string; label: string }>;
  timingLegend: string;
  timingOptions: Array<{ value: string; label: string }>;
  budgetLegend: string;
  budgetOptions: Array<{ value: string; label: string }>;
  challengeLabel: string;
  challengePlaceholder: string;
  consentLabel: string;
  submitLabel: string;
  optionalLabel: string;
};

type TeamPageCopy = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  imageAlt: string;
  summary: string[];
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  researchmapLabel: string;
  labels: {
    specialties: string;
    research: string;
    supportThemes: string;
    publications: string;
    sourceNoteEyebrow: string;
  };
  sourceNote: string[];
};

type InsightsPageCopy = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  imageAlt: string;
  summary: string[];
  filterTitle: string;
  filterDescription: string;
  allTag: string;
  listTitle: string;
  listDescription: (count: number) => string;
};

type InsightDetailCopy = {
  listLabel: string;
  heroImageAlt: (title: string) => string;
  summaryEyebrow: string;
  summaryTitle: string;
  tldrEyebrow: string;
  tldrTitle: string;
  learningsTitle: string;
  conclusionTitle: string;
  backgroundTitle: string;
  actionsTitle: string;
  sourcesTitle: string;
  sourcesDescription: string;
  faqTitle: string;
  authorEyebrow: string;
  fallbackRole: string;
  fallbackBio: string;
  viewTeamLabel: string;
  primaryCta: string;
  relatedTitle: string;
  relatedDescription: string;
};

type LegalSection = {
  title: string;
  body: string[];
};

type StaticPageEntry = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  imageAlt: string;
  summary: string[];
  sections: LegalSection[];
};

type ThanksPageEntry = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  imageAlt: string;
  summary: string;
  primaryAction: string;
  secondaryAction: string;
};

type ServiceTemplateCopy = {
  eyebrow: string;
  heroImageAlt: (title: string) => string;
  primaryCta: string;
  pricingLabel: string;
  understanding: string;
  understandingTitle: string;
  outOfScopeTitle: string;
  outOfScopeBody: string;
  painsTitle: string;
  supportTitle: string;
  deliverablesTitle: string;
  idealClientsTitle: string;
  processTitle: string;
  processDescription: string;
  faqTitle: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
};

type ChromeCopy = {
  brandTagline: string;
  navAriaLabel: string;
  navItems: Array<{ href: string; label: string }>;
  primaryCta: string;
  languageSwitchLabel: string;
  languageSwitchAriaLabel: string;
  footerEyebrow: string;
  footerTitle: string;
  footerDescription: string;
  footerGroups: ChromeGroup[];
  footerNotice: string;
  footerDisclaimer: string;
  homeLabel: string;
  breadcrumbAriaLabel: string;
};

export const chromeCopy: Record<SiteLocale, ChromeCopy> = {
  ja: {
    brandTagline: "Medical Consulting for Healthcare Businesses",
    navAriaLabel: "グローバルナビゲーション",
    navItems: [
      { href: "/services/medical-scientific-advisory", label: "支援領域" },
      { href: "/team", label: "チーム紹介" },
      { href: "/insights", label: "インサイト" },
      { href: "/contact", label: "お問い合わせ" },
    ],
    primaryCta: "法人向け相談を予約する",
    languageSwitchLabel: "English",
    languageSwitchAriaLabel: "英語ページへ切り替える",
    footerEyebrow: "Healthcare Business Partner",
    footerTitle: "医療の正確性と事業推進の両立を、研究・AI・発信まで一気通貫で支援します。",
    footerDescription:
      "YUIRYOU株式会社は、フェムテック、ヘルスケアSaaS、医療メディア、海外準備中のスタートアップに向けて、医療・研究・AI・発信の論点を横断して支援する法人向け医療コンサルティングチームです。",
    footerGroups: [
      {
        title: "支援領域",
        links: [
          { href: "/services/medical-scientific-advisory", label: "医療・科学アドバイザリー" },
          { href: "/services/clinical-research-rct", label: "臨床研究・RCT・論文化支援" },
          { href: "/services/medical-ai-global", label: "医療AI・英語 / 海外向け支援" },
          { href: "/services/youtube-content-ad", label: "YouTube・広告・オウンドメディア支援" },
        ],
      },
      {
        title: "ガイド",
        links: [
          { href: "/team", label: "チーム紹介" },
          { href: "/insights", label: "インサイト / コラム" },
          { href: "/privacy-policy", label: "個人情報保護指針" },
          { href: "/disclaimer", label: "免責事項" },
        ],
      },
    ],
    footerNotice: "初回相談はお問い合わせフォームから受付",
    footerDisclaimer: "患者個人の診療相談は対象外です。法務・薬機法・医療広告の最終判断は必要に応じて専門家連携で行います。",
    homeLabel: "ホーム",
    breadcrumbAriaLabel: "パンくず",
  },
  en: {
    brandTagline: "Healthcare Business Medical Consulting",
    navAriaLabel: "Global navigation",
    navItems: [
      { href: "/services/medical-scientific-advisory", label: "Services" },
      { href: "/team", label: "Team" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
    ],
    primaryCta: "Book a consultation",
    languageSwitchLabel: "日本語",
    languageSwitchAriaLabel: "Switch to Japanese pages",
    footerEyebrow: "Healthcare Business Partner",
    footerTitle: "Medical credibility, research planning, AI governance, and communication design in one partner.",
    footerDescription:
      "YUIRYOU Inc. supports femtech, healthcare SaaS, medical media, and globally minded startups with physician-led consulting that connects medical credibility to execution.",
    footerGroups: [
      {
        title: "Services",
        links: [
          { href: "/services/medical-scientific-advisory", label: "Medical & Scientific Advisory" },
          { href: "/services/clinical-research-rct", label: "Clinical Research, RCTs, and Publication Support" },
          { href: "/services/medical-ai-global", label: "Medical AI and Global Communication" },
          { href: "/services/youtube-content-ad", label: "YouTube, Advertising, and Owned Media" },
        ],
      },
      {
        title: "Guide",
        links: [
          { href: "/team", label: "Team" },
          { href: "/insights", label: "Insights" },
          { href: "/privacy-policy", label: "Privacy Guideline" },
          { href: "/disclaimer", label: "Disclaimer" },
        ],
      },
    ],
    footerNotice: "Initial inquiries are accepted through the contact form.",
    footerDisclaimer: "Company-only support. No patient consultations. Final legal and advertising judgments are handled with specialist collaboration when needed.",
    homeLabel: "Home",
    breadcrumbAriaLabel: "Breadcrumb",
  },
};

export const contactPageCopy: Record<SiteLocale, ContactPageCopy> = {
  ja: {
    metadataTitle: "お問い合わせ | 法人向け医療コンサルティング",
    metadataDescription: "法人向け医療コンサルティングに関するお問い合わせページです。課題の概要と希望時期をお送りください。",
    eyebrow: "Contact",
    title: "お問い合わせ",
    imageAlt: "お問い合わせページのイメージ",
    summary: [
      "法人向け支援の相談窓口です。",
      "対象資料や現在の課題がわかる範囲であれば十分です。",
      "通常2営業日以内を目安に折り返します。",
    ],
    infoTitle: "ご共有いただきたい内容",
    infoItems: [
      "どの資料や施策で医療的な判断が必要か",
      "研究、AI、発信のうち、現在どこがボトルネックか",
      "希望時期と、社内で意思決定に必要な材料",
    ],
    flowTitle: "送信後の流れ",
    flowItems: [
      "内容確認後、通常2営業日以内に折り返します",
      "必要に応じて初回相談の日程を調整します",
      "初回相談では、優先課題と支援範囲をご提案します",
    ],
  },
  en: {
    metadataTitle: "Contact | Medical Consulting for Companies",
    metadataDescription: "Contact page for company-focused medical consulting. Share your current challenge, timeline, and what needs medical judgment.",
    eyebrow: "Contact",
    title: "Contact",
    imageAlt: "Contact page visual",
    summary: [
      "This form is for company inquiries only.",
      "A rough outline of your current materials or challenge is enough.",
      "We usually reply within two business days.",
    ],
    infoTitle: "Helpful information to share",
    infoItems: [
      "Which materials or initiatives need medical judgment",
      "Where research, AI, or communication is slowing progress",
      "What kind of evidence or review your team currently needs",
    ],
    flowTitle: "What happens next",
    flowItems: [
      "We review the submission and reply within two business days in most cases.",
      "If appropriate, we arrange an initial consultation.",
      "In the first consultation, we define the priority issues and engagement scope.",
    ],
  },
};

export const contactFormCopy: Record<SiteLocale, ContactFormCopy> = {
  ja: {
    title: "入力目安は3分です",
    description: "必須項目を中心にご入力ください。資料が未整理でも、現時点でわかる内容だけで問題ありません。",
    labels: {
      company: "会社名",
      name: "お名前",
      email: "メールアドレス",
      phone: "電話番号",
      title: "役職",
      company_url: "会社URL",
      industry: "業種",
    },
    placeholders: {
      company_url: "https://",
      phone: "例: 03-1234-5678",
    },
    focusLegend: "主に相談したい内容",
    focusOptions: [
      { value: "advisory", label: "営業資料 / LPレビュー" },
      { value: "research", label: "PoC / 研究 / RCT" },
      { value: "ai-global", label: "医療AI / 品質管理 / 英語対応" },
      { value: "media", label: "YouTube / 広告 / メディア運用" },
      { value: "multiple", label: "複数テーマをまたいで相談したい" },
    ],
    stageLegend: "現在のフェーズ",
    stageOptions: [
      { value: "planning", label: "企画・検討中" },
      { value: "launch", label: "公開 / 提案の直前" },
      { value: "operating", label: "運用中で改善したい" },
      { value: "research", label: "研究・PoCを進めたい" },
    ],
    timingLegend: "希望時期",
    timingOptions: [
      { value: "within-2-weeks", label: "2週間以内" },
      { value: "within-month", label: "1か月以内" },
      { value: "this-quarter", label: "今四半期" },
      { value: "exploring", label: "情報収集中" },
    ],
    budgetLegend: "想定予算",
    budgetOptions: [
      { value: "under-300", label: "30万円未満" },
      { value: "300-600", label: "30〜60万円" },
      { value: "600-1000", label: "60〜100万円" },
      { value: "1000-1800", label: "100〜180万円" },
      { value: "over-1800", label: "180万円以上" },
    ],
    challengeLabel: "現在の課題",
    challengePlaceholder: "例: LPの医療的な説得力を上げたい / PoC設計を見直したい / 医療AIの品質管理フローを整えたい",
    consentLabel: "個人情報保護指針に同意する",
    submitLabel: "法人向け相談を送信する",
    optionalLabel: "任意",
  },
  en: {
    title: "About 3 minutes to complete",
    description: "Please focus on the required fields. Even if your materials are incomplete, a rough outline is enough.",
    labels: {
      company: "Company",
      name: "Name",
      email: "Email",
      phone: "Phone",
      title: "Job title",
      company_url: "Company URL",
      industry: "Industry",
    },
    placeholders: {
      company_url: "https://",
      phone: "e.g. +81-3-1234-5678",
    },
    focusLegend: "Main topic",
    focusOptions: [
      { value: "advisory", label: "Landing page and sales material review" },
      { value: "research", label: "PoC, research, and RCT planning" },
      { value: "ai-global", label: "Medical AI, information quality, and English materials" },
      { value: "media", label: "YouTube, advertising, and content operations" },
      { value: "multiple", label: "Multiple themes across functions" },
    ],
    stageLegend: "Current stage",
    stageOptions: [
      { value: "planning", label: "Planning" },
      { value: "launch", label: "Pre-launch or pre-pitch" },
      { value: "operating", label: "Already operating and need improvement" },
      { value: "research", label: "Research or PoC planning" },
    ],
    timingLegend: "Preferred timing",
    timingOptions: [
      { value: "within-2-weeks", label: "Within 2 weeks" },
      { value: "within-month", label: "Within 1 month" },
      { value: "this-quarter", label: "This quarter" },
      { value: "exploring", label: "Still exploring" },
    ],
    budgetLegend: "Budget range",
    budgetOptions: [
      { value: "under-300", label: "Under JPY 300k" },
      { value: "300-600", label: "JPY 300k to 600k" },
      { value: "600-1000", label: "JPY 600k to 1M" },
      { value: "1000-1800", label: "JPY 1M to 1.8M" },
      { value: "over-1800", label: "Over JPY 1.8M" },
    ],
    challengeLabel: "Current challenge",
    challengePlaceholder: "Example: We need stronger medical credibility in our landing page, or we need help structuring a PoC and review flow.",
    consentLabel: "I agree to the privacy guideline.",
    submitLabel: "Request a company consultation",
    optionalLabel: "Optional",
  },
};

export const teamPageCopy: Record<SiteLocale, TeamPageCopy> = {
  ja: {
    metadataTitle: "チーム紹介 | 三苫 智裕・大羽 輝・豊田 康介",
    metadataDescription: "三苫 智裕、大羽 輝、豊田 康介の3名で構成する医療コンサルティングチームです。研究・AI・発信の役割分担を紹介します。",
    eyebrow: "Team",
    title: "チーム紹介",
    imageAlt: "チーム紹介ページのイメージ",
    summary: [
      "三苫 智裕、大羽 輝、豊田 康介の3名で構成する医療コンサルティングチームです。",
      "研究・AI・情報品質・発信設計を役割分担し、事業課題に応じて横断的に支援します。",
      "researchmap などの公開情報をもとに、確認できる内容を掲載しています。",
    ],
    sectionEyebrow: "Profiles",
    sectionTitle: "専門性の異なる3名が、ひとつの案件に連携して関わります",
    sectionDescription: "研究、AI、発信の論点を切り分けず、事業の優先順位に沿って支援できる体制です。",
    researchmapLabel: "researchmapを見る",
    labels: {
      specialties: "専門領域",
      research: "研究実績・補足",
      supportThemes: "相談できるテーマ",
      publications: "主要論文",
      sourceNoteEyebrow: "掲載情報について",
    },
    sourceNote: [
      "三苫 智裕、大羽 輝の研究実績・主要論文は、2026年3月13日時点で確認した researchmap の公開情報をもとに整理しています。",
      "公開プロフィールは、公開情報として確認できる内容のみを掲載しています。",
    ],
  },
  en: {
    metadataTitle: "Team | Tomohiro Mitoma, Hikaru Oba, and Kosuke Toyoda",
    metadataDescription: "Meet the three-physician consulting team covering research, AI quality, and communication design for healthcare businesses.",
    eyebrow: "Team",
    title: "Team",
    imageAlt: "Team page visual",
    summary: [
      "Our three-physician team combines research operations, AI quality design, and communication planning.",
      "Each member covers a distinct execution role so business teams can move faster without weakening medical credibility.",
      "Selected publications are shown where public sources are available.",
    ],
    sectionEyebrow: "Profiles",
    sectionTitle: "Distinct medical roles, one execution partner for healthcare businesses.",
    sectionDescription: "We connect medical credibility to research planning, AI governance, and communication design instead of limiting support to one-off supervision.",
    researchmapLabel: "View on researchmap",
    labels: {
      specialties: "Specialties",
      research: "Research highlights",
      supportThemes: "Consultation themes",
      publications: "Selected publications",
      sourceNoteEyebrow: "Source note",
    },
    sourceNote: [
      "Selected publications for Tomohiro Mitoma and Hikaru Oba are based on public researchmap information verified on March 13, 2026.",
      "We update public profiles only with information that can be verified through public sources.",
    ],
  },
};

export const insightsPageCopy: Record<SiteLocale, InsightsPageCopy> = {
  ja: {
    metadataTitle: "インサイト / コラム | 医療AI・女性ヘルスケア・研究設計・SEO/AIEO",
    metadataDescription: "医療AI、女性向けヘルスケア、PoCから論文化、SEO/AIEOの4テーマを、一次情報と実務観点で整理した記事一覧です。",
    eyebrow: "Insights",
    title: "インサイト / コラム",
    imageAlt: "インサイトページのイメージ",
    summary: [
      "医療AI、女性向けヘルスケア、PoCから論文化、SEO/AIEOの4テーマを、一次情報と実務観点で掘り下げています。",
      "制度、品質、研究設計、コンテンツ運用の各論点を、企業が意思決定しやすい粒度で整理しています。",
      "見出しごとに論点を分け、出典と要点を確認しやすい構成に整えています。",
    ],
    filterTitle: "タグで絞り込む",
    filterDescription: "テーマごとに記事を整理しているので、必要な論点から読み始められます。",
    allTag: "すべて",
    listTitle: "記事一覧",
    listDescription: (count) => `${count}本の記事を表示しています。`,
  },
  en: {
    metadataTitle: "Insights | Medical AI, Women?s Health, Research Design, and SEO/AIEO",
    metadataDescription: "A focused set of articles covering medical AI, women?s healthcare content, research design, and healthcare SEO/AIEO foundations.",
    eyebrow: "Insights",
    title: "Insights",
    imageAlt: "Insights page visual",
    summary: [
      "These articles focus on medical AI, women?s healthcare content, publication-minded PoC design, and healthcare SEO/AIEO.",
      "Primary sources are used where possible so business teams can make faster decisions with clearer evidence.",
      "Each article is structured for practical internal sharing, not just surface-level commentary.",
    ],
    filterTitle: "Filter by tag",
    filterDescription: "Switch topics quickly by tag and move directly to the issue that matters most.",
    allTag: "All tags",
    listTitle: "Articles",
    listDescription: (count) => String(count) + " articles available.",
  },
};

export const insightDetailCopy: Record<SiteLocale, InsightDetailCopy> = {
  ja: {
    listLabel: "インサイト",
    heroImageAlt: (title) => title + "のイメージ",
    summaryEyebrow: "Summary",
    summaryTitle: "要約",
    tldrEyebrow: "TL;DR",
    tldrTitle: "この記事でわかること",
    learningsTitle: "読む前に押さえたい論点",
    conclusionTitle: "結論",
    backgroundTitle: "背景",
    actionsTitle: "具体策",
    sourcesTitle: "出典",
    sourcesDescription: "一次情報、公式情報、公開資料を優先して参照しています。",
    faqTitle: "FAQ",
    authorEyebrow: "著者 / 監修者",
    fallbackRole: "医療コンサルティングチーム",
    fallbackBio: "医療、研究、AI、発信を横断して支援する医師チームです。",
    viewTeamLabel: "チーム紹介を見る",
    primaryCta: "法人向け相談を予約する",
    relatedTitle: "関連記事",
    relatedDescription: "近い論点から続けて読める記事です。",
  },
  en: {
    listLabel: "Insights",
    heroImageAlt: (title) => title + " visual",
    summaryEyebrow: "Summary",
    summaryTitle: "Summary",
    tldrEyebrow: "TL;DR",
    tldrTitle: "Key points first",
    learningsTitle: "What you will learn",
    conclusionTitle: "Conclusion",
    backgroundTitle: "Background",
    actionsTitle: "Practical actions",
    sourcesTitle: "Sources",
    sourcesDescription: "We prioritize primary and official sources where possible.",
    faqTitle: "FAQ",
    authorEyebrow: "Author / Reviewer",
    fallbackRole: "YUIRYOU Inc.",
    fallbackBio: "A physician-led consulting team connecting medical credibility to execution for healthcare businesses.",
    viewTeamLabel: "View team",
    primaryCta: "Book a consultation",
    relatedTitle: "Related articles",
    relatedDescription: "Explore nearby themes and continue from the most relevant topic.",
  },
};

const privacySectionsJa: LegalSection[] = [
  {
    title: "1. 適用範囲",
    body: [
      "YUIRYOU株式会社は、法人向け医療コンサルティングの提供に伴い取得する個人情報を、個人情報保護法その他関連法令に沿って適切に取り扱います。",
      "本指針は、お問い合わせ、商談調整、提案、契約、資料授受その他これらに付随する業務で取得する個人情報に適用されます。",
    ],
  },
  {
    title: "2. 取得する情報",
    body: [
      "お問い合わせフォーム等を通じて、会社名、氏名、メールアドレス、電話番号、役職、会社URL、業種、相談内容、現在の課題、想定時期、想定予算その他業務上必要な情報を取得する場合があります。",
      "あわせて、utm_source、utm_medium、utm_campaign、utm_content、referrer、landing_page などの流入情報を取得する場合があります。",
    ],
  },
  {
    title: "3. 利用目的",
    body: [
      "取得した個人情報は、お問い合わせ対応、商談調整、提案、契約・請求対応、サービス提供、運用改善、品質向上、法令対応その他正当な業務遂行のために利用します。",
      "法令で認められる場合を除き、本人の同意なく、上記利用目的の範囲を超えて利用しません。",
    ],
  },
  {
    title: "4. 第三者提供",
    body: [
      "法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。",
      "ただし、法務、規制、広告表現等に関して専門家と連携する必要がある場合は、必要最小限の範囲で情報を共有することがあります。",
    ],
  },
  {
    title: "5. 委託",
    body: [
      "お問い合わせ管理、メール配信、クラウドサービス運用その他業務遂行に必要な範囲で外部事業者へ委託する場合があります。",
      "委託先の選定にあたっては、情報管理体制を確認し、必要かつ適切な監督を行います。",
    ],
  },
  {
    title: "6. 安全管理措置",
    body: [
      "アクセス権限管理、アカウント管理、保存媒体の保護、漏えい等の防止、保管環境の見直し等、必要かつ適切な安全管理措置を講じます。",
      "不要となった情報は、業務上または法令上必要な保存期間を踏まえて適切に削除または廃棄します。",
    ],
  },
  {
    title: "7. 開示等の請求",
    body: [
      "保有個人データについて、開示、訂正、追加、削除、利用停止、第三者提供停止等の請求がある場合は、お問い合わせフォームよりご連絡ください。",
      "本人確認等、法令に沿った手続を行ったうえで、合理的な範囲で対応します。",
    ],
  },
  {
    title: "8. 改定",
    body: [
      "本指針は、法令改正、業務内容の変更、運用改善等に応じて改定することがあります。",
      "改定後の内容は本サイト上に掲載した時点で効力を生じるものとします。",
    ],
  },
];

const disclaimerSectionsJa: LegalSection[] = [
  {
    title: "1. 情報提供の位置づけ",
    body: [
      "本サイトは、法人向け医療コンサルティングに関する情報提供を目的として運営しています。",
      "個別の診療判断、診断、治療方針、法的判断、薬機法判断、医療広告判断を提供するものではありません。",
    ],
  },
  {
    title: "2. 医療判断・法務判断について",
    body: [
      "本サイトに掲載された情報は一般的な参考情報であり、個別事案の最終判断を代替するものではありません。",
      "必要に応じて、医療専門職、法務専門家、薬機法・医療広告に関する専門家へご相談ください。",
    ],
  },
  {
    title: "3. 成果保証について",
    body: [
      "当社は、売上向上、資金調達成功、規制適合、広告審査通過、検索順位向上その他の成果を保証するものではありません。",
      "支援内容は個別の状況に応じて異なり、成果は実行体制や外部要因によって変動します。",
    ],
  },
  {
    title: "4. 外部リンク",
    body: [
      "本サイトでは参考情報として外部サイトへのリンクを掲載する場合がありますが、リンク先の内容、正確性、継続性、利用可否等について当社は責任を負いません。",
      "外部サイトの利用条件や個人情報保護方針は、各運営主体の定める内容をご確認ください。",
    ],
  },
];

export const staticPageCopy: Record<SiteLocale, { privacy: StaticPageEntry; disclaimer: StaticPageEntry; thanks: ThanksPageEntry }> = {
  ja: {
    privacy: {
      metadataTitle: "個人情報保護指針 | YUIRYOU株式会社",
      metadataDescription: "YUIRYOU株式会社の個人情報保護指針です。取得する情報、利用目的、第三者提供、安全管理措置などを記載しています。",
      eyebrow: "Privacy Guideline",
      title: "個人情報保護指針",
      imageAlt: "個人情報保護指針ページのイメージ",
      summary: [
        "当社は、法人向け医療コンサルティングの提供にあたり、個人情報を適切に取得・利用・管理します。",
        "本指針は、取得する情報、利用目的、第三者提供、安全管理措置、開示等の請求手続を示すものです。",
        "法令や運用の変更に応じて、本指針を見直すことがあります。",
      ],
      sections: privacySectionsJa,
    },
    disclaimer: {
      metadataTitle: "免責事項 | YUIRYOU株式会社",
      metadataDescription: "YUIRYOU株式会社の免責事項です。情報提供の範囲、外部リンク、責任範囲などを記載しています。",
      eyebrow: "Disclaimer",
      title: "免責事項",
      imageAlt: "免責事項ページのイメージ",
      summary: [
        "本サイトは、法人向け医療コンサルティングに関する情報提供を目的として運営しています。",
        "掲載情報は正確性の確保に努めていますが、完全性や特定目的への適合を保証するものではありません。",
        "最終的な医療判断、法務判断、広告判断は、必要に応じて専門家と連携して行ってください。",
      ],
      sections: disclaimerSectionsJa,
    },
    thanks: {
      metadataTitle: "お問い合わせありがとうございました | YUIRYOU株式会社",
      metadataDescription: "お問い合わせを受け付けました。通常2営業日以内を目安にご連絡します。",
      eyebrow: "Thanks",
      title: "お問い合わせを受け付けました",
      imageAlt: "お問い合わせ完了ページのイメージ",
      summary: "通常2営業日以内を目安に内容を確認し、ご連絡します。補足情報が必要な場合は、こちらから折り返します。",
      primaryAction: "トップへ戻る",
      secondaryAction: "インサイトを見る",
    },
  },
  en: {
    privacy: {
      metadataTitle: "Privacy Guideline | YUIRYOU Inc.",
      metadataDescription: "The privacy guideline of YUIRYOU Inc., including collected information, purposes of use, third-party sharing, security measures, and data subject requests.",
      eyebrow: "Privacy Guideline",
      title: "Privacy Guideline",
      imageAlt: "Privacy guideline visual",
      summary: [
        "We handle personal information appropriately in connection with our company-facing medical consulting services.",
        "This guideline outlines what we collect, why we use it, and how we manage and respond to requests concerning personal information.",
        "We may update this guideline when our operations or applicable laws change.",
      ],
      sections: [
        {
          title: "1. Scope",
          body: [
            "This guideline explains how YUIRYOU Inc. handles personal information obtained through inquiries, consultations, proposals, and related business communication.",
          ],
        },
        {
          title: "2. Information we may collect",
          body: [
            "We may collect company name, personal name, email address, phone number, job title, company URL, industry, inquiry details, expected timing, budget range, and related communication records.",
            "We may also collect referral and campaign information such as utm parameters, referrer, and landing page to understand how inquiries reached us.",
          ],
        },
        {
          title: "3. Purposes of use",
          body: [
            "We use personal information to respond to inquiries, arrange consultations, evaluate engagement fit, provide services, manage contracts and billing, improve operations, and comply with laws or legitimate business requirements.",
          ],
        },
        {
          title: "4. Third-party sharing and outsourcing",
          body: [
            "We do not provide personal information to third parties without consent except where required by law or where necessary in connection with professional support, such as legal or regulatory collaboration.",
            "When outsourcing part of our operations, we select vendors with appropriate information management practices and provide necessary supervision.",
          ],
        },
        {
          title: "5. Security measures and retention",
          body: [
            "We implement reasonable security measures such as access control, account management, device protection, and review of storage environments.",
            "Information is retained only as long as necessary for the relevant purpose or legal requirement and is deleted or disposed of appropriately thereafter.",
          ],
        },
        {
          title: "6. Requests concerning personal information",
          body: [
            "Where applicable, we respond to requests for disclosure, correction, suspension of use, deletion, or related inquiries in accordance with applicable law, after appropriate identity verification.",
          ],
        },
      ],
    },
    disclaimer: {
      metadataTitle: "Disclaimer | YUIRYOU Inc.",
      metadataDescription: "Disclaimer regarding the scope of information on this site, the role of medical or legal judgment, external links, and limitation of liability.",
      eyebrow: "Disclaimer",
      title: "Disclaimer",
      imageAlt: "Disclaimer visual",
      summary: [
        "This site provides information about company-facing medical consulting services.",
        "It does not provide individual diagnosis, treatment advice, or guaranteed legal or advertising judgments.",
        "Final medical, legal, regulatory, and advertising judgments should be made with appropriate specialist input where needed.",
      ],
      sections: [
        {
          title: "1. Informational purpose",
          body: [
            "The content of this site is provided for general informational purposes regarding our services and should not be treated as patient-specific medical advice or a substitute for professional legal or regulatory review.",
          ],
        },
        {
          title: "2. No guarantee of final judgment",
          body: [
            "Nothing on this site guarantees a final conclusion on medical, legal, pharmaceutical advertising, or healthcare advertising matters. Specialist review may still be required depending on the issue.",
          ],
        },
        {
          title: "3. External links",
          body: [
            "We may link to external sources for reference, but we do not control their contents or operation and are not responsible for losses arising from their use.",
          ],
        },
        {
          title: "4. Limitation of liability",
          body: [
            "To the extent permitted by law, we are not liable for losses arising from the use of this site or its linked content, except in cases of wilful misconduct or gross negligence.",
          ],
        },
      ],
    },
    thanks: {
      metadataTitle: "Thank you | YUIRYOU Inc.",
      metadataDescription: "Your inquiry has been received. We usually reply within two business days.",
      eyebrow: "Thanks",
      title: "Thank you for your inquiry",
      imageAlt: "Thank-you page visual",
      summary: "We usually review new inquiries and reply within two business days. If appropriate, we will suggest an initial consultation slot.",
      primaryAction: "Back to home",
      secondaryAction: "Read insights",
    },
  },
};

export const serviceTemplateCopy: Record<SiteLocale, ServiceTemplateCopy> = {
  ja: {
    eyebrow: "支援領域",
    heroImageAlt: (title) => title + "のイメージ",
    primaryCta: "法人向け相談を予約する",
    pricingLabel: "料金プランを見る",
    understanding: "このページでわかること",
    understandingTitle: "支援範囲、向いている企業、進め方をまとめて確認できます。",
    outOfScopeTitle: "ご留意事項",
    outOfScopeBody: "患者個人の相談、診療判断、法務・薬機法・医療広告の最終判断は本サービスの対象外です。必要に応じて専門家連携で対応します。",
    painsTitle: "こんなお悩みに",
    supportTitle: "支援内容",
    deliverablesTitle: "代表的な成果物",
    idealClientsTitle: "向いている企業",
    processTitle: "進め方",
    processDescription: "初回相談で課題を整理し、優先順位と関与範囲を合わせたうえで伴走を開始します。",
    faqTitle: "FAQ",
    ctaEyebrow: "ご相談",
    ctaTitle: "課題に合った関与範囲を、初回相談で整理します。",
    ctaDescription: "対象資料、研究フェーズ、AI活用状況、発信計画を確認し、優先順位と支援範囲をご提案します。",
  },
  en: {
    eyebrow: "Service",
    heroImageAlt: (title) => "Visual for " + title,
    primaryCta: "Book a consultation",
    pricingLabel: "View pricing",
    understanding: "What this page covers",
    understandingTitle: "Clarify scope, fit, and how the engagement moves forward.",
    outOfScopeTitle: "Important note",
    outOfScopeBody: "We do not provide patient consultations or guarantee final legal or advertising judgments. Specialist collaboration may be required where appropriate.",
    painsTitle: "Typical issues",
    supportTitle: "Support scope",
    deliverablesTitle: "Typical deliverables",
    idealClientsTitle: "Best-fit companies",
    processTitle: "How we work",
    processDescription: "We move from issue clarification to execution support while keeping decision-making aligned.",
    faqTitle: "FAQ",
    ctaEyebrow: "Contact",
    ctaTitle: "Define the right scope before execution slows down.",
    ctaDescription: "We recommend the level of involvement based on your current materials, internal structure, and timeline.",
  },
};
