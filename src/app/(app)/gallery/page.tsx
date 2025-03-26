import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { z } from "zod";

import { GalleryImages, GalleryPagination } from "@/components/gallery";
import { getCountGallery, getGallery } from "@/data/services/gallery";
import { GalleryProvider } from "@/providers/gallery";

const filterSchema = z.object({
  page: z.coerce.number().default(1),
  pageSize: z.coerce.number().default(9),
});

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  description:
    "รวมภาพความประทับใจจากการเดินทางของลูกค้าที่ไว้วางใจให้เราดูแล ทุกช่วงเวลาแห่งความสุขที่เราได้มีส่วนร่วมสร้างขึ้น",
  title: "แกลลอรี่",
};

export default async function GalleryPage(props: { searchParams: SearchParams }) {
  const searchParam = await props.searchParams;

  const filters = filterSchema.safeParse({
    page: searchParam["page"] ?? 1,
    pageSize: searchParam["pageSize"] ?? 9,
  });

  if (filters.error) return notFound();

  const countImage = await getCountGallery();
  const images = await getGallery(filters.data);

  return (
    <>
      <div className="border-grid">
        <div className="container-wrapper border-b">
          <div className="mx-auto max-w-screen-lg border-l border-r border-dashed border-border">
            <div className="flex flex-col items-center justify-center">
              <h2 className="p-4 text-4xl font-bold xl:text-6xl">แกลลอรี่</h2>
            </div>
          </div>

          <div className="border-t border-dashed border-border">
            <div className="mx-auto max-w-screen-lg border-l border-r border-dashed border-border">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex flex-col gap-y-px p-8">
                  <p className="max-w-prose text-muted-foreground">
                    รวมภาพความประทับใจจากการเดินทางของลูกค้าที่ไว้วางใจให้เราดูแล
                  </p>
                  <p className="max-w-prose text-muted-foreground">
                    ทุกช่วงเวลาแห่งความสุขที่เราได้มีส่วนร่วมสร้างขึ้น
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GalleryProvider>
        <div className="border-grid">
          <div className="container-wrapper">
            <div className="container mx-auto py-4 md:py-8">
              <GalleryImages images={images} />
              <div className="mt-8">
                <GalleryPagination countImage={countImage} />
              </div>
            </div>
          </div>
        </div>
      </GalleryProvider>
    </>
  );
}
