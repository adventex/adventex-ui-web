import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Activity, Box, PanelsTopLeft } from "lucide-react";

import { RelatedTours, TourImage, TourInfo } from "@/components/tour";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getRelatedTour, getTour } from "@/lib/data/tours";
import { getUniversity } from "@/lib/data/university";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: tourId } = await props.params;

  const tour = await getTour(tourId);

  if (!tour) {
    return {
      description: "The requested tour could not be found.",
      title: "Tour Not Found",
    };
  }

  return {
    description: tour.description,
    openGraph: {
      description: tour.description,
      images: [tour.coverImage],
      title: tour.title,
      type: "website",
    },
    title: tour.title,
    twitter: {
      card: "summary_large_image",
      description: tour.description,
      images: [tour.coverImage],
      title: tour.title,
    },
  };
}

export default async function TourStudySlugPage(props: { params: Promise<{ slug: string }> }) {
  const { slug: tourId } = await props.params;

  const tour = await getTour(tourId);

  if (!tour) return notFound();

  const university = await getUniversity(tour?.universityId);

  if (!university) return notFound();

  const relatedTour = await getRelatedTour(tour, university);

  return (
    <div className="container-wrapper">
      <div className="container py-8">
        <article>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TourImage images={[tour.coverImage, ...university.images]} />
            <TourInfo tour={tour} />
          </div>

          <Tabs defaultValue="itinerary" className="mt-12">
            <ScrollArea>
              <TabsList className="relative mb-3 h-auto w-full gap-0.5 bg-transparent p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
                <TabsTrigger
                  value="included"
                  className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                >
                  <Box className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                  ภาพรวม
                </TabsTrigger>
                <TabsTrigger
                  value="itinerary"
                  className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                >
                  <PanelsTopLeft className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                  แผนการเรียน
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="overflow-hidden rounded-b-none border-x border-t border-border bg-muted py-2 data-[state=active]:z-10 data-[state=active]:shadow-none"
                >
                  <Box className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
                  รีวิว
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <TabsContent value="included">
              <section className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight">เกี่ยวกับมหาวิทยาลัย</h2>

                <div className="space-y-4">
                  {university.about.map((section, index) => {
                    return (
                      <div key={index} className="space-y-2">
                        <h3 className="font-medium">{section.title}:</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => {
                            return (
                              <li key={itemIndex} className="pl-4">
                                - {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="itinerary">
              <section className="space-y-8">
                {tour.itinerary.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-muted-foreground">
                      ช่วงเวลาการรับสมัคร 1-2 เดือนก่อนเดินทาง วันและเวลาเดินทางสอบถามกับทางบริษัทอีกครั้ง
                    </p>
                  </div>
                ) : (
                  tour.itinerary.map((week) => {
                    return (
                      <div key={week.week} className="relative border-l-2 border-gray-200 pb-8 pl-8 last:pb-0">
                        <div className="absolute left-[-9px] top-0 size-4 rounded-full bg-primary" />
                        <div className="flex flex-col gap-4">
                          <div>
                            <h3 className="font-semibold">
                              {week.week}: {week.title}
                            </h3>
                            <p className="text-muted-foreground">{week.description}</p>
                          </div>
                          <ul className="space-y-2">
                            {week.activities.map((activity, index) => {
                              return (
                                <li key={index} className="flex items-center gap-2">
                                  <Activity className="size-4 text-primary" />
                                  <span>{activity}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })
                )}
              </section>
            </TabsContent>

            <TabsContent value="reviews">
              <section className="py-12 text-center">
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </section>
            </TabsContent>
          </Tabs>

          <RelatedTours tours={relatedTour} />
        </article>
      </div>
    </div>
  );
}
