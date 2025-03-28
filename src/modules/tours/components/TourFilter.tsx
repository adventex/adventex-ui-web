"use client";

import { useCallback, useState } from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Filter, LayoutGrid, List, Plus, X } from "lucide-react";

import { cn, monthNames, seasonNames } from "@/lib/utils";
import { useTour } from "@/providers/tour";

import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const TourFilter = ({ countTours }: { countTours: number }) => {
  const { activeCount, filters, resetFilters, updateFilters } = useTour();

  const [isOpen, setIsOpen] = useState(false);

  const [duration, setDuration] = useState<"short" | "long" | undefined>(undefined);
  const [university, setUniversity] = useState<"hit" | "hnu" | undefined>(undefined);
  const [month, setMonth] = useState<
    | "january"
    | "february"
    | "march"
    | "april"
    | "may"
    | "june"
    | "july"
    | "august"
    | "september"
    | "october"
    | "november"
    | "december"
    | undefined
  >(undefined);
  const [season, setSeason] = useState<"spring" | "summer" | "autumn" | "winter" | undefined>(undefined);

  const runCommand = useCallback((command: () => unknown) => {
    setIsOpen(false);
    command();
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-background shadow">
      <div className="container-wrapper">
        <div className="container">
          <div className={cn("flex flex-col gap-4 py-4", "sm:flex-row sm:items-center sm:justify-between sm:py-6")}>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">ค้นหาแพ็คเกจ</h2>
              <p className="text-sm text-muted-foreground">พบทั้งหมด {countTours} ทัวร์</p>
            </div>

            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm text-muted-foreground">เรียงตาม</Label>
                <Select
                  value={filters.sort}
                  onValueChange={(value) => {
                    updateFilters({
                      sort: value as "none" | "price-asc" | "price-desc",
                    });
                  }}
                >
                  <SelectTrigger className="sm:w-[140px]">
                    <SelectValue placeholder="เรียงตาม" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">ราคาต่ำ-สูง</SelectItem>
                    <SelectItem value="price-desc">ราคาสูง-ต่ำ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1">
                <Label className="text-sm text-muted-foreground">กรอง</Label>
                <div className="flex flex-wrap gap-1">
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="icon" className="relative">
                        <Filter className="size-4" />
                        {activeCount > 0 && (
                          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                            {activeCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col justify-between gap-4">
                      <SheetHeader>
                        <SheetTitle>กรองแพ็คเกจทัวร์เรียน</SheetTitle>
                        <SheetDescription>กรองแพ็คเกจเรียนตามความต้องการของคุณ</SheetDescription>
                      </SheetHeader>

                      <ScrollArea className="flex-1">
                        <Accordion type="multiple" className="w-full" defaultValue={["1"]}>
                          <AccordionItem value="1" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                กิจกรรม
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <div className="space-y-4">
                                <RadioGroup
                                  defaultValue={filters.duration}
                                  onValueChange={(value) => {
                                    return setDuration(value as "short" | "long");
                                  }}
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="short" id="r2" />
                                    <Label htmlFor="r2">เรียนระยะสั้น</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="long" id="r3" />
                                    <Label htmlFor="r3">เรียนระยะยาว</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="2" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                มหาวิทยาลัย
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <div className="space-y-4">
                                <RadioGroup
                                  defaultValue={filters.university}
                                  onValueChange={(value) => {
                                    return setUniversity(value as "hit" | "hnu");
                                  }}
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="hit" id="radio-university-hit" />
                                    <Label
                                      htmlFor="radio-university-hit"
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      Harbin Institute of Technology
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="hnu" id="radio-university-hnu" />
                                    <Label
                                      htmlFor="radio-university-hnu"
                                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                      Harbin Normal University
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="3" className="py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                เดือน
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <ScrollArea className="h-[200px] pr-4">
                                <div className="space-y-4">
                                  <RadioGroup
                                    defaultValue={filters.month}
                                    onValueChange={(value) => {
                                      return setMonth(
                                        value as
                                          | "january"
                                          | "february"
                                          | "march"
                                          | "april"
                                          | "may"
                                          | "june"
                                          | "july"
                                          | "august"
                                          | "september"
                                          | "october"
                                          | "november"
                                          | "december"
                                      );
                                    }}
                                  >
                                    {Object.entries(monthNames).map(([key, value]) => {
                                      return (
                                        <div key={key} className="flex items-center space-x-2">
                                          <RadioGroupItem value={key} id={`radio-month-${key}`} />
                                          <Label
                                            htmlFor={`radio-month-${key}`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                          >
                                            {value}
                                          </Label>
                                        </div>
                                      );
                                    })}
                                  </RadioGroup>
                                </div>
                              </ScrollArea>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="4" className="border-none py-2">
                            <AccordionPrimitive.Header className="flex">
                              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                                ฤดูกาล
                                <Plus
                                  size={16}
                                  strokeWidth={2}
                                  className="shrink-0 opacity-60 transition-transform duration-200"
                                  aria-hidden="true"
                                />
                              </AccordionPrimitive.Trigger>
                            </AccordionPrimitive.Header>
                            <AccordionContent className="pb-2 text-muted-foreground">
                              <div className="space-y-4">
                                <RadioGroup
                                  defaultValue={filters.season}
                                  onValueChange={(value) => {
                                    return setSeason(value as "spring" | "summer" | "autumn" | "winter");
                                  }}
                                >
                                  {Object.entries(seasonNames).map(([key, value]) => {
                                    return (
                                      <div key={key} className="flex items-center space-x-2">
                                        <RadioGroupItem value={key} id={`radio-season-${key}`} />
                                        <Label
                                          htmlFor={`radio-season-${key}`}
                                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                          {value}
                                        </Label>
                                      </div>
                                    );
                                  })}
                                </RadioGroup>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </ScrollArea>

                      <SheetFooter className="border-t pt-4">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => {
                            return runCommand(() => {
                              return resetFilters();
                            });
                          }}
                        >
                          ล้างค่าการกรอง
                        </Button>
                        <Button
                          type="button"
                          onClick={() => {
                            return runCommand(() => {
                              return updateFilters({
                                duration,
                                month,
                                season,
                                university,
                              });
                            });
                          }}
                        >
                          ยืนยันการกรอง
                        </Button>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                  {activeCount > 0 && (
                    <Button variant="outline" size="icon" onClick={resetFilters}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">ล้างค่าการกรอง</span>
                    </Button>
                  )}
                </div>
              </div>

              <div className={cn("max-sm:hidden", "flex flex-col gap-1")}>
                <Label className="text-sm text-muted-foreground">โหมด</Label>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      return updateFilters({
                        layout: "grid",
                        page: (filters.page ?? 1) > 3 ? 3 : undefined,
                        pageSize: 9,
                      });
                    }}
                    className={filters.layout === "grid" ? "bg-primary text-primary-foreground" : ""}
                  >
                    <LayoutGrid className="size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      return updateFilters({ layout: "list", pageSize: 5 });
                    }}
                    className={filters.layout === "list" ? "bg-primary text-primary-foreground" : ""}
                  >
                    <List className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
