import { Button } from "@/components/ui/button";
import { Activity, MapPin } from "lucide-react";
import Link from "next/link";

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
