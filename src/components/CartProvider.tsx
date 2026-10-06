"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, type Product } from "@/lib/catalog";

export type CartLine = { handle: string; size?: string; quantity: number };
export type ResolvedLine = CartLine & { key: string; product: Product; lineTotal: number };

type CartContextValue = {
  lines: ResolvedLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (handle: string, size?: string, quantity?: number) => void;
  setQuantity: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const STORAGE_KEY = "sukasa.cart.v1";
const CartContext = createContext<CartContextValue | null>(null);

const lineKey = (handle: string, size?: string) => (size ? `${handle}::${size}` : handle);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [raw, setRaw] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setRaw(JSON.parse(stored));
    } catch {
      // Storage unavailable (private mode, blocked); start with an empty bag.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(raw));
    } catch {
      // Ignore write failures; the bag still works for this visit.
    }
  }, [raw, hydrated]);

  const add = useCallback((handle: string, size?: string, quantity = 1) => {
    setRaw((prev) => {
      const key = lineKey(handle, size);
      const existing = prev.find((l) => lineKey(l.handle, l.size) === key);
      if (existing) {
        return prev.map((l) =>
          lineKey(l.handle, l.size) === key ? { ...l, quantity: l.quantity + quantity } : l,
        );
      }
      return [...prev, { handle, size, quantity }];
    });
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setRaw((prev) =>
      quantity <= 0
        ? prev.filter((l) => lineKey(l.handle, l.size) !== key)
        : prev.map((l) => (lineKey(l.handle, l.size) === key ? { ...l, quantity } : l)),
    );
  }, []);

  const remove = useCallback((key: string) => {
    setRaw((prev) => prev.filter((l) => lineKey(l.handle, l.size) !== key));
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const lines: ResolvedLine[] = raw.flatMap((l) => {
      const product = getProduct(l.handle);
      if (!product) return [];
      return [{ ...l, key: lineKey(l.handle, l.size), product, lineTotal: product.price * l.quantity }];
    });
    return {
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: lines.reduce((n, l) => n + l.lineTotal, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      setQuantity,
      remove,
      clear: () => setRaw([]),
    };
  }, [raw, isOpen, add, setQuantity, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
