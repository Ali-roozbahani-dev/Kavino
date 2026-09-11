import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import ChildrenList from "./ChildrenList";
import { CategoryListItem } from "@/entities/Category/types/Category";

interface Tprops {
  activeParent: CategoryListItem;
  activeChildren: CategoryListItem[];
}

export default function ChildrensCategory({
  activeParent,
  activeChildren,
}: Tprops) {
  if (activeChildren.length === 0) return null;

  return (
    <div
      className={`
        scrollbar-custom
        flex-1
        h-120
        overflow-y-auto
        ltr
        px-5 py-4
      `}
    >
      <div className="rtl">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-3">
          <Link
            href={`/category/${activeParent.slug}`}
            className="
              group
              flex items-center
              text-[13px]
              font-bold
              text-theme
              transition-colors
              hover:text-theme-2
            "
          >
            <span>
              همه محصولات {activeParent.name}
            </span>

            <MdChevronLeft
              size={21}
              className="
                ms-1
                transition-transform duration-200
                group-hover:-translate-x-1
              "
            />
          </Link>
        </div>

        {/* Children */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {activeChildren.map((cat) => (
            <ChildrenList
              key={cat.id}
              activeChildren={activeChildren}
              category={cat}
            />
          ))}
        </div>
      </div>
    </div>
  );
}