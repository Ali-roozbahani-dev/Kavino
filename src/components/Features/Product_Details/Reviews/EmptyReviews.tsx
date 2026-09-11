import { MessageSquare } from "lucide-react";

export default function EmptyReviews() {
  return (
    <section
      className="flex min-h-56 flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 px-4 py-8 text-center"
      dir="rtl"
    >
      <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-theme/10 text-theme">
        <MessageSquare className="size-6" />
      </div>

      <h3 className="text-base font-semibold">
        هنوز نظری ثبت نشده است
      </h3>

      <p className="mt-1 max-w-sm text-sm text-muted-foreground">
        اولین نفری باشید که تجربه خود را درباره این محصول با دیگران به اشتراک می‌گذارد.
      </p>
    </section>
  );
}