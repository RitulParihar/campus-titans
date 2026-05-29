"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ActiveFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = [
    {
      key: "q",
      label: `Search: ${searchParams.get("q")}`,
    },
    {
      key: "minRating",
      label: `⭐ ${searchParams.get("minRating")}+`,
    },
    {
      key: "maxFees",
      label: `💰 Under ₹${searchParams.get("maxFees")}`,
    },
    {
      key: "location",
      label: `📍 ${searchParams.get("location")}`,
    },
  ].filter(
    (item) =>
      searchParams.get(item.key) &&
      searchParams.get(item.key) !== ""
  );

  const removeFilter = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(key);

    router.push(`/colleges?${params.toString()}`);
  };

  const clearAll = () => {
    router.push("/colleges");
  };

  if (filters.length === 0) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">

      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => removeFilter(filter.key)}
          className="
            rounded-full
            border
            border-slate-300
            bg-white
            px-4
            py-2
            text-sm
            hover:bg-slate-100
            transition
          "
        >
          {filter.label} ✕
        </button>
      ))}

      <button
        onClick={clearAll}
        className="text-sm text-slate-500 hover:text-black"
      >
        Clear All
      </button>

    </div>
  );
}