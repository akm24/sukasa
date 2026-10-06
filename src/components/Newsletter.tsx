"use client";

import { useState } from "react";

// No mailing-list provider is wired up yet; the form confirms locally.
export function Newsletter({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="sign text-xs">Thank you — we&apos;ll write before the doors open.</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Email address"
        className={`flex-1 border-b bg-transparent py-2 text-sm outline-none placeholder:opacity-60 ${
          dark ? "border-bone/50 text-bone" : "border-charcoal/40"
        }`}
      />
      <button
        type="submit"
        className={`sign px-5 py-3 text-[11px] transition-colors ${
          dark ? "bg-bone text-charcoal hover:bg-limestone" : "bg-charcoal text-bone hover:bg-walnut"
        }`}
      >
        Sign up
      </button>
    </form>
  );
}
