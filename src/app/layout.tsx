import type { Metadata, Viewport } from "next";
import { Sofia_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";
import { site } from "@/content/site";
import { openGraph, siteUrl } from "@/lib/site";
import "./globals.css";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia",
  subsets: ["latin"],
});

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  variable: "--font-sofia-xc",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: openGraph(site.title, site.description, "/"),
  // Without its own title and description, X falls back to each page's Open Graph tags.
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#07040d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sofiaSans.variable} ${sofiaSansExtraCondensed.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
