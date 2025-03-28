import Link from "next/link";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { TourCardCastle } from "./TourCardCastle";
import { TourCardMetaData } from "./TourCardMetaData";
import { TourCardCalendar } from "./TourCardCalendar";
import { TourCardFooter } from "./TourCardFooter";

import type { Calendar, Tour } from "@prisma/client";

export const TourCard = ({ calendars, tour }: { calendars: Calendar[]; tour: Tour }) => {
  return (
    <Card className="relative flex h-full flex-col overflow-hidden shadow-none max-sm:max-w-80">
      <TourCardCastle id={tour.id} title={tour.title} image={tour.coverImage} />

      <CardHeader className="p-2">
        <CardTitle className="line-clamp-1 cursor-pointer text-xl">
          <Link href={`/tours/study/${tour.id}`} title={tour.title}>
            {tour.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-px">
        <TourCardMetaData code={tour.tourCode} period={tour.period} universityId={tour.universityId} />
        <TourCardCalendar calendars={calendars} />
      </CardContent>

      <div className="flex-grow" />

      <CardFooter className="mt-auto flex items-end justify-between bg-muted p-4">
        <TourCardFooter id={tour.id} price={tour.defaultPrice} title={tour.title} />
      </CardFooter>
    </Card>
  );
};
