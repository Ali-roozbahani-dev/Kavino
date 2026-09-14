"use client";

import { LogOut } from "lucide-react";
import { useLogout } from "../hooks/useLogout";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function LogoutDialog() {
    const { mutate: logout, isPending } = useLogout();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button
                    type="button"
                    disabled={isPending}
                    className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-destructive hover:bg-destructive/10"
                >
                    <LogOut className="size-4" />
                    خروج از حساب
                </button>
            </AlertDialogTrigger>

            <AlertDialogContent dir="rtl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-vazir">
                        خروج از حساب
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                        آیا مطمئن هستید که می‌خواهید از حساب کاربری خود خارج شوید؟
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>
                        انصراف
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={() => logout()}
                        disabled={isPending}
                        variant={"Blue1"}
                        className="bg-destructive text-white hover:bg-destructive/90"
                    >
                        {isPending ? "در حال خروج..." : "خروج از حساب"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}