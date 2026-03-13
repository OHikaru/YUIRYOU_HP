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
  issues: {
    eyebrow: string;
    title: string;
    description: string;
  };
  supportAreas: {
    eyebrow: string;
    title: string;
    description: string;
    linkLabel: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    columnLabels: string[];
    footnote: string;
  };
  fit: {
    eyebrow: string;
    title: string;
    description: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
    researchmapLabel: string;
    detailLabel: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    labels: string[];
    includesLabel: string;
    guardrails: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
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
    issues: {
      eyebrow: "Issues",
      title: "こんな課題はありませんか",
      description: "営業資料、研究設計、AI運用、情報発信のどこが詰まっているかを、医療の視点から整理します。",
    },
    supportAreas: {
      eyebrow: "Support Areas",
      title: "5つの支援領域",
      description: "単発の監修で終わらせず、研究、AI、発信までひとつの体制で支援します。",
      linkLabel: "詳しく見る",
    },
    comparison: {
      eyebrow: "Why YUIRYOU",
      title: "一般的な医師監修や制作会社との違い",
      description: "医療の正確性だけでなく、研究設計、英語資料、AI運用、情報発信まで一体で支援できる点が違いです。",
      columnLabels: ["YUIRYOU", "一般的な医師監修", "一般的な制作会社 / 代理店"],
      footnote: "比較すべきなのは監修の有無ではなく、医療と事業をつなぐ設計力と継続関与の深さです。",
    },
    fit: {
      eyebrow: "Best Fit",
      title: "このような企業に向いています",
      description: "医療の信頼性を保ちながら、営業、研究、発信を前に進めたい企業に向いています。",
    },
    process: {
      eyebrow: "Support Journey",
      title: "支援イメージ",
      description: "診断、設計、伴走の3段階で、課題の整理から実行までを一貫して進めます。",
    },
    timeline: {
      eyebrow: "30 / 60 / 90 Days",
      title: "最初の90日の進め方",
      description: "現状把握、改善実装、次四半期の設計までを、優先順位に沿って整理します。",
    },
    team: {
      eyebrow: "Team",
      title: "3名の医師が、それぞれの専門から実務を支えます。",
      description: "研究、AI、発信の役割を分担しながら、ひとつの案件に横断的に関わる体制です。",
      researchmapLabel: "researchmapを見る",
      detailLabel: "チーム紹介を見る",
    },
    pricing: {
      eyebrow: "料金",
      title: "月額帯、会議頻度、成果物の目安を先に比較できます。",
      description:
        "検討段階で判断しやすいように、会議頻度、レビュー本数、成果物の目安を標準プランとして明示しています。課題の大きさと関与範囲に応じて選べます。",
      labels: ["入口設計", "定例壁打ち", "施策伴走", "経営伴走"],
      includesLabel: "主な内容",
      guardrails: [
        "法人向け支援です。",
        "患者個人の相談は対象外です。",
        "法務・薬機法・医療広告の最終判断は、必要に応じて専門家連携で行います。",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "よくあるご質問",
    },
    finalCta: {
      eyebrow: "Contact",
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
    issues: {
      eyebrow: "Issues",
      title: "Are these the bottlenecks you are facing?",
      description: "We clarify whether the slowdown is coming from materials, research design, AI quality, or communication execution.",
    },
    supportAreas: {
      eyebrow: "Support Areas",
      title: "Five support areas",
      description: "Not one-off supervision. A physician team that supports research, AI, and communication together.",
      linkLabel: "Learn more",
    },
    comparison: {
      eyebrow: "Why YUIRYOU",
      title: "How we differ from typical physician review or agencies",
      description: "We combine medical credibility with research planning, English review, AI governance, and communication design.",
      columnLabels: ["YUIRYOU", "Typical physician review", "Typical agency"],
      footnote: "The difference is not just review quality, but the ability to connect medical thinking to research and execution.",
    },
    fit: {
      eyebrow: "Best Fit",
      title: "Best-fit companies",
      description: "Best suited for teams that need medical credibility to move sales, research, and communication forward.",
    },
    process: {
      eyebrow: "Support Journey",
      title: "How support is structured",
      description: "We move from diagnosis to design and then into recurring execution support.",
    },
    timeline: {
      eyebrow: "30 / 60 / 90 Days",
      title: "What the first 90 days look like",
      description: "Clarify the current state, implement improvements, and define the next quarter with clear priorities.",
    },
    team: {
      eyebrow: "Team",
      title: "Three physicians, distinct execution roles, one consulting partner.",
      description: "We divide responsibilities across research, AI quality, and communication design so healthcare teams can move faster.",
      researchmapLabel: "View on researchmap",
      detailLabel: "View team details",
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Compare meeting cadence, review scope, and deliverables before the first call.",
      description:
        "We disclose the standard service bands so companies can judge fit by scope and depth rather than vague package names.",
      labels: ["Entry", "Advisory", "Growth", "Strategic"],
      includesLabel: "What is typically included",
      guardrails: [
        "Company-facing support only.",
        "No consultations for individual patients.",
        "Final legal and advertising judgments are handled with specialist collaboration when needed.",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions before engagement",
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