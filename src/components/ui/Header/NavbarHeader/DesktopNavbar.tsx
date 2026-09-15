"use client";

import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Categories from "../desktop/Categories/Categories";
import { TCategoriesGroup } from "../desktop/Categories/utils/categorizeCategories";
import StaticNavbarItems from "./StaticNavbarItems";
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
  const navBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowCategories(false);
  }, [pathname]);

  // اسکرول هندلر قبلی بدون تغییر...
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 15;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY;
      if (Math.abs(difference) < threshold) return;

      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (difference > 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const updateHeight = () => {
      const height = navBoxRef.current?.offsetHeight ?? 0;

      // مقدار پایه‌ای که الان با توجه به breakpoint فعاله رو می‌خونیم
      const baseOffset = getComputedStyle(document.documentElement)
        .getPropertyValue("--base-offset")
        .trim();

      document.documentElement.style.setProperty(
        "--navbar-height",
        showNavbar ? `calc(${baseOffset} + ${height - 3}px)` : baseOffset
      );
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [showNavbar]);

  return (
    <div className="relative">
      <div
        className={`
          absolute inset-x-0 top-0 bg-white z-50
          transition-all duration-200
          ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        {/* این div همونیه که ارتفاعش رو اندازه می‌گیریم */}
        <div className="shadow" ref={navBoxRef}>
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
                  <span className="font-bold">دسته بندی ها</span>
                  {showCategories && <Categories categoriesGroup={categoriesGroup} />}
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