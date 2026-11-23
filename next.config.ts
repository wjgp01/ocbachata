import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // The social preview images read the logo, flyer and fonts from disk; ship them with those routes.
  outputFileTracingIncludes: {
    "/opengraph-image": ["./src/assets/**/*"],
    "/past-events/oc-bachata-weekender-2026/opengraph-image": ["./src/assets/**/*"],
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
