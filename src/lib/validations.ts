import { z } from 'zod';

export const projectMetricSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const projectFrontmatterSchema = z
  .object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    metrics: z.array(projectMetricSchema).optional(),
    links: z.object({
      repo: z.string().optional(),
      live: z.string().optional(),
    }),
    featured: z.boolean(),
    date: z.string(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
  })
  .refine((data) => !data.coverImage || !!data.coverImageAlt, {
    message: 'coverImageAlt is required whenever coverImage is set',
    path: ['coverImageAlt'],
  });

export const postFrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
});
