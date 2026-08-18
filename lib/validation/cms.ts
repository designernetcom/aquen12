import { z } from "zod";

const seo = {
  seoTitle: z.string().max(191).nullish(), metaDescription: z.string().max(320).nullish(),
  metaKeywords: z.string().nullish(), canonicalUrl: z.string().url().or(z.literal("")).nullish(),
  ogImageId: z.coerce.number().int().positive().nullish(),
};

export const categorySchema = z.object({
  name: z.string().trim().min(2).max(191), slug: z.string().trim().max(191).optional(), description: z.string().nullish(),
  iconId: z.coerce.number().int().positive().nullish(), imageId: z.coerce.number().int().positive().nullish(),
  sortOrder: z.coerce.number().int().min(0).default(0), isEnabled: z.boolean().default(true),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"), ...seo,
});

export const subcategorySchema = z.object({
  categoryId: z.coerce.number().int().positive(), name: z.string().trim().min(2).max(191), slug: z.string().trim().max(191).optional(),
  description: z.string().nullish(), thumbnailId: z.coerce.number().int().positive().nullish(), sortOrder: z.coerce.number().int().min(0).default(0),
  isEnabled: z.boolean().default(true), status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"), ...seo,
});

export const solutionPageSchema = z.object({
  subcategoryId: z.coerce.number().int().positive(), title: z.string().trim().min(2).max(191), slug: z.string().trim().max(191).optional(),
  excerpt: z.string().nullish(), sortOrder: z.coerce.number().int().min(0).default(0), status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
  publishedAt: z.coerce.date().nullish(), twitterCard: z.string().max(50).nullish(), schemaJson: z.record(z.string(), z.unknown()).nullish(), robots: z.string().max(100).nullish(), ...seo,
  sections: z.array(z.object({ id: z.number().int().positive().optional(), type: z.enum(["HERO","OVERVIEW","DESCRIPTION","GALLERY","FEATURES","BENEFITS","SPECIFICATIONS","APPLICATIONS","PROCESS","FAQ","CTA","DOWNLOADS","RELATED","CUSTOM"]), title: z.string().max(191).nullish(), content: z.record(z.string(), z.unknown()), sortOrder: z.number().int().min(0), isEnabled: z.boolean() })).default([]),
});

export const reorderSchema = z.object({ items: z.array(z.object({ id: z.number().int().positive(), sortOrder: z.number().int().min(0) })).min(1).max(500) });
