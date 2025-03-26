"use client";

import * as React from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { z } from "zod";

const filterSchema = z.object({
  page: z.coerce.number().default(1).optional(),
  pageSize: z.coerce.number().default(9).optional(),
});

type Filters = z.infer<typeof filterSchema>;

type GalleryContextProps = {
  filters: Filters;
  isPending: boolean;
  updateFilters: (updates: Partial<Filters>) => void;
};

const GalleryContext = React.createContext<GalleryContextProps | null>(null);

export function useGallery() {
  const context = React.useContext(GalleryContext);

  if (!context) {
    throw new Error("useGallery must be used within a <GalleryProvider />");
  }

  return context;
}

export const GalleryProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const filters = filterSchema.safeParse({
    page: searchParams.get("page") ?? 1,
    pageSize: searchParams.get("pageSize") ?? 9,
  });

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
    const newState = {
      ...optimisticFilters,
      ...updates,
    };
    const newSearchParams = new URLSearchParams();

    Object.entries(newState).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          newSearchParams.append(key, v);
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

  return (
    <GalleryContext.Provider
      value={{
        filters: optimisticFilters || {},
        isPending,
        updateFilters,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
