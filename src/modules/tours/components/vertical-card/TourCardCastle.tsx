import Image from "next/image";
import Link from "next/link";

export const TourCardCastle = ({ id, title, image }: { id: string; title: string; image: string }) => {
  return (
    <div className="relative h-auto w-full cursor-pointer">
      <Link href={`/tours/study/${id}`} title={title}>
        <Image src={image} alt={title} height={256} width={320} className="size-full object-contain" />
      </Link>
    </div>
  );
};
