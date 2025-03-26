"use client";

import * as React from "react";

import Image from "next/image";

import { motion } from "motion/react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { useGallery } from "@/providers/gallery";

import { Skeleton } from "./ui/skeleton";

export const GalleryImages = ({
  images,
}: {
  images: {
    id: string;
    height: number;
    width: number;
    alt: string;
    src: string;
  }[];
}) => {
  const { isPending } = useGallery();

  if (isPending) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[...Array(9)].map((_, index) => {
          return <Skeleton key={index} className="aspect-square w-full rounded-xl" />;
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {images.map((image, index) => {
        return <GalleryImage key={index} image={image} index={index} />;
      })}
    </div>
  );
};

export const GalleryImage = ({ image, index }: { image: { src: string; alt: string }; index: number }) => {
  return (
    <motion.div
      className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
};

export const GalleryPagination = ({ countImage }: { countImage: number }) => {
  const { filters, updateFilters } = useGallery();
  const [, startTransition] = React.useTransition();

  const totalPages = Math.ceil(countImage / filters.pageSize!);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              startTransition(() => {
                updateFilters({
                  page: Math.max(filters.page ? filters.page - 1 : 1, 1),
                });
              });
            }}
            className={cn(filters.page === 1 && "pointer-events-none opacity-50")}
            aria-disabled={filters.page === 1}
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
                isActive={filters.page === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              startTransition(() => {
                updateFilters({
                  page: Math.max(filters.page ? filters.page + 1 : 1, totalPages),
                });
              });
            }}
            className={cn(filters.page === totalPages && "pointer-events-none opacity-50")}
            aria-disabled={filters.page === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
