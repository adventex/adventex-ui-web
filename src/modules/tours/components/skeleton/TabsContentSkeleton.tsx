import { Skeleton } from "@/components/ui/skeleton";

export const TabsContentSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-1/4" />
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => {
          return (
            <div key={index} className="space-y-2">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
