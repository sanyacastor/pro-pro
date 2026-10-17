# Про про — Astro Migration

Local media site for Protvino, migrated from Next.js 16 + OpenNext to Astro 5 + React islands + Cloudflare adapter.

## Stack

- **Astro 5** (static output, prerendered routes)
- **React islands** for interactive components (Header, MobileMenu, GurtourBanner, MapPage, Review widgets)
- **styled-components** for in-island styling
- **@astrojs/mdx** + Content Collections for gurtour reviews
- **@astrojs/cloudflare** adapter (output target)
- **Mapbox GL JS** for the interactive map (loaded as `client:only`)
- **swiper.js** (mdx content slider)

## Project layout

```
src/
├── pages/                  # Astro routes (auto-routed)
│   ├── index.astro
│   ├── about-us.astro
│   ├── map.astro
│   ├── article/<slug>.astro
│   └── gurtour/
│       ├── index.astro
│       └── [slug].astro
├── layouts/BaseLayout.astro
├── components/
│   ├── layout/             # Header.tsx (island), MobileMenu.tsx (island), Footer.astro
│   ├── Announcement.astro, Banner.astro, ...
│   ├── GurtourBanner.tsx   # React island
│   ├── Review/             # Review sub-components (islands)
│   └── mapPage/            # MapPage island and friends
├── content/gurtour/*.mdx   # Content collection
├── content.config.ts
└── config.ts               # Site-wide constants
```

## Develop

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

Outputs to `dist/` as static HTML. The Cloudflare adapter also writes `_worker.js` for SSR entrypoints (gurtour detail page routes).

## Deploy

```bash
# Set the secret before deploying:
wrangler secret put PUBLIC_MAPBOX_TOKEN
pnpm deploy
```

## Notes

- Header/Footer are global (rendered in `BaseLayout.astro`).
- `Header` is `client:load`; `GurtourBanner` is `client:visible`; `MapPage` is `client:only="react"`.
- Gurtour MDX uses `<Slider>` / `<Slide>` / `<ImagesRow>` from the legacy project; in static output they are mapped to plain HTML elements (swipe behaviour is dropped).
- Mapbox token is read from `window.__MAPBOX_TOKEN__`. For production, expose it via Cloudflare Pages env binding or a static env in your wrangler config.
