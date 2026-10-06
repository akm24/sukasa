import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, isCategory } from "@/lib/catalog";
import { ShopView } from "@/components/ShopView";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sort?: string }>;
};

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORIES.find((c) => c.slug === category);
  return meta ? { title: meta.name, description: meta.blurb } : {};
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { sort } = await searchParams;
  if (!isCategory(category)) notFound();
  return <ShopView category={category} sort={sort} />;
}
