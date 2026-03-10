export const siteConfig = {
  brandName: "YUIRYOU株式会社",
  brandNameEn: "YUIRYOU Inc.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yuiryou.vercel.app",
  defaultTitle: "医療監修の先まで伴走。医師3名が、研究・AI・発信まで法人実務を前に進める法人向け医療コンサルティング",
  defaultDescription:
    "フェムテック、ヘルスケアSaaS、医療メディア、海外準備中のスタートアップ向けに、英語・RCT・研究実務、医療AI・情報品質、YouTube・広告設計を横断支援する法人向け医療コンサルティングサイト。",
  ogImage: "/opengraph-image",
  updatedAt: "2026-03-10",
  contactEmail: "contact@example.com",
  phoneLabel: "初回相談はお問い合わせフォームから受付",
  primaryCta: {
    label: "法人向け無料相談を申し込む",
    href: "/contact",
  },
  secondaryCta: {
    label: "料金プランを見る",
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
    publishedAt: "2026-03-11",
    authorId: "obgyn-ai",
    summary:
      "医療AIの導入は、モデル選定より前に品質ガードレールを設計することが重要です。2025年のWHOとFDAの文書では、用途定義、監督責任、変更管理、検証方法を先に明確にすることが一貫して求められています。企業実務では、PoCの前にレビュー基準と停止条件を決めておくことが失敗コストを抑えます。",
    tldr: [
      "医療AIは、導入前に用途、責任者、レビュー体制を定義しておく必要があります。",
      "生成品質だけでなく、誤情報時の停止条件とエスカレーション先を先に決めるべきです。",
      "RAGやプロンプト改善だけでは不十分で、検証データと運用基準が必要です。",
      "PoC段階から変更管理と監査ログを残す設計にしておくと後工程が安定します。"
    ],
    learnings: [
      "WHOとFDAの文書が共通して重視する論点",
      "企業が先に設計すべき医療AIの品質管理項目",
      "PoCで済ませず運用につなげるための実務整理",
      "営業資料やFAQにAI説明を載せる際の注意点"
    ],
    conclusion:
      "医療AIは、モデルの性能比較から入るよりも先に、用途、監督責任、品質レビュー、変更管理を定義する方が実務上は重要です。WHOは健康分野における大規模マルチモーダルモデルの運用で、説明責任、人間による監督、公平性、透明性を重視しています。FDAもAI-enabled device software functionsの文脈で、事前の評価設計、継続的な変更管理、性能維持の考え方を明示しています。企業側は、AIを導入する前に、どこまでを自動化し、どこからを医師や担当者のレビュー対象にするかを決める必要があります。 [1][2][3][4]",
    background: [
      "WHOの2025年文書『Ethics and governance of large multi-modal models for health』は、医療分野における生成AIの利用について、患者安全、説明責任、公平性、透明性を中心に整理しています。単に高性能なモデルを使うことではなく、どの意思決定を人間が担い、どの情報をAIに扱わせるのかを制度として決める必要があると示しています。 [1]",
      "FDAの2025年ドラフトガイダンス『Considerations for Artificial Intelligence-Enabled Device Software Functions』では、AIを含むソフトウェア機能について、意図した用途、評価方法、性能監視、変更後の継続性確認が重視されています。これは医療機器文脈の文書ですが、一般の医療コンテンツAIや社内支援AIにもそのまま参考になります。 [2]",
      "さらにFDAのPredetermined Change Control Planの考え方は、AIを更新し続ける前提なら、どの範囲の変更を許容し、何を再検証対象にするかを先に決めるべきだと示しています。RAGを足した、FAQを増やした、モデルを変えたといった変更も、本来は品質面で再評価が必要です。 [3]",
      "NIST AI RMF 1.0 は、AIをリスクベースで管理する枠組みとして、ガバナンス、マッピング、測定、管理を提示しています。医療領域では、この枠組みをそのまま社内運用ルールに翻訳することで、AIの利用範囲を曖昧にせずに済みます。 [4]",
      "実務上は、PoCが成功した後に運用設計を考え始めるケースが多いですが、それだと説明責任とレビュー負荷が後から膨らみます。医療AIは、PoC前にガードレールを作る方が結果的に速く進みます。"
    ],
    actions: [
      "最初に『AIが行う範囲』『人が確認する範囲』『医師レビューが必要な範囲』を1枚に整理します。用途定義が曖昧なまま進めると、品質責任が宙に浮きます。 [1]",
      "誤情報、過度な断定、禁忌表現、古い情報の混入といった失敗パターンごとに、停止条件とエスカレーション先を決めます。レビュー体制は担当者の善意ではなく運用ルールで固定すべきです。 [1][2]",
      "RAGや独自FAQを導入する場合でも、参照元、更新頻度、利用者画面の注意表示、ログ保存方針を先に決めます。機能追加をそのまま品質向上と見なさない姿勢が必要です。 [2][3]",
      "営業資料やLPにAI活用を記載する場合は、『何を自動化しているか』より『どのように品質を担保しているか』を先に説明します。これは対法人営業での信頼形成に直結します。 [1][4]",
      "PoC段階から監査ログ、改善履歴、評価データセットの管理方法を決めておくと、運用移行時の手戻りが大きく減ります。"
    ],
    tags: ["医療AI", "品質管理", "ガバナンス"],
    sources: [
      { label: "[1] WHO: Ethics and governance of large multi-modal models for health (2025)", href: "https://www.who.int/publications/i/item/9789240103078" },
      { label: "[2] FDA: Considerations for Artificial Intelligence-Enabled Device Software Functions (2025 draft guidance)", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-artificial-intelligence-enabled-device-software-functions" },
      { label: "[3] FDA: Predetermined Change Control Plan for AI-Enabled Device Software Functions", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence-enabled" },
      { label: "[4] NIST: AI Risk Management Framework 1.0", href: "https://www.nist.gov/itl/ai-risk-management-framework" }
    ],
    faq: [
      {
        question: "医療AIはPoCから始めれば十分ですか？",
        answer: "PoC自体は有効ですが、PoCの前に用途定義、レビュー責任者、停止条件を決めないと、結果が良くても本番運用に移せません。PoCを始める前の設計が重要です。"
      },
      {
        question: "医療AIをFAQやチャットに入れる際に最初に決めるべきことは何ですか？",
        answer: "参照元の範囲、更新頻度、答えてはいけない質問、医師や担当者への引き継ぎ条件を先に決めるべきです。機能よりも運用境界の設計が優先です。"
      },
      {
        question: "AI活用を営業資料でどう説明すべきですか？",
        answer: "先進性よりも品質管理の考え方を説明する方が有効です。どの情報を使い、誰がレビューし、どのように更新を管理しているかを示すと信頼につながります。"
      }
    ],
  },
  {
    slug: "women-health-content-strategy",
    title: "女性向けヘルスケア事業で信頼されるコンテンツ戦略",
    category: "女性ヘルスケア",
    publishedAt: "2026-03-11",
    authorId: "obgyn-ai",
    summary:
      "女性向けヘルスケア領域では、わかりやすさと正確性の両立が信頼の前提です。WHO、HHS、MedlinePlus、ACOGの公開情報を見ると、専門性の高さより先に、読み手が行動に移せる説明構造が重視されています。企業のコンテンツ戦略でも、疾患啓発、サービス説明、FAQの役割分担を明確にすることが重要です。",
    tldr: [
      "女性向けヘルスケアでは、正しさだけでなく理解しやすさまで設計対象に含める必要があります。",
      "専門用語を減らし、受診判断や相談行動につながる導線を明示することが重要です。",
      "啓発記事、サービス説明、FAQを混ぜると意図が曖昧になり、CVも信頼も落ちます。",
      "コンテンツの役割を分け、監修方針を一貫させるとブランド全体の説得力が上がります。"
    ],
    learnings: [
      "女性ヘルスケアで誤解されにくい説明構造の作り方",
      "啓発コンテンツとLPをどう接続するか",
      "読み手の不安を減らす表現設計の基本",
      "FAQを信頼形成装置として使う方法"
    ],
    conclusion:
      "女性向けヘルスケア領域では、情報量を増やすことより、読み手が安心して理解できる順序を整えることが成果に直結します。WHOやHHSのヘルスリテラシー系資料は、読者が必要な行動を取れるかどうかを中心に設計する重要性を示しています。MedlinePlusやACOGの発信も、誤情報への対抗として、平易な表現、明確なFAQ、行動導線の提示を重視しています。企業コンテンツでも、専門性を誇示するより、何を理解してほしいかを明示する構造に変える方が信頼されます。 [1][2][3][4]",
    background: [
      "WHOのhealth literacy関連文書は、健康情報の提供において、読み手が理解できる言葉で、必要な行動まで想定した説明設計が必要だと整理しています。女性向けヘルスケアでは、医学的に正しいだけでは不十分で、読み手が自分ごととして理解できる構造が欠かせません。 [1]",
      "HHSのHealth Literacy Onlineは、見出しの順序、短い文、余白、箇条書き、FAQなど、オンライン健康情報の読みやすさを高める具体策を示しています。LPやオウンドメディアにもそのまま使える原則です。 [2]",
      "MedlinePlusは、健康情報の信頼性評価について、情報源、更新日、エビデンス、運営主体の明確化を重視しています。これは企業サイトにおいても、監修者表示、更新日、根拠の提示が重要であることを示しています。 [3]",
      "ACOGの発信は、女性の健康や避妊に関する誤情報が意思決定に直接影響することを踏まえ、明確で誤解の少ない説明の必要性を繰り返し示しています。女性向け事業では、言葉の柔らかさだけでなく、誤読されにくさが重要です。 [4]",
      "実務では、啓発記事にサービス説明を詰め込みすぎたり、LPで一般論を長く語りすぎたりして、役割が混線するケースが多く見られます。信頼されるサイトは、ページごとの役割分担が明確です。"
    ],
    actions: [
      "啓発記事、サービス紹介、問い合わせ導線の3層を分けて設計します。1ページ内で全部を説明しようとすると、理解もCVも弱くなります。 [1][2]",
      "各ページに更新日、監修者、参考情報の考え方を明示し、読者が情報の信頼性を判断できるようにします。これはブランド信頼の基礎です。 [3]",
      "専門用語は見出しでは避け、本文中で必要最小限に説明します。読み手が次の行動を判断できる文脈を優先します。 [1][4]",
      "FAQは『不安を減らす装置』として設計し、申し込み前に気になる論点を先回りして整理します。",
      "記事からLPへ、LPから問い合わせへとつながる内部リンクを設計し、読者の理解段階に応じて導線を分けます。"
    ],
    tags: ["女性ヘルスケア", "コンテンツ戦略", "信頼設計"],
    sources: [
      { label: "[1] WHO: Health literacy policy and strategy development for NCD prevention and control", href: "https://www.who.int/publications/i/item/9789240113138" },
      { label: "[2] HHS Office of Disease Prevention and Health Promotion: Health Literacy Online", href: "https://odphp.health.gov/healthliteracyonline/" },
      { label: "[3] MedlinePlus: Evaluating Internet Health Information", href: "https://medlineplus.gov/webeval/webeval.html" },
      { label: "[4] ACOG statement on birth control misinformation (2024)", href: "https://www.acog.org/news/news-releases/2024/06/acog-statement-on-congressional-action-regarding-birth-control-misinformation" }
    ],
    faq: [
      {
        question: "女性向けヘルスケアでは、やさしい言葉だけを使えば十分ですか？",
        answer: "十分ではありません。やさしい言葉に加えて、情報源、更新日、監修体制、相談先の導線まで含めて設計する必要があります。"
      },
      {
        question: "啓発記事とサービス紹介を同じページで完結させるべきですか？",
        answer: "必ずしもそうではありません。役割が異なるため、啓発は理解促進、LPは比較検討、FAQは不安解消と分けた方が成果が安定します。"
      },
      {
        question: "信頼されるFAQはどう作ればよいですか？",
        answer: "企業側が言いたいことではなく、読者が迷う論点から作ることが重要です。誤解されやすい表現を先回りして整理すると、信頼形成に効きます。"
      }
    ],
  },
  {
    slug: "poc-to-paper",
    title: "PoCを論文化につなげるための実務メモ",
    category: "研究実務",
    publishedAt: "2026-03-11",
    authorId: "obgyn-rct",
    summary:
      "PoCは事業判断には使えても、そのままでは論文化に耐えないことが多いです。ICMJE、ClinicalTrials.gov、SPIRIT-CONSORT、CONSORT pilot extensionを踏まえると、研究目的、主要評価項目、登録、解析方針を早い段階で決めることが重要です。『まず試す』と『後で論文化する』を両立させるには、最初の設計がほぼすべてです。",
    tldr: [
      "PoCは、事業の仮説検証と研究の検証で設計要件が異なります。",
      "あとから論文化したいなら、目的と評価項目を最初に固定する必要があります。",
      "登録、同意、データ定義、解析方針を後回しにすると手戻りが大きくなります。",
      "PoC段階で研究の最小要件を満たしておくと、事業にも研究にも活かしやすくなります。"
    ],
    learnings: [
      "PoCと研究の違いを実務でどう整理するか",
      "2026年時点で意識すべき論文化の基本要件",
      "登録や解析計画をどの段階で決めるか",
      "事業側と研究側の期待値をそろえる方法"
    ],
    conclusion:
      "PoCを論文化につなげたいなら、PoCを始める前に『何を示したい研究なのか』を定義する必要があります。ICMJEのRecommendationsやClinicalTrials.govの考え方は、研究目的、主要評価項目、登録、透明性を後付けにしないことを求めています。SPIRITやCONSORTの拡張ガイドも、試験計画と報告の一貫性を重視しています。企業実務では、PoCを先に走らせてから論文化を考えるのではなく、最初に研究としての最小要件を埋め込む設計が必要です。 [1][2][3][4][5]",
    background: [
      "ICMJE Recommendationsは、著者資格だけでなく、研究計画、透明性、報告の一貫性に関する基本原則を示しています。PoCであっても、研究として扱うなら、目的、解析、報告の前提を初期段階で整理しておく必要があります。 [1][2]",
      "ClinicalTrials.govの報告要件は、介入研究や特定の試験で登録と結果報告の透明性を求めています。全てのPoCが該当するわけではありませんが、登録の要否や公開方針を早めに判断する必要があります。 [3]",
      "SPIRIT-CONSORT系の文書は、試験計画と報告の質を高めるための共通言語として使えます。たとえ小規模試験であっても、項目定義やエンドポイントの整理に役立ちます。 [4]",
      "CONSORT extension for pilot and feasibility trialsは、探索的な試験でも、実施可能性をどう評価し、どう報告するかを明確にしています。PoCだから曖昧でよい、とはされていません。 [5]",
      "企業現場では、PoCの目的が『営業で使えるか確かめたい』と『研究として示したい』で混ざることが多く、そのまま進めるとデザインが崩れます。最初に目的の優先順位をそろえることが重要です。"
    ],
    actions: [
      "PoC開始前に、事業目的とは別に研究目的を1文で定義します。主要評価項目、対象、比較条件を最初に言語化するだけでも後工程が大きく安定します。 [1][4]",
      "登録の要否、同意取得の方法、データの取り扱い方針を、試験開始前に確認します。ここを曖昧にすると論文化時に詰まります。 [3]",
      "解析計画は簡易版でもよいので事前に残します。『後で見て決める』では、結果の説得力が弱くなります。",
      "PoCであっても、実施可能性を何で判断するかを決めておきます。募集率、継続率、完遂率など、 feasibility 指標を定義しておくことが重要です。 [5]",
      "事業チームと研究チームで、公開タイミング、社外説明、営業利用の範囲を先に合意しておくと、実務上の摩擦を減らせます。"
    ],
    tags: ["PoC", "研究実務", "論文化"],
    sources: [
      { label: "[1] ICMJE Recommendations", href: "https://www.icmje.org/recommendations/" },
      { label: "[2] ICMJE news: Updated Recommendations (January 2026)", href: "https://www.icmje.org/news-and-editorials/updated_recommendations_jan2026.html" },
      { label: "[3] ClinicalTrials.gov: Reporting Requirements", href: "https://clinicaltrials.gov/policy/reporting-requirements" },
      { label: "[4] CONSORT-SPIRIT: Published statements", href: "https://www.consort-spirit.org/published-statements" },
      { label: "[5] BMJ: CONSORT extension to randomised pilot and feasibility trials", href: "https://www.bmj.com/content/355/bmj.i5239" }
    ],
    faq: [
      {
        question: "PoCは小規模なら研究設計を簡略化してもよいですか？",
        answer: "簡略化できる部分はありますが、目的、評価項目、データ定義まで曖昧にしてよいわけではありません。小規模でも最小限の研究設計は必要です。"
      },
      {
        question: "論文化を後から考えても間に合いますか？",
        answer: "間に合う場合もありますが、主要評価項目やデータ取得方法が曖昧だと難しくなります。論文化の可能性が少しでもあるなら、最初から最低限の設計を入れる方が安全です。"
      },
      {
        question: "営業目的のPoCと研究目的のPoCは分けるべきですか？",
        answer: "完全に分ける必要はありませんが、目的の優先順位は明確にした方がよいです。誰に何を示したいPoCかが曖昧だと、設計も成果の評価もぶれます。"
      }
    ],
  },
  {
    slug: "medical-seo-aieo-basics",
    title: "医療領域のSEOとAIEOで先に整えるべき基礎",
    category: "SEO/AIEO",
    publishedAt: "2026-03-11",
    authorId: "obgyn-ai",
    summary:
      "医療領域のSEOとAIEOでは、小手先の最適化より、記事構造、著者情報、更新性、FAQ、構造化データの基礎を整える方が重要です。Google Search Centralの資料を見ると、people-first content と明確なメタ情報の整備が一貫して重視されています。AIに拾われやすいことを狙うより、引用されても誤解されにくい構造を先に作るべきです。",
    tldr: [
      "AIEOはSEOの別物ではなく、people-first content を前提にした情報整備の延長です。",
      "Article と ProfilePage の構造化データ、著者表示、更新日表示は優先度が高いです。",
      "見出し、要約、FAQ、内部リンクを整理すると、検索にもAI要約にも強くなります。",
      "医療領域では、引用されても文脈が崩れにくい文章設計が特に重要です。"
    ],
    learnings: [
      "Googleの公開情報から見たAIEOの基本整理",
      "医療記事に必要なメタ情報と構造化データ",
      "FAQとTL;DRの役割分担",
      "AI要約時代に崩れにくい記事設計"
    ],
    conclusion:
      "医療領域のSEOとAIEOでは、トレンドワードを追うより、記事の基本構造を整える方が成果につながります。Googleは people-first content を重視しており、構造化データ、著者情報、更新日、明確な見出し構造はその基礎です。AI要約で引用されることを意識するなら、要旨、FAQ、文脈が伝わる見出し、誤読されにくい結論表現を先に整えるべきです。AIEOだけを切り出して考えるのではなく、通常のSEOと情報品質管理を強化した先にあるものとして捉えるのが実務的です。 [1][2][3][4]",
    background: [
      "Google Search Centralのhelpful contentに関する文書は、検索のために作るのではなく、人の役に立つ情報を明確に提供することを重視しています。医療領域では特に、見出しの明確さと結論の一貫性が重要です。 [1]",
      "Search Essentialsは、検索上の基本ルールだけでなく、誤解を招く構造や隠れた最適化を避けるべきことを示しています。医療サイトでは、内容の信頼性と構造の透明性が強く求められます。 [2]",
      "Article structured dataは、headline、datePublished、dateModified、author などを明確に示すことで、検索エンジンがページの意味を理解しやすくします。医療記事では更新性と著者情報の明示が特に重要です。 [3]",
      "ProfilePage structured dataは、著者や監修者のプロフィールを検索エンジンに伝える仕組みです。誰が書き、どの専門性で監修しているかを示すことは、医療領域での信頼形成に直結します。 [4]",
      "実務ではAIEOを『AIに拾われるための裏技』として捉えがちですが、実際には文脈が欠けても意味が崩れにくい記事構造を作ることが中心になります。"
    ],
    actions: [
      "すべての記事で、冒頭要約、単一H1、更新日、著者・監修者表示、FAQの有無を点検します。AI要約以前に、通常の検索で理解されやすい形に整える必要があります。 [1]",
      "Article structured dataを記事単位で実装し、公開日、更新日、著者を漏れなく出します。構造化データは補助ですが、基礎整備として効果があります。 [3]",
      "著者ページやチームページに専門性、関与領域、主要論文を整理し、ProfilePage相当の情報が読み手にも検索エンジンにも伝わるようにします。 [4]",
      "FAQは検索用に水増しせず、読者が実際に迷う論点だけに絞ります。無理に量産するより、文脈の明確さを優先すべきです。 [1][2]",
      "本文は、AIに抜粋されても誤読されにくいよう、結論を先に書き、条件や例外を近くに置く構造にします。"
    ],
    tags: ["SEO", "AIEO", "情報設計"],
    sources: [
      { label: "[1] Google Search Central: Creating helpful, reliable, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "[2] Google Search Central: Search Essentials", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "[3] Google Search Central: Article structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/article" },
      { label: "[4] Google Search Central: ProfilePage structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/profile-page" }
    ],
    faq: [
      {
        question: "AIEOはSEOと別に考えるべきですか？",
        answer: "別物として切り分けすぎない方が実務的です。まずは人にとってわかりやすい記事構造とメタ情報を整え、その延長でAIにも引用されやすい状態を作る考え方が適切です。"
      },
      {
        question: "医療記事では何を優先的に整えるべきですか？",
        answer: "見出し構造、更新日、著者情報、FAQ、構造化データ、内部リンクの順で整えるのが現実的です。量より基礎の整備が重要です。"
      },
      {
        question: "FAQを増やせばAIEOに有利ですか？",
        answer: "数を増やすだけでは不十分です。読者が迷う論点に絞り、本文と矛盾しないFAQを作る方が、検索にもAI要約にも有効です。"
      }
    ],
  },
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));
export const articleMap = new Map(articles.map((article) => [article.slug, article]));




