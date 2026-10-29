import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";

export const alt =
  "OC Bachata Weekender with Angel & Luna and Jonny & Sami — November 21–22, 2026 at Dance Precisions Dance Studio in Anaheim, California";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Cached so the preview image is generated once at build time instead of on every request.
async function loadAssets() {
  "use cache";
  cacheLife("max");
  const assets = join(process.cwd(), "src/assets");
  const [flyer, displayFont, bodyFont] = await Promise.all([
    readFile(join(assets, "images/oc-bachata-weekender-flyer.jpg"), "base64"),
    readFile(join(assets, "fonts/SofiaSansExtraCondensed-BlackItalic.ttf"), "base64"),
    readFile(join(assets, "fonts/SofiaSans-Bold.ttf"), "base64"),
  ]);
  return { flyer, displayFont, bodyFont };
}

export default async function OpengraphImage() {
  const { flyer, displayFont, bodyFont } = await loadAssets();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 56,
          width: "100%",
          height: "100%",
          padding: "0 64px",
          color: "#fff4e8",
          fontFamily: "Sofia Sans",
          background:
            "linear-gradient(180deg, #07040d 0%, #2d0c35 42%, #8a1631 72%, #f0661c 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 26, letterSpacing: 5, textTransform: "uppercase", color: "#ffb238" }}>
            Grand opening · Nov 21–22, 2026
          </div>
          <div
            style={{
              marginTop: 20,
              fontFamily: "Sofia Sans Extra Condensed",
              fontStyle: "italic",
              fontWeight: 900,
              fontSize: 156,
              lineHeight: 0.85,
              textTransform: "uppercase",
            }}
          >
            OC Bachata
          </div>
          <div style={{ marginTop: 10, fontSize: 56, letterSpacing: 16, textTransform: "uppercase" }}>
            Weekender
          </div>
          <div style={{ marginTop: 36, fontSize: 34 }}>Angel & Luna · Jonny & Sami</div>
          <div style={{ marginTop: 8, fontSize: 26, color: "rgba(255, 244, 232, 0.75)" }}>
            Dance Precisions Dance Studio · Anaheim, California
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${flyer}`}
          alt=""
          width={400}
          height={500}
          style={{ borderRadius: 24, transform: "rotate(3deg)", boxShadow: "0 30px 80px rgba(0, 0, 0, 0.55)" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sofia Sans Extra Condensed", data: Buffer.from(displayFont, "base64"), style: "italic", weight: 900 },
        { name: "Sofia Sans", data: Buffer.from(bodyFont, "base64"), style: "normal", weight: 700 },
      ],
    },
  );
}
