import type { Tour } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { calendars, contents } from "./data";

const prisma = new PrismaClient();

export async function updateCalendar(tours: Tour[]) {
  for (const tour of tours) {
    const calendarData = calendars.find((cal) => cal.id === tour.id);

    if (calendarData) {
      // Delete existing calendar entries for this tour
      await prisma.calendar.deleteMany({
        where: { tourId: tour.id },
      });

      // Create new calendar entries
      await Promise.all(
        calendarData.calendar.map((cal) =>
          prisma.calendar.create({
            data: {
              month: cal.month,
              dates: cal.dates,
              tourId: tour.id,
            },
          })
        )
      );
      console.log(`Updated calendar for tour ${tour.id}`);
    }
  }
}

async function main() {
  console.log("Start seeding...");

  const tours = await prisma.tour.findMany({
    select: {
      id: true,
    },
  });

  for (const tour of tours) {
    const content = contents.find((con) => con.id === tour.id);

    if (content) {
      await prisma.tour.update({
        data: {
          content: content.content,
        },
        where: {
          id: tour.id,
        },
      });

      console.log(`Updated content for tour ${tour.id}`);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
