import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { Tour } from "@prisma/client";

export const TourInfo = ({ tour }: { tour: Tour }) => {
  return (
    <div className="flex h-full flex-col justify-between space-y-6 md:col-span-2">
      <div>
        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">{tour.title}</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 divide-x divide-border text-sm">
        <MetadataItem label="จำนวนวัน">
          <span className="text-lg font-medium">{tour.period}</span>
        </MetadataItem>

        <MetadataItem label="มหาลัย">
          <span className="text-lg font-medium text-primary">{tour.universityId === "1" ? "HIT" : "HRBNU"}</span>
        </MetadataItem>

        <MetadataItem label="รหัสทัวร์">
          <span className="text-lg font-medium text-primary">{tour.tourCode}</span>
        </MetadataItem>
      </div>

      <div>
        <p className="mt-2 text-muted-foreground">{tour.description}</p>
      </div>

      <div className="rounded-lg border border-primary p-6 md:mt-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">ราคาเข้าร่วมโครงการ</p>
            <p className="text-3xl font-bold">{tour.defaultPrice.toLocaleString()}.-</p>
          </div>
          <Button className="p-8 text-2xl" asChild>
            <Link href="/contact">สมัครเรียน</Link>
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">ราคารวมทุกอย่าง</div>
      </div>
    </div>
  );
};

function MetadataItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-px py-2">
      <div className="text-muted-foreground">{label}</div>
      {children}
    </div>
  );
}
