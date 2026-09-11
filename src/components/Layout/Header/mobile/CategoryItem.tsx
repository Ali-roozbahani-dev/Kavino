"use client";

import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CategoryListItem } from "@/entities/Category/types/Category";

interface Tprops {
  parent: CategoryListItem;
  children: CategoryListItem[];
}

export default function CategoryItem({ parent, children }: Tprops) {
  const targetChildren1 = children.filter(
    (child) =>
      child.path.some((item) => item.slug === parent.path[0].slug) &&
      child.path.length === 2
  );

  if (targetChildren1.length !== 0) {
    return (
      <AccordionItem
        value={parent.slug}
        className="border-b border-gray-100 last:border-b-0"
      >
        <AccordionTrigger
          className="
            px-4 py-4
            text-[15px]
            font-semibold
            text-gray-800
            hover:no-underline
            hover:bg-gray-50
            [&>svg]:size-4
            [&>svg]:text-gray-400
            transition-colors
          "
        >
          <span className="truncate">{parent.name}</span>
        </AccordionTrigger>

        <AccordionContent className="pb-2">
          <div className="mx-3 overflow-hidden rounded-xl bg-gray-50">
            {targetChildren1.map((child, index) => (
              <SheetClose key={child.slug} asChild>
                <Link
                  href={`/category/${child.slug}`}
                  className="
                    flex items-center
                    min-h-11
                    px-4
                    text-[14px]
                    text-gray-600
                    transition-colors
                    active:bg-gray-200
                    hover:bg-gray-100
                  "
                >
                  <span
                    className="
                      me-2
                      size-1.5
                      shrink-0
                      rounded-full
                      bg-gray-300
                    "
                  />

                  <span className="truncate">{child.name}</span>
                </Link>
              </SheetClose>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <SheetClose asChild>
      <Link
        href={`/category/${parent.slug}`}
        className="
          flex items-center
          min-h-14
          px-4
          border-b border-gray-100
          text-[15px]
          font-semibold
          text-gray-800
          transition-colors
          hover:bg-gray-50
          active:bg-gray-100
        "
      >
        <span className="truncate">{parent.name}</span>
      </Link>
    </SheetClose>
  );
}
