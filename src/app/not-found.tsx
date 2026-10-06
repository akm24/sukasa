import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-32 text-center sm:px-6">
      <p className="sign text-[11px] text-ash">404</p>
      <h1 className="display mt-5 text-3xl">Not on the floor.</h1>
      <p className="mt-6 text-charcoal/75">That page has moved or never existed.</p>
      <Link href="/shop" className="sign mt-10 inline-block bg-charcoal px-7 py-4 text-[11px] text-bone hover:bg-walnut">
        Browse the shop
      </Link>
    </div>
  );
}
