import * as React from "react";

import { prisma } from "@/db";

export const getUniversity = React.cache((id: string) => {
  return prisma.university.findUnique({
    select: {
      about: {
        select: {
          id: true,
          items: true,
          title: true,
        },
      },
      id: true,
      images: true,
      name: true,
    },
    where: {
      id,
    },
  });
});
