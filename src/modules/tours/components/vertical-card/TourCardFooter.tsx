import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const TourCardFooter = ({ id, price, title }: { id: string; price: number; title: string }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start">
        <span className="text-xs text-gray-500">เริ่มต้น</span>
        <span className="bg-gradient-to-b from-red-500 to-red-700 bg-clip-text text-2xl font-bold text-transparent">
          {price.toLocaleString()}
        </span>
      </div>
      <Link
        href={`/tours/study/${id}`}
        title={title}
        className={cn(
          buttonVariants(),
          "cursor-pointer rounded-md bg-gradient-to-b from-red-500 to-red-700 text-white transition-colors duration-150 hover:bg-gradient-to-l hover:from-red-700 hover:to-red-500"
        )}
      >
        <span>ดูรายละเอียด</span>
        <ArrowRight size={16} className="mt-0.5 size-4" />
      </Link>
    </>
  );
};
