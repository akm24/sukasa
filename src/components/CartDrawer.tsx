"use client";

import Link from "next/link";
import { useEffect } from "react";
import { formatPrice } from "@/lib/format";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/catalog";
import { useCart } from "./CartProvider";
import { CartLines } from "./CartLines";

export function CartDrawer() {
  const { isOpen, close, lines, subtotal } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div
        onClick={close}
        className={`absolute inset-0 bg-charcoal/30 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-bone shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
          <p className="sign text-xs">Your bag</p>
          <button onClick={close} className="sign text-[11px] text-ash hover:text-charcoal">
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6">
          {lines.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-ash">Your bag is empty.</p>
              <Link href="/shop" onClick={close} className="sign mt-6 inline-block text-[11px] underline">
                Browse the shop
              </Link>
            </div>
          ) : (
            <CartLines compact />
          )}
        </div>
        {lines.length > 0 && (
          <div className="space-y-4 border-t border-charcoal/10 px-6 py-6">
            <p className="text-xs text-ash">
              {remaining > 0
                ? `${formatPrice(remaining)} away from free shipping.`
                : "Your order ships free."}
            </p>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={close}
              className="sign block bg-charcoal py-4 text-center text-[11px] text-bone hover:bg-walnut"
            >
              Checkout
            </Link>
            <Link href="/cart" onClick={close} className="sign block text-center text-[10px] text-ash underline">
              View bag
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
