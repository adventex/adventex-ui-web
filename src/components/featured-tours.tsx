import { featuredTours } from "@/lib/data/tours";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import { TourCard } from "@/modules/tours/components/vertical-card/TourCard";

export const FeaturedTour = () => {
  return (
    <section className="container-wrapper">
      <div className="container py-4 xl:py-6 2xl:py-4">
        <div className="space-y-4">
          <div className="grid items-center justify-center gap-4 text-center xl:gap-6 2xl:gap-4">
            <h2 className="text-4xl font-bold xl:text-6xl">แพ็คเกจเรียนต่อจีน</h2>
            <p className="max-w-prose text-lg text-muted-foreground xl:text-xl">
              สำหรับนักเรียนที่ต้องการพัฒนาทักษะภาษาจีนและสัมผัสวัฒนธรรมจีนแท้ๆ
              ประเทศจีนเป็นจุดหมายปลายทางที่เต็มไปด้วยโอกาสในการเรียนรู้ทั้งในด้านภาษาวัฒนธรรมและชีวิตความเป็นอยู่ในต่างแดน
            </p>
          </div>

          <Carousel opts={{ align: "center" }} className="cursor-grab">
            <CarouselContent>
              {featuredTours.map((tour) => {
                return (
                  <CarouselItem
                    key={tour.id}
                    className="max-sm:flex max-sm:items-center max-sm:justify-center md:basis-1/2 lg:basis-1/3"
                  >
                    <TourCard key={tour.id} calendars={tour.calendars} tour={tour} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
