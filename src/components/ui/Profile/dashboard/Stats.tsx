import {
  ArrowLeft,
  Heart,
  MapPin,
  Package,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "سفارش‌ها",
    value: "12",
    description: "سفارش ثبت شده",
    icon: Package,
    href: "/profile/orders",
  },
  {
    title: "علاقه‌مندی‌ها",
    value: "8",
    description: "محصول ذخیره شده",
    icon: Heart,
    href: "/profile/favorites",
  },
  {
    title: "آدرس‌ها",
    value: "3",
    description: "آدرس ثبت شده",
    icon: MapPin,
    href: "/profile/addresses",
  },
];

export default function Stats(){


    return(
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
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
                  {item.title}
                </p>

                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{item.value}</span>

                  <span className="text-xs text-muted-foreground">
                    {item.description}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    )
}