"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export const TourImage = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
