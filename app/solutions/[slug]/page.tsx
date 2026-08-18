import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedSolutionBySlug } from "@/lib/data/solutions";
import ClarifierMasterTemplate from "@/app/solutions/water-treatment-plants/clarifier-system/clarifier-template";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPublishedSolutionBySlug((await params).slug);
  if (!page) return {};
  return {
    title: page.seoTitle || page.title,
    description: page.metaDescription || page.excerpt,
    keywords: page.metaKeywords?.split(",").map((x) => x.trim()),
    alternates: page.canonicalUrl
      ? { canonical: page.canonicalUrl }
      : undefined,
    openGraph: {
      title: page.seoTitle || page.title,
      description: page.metaDescription || page.excerpt || undefined,
      images: page.ogImage?.url ? [page.ogImage.url] : undefined,
    },
  };
}
export default async function Solution({ params }: Props) {
  const page = await getPublishedSolutionBySlug((await params).slug);
  if (!page) notFound();
  return (
    <ClarifierMasterTemplate
      data={{
        title: page.title,
        excerpt: page.excerpt,
        sections: page.sections.map((section) => ({
          type: section.type,
          title: section.title,
          content: section.content as Record<string, unknown>,
          sortOrder: section.sortOrder,
          isEnabled: section.isEnabled,
        })),
      }}
    />
  );
}
