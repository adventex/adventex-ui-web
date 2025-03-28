import { Skeleton } from "@/components/ui/skeleton";

export const TourInfoSkeleton = () => {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="mt-2 h-8 w-3/4" />
        <Skeleton className="mt-2 h-4 w-full" />
      </div>

      <Skeleton className="h-32 w-full rounded-lg" />

      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {[...Array(6)].map((_, index) => {
            return <Skeleton key={index} className="h-4 w-full" />;
          })}
        </div>
      </div>
    </div>
  );
};
