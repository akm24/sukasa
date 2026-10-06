import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <div className="transition-opacity group-hover:opacity-90">
        <ProductArt product={product} />
      </div>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium leading-snug">{product.title}</p>
          <p className="mt-1 text-xs text-ash">
            {product.maker} · {product.origin}
          </p>
        </div>
        <p className="shrink-0 text-sm tabular-nums">{formatPrice(product.price)}</p>
      </div>
      {product.edition && (
        <p className="sign mt-2 text-[9px] text-madder">Edition of {product.edition}</p>
      )}
    </Link>
  );
}
