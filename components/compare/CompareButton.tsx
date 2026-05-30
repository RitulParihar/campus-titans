"use client";

import { useCompare } from "./CompareContext";

interface CompareButtonProps {
  collegeId: string;
}

export default function CompareButton({
  collegeId,
}: CompareButtonProps) {

  const {
    compareIds,
    addToCompare,
    removeFromCompare,
  } = useCompare();

  const isSelected =
    compareIds.includes(collegeId);

  const handleClick = () => {

    if (isSelected) {
      removeFromCompare(collegeId);
    } else {
      addToCompare(collegeId);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        text-sm
        transition
        hover:text-black
        text-slate-500
      "
    >
      {isSelected
        ? "Remove"
        : "Compare"}
    </button>
  );
}