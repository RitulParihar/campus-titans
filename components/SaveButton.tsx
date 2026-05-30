"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

interface Props {
  collegeId: string;
}

export default function SaveButton({
  collegeId,
}: Props) {
  const [saved, setSaved] =
    useState(false);

  async function handleSave() {
    const response =
      await fetch(
        "/api/saved/toggle",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            collegeId,
          }),
        }
      );

    if (!response.ok) {
      alert(
        "Please login first."
      );
      return;
    }

    const data =
      await response.json();

    setSaved(data.saved);
  }

  return (
    <button
      onClick={handleSave}
      className="transition"
    >
      <Heart
        size={20}
        className={
          saved
            ? "fill-red-500 text-red-500"
            : "text-slate-400"
        }
      />
    </button>
  );
}