import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  Activity,
  Box,
  CircleAlert,
  CircleCheck,
  CircleMinus,
  Clock,
  PanelsTopLeft,
  Sparkle,
  Tags,
} from "lucide-react";

import { getRelatedTour, getTour } from "@/lib/data/tours";
import { getUniversity } from "@/lib/data/university";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { RelatedTours } from "@/modules/tours/components/RelatedTours";
import { TourImage } from "@/modules/tours/components/TourImage";
import { TourInfo } from "@/modules/tours/components/TourInfo";

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
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <TourImage images={[tour.coverImage, ...university.images]} />
            <TourInfo tour={tour} />
          </div>

          <Table className="border-y">
            <TableHeader>
              <TableRow>
                <TableHead className="py-4">วันที่เดินทาง</TableHead>
                <TableHead className="py-4">ห้องเดี่ยว</TableHead>
                <TableHead className="py-4">ห้องเดี่ยว</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4].map((i) => (
                <TableRow key={i}>
                  <TableCell className="flex items-start gap-x-2 py-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>29 มี.ค. 68</span>
                    <span>-</span>
                    <span>3 เม.ย. 68</span>
                    <Tags className="h-4 w-4 text-primary" />
                  </TableCell>
                  <TableCell className="py-4 font-medium text-primary">16,999 บาท</TableCell>
                  <TableCell className="py-4 font-medium text-primary">16,999 บาท</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="space-y-3">
            <div className="text-xl font-semibold">ไฮไลท์โปรแกรมทัวร์</div>

            <DetailItem icon={<Sparkle className="mt-0.5 size-4" />} label="ไฮไลท์" content={tour.content} />
            <div className="grid grid-cols-2 gap-x-2">
              <div className="space-y-2">
                <div className="flex items-start gap-2 font-medium">
                  <CircleAlert className="mt-0.5 size-4" />
                  <span>รวมค่าบริการ</span>
                </div>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <li className="flex items-start gap-x-2">
                    <CircleCheck size={12} className="mt-1 size-3" />
                    <span>ค่าตั๋วเครื่องบินไป-กลับ</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CircleCheck size={12} className="mt-1 size-3" />
                    <span>ค่าลงทะเบียนเรียน</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CircleCheck size={12} className="mt-1 size-3" />
                    <span>ค่าประกันอุบัติเหตุ</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CircleCheck size={12} className="mt-1 size-3" />
                    <span>ค่ารถรับส่งสนามบิน</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CircleCheck size={12} className="mt-1 size-3" />
                    <span>ค่าซิม</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CircleCheck size={12} className="mt-1 size-3" />
                    <span>Wifi-VPN</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CircleCheck size={12} className="mt-1 size-3" />
                    <span>ค่าวีซ่า</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CircleCheck size={12} className="mt-1 size-3" />
                    <span>ค่าหอพัก</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm font-medium">
                  <CircleAlert className="mt-0.5 size-4" />
                  <span>ไม่รวมค่าบริการ</span>
                </div>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-x-2">
                    <CircleMinus size={12} className="mt-1 size-3" />
                    <span>ค่าใช้จ่ายส่วนตัว</span>
                  </li>
                  <li className="flex items-start gap-x-2">
                    <CircleMinus size={12} className="mt-1 size-3" />
                    <span>ค่าอาหารในแต่ละมื้อที่ท่านต้องออกค่าใช้จ่ายเอง</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Tabs defaultValue="itinerary">
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
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, content }: { icon: React.ReactNode; label: string; content: string | null }) {
  return (
    <div className="flex items-start gap-2">
      <div>{icon}</div>
      <div className="space-x-px">
        <span className="font-medium">{label}</span>
        <span>:</span>
        <span className="text-muted-foreground">{content}</span>
      </div>
    </div>
  );
}
