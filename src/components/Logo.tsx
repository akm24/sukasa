import { assetIfPresent } from "@/lib/assets";

type Props = { className?: string; light?: boolean };

// Uses the real logo file when it is in /public/brand, otherwise a CSS
// recreation of the cast-metal wordmark.
export function Logo({ className = "", light = false }: Props) {
  const src = assetIfPresent("logo");
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt="SUKASA" className={`h-full w-auto ${light ? "invert" : ""} ${className}`} />
    );
  }
  return (
    <span aria-label="SUKASA" className={`wordmark ${light ? "wordmark-light" : ""} ${className}`}>
      SUKASA
    </span>
  );
}
