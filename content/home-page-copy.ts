export type HomeLocale = "ja" | "en";

type HomeHighlight = {
  label: string;
  title: string;
  description: string;
};

type HomePageCopy = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: HomeHighlight[];
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    labels: string[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    proof: string[];
  };
};

export const homePageCopy: Record<HomeLocale, HomePageCopy> = {
  ja: {
    hero: {
      eyebrow: "Femtech / Healthcare SaaS / Medical Media / Global Health",
      title: "医療の信頼性で、事業の前進を止めない。医師3名が研究・AI・発信まで伴走します。",
      description:
        "フェムテック、ヘルスケアSaaS、医療メディア、海外準備中のスタートアップ向けに、英語・RCT・研究実務、医療AI・情報品質、YouTube・広告設計を1チームで支援します。",
      highlights: [
        {
          label: "Research",
          title: "英語・RCT・研究実務",
          description: "PoC設計、文献レビュー、論文化準備までを、事業判断に使える形で前に進めます。",
        },
        {
          label: "AI",
          title: "医療AI・情報品質設計",
          description: "AI活用ルール、出典管理、監修フローを整え、医療情報の品質を運用で支えます。",
        },
        {
          label: "Content",
          title: "YouTube・広告・発信設計",
          description: "医療の正確性を保ちながら、再生・読了・商談導線まで見据えた発信へ落とし込みます。",
        },
      ],
      primaryCta: "法人向け無料相談を申し込む",
      secondaryCta: "料金プランを見る",
      note: "法人向け / 患者個人の相談は対象外 / 価格と支援範囲を公開",
    },
    pricing: {
      eyebrow: "料金",
      title: "関与の深さと成果物の違いを、最初に比較できます。",
      description:
        "会議頻度、レビュー範囲、成果物の違いがひと目でわかるように整理しています。案件の重さと必要な関与度に応じて選べます。",
      labels: ["入口設計", "定例壁打ち", "施策伴走", "経営伴走"],
    },
    finalCta: {
      eyebrow: "ご相談",
      title: "医療・研究・AI・発信を、事業計画に沿って前に進めます。",
      description:
        "医療の正確性だけでなく、社内説明、営業資料、研究設計、AI運用、コンテンツ改善まで、一貫した体制で伴走します。",
      primaryCta: "法人向け無料相談を申し込む",
      secondaryCta: "インサイトを見る",
      proof: ["法人向け支援", "価格公開", "医師3名体制"],
    },
  },
  en: {
    hero: {
      eyebrow: "Femtech / Healthcare SaaS / Medical Media / Global Health",
      title: "Keep business momentum without compromising medical credibility.",
      description:
        "For femtech, healthcare SaaS, medical media, and globally minded startups, our three-physician team supports research operations, medical AI quality design, and content execution in one system.",
      highlights: [
        {
          label: "Research",
          title: "English, RCTs, and research operations",
          description: "We connect PoC design, literature review, and publication readiness to real business decisions.",
        },
        {
          label: "AI",
          title: "Medical AI and quality governance",
          description: "We define review rules, source control, and supervision workflows before scale creates risk.",
        },
        {
          label: "Content",
          title: "YouTube, ads, and content execution",
          description: "We align medical accuracy with content systems that support visibility, trust, and conversion.",
        },
      ],
      primaryCta: "Request a company consultation",
      secondaryCta: "View pricing",
      note: "For companies only / No patient consultations / Pricing and scope disclosed upfront",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Compare scope and deliverables before the first meeting.",
      description:
        "Each plan is structured around meeting cadence, review depth, and expected deliverables so companies can judge fit quickly.",
      labels: ["Entry", "Advisory", "Growth", "Strategic"],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Move business, research, AI, and content execution forward with one team.",
      description:
        "We help healthcare companies align medical credibility with execution across internal materials, research design, AI operations, and content systems.",
      primaryCta: "Request a company consultation",
      secondaryCta: "Read insights",
      proof: ["Company-only support", "Transparent pricing", "Three-physician team"],
    },
  },
};