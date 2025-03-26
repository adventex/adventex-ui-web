"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Filter, LayoutGrid, List, Plus, X, Activity, CalendarDays, MapPin } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn, monthNames, seasonNames } from "@/lib/utils";
import { useTour } from "@/providers/tour";

import { Accordion, AccordionContent, AccordionItem } from "./ui/accordion";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ScrollArea } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Skeleton } from "./ui/skeleton";

export const TourFilter = ({ countTours }: { countTours: number }) => {
  const { activeCount, filters, resetFilters, updateFilters } = useTour();

  const [isOpen, setIsOpen] = React.useState(false);

  const [duration, setDuration] = React.useState<"short" | "long" | undefined>(undefined);
  const [university, setUniversity] = React.useState<"hit" | "hnu" | undefined>(undefined);
  const [month, setMonth] = React.useState<
    | "january"
    | "february"
    | "march"
    | "april"
    | "may"
    | "june"
    | "july"
    | "august"
    | "september"
    | "october"
    | "november"
    | "december"
    | undefined
  >(undefined);
  const [season, setSeason] = React.useState<"spring" | "summer" | "autumn" | "winter" | undefined>(undefined);

  const runCommand = React.useCallback((command: () => unknown) => {
    setIsOpen(false);
    command();
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-background shadow">
      <div className="container-wrapper">
        <div className="container">
          <div className={cn("flex flex-col gap-4 py-4", "sm:flex-row sm:items-center sm:justify-between sm:py-6")}>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">ค้นหาแพ็คเกจ</h2>
              <p className="text-sm text-muted-foreground">พบทั้งหมด {countTours} ทัวร์</p>
            </div>

            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm text-muted-foreground">เรียงตาม</Label>
                <Select
                  value={filters.sort}
                  onValueChange={(value) => {
                    updateFilters({
                      sort: value as "none" | "price-asc" | "price-desc",
                    });
                  }}
                >
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
                <div className="flex flex-wrap gap-1">
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="relative">
                        <Filter className="size-4" />
                        {activeCount > 0 && (
                          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                            {activeCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col justify-between gap-4">
                      <SheetHeader>
                        <SheetTitle>กรองแพ็คเกจทัวร์เรียน</SheetTitle>
                        <SheetDescription>กรองแพ็คเกจเรียนตามความต้องการของคุณ</SheetDescription>
                      </SheetHeader>

                      <ScrollArea className="flex-1">
                        <Accordion type="multiple" className="w-full" defaultValue={["1"]}>
                          <AccordionItem value="1" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                กิจกรรม
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <div className="space-y-4">
                                <RadioGroup
                                  defaultValue={filters.duration}
                                  onValueChange={(value) => {
                                    return setDuration(value as "short" | "long");
                                  }}
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="short" id="r2" />
                                    <Label htmlFor="r2">เรียนระยะสั้น</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="long" id="r3" />
                                    <Label htmlFor="r3">เรียนระยะยาว</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="2" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                มหาวิทยาลัย
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <div className="space-y-4">
                                <RadioGroup
                                  defaultValue={filters.university}
                                  onValueChange={(value) => {
                                    return setUniversity(value as "hit" | "hnu");
                                  }}
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="hit" id="radio-university-hit" />
                                    <Label
                                      htmlFor="radio-university-hit"
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      Harbin Institute of Technology
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="hnu" id="radio-university-hnu" />
                                    <Label
                                      htmlFor="radio-university-hnu"
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      Harbin Normal University
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="3" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                เดือน
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <ScrollArea className="h-[200px] pr-4">
                                <div className="space-y-4">
                                  <RadioGroup
                                    defaultValue={filters.month}
                                    onValueChange={(value) => {
                                      return setMonth(
                                        value as
                                          | "january"
                                          | "february"
                                          | "march"
                                          | "april"
                                          | "may"
                                          | "june"
                                          | "july"
                                          | "august"
                                          | "september"
                                          | "october"
                                          | "november"
                                          | "december"
                                      );
                                    }}
                                  >
                                    {Object.entries(monthNames).map(([key, value]) => {
                                      return (
                                        <div key={key} className="flex items-center space-x-2">
                                          <RadioGroupItem value={key} id={`radio-month-${key}`} />
                                          <Label
                                            htmlFor={`radio-month-${key}`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                          >
                                            {value}
                                          </Label>
                                        </div>
                                      );
                                    })}
                                  </RadioGroup>
                                </div>
                              </ScrollArea>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="4" className="border-none py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                ฤดูกาล
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <div className="space-y-4">
                                <RadioGroup
                                  defaultValue={filters.season}
                                  onValueChange={(value) => {
                                    return setSeason(value as "spring" | "summer" | "autumn" | "winter");
                                  }}
                                >
                                  {Object.entries(seasonNames).map(([key, value]) => {
                                    return (
                                      <div key={key} className="flex items-center space-x-2">
                                        <RadioGroupItem value={key} id={`radio-season-${key}`} />
                                        <Label
                                          htmlFor={`radio-season-${key}`}
                                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                          {value}
                                        </Label>
                                      </div>
                                    );
                                  })}
                                </RadioGroup>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </ScrollArea>

                      <SheetFooter className="border-t pt-4">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => {
                            return runCommand(() => {
                              return resetFilters();
                            });
                          }}
                        >
                          ล้างค่าการกรอง
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            return runCommand(() => {
                              return updateFilters({
                                duration,
                                month,
                                season,
                                university,
                              });
                            });
                          }}
                        >
                          ยืนยันการกรอง
                        </Button>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                  {activeCount > 0 && (
                    <Button variant="outline" size="icon" onClick={resetFilters}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">ล้างค่าการกรอง</span>
                    </Button>
                  )}
                </div>
              </div>

              <div className={cn("max-sm:hidden", "flex flex-col gap-1")}>
                <Label className="text-sm text-muted-foreground">โหมด</Label>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      return updateFilters({
                        layout: "grid",
                        page: (filters.page ?? 1) > 3 ? 3 : undefined,
                        pageSize: 9,
                      });
                    }}
                    className={filters.layout === "grid" ? "bg-primary text-primary-foreground" : ""}
                  >
                    <LayoutGrid className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      return updateFilters({ layout: "list", pageSize: 5 });
                    }}
                    className={filters.layout === "list" ? "bg-primary text-primary-foreground" : ""}
                  >
                    <List className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TourCards = ({
  countTours,
  tours,
}: {
  countTours: number;
  tours: {
    coverImage: string;
    title: string;
    description: string;
    id: string;
    type: string;
    duration: string;
    season: string;
    universityId: string;
    defaultPrice: number;
    startDate: Date;
    endDate: Date;
    highlights: string[];
    location: string;
    period: string;
    tourCode: string;
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
                return <TourCard key={tour.id} tour={tour} />;
              })}
        </div>

        <TourPagination countTour={countTours} />
      </div>
    </section>
  );
};

export const TourCard = ({
  tour,
}: {
  tour: {
    coverImage: string;
    title: string;
    description: string;
    id: string;
    type: string;
    duration: string;
    season: string;
    universityId: string;
    defaultPrice: number;
    startDate: Date;
    endDate: Date;
    highlights: string[];
    location: string;
    period: string;
    tourCode: string;
  };
}) => {
  const { filters } = useTour();

  return (
    <Card
      className={cn(
        "flex justify-between overflow-hidden",
        (filters.layout ?? "grid") === "list" ? "flex-row" : "flex-col"
      )}
    >
      <div className={cn("relative", (filters.layout ?? "grid") === "list" ? "w-1/3" : "w-full")}>
        <Image
          src={tour.coverImage || "/placeholder.svg"}
          alt={tour.title}
          width={600}
          height={400}
          className="size-full rounded-t-lg object-cover"
        />
      </div>
      <div className={cn("flex flex-col", (filters.layout ?? "grid") === "list" ? "w-2/3" : "w-full")}>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">{tour.title}</CardTitle>
          <div className="flex items-center gap-2 text-center text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>{tour.location}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <CardDescription className="line-clamp-4 indent-4 text-base">{tour.description}</CardDescription>
          {(filters.layout ?? "grid") === "list" && tour.highlights.length > 0 ? (
            <div className="space-y-4">
              <p>ประเด็นสำคัญ:</p>
              <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {tour.highlights.map((highlight, idx) => {
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <Activity className="size-4 text-primary" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </CardContent>
        <CardFooter className="flex items-center justify-between p-0">
          <div className="flex size-full items-center justify-center gap-2 border p-4">
            <CalendarDays className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{tour.period}</span>
          </div>
          <Button className="size-full rounded-none" asChild>
            <Link href={`/tours/study/${tour.id}`}>ดูเพิ่มเติม</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

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

export const TourImage = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogTrigger asChild>
          <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg">
            <Image
              src={images[selectedImage]! || "/placeholder.svg"}
              alt={`Image ${selectedImage + 1}`}
              width={600}
              height={400}
              className="size-full object-cover"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <div className="relative aspect-square">
            <Image
              src={images[selectedImage]! || "/placeholder.svg"}
              alt={`Image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-center">
            Image {selectedImage + 1} of {images.length}
          </p>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setSelectedImage(index);
                setLightboxOpen(true);
              }}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg",
                selectedImage === index ? "ring-2 ring-primary" : ""
              )}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={200}
                height={200}
                className="size-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const TourInfo = ({
  tour,
}: {
  tour: {
    id: string;
    itinerary: {
      title: string;
      description: string;
      week: string;
      activities: string[];
    }[];
    coverImage: string;
    title: string;
    description: string;
    defaultPrice: number;
    startDate: Date;
    endDate: Date;
    highlights: string[];
    period: string;
    location: string;
    type: string;
  };
}) => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4" />
          <span>{tour.location}</span>
        </div>
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{tour.title}</h1>
          <p className="mt-2 text-muted-foreground">{tour.description}</p>
        </header>
      </div>

      <div className="rounded-lg border border-primary p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">ราคาเข้าร่วมโครงการ</p>
            <p className="text-3xl font-bold">{tour.defaultPrice.toLocaleString()}.-</p>
          </div>
          <Button className="p-8 text-2xl" asChild>
            <Link href="/contact">สมัครเรียน</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">ราคารวมทุกอย่าง</p>
      </div>

      <section className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold tracking-tight">ราคาค่าโครงการรวม</h3>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {tour.highlights.map((highlight, index) => {
            return (
              <li key={index} className="flex items-center gap-2">
                <Activity className="size-4 text-primary" />
                <span>{highlight}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export const RelatedTours = ({
  tours,
}: {
  tours: {
    id: string;
    title: string;
    type: string;
    duration: string;
    season: string;
    coverImage: string;
    universityId: string;
    description: string;
    defaultPrice: number;
    startDate: Date;
    endDate: Date;
    highlights: string[];
    location: string;
    period: string;
    tourCode: string;
  }[];
}) => {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">แพ็คเกจทัวร์เรียนที่น่าสนใจ</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tours.map((tour) => {
          return (
            <Card key={tour.id} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={tour.coverImage || "/placeholder.svg"}
                    alt={tour.title}
                    fill
                    loading="eager"
                    className="object-cover object-center"
                  />
                </div>
              </CardHeader>
              <CardContent className="grow p-4">
                <CardTitle className="mb-2 text-lg">{tour.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                  {tour.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-0">
                <div className="flex size-full items-center justify-center gap-2 border p-4">
                  <CalendarDays className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{tour.period}</span>
                </div>
                <Button asChild className="size-full rounded-none">
                  <Link href={`/tours/study/${tour.id}`}>ดูเพิ่มเติม</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export const TourImageSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="aspect-square w-full rounded-lg" />
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => {
          return <Skeleton key={index} className="aspect-square w-full rounded-lg" />;
        })}
      </div>
    </div>
  );
};

export const TourInfoSkeleton = () => {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="mt-2 h-8 w-3/4" />
        <Skeleton className="mt-2 h-4 w-full" />
      </div>

      <Skeleton className="h-32 w-full rounded-lg" />

      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {[...Array(6)].map((_, index) => {
            return <Skeleton key={index} className="h-4 w-full" />;
          })}
        </div>
      </div>
    </div>
  );
};

export const TabsContentSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-1/4" />
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => {
          return (
            <div key={index} className="space-y-2">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const RelatedToursSkeleton = () => {
  return (
    <section className="mt-12">
      <Skeleton className="mb-6 h-8 w-1/4" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[...Array(3)].map((_, index) => {
          return (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0">
                <Skeleton className="aspect-square w-full rounded-t-lg" />
              </CardHeader>
              <CardContent className="grow p-4">
                <Skeleton className="mb-2 h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-5/6" />
              </CardContent>
              <CardFooter className="flex items-center justify-between p-0">
                <Skeleton className="h-12 w-1/2" />
                <Skeleton className="h-12 w-1/2" />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
