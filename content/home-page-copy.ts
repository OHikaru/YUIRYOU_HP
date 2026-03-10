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
      eyebrow: "Femtech / Healthcare SaaS / Medical Media",
      title: "医療監修の先まで伴走。医師3名が、研究・AI・発信まで法人実務を前に進めます。",
      description:
        "フェムテック、ヘルスケアSaaS、医療メディア、海外準備中のスタートアップ向けに、英語・RCT・研究実務、医療AI・情報品質、YouTube・広告設計を横断支援します。",
      highlights: [
        {
          label: "Research",
          title: "英語・RCT・研究実務",
          description: "PoC設計、文献レビュー、論文化準備までを、事業判断に使える形へ接続します。",
        },
        {
          label: "AI",
          title: "医療AI・情報品質設計",
          description: "AI活用ルール、出典管理、レビュー体制を先に設計し、運用リスクを抑えます。",
        },
        {
          label: "Content",
          title: "YouTube・広告・発信設計",
          description: "医療の正確性と訴求力を両立し、読了・再生・商談導線まで見据えて設計します。",
        },
      ],
      primaryCta: "法人向け無料相談を申し込む",
      secondaryCta: "料金プランを見る",
      note: "法人向け / 患者個人の相談は対象外 / 価格と支援範囲を事前提示",
    },
    pricing: {
      eyebrow: "料金",
      title: "月額帯、会議頻度、成果物の目安を先に比較できます。",
      description:
        "検討段階で判断しやすいように、会議頻度、レビュー本数、成果物の目安を標準プランとして明示しています。課題の大きさと関与範囲に応じて選べます。",
      labels: ["入口設計", "定例壁打ち", "施策伴走", "経営伴走"],
    },
    finalCta: {
      eyebrow: "ご相談",
      title: "事業、研究、AI、発信の論点を整理し、次の一手を明確にします。",
      description:
        "フェムテック、ヘルスケアSaaS、医療メディア、海外準備中の案件まで、現在地に応じて優先順位と支援範囲をご提案します。",
      primaryCta: "法人向け無料相談を申し込む",
      secondaryCta: "インサイトを見る",
      proof: ["法人向け", "価格公開", "医師3名体制"],
    },
  },
  en: {
    hero: {
      eyebrow: "Femtech / Healthcare SaaS / Medical Media",
      title: "Beyond medical review. Three physicians move research, AI, and content execution forward for healthcare businesses.",
      description:
        "For femtech, healthcare SaaS, medical media, and globally minded startups, we support research operations, medical AI quality design, and content execution in one team.",
      highlights: [
        {
          label: "Research",
          title: "English, RCTs, and research operations",
          description: "We connect PoC design, literature review, and publication readiness to business progress.",
        },
        {
          label: "AI",
          title: "Medical AI and quality governance",
          description: "We define review rules, source control, and supervision workflows before scale creates risk.",
        },
        {
          label: "Content",
          title: "YouTube, ads, and content systems",
          description: "We align medical accuracy with content that actually drives watch time, reads, and conversion.",
        },
      ],
      primaryCta: "Request a company consultation",
      secondaryCta: "View pricing",
      note: "For companies only / No patient consultations / Transparent pricing and scope",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Compare scope, meeting cadence, and deliverables before the first call.",
      description:
        "We disclose the standard service bands so companies can judge fit by scope and depth rather than vague package names.",
      labels: ["Entry", "Advisory", "Growth", "Strategic"],
    },
    finalCta: {
      eyebrow: "Contact",
      title: "Clarify priorities across business, research, AI, and content execution.",
      description:
        "We support femtech, healthcare SaaS, medical media, and globally minded projects with clear scope and next-step recommendations.",
      primaryCta: "Request a company consultation",
      secondaryCta: "Read insights",
      proof: ["Company-only support", "Transparent pricing", "Three-physician team"],
    },
  },
};
