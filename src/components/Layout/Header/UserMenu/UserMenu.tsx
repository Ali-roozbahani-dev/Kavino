"use client";

import Link from "next/link";
import { ChevronDown, User } from "lucide-react";
import { User as Tuser } from "@/entities/User/types/User";
import Menu from "./Menu";



export default function UserMenu() {
  return (
    <div className="relative group">      
      <Link
        href="/profile"
        className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-muted transition-colors"
      >
        <User className="size-5" />

        <span className="text-sm font-medium">
          حساب کاربری
        </span>

        <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
      </Link>

      <Menu />
      
    </div>
  );
}