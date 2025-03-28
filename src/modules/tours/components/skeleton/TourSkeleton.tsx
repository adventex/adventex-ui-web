import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { CalendarDays, MapPin } from "lucide-react";

export const TourSkeleton = ({ layout = "grid" }: { layout: "grid" | "list" | undefined }) => {
  return (
    <Card className={cn("flex justify-between overflow-hidden", layout === "list" ? "flex-row" : "flex-col")}>
      <div className={cn("relative", layout === "list" ? "w-1/3" : "w-full")}>
        <Skeleton className="aspect-[1/1] w-full rounded-t-lg" />
      </div>
      <div className={cn("flex flex-col", layout === "list" ? "w-2/3" : "w-full")}>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <div className="flex items-center gap-2 text-center">
            <MapPin className="size-4 text-muted-foreground" />
            <Skeleton className="h-4 w-24" />
          </div>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
        <CardFooter className="flex items-center justify-between p-0">
          <div className="flex size-full items-center justify-center gap-2 border p-4">
            <CalendarDays className="size-4 text-muted-foreground" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-10 w-full rounded-none" />
        </CardFooter>
      </div>
    </Card>
  );
};
