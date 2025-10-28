import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Lumina7 Team'),
    readTime: z.string().default('5 min read'),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    description: z.string(),
    year: z.string(),
    category: z.string(),
    services: z.array(z.string()),
    heroImage: z.string(),
    images: z.array(z.string()).default([]),
    client: z.string().optional(),
    website: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { blog, portfolio };
