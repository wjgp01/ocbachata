import type { Metadata, Viewport } from "next";
import { Sofia_Sans, Sofia_Sans_Extra_Condensed } from "next/font/google";
import { event } from "@/content/event";
import { siteUrl } from "@/lib/site";
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

const title = "OC Bachata Weekender · Angel & Luna · Nov 21–22, 2026";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: event.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: event.name,
    title,
    description: event.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: event.description,
  },
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
