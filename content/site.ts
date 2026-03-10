export const siteConfig = {
  brandName: "YUIRYOU株式会社",
  brandNameEn: "YUIRYOU Inc.",
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
  sortOrder: number;
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  specialties: string[];
  researchHighlights: string[];
  supportThemes: string[];
  selectedPublications: string[];
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

export type ArticleSource = {
  label: string;
  href: string;
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
  tags: string[];
  sources: ArticleSource[];
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
  { label: "継続伴走", values: ["診断 + 3段階プランで継続支援", "単発が中心", "制作期間に限定"] },
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
    id: "obgyn-rct",
    sortOrder: 1,
    name: "三苫 智裕",
    role: "代表取締役社長 / 産婦人科医 / 英語・RCT・研究実務担当",
    shortRole: "代表取締役社長 / 英語・RCT・研究実務",
    bio: "YUIRYOU株式会社 代表取締役社長。産婦人科領域の臨床と研究実務を背景に、英語論文レビュー、PoC・RCT設計、論文化支援を担当します。researchmap掲載の多施設研究や英語論文の実績をもとに、企業の研究計画を事業・営業・海外説明に接続する役割を担います。大学院レベルの研究設計と論文化プロジェクトを見据えた伴走支援に強みがあります。",
    specialties: ["英語論文レビュー", "RCT / PoC設計", "研究計画・論文化支援", "海外向け資料レビュー"],
    researchHighlights: [
      "『Decline in and recovery of fertility rates after COVID-19-related state of emergency in Japan.』など、社会実装と人口動態をつなぐ研究に関与",
      "『Determinants of residual myometrial thickness after cesarean delivery: Comparative analysis of barbed versus conventional sutures-A sub-analysis from the SPIRAL trial』など、帝王切開関連の多施設研究・RCT文脈に携わる",
      "『Objective assessment of cesarean section suturing techniques using a uterine simulator.』など、教育・手技評価に関する研究を公開"
    ],
    supportThemes: ["研究計画の壁打ち", "英語資料と海外向け説明", "PoCから論文化までの進行設計"],
    selectedPublications: [
      "Decline in and recovery of fertility rates after COVID-19-related state of emergency in Japan. (BMJ Open, 2024)",
      "Determinants of residual myometrial thickness after cesarean delivery: Comparative analysis of barbed versus conventional sutures-A sub-analysis from the SPIRAL trial",
      "Objective assessment of cesarean section suturing techniques using a uterine simulator."
    ],
    image: "/images/team/team-obgyn-rct-english.svg",
    imageAlt: "三苫 智裕のプロフィールイメージ",
  },
  {
    id: "obgyn-ai",
    sortOrder: 2,
    name: "大羽 輝",
    role: "産婦人科医 / 医療AI・情報品質担当",
    shortRole: "AI・情報品質",
    bio: "産婦人科領域の臨床と研究開発支援を背景に、医療AI・情報品質設計を担当します。東北大学大学院医学系研究科の学術研究員、岡山大学病院 新医療研究開発センターの主任コーディネーター（特定助教）としての経験を踏まえ、AI活用ルール、研究データの読み解き、医療コンテンツの品質管理を企業実務に落とし込みます。大学院・研究教育の現場感覚を活かした支援が可能です。",
    specialties: ["医療AI活用方針", "医療情報品質レビュー", "データ解釈と論点整理", "女性ヘルスケア領域"],
    researchHighlights: [
      "『Voice analysis and deep learning for detecting mental disorders in pregnant women: a cross-sectional study.』など、AI / deep learning と周産期メンタルヘルスの研究実績",
      "『Partner relationships, hopelessness, and health status strongly predict maternal well-being: an approach using light gradient boosting machine』など、機械学習を用いた母体ウェルビーイング解析を実施",
      "『Multicenter Remote-Access Simulation of Vaginal Delivery for High-Flexibility Medical Education during the Coronavirus Pandemic.』など、医療教育・シミュレーション研究を公表"
    ],
    supportThemes: ["AI導入時の監修フロー", "医療表現リスク整理", "コンテンツ品質基準の策定"],
    selectedPublications: [
      "Voice analysis and deep learning for detecting mental disorders in pregnant women: a cross-sectional study.",
      "Partner relationships, hopelessness, and health status strongly predict maternal well-being: an approach using light gradient boosting machine",
      "Multicenter Remote-Access Simulation of Vaginal Delivery for High-Flexibility Medical Education during the Coronavirus Pandemic."
    ],
    image: "/images/team/team-obgyn-ai.svg",
    imageAlt: "大羽 輝のプロフィールイメージ",
  },
  {
    id: "rehab-media",
    sortOrder: 3,
    name: "豊田 康介",
    role: "リハビリテーション科医 / YouTube・広告・発信設計担当",
    shortRole: "YouTube・広告・発信設計",
    bio: "医療コンテンツの発信設計とマーケティング実務をつなぐ役割を担当します。YouTube運用、広告訴求、オウンドメディア改善までを見渡し、医療の正確性を保ちながら、再生・読了・CVにつながる導線設計を支援します。",
    specialties: ["YouTube企画レビュー", "広告訴求設計", "オウンドメディア運用", "コンテンツ導線設計"],
    researchHighlights: ["医療コンテンツの監修観点を保有", "マーケティング実務との橋渡しが可能"],
    supportThemes: ["YouTube / 広告の表現整理", "発信計画の伴走", "メディアの改善提案"],
    selectedPublications: [],
    image: "/images/team/team-rehab-youtube-ad.svg",
    imageAlt: "豊田 康介のプロフィールイメージ",
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
    name: "アドバイザリープラン",
    price: "月額60万円 + 初期20万円",
    note: "原則3か月契約",
    features: ["月2回定例", "月2本まで資料レビュー", "文献レビューまたは論点整理 月1テーマ"],
  },
  {
    name: "グロースパートナープラン",
    price: "月額100万円 + 初期30万円",
    note: "原則3か月契約",
    features: ["月4回定例", "月5本までレビュー", "研究 / PoC / AIまたは発信設計 月1テーマ"],
  },
  {
    name: "ストラテジックパートナープラン",
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
      "現状の課題が散らばっている場合は診断パック、定例で壁打ちしたい場合はアドバイザリープラン、施策実行まで一緒に進めたい場合はグロースパートナープラン、重要局面で経営レベルの伴走が必要な場合はストラテジックパートナープランを目安にしてください。",
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
    slug: "medical-ai-governance",
    title: "医療AI活用で先に作るべき品質ガードレール",
    category: "医療AI",
    publishedAt: "2026-03-10",
    authorId: "obgyn-ai",
    summary: "2025年のWHOとFDAの更新を踏まえると、医療AIは『精度が高いか』より先に『誰が、どの用途で、どの基準で監督するか』を決める必要があります。企業導入で最低限そろえるべき品質ガードレールを整理します。",
    tldr: ["用途分類を先に決める", "レビュー責任者と停止条件を明文化する", "モデル更新と表示内容の変更管理を運用に入れる"],
    learnings: ["2025年時点のWHOとFDAが重視している論点", "医療AIを社内運用に落とすための最小ルール", "営業・広報・プロダクトで共通化すべき監督項目"],
    conclusion: "医療AIの品質管理は、モデル評価だけでは足りません。WHOは人間による監督、透明性、リスクベース運用を重視し、FDAもライフサイクル全体での変更管理と性能維持を求めています。企業実務では『用途』『責任者』『停止条件』を最初に定義するのが最短です。 [1][2][3]",
    background: [
      "WHOは2025年に公表した health 向け large multi-modal models のガイダンスで、医療AIの導入を単なる技術導入ではなく、倫理・安全・説明責任を含む統治課題として扱っています。とくに、高リスク用途では人間による監督、透明性、導入後モニタリングを一体で設計する必要があると整理しています。 [1]",
      "FDAも2025年の AI-enabled device software functions に関するドラフトガイダンスで、AI機能は開発時点だけでなく、変更・学習・保守を含むライフサイクル管理で見るべきだと示しています。医療接点のある企業が生成AIを対外説明や要約に使う場合も、この発想を社内ルールへ移植した方が事故を防ぎやすいです。 [2]",
      "さらにFDAは Predetermined Change Control Plan に関する最終ガイダンスで、変更を予定しているなら、何をどう変えて、どの検証を通して市場投入するかを先に定義すべきだと明確化しています。これは医療AIの社内運用でも『プロンプト変更』『RAGデータ差し替え』『表示UI改修』を管理対象に含めるべきだという示唆になります。 [3]"
    ],
    actions: [
      "用途を『社内補助』『対外公開下書き』『医療判断補助に近い高リスク用途』に分け、用途ごとに許可範囲を決める。 [1]",
      "レビュー責任者、レビュー観点、公開停止条件を1枚の運用基準にまとめる。最低限、誤情報、過剰表現、出典欠落、個人情報混入の停止条件は明文化する。 [1][2]",
      "モデルやプロンプトを更新するときは、変更内容、期待する改善、再評価手順、ロールバック条件を記録する。これはFDAの変更管理思想を社内運用へ移した形です。 [2][3]",
      "営業資料やLPにAI活用を記載する場合は、『何を自動化し、何を人が最終確認するか』を説明文として残す。透明性の欠如は信頼毀損につながります。 [1]"
    ],
    tags: ["医療AI", "ガバナンス", "品質管理"],
    sources: [
      { label: "[1] WHO: Ethics and governance of large multi-modal models for health (2025)", href: "https://www.who.int/publications/i/item/9789240103078" },
      { label: "[2] FDA: Considerations for Artificial Intelligence-Enabled Device Software Functions (2025 draft guidance)", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-artificial-intelligence-enabled-device-software-functions" },
      { label: "[3] FDA: Predetermined Change Control Plan for AI-Enabled Device Software Functions", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence-enabled" }
    ],
    faq: [
      {
        question: "医療AIはまずPoCから始めれば十分ですか？",
        answer: "PoC自体は有効ですが、公開用途に近いPoCなら、開始前に用途区分、レビュー責任者、停止条件だけは定めておくべきです。あとから統制を足す方がコストが高くなります。"
      },
      {
        question: "生成AIを記事要約やFAQ作成に使う場合も同じ考え方ですか？",
        answer: "同じです。診断補助ほど高リスクではなくても、対外公開物である以上、誤情報、誇張、出典欠落、個人情報混入の管理は必要です。"
      }
    ],
  },
  {
    slug: "women-health-content-strategy",
    title: "女性向けヘルスケア事業で信頼されるコンテンツ戦略",
    category: "女性ヘルスケア",
    publishedAt: "2026-03-10",
    authorId: "obgyn-ai",
    summary: "女性向けヘルスケアでは、共感訴求だけでも専門情報だけでも信頼は積み上がりません。WHO、米国政府のヘルスリテラシー指針、MedlinePlusの評価基準を踏まえ、企業が信頼される情報設計を整理します。",
    tldr: ["専門性と平易さを両立する", "情報の出典と更新責任を見える化する", "不安を煽る訴求より判断を助ける構造を優先する"],
    learnings: ["女性向けヘルスケアで信頼を落としやすい表現", "ヘルスリテラシーに配慮した記事・LP設計", "ブランド好感と説明責任を両立する編集方針"],
    conclusion: "信頼される女性向けヘルスケアコンテンツは、やさしい言葉で書かれているだけでは不十分です。WHOと米国政府系の指針が共通して示すのは、『理解しやすさ』『出典の明示』『更新責任の可視化』を同時に満たすことです。 [1][2][3]",
    background: [
      "WHOの health literacy 政策資料は、人が理解できる情報でなければ適切な判断や行動につながりにくいと整理しています。女性向けヘルスケアではとくに、生活文脈に近いテーマが多く、専門用語を残したまま感情訴求を強めると、不安だけが増幅されやすくなります。 [1]",
      "米国保健福祉省の Health Literacy Online は、オンライン健康情報では、最初に結論を示すこと、1画面ごとに目的を絞ること、ユーザーが次に何をすべきかを明確にすることを勧めています。これはLP、記事、FAQ、資料のどれにもそのまま使える原則です。 [2]",
      "MedlinePlus は、健康情報を評価するときの基本として『誰が書いたか』『根拠は何か』『更新日はいつか』『販売目的が強すぎないか』を確認するよう案内しています。企業サイト側から見ると、著者情報、監修者、出典、更新日、広告目的との距離感を明示するほど信頼を得やすいということです。 [3]",
      "ACOGも2024年に birth control misinformation への声明を出し、正確な情報にアクセスできないこと自体が患者の選択をゆがめると指摘しました。女性向けヘルスケア事業では、センセーショナルな切り口より、選択の質を上げる情報提供の方が長期的なブランド価値になります。 [4]"
    ],
    actions: [
      "記事とLPの冒頭3行で『誰向けか』『何が言えるか』『何は言い切れないか』を示す。理解負荷を減らし、過剰期待も抑えられます。 [1][2]",
      "著者・監修者・参照文献・更新日を必ず表示し、医療情報と販促情報の境界を曖昧にしない。MedlinePlusが示す評価軸を、自社コンテンツの設計側で先回りして満たす考え方です。 [3]",
      "『不安を煽ってCVを取る』より、『判断に必要な比較情報を見せる』構成に変える。女性向けヘルスケアでは、この差が信頼蓄積の分岐点になります。 [1][4]",
      "FAQでは悩みを受け止めつつ、診断や治療判断に踏み込まない表現ラインを決めておく。ブランドとコンプラの両面で重要です。"
    ],
    tags: ["女性ヘルスケア", "コンテンツ戦略", "ヘルスリテラシー"],
    sources: [
      { label: "[1] WHO: Health literacy policy and strategy development for NCD prevention and control", href: "https://www.who.int/publications/i/item/9789240113138" },
      { label: "[2] HHS Office of Disease Prevention and Health Promotion: Health Literacy Online", href: "https://odphp.health.gov/healthliteracyonline/" },
      { label: "[3] MedlinePlus: Evaluating Internet Health Information", href: "https://medlineplus.gov/webeval/webeval.html" },
      { label: "[4] ACOG statement on birth control misinformation (2024)", href: "https://www.acog.org/news/news-releases/2024/06/acog-statement-on-congressional-action-regarding-birth-control-misinformation" }
    ],
    faq: [
      {
        question: "専門的に書くほど信頼されるわけではないのですか？",
        answer: "いいえ。専門性は必要ですが、読者が理解できない形で提示すると、信頼より離脱を招きます。専門性は『やさしく正確に説明できること』で伝える方が有効です。"
      },
      {
        question: "女性向けヘルスケアでは共感訴求を弱めるべきですか？",
        answer: "弱める必要はありません。ただし、共感訴求の直後に根拠、選択肢、相談先を示し、感情だけで意思決定させない構造にするべきです。"
      }
    ],
  },
  {
    slug: "poc-to-paper",
    title: "PoCを論文化につなげるための実務メモ",
    category: "論文化",
    publishedAt: "2026-03-10",
    authorId: "obgyn-rct",
    summary: "PoCを実施しても、記録設計と公開方針が弱いと論文化まで届きません。ICMJE、ClinicalTrials.gov、SPIRIT-CONSORT 2025、CONSORT pilot extensionを踏まえ、事業に効く論文化の下準備を整理します。",
    tldr: ["PoC前に公開と記録の前提を決める", "プロトコル・評価項目・解析計画を残す", "登録・報告・原稿化を同じ流れで設計する"],
    learnings: ["PoCが論文化できなくなる典型要因", "2026年時点で押さえるべき投稿・報告の基礎", "営業資料に使える形で研究を残す方法"],
    conclusion: "PoCを論文化したいなら、実施後ではなく実施前から『何を公開し、何を記録し、どの形式で報告するか』を決めておく必要があります。ICMJE、ClinicalTrials.gov、SPIRIT-CONSORT 2025はいずれも、この前倒し設計を前提にしています。 [1][2][3][4]",
    background: [
      "ICMJE Recommendations は、著者資格や利益相反だけでなく、研究報告全体における透明性と完全性を重視しています。2026年1月更新でも、報告の一貫性と再現可能性を支える運用が前提であることは変わっていません。 [1][2]",
      "ClinicalTrials.gov は、適用対象試験に関する登録と結果報告の要件を明示しており、研究が外部説明や学術公表に耐えるかは、開始前の登録・計画・評価項目の整理と強く結びついています。PoC段階でも『将来公開するなら何を残すか』の視点が必要です。 [3]",
      "SPIRIT-CONSORT 2025 は、プロトコルと最終報告を別物として扱わず、計画時点から報告の再利用可能性を高める方向に整理しています。PoCから論文化を見据えるなら、プロトコル、評価指標、解析方針、欠測時の扱いを早い段階で文章化した方がよいです。 [4]",
      "また、CONSORT の pilot and feasibility trials extension は、小規模試験でも『何を学ぶための試験か』を明確にし、効果の断定ではなく実行可能性の検証として報告することを求めています。PoCを過大評価せず、次段階の意思決定材料として位置づける姿勢が重要です。 [5]"
    ],
    actions: [
      "PoC開始前に、研究目的、事業目的、主要評価項目、副次評価項目、解析責任者を1枚の研究メモにまとめる。後から原稿化しやすくなります。 [1][4]",
      "適用対象になりうる試験は登録要件を早めに確認し、少なくとも『いつ公開するか』『どの結果をどこまで出すか』を事前に決める。 [3]",
      "PoCの報告では、効果の大きさを誇張せず、実行可能性、運用課題、次試験で改善すべき点を明確に書く。pilot extension の考え方に沿うと、次フェーズの説得力が上がります。 [5]",
      "論文化を見据えるなら、図表の元データ、版管理、逸脱事項、欠測理由を残す。営業資料には要約版を使い、学術報告にはフルログを使う二層構造が実務的です。"
    ],
    tags: ["PoC", "論文化", "臨床研究"],
    sources: [
      { label: "[1] ICMJE Recommendations", href: "https://www.icmje.org/recommendations/" },
      { label: "[2] ICMJE news: Updated Recommendations (January 2026)", href: "https://www.icmje.org/news-and-editorials/updated_recommendations_jan2026.html" },
      { label: "[3] ClinicalTrials.gov: Reporting Requirements", href: "https://clinicaltrials.gov/policy/reporting-requirements" },
      { label: "[4] CONSORT-SPIRIT: Published statements (2025 update)", href: "https://www.consort-spirit.org/published-statements" },
      { label: "[5] BMJ: CONSORT extension to randomised pilot and feasibility trials", href: "https://www.bmj.com/content/355/bmj.i5239" }
    ],
    faq: [
      {
        question: "PoCは小規模でも論文化できますか？",
        answer: "可能です。ただし『有効性を証明した』と強く言うのではなく、実行可能性、運用性、次試験の設計示唆として整理する方が通りやすいです。"
      },
      {
        question: "まず営業資料を優先したい場合でも論文化前提で動くべきですか？",
        answer: "はい。営業資料優先でも、元データ、評価項目、逸脱記録を最初から残しておけば、後で論文化や対外説明へ転用しやすくなります。"
      }
    ],
  },
  {
    slug: "medical-seo-aieo-basics",
    title: "医療領域のSEOとAIEOで先に整えるべき基礎",
    category: "SEO/AIEO",
    publishedAt: "2026-03-10",
    authorId: "obgyn-ai",
    summary: "AI検索時代でも、医療領域で効くのは小手先のAIEO対策ではありません。Google Search Central の公式方針を前提に、記事構造、著者情報、構造化データ、FAQの整え方を実務向けに整理します。",
    tldr: ["AIEOの近道はなく、people-first content が土台", "Article と ProfilePage を適切に実装する", "著者・監修者・更新日・FAQを可視テキストで整える"],
    learnings: ["Google公式資料から逆算したAIEOの現実解", "医療記事で著者情報が重要な理由", "構造化データと本文構造をどうそろえるか"],
    conclusion: "Googleは『AIEO』という別ルールを公開していません。実務上の正解は、people-first content、明確な著者情報、Article / ProfilePage の構造化データ、読みやすい本文構造を徹底することです。医療領域ほど、この基礎がそのままAI要約時の強さにつながります。 [1][2][3]",
    background: [
      "Google Search Central は、検索評価の起点として people-first content を繰り返し示しています。つまり、検索エンジン向けの不自然な最適化ではなく、読者の疑問に対して明確で役立つ内容を出すことが前提です。医療領域では、とくに誰が書いたのか、どの専門性にもとづくのかが重要になります。 [1]",
      "Article structured data のドキュメントでは、headline、image、datePublished、dateModified、author といった基本項目を整えるよう案内されています。これは検索結果の見え方だけでなく、記事情報を機械が解釈しやすくする最低限の整備でもあります。 [2]",
      "ProfilePage structured data は、著者や監修者の専門性を独立したページで示す設計に向いています。医療コンテンツでは、記事単体よりも『誰が責任を持つのか』の情報が信頼形成に効きやすいため、チームページと記事ページを内部リンクでつなぐ構成が合理的です。 [3]",
      "したがって、AIEOを名乗る特殊施策より、冒頭3行要約、見出し構造、FAQの可視化、著者ページ、更新日、構造化データの整備をやり切る方が成果につながります。これは Google の公式資料からの実務的な推論です。 [1][2][3]"
    ],
    actions: [
      "記事冒頭に『誰向けか』『結論』『何がわかるか』を3行で置く。AI要約と人間の初読の両方に効きます。 [1]",
      "Article 構造化データでタイトル、公開日、更新日、著者を埋め、著者ページには ProfilePage を実装する。本文と構造化データの不一致は避ける。 [2][3]",
      "FAQは隠しテキストではなく、実際のページ本文に見える形で置く。検索にもAI要約にも、可視テキストの方が扱いやすいです。これは公式資料にも整合する実務判断です。 [1][2]",
      "医療領域では、記事とチームページを相互リンクし、著者の専門性と責任範囲を示す。E-E-A-T の専用設定ではなく、読者に説明責任を果たす基本設計として行うべきです。 [1][3]"
    ],
    tags: ["SEO", "AIEO", "コンテンツ設計"],
    sources: [
      { label: "[1] Google Search Central: Creating helpful, reliable, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "[2] Google Search Central: Article structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/article" },
      { label: "[3] Google Search Central: ProfilePage structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/profile-page" }
    ],
    faq: [
      {
        question: "AIEO専用の裏技を入れた方がいいですか？",
        answer: "優先度は低いです。Googleの公式資料から見る限り、まず効くのは people-first content、著者情報、構造化データ、明確な本文構造です。"
      },
      {
        question: "医療記事ではタグやカテゴリも重要ですか？",
        answer: "重要です。人間の回遊にも検索エンジンの文脈理解にも役立つため、テーマ別の整理はやった方がよいです。ただし本文の質の代わりにはなりません。"
      }
    ],
  },
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));
export const articleMap = new Map(articles.map((article) => [article.slug, article]));

