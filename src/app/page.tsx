import Link from "next/link";
import { CATEGORIES, getFeatured, getProductsByCategory } from "@/lib/catalog";
import { Photo } from "@/components/Photo";
import { ProductCard } from "@/components/ProductCard";
import { Logo } from "@/components/Logo";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  const featured = getFeatured();

  return (
    <>
      {/* Hero: the storefront */}
      <section className="relative">
        <div className="aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
          <Photo asset="storefront" alt="The SUKASA storefront on Abbot Kinney: plaster facade, cactus planters, open doors" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <div>
              <p className="sign mb-6 text-[11px] text-ash">Abbot Kinney · Venice, California</p>
              <h1 className="display text-[clamp(2rem,6vw,4.5rem)]">
                Things made well in Japan.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
                Clothing, objects and a back-room matcha counter, edited for the Westside. The labels you fly
                to Tokyo for, without the flight.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/shop" className="sign bg-charcoal px-7 py-4 text-[11px] text-bone hover:bg-walnut">
                Shop the edit
              </Link>
              <Link href="/visit" className="sign border border-charcoal px-7 py-4 text-[11px] hover:bg-charcoal hover:text-bone">
                Visit the shop
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three departments */}
      <section className="border-y border-charcoal/10 bg-bone">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className={`group flex flex-col justify-between gap-10 p-8 transition-colors hover:bg-limestone sm:p-10 ${
                i > 0 ? "border-t border-charcoal/10 md:border-l md:border-t-0" : ""
              }`}
            >
              <div>
                <p className="sign mb-4 text-[10px] text-ash">
                  0{i + 1} · {getProductsByCategory(c.slug).length} pieces
                </p>
                <h2 className="display text-2xl">{c.name}</h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{c.blurb}</p>
              </div>
              <span className="sign text-[10px] group-hover:underline">Shop {c.name.toLowerCase()} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="sign mb-3 text-[11px] text-ash">On the plinth</p>
            <h2 className="display text-3xl">The first edit</h2>
          </div>
          <Link href="/shop" className="sign hidden text-[11px] underline sm:block">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {featured.slice(0, 8).map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </section>

      {/* Interior */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="aspect-[4/3]">
            <Photo asset="interiorRacks" alt="Inside SUKASA: denim and olive on steel rails, a walnut table with folded jeans and ceramics" />
          </div>
          <div className="aspect-[4/3]">
            <Photo asset="interiorLounge" alt="The SUKASA reading corner: cognac leather sofa, a red rug, a walnut shelf of books and vessels" />
          </div>
        </div>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          {[
            ["Material", "Plaster, walnut and stone, kept quiet so the product reads first."],
            ["Flex", "Movable tables and rails, so the floor resets for each exhibition."],
            ["Stay a while", "A leather sofa, a shelf of books and a back-room tea counter. No rush."],
          ].map(([title, body]) => (
            <div key={title} className="border-t border-charcoal pt-5">
              <h3 className="sign text-xs">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Matcha */}
      <section className="bg-olive text-bone">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div className="aspect-square md:aspect-[4/5]">
            <Photo asset="matcha" alt="The back-room matcha counter: walnut bar, chawan and bamboo whisk under an indigo noren" />
          </div>
          <div>
            <p className="sign mb-5 text-[11px] text-bone/70">The back room</p>
            <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">A tea counter, run with a Japanese producer.</h2>
            <p className="mt-6 max-w-md leading-relaxed text-bone/85">
              Whisked usucha, a few lattes and seasonal wagashi. Ceremonial grade for straight tea. Every cup
              is made with the bowls and whisks sold out front.
            </p>
            <Link href="/matcha" className="sign mt-8 inline-block border border-bone px-7 py-4 text-[11px] hover:bg-bone hover:text-olive">
              See the menu
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 pt-24 text-center sm:px-6">
        <div className="mx-auto mb-8 h-10 text-3xl sm:text-4xl">
          <Logo />
        </div>
        <p className="mx-auto max-w-lg text-charcoal/75">
          The pop-up opens on Abbot Kinney in spring 2027. Sign up for opening dates, new arrivals and the
          exhibition calendar.
        </p>
        <div className="mt-8 flex justify-center">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
