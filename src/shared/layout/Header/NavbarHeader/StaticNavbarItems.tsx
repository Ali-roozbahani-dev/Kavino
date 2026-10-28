import Link from "next/link";
import { staticNavbarItems } from "./StaticList";

export default function StaticNavbarItems() {
  return (
    <div className="mt-3 lg:mt-0 border-t lg:border-0 border-gray-100 pt-3 lg:pt-0">
      <ul className="space-y-1 lg:space-y-0">
        {staticNavbarItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.title} className="lg:inline-block">
              <Link
                href={item.href}
                className="
                  group
                  flex items-center
                  min-h-12
                  px-4
                  rounded-xl
                  text-[14px]
                  font-medium
                  text-gray-700
                  transition-all duration-200
                  hover:bg-gray-50
                  hover:text-theme
                  active:bg-gray-100
                "
              >
                <span
                  className="
                    me-1.5
                    flex size-9 shrink-0
                    items-center justify-center
                    rounded-lg
                    bg-gray-50
                    text-gray-500
                    transition-colors duration-200
                    group-hover:bg-theme-3
                    group-hover:text-theme
                  "
                >
                  <Icon
                    strokeWidth={1.8}
                    className="size-[18px]"
                  />
                </span>

                <span className="truncate">
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}