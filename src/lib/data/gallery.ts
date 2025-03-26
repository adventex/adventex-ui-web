import { connection } from "next/server";

import { z } from "zod";

import { prisma } from "@/db";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filterSchema = z.object({
  page: z.coerce.number().default(1).optional(),
  pageSize: z.coerce.number().default(9).optional(),
});

type Filters = z.infer<typeof filterSchema>;

export const getCountGallery = async () => {
  return prisma.gallery.count();
};

export const getGallery = async (filters: Filters | undefined) => {
  await connection();

  const skip = ((filters?.page ?? 1) - 1) * (filters?.pageSize ?? 9);
  const take = filters?.pageSize ?? 9;

  return prisma.gallery.findMany({
    skip,
    take,
  });
};
