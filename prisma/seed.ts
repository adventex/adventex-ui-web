import { PrismaClient } from "@prisma/client";

// import { initialPrograms } from '@/data/services/tour';
// import { initialUniversities } from '@/data/services/university';

const images = [
  {
    alt: "Gallery image 1",
    height: 800,
    src: "/images/gallery/GALLERY_1.png",
    width: 600,
  },
  {
    alt: "Gallery image 2",
    height: 400,
    src: "/images/gallery/GALLERY_2.png",
    width: 600,
  },
  {
    alt: "Gallery image 3",
    height: 400,
    src: "/images/gallery/GALLERY_3.png",
    width: 600,
  },
  {
    alt: "Gallery image 4",
    height: 400,
    src: "/images/gallery/GALLERY_4.png",
    width: 600,
  },
  {
    alt: "Gallery image 5",
    height: 400,
    src: "/images/gallery/GALLERY_5.png",
    width: 600,
  },
  {
    alt: "Gallery image 6",
    height: 400,
    src: "/images/gallery/GALLERY_6.png",
    width: 600,
  },
  {
    alt: "Gallery image 7",
    height: 400,
    src: "/images/gallery/GALLERY_7.png",
    width: 600,
  },
  {
    alt: "Gallery image 8",
    height: 400,
    src: "/images/gallery/GALLERY_8.png",
    width: 600,
  },
  {
    alt: "Gallery image 9",
    height: 400,
    src: "/images/gallery/GALLERY_9.png",
    width: 600,
  },
  {
    alt: "Gallery image 9",
    height: 400,
    src: "/images/gallery/GALLERY_9.png",
    width: 600,
  },
  {
    alt: "Gallery image 10",
    height: 400,
    src: "/images/gallery/GALLERY_10.png",
    width: 600,
  },
  {
    alt: "Gallery image 11",
    height: 400,
    src: "/images/gallery/GALLERY_11.png",
    width: 600,
  },
  {
    alt: "Gallery image 12",
    height: 400,
    src: "/images/gallery/GALLERY_12.png",
    width: 600,
  },
  {
    alt: "Gallery image 13",
    height: 400,
    src: "/images/gallery/GALLERY_13.png",
    width: 600,
  },
  {
    alt: "Gallery image 14",
    height: 400,
    src: "/images/gallery/GALLERY_14.png",
    width: 600,
  },
  {
    alt: "Gallery image 15",
    height: 400,
    src: "/images/gallery/GALLERY_15.png",
    width: 600,
  },
  {
    alt: "Gallery image 16",
    height: 400,
    src: "/images/gallery/GALLERY_16.png",
    width: 600,
  },
];

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Seed Universities
  // for (const university of initialUniversities) {
  //   const { about, ...universityData } = university;
  //   const upsertedUniversity = await prisma.university.upsert({
  //     create: {
  //       ...universityData,
  //       about: {
  //         create: about,
  //       },
  //     },
  //     update: universityData,
  //     where: { id: university.id },
  //   });

  //   console.log(`Upserted university with id: ${upsertedUniversity.id}`);

  //   // Seed Tours for each University
  //   const toursForUniversity = initialPrograms.filter(program => {
  //     return program.university === university.aka;
  //   });

  //   for (const tour of toursForUniversity) {
  //     const { itinerary, rooms, university, ...tourData } = tour;
  //     const upsertedTour = await prisma.tour.upsert({
  //       create: {
  //         ...tourData,
  //         itinerary: {
  //           create: itinerary,
  //         },
  //         rooms: {
  //           create: rooms,
  //         },
  //         universityId: upsertedUniversity.id,
  //       },
  //       update: {
  //         ...tourData,
  //         universityId: upsertedUniversity.id,
  //       },
  //       where: { id: tour.id },
  //     });

  //     console.log(`Upserted tour with id: ${upsertedTour.id}`);
  //   }
  // }

  for (const image of images) {
    const { id } = await prisma.gallery.create({
      data: {
        alt: image.alt,
        height: image.height,
        src: image.src,
        width: image.width,
      },
      select: {
        id: true,
      },
    });

    console.info(`Create gallery with id: ${id}`);
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
