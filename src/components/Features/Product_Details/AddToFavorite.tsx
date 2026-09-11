"use client";

import { Bookmark } from "lucide-react";
import { useState } from "react";

export default function AddToFavorite() {
  const [isAdded, setIsAdded] = useState(false);

return (
    <button
      onClick={() => setIsAdded(!isAdded)}
      className="me-4"
    >
      <Bookmark
        className={`size-5.5 md:size-6.5 ${
          isAdded ? "fill-theme text-theme" : ""
        }`}
      />
    </button>
  );
}