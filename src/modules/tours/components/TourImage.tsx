"use client";

import Image from "next/image";
import { useState } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export const TourImage = ({ images }: { images: string[] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="space-y-4">
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogTrigger asChild>
          <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg">
            <Image src={images[0]} alt="" width={352} height={352} className="h-full w-full object-contain" />
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="sr-only">an image light box</DialogTitle>
            <DialogDescription className="sr-only">an image light box</DialogDescription>
          </DialogHeader>
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => {
                return (
                  <CarouselItem key={index}>
                    <Image
                      src={image}
                      alt=""
                      width={718}
                      height={718}
                      className="aspect-square h-auto w-full rounded-md object-contain"
                    />
                    <p className="mt-2 text-center">
                      รูปภาพที่ {index + 1} จาก {images.length}
                    </p>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setLightboxOpen(true);
              }}
              className={cn("relative aspect-square overflow-hidden rounded-lg")}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={76}
                height={76}
                className="size-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
