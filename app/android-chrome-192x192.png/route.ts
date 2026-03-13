import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";
import { createElement } from "react";

export const runtime = "nodejs";

const logoBuffer = readFileSync(join(process.cwd(), "public", "images", "logo-yuiryou.png"));
const logoDataUrl = `data:image/png;base64,${logoBuffer.toString("base64")}`;

export async function GET() {
  return new ImageResponse(
    createElement(
      "div",
      {
        style: {
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: "48px",
          padding: "28px",
        },
      },
      createElement("img", {
        src: logoDataUrl,
        alt: "YUIRYOU logo",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "contain",
        },
      }),
    ),
    {
      width: 192,
      height: 192,
    },
  );
}