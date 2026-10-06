"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { OrderSummary } from "@/components/OrderSummary";
import { formatPrice } from "@/lib/format";

// Demo checkout: collects details and confirms locally. No payment is taken.
// Replace the submit handler with a Shopify checkout redirect when the
// store is connected.
export default function CheckoutPage() {
  const { lines, clear } = useCart();
  const [order, setOrder] = useState<{ number: string; email: string } | null>(null);

  if (order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <p className="sign text-[11px] text-ash">Order {order.number}</p>
        <h1 className="display mt-5 text-3xl">Thank you.</h1>
        <p className="mt-6 leading-relaxed text-charcoal/75">
          A confirmation will go to {order.email}. This is a preview checkout, so no payment was taken and
          nothing will ship.
        </p>
        <Link href="/shop" className="sign mt-10 inline-block bg-charcoal px-7 py-4 text-[11px] text-bone hover:bg-walnut">
          Keep browsing
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <h1 className="display text-3xl">Nothing to check out.</h1>
        <Link href="/shop" className="sign mt-10 inline-block bg-charcoal px-7 py-4 text-[11px] text-bone hover:bg-walnut">
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="display mb-3 text-[clamp(2rem,5vw,3rem)]">Checkout</h1>
      <p className="mb-10 text-sm text-ash">Preview checkout — no payment will be taken.</p>
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            setOrder({
              number: `SK-${Math.floor(100000 + Math.random() * 900000)}`,
              email: String(data.get("email")),
            });
            clear();
          }}
          className="space-y-10"
        >
          <Fieldset legend="Contact">
            <Field name="email" label="Email" type="email" autoComplete="email" className="sm:col-span-2" />
          </Fieldset>
          <Fieldset legend="Shipping address">
            <Field name="firstName" label="First name" autoComplete="given-name" />
            <Field name="lastName" label="Last name" autoComplete="family-name" />
            <Field name="address" label="Address" autoComplete="street-address" className="sm:col-span-2" />
            <Field name="city" label="City" autoComplete="address-level2" />
            <Field name="state" label="State" autoComplete="address-level1" />
            <Field name="zip" label="ZIP code" autoComplete="postal-code" />
            <Field name="phone" label="Phone (optional)" type="tel" autoComplete="tel" required={false} />
          </Fieldset>
          <button type="submit" className="sign w-full bg-charcoal py-4 text-[11px] text-bone hover:bg-walnut">
            Place order
          </button>
        </form>

        <div className="lg:sticky lg:top-32 lg:self-start">
          <ul className="mb-6 space-y-3 text-sm">
            {lines.map((l) => (
              <li key={l.key} className="flex justify-between gap-4">
                <span>
                  {l.product.title}
                  {l.size && <span className="text-ash"> · {l.size}</span>}
                  {l.quantity > 1 && <span className="text-ash"> × {l.quantity}</span>}
                </span>
                <span className="tabular-nums">{formatPrice(l.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="sign mb-5 text-[11px]">{legend}</legend>
      <div className="grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
  required = true,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs text-ash">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-charcoal/20 bg-bone px-3 py-3 text-sm outline-none focus:border-charcoal"
      />
    </label>
  );
}
