import { ImageResponse } from "next/og";

export const size = {
  width: 96,
  height: 96,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #071a25, #0f766e)",
          color: "#f7f4ec",
          fontSize: 42,
          fontWeight: 700,
        }}
      >
        MC
      </div>
    ),
    size,
  );
}
