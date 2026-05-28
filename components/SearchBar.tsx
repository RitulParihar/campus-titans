"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.push(`/colleges?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3 bg-white border border-[var(--border)] rounded-full px-5 py-4">
      <Search size={18} className="text-slate-400" />

      <input
        type="text"
        placeholder="Search colleges..."
        defaultValue={q}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full outline-none bg-transparent text-sm"
      />
    </div>
  );
}