# Vercel + GitHub + Sanity 公開手順

対象リポジトリ:
- GitHubユーザー: `OHikaru`
- リポジトリ名: `YUIRYOU`
- ローカルフォルダ: `c:\Users\USER\Desktop\HikaruのOnedrive\OneDrive\デスクトップ\Cursor\docling`

## 1. まず理解しておくこと

このサイトは次の2系統で更新できます。

1. **Codexでコード修正する更新**
- 文言修正
- デザイン修正
- 画像差し替え
- 構成変更

2. **Sanity管理画面で行う更新**
- 記事追加
- チーム情報更新
- サービス情報更新
- FAQや料金の更新

Sanityが未設定でも、今のローカル定義でサイトは動きます。
つまり、**先にVercel公開し、あとからSanityをつなぐ** 進め方で問題ありません。

## 2. 日常的に触る主なファイル

- サイト本文や記事のフォールバック: `content/site.ts`
- トップページや各ページ構成: `app/`
- デザイン: `app/globals.css`
- 画像: `public/images/`
- Sanityスキーマ: `sanity/schemaTypes/index.ts`
- Sanity接続: `lib/sanity/` と `lib/site-data.ts`

## 3. GitHub に初回 push する

### 3-1. リポジトリを GitHub で作成
GitHubで次のURLのリポジトリを作ります。
- `https://github.com/OHikaru/YUIRYOU`

推奨設定:
- Public でも Private でも可
- README は GitHub 側で自動作成しない方が衝突しにくい

### 3-2. ローカルで remote を設定して push

```powershell
cd "c:\Users\USER\Desktop\HikaruのOnedrive\OneDrive\デスクトップ\Cursor\docling"
git branch -M main
git remote remove origin
```

`origin` が無い場合は上の2行目はエラーでも問題ありません。次を続けます。

```powershell
git remote add origin https://github.com/OHikaru/YUIRYOU.git
git add .
git commit -m "Initial Vercel and Sanity setup"
git push -u origin main
```

認証が求められたら、GitHub Desktop か Git Credential Manager でログインしてください。

## 4. Vercel で公開する

### 4-1. Vercel に GitHub 連携
- [https://vercel.com/](https://vercel.com/) にログイン
- `Add New...` → `Project`
- `OHikaru/YUIRYOU` を選択

### 4-2. Build 設定
通常は Vercel が自動判定します。

期待される設定:
- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output: 自動

### 4-3. Vercel 環境変数を入れる
最初に最低限これを入れます。

- `NEXT_PUBLIC_SITE_URL`
  - 初回は Vercel のドメインが分かった後で入れるのが正確です
  - 例: `https://yuiryou.vercel.app`

Sanity をまだ作っていない段階なら、他のSanity関連環境変数は空でも構いません。

### 4-4. 初回デプロイ
- `Deploy` を押す
- 公開URLが払い出される
- そのURLを確認する

## 5. Sanity を作る

### 5-1. Sanity アカウント作成
- [https://www.sanity.io/](https://www.sanity.io/) でアカウント作成

### 5-2. プロジェクト作成
Sanity で新しい project を作成します。

取得する情報:
- Project ID
- Dataset 名

推奨:
- Dataset: `production`

### 5-3. Vercel に Sanity 環境変数を追加
Vercel の `Project Settings` → `Environment Variables` に次を入れます。

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
  - `2026-03-10`
- `SANITY_STUDIO_PREVIEW_URL`
  - 例: `https://yuiryou.vercel.app`

必要に応じて追加:
- `SANITY_API_READ_TOKEN`
  - 非公開データや将来のプレビュー用
  - 最初は未設定でも可

### 5-4. ローカルでも `.env.local` を作る
このフォルダに `.env.local` を作成します。

```env
NEXT_PUBLIC_SITE_URL=https://yuiryou.vercel.app
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-10
SANITY_STUDIO_PREVIEW_URL=http://localhost:3000
SANITY_API_READ_TOKEN=
```

`.env.example` を見本にしてください。

## 6. Sanity Studio を使う

### 6-1. ローカルで確認

```powershell
cd "c:\Users\USER\Desktop\HikaruのOnedrive\OneDrive\デスクトップ\Cursor\docling"
cmd /c npm.cmd run dev
```

ブラウザで開く:
- `http://localhost:3000/studio`

### 6-2. Vercel上の Studio
本番でも次で開けます。
- `https://<your-vercel-domain>/studio`

### 6-3. 最初に作るドキュメント
優先順:
1. `Site Settings`
2. `Team Member`
3. `Service`
4. `Article`

Sanityにまだ何も入っていなくても、サイトはローカル定義から表示されます。
つまり、**必要なものから徐々にSanityへ移してよい** です。

## 7. 写真を差し替える方法

### 方法A. Codexでローカル画像を追加して反映
1. 画像をローカルフォルダへ置く
2. Codexに「この画像をチーム写真として差し替えて」と依頼する
3. Codexが `public/images/` や Sanity用の参照を更新
4. commit / push
5. Vercelで自動公開

### 方法B. Sanity管理画面で画像を更新
1. `/studio` を開く
2. 対象の `Team Member` または `Article` を開く
3. 画像をアップロードする
4. Publish する
5. 必要ならVercelの再デプロイを待つか手動再デプロイする

## 8. 記事を追加する方法

### 方法A. Codexで追加
1. 記事テーマを指示する
2. Codexが `content/site.ts` またはCMS取得層に合わせて追加する
3. commit / push
4. Vercelで反映

### 方法B. Sanityで追加
1. `/studio` を開く
2. `Article` を新規作成
3. `title`, `slug`, `category`, `publishedAt`, `author`, `summary`, `tldr`, `learnings`, `conclusion`, `background`, `actions`, `faq` を入力
4. Publish

## 9. 日常の更新手順

あなたが今後やることは基本的にこれです。

1. ローカルフォルダに画像や素材を置く
2. Codexに修正内容を依頼する
3. Codexがコード修正する
4. 必要ならローカル確認

```powershell
cmd /c npm.cmd run dev
```

5. Gitへ反映

```powershell
git add .
git commit -m "Update LP content"
git push
```

6. Vercelが自動再公開する

## 10. Codexに依頼するときの言い方

### 画像差し替え
- `public/images/team/ に置いたこの画像を産婦人科医Aの写真に差し替えてください`

### 記事追加
- `このテーマでinsights記事を1本追加してください。既存のテンプレートに従ってください`

### Hero修正
- `Heroの見出しをこの文言に変更し、CTA文言も調整してください`

### Sanity項目追加
- `Sanityで管理できるように、価格表の項目をCMS化してください`

## 11. どこまでSanityに寄せるか

現状は次の方針です。
- Sanityがあれば CMS を優先
- 無ければ `content/site.ts` を使う

このため、今後の拡張は段階的にできます。

おすすめ順:
1. 記事
2. チーム
3. サービス説明
4. FAQ
5. 料金表
6. Hero文言

## 12. よくある詰まりどころ

### `/studio` が開かない
- `NEXT_PUBLIC_SANITY_PROJECT_ID` が未設定
- `NEXT_PUBLIC_SANITY_DATASET` が未設定

### Sanity更新がサイトに反映されない
- Publish していない
- Vercel側の環境変数が未設定
- Codexのコード側でその項目をまだ参照していない

### Git push が失敗する
- GitHubログイン未完了
- リポジトリURL違い
- `origin` 設定ミス

## 13. この構成の実務上の意味

- 公開基盤: Vercel
- ソース管理: GitHub
- 中長期の更新UI: Sanity
- 細かい改善実装: Codex

つまり、**公開は安く、更新は柔軟に、複雑な調整はCodexに任せる** という体制になります。