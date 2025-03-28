import { Skeleton } from "@/components/ui/skeleton";
import { RelatedToursSkeleton } from "@/modules/tours/components/skeleton/RelatedToursSkeleton";
import { TabsContentSkeleton } from "@/modules/tours/components/skeleton/TabsContentSkeleton";
import { TourImageSkeleton } from "@/modules/tours/components/skeleton/TourImageSkeleton";
import { TourInfoSkeleton } from "@/modules/tours/components/skeleton/TourInfoSkeleton";

export default function Loading() {
  return (
    <div className="container-wrapper">
      <div className="container py-8">
        <article>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TourImageSkeleton />
            <TourInfoSkeleton />
          </div>

          <div className="mt-12">
            <div className="flex space-x-2 overflow-x-auto">
              {[...Array(3)].map((_, index) => {
                return <Skeleton key={index} className="h-10 w-24" />;
              })}
            </div>
            <TabsContentSkeleton />
          </div>

          <RelatedToursSkeleton />
        </article>
      </div>
    </div>
  );
}
