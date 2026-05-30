"use client";

import Link from "next/link";
import { useCompare } from "./CompareContext";

export default function CompareBar() {
  const {
    compareIds,
    clearCompare,
  } = useCompare();

  if (compareIds.length === 0) {
    return null;
  }

  const compareUrl =
    `/compare?ids=${compareIds.join(",")}`;

  return (
    <div
      className="
        fixed
        bottom-6
        left-1/2
        z-50
        -translate-x-1/2
        rounded-2xl
        border
        bg-white/95
        backdrop-blur
        px-6
        py-4
        shadow-xl
      "
    >
      <div className="flex items-center gap-6">

        <div>
          <p className="text-sm text-slate-500">
            Selected
          </p>

          <p className="font-semibold">
            {compareIds.length} College
            {compareIds.length > 1 ? "s" : ""}
          </p>
        </div>

        <Link
          href={compareUrl}
          className="
            rounded-xl
            bg-slate-900
            px-4
            py-2
            text-sm
            text-white
          "
        >
          Compare Now
        </Link>

        <button
          onClick={clearCompare}
          className="
            text-sm
            text-slate-500
            hover:text-black
          "
        >
          Clear
        </button>

      </div>
    </div>
  );
}