import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const RelatedToursSkeleton = () => {
  return (
    <section className="mt-12">
      <Skeleton className="mb-6 h-8 w-1/4" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[...Array(3)].map((_, index) => {
          return (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0">
                <Skeleton className="aspect-square w-full rounded-t-lg" />
              </CardHeader>
              <CardContent className="grow p-4">
                <Skeleton className="mb-2 h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-5/6" />
              </CardContent>
              <CardFooter className="flex items-center justify-between p-0">
                <Skeleton className="h-12 w-1/2" />
                <Skeleton className="h-12 w-1/2" />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
