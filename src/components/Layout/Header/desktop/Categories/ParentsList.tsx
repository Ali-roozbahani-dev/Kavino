"use client";

import Link from "next/link";
import ChildrensCategory from "./ChildrensCategory";
import { TCategoriesGroup } from "./utils/categorizeCategories";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function ParentsList({
  parents,
  children,
}: TCategoriesGroup) {
  const [activeParent, setActiveParent] = useState(parents[0]);

  const activeChildren = children.filter((child) =>
    child.path.some((item) => item.slug === activeParent.slug)
  );

  return (
    <div className="flex min-h-120">
      {/* Parents */}
      <div
        className={`
          scrollbar-custom
          w-64 shrink-0
          overflow-y-auto
          border-l border-gray-100
          ltr
        `}
      >
        <ul className="rtl space-y-1 pe-3">
          {parents.map((parent) => {
            const isActive = activeParent.slug === parent.slug;

            return (
              <li key={parent.id}>
                <Link
                  href={`/category/${parent.slug}`}
                  onMouseEnter={() => setActiveParent(parent)}
                  className={`
                    group relative
                    flex w-full items-center justify-between
                    rounded-xl
                    px-3 py-3
                    text-right
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-theme-3 text-theme"
                        : "text-gray-700 hover:bg-gray-50 hover:text-theme"
                    }
                  `}
                >
                  {/* Active indicator */}
                  <span
                    className={`
                      absolute right-0 top-1/2
                      h-7 -translate-y-1/2
                      rounded-l-full
                      bg-theme
                      transition-all duration-200
                      ${isActive ? "w-1" : "w-0"}
                    `}
                  />

                  <span
                    className={`
                      text-[14px]
                      transition-all duration-200
                      ${isActive ? "font-bold" : "font-medium"}
                    `}
                  >
                    {parent.name}
                  </span>

                  <ChevronLeft
                    size={18}
                    strokeWidth={2.5}
                    className={`
                      transition-all duration-200
                      ${
                        isActive
                          ? "translate-x-0 text-theme opacity-100"
                          : "translate-x-1 text-gray-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Children */}
      <div className="min-w-0 flex-1">
        <ChildrensCategory
          activeParent={activeParent}
          activeChildren={activeChildren}
        />
      </div>
    </div>
  );
}