"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/nav";
import { useCart } from "./CartProvider";

export function CartButton() {
  const { count, open } = useCart();
  return (
    <button onClick={open} className="sign text-[11px] hover:text-walnut" aria-label={`Open bag, ${count} items`}>
      Bag <span className="tabular-nums">({count})</span>
    </button>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="sign text-[11px]"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-40 border-b border-charcoal/10 bg-bone px-4 py-6"
        >
          <ul className="flex flex-col gap-5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="sign text-xs">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
