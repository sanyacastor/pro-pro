import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const gurtour = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/gurtour" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    address: z.string(),
    workingHours: z.string(),
    avgPrice: z.string(),
    // Free-form feature flags — we accept any string keys with boolean values.
    features: z.record(z.string(), z.boolean()).default({}),
  }),
});

export const collections = { gurtour };
