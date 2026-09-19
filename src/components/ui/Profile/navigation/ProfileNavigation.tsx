"use client";

import {
  Heart,
  LogOut,
  MapPin,
  MessageSquare,
  Package,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogOutBtn from "./LogOutBtn";
import { LogoutDialog } from "@/components/Features/Auth";

const navigationItems = [
  {
    title: "حساب کاربری",
    href: "/profile",
    icon: User,
  },
  {
    title: "سفارش‌های من",
    href: "/profile/orders",
    icon: Package,
  },
  {
    title: "علاقه‌مندی‌ها",
    href: "/profile/favorites",
    icon: Heart,
  },
  {
    title: "آدرس‌ها",
    href: "/profile/addresses",
    icon: MapPin,
  },
  {
    title: "نظرات من",
    href: "/profile/comments",
    icon: MessageSquare,
  },
];

export default function ProfileNavigation() {
  const pathname = usePathname();

  return (
    <nav className="rounded-xl border bg-background p-2 lg:sticky top-[190px] right-0">
      <div className="mb-2 px-3 py-3">
        <p className="text-sm font-semibold">حساب کاربری</p>

        <p className="mt-1 text-xs text-muted-foreground">
          مدیریت حساب و سفارش‌ها
        </p>
      </div>

      <div className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 font-bold text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon
                className={`size-4 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-2 border-t pt-2">
        <LogoutDialog>
            <LogOutBtn />
        </LogoutDialog>       
      </div>
    </nav>
  );
}
