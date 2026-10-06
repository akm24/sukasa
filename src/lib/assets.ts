import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

// Drop real files into /public at these paths and the site picks them up;
// until then the components render styled placeholders.
export const ASSETS = {
  logo: "/brand/sukasa-logo.png",
  storefront: "/images/storefront.jpg",
  interiorRacks: "/images/interior-racks.jpg",
  interiorLounge: "/images/interior-lounge.jpg",
  matcha: "/images/matcha-room.jpg",
} as const;

export type AssetKey = keyof typeof ASSETS;

export function assetIfPresent(key: AssetKey): string | null {
  const src = ASSETS[key];
  return existsSync(path.join(process.cwd(), "public", src)) ? src : null;
}
