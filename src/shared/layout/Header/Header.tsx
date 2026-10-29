import { getAllCategories } from "@/entities/Category/api/getAllCategories";
import type { CategoryListItem } from "@/entities/Category";
import DesktopHeader from "./desktop/DesktopHeader";
import MobileHeader from "./mobile/MobileHeader";
import { categorizeCategories } from "./desktop/Categories/utils/categorizeCategories";
import DesktopNavbar from "./NavbarHeader/DesktopNavbar";
import { connection } from "next/server";


async function getCategoriesSafe(): Promise<CategoryListItem[]> {
  try {
    return await getAllCategories();
  } catch (error) {
    
    // eslint-disable-next-line no-console
    console.error("Header: failed to load categories", error);
    return [];
  }
}

export default async function Header() {
  await connection();

  const categories = await getCategoriesSafe();
  const categoriesGroup = categorizeCategories(categories);

  return (
    <>
      <header className="sticky top-0 z-49 border-b border-[#ebebeb]  bg-white">
        <div className="hidden lg:block">
          <DesktopHeader />
        </div>

        <div className="lg:hidden">
          <MobileHeader categoriesGroup={categoriesGroup} />
        </div>
      </header>
      <div className="sticky top-[100px] lg:top-[135px] mb-[60px] lg:mb-[50px] z-48">
        <DesktopNavbar categoriesGroup={categoriesGroup} />
      </div>
    </>
  );
}
