"use client";

import { FLAT_SHIPPING, FREE_SHIPPING_THRESHOLD } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { useCart } from "./CartProvider";

export function shippingFor(subtotal: number) {
  return subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : FLAT_SHIPPING;
}

export function OrderSummary() {
  const { subtotal } = useCart();
  const shipping = shippingFor(subtotal);

  return (
    <div className="bg-bone p-6">
      <h2 className="sign mb-5 text-[11px]">Summary</h2>
      <dl className="space-y-3 text-sm">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Shipping</dt>
          <dd className="tabular-nums">{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
        </div>
        <div className="flex justify-between text-ash">
          <dt>Tax</dt>
          <dd>Calculated at payment</dd>
        </div>
        <div className="flex justify-between border-t border-charcoal/15 pt-3 font-medium">
          <dt>Total</dt>
          <dd className="tabular-nums">{formatPrice(subtotal + shipping)}</dd>
        </div>
      </dl>
    </div>
  );
}
