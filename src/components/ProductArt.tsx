import type { Product } from "@/lib/catalog";

// Placeholder product imagery: the piece sits on a walnut plinth against
// plaster, the way product is displayed in the shop renders.
export function ProductArt({ product, size = "card" }: { product: Product; size?: "card" | "hero" | "thumb" }) {
  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden bg-limestone"
      role="img"
      aria-label={`${product.title} — image coming soon`}
    >
      {/* soft window light across the wall */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_45%)]" />
      {/* floor */}
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[#d9d1c4]" />
      {/* plinth */}
      <div className="absolute bottom-[12%] left-1/2 h-[18%] w-[62%] -translate-x-1/2 bg-walnut shadow-[0_18px_30px_-12px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-x-0 top-0 h-[14%] bg-walnut-light/60" />
      </div>
      {/* the piece */}
      <Shape product={product} />
      {size !== "thumb" && (
        <span className="sign absolute left-3 top-3 text-[9px] text-charcoal/50">{product.origin}</span>
      )}
    </div>
  );
}

function Shape({ product }: { product: Product }) {
  const tone = product.tone;
  const edge = isLight(tone) ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.08)";
  const place = "absolute bottom-[30%] left-1/2 -translate-x-1/2";
  if (product.category === "clothing") {
    // a folded stack
    return (
      <div className={`${place} flex w-[52%] flex-col items-center`}>
        {[0.88, 0.94, 1].map((w, i) => (
          <div
            key={i}
            style={{ background: tone, width: `${w * 100}%`, boxShadow: `inset 0 -2px 0 ${edge}` }}
            className="aspect-[7/1] rounded-[3px]"
          />
        ))}
      </div>
    );
  }
  if (product.category === "objects") {
    // a bowl / vessel
    return (
      <div className={`${place} flex w-[40%] flex-col items-center`}>
        <div
          style={{ background: tone, boxShadow: `inset 0 6px 0 ${edge}` }}
          className="aspect-[2/1] w-full rounded-b-[999px] rounded-t-md"
        />
        <div style={{ background: tone }} className="aspect-[6/1] w-[40%] rounded-b-sm opacity-90" />
      </div>
    );
  }
  // editions: a book / folded cloth with a mark
  return (
    <div
      style={{ background: tone, boxShadow: `inset 0 0 0 1px ${edge}` }}
      className={`${place} flex aspect-[5/6] w-[34%] items-center justify-center overflow-hidden`}
    >
      <span
        className={`display text-[8px] tracking-[0.35em] ${isLight(tone) ? "text-charcoal/70" : "text-bone/80"}`}
      >
        SUKASA
      </span>
    </div>
  );
}

function isLight(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 170;
}
