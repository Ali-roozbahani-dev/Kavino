import { Skeleton } from "@/components/ui/skeleton";

export default function AddressItemSkeleton() {
  return (
    <div className="relative bg-white p-5">
      {/* Card Header */}
      <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          {/* Map Pin */}
          <Skeleton className="size-10 shrink-0 rounded-full" />

          <div className="space-y-2">
            {/* Address title */}
            <Skeleton className="h-5 w-48" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Skeleton className="size-9 rounded-lg" />
          <Skeleton className="size-9 rounded-lg" />
        </div>
      </div>

      {/* Address Info */}
      <div className="pt-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Phone */}
          <div>
            <Skeleton className="h-3 w-16" />
            <Skeleton className="mt-2 h-4 w-32" />
          </div>

          {/* Province / City */}
          <div>
            <Skeleton className="h-3 w-20" />
            <Skeleton className="mt-2 h-4 w-36" />
          </div>
        </div>

        {/* Receiver */}
        <div className="mt-4">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="mt-2 h-4 w-28" />
        </div>
      </div>
    </div>
  );
}