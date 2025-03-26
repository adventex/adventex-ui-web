import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { z } from "zod";

import { TourCards, TourFilter } from "@/components/tour";

import { TourProvider } from "@/providers/tour";
import { getCountTours, getTours } from "@/lib/data/tours";

export const metadata: Metadata = {
  description: "ค้นพบแพ็คเกจการศึกษาที่น่าสนใจ เราคัดสรรสถานที่ศึกษาที่น่าสนใจมาให้คุณได้เลือกสรร",
  title: "แพ็คเกจเรียน",
};

const AVAILABLE_DURATION = ["short", "long"] as const;

const AVAILABLE_MONTH = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

const AVAILABLE_SEASON = ["spring", "summer", "autumn", "winter"] as const;

const AVAILABLE_SORT = ["none", "price-asc", "price-desc"] as const;

const AVAILABLE_UNIVERSITY = ["hit", "hnu"] as const;

const filterSchema = z.object({
  duration: z.enum(AVAILABLE_DURATION).optional(),
  layout: z.enum(["grid", "list"]).default("grid").optional(),
  month: z.enum(AVAILABLE_MONTH).optional(),
  page: z.coerce.number().default(1).optional(),
  pageSize: z.coerce.number().default(9).optional(),
  price: z.tuple([z.number(), z.number()]).optional(),
  season: z.enum(AVAILABLE_SEASON).optional(),
  sort: z.enum(AVAILABLE_SORT).optional(),
  university: z.enum(AVAILABLE_UNIVERSITY).optional(),
});

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function TourStudyPage(props: { searchParams: SearchParams }) {
  const searchParam = await props.searchParams;

  const { data: filters, error } = filterSchema.safeParse(searchParam);

  if (error) return notFound();

  const [countTours, tours] = await Promise.all([getCountTours(filters), getTours(filters)]);

  return (
    <>
      <div className="container-wrapper">
        <div className="container py-4 xl:py-6 2xl:py-4">
          <section className="relative overflow-hidden rounded-lg">
            <div className="flex flex-col gap-2 p-4">
              <h2 className="text-4xl font-bold xl:text-5xl 2xl:text-6xl">แพ็คเกจเรียน</h2>
              <p className="max-w-prose text-muted-foreground">
                ค้นพบแพ็คเกจการศึกษาที่น่าสนใจ เราคัดสรรสถานที่ศึกษาที่น่าสนใจมาให้คุณได้เลือกสรร
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.1),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.05),transparent_50%)]" />
          </section>
        </div>
      </div>

      <TourProvider>
        <TourFilter countTours={countTours} />
        <TourCards countTours={countTours} tours={tours} />
      </TourProvider>
    </>
  );
}
