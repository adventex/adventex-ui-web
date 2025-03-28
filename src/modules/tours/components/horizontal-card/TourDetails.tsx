import { CircleAlert, CircleCheck, CircleMinus, Sparkle } from "lucide-react";

export function TourDetails({ content }: { content: string | null }) {
  return (
    <div className="space-y-3">
      <DetailItem icon={<Sparkle className="mt-0.5 size-4" />} label="ไฮไลท์" content={content} />
      <div className="grid grid-cols-2 gap-x-2">
        <div className="space-y-2">
          <div className="flex items-start gap-2 text-sm font-medium">
            <CircleAlert className="mt-0.5 size-4" />
            <span>รวมค่าบริการ</span>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-x-2">
              <CircleCheck size={12} className="mt-1 size-3" />
              <span>ค่าตั๋วเครื่องบินไป-กลับ</span>
            </li>
            <li className="flex items-start gap-x-2">
              <CircleCheck size={12} className="mt-1 size-3" />
              <span>ค่าลงทะเบียนเรียน</span>
            </li>
            <li className="flex items-start gap-x-2">
              <CircleCheck size={12} className="mt-1 size-3" />
              <span>ค่าประกันอุบัติเหตุ</span>
            </li>
            <li className="flex items-start gap-x-2">
              <CircleCheck size={12} className="mt-1 size-3" />
              <span>ค่ารถรับส่งสนามบิน</span>
            </li>
            <li className="flex items-start gap-x-2">
              <CircleCheck size={12} className="mt-1 size-3" />
              <span>ค่าซิม</span>
            </li>
            <li className="flex items-start gap-x-2">
              <CircleCheck size={12} className="mt-1 size-3" />
              <span>Wifi-VPN</span>
            </li>
            <li className="flex items-start gap-x-2">
              <CircleCheck size={12} className="mt-1 size-3" />
              <span>ค่าวีซ่า</span>
            </li>
            <li className="flex items-start gap-x-2">
              <CircleCheck size={12} className="mt-1 size-3" />
              <span>ค่าหอพัก</span>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-2 text-sm font-medium">
            <CircleAlert className="mt-0.5 size-4" />
            <span>ไม่รวมค่าบริการ</span>
          </div>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-x-2">
              <CircleMinus size={12} className="mt-1 size-3" />
              <span>ค่าใช้จ่ายส่วนตัว</span>
            </li>
            <li className="flex items-start gap-x-2">
              <CircleMinus size={12} className="mt-1 size-3" />
              <span>ค่าอาหารในแต่ละมื้อที่ท่านต้องออกค่าใช้จ่ายเอง</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, content }: { icon: React.ReactNode; label: string; content: string | null }) {
  return (
    <div className="flex items-start gap-2">
      <div>{icon}</div>
      <div className="space-x-px text-sm">
        <span className="font-medium">{label}</span>
        <span>:</span>
        <span className="text-muted-foreground">{content}</span>
      </div>
    </div>
  );
}
