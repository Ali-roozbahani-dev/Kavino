import Link from "next/link";
import { Package, User } from "lucide-react";
import LogoutDialog from "@/components/Features/Auth/Logout/LogoutDialog";

export default function 
Menu(){

    return (      
        <div
            className="
            invisible absolute left-0 top-full z-50 mt-2 w-52
            translate-y-2 opacity-0
            rounded-md border bg-popover p-1 shadow-md
            transition-all duration-200
            group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
            "
        >
            <Link
            href="/profile"
            className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm hover:bg-muted"
            >
            <User className="size-4" />
            پروفایل من
            </Link>

            <Link
            href="/profile/orders"
            className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm hover:bg-muted"
            >
            <Package className="size-4" />
            سفارش‌های من
            </Link>

            <LogoutDialog />
        </div>
    )
}