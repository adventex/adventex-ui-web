import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function TourFooter({ id, price, title }: { id: string; price: number; title: string }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-6">
      <div />
      <div className="flex items-center gap-4">
        <PriceDisplay amount={price.toLocaleString()} />
        <Link
          href={`/tours/study/${id}`}
          title={title}
          className={cn(
            buttonVariants(),
            "bg-gradient-to-b from-red-500 to-red-700 transition-colors duration-150 hover:bg-gradient-to-l hover:from-red-500 hover:to-red-500"
          )}
        >
          <span>ดูรายละเอียด</span>
          <ArrowRight size={16} className="ms-0.5 mt-0.5 size-4" />
        </Link>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 ${color} rounded-full`} />
      <span className="text-sm">{label}</span>
    </div>
  );
}

function PriceDisplay({ amount }: { amount: string }) {
  return (
    <div className="flex items-end gap-x-2">
      <div className="text-sm text-muted-foreground">เริ่ม</div>
      <div className="bg-gradient-to-b from-red-500 to-red-700 bg-clip-text text-2xl font-bold text-transparent">
        {amount}
      </div>
    </div>
  );
}
