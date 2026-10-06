import type { Metadata } from "next";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Visit",
  description: "SUKASA — a Japanese clothing and objects select shop on Abbot Kinney Boulevard, Venice, California.",
};

export default function VisitPage() {
  return (
    <>
      <div className="aspect-[4/3] w-full sm:aspect-[21/9]">
        <Photo asset="storefront" alt="The SUKASA storefront on Abbot Kinney" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <p className="sign mb-4 text-[11px] text-ash">Visit</p>
          <h1 className="display text-[clamp(2rem,5vw,3.5rem)]">Abbot Kinney, Venice.</h1>
          <p className="mt-6 max-w-md leading-relaxed text-charcoal/75">
            A plaster front, cactus at the door and clear sight lines through to the back room. Come in for a
            gift, leave with a jacket — or just stay for tea.
          </p>
        </div>
        <dl className="grid gap-8 self-end sm:grid-cols-2">
          <div className="border-t border-charcoal pt-4">
            <dt className="sign text-[11px]">Address</dt>
            <dd className="mt-3 text-sm leading-relaxed text-charcoal/80">
              Abbot Kinney Boulevard
              <br />
              Venice, CA 90291
              <br />
              <span className="text-ash">Exact location announced with the pop-up.</span>
            </dd>
          </div>
          <div className="border-t border-charcoal pt-4">
            <dt className="sign text-[11px]">Opening</dt>
            <dd className="mt-3 text-sm leading-relaxed text-charcoal/80">
              Pop-up, spring 2027
              <br />
              Flagship to follow
            </dd>
          </div>
          <div className="border-t border-charcoal pt-4">
            <dt className="sign text-[11px]">Hours</dt>
            <dd className="mt-3 text-sm leading-relaxed text-charcoal/80">
              Daily, 11–7
              <br />
              Matcha bar from 9
            </dd>
          </div>
          <div className="border-t border-charcoal pt-4">
            <dt className="sign text-[11px]">Contact</dt>
            <dd className="mt-3 text-sm leading-relaxed text-charcoal/80">
              Instagram and email
              <br />
              <span className="text-ash">Coming soon</span>
            </dd>
          </div>
        </dl>
      </div>
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2">
        <div className="aspect-[4/3]">
          <Photo asset="interiorRacks" alt="Inside SUKASA: clothing rails and a walnut table" />
        </div>
        <div className="aspect-[4/3]">
          <Photo asset="interiorLounge" alt="Inside SUKASA: the reading corner with a leather sofa" />
        </div>
      </div>
    </>
  );
}
