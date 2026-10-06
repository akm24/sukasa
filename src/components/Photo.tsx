import { assetIfPresent, type AssetKey } from "@/lib/assets";

type Props = { asset: AssetKey; alt: string; className?: string };

// Shows the real photo from /public/images when present; otherwise a
// simplified illustration of the same scene from the design renders.
export function Photo({ asset, alt, className = "" }: Props) {
  const src = assetIfPresent(asset);
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
    );
  }
  return (
    <div role="img" aria-label={alt} className={`relative h-full w-full overflow-hidden ${className}`}>
      {asset === "storefront" && <Storefront />}
      {asset === "interiorRacks" && <Racks />}
      {asset === "interiorLounge" && <Lounge />}
      {asset === "matcha" && <MatchaRoom />}
    </div>
  );
}

function Cactus({ className }: { className: string }) {
  return (
    <div className={`absolute bottom-[18%] flex items-end gap-[3px] ${className}`}>
      {[62, 88, 74, 96, 58, 80].map((h, i) => (
        <div key={i} style={{ height: `${h}%` }} className="w-[14%] rounded-t-full bg-cactus/90" />
      ))}
      <div className="absolute -bottom-[16%] left-[-10%] h-[22%] w-[120%] bg-walnut-light" />
    </div>
  );
}

function Storefront() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(180deg,#2f6fd0_0%,#6aa0e6_55%,#a9c6ec_100%)]">
      {/* plaster facade */}
      <div className="absolute inset-x-[4%] bottom-[16%] top-[34%] bg-[#e7ddcd]">
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0)_30%)]" />
        <p className="sign absolute left-1/2 top-[12%] -translate-x-1/2 text-[clamp(8px,1.4vw,14px)] text-charcoal">
          SUKASA
        </p>
        {/* windows + door */}
        <div className="absolute left-[10%] top-[30%] h-[44%] w-[22%] bg-[#2b2824]">
          <div className="absolute bottom-0 left-[20%] h-[60%] w-[18%] bg-indigo/90" />
          <div className="absolute bottom-0 left-[45%] h-[55%] w-[14%] bg-[#d8cfbf]" />
        </div>
        <div className="absolute left-[42%] top-[30%] h-[70%] w-[16%] bg-[#3a342d]">
          <div className="absolute inset-[8%] bg-[#6b5442]/70" />
        </div>
        <div className="absolute right-[10%] top-[30%] h-[44%] w-[22%] bg-[#2b2824]">
          <div className="absolute bottom-[18%] left-[10%] h-[8%] w-[80%] bg-walnut-light" />
          <p className="sign absolute bottom-[5%] right-[6%] text-[clamp(4px,0.6vw,7px)] text-bone/80">
            Japanese clothing &amp; objects
          </p>
        </div>
        <Cactus className="left-[1%] h-[60%] w-[8%]" />
        <Cactus className="left-[33%] h-[55%] w-[7%]" />
        <Cactus className="left-[60%] h-[58%] w-[7%]" />
        <Cactus className="right-[1%] h-[60%] w-[8%]" />
      </div>
      {/* sidewalk + street */}
      <div className="absolute inset-x-0 bottom-[10%] h-[6%] bg-[#d6d0c6]" />
      <div className="absolute inset-x-0 bottom-0 h-[10%] bg-[#3b3a3c]" />
      {/* palm shadow */}
      <div className="absolute left-[8%] top-[20%] h-[50%] w-[30%] rotate-12 rounded-full bg-charcoal/10 blur-2xl" />
    </div>
  );
}

function Ceiling() {
  return (
    <div className="absolute inset-x-0 top-0 h-[16%] bg-[#f4f1ec]">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} style={{ left: `${i * 10 + 3}%` }} className="absolute top-0 h-full w-[1.2%] bg-[#e3ded6]" />
      ))}
      <div className="absolute bottom-0 h-[3px] w-full bg-[#ddd6cc]" />
    </div>
  );
}

function Racks() {
  const garments = ["#263452", "#2f3d5e", "#3b4b6e", "#e8e1d4", "#d8cfbf", "#5d5e3c", "#6a6b45", "#1f2a44", "#4a5a7a"];
  return (
    <div className="absolute inset-0 bg-[#f1ece4]">
      <Ceiling />
      <p className="sign absolute left-1/2 top-[24%] -translate-x-1/2 text-[clamp(8px,1.2vw,13px)] text-charcoal">
        SUKASA
      </p>
      {/* rail of garments */}
      <div className="absolute left-[8%] right-[8%] top-[38%] h-[2px] bg-[#8b857c]" />
      <div className="absolute left-[9%] right-[9%] top-[39%] flex h-[30%] gap-[1.5%]">
        {Array.from({ length: 22 }).map((_, i) => (
          <div key={i} style={{ background: garments[i % garments.length] }} className="flex-1 rounded-b-sm" />
        ))}
      </div>
      {/* floor + walnut table */}
      <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[#ddd6cb]" />
      <div className="absolute bottom-[12%] left-[18%] right-[18%] h-[9%] bg-walnut shadow-xl" />
      <div className="absolute bottom-[4%] left-[22%] h-[9%] w-[5%] bg-walnut" />
      <div className="absolute bottom-[4%] right-[22%] h-[9%] w-[5%] bg-walnut" />
      <div className="absolute bottom-[21%] left-[26%] h-[5%] w-[12%] bg-indigo" />
      <div className="absolute bottom-[21%] left-[44%] h-[6%] w-[9%] rounded-t-full bg-[#3a2f28]" />
      <div className="absolute bottom-[21%] left-[58%] h-[4%] w-[14%] bg-[#e8e1d4]" />
    </div>
  );
}

function Lounge() {
  return (
    <div className="absolute inset-0 bg-[#f1ece4]">
      <Ceiling />
      {/* shelf with books + vessels */}
      <div className="absolute left-[20%] right-[20%] top-[42%] h-[2.5%] bg-walnut-light" />
      <div className="absolute left-[24%] top-[33%] flex h-[9%] gap-[2px]">
        {["#1f1d1b", "#e8e1d4", "#3a342d", "#d6cfc3", "#1f1d1b"].map((c, i) => (
          <div key={i} style={{ background: c }} className="w-2 sm:w-3" />
        ))}
      </div>
      <div className="absolute left-[50%] top-[35%] h-[7%] w-[3%] rounded-t-full bg-[#2b2724]" />
      <div className="absolute right-[26%] top-[34%] h-[8%] w-[3%] rounded-t-full bg-[#3a342d]" />
      {/* cognac sofa */}
      <div className="absolute bottom-[30%] left-[22%] right-[22%] h-[14%] rounded-md bg-cognac" />
      <div className="absolute bottom-[26%] left-[21%] right-[21%] h-[8%] rounded-md bg-[#87491f]" />
      {/* plant */}
      <div className="absolute bottom-[26%] left-[6%] h-[40%] w-[12%] rounded-full bg-[#4f6b3a]" />
      <div className="absolute bottom-[22%] left-[9%] h-[10%] w-[6%] rounded-b-lg bg-[#6b655d]" />
      {/* floor, rug, table */}
      <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[#ddd6cb]" />
      <div className="absolute bottom-[3%] left-[18%] right-[18%] h-[17%] bg-madder">
        <div className="absolute inset-[10%] border-2 border-dashed border-[#d9b98a]/60" />
      </div>
      <div className="absolute bottom-[9%] left-[36%] right-[36%] h-[6%] bg-walnut shadow-lg" />
    </div>
  );
}

function MatchaRoom() {
  return (
    <div className="absolute inset-0 bg-[#ece5da]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_50%)]" />
      {/* counter */}
      <div className="absolute bottom-0 left-0 right-0 h-[38%] bg-walnut">
        <div className="absolute inset-x-0 top-0 h-[10%] bg-walnut-light" />
      </div>
      {/* bowls + whisk */}
      <div className="absolute bottom-[38%] left-[22%] h-[12%] w-[16%] rounded-b-full bg-[#2f2a26]">
        <div className="absolute inset-x-[8%] top-0 h-[22%] rounded-full bg-[#6c7a3e]" />
      </div>
      <div className="absolute bottom-[38%] left-[46%] h-[10%] w-[13%] rounded-b-full bg-[#c9b99c]" />
      <div className="absolute bottom-[38%] left-[66%] h-[14%] w-[6%] rounded-t-full bg-[#cdbb8f]" />
      <div className="absolute bottom-[38%] left-[64%] h-[3%] w-[10%] bg-[#a8946a]" />
      {/* noren */}
      <div className="absolute left-[30%] right-[30%] top-0 flex h-[30%] gap-1">
        <div className="flex-1 bg-indigo" />
        <div className="flex-1 bg-indigo" />
      </div>
    </div>
  );
}
