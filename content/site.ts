export const siteConfig = {
  brandName: "医療コンサルティングチーム",
  brandNameEn: "Medical Consulting Team",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yuiryou.vercel.app",
  defaultTitle: "医療監修で終わらせない。医師3名が事業・研究・発信まで伴走する法人向け医療コンサルティング",
  defaultDescription:
    "産婦人科医2名とリハビリ医1名の医師チームが、医療・臨床研究・RCT・英語・AI・YouTube・広告まで横断支援する法人向け医療コンサルティングサイト。",
  ogImage: "/opengraph-image",
  updatedAt: "2026-03-10",
  contactEmail: "contact@example.com",
  phoneLabel: "初回相談はお問い合わせフォームから受付",
  primaryCta: {
    label: "無料相談を申し込む",
    href: "/contact",
  },
  secondaryCta: {
    label: "診断パックの詳細を見る",
    href: "/#pricing",
  },
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  specialties: string[];
  researchHighlights: string[];
  supportThemes: string[];
  image: string;
  imageAlt: string;
};

export type ServiceDetail = {
  slug: string;
  path: string;
  navLabel: string;
  title: string;
  summary: string[];
  understandingPoints: string[];
  pains: string[];
  support: string[];
  deliverables: string[];
  idealClients: string[];
  process: string[];
  faq: FaqItem[];
  metadataTitle: string;
  metadataDescription: string;
};

export type ArticleDetail = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  authorId: string;
  summary: string;
  tldr: string[];
  learnings: string[];
  conclusion: string;
  background: string[];
  actions: string[];
  faq: FaqItem[];
};

export const trustChips = [
  "産婦人科医 × 2 / リハビリ医 × 1",
  "臨床研究・論文化",
  "RCT実務・英語対応",
  "AI活用支援",
  "YouTube / 広告知見",
  "法人向け",
];

export const issueCards = [
  "LPや営業資料に医療的な説得力が足りない",
  "研究 / RCT / 文献整理をどう組み立てるべきかわからない",
  "英語論文や海外向け資料の扱いに不安がある",
  "AIを使いたいが、医療情報の品質が担保できない",
  "YouTubeや広告を伸ばしたいが、医療表現が怖い",
  "医師監修だけでは足りず、事業の壁打ち相手がほしい",
];

export const supportAreas = [
  {
    title: "医療・科学アドバイザリー",
    href: "/services/medical-scientific-advisory",
    description:
      "LP、営業資料、事業仮説、社内説明資料を医療・科学の観点からレビューし、伝え方のズレと表現リスクを減らします。",
    icon: "/images/icons/icon-medical-advisory.svg",
  },
  {
    title: "臨床研究・RCT・論文化支援",
    href: "/services/clinical-research-rct",
    description:
      "観察研究、PoC、アンケート、RCT、論文化までを一気通貫で設計し、研究を事業の前進につなげます。",
    icon: "/images/icons/icon-clinical-research.svg",
  },
  {
    title: "医療AI・情報品質設計",
    href: "/services/medical-ai-global",
    description:
      "AI活用方針の整理から、医療情報品質の監修ルールづくり、レビュー運用までを設計します。",
    icon: "/images/icons/icon-medical-ai.svg",
  },
  {
    title: "英語 / 海外向け医療コミュニケーション",
    href: "/services/medical-ai-global",
    description:
      "英語文献レビュー、英語資料レビュー、海外向け説明の精度向上を支援します。",
    icon: "/images/icons/icon-global-english.svg",
  },
  {
    title: "YouTube・広告・オウンドメディア支援",
    href: "/services/youtube-content-ad",
    description:
      "医療の正確性と、再生・読了・CVにつながる発信設計を両立します。",
    icon: "/images/icons/icon-youtube-ad.svg",
  },
];

export const comparisonRows = [
  { label: "医師の複数関与", values: ["3名の専門チーム", "単独対応が多い", "医師は外部監修のみ"] },
  { label: "臨床研究 / RCT知見", values: ["研究設計から伴走", "限定的", "外部連携前提"] },
  { label: "英語資料対応", values: ["レビュー可能", "対応外が多い", "翻訳中心"] },
  { label: "AI活用設計", values: ["医療品質前提で支援", "対象外が多い", "一般的な運用提案"] },
  { label: "YouTube / 広告知見", values: ["医療表現と運用を両立", "対象外が多い", "医療表現に弱い"] },
  { label: "事業壁打ち", values: ["定例で実施", "都度相談中心", "事業理解が浅い"] },
  { label: "継続伴走", values: ["松竹梅で継続支援", "単発が中心", "制作期間に限定"] },
];

export const fitCategories = [
  {
    title: "フェムテック / 女性向けヘルスケア事業者",
    description:
      "産婦人科医2名の知見を活かし、事業設計、啓発コンテンツ、研究設計、医療監修を横断して支援します。",
  },
  {
    title: "ヘルスケアSaaS / 健康経営 / 福利厚生サービス企業",
    description:
      "営業資料やLPに医療的妥当性が必要な企業に、継続顧問として伴走します。",
  },
  {
    title: "ヘルスケアメディア / YouTube運営企業",
    description:
      "医療の正確性と再生・CVの両立が必要なメディア運営を、企画からレビューまで支援します。",
  },
  {
    title: "医療機器 / デジタルヘルス / 海外展開準備中スタートアップ",
    description:
      "研究、英語資料、海外向け説明、PoC設計が必要な重要局面をサポートします。",
  },
];

export const supportFlow = [
  { title: "診断", description: "現状整理、リスク棚卸し、優先テーマを決める入口フェーズ。" },
  { title: "設計", description: "訴求、研究、AI、英語、発信の設計をプロジェクトに合わせて組み立てるフェーズ。" },
  { title: "伴走", description: "定例・レビュー・成果物作成を通じて、社内実行まで前に進めるフェーズ。" },
];

export const timelinePhases = [
  { title: "0〜30日", description: "事業理解 / 資料棚卸し / 医療リスク洗い出し / 優先テーマ決定" },
  { title: "31〜60日", description: "メッセージ整理 / 文献レビュー / LPや営業資料の改善 / AIまたは発信設計" },
  { title: "61〜90日", description: "実運用への落とし込み / KPI確定 / 次の3か月の計画" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "obgyn-ai",
    name: "産婦人科医A",
    role: "産婦人科医 / 医療AI・情報品質担当",
    shortRole: "AI・情報品質",
    bio: "医療AI活用と医療情報品質の設計を担当。AIを使う前提でも、医療情報の正確性と運用ルールを崩さない体制づくりに強みがあります。",
    specialties: ["医療AI活用方針", "医療情報品質レビュー", "LP / 営業資料レビュー", "女性ヘルスケア領域"],
    researchHighlights: ["臨床研究経験をもとに論点整理を支援", "未確定実績は公開しない段階公開方針"],
    supportThemes: ["AI導入時の監修フロー", "医療表現リスク整理", "コンテンツ品質基準の策定"],
    image: "/images/team/team-obgyn-ai.svg",
    imageAlt: "産婦人科医Aのプロフィールイメージ",
  },
  {
    id: "obgyn-rct",
    name: "産婦人科医B",
    role: "産婦人科医 / 英語・RCT・研究実務担当",
    shortRole: "英語・RCT・研究実務",
    bio: "英語文献、RCT、研究実務に強みを持ち、観察研究から論文化までを事業文脈に接続する役割を担います。",
    specialties: ["英語論文レビュー", "RCT / PoC設計", "研究実務の伴走", "海外向け資料レビュー"],
    researchHighlights: ["臨床研究と論文化の経験を保有", "英語対応を前提にした事業説明を支援"],
    supportThemes: ["研究計画の壁打ち", "海外向け説明資料", "エビデンス整理"],
    image: "/images/team/team-obgyn-rct-english.svg",
    imageAlt: "産婦人科医Bのプロフィールイメージ",
  },
  {
    id: "rehab-media",
    name: "リハビリ医C",
    role: "リハビリテーション科医 / YouTube・広告・発信設計担当",
    shortRole: "YouTube・広告・発信設計",
    bio: "YouTuberマネジメントや広告運用に強く、医療の正確性を保ちながら、再生・読了・CVにつながる発信設計を支援します。",
    specialties: ["YouTube企画レビュー", "広告訴求設計", "オウンドメディア運用", "コンテンツ導線設計"],
    researchHighlights: ["医療コンテンツの監修観点を保有", "マーケティング実務との橋渡しが可能"],
    supportThemes: ["YouTube / 広告の表現整理", "発信計画の伴走", "メディアの改善提案"],
    image: "/images/team/team-rehab-youtube-ad.svg",
    imageAlt: "リハビリ医Cのプロフィールイメージ",
  },
];

export const pricingPlans = [
  {
    name: "診断パック",
    price: "30万円（税別） / 2週間",
    note: "優先施策3〜5本と3か月伴走提案書を納品",
    features: ["課題整理シート", "競合 / 訴求 / 医療リスク棚卸し", "優先施策の提案"],
  },
  {
    name: "梅",
    price: "月額60万円 + 初期20万円",
    note: "原則3か月契約",
    features: ["月2回定例", "月2本まで資料レビュー", "文献レビューまたは論点整理 月1テーマ"],
  },
  {
    name: "竹",
    price: "月額100万円 + 初期30万円",
    note: "原則3か月契約",
    features: ["月4回定例", "月5本までレビュー", "研究 / PoC / AIまたは発信設計 月1テーマ"],
  },
  {
    name: "松",
    price: "月額180万円 + 初期40万円",
    note: "原則3か月契約、推奨6か月",
    features: ["週次定例 + 月次経営レビュー", "複数医師の横断関与", "大型成果物を四半期ごとに1本"],
  },
];

export const globalFaq: FaqItem[] = [
  {
    question: "どんな企業が相談していますか？",
    answer:
      "フェムテック、ヘルスケアSaaS、福利厚生サービス、ヘルスケアメディア、YouTube運営企業、医療機器やデジタルヘルス領域のスタートアップなど、医療と事業の接点を持つ法人を主な対象としています。",
  },
  {
    question: "患者向けの医療相談はできますか？",
    answer:
      "できません。本サービスは法人向けの情報提供・レビュー・伴走支援を対象としており、患者個人への診療相談や個別の治療判断は行いません。",
  },
  {
    question: "薬機法や医療広告の最終確認までお願いできますか？",
    answer:
      "表現リスクの整理やレビューは支援しますが、法務・薬機法・医療広告の最終判断は、必要に応じて専門家と連携して行う前提です。",
  },
  {
    question: "記事監修だけでも依頼できますか？",
    answer:
      "単発監修も相談可能ですが、主力は事業・研究・発信まで含む伴走支援です。まずは診断パックや無料相談で最適な進め方を整理することを推奨します。",
  },
  {
    question: "英語資料や海外向け資料にも対応できますか？",
    answer:
      "対応可能です。英語文献レビュー、英語資料の表現確認、海外向けの医療コミュニケーション整理まで支援します。",
  },
  {
    question: "どのプランを選べばよいかわかりません。",
    answer:
      "現状の課題が散らばっている場合は診断パック、定例で壁打ちしたい場合は梅、具体施策まで一緒に進めたい場合は竹、重要局面で横断支援が必要な場合は松を目安にしてください。",
  },
];

export const services: ServiceDetail[] = [
  {
    slug: "medical-scientific-advisory",
    path: "/services/medical-scientific-advisory",
    navLabel: "医療・科学アドバイザリー",
    title: "医療・科学アドバイザリー",
    summary: [
      "LP、営業資料、事業設計を、医療・科学の観点からレビューします。",
      "医師3名体制で、医療の正しさと事業の前進を両立させます。",
      "監修だけで終わらない、法人向けの継続支援です。",
    ],
    understandingPoints: [
      "このサービスが向いている企業の特徴",
      "レビュー対象と成果物の範囲",
      "定例・壁打ち・資料改善の進め方",
    ],
    pains: [
      "LPや営業資料の医療的な説得力を上げたい",
      "事業説明でどこまで言ってよいか判断に迷う",
      "社内に医療責任者がいないため壁打ち相手が欲しい",
    ],
    support: [
      "LP / 提案書 / 営業資料 / 記事のレビュー",
      "医療・科学観点からの論点整理",
      "定例での壁打ちと優先順位整理",
      "表現リスクの初期整理",
    ],
    deliverables: [
      "レビューコメント付き資料",
      "論点整理メモ",
      "改善優先順位リスト",
      "月次の示唆メモ",
    ],
    idealClients: [
      "医療接点のあるLPや営業資料を改善したい法人",
      "社内で事業説明を通しやすくしたいスタートアップ",
      "継続的に医師へ相談できる体制を作りたい企業",
    ],
    process: [
      "無料相談または診断パックで課題を整理",
      "対象資料と優先テーマを設定",
      "定例レビューと改善提案を実施",
    ],
    faq: globalFaq,
    metadataTitle: "医療・科学アドバイザリー | 法人向け医療コンサルティング",
    metadataDescription:
      "LP、営業資料、事業設計を、医療・科学の観点からレビュー。医師3名体制で、医療の正しさと事業の前進を両立する法人向け支援を提供します。",
  },
  {
    slug: "clinical-research-rct",
    path: "/services/clinical-research-rct",
    navLabel: "臨床研究・RCT・論文化支援",
    title: "臨床研究・RCT・論文化支援",
    summary: [
      "観察研究、PoC、アンケート、RCT、論文化までを支援します。",
      "研究を“絵に描いた餅”で終わらせず、事業文脈につなげます。",
      "医療・研究・事業をつなぐ伴走型の支援です。",
    ],
    understandingPoints: [
      "研究設計で支援できる範囲",
      "RCTやPoCを事業に接続する考え方",
      "論文化に向けた進め方の整理",
    ],
    pains: [
      "研究をやりたいが何から始めるべきかわからない",
      "PoCやアンケートの設計が甘い気がする",
      "研究結果を営業や資金調達に活かしたい",
    ],
    support: [
      "研究設計の壁打ち",
      "PoC / アンケート / 観察研究 / RCTの設計支援",
      "英語文献レビューと論点整理",
      "論文化に向けた進行支援",
    ],
    deliverables: [
      "研究計画のたたき台",
      "文献レビュー資料",
      "研究目的・評価項目整理シート",
      "論文化に向けたTODO一覧",
    ],
    idealClients: [
      "研究やPoCを営業・資金調達に活かしたい企業",
      "研究体制が社内に十分でないスタートアップ",
      "英語論文まで視野に入れたいヘルスケア事業者",
    ],
    process: [
      "事業目的と研究目的のすり合わせ",
      "設計レビューと実行優先順位の策定",
      "実施後の解釈・資料化・論文化支援",
    ],
    faq: globalFaq,
    metadataTitle: "臨床研究・RCT・論文化支援 | 医師チームによる事業伴走",
    metadataDescription:
      "観察研究、PoC、RCT、論文化まで、企業の研究設計を支援。医療・研究・事業をつなぐ伴走型のコンサルティングを提供します。",
  },
  {
    slug: "medical-ai-global",
    path: "/services/medical-ai-global",
    navLabel: "医療AI・英語 / 海外向け支援",
    title: "医療AI・英語 / 海外向けコミュニケーション支援",
    summary: [
      "AI活用の設計、医療情報品質の管理、英語文献整理、英語資料レビューに対応します。",
      "AIとグローバル対応を、医療品質を前提に設計します。",
      "医師チームが、使える体制と説明責任の両方を支援します。",
    ],
    understandingPoints: [
      "医療AI活用で先に決めるべきガードレール",
      "英語資料と英語文献で支援できる範囲",
      "海外向け説明の精度を上げる方法",
    ],
    pains: [
      "AIを使いたいが品質管理に不安がある",
      "英語資料を自信を持って外部に出せない",
      "海外向けの説明で医療表現に迷いがある",
    ],
    support: [
      "医療AI活用方針と運用ルールの整理",
      "医療情報品質レビューの設計",
      "英語文献レビューと要点整理",
      "英語資料 / 海外向け説明資料のレビュー",
    ],
    deliverables: [
      "AI活用ガイドライン案",
      "品質レビュー観点表",
      "英語資料レビューコメント",
      "海外向け説明論点メモ",
    ],
    idealClients: [
      "AIを組み込むヘルスケアプロダクト企業",
      "英語での事業説明が必要なスタートアップ",
      "海外展開や英語資料整備を進めたい法人",
    ],
    process: [
      "利用目的とリスクの整理",
      "品質基準とレビュー体制の設計",
      "運用定着と資料改善の伴走",
    ],
    faq: globalFaq,
    metadataTitle: "医療AI・英語 / 海外向け支援 | 情報品質とグローバル対応を両立",
    metadataDescription:
      "医療AI活用の設計、医療情報の品質管理、英語文献整理、英語資料レビューに対応。医師チームがAIとグローバル対応を支援します。",
  },
  {
    slug: "youtube-content-ad",
    path: "/services/youtube-content-ad",
    navLabel: "YouTube・広告・オウンドメディア支援",
    title: "YouTube・広告・オウンドメディア支援",
    summary: [
      "医療の正確性と、再生・読了・CVの両立を支援します。",
      "企画、構成、監修、導線設計まで横断して改善します。",
      "単なる医療監修ではなく、発信設計そのものを前に進めます。",
    ],
    understandingPoints: [
      "YouTube・広告・オウンドメディアでの支援範囲",
      "医療表現と成果指標を両立させる考え方",
      "企画からレビューまでの流れ",
    ],
    pains: [
      "YouTubeや広告を伸ばしたいが表現が怖い",
      "コンテンツが医療的に浅く見えてしまう",
      "発信がCVにどうつながるか整理できていない",
    ],
    support: [
      "企画レビューとテーマ設計",
      "広告訴求・構成・導線の整理",
      "医療表現リスクの初期レビュー",
      "オウンドメディア改善提案",
    ],
    deliverables: [
      "企画レビューシート",
      "表現リスク観点メモ",
      "導線改善の提案資料",
      "発信計画の優先順位表",
    ],
    idealClients: [
      "医療コンテンツで集客したい企業",
      "YouTubeや広告を改善したいメディア運営会社",
      "医療の正確性と成果の両立が必要な事業者",
    ],
    process: [
      "現状コンテンツの棚卸し",
      "重点チャネルとテーマの設計",
      "レビューと改善サイクルの伴走",
    ],
    faq: globalFaq,
    metadataTitle: "YouTube・広告・オウンドメディア支援 | 医療の正確性と集客を両立",
    metadataDescription:
      "医療監修だけでなく、YouTube企画、広告訴求、オウンドメディア設計まで支援。医療の正確性と集客の両立を目指す企業向けサービスです。",
  },
];

export const articles: ArticleDetail[] = [
  {
    slug: "medical-lp-checklist",
    title: "医療系LPで最初に確認すべき10のチェックポイント",
    category: "LP改善",
    publishedAt: "2026-03-10",
    authorId: "obgyn-ai",
    summary: "医療接点のあるLPで、信頼・表現・CV導線を同時に確認するための基本チェックリスト。",
    tldr: ["医療情報の正確性", "法人向け導線", "CTAと価格の透明性"],
    learnings: ["最低限見るべき箇所", "事故を防ぐ観点", "営業で使えるLPにする考え方"],
    conclusion: "最初に見るべきは、見た目よりも“誰向けか・何を提供するか・どこまで言うか”の3点です。",
    background: ["医療接点のあるLPは、一般的なB2Bサイトよりも説明責任が重い領域です。", "そのため、デザインだけ整えても、信頼とCVは両立しません。"],
    actions: ["Heroで法人向けを明示する", "価格感を隠さない", "FAQでよくある誤解を先回りして解消する"],
    faq: globalFaq.slice(0, 2),
  },
  {
    slug: "rct-for-startups",
    title: "スタートアップがRCTを検討するときに先に整理すべきこと",
    category: "臨床研究",
    publishedAt: "2026-03-10",
    authorId: "obgyn-rct",
    summary: "RCTありきで考える前に、事業目的と研究目的を分けて整理するための考え方。",
    tldr: ["目的の切り分け", "評価項目", "実行可能性"],
    learnings: ["PoCとRCTの違い", "最初の論点整理", "社内合意の作り方"],
    conclusion: "RCTは手段であり、先に事業上の問いと研究上の問いを分けることが重要です。",
    background: ["スタートアップでは、研究の必要性は感じつつも、何を証明したいのかが曖昧なまま進みがちです。"],
    actions: ["何を意思決定したいのか書き出す", "最小限のPoCで足りるかを検討する", "社外説明に必要な根拠水準を定義する"],
    faq: globalFaq.slice(2, 4),
  },
  {
    slug: "medical-ai-governance",
    title: "医療AI活用で先に作るべき品質ガードレール",
    category: "医療AI",
    publishedAt: "2026-03-10",
    authorId: "obgyn-ai",
    summary: "AI活用の前に決めるべき監修ルール、レビュー観点、責任分界の設計ポイント。",
    tldr: ["品質基準", "レビュー運用", "責任分界"],
    learnings: ["危ない導入パターン", "医療情報品質の守り方", "現場に落ちる運用設計"],
    conclusion: "AI導入の成否は、モデル選定より先にレビュー体制を定義できるかで決まります。",
    background: ["医療AIの議論では精度だけに注目しがちですが、運用フェーズでの品質管理が抜けると事故につながります。"],
    actions: ["用途を分類する", "レビュー責任者を決める", "公開前確認の基準を文章化する"],
    faq: globalFaq.slice(0, 3),
  },
  {
    slug: "english-medical-slides",
    title: "英語の医療ピッチ資料で崩しやすいポイント",
    category: "英語対応",
    publishedAt: "2026-03-10",
    authorId: "obgyn-rct",
    summary: "翻訳だけでは不十分な、英語の医療資料で起こりやすいズレを整理します。",
    tldr: ["翻訳と説明は別", "根拠の置き方", "相手国の前提差"],
    learnings: ["英語資料の落とし穴", "直訳で崩れる箇所", "レビューの進め方"],
    conclusion: "英語資料は、言葉を置き換えるだけでなく、相手が読む順番に合わせて再構成する必要があります。",
    background: ["海外投資家や海外パートナー向け資料では、日本語資料の単純翻訳では意図が伝わらないことがあります。"],
    actions: ["主張と根拠を分ける", "専門用語の定義を先に置く", "英語文献との整合性を確認する"],
    faq: globalFaq.slice(4, 6),
  },
  {
    slug: "youtube-medical-editorial",
    title: "医療YouTube運営で企画会議に入れるべき観点",
    category: "YouTube",
    publishedAt: "2026-03-10",
    authorId: "rehab-media",
    summary: "再生数だけでなく、医療表現の安全性と導線設計を両立する企画会議の型。",
    tldr: ["企画意図", "表現リスク", "導線設計"],
    learnings: ["会議で見るべき観点", "監修と運用の接続", "CVとのつなぎ方"],
    conclusion: "医療YouTubeでは、企画時点で“誰に何を誤解なく伝えるか”を決めておく必要があります。",
    background: ["医療系動画は、企画初期で表現の枠組みを決めないと、撮影後に大きな手戻りが発生します。"],
    actions: ["ターゲットを一文で定義する", "避ける表現を先に共有する", "動画後の導線を決める"],
    faq: globalFaq.slice(1, 4),
  },
  {
    slug: "medical-ad-copy-review",
    title: "医療広告コピーをレビューするときの順番",
    category: "広告",
    publishedAt: "2026-03-10",
    authorId: "rehab-media",
    summary: "訴求力と安全性を両立するために、広告文をどの順で見るべきかを整理します。",
    tldr: ["主張の強さ", "根拠との距離", "誤解の余地"],
    learnings: ["レビューの順番", "強い言葉の扱い方", "差し戻しを減らす方法"],
    conclusion: "広告レビューでは、まず主張の強さを見て、その後に根拠と誤解可能性を確認するのが効率的です。",
    background: ["広告コピーは短いほど強い表現になりやすく、医療接点があるほど誤解リスクが上がります。"],
    actions: ["断定表現を洗い出す", "根拠の種類を確認する", "ランディング先との整合性を点検する"],
    faq: globalFaq.slice(2, 5),
  },
  {
    slug: "women-health-content-strategy",
    title: "女性向けヘルスケア事業で信頼されるコンテンツ戦略",
    category: "フェムテック",
    publishedAt: "2026-03-10",
    authorId: "obgyn-ai",
    summary: "産婦人科医の知見を活かし、啓発と事業成果を両立するコンテンツ設計の考え方。",
    tldr: ["共感だけで終わらせない", "専門性の見せ方", "導線設計"],
    learnings: ["女性向け事業の注意点", "情報設計の軸", "よくある失敗"],
    conclusion: "共感だけを前面に出すより、専門性と生活者理解を両立した方が長期的な信頼につながります。",
    background: ["女性向けヘルスケア事業では、感情訴求が強くなりすぎると情報の精度が弱く見えることがあります。"],
    actions: ["医師の役割を明示する", "FAQで不安を受け止める", "営業資料と記事の主張を揃える"],
    faq: globalFaq.slice(0, 2),
  },
  {
    slug: "healthcare-saas-sales-deck",
    title: "ヘルスケアSaaSの営業資料で医療的説得力を出す方法",
    category: "営業資料",
    publishedAt: "2026-03-10",
    authorId: "obgyn-ai",
    summary: "営業資料に必要な医療観点を整理し、信頼感を上げる構成を解説します。",
    tldr: ["主張の順番", "根拠の見せ方", "監修だけで終わらせない"],
    learnings: ["営業資料の改善ポイント", "説明責任の作り方", "レビュー運用"],
    conclusion: "営業資料では、医療的妥当性と事業価値を別スライドで整理すると伝わりやすくなります。",
    background: ["ヘルスケアSaaSは、プロダクト説明だけではなく、医療接点の説明責任が成約率に影響します。"],
    actions: ["医療的根拠を整理する", "導入意義を経営視点で言い換える", "レビュー体制を整える"],
    faq: globalFaq.slice(0, 3),
  },
  {
    slug: "poc-to-paper",
    title: "PoCを論文化につなげるための実務メモ",
    category: "論文化",
    publishedAt: "2026-03-10",
    authorId: "obgyn-rct",
    summary: "PoC止まりにしないための記録・評価・資料化のポイントをまとめます。",
    tldr: ["最初の記録設計", "評価項目", "論文化を見据えた運用"],
    learnings: ["PoCで残すべき情報", "論文化の下準備", "事業資料との接続"],
    conclusion: "PoCを論文化したいなら、実施前から“何を記録するか”を決めておく必要があります。",
    background: ["PoCは実施後に振り返ると、記録不足で使えるデータが少ないことがよくあります。"],
    actions: ["目的と評価項目を先に定義する", "保管ルールを決める", "中間レビューを入れる"],
    faq: globalFaq.slice(2, 4),
  },
  {
    slug: "medical-pricing-transparency",
    title: "高単価の医療コンサルで価格公開が有効な理由",
    category: "価格設計",
    publishedAt: "2026-03-10",
    authorId: "rehab-media",
    summary: "価格を隠さずに出すことで、商談の質を上げる考え方を整理します。",
    tldr: ["価格公開の意味", "商談の前提合わせ", "失注の質改善"],
    learnings: ["価格公開のメリット", "高単価サービスの見せ方", "CVの質の作り方"],
    conclusion: "価格公開はCV数を減らす可能性がありますが、商談の解像度を上げる点で有効です。",
    background: ["高単価支援では、価格を伏せたまま問い合わせを増やしても、初回商談でミスマッチが起きやすくなります。"],
    actions: ["価格と成果物をセットで見せる", "対象外を明記する", "プラン差分を言語化する"],
    faq: globalFaq.slice(3, 6),
  },
  {
    slug: "medical-seo-aieo-basics",
    title: "医療領域のSEOとAIEOで先に整えるべき基礎",
    category: "SEO/AIEO",
    publishedAt: "2026-03-10",
    authorId: "obgyn-ai",
    summary: "AI検索時代でも変わらない、可視テキスト・構造・著者情報の重要性を解説します。",
    tldr: ["通常SEOの徹底", "著者情報", "結論先出し"],
    learnings: ["AI専用裏技に頼らない理由", "基本の整え方", "新規サイトの期待値管理"],
    conclusion: "AI検索を意識するほど、通常のSEOと説明責任の土台を丁寧に整える必要があります。",
    background: ["医療領域では、検索順位だけでなく、AI要約時に誤解されにくい構造が重要です。"],
    actions: ["3行要約を置く", "FAQをvisible textで載せる", "著者・監修者ページを整備する"],
    faq: globalFaq.slice(0, 2),
  },
  {
    slug: "medical-content-ops",
    title: "医療コンテンツ運用でレビューを詰まらせない体制設計",
    category: "運用設計",
    publishedAt: "2026-03-10",
    authorId: "rehab-media",
    summary: "制作・監修・公開のあいだでボトルネックを減らすための運用フローを解説します。",
    tldr: ["役割分担", "レビュー基準", "差し戻し削減"],
    learnings: ["運用で詰まる箇所", "決めておくべき基準", "継続運用の現実解"],
    conclusion: "レビューの速度は、担当者の頑張りよりも、先に決めた基準の質で決まります。",
    background: ["医療コンテンツでは、毎回ゼロから議論すると、レビュー待ちが積み上がりやすくなります。"],
    actions: ["レビュー観点を文書化する", "差し戻し理由を分類する", "月次で改善テーマを更新する"],
    faq: globalFaq.slice(1, 3),
  },
  {
    slug: "overseas-healthcare-communication",
    title: "海外向けヘルスケア説明で誤解を減らす表現整理",
    category: "海外展開",
    publishedAt: "2026-03-10",
    authorId: "obgyn-rct",
    summary: "英語だけでなく、海外向け説明の構造そのものを整えるための視点。",
    tldr: ["背景説明", "根拠の順序", "相手の前提差"],
    learnings: ["海外向け説明の難しさ", "英語資料との違い", "説明責任の整理"],
    conclusion: "海外向け説明は、単なる翻訳ではなく、相手が前提としていない文脈を補う設計が必要です。",
    background: ["国内では通じる背景説明も、海外では前提知識が共有されていない場合があります。"],
    actions: ["前提条件を文章化する", "根拠ソースを整理する", "FAQを先回りで置く"],
    faq: globalFaq.slice(4, 6),
  },
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));
export const articleMap = new Map(articles.map((article) => [article.slug, article]));
