"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import { TCategoriesGroup } from "./Categories/utils/categorizeCategories";
import StaticNavbarItems from "../NavbarHeader/StaticNavbarItems";
import { usePathname } from "next/navigation";
import SearchHeader from "@/components/Features/Products/Search/SearchHeader";

export default function DesktopNavbar({
  categoriesGroup,
}: {
  categoriesGroup: TCategoriesGroup;
}) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowCategories(false);
  }, [pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 15;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;

      // تغییر خیلی کوچک را نادیده بگیر
      if (Math.abs(difference) < threshold) return;

      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (difference > 0) {
        // اسکرول به پایین
        setShowNavbar(false);
      } else {
        // اسکرول به بالا
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <div className="relative">    
    <div
      className={`
        absolute inset-x-0 top-0 bg-white
        transition-all duration-200
        ${showNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
        }
      `}
    >
      <div className="shadow">
        <div className="container-0 relative">
          
          <div className="lg:hidden w-full p-2">
            <SearchHeader />
          </div>

          <nav className="hidden lg:flex items-center justify-between">
            <ul className="flex flex-1 items-center text-[14px]">
              <li
                className="relative mx-5 flex-center cursor-default py-3 hover:text-theme-hover"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <Menu className="me-1 h-5 w-5" />

                <span className="font-bold">
                  دسته بندی ها
                </span>

                {showCategories && (
                  <Categories categoriesGroup={categoriesGroup} />
                )}
              </li>

              <StaticNavbarItems />
            </ul>
          </nav>

        </div>

      </div>
    </div>      
  </div>
);
}
