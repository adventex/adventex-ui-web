import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
