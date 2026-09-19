import { cn } from "@/shared/lib/utils";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  Icon: LucideIcon;
  iconWrapperClassName?: string;
  iconClassName?: string;
}

export default function SectionHeader({
  title,
  Icon,
  iconWrapperClassName,
  iconClassName,
}: Props) {
  return (
    <section className="bg-white p-5 sm:p-4">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
            iconWrapperClassName
          )}
        >
          <Icon
            className={cn("h-6 w-6 fill-current", iconClassName)}
          />
        </div>

        <div>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>
    </section>
  );
}
