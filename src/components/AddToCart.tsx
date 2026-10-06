"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export function AddToCart({ handle, sizes }: { handle: string; sizes?: string[] }) {
  const { add } = useCart();
  const [size, setSize] = useState<string | undefined>(undefined);
  const [error, setError] = useState(false);

  return (
    <div className="space-y-5">
      {sizes && (
        <fieldset>
          <legend className="sign mb-3 text-[10px] text-ash">Size</legend>
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                aria-pressed={size === s}
                className={`h-11 min-w-11 border px-3 text-sm transition-colors ${
                  size === s
                    ? "border-charcoal bg-charcoal text-bone"
                    : "border-charcoal/25 hover:border-charcoal"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {error && <p className="mt-2 text-xs text-madder">Choose a size first.</p>}
        </fieldset>
      )}
      <button
        type="button"
        onClick={() => {
          if (sizes && !size) {
            setError(true);
            return;
          }
          add(handle, size);
        }}
        className="sign w-full bg-charcoal py-4 text-[11px] text-bone transition-colors hover:bg-walnut"
      >
        Add to bag
      </button>
    </div>
  );
}
