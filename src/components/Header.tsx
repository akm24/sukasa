import Link from "next/link";
import { Logo } from "./Logo";
import { NAV } from "@/lib/nav";
import { CartButton, MobileNav } from "./HeaderActions";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-charcoal/10 bg-plaster/90 backdrop-blur">
      <div className="bg-charcoal py-2 text-center text-bone">
        <p className="sign text-[10px]">Japanese clothing &amp; objects · Abbot Kinney, Venice</p>
      </div>
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <MobileNav />
        <Link href="/" className="flex h-6 items-center text-lg sm:text-xl lg:order-first">
          <Logo />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="sign text-[11px] hover:text-walnut">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CartButton />
      </div>
    </header>
  );
}
