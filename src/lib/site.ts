// Absolute URL used for social previews and search data.
// Set NEXT_PUBLIC_SITE_URL once you attach a custom domain; on Vercel it falls back to the production URL.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// A page's openGraph replaces the layout's whole openGraph, so every page builds its tags with this.
export function openGraph(title: string, description: string, path: string) {
  return { type: "website", siteName: "OC Bachata", locale: "en_US", title, description, url: path } as const;
}
