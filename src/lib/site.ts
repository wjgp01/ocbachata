// Absolute URL used for social previews and search data.
// Set NEXT_PUBLIC_SITE_URL once you attach a custom domain; on Vercel it falls back to the production URL.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
