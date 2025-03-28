import Image from "next/image";

export function TourImage({ image, title }: { image: string; title: string }) {
  return (
    <div className="md:w-1/3">
      <Image src={image} alt={title} className="h-auto w-full object-contain" width={320} height={275} />
    </div>
  );
}
