import Link from "next/link";
import { CATEGORIES, getProductsByCategory, type Category } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

const SORTS = {
  featured: "Featured",
  "price-asc": "Price, low to high",
  "price-desc": "Price, high to low",
} as const;
type Sort = keyof typeof SORTS;

export function ShopView({ category, sort }: { category?: Category; sort?: string }) {
  const activeSort: Sort = sort && sort in SORTS ? (sort as Sort) : "featured";
  const products = [...getProductsByCategory(category)];
  if (activeSort === "price-asc") products.sort((a, b) => a.price - b.price);
  if (activeSort === "price-desc") products.sort((a, b) => b.price - a.price);

  const meta = CATEGORIES.find((c) => c.slug === category);
  const base = category ? `/shop/${category}` : "/shop";

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <header className="mb-10 max-w-2xl">
        <p className="sign mb-4 text-[11px] text-ash">Shop</p>
        <h1 className="display text-[clamp(2rem,5vw,3.5rem)]">{meta?.name ?? "All pieces"}</h1>
        <p className="mt-5 leading-relaxed text-charcoal/75">
          {meta?.blurb ??
            "Clothing, objects and editions from makers across Japan, bought at the showroom and chosen for daily use."}
        </p>
      </header>

      <div className="mb-10 flex flex-col gap-4 border-y border-charcoal/10 py-4 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Categories" className="flex flex-wrap gap-x-6 gap-y-2">
          <FilterLink href="/shop" active={!category}>All</FilterLink>
          {CATEGORIES.map((c) => (
            <FilterLink key={c.slug} href={`/shop/${c.slug}`} active={category === c.slug}>
              {c.name}
            </FilterLink>
          ))}
        </nav>
        <nav aria-label="Sort" className="flex flex-wrap gap-x-5 gap-y-2">
          {(Object.keys(SORTS) as Sort[]).map((s) => (
            <Link
              key={s}
              href={s === "featured" ? base : `${base}?sort=${s}`}
              className={`text-xs ${activeSort === s ? "text-charcoal underline" : "text-ash hover:text-charcoal"}`}
            >
              {SORTS[s]}
            </Link>
          ))}
        </nav>
      </div>

      <p className="mb-6 text-xs text-ash">{products.length} pieces</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.handle} product={p} />
        ))}
      </div>
    </div>
  );
}

function FilterLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`sign text-[11px] ${active ? "text-charcoal underline underline-offset-4" : "text-ash hover:text-charcoal"}`}
    >
      {children}
    </Link>
  );
}
