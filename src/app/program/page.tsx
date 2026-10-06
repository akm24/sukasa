import type { Metadata } from "next";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Program",
  description: "Trunk shows, tea sessions, maker exhibitions and brand launches at SUKASA on Abbot Kinney.",
};

const PROGRAM = [
  {
    when: "Spring 2027",
    kind: "Opening",
    title: "SUKASA pop-up on Abbot Kinney",
    body: "Sixty to ninety days on the boulevard: the first clothing edit, the objects tables and the matcha counter.",
  },
  {
    when: "Monthly",
    kind: "Exhibition",
    title: "Maker in residence",
    body: "A rotating exhibition in the back room — a ceramicist, a dye house, a paper maker — with pieces available to buy.",
  },
  {
    when: "Seasonal",
    kind: "Trunk show",
    title: "Labels from the Tokyo showroom",
    body: "Full collections brought over from showroom week, for one weekend only. Order pieces we don't stock.",
  },
  {
    when: "Weekends",
    kind: "Tea",
    title: "Koicha sessions",
    body: "Small seated sessions at the counter with our producer partner. Thick tea, seasonal wagashi, ten seats.",
  },
];

export default function ProgramPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <header className="mb-14 max-w-2xl">
        <p className="sign mb-4 text-[11px] text-ash">Program</p>
        <h1 className="display text-[clamp(2rem,5vw,3.5rem)]">The reason to come back every week.</h1>
        <p className="mt-6 leading-relaxed text-charcoal/75">
          Tables and rails move, so the floor resets for each exhibition. Dates are announced to the mailing list
          first.
        </p>
      </header>

      <ol className="border-t border-charcoal">
        {PROGRAM.map((item) => (
          <li
            key={item.title}
            className="grid gap-3 border-b border-charcoal/15 py-8 md:grid-cols-[180px_1fr_1.4fr] md:gap-10"
          >
            <div>
              <p className="sign text-[11px]">{item.when}</p>
              <p className="sign mt-1 text-[10px] text-madder">{item.kind}</p>
            </div>
            <h2 className="text-xl font-medium">{item.title}</h2>
            <p className="leading-relaxed text-charcoal/75">{item.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 flex flex-col gap-6 bg-walnut p-8 text-bone sm:p-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="display text-xl">Hear about dates first</h2>
          <p className="mt-2 text-sm text-bone/75">Exhibitions, trunk shows and tea sessions.</p>
        </div>
        <Newsletter dark />
      </div>
    </div>
  );
}
