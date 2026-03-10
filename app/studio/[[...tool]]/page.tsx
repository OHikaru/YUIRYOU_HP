import Link from "next/link";
import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main className="page-hero page-hero--compact">
        <div className="shell narrow-shell">
          <p className="eyebrow">Sanity Studio</p>
          <h1>Sanityの環境変数が未設定です</h1>
          <p className="hero-copy">
            `.env.local` または Vercel の環境変数に `NEXT_PUBLIC_SANITY_PROJECT_ID` と `NEXT_PUBLIC_SANITY_DATASET` を設定してください。
          </p>
          <p className="hero-copy">
            設定後に再度このページを開くと、CMS管理画面が表示されます。詳しい手順は <Link href="/insights">運用ガイド</Link> ではなく、リポジトリ内の手順書を参照してください。
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}