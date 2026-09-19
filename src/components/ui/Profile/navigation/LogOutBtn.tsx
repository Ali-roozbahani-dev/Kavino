import { cn } from "@/shared/lib/utils";
import { LogOut } from "lucide-react";
import { forwardRef } from "react";

const LogOutBtn = forwardRef<HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {

  return (
    <button
      ref={ref}
      type="button"
      {...props}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        className
      )}
    >
      <LogOut className="size-4" />
      <span>خروج از حساب</span>
    </button>
  );
});

LogOutBtn.displayName = "LogOutBtn";

export default LogOutBtn;

