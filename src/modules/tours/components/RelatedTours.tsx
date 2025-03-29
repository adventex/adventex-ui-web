import { TourCard } from "./vertical-card/TourCard";

export const RelatedTours = ({
  tours,
}: {
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
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">แพ็คเกจทัวร์เรียนที่น่าสนใจ</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tours.map((tour) => {
          return <TourCard key={tour.tourCode} tour={tour} calendars={tour.calendars} />;
        })}
      </div>
    </section>
  );
};
