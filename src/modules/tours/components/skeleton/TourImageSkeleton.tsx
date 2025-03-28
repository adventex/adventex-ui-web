import { Skeleton } from "@/components/ui/skeleton";

export const TourImageSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="aspect-square w-full rounded-lg" />
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => {
          return <Skeleton key={index} className="aspect-square w-full rounded-lg" />;
        })}
      </div>
    </div>
  );
};
