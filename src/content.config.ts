import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        cover: image().optional(),
    }),
});

const games = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.coerce.date(),
        platforms: z.array(z.string()).default([]),
        cover: image(),
        hoverVideo: z.string(),
        trailer: z.url().optional(),
        role: z.string(),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
    })
})

export const collections = { projects, games };