import { Filter, LayoutGrid, List } from "lucide-react";

import { SparklesText } from "@/components/magicui/sparkles-text";
import { TourSkeleton } from "@/components/tour";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <>
      <section className="container-wrapper">
        <div className="container py-4 xl:py-6 2xl:py-4">
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex flex-col gap-2 p-4">
              <SparklesText text="แพ็คเกจเรียน" />
              <p className="max-w-prose text-muted-foreground">
                ค้นพบแพ็คเกจการศึกษาที่น่าสนใจ เราคัดสรรสถานที่ศึกษาที่น่าสนใจมาให้คุณได้เลือกสรร
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.1),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.05),transparent_50%)]" />
          </div>
        </div>
      </section>

      <section className="sticky top-0 z-50 bg-background shadow">
        <div className="container-wrapper">
          <div className="container">
            <div className={cn("flex flex-col gap-4 py-4", "sm:flex-row sm:items-center sm:justify-between sm:py-6")}>
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">ค้นหาแพ็คเกจ</h2>
                <p className="text-sm text-muted-foreground">พบทั้งหมด {0} ทัวร์</p>
              </div>

              <div className="flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm text-muted-foreground">เรียงตาม</Label>
                  <Select>
                    <SelectTrigger className="sm:w-[140px]">
                      <SelectValue placeholder="เรียงตาม" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="price-asc">ราคาต่ำ-สูง</SelectItem>
                      <SelectItem value="price-desc">ราคาสูง-ต่ำ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1">
                  <Label className="text-sm text-muted-foreground">กรอง</Label>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="relative">
                        <Filter className="size-4" />
                      </Button>
                    </SheetTrigger>
                  </Sheet>
                </div>

                <div className={cn("max-sm:hidden", "flex flex-col gap-1")}>
                  <Label className="text-sm text-muted-foreground">โหมด</Label>
                  <div className="flex gap-1">
                    <Button variant="outline" size="icon" className="bg-primary text-primary-foreground">
                      <LayoutGrid className="size-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <List className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wrapper">
        <div className="container py-4 xl:py-6 2xl:py-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => {
              return <TourSkeleton key={index} layout={undefined} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
