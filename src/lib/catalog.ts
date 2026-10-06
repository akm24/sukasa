// Placeholder catalog. Product names, makers and prices are stand-ins until
// brand commitments are confirmed; swap this module for a Shopify Storefront
// API query without changing the page components.

export type Category = "clothing" | "objects" | "editions";

export type Product = {
  handle: string;
  title: string;
  category: Category;
  maker: string;
  origin: string;
  price: number;
  description: string;
  details: string[];
  sizes?: string[];
  // Background tone for the placeholder product image.
  tone: string;
  // Limited run size, for editions.
  edition?: number;
  featured?: boolean;
};

export const CATEGORIES: { slug: Category; name: string; blurb: string }[] = [
  {
    slug: "clothing",
    name: "Clothing",
    blurb:
      "Material-led Japanese menswear and womenswear — the labels the Westside currently flies to Tokyo to buy.",
  },
  {
    slug: "objects",
    name: "Objects",
    blurb:
      "Ceramics, tea, kitchen, bath and stationery. Daily-use pieces that turn the clothing into a way of living.",
  },
  {
    slug: "editions",
    name: "Editions",
    blurb:
      "SUKASA exclusives, capsule collaborations and books. Made in small runs, sold only here and online.",
  },
];

export const PRODUCTS: Product[] = [
  // Clothing
  {
    handle: "superfine-wool-crewneck",
    title: "Super-fine Wool Crewneck",
    category: "clothing",
    maker: "Knitwear workshop",
    origin: "Yamagata",
    price: 420,
    description:
      "A close-gauge crewneck knitted slowly on vintage machines from a dry, super-fine merino. Light enough to layer, dense enough to wear alone.",
    details: ["100% super-fine merino wool", "Linked collar and cuffs", "Hand wash cold, dry flat"],
    sizes: ["1", "2", "3", "4"],
    tone: "#8C7B68",
    featured: true,
  },
  {
    handle: "selvedge-work-jacket",
    title: "Selvedge Denim Work Jacket",
    category: "clothing",
    maker: "Denim mill & sewing house",
    origin: "Okayama",
    price: 480,
    description:
      "A boxy work jacket cut from 14 oz rope-dyed selvedge, woven on shuttle looms. Unwashed, so it fades to the wearer.",
    details: ["14 oz rope-dyed selvedge denim", "Chain-stitched seams", "Corozo buttons"],
    sizes: ["1", "2", "3", "4"],
    tone: "#2F3B55",
    featured: true,
  },
  {
    handle: "washed-linen-band-collar-shirt",
    title: "Washed Linen Band-collar Shirt",
    category: "clothing",
    maker: "Shirt maker",
    origin: "Shizuoka",
    price: 260,
    description:
      "A relaxed band-collar shirt in a garment-washed linen that softens with each wear. Made for warm Westside evenings.",
    details: ["100% linen", "Garment washed", "Mother-of-pearl buttons"],
    sizes: ["1", "2", "3", "4"],
    tone: "#D8CFBF",
  },
  {
    handle: "wide-leg-cotton-chino",
    title: "Wide-leg Cotton Chino",
    category: "clothing",
    maker: "Trouser workshop",
    origin: "Kojima",
    price: 295,
    description:
      "A high-rise, wide-leg chino in a dense West Point twill with a soft hand. Two front pleats, a clean straight drop.",
    details: ["100% cotton twill", "Double pleat", "Button fly"],
    sizes: ["1", "2", "3", "4"],
    tone: "#B49E7E",
  },
  {
    handle: "sashiko-chore-coat",
    title: "Sashiko Chore Coat",
    category: "clothing",
    maker: "Indigo dye house",
    origin: "Tokushima",
    price: 640,
    description:
      "A chore coat in hand-dyed indigo sashiko cloth. The quilted weave was built for farm work; it wears in for decades.",
    details: ["100% cotton sashiko", "Natural indigo, hand dyed", "Dye may transfer when new"],
    sizes: ["1", "2", "3"],
    tone: "#2B3A5C",
    featured: true,
  },
  {
    handle: "ribbed-merino-tank",
    title: "Ribbed Merino Tank",
    category: "clothing",
    maker: "Knitwear workshop",
    origin: "Wakayama",
    price: 180,
    description:
      "A fine-rib tank knitted on loopwheel machines. Close to the body, breathable, and soft enough to sleep in.",
    details: ["100% merino wool", "Loopwheel knit", "Machine wash cold, wool cycle"],
    sizes: ["0", "1", "2"],
    tone: "#E2D9CB",
  },
  {
    handle: "pleated-wool-skirt",
    title: "Pleated Wool Skirt",
    category: "clothing",
    maker: "Tailoring atelier",
    origin: "Osaka",
    price: 390,
    description:
      "A midi skirt in tropical wool, knife-pleated and heat-set so the pleats hold. Moves well, packs flat.",
    details: ["100% tropical wool", "Permanent pleats", "Side zip"],
    sizes: ["0", "1", "2"],
    tone: "#5A5248",
  },
  {
    handle: "kapok-liner-vest",
    title: "Kapok Liner Vest",
    category: "clothing",
    maker: "Outerwear workshop",
    origin: "Tokyo",
    price: 340,
    description:
      "A quilted liner vest filled with kapok, a plant fibre that is lighter than down and naturally water-resistant.",
    details: ["Shell: nylon taffeta", "Fill: 100% kapok", "Snap front"],
    sizes: ["1", "2", "3", "4"],
    tone: "#6E655A",
  },

  // Objects
  {
    handle: "mino-ware-chawan",
    title: "Mino-ware Chawan",
    category: "objects",
    maker: "Ceramic studio",
    origin: "Gifu",
    price: 95,
    description:
      "A matcha bowl thrown and glazed by hand. Wide enough to whisk properly, heavy enough to hold warm. Each glaze pools differently.",
    details: ["Stoneware, ash glaze", "Approx. 12 cm diameter", "Hand wash"],
    tone: "#A8432C",
    featured: true,
  },
  {
    handle: "bamboo-chasen",
    title: "Bamboo Chasen",
    category: "objects",
    maker: "Whisk maker",
    origin: "Takayama, Nara",
    price: 38,
    description:
      "A 100-prong whisk split and shaped from a single piece of bamboo. The same whisk used at the SUKASA matcha bar.",
    details: ["Single-piece bamboo", "100 prongs", "Rinse and air dry on a stand"],
    tone: "#CDBB8F",
  },
  {
    handle: "copper-tea-canister",
    title: "Copper Tea Canister",
    category: "objects",
    maker: "Metalworks",
    origin: "Kyoto",
    price: 140,
    description:
      "A hand-raised copper caddy with an inner lid that seals by its own weight. Darkens to a deep brown over the years.",
    details: ["Copper, unlacquered", "Holds approx. 100 g of tea", "Wipe dry; patinas with use"],
    tone: "#9A5A3C",
    featured: true,
  },
  {
    handle: "tokoname-kyusu",
    title: "Tokoname Kyusu",
    category: "objects",
    maker: "Teapot kiln",
    origin: "Aichi",
    price: 120,
    description:
      "A side-handled teapot in unglazed red clay with a built-in ceramic mesh. Made for sencha and hojicha.",
    details: ["Unglazed shudei clay", "Approx. 300 ml", "Rinse only, no soap"],
    tone: "#8A3E2A",
  },
  {
    handle: "sakai-santoku",
    title: "Sakai Santoku",
    category: "objects",
    maker: "Blacksmith",
    origin: "Sakai, Osaka",
    price: 210,
    description:
      "An all-purpose kitchen knife forged in a carbon-steel core clad in softer iron. Sharp, light and easy to keep that way.",
    details: ["Blue steel core, iron clad", "165 mm blade", "Magnolia handle"],
    tone: "#3D3A36",
  },
  {
    handle: "hinoki-bath-mat",
    title: "Hinoki Bath Mat",
    category: "objects",
    maker: "Woodworking studio",
    origin: "Nagano",
    price: 85,
    description:
      "Slatted cypress that drains fast and smells like a ryokan bath every time it gets wet.",
    details: ["Japanese hinoki cypress", "60 × 40 cm", "Stand upright to dry"],
    tone: "#D9C39A",
  },
  {
    handle: "linen-kitchen-cloths",
    title: "Linen Kitchen Cloths, Set of 2",
    category: "objects",
    maker: "Weaving mill",
    origin: "Shiga",
    price: 34,
    description: "Absorbent, quick-drying linen cloths for drying glasses, wrapping bread or covering a bowl.",
    details: ["100% linen", "50 × 70 cm", "Machine washable"],
    tone: "#C9C1B2",
  },
  {
    handle: "washi-notebook-set",
    title: "Washi Notebook Set",
    category: "objects",
    maker: "Paper maker",
    origin: "Echizen, Fukui",
    price: 28,
    description: "Three thread-bound notebooks in handmade washi. Takes fountain pen ink without bleed.",
    details: ["Handmade washi", "A6, 48 pages each", "Set of 3"],
    tone: "#EDE6D8",
  },
  {
    handle: "ceremonial-matcha",
    title: "Ceremonial Matcha, 30 g",
    category: "objects",
    maker: "Tea producer partner",
    origin: "Uji, Kyoto",
    price: 42,
    description:
      "The first-harvest matcha served straight at the back-room counter. Stone-milled, bright green, sweet with no bitterness.",
    details: ["First-harvest tencha, stone-milled", "30 g tin", "Keep sealed and refrigerated once opened"],
    tone: "#6C7A3E",
    featured: true,
  },

  // Editions
  {
    handle: "sukasa-noren",
    title: "SUKASA Noren",
    category: "editions",
    maker: "SUKASA × indigo dye house",
    origin: "Tokushima",
    price: 220,
    description:
      "The doorway curtain that hangs at the SUKASA threshold, hand-dyed in natural indigo with the shop mark resisted in white.",
    details: ["Hemp-cotton blend", "90 × 150 cm, two panels", "Edition of 50"],
    tone: "#253350",
    edition: 50,
    featured: true,
  },
  {
    handle: "pop-up-tee",
    title: "Abbot Kinney Pop-up Tee",
    category: "editions",
    maker: "SUKASA × loopwheel knitter",
    origin: "Wakayama",
    price: 75,
    description:
      "A heavyweight loopwheel tee made for the Abbot Kinney pop-up. Printed with the pop-up dates on the back.",
    details: ["100% cotton, loopwheel jersey", "Tubular body, no side seams", "Edition of 200"],
    sizes: ["S", "M", "L", "XL"],
    tone: "#F1EDE6",
    edition: 200,
  },
  {
    handle: "venice-tokyo-zine",
    title: "Venice / Tokyo Zine",
    category: "editions",
    maker: "SUKASA",
    origin: "Printed in Tokyo",
    price: 40,
    description:
      "A riso-printed photo zine pairing Venice storefronts with the Tokyo shops that inspired SUKASA.",
    details: ["64 pages, riso print", "Japanese binding", "Edition of 300"],
    tone: "#A8432C",
    edition: 300,
  },
];

export function getProduct(handle: string): Product | undefined {
  return PRODUCTS.find((p) => p.handle === handle);
}

export function getProductsByCategory(category?: Category): Product[] {
  return category ? PRODUCTS.filter((p) => p.category === category) : PRODUCTS;
}

export function getFeatured(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function isCategory(value: string): value is Category {
  return CATEGORIES.some((c) => c.slug === value);
}

export const FREE_SHIPPING_THRESHOLD = 250;
export const FLAT_SHIPPING = 12;
