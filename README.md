# SUKASA

Ecommerce site for **SUKASA** — a Japanese clothing and objects select shop on Abbot Kinney, Venice (a MOKA Brands Group concept).

The look is taken from the Abbot Kinney interior and storefront renders: limestone plaster, white-washed beams, walnut plinths, raw indigo, olive, cognac leather, the madder-red rug and the heavy, wide-spaced SUKASA wordmark.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## What's here

| Route | What it is |
| --- | --- |
| `/` | Storefront hero, the three departments, featured edit, interior, matcha bar, sign-up |
| `/shop`, `/shop/[clothing\|objects\|editions]` | Catalog with category filter and price sort |
| `/products/[handle]` | Product page with size picker and add to bag |
| `/cart`, `/checkout` | Bag (also a slide-out drawer) and a **preview** checkout — no payment is taken |
| `/matcha` | Back-room tea counter and menu |
| `/program` | Exhibitions, trunk shows, tea sessions |
| `/visit` | Location, opening, hours |

The bag persists in the browser via `localStorage`.

## Adding your real images

Drop files at these paths and they replace the illustrated placeholders automatically (rebuild after adding):

| File | Used for |
| --- | --- |
| `public/brand/sukasa-logo.png` | Header/footer logo (transparent PNG; a CSS recreation is used until then) |
| `public/images/storefront.jpg` | Home hero and Visit page |
| `public/images/interior-racks.jpg` | Interior — rails and walnut table |
| `public/images/interior-lounge.jpg` | Interior — leather sofa and rug |
| `public/images/matcha-room.jpg` | Matcha bar |

## Catalog

Products live in `src/lib/catalog.ts`. Names, makers and prices are **placeholders** until brand commitments are confirmed. The module's helpers (`getProduct`, `getProductsByCategory`, `getFeatured`) are the seam for swapping in the Shopify Storefront API; checkout's submit handler in `src/app/checkout/page.tsx` is where a Shopify checkout redirect would go.

The newsletter form confirms locally — no mailing-list provider is connected yet.
