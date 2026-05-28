import { MapPin, Star } from "lucide-react";
import { College } from "@/types";
import { formatCurrency } from "@/utils/format";

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({
  college,
}: CollegeCardProps) {
  return (
    <div className="bg-white border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-md transition">

      <div className="h-52 bg-slate-200" />

      <div className="p-6">
        
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {college.name}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={16} />
              <span>{college.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm font-medium">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            {college.rating}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          
          <div>
            <p className="text-sm text-slate-500">
              Starting Fees
            </p>

            <p className="mt-1 text-lg font-semibold">
              {formatCurrency(college.fees)}
            </p>
          </div>

          <button className="text-sm font-medium hover:underline">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}