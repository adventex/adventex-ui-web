import { Badge } from "@/components/ui/badge";

export const TourCardCalendar = ({
  calendars,
}: {
  calendars: {
    id: string;
    month: string;
    dates: string[];
    tourId: string;
  }[];
}) => {
  return (
    <div className="flex flex-col gap-2 px-2 py-2">
      <div className="space-y-2">
        {calendars.map((row, index) => (
          <CalendarRow
            key={`${row.month}-${index}`}
            month={row.month}
            dates={row.dates}
            className={index < calendars.length - 1 ? "border-b pb-2" : "pb-2"}
          />
        ))}
      </div>
    </div>
  );
};

const MonthLabel = ({ month }: { month: string }) => {
  return (
    <Badge variant="secondary" className="bg-[#004EB4] text-primary-foreground hover:text-[#004EB4]">
      {month}
    </Badge>
  );
};

const DateItem = ({ dates }: { dates: string }) => {
  return (
    <div className="relative">
      <div className="text-center text-xs">
        <div className="px-1 py-1">{dates}</div>
      </div>
    </div>
  );
};

const CalendarRow = ({ month, dates, className }: { month: string; dates: string[]; className?: string }) => {
  return (
    <div className={`flex items-start justify-start gap-2 ${className}`}>
      <MonthLabel month={month} />
      <div className="flex flex-wrap gap-x-2 divide-x divide-border">
        {dates.map((date, index) => (
          <DateItem key={`${date}-${index}`} dates={date} />
        ))}
      </div>
    </div>
  );
};
