"use client";
import { ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Menu from "./Menu";

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-md px-1 md:px-3 py-1 md:py-2 hover:bg-muted transition-colors outline-none"
        >
          <User className="size-5" />

          <span className="hidden md:block text-sm font-medium">
            حساب کاربری
          </span>

          <ChevronDown className="size-4 transition-transform duration-200" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-35 md:w-50"
      >
        <Menu />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
