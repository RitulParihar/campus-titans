import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 bg-white border border-[var(--border)] rounded-full px-5 py-4">
      <Search size={18} className="text-slate-400" />

      <input
        type="text"
        placeholder="Search colleges..."
        className="w-full outline-none bg-transparent text-sm"
      />
    </div>
  );
}