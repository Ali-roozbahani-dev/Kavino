"use client";

import { ReactNode } from "react";
import { LogOut } from "lucide-react";
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
import { useLogout } from "./hooks/useLogout";
import { cn } from "@/shared/lib/utils";

interface LogoutDialogProps {
    children?: ReactNode;
    textClass?: string;
}

export default function LogoutDialog({ children , textClass }: LogoutDialogProps) {
    const { mutate: logout, isPending } = useLogout();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children ?? (
                    <button
                        type="button"
                        disabled={isPending}
                        className={cn("flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-destructive hover:bg-destructive/10" , textClass)}
                    >
                        <LogOut className="size-4" />
                        خروج از حساب
                    </button>
                )}
            </AlertDialogTrigger>

            <AlertDialogContent dir="rtl" className="w-[260px] sm:w-max md:max-w-lg!">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-vazir">
                        خروج از حساب
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-[13px] md:text-[14px] lg:text-[15px]">
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
                        variant="Blue1"
                        className="bg-destructive text-white hover:bg-destructive/90"
                    >
                        {isPending ? "در حال خروج..." : "خروج از حساب"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}