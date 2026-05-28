"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function FiltersBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [minRating, setMinRating] = useState(
    searchParams.get("minRating") || ""
  );

  const [maxFees, setMaxFees] = useState(
    searchParams.get("maxFees") || ""
  );

  const [location, setLocation] = useState(
    searchParams.get("location") || ""
  );

  const updateFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (minRating) params.set("minRating", minRating);
    else params.delete("minRating");

    if (maxFees) params.set("maxFees", maxFees);
    else params.delete("maxFees");

    if (location) params.set("location", location);
    else params.delete("location");

    router.push(`/colleges?${params.toString()}`);
  };

  const clearFilters = () => {
    setMinRating("");
    setMaxFees("");
    setLocation("");
    router.push("/colleges");
  };

  return (
    <div className="mt-6 flex flex-wrap gap-3 items-center">

      {/* Rating */}
      <select
        value={minRating}
        onChange={(e) => {
          setMinRating(e.target.value);
          setTimeout(updateFilters, 0);
        }}
        className="border rounded-xl px-3 py-2 text-sm"
      >
        <option value="">All Ratings</option>
        <option value="4">4+ ⭐</option>
        <option value="3">3+ ⭐</option>
      </select>

      {/* Fees */}
      <input
        type="number"
        placeholder="Max Fees"
        value={maxFees}
        onChange={(e) => {
          setMaxFees(e.target.value);
          setTimeout(updateFilters, 0);
        }}
        className="border rounded-xl px-3 py-2 text-sm w-32"
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          setTimeout(updateFilters, 0);
        }}
        className="border rounded-xl px-3 py-2 text-sm w-40"
      />

      {/* Clear */}
      <button
        onClick={clearFilters}
        className="px-4 py-2 text-sm rounded-xl bg-black text-white hover:opacity-80"
      >
        Clear
      </button>

    </div>
  );
}