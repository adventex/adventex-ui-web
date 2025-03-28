import { TourCalendar } from "./TourCalendar";
import { TourDetails } from "./TourDetails";
import { TourFooter } from "./TourFooter";
import { TourImage } from "./TourImage";
import { TourMetadata } from "./TourMetadata";

import type { Calendar, Tour } from "@prisma/client";

export function TourCard({ calendars, tour }: { calendars: Calendar[]; tour: Tour }) {
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row">
        <TourImage image={tour.coverImage} title={tour.title} />
        <div className="md:w-2/3">
          <h2 className="mb-4 text-2xl font-bold">{tour.title}</h2>
          <TourMetadata code={tour.tourCode} period={tour.period} universityId={tour.universityId} />
          <TourDetails content={tour.content} />
        </div>
      </div>
      <TourCalendar calendars={calendars} />
      <TourFooter id={tour.id} price={tour.defaultPrice} title={tour.title} />
    </div>
  );
}
