import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedSolutionBySlug } from "@/lib/data/solutions";
import { getStaticSolutionBySlug, STATIC_SOLUTION_PAGES } from "@/lib/data/static-solutions";
import ClarifierMasterTemplate from "@/app/solutions/water-treatment-plants/clarifier-system/clarifier-template";
import StaticSolutionTemplate from "@/app/solutions/static-solution-template";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return STATIC_SOLUTION_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const staticPage = getStaticSolutionBySlug(slug);
  if (staticPage) {
    return {
      title: `${staticPage.title} | AQUEN Fluid Technologies LLP`,
      description: staticPage.description,
      alternates: { canonical: `/solutions/${staticPage.slug}` },
      openGraph: {
        title: `${staticPage.title} | AQUEN Fluid Technologies LLP`,
        description: staticPage.description,
        url: `/solutions/${staticPage.slug}`,
        type: "website",
        images: [staticPage.image],
      },
    };
  }

  const page = await getPublishedSolutionBySlug(slug);
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
  const slug = (await params).slug;
  const staticPage = getStaticSolutionBySlug(slug);
  if (staticPage) return <StaticSolutionTemplate solution={staticPage} />;

  const page = await getPublishedSolutionBySlug(slug);
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
