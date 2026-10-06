"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { CartLines } from "@/components/CartLines";
import { OrderSummary } from "@/components/OrderSummary";

export default function CartPage() {
  const { lines } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="display mb-10 text-[clamp(2rem,5vw,3rem)]">Your bag</h1>
      {lines.length === 0 ? (
        <div className="border-t border-charcoal/10 py-20 text-center">
          <p className="text-ash">Your bag is empty.</p>
          <Link href="/shop" className="sign mt-8 inline-block bg-charcoal px-7 py-4 text-[11px] text-bone hover:bg-walnut">
            Browse the shop
          </Link>
        </div>
      ) : (
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="border-t border-charcoal/10">
            <CartLines />
          </div>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <OrderSummary />
            <Link
              href="/checkout"
              className="sign mt-6 block bg-charcoal py-4 text-center text-[11px] text-bone hover:bg-walnut"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
