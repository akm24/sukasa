"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { useCart } from "./CartProvider";
import { ProductArt } from "./ProductArt";

export function CartLines({ compact = false }: { compact?: boolean }) {
  const { lines, setQuantity, remove, close } = useCart();

  return (
    <ul className="divide-y divide-charcoal/10">
      {lines.map((line) => (
        <li key={line.key} className="flex gap-4 py-5">
          <Link
            href={`/products/${line.product.handle}`}
            onClick={close}
            className={compact ? "w-20 shrink-0" : "w-24 shrink-0 sm:w-28"}
          >
            <ProductArt product={line.product} size="thumb" />
          </Link>
          <div className="flex flex-1 flex-col justify-between gap-3">
            <div className="flex justify-between gap-4">
              <div>
                <p className="text-sm font-medium">{line.product.title}</p>
                <p className="mt-1 text-xs text-ash">
                  {line.product.maker}
                  {line.size && ` · Size ${line.size}`}
                </p>
              </div>
              <p className="text-sm tabular-nums">{formatPrice(line.lineTotal)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center border border-charcoal/20">
                <button
                  onClick={() => setQuantity(line.key, line.quantity - 1)}
                  className="h-8 w-8 text-sm"
                  aria-label={`Decrease quantity of ${line.product.title}`}
                >
                  −
                </button>
                <span className="w-8 text-center text-sm tabular-nums">{line.quantity}</span>
                <button
                  onClick={() => setQuantity(line.key, line.quantity + 1)}
                  className="h-8 w-8 text-sm"
                  aria-label={`Increase quantity of ${line.product.title}`}
                >
                  +
                </button>
              </div>
              <button onClick={() => remove(line.key)} className="text-xs text-ash underline hover:text-charcoal">
                Remove
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
