import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";

export const alt = "OC Bachata: Bachata workshops, masterclasses and socials in Orange County, California";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Cached so the preview image is generated once at build time instead of on every request.
async function loadAssets() {
  "use cache";
  cacheLife("max");
  const assets = join(process.cwd(), "src/assets");
  const [logo, bodyFont] = await Promise.all([
    readFile(join(assets, "images/oc-bachata-logo.png"), "base64"),
    readFile(join(assets, "fonts/SofiaSans-Bold.ttf"), "base64"),
  ]);
  return { logo, bodyFont };
}

export default async function OpengraphImage() {
  const { logo, bodyFont } = await loadAssets();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          color: "#fff4e8",
          fontFamily: "Sofia Sans",
          background: "linear-gradient(180deg, #07040d 0%, #2d0c35 42%, #8a1631 72%, #f0661c 100%)",
        }}
      >
        <img src={`data:image/png;base64,${logo}`} alt="" width={760} height={380} />
        <div style={{ marginTop: 28, fontSize: 40 }}>Workshops · Masterclasses · Socials</div>
        <div style={{ marginTop: 10, fontSize: 28, letterSpacing: 5, textTransform: "uppercase", color: "#ffb238" }}>
          Orange County, California
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Sofia Sans", data: Buffer.from(bodyFont, "base64"), style: "normal", weight: 700 }],
    },
  );
}
