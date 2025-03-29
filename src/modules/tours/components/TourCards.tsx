"use client";

import { cn } from "@/lib/utils";
import { useTour } from "@/providers/tour";
import { TourSkeleton } from "./skeleton/TourSkeleton";
import { TourCard as TourCardVertical } from "./vertical-card/TourCard";
import { TourPagination } from "./TourPagination";
import { TourCard as TourCardHorizontal } from "./horizontal-card/TourCard";

export const TourCards = ({
  countTours,
  tours,
}: {
  countTours: number;
  tours: {
    duration: string;
    type: string;
    season: string;
    id: string;
    title: string;
    description: string;
    coverImage: string;
    defaultPrice: number;
    startDate: Date;
    endDate: Date;
    highlights: string[];
    location: string;
    period: string;
    tourCode: string;
    universityId: string;
    content: string;
    calendars: {
      month: string;
      id: string;
      dates: string[];
      tourId: string;
    }[];
  }[];
}) => {
  const { filters, isPending } = useTour();

  return (
    <section className="container-wrapper">
      <div className="container py-4 xl:py-6 2xl:py-4">
        <div
          className={cn(
            "grid grid-cols-1 gap-6",
            (filters.layout ?? "grid") === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""
          )}
        >
          {isPending
            ? [...Array(3)].map((_, index) => {
                return <TourSkeleton key={index} layout={filters.layout} />;
              })
            : tours.map((tour) => {
                if (filters.layout === "list") {
                  return <TourCardHorizontal key={tour.id} tour={tour} calendars={tour.calendars} />;
                }

                return <TourCardVertical key={tour.id} tour={tour} calendars={tour.calendars} />;
              })}
        </div>

        <TourPagination countTour={countTours} />
      </div>
    </section>
  );
};
