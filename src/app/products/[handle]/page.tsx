import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, FREE_SHIPPING_THRESHOLD, PRODUCTS, getProduct, getProductsByCategory } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { AddToCart } from "@/components/AddToCart";

type Props = { params: Promise<{ handle: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);
  return product ? { title: product.title, description: product.description } : {};
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.slug === product.category)!;
  const related = getProductsByCategory(product.category)
    .filter((p) => p.handle !== product.handle)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="mb-8 text-xs text-ash">
        <Link href="/shop" className="hover:text-charcoal">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/shop/${category.slug}`} className="hover:text-charcoal">{category.name}</Link>
      </nav>

      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
        <ProductArt product={product} size="hero" />

        <div className="md:sticky md:top-32 md:self-start">
          <p className="sign text-[10px] text-ash">
            {product.maker} · {product.origin}
          </p>
          <h1 className="display mt-4 text-[clamp(1.6rem,3vw,2.4rem)]">{product.title}</h1>
          <p className="mt-4 text-lg tabular-nums">{formatPrice(product.price)}</p>
          {product.edition && (
            <p className="sign mt-3 text-[10px] text-madder">Edition of {product.edition} · SUKASA exclusive</p>
          )}

          <p className="mt-8 leading-relaxed text-charcoal/80">{product.description}</p>

          <div className="mt-8">
            <AddToCart handle={product.handle} sizes={product.sizes} />
          </div>

          <div className="mt-10 border-t border-charcoal pt-5">
            <h2 className="sign text-[11px]">Details</h2>
            <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
              {product.details.map((d) => (
                <li key={d}>— {d}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 border-t border-charcoal/20 pt-5 text-sm text-charcoal/70">
            <p>Free US shipping on orders over {formatPrice(FREE_SHIPPING_THRESHOLD)}.</p>
            <p className="mt-1">Or try it on at the shop on Abbot Kinney.</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="display mb-8 text-2xl">More {category.name.toLowerCase()}</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
