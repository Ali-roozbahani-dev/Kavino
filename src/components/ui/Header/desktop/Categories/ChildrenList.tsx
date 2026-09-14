import { CategoryListItem } from "@/entities/Category/types/Category";
import Link from "next/link";

interface Tprops {
  category: CategoryListItem;
  activeChildren: CategoryListItem[];
}

export default function ChildrenList({ activeChildren, category }: Tprops) {
  const thirdLevel = activeChildren.filter((item) => {
    if (item.path.length !== category.path.length + 1) return false;

    return category.path.every(
      (segment, index) => segment.slug === item.path[index].slug,
    );
  });

  console.log(thirdLevel)

  return (
    <ul className="mb-5 h-max">
      <li>
        <Link
          target="blank"
          href={`/category/${category.path
          .map((item) => item.slug)
          .reverse()
          .join("/")}`}
          className="block px-2 py-2 text-black rounded-xl
          hover:bg-theme-2 hover:font-semibold hover:text-white w-full"
        >
          <span className="font-bold text-[15px]">{category.name}</span>
        </Link>
      </li>
      {thirdLevel.map((cat) => (
        <li key={cat.id} className="w-full">
          <Link
            target="blank"
            href={`/category/${cat.path
            .map((item)=> item.slug)
            .reverse()
            .join("/")}`}
            className="block px-2 py-2 text-[14px] rounded-xl
            text-primary-text hover:bg-theme-2 hover:font-semibold hover:text-white"
          >
            <span className="text-[14px]">{cat.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
