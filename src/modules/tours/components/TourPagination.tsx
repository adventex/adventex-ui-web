"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useTour } from "@/providers/tour";

export const TourPagination = ({ countTour }: { countTour: number }) => {
  const { filters, updateFilters } = useTour();

  const totalPages = Math.ceil(countTour / (filters.pageSize ?? 9));

  return (
    <div
      className={cn("mt-8 flex flex-col items-center gap-4 text-center", "md:flex-row md:justify-between md:text-left")}
    >
      <div className="size-full text-sm text-muted-foreground md:hidden">
        {Math.min(((filters.page ?? 1) - 1) * ((filters.pageSize ?? 9) + 1), countTour)} -{" "}
        {Math.min((filters.page ?? 1) * (filters.pageSize ?? 9), countTour)} จาก {countTour}
      </div>
      <div className="hidden size-full text-sm text-muted-foreground md:block">
        แสดงผลลัพธ์ {Math.min(((filters.page ?? 1) - 1) * ((filters.pageSize ?? 9) + 1), countTour)} -{" "}
        {Math.min((filters.page ?? 1) * (filters.pageSize ?? 9), countTour)} จากทั้งหมด {countTour} รายการ
      </div>

      <Pagination className="md:justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                updateFilters({
                  page: Math.max((filters.page ?? 1) - 1, 1),
                });
              }}
              className={cn((filters.page ?? 1) === 1 && "pointer-events-none opacity-50")}
              aria-disabled={(filters.page ?? 1) === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => {
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => {
                    updateFilters({
                      page: index + 1,
                    });
                  }}
                  isActive={(filters.page ?? 1) === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                updateFilters({
                  page: Math.min((filters.page ?? 1) + 1, totalPages),
                });
              }}
              className={cn((filters.page ?? 1) === totalPages && "pointer-events-none opacity-50")}
              aria-disabled={(filters.page ?? 1) === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
