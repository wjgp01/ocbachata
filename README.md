# OC Bachata Weekender

Event site for the **OC Bachata Weekender** (November 21–22, 2026, Dance Precision’s Dance Studio in Anaheim, California), a modern rebuild of the
[original event page](https://www.baychatasensual.com/oc-bachata-weekender-angel-luna/) on baychatasensual.com.

Built with Next.js 16, React 19 and Tailwind CSS 4, and deployed on Vercel.

## Editing the content

Nearly everything on the page lives in [`src/content/event.ts`](src/content/event.ts): dates, schedule, venues,
pass prices, videos and links. Edit it there and the whole page updates.

- **Images** live in `src/assets/images/`. To swap one, replace the file and keep the same name.
- **Tickets** are sold through the embedded Gomry checkout (`tickets.gomryEventId`), which always shows live prices.
  The prices on the pass cards are typed in by hand, so update them when Gomry pricing changes (for example, when
  pre-sale ends).

## Running it locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying

The site deploys on Vercel from the `main` branch of this repository, so every push to `main` publishes a new
version. Social previews and search data use the project's production domain automatically, including a custom
domain once one is added. To override it, set `NEXT_PUBLIC_SITE_URL` in the Vercel project's environment variables.
