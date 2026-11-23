import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // The social preview images read the logo, flyer and fonts from disk; ship them with those routes.
  outputFileTracingIncludes: {
    "/opengraph-image": ["./src/assets/**/*"],
  },
  // The weekender's own page was removed; send old links to the Past Events list.
  redirects() {
    return [{ source: "/past-events/oc-bachata-weekender-2026", destination: "/past-events", permanent: false }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
