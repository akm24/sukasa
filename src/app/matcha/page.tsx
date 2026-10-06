import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/Photo";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Matcha bar",
  description: "A quiet ceremonial tea counter in the back room of SUKASA, run with a Japanese tea producer.",
};

// Indicative menu; final pricing set with the producer partner.
const MENU = [
  { section: "Straight", items: [["Usucha", "Ceremonial grade, whisked to order", "8"], ["Koicha", "Thick tea, weekends only", "12"]] },
  { section: "Lattes", items: [["Matcha latte", "Oat or whole milk", "7"], ["Hojicha latte", "Roasted green tea, low caffeine", "6.5"], ["Iced matcha", "Over ice, lightly sweetened on request", "7"]] },
  { section: "Wagashi", items: [["Seasonal wagashi", "Changes with the season", "5"]] },
];

const TOOLS = ["mino-ware-chawan", "bamboo-chasen", "ceremonial-matcha", "copper-tea-canister"];

export default function MatchaPage() {
  return (
    <>
      <section className="bg-olive text-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="sign mb-5 text-[11px] text-bone/70">The back room</p>
            <h1 className="display text-[clamp(2rem,5vw,3.75rem)]">Matcha bar</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/85">
              A quiet ceremonial counter, not a latte line. Run with a Japanese tea producer who supplies, trains
              and co-brands the bar — and doubles as the exhibition room.
            </p>
          </div>
          <div className="aspect-[4/3]">
            <Photo asset="matcha" alt="The SUKASA matcha counter" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="display mb-10 text-2xl">Menu</h2>
        <div className="space-y-12">
          {MENU.map((group) => (
            <div key={group.section}>
              <h3 className="sign border-b border-charcoal pb-3 text-[11px]">{group.section}</h3>
              <ul className="divide-y divide-charcoal/10">
                {group.items.map(([name, note, price]) => (
                  <li key={name} className="flex items-baseline justify-between gap-6 py-4">
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-ash">{note}</p>
                    </div>
                    <p className="tabular-nums">${price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-ash">Menu and prices are indicative ahead of opening.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="display text-2xl">Make it at home</h2>
          <Link href="/shop/objects" className="sign text-[11px] underline">All objects</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {TOOLS.map((h) => getProduct(h)).filter((p) => p !== undefined).map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
