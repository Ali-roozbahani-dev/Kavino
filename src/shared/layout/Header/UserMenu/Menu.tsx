import Link from "next/link";
import { Package, User } from "lucide-react";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import LogoutDialog from "@/Features/Auth/Logout/LogoutDialog";

export default function Menu() {
  return (
    <>
      <DropdownMenuItem asChild>
        <Link href="/profile" className="cursor-pointer text-[13px] md:text-[15px]">
          <User className="size-4" />
          پروفایل من
        </Link>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Link href="/profile/orders" className="cursor-pointer text-[13px] md:text-[15px]">
          <Package className="size-4" />
          سفارش‌های من
        </Link>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <LogoutDialog textClass="text-[13px] md:text-[15px]"/>
    </>
  );
}
