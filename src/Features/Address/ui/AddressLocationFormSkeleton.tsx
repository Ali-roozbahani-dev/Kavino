import { Skeleton } from "@/components/ui/skeleton";

export default function AddressLocationFormSkeleton() {
  return (
    <>
      {/* استان */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* شهر */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-8" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* کد پستی */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>

      {/* آدرس */}
      <div className="space-y-2 md:col-span-2">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </>
  );
}