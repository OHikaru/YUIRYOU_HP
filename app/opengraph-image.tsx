import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "64px",
          background: "linear-gradient(140deg, #06131c 0%, #0d2f3b 50%, #124f55 100%)",
          color: "#f8f2e7",
          fontFamily: "sans-serif",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, letterSpacing: 4 }}>医療コンサルティングチーム</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.2, fontWeight: 700 }}>
            <span>医療監修で終わらせない。</span>
            <span>医師3名が事業・研究・発信まで伴走する。</span>
          </div>
          <div style={{ display: "flex", fontSize: 28, opacity: 0.9 }}>AI / 英語・RCT / YouTube・広告まで横断支援</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24 }}>
          <span>法人向け</span>
          <span>価格公開</span>
          <span>患者個人の相談は対象外</span>
        </div>
      </div>
    ),
    size,
  );
}
