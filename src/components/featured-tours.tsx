"use client";

import Image from "next/image";
import Link from "next/link";

import { Clock } from "lucide-react";
import { useTheme } from "next-themes";

import { featuredTours } from "@/lib/data/tours";

import { MagicCard } from "./magicui/magic-card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Separator } from "./ui/separator";

export const FeaturedTour = () => {
  const { theme } = useTheme();

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

          <Carousel opts={{ align: "center" }}>
            <CarouselContent>
              {featuredTours.map((tour) => {
                return (
                  <CarouselItem key={tour.id} className="md:basis-1/2 lg:basis-1/3">
                    <MagicCard
                      className="overflow-hidden p-px"
                      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                    >
                      <Card
                        key={tour.id}
                        className="shadow-hidden min-h-150 max-sm:max-w-88 group relative flex h-full flex-col justify-between overflow-hidden rounded-xl transition-shadow hover:shadow-lg"
                      >
                        <CardHeader className="relative line-clamp-1 shrink-0 overflow-hidden text-ellipsis p-0">
                          <Image
                            src={tour.coverImage}
                            alt={tour.title}
                            width={200}
                            height={200}
                            className="size-full object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                          <Badge className="absolute right-4 top-4">ยอดฮิต</Badge>
                        </CardHeader>

                        <CardContent className="flex-1 space-y-4 p-6">
                          <CardTitle className="text-xl">{tour.title}</CardTitle>
                          <Separator />
                          <CardDescription className="line-clamp-4 overflow-hidden text-ellipsis text-base">
                            {tour.description}
                          </CardDescription>
                        </CardContent>

                        <CardFooter className="grid h-12 w-full grid-cols-2 overflow-hidden p-0">
                          <div className="flex size-full items-center justify-center bg-secondary">
                            <Clock className="mr-1 size-4" />
                            <span>{tour.period}</span>
                          </div>
                          <Button className="size-full rounded-none" asChild>
                            <Link href={`/tours/study/${tour.id}`}>ดูเพิ่มเติม</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </MagicCard>
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
