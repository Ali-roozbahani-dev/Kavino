import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value?: number;
  description: string;
  icon: LucideIcon;
  href: string;
  isLoading: boolean;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  href,
  isLoading,
}: StatCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon className="h-5 w-5" />
        </div>

        <ArrowLeft className="h-4 w-4 text-muted-foreground transition group-hover:-translate-x-1 group-hover:text-blue-600" />
      </div>

      <div className="mt-4">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <div className="mt-1 flex items-baseline gap-2">
          {isLoading ? (
            <div className="h-8 w-10 animate-pulse rounded-md bg-gray-200" />
          ) : (
            <span className="text-2xl font-bold">
              {value}
            </span>
          )}

          <span className="text-xs text-muted-foreground">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
}