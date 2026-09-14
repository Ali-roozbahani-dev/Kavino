import ParentsList from "./ParentsList";
import { TCategoriesGroup } from "./utils/categorizeCategories";

export default function Categories({
  categoriesGroup,
}: {
  categoriesGroup: TCategoriesGroup;
}) {
  return (
    <div
      className="
        absolute right-0 top-full z-49
        hidden md:block
        w-[720px]
        overflow-hidden
        rounded-b-xl rounded-t-md
        border border-gray-200
        bg-white
        shadow-[0_12px_35px_rgba(0,0,0,0.10)]
        animate-in fade-in-0 slide-in-from-top-1
        duration-200
      "
    >
      {/* Accent */}
      <div className="h-1 w-full bg-theme" />

      <div className="p-5">
        <ParentsList
          parents={categoriesGroup.parents}
          children={categoriesGroup.children}
        />
      </div>
    </div>
  );
}
