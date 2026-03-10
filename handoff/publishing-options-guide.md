# 公開・編集手順ガイド

更新日: 2026-03-10
対象: `c:\Users\USER\Desktop\HikaruのOnedrive\OneDrive\デスクトップ\Cursor\docling`

## 1. 結論

最もおすすめの順番は次のとおりです。

1. **見た目をほぼそのまま公開したい**
   - 自社サーバー or Vercel などで `Next.js` 版を公開
2. **非エンジニアが文章・画像・色を触りたい**
   - WordPress を使う
3. **とにかく最短で公開したい**
   - Notion または Google Sites
4. **ノーコードで見た目もある程度作りたい**
   - Wix で再構築する

## 2. 方式ごとの向き・不向き

| 方式 | 見た目の再現性 | 文字編集 | 画像差し替え | フォント調整 | SEO/AIEO | おすすめ度 |
|---|---:|---:|---:|---:|---:|---:|
| 自社サーバーでNext.js | 最も高い | 中 | 中 | 高い | 高い | 高 |
| 自社サーバーで静的HTML/CSS | 高い | 中 | 中 | 高い | 高い | 高 |
| WordPress | 中〜高 | 高い | 高い | 中〜高 | 高い | 高 |
| Wix | 中 | 高い | 高い | 中 | 中 | 中 |
| Notion | 低 | 非常に高い | 高い | 低 | 低〜中 | 低 |
| Google Sites | 低〜中 | 高い | 高い | 低〜中 | 低〜中 | 低 |

## 3. 方式別の実務判断

### A. 自社サーバーで `Next.js` 版をそのまま公開

#### 向いているケース
- 今作ったデザインと構造をほぼ維持したい
- サービス詳細ページ、記事ページ、構造化データ、`robots.txt`、`sitemap.xml` をそのまま使いたい
- 将来 CMS をつないで編集性を上げてもよい

#### 何が編集できるか
- 文字: `content/site.ts`
- デザイン: `app/globals.css`
- 画像: `public/images/`

#### 公開手順
1. サーバーに Node.js を用意する。
2. このフォルダをサーバーへアップロードする。
3. サーバーで `cmd /c npm.cmd install` 相当の依存導入を行う。
4. `cmd /c npm.cmd run build` を実行する。
5. `cmd /c npm.cmd run start` で起動する。
6. Nginx などのリバースプロキシで 80/443 を振る。
7. 独自ドメインと SSL を設定する。

#### 編集運用
- 軽い編集なら `content/site.ts` を触るだけで済む。
- 非エンジニア編集を前提にするなら、次段階で Headless CMS を入れる。

#### メリット
- 今回のLP構成とSEO実装を維持しやすい。
- サービス詳細ページや記事一覧との相性がよい。

#### デメリット
- エンジニアなしでは日常更新しづらい。

### B. 自社サーバーで静的HTML/CSS版を公開

#### 向いているケース
- Node.js を常時動かしたくない
- 普通のHTMLサイトとして公開したい
- テキストと画像の差し替えを HTML/CSS レベルで管理したい

#### 用意したファイル
- `handoff/static-lp/index.html`
- `handoff/static-lp/styles.css`
- `handoff/static-lp/images/`

#### 公開手順
1. `handoff/static-lp/` をサーバーにアップロードする。
2. ドキュメントルートをそのフォルダに向ける。
3. `index.html` が表示されることを確認する。
4. 独自ドメインと SSL を設定する。

#### 編集運用
- 文言編集: `index.html`
- フォント、文字サイズ、色、余白: `styles.css`
- 写真差し替え: `handoff/static-lp/images/` の画像を差し替え

#### メリット
- 一般的なWebページとして最も扱いやすい。
- サーバー負荷が小さい。
- 制作会社へ渡しやすい。

#### デメリット
- 問い合わせフォーム送信は別途フォームサービスやサーバー処理が必要。
- 記事ページや複数下層ページの運用は WordPress ほど楽ではない。

### C. WordPress で公開

#### 向いているケース
- 非エンジニアが文章や画像を更新したい
- 後でブログやお知らせを増やしたい
- SEOと更新性のバランスを取りたい

#### おすすめ構成
- 1番現実的なのは **WordPress で固定ページとしてLPを再構築** する方法。
- このとき、今回の `handoff/static-lp/index.html` をベースに、ブロックエディタまたはテーマ側で組み直す。

#### 手順
1. WordPress を用意する。
2. トップ用の固定ページを作る。
3. `handoff/static-lp/index.html` の文章を各ブロックへ移す。
4. `styles.css` の重要部分だけをテーマの追加CSSへ移す。
5. サービス詳細、チーム、記事一覧を固定ページと投稿で分ける。
6. SEOプラグインで title / description / OGP を設定する。
7. フォームプラグインまたは既存フォーム機能を接続する。

#### 編集できる箇所
- 文字: 固定ページや投稿エディタで編集可
- 写真: メディアライブラリから差し替え可
- フォント・文字サイズ: テーマ設定か追加CSSで編集可

#### 注意
- WordPress.com はプランにより CSS 編集制限がある。WordPress.com の公式サポートでは追加CSSは対象プランで利用可能と案内している。
- 完全に元の見た目を再現したいなら、ブロックだけではなくテーマ調整が必要。

### D. Wix で公開

#### 向いているケース
- ノーコードで、公開後も社内で視覚的に編集したい
- 厳密な再現より「運用しやすいLP」を優先したい

#### 現実的なやり方
- **Wix にコードをそのまま移植するより、Wix 上で再構築する方が現実的**。
- `handoff/static-lp/index.html` の文章とセクション構成を設計図として使う。

#### 手順
1. Wix で新規サイトを作る。
2. 1ページLPとしてセクションを作る。
3. `handoff/static-lp/images/` の画像をアップロードする。
4. 見出し、本文、料金表、FAQ、問い合わせを Wix 上で配置する。
5. 独自ドメインを接続して公開する。

#### 編集できる箇所
- 文字: Wixエディタで直接編集可
- 画像: Media Manager で差し替え可
- フォントやサイズ: テーマ設定または要素単位で変更可

#### 注意
- カスタムコードは追加できるが、公式ヘルプでも「公開済みサイトかつ接続済みドメイン」が前提の箇所がある。
- 今回のような多ページSEO構成をそのまま移植するには手作業が多い。

### E. Notion で公開

#### 向いているケース
- とにかく早く仮公開したい
- 原稿の修正を最優先したい
- デザインより中身確認を優先したい

#### 現実的な位置づけ
- **営業叩き台や簡易公開には向くが、本番LPには弱い**。

#### 手順
1. Notion にトップページを作る。
2. `handoff/static-lp/index.html` の各セクションを見出しごとに移す。
3. 画像を貼る。
4. `Share` → `Publish` で公開する。
5. 必要ならカスタムドメインをつなぐ。

#### 編集できる箇所
- 文字: 非常に簡単
- 画像: 非常に簡単
- フォント・文字サイズ: 制限が強い

#### 注意
- カスタムCSSは基本前提にしない方がよい。
- LPらしい細かい余白設計や比較表の表現は弱くなる。

### F. Google Sites で公開

#### 向いているケース
- Google Workspace を使っていて、社内編集を優先したい
- シンプルな会社紹介ページとして使いたい

#### 現実的な位置づけ
- **運用は簡単だが、LPとしての勝ち筋は弱くなりやすい**。

#### 手順
1. Google Sites で新規サイトを作る。
2. ページを `Home`, `Services`, `Team`, `Insights`, `Contact` に分ける。
3. `handoff/static-lp/index.html` の見出しと本文を移す。
4. `Themes` からカスタムテーマを作り、色とフォントを設定する。
5. 画像をアップロードする。
6. 公開し、必要ならカスタムドメインを接続する。

#### 編集できる箇所
- 文字: 簡単
- 画像: 簡単
- フォント・文字サイズ: Google Sites のテーマ範囲に限定される

#### 注意
- Google Sites は見た目の自由度が低い。
- 公式ヘルプでも、カスタムテーマ・フォント・幅調整は可能だが、自由なCSS編集ではない。
- カスタムドメイン時に一部フォント互換の注意がある。

## 4. どれを選ぶべきか

### 最適解
- **本番公開**: 自社サーバー or Vercel で `Next.js` 版
- **非エンジニア更新を増やす**: WordPress へ再構築
- **超短期の仮公開**: Notion

### 避けたい選択
- Wix / Notion / Google Sites で、今回の多ページSEO構造をそのまま完全再現しようとすること
- Notion や Google Sites を「本格LPの最終形」として扱うこと

## 5. このフォルダで今すぐ使えるもの

- `app/` 以下: 本番用 `Next.js` サイト
- `handoff/static-lp/index.html`: 一般的なHTMLページ版
- `handoff/static-lp/styles.css`: フォント、色、文字サイズを調整しやすいCSS
- `handoff/static-lp/images/`: 差し替え用画像一式

## 6. 公式情報の確認元

- WordPress.com Additional CSS: https://wordpress.com/support/custom-css/
- Wix publish: https://support.wix.com/en/article/wix-vibe-saving-and-publishing-your-site
- Wix custom code: https://support.wix.com/en/article/wix-editor-embedding-custom-code-on-your-site
- Wix image upload: https://support.wix.com/en/article/wix-editor-uploading-your-own-images/
- Notion site customize: https://www.notion.com/help/edit-and-customize-your-notion-sites
- Notion publish: https://www.notion.com/en-gb/help/public-pages-and-web-publishing
- Google Sites redesign/themes/fonts: https://support.google.com/sites/answer/6372865?hl=en
- Google Sites text/images: https://support.google.com/sites/answer/90538?hl=en
- Google Sites custom domain: https://support.google.com/sites/answer/9068867?hl=en&ref_topic=6372882
- Next.js static export: https://nextjs.org/docs/app/guides/static-exports
- Next.js self-hosting: https://nextjs.org/docs/pages/guides/self-hosting