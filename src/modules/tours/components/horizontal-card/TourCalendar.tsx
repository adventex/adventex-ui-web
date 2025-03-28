"use client";

import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const INITIAL_VISIBLE_MONTHS = 4;

const TourCalendarDateRange = ({ dates }: { dates: string }) => (
  <div className="relative">
    <div className="text-center text-xs">
      <div className="px-3 py-1">{dates}</div>
    </div>
  </div>
);

const TourCalendarMonth = ({ dates, month }: { dates: string[]; month: string }) => (
  <div className="flex items-center gap-2 border-b pb-4">
    <Badge variant="secondary" className="bg-[#004EB4] text-primary-foreground">
      {month}
    </Badge>
    <div className="flex flex-wrap gap-2 divide-x divide-border">
      {dates.map((date, index) => (
        <TourCalendarDateRange key={`${month}-${index}`} dates={date} />
      ))}
    </div>
  </div>
);

const TourCalendarTrigger = ({ isOpen }: { isOpen: boolean }) => (
  <CollapsibleTrigger asChild>
    <button className="flex w-full cursor-pointer items-center justify-center gap-2 text-orange-500 transition-colors hover:text-orange-400">
      <span>{isOpen ? "ย่อ" : "ดูช่วงเวลาทั้งหมด"}</span>
      <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")} />
    </button>
  </CollapsibleTrigger>
);

export function TourCalendar({
  calendars,
}: {
  calendars: {
    id: string;
    dates: string[];
    month: string;
    tourId: string;
  }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const visibleCalendarData = calendars.slice(0, INITIAL_VISIBLE_MONTHS);
  const expandedCalendarData = calendars.slice(INITIAL_VISIBLE_MONTHS);
  const hasMoreMonths = calendars.length > INITIAL_VISIBLE_MONTHS;

  return (
    <div className="p-6">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-4">
        <ScrollArea className={cn("relative", !isOpen ? "max-h-[400px]" : "")}>
          <div className="space-y-2">
            {visibleCalendarData.map((month, index) => (
              <TourCalendarMonth key={index} {...month} />
            ))}
          </div>

          {hasMoreMonths && (
            <CollapsibleContent className="space-y-2">
              {expandedCalendarData.map((month, index) => (
                <TourCalendarMonth key={`expanded-${index}`} {...month} />
              ))}
            </CollapsibleContent>
          )}

          {!isOpen && hasMoreMonths && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          )}
        </ScrollArea>

        {hasMoreMonths && <TourCalendarTrigger isOpen={isOpen} />}
      </Collapsible>
    </div>
  );
}
