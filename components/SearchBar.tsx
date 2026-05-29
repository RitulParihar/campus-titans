"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);

  // Debounce effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (query) {
        params.set("q", query);
      } else {
        params.delete("q");
      }

      router.push(`/colleges?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, router, searchParams]);

  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search colleges or locations..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-[var(--border)]
          bg-white
          px-12
          py-4
          text-sm
          outline-none
          transition
          focus:border-slate-400
          focus:ring-2
          focus:ring-slate-200
        "
      />
    </div>
  );
}