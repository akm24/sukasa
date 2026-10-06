import Link from "next/link";
import { Logo } from "./Logo";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="mt-24 bg-walnut text-bone">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="h-8 text-2xl">
            <Logo light />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone/80">
            Things made well in Japan, edited for the Westside. Clothing, objects and a back-room matcha
            counter on Abbot Kinney Boulevard.
          </p>
          <Newsletter dark />
        </div>
        <div>
          <p className="sign mb-4 text-[11px] text-bone/60">Shop</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop/clothing" className="hover:underline">Clothing</Link></li>
            <li><Link href="/shop/objects" className="hover:underline">Objects</Link></li>
            <li><Link href="/shop/editions" className="hover:underline">Editions</Link></li>
            <li><Link href="/cart" className="hover:underline">Bag</Link></li>
          </ul>
        </div>
        <div>
          <p className="sign mb-4 text-[11px] text-bone/60">The shop</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/matcha" className="hover:underline">Matcha bar</Link></li>
            <li><Link href="/program" className="hover:underline">Program</Link></li>
            <li><Link href="/visit" className="hover:underline">Visit</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-bone/60 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} SUKASA · A MOKA Brands Group concept</p>
          <p className="sign text-[10px]">Abbot Kinney · Venice, California</p>
        </div>
      </div>
    </footer>
  );
}
