"use client";

import * as React from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { z } from "zod";

const AVAILABLE_DURATION = ["short", "long"] as const;

const AVAILABLE_MONTH = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

const AVAILABLE_SEASON = ["spring", "summer", "autumn", "winter"] as const;

const AVAILABLE_SORT = ["none", "price-asc", "price-desc"] as const;

const AVAILABLE_UNIVERSITY = ["hit", "hnu"] as const;

const filterSchema = z.object({
  duration: z.enum(AVAILABLE_DURATION).optional(),
  layout: z.enum(["grid", "list"]).default("grid").optional(),
  month: z.enum(AVAILABLE_MONTH).optional(),
  page: z.coerce.number().default(1).optional(),
  pageSize: z.coerce.number().default(9).optional(),
  price: z.tuple([z.number(), z.number()]).optional(),
  season: z.enum(AVAILABLE_SEASON).optional(),
  sort: z.enum(AVAILABLE_SORT).optional(),
  university: z.enum(AVAILABLE_UNIVERSITY).optional(),
});

type Filters = z.infer<typeof filterSchema>;

type TourContextProps = {
  activeCount: number;
  filters: Filters;
  isPending: boolean;
  resetFilters: () => void;
  updateFilters: (updates: Partial<Filters>) => void;
};

const TourContext = React.createContext<TourContextProps | null>(null);

export function useTour() {
  const context = React.useContext(TourContext);

  if (!context) {
    throw new Error("useTour must be used within a <TourProvider />");
  }

  return context;
}

export const TourProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filters = filterSchema.safeParse({
    duration: searchParams.get("duration") ?? undefined,
    layout: searchParams.get("layout") ?? undefined,
    month: searchParams.get("month") ?? undefined,
    page: searchParams.get("page") ?? undefined,
    pageSize: searchParams.get("pageSize") ?? undefined,
    price: searchParams.get("price") ?? undefined,
    season: searchParams.get("season") ?? undefined,
    sort: searchParams.get("sort") ?? undefined,
    university: searchParams.get("university") ?? undefined,
  });

  const [activeCount, setActiveCount] = React.useState(0);

  const [isPending, startTransition] = React.useTransition();
  const [optimisticFilters, setOptimisticFilters] = React.useOptimistic(
    filters.data,
    (prevState, newFilters: Partial<Filters>) => {
      return {
        ...prevState,
        ...newFilters,
      };
    }
  );

  const updateFilters = (updates: Partial<typeof optimisticFilters>) => {
    const newState = { ...optimisticFilters, ...updates };

    const newSearchParams = new URLSearchParams();

    Object.entries(newState).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          newSearchParams.append(key, String(v));
        });
      } else if (value !== undefined) {
        newSearchParams.set(key, String(value));
      }
    });

    startTransition(() => {
      setOptimisticFilters(updates || {});
      router.push(`?${newSearchParams}`);
    });
  };

  const resetFilters = () => {
    startTransition(() => {
      setOptimisticFilters({});
      router.push("/tours/study");
    });
  };

  const calActive = React.useCallback(() => {
    let count = 0;

    if (filters.data?.duration !== undefined) count++;
    if (filters.data?.month !== undefined) count++;
    if (filters.data?.season !== undefined) count++;
    if (filters.data?.university !== undefined) count++;

    setActiveCount(count);
  }, [filters.data?.duration, filters.data?.month, filters.data?.season, filters.data?.university]);

  React.useEffect(() => {
    calActive();
  }, [calActive]);

  return (
    <TourContext.Provider
      value={{
        activeCount,
        filters: optimisticFilters || {},
        isPending,
        resetFilters,
        updateFilters,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};
