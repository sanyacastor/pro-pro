// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

const isDev = process.argv.includes("dev");

export default defineConfig({
  site: "https://pro-pro.ru",
  output: "static",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
  integrations: [
    react(),
    mdx({
      components: {
        Slider: "section",
        Slide: "div",
        ImagesRow: "div",
      },
    }),
    sitemap(),
  ],
  image: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  vite: {
    ssr: {
      noExternal: [
        "react-modal-sheet",
        "react-use",
        "mapbox-gl",
        "swiper",
        "react-tooltip",
        "usehooks-ts",
      ],
    },
    optimizeDeps: {
      include: ["@emotion/stylis", "@emotion/unitless", "@emotion/is-prop-valid", "shallowequal"],
    },
  },
});
