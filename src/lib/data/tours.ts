import { cache } from "react";
import { connection } from "next/server";

import { z } from "zod";

import { prisma } from "@/db";
import type { Tour } from "@prisma/client";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

export const getTours = async (filters: Filters | undefined) => {
  await connection();

  const skip = ((filters?.page ?? 1) - 1) * (filters?.pageSize ?? 9);
  const take = filters?.pageSize ?? 9;

  return prisma.tour.findMany({
    where: {
      AND: [
        filters?.duration
          ? {
              duration: {
                equals: filters.duration,
                mode: "insensitive",
              },
            }
          : {},
        filters?.month
          ? {
              startDate: {
                gte: new Date(`${filters.month}, 1, 2025`),
              },
            }
          : {},
        filters?.season
          ? {
              season: {
                equals: filters.season,
                mode: "insensitive",
              },
            }
          : {},
        filters?.university
          ? {
              university: {
                aka: {
                  equals: filters.university,
                  mode: "insensitive",
                },
              },
            }
          : {},
      ],
    },
    include: {
      calendars: true,
    },
    orderBy: {
      defaultPrice:
        filters?.sort === "none"
          ? "asc"
          : filters?.sort === "price-asc"
            ? "asc"
            : filters?.sort === "price-desc"
              ? "desc"
              : "asc",
    },
    skip: skip,
    take: take,
  });
};

export const getCountTours = async (filters: Filters | undefined) => {
  return prisma.tour.count({
    orderBy: {
      defaultPrice: "asc",
    },
    where: {
      AND: [
        filters?.duration
          ? {
              duration: {
                equals: filters.duration,
                mode: "insensitive",
              },
            }
          : {},
        filters?.month
          ? {
              startDate: {
                gte: new Date(`${filters.month}, 1, 2025`),
              },
            }
          : {},
        filters?.season
          ? {
              season: {
                equals: filters.season,
                mode: "insensitive",
              },
            }
          : {},
        filters?.university
          ? {
              university: {
                aka: {
                  equals: filters.university,
                  mode: "insensitive",
                },
              },
            }
          : {},
      ],
    },
  });
};

export const getTour = cache(async (id: string) => {
  return prisma.tour.findUnique({
    where: {
      id,
    },
    include: {
      itinerary: true,
    },
  });
});

export const getRelatedTour = async (
  tour: Tour,
  university: {
    name: string;
    id: string;
    about: {
      id: number;
    }[];
    images: string[];
  }
) => {
  return prisma.tour.findMany({
    where: {
      AND: [
        {
          id: {
            not: tour.id,
          },
        },
        {
          universityId: {
            equals: university.id,
          },
        },
        {
          type: {
            equals: tour.type,
          },
        },
      ],
    },
    include: {
      calendars: true,
    },
    take: 3,
  });
};

export const featuredTours = [
  {
    availableDate: ["MARCH", "SEPTEMBER"],
    coverImage: "/images/tours/ADSTUDYHARBIN_SUMMER21DAYS.png",
    defaultPrice: 55900,
    description:
      "เรียนกับมหาวิทยาลัยชื่อดัง Harbin Institute of Technology !! Top 10 ของประเทศจีน พร้อมทัศนศึกษา 10 สถานที่ดังเมืองฮาร์บิน พร้อมกิจกรรมเรียนวัฒนธรรมจีน มอบทั้งความรู้และประสบการณ์ประเทศจีน 🇨🇳",
    duration: "LONG",
    endDate: new Date(),
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    content: "",
    id: "19",
    itinerary: [
      {
        activities: [
          "พบกับที่สนามบินสุวรรณภูมิและออกเดินทางไปประเทศจีน",
          "สอบวัดระดับพื้นฐานและเยี่ยมชมมหาวิทยาลัย HIT",
          "เข้าคลาสเรียนภาษาจีนช่วงเช้า (08:30-12:00)",
          "ปรับพื้นฐานทำกิจกรรมกับเพื่อน",
          "เรียนรู้วิถีชีวิตและวัฒนธรรมจีนของมหาวิทยาลัย",
          "เยี่ยมชม 圣索菲亚大教堂 โบสถ์เซนต์โซเฟีย, 中央大街 ถนนจงยาง (Zhongyang Street),แม่น้ำซงฮัว 松花江",
        ],
        description: "เริ่มต้นการปรับตัวและการเรียนภาษาจีน พร้อมทำความรู้จักกับมหาวิทยาลัย HIT",
        title: "Orientation and Language Studies Begin",
        week: "Week 1 (MAR 22 - MAR 28)",
      },
      {
        activities: [
          "เรียนภาษาจีนและเรียนรู้วัฒนธรรมของจีน",
          "ทัศนศึกษา: โรงเทศกาลแกะสลักน้ำแข็ง",
          "พาเที่ยวนั่งกระเช้าลอยฟ้า 松花江索道 และเยี่ยมชมเกาะพระอาทิตย์ 太阳岛景区",
        ],
        description: "สัปดาห์แห่งการเรียนรู้ภาษาและวัฒนธรรมจีน พร้อมทัศนศึกษาสถานที่สำคัญ",
        title: "Culture and Language Immersion",
        week: "Week 2 (MAR 29 - APR 4)",
      },
      {
        activities: [
          "พาเที่ยววัดจี๋เล่อ (极乐寺)",
          "เยี่ยมชมเมืองเก่าฮาร์บิน (中华巴洛克)",
          "เยี่ยมชมสวนเสือฮาร์บิน",
          "พาชมโรงละครฮาร์บิน",
          "เรียนภาษาจีนและเรียนรู้วัฒนธรรมของจีน",
          "เดินทางกลับประเทศไทยโดยสวัสดิภาพ พร้อมความประทับใจ",
        ],
        description:
          "เรียนรู้เชิงลึกเกี่ยวกับวัฒนธรรมและภาษาจีน พร้อมทัศนศึกษาสถานที่สำคัญ เดินทางกลับไทยพร้อมความประทับใจ",
        title: "Advanced Studies and Cultural Activities",
        week: "Week 3 (APR 5 - APR 12)",
      },
    ],
    location: "Harbin, China",
    period: "21 วัน",
    rooms: [
      {
        name: "Single room",
        price: 55900,
      },
    ],
    season: "SPRING",
    startDate: new Date(),
    title: "เรียนจีน เที่ยวจีน 3 สัปดาห์ พร้อมศึกษาวัฒนธรรมจีน (เมษายน) ฮาร์บิน (HIT)",
    tourCode: "HITSUMMER2025",
    type: "STUDY",
    university: "HIT",
    universityId: "1",
    calendars: [
      {
        id: "1",
        month: "มิ.ย.",
        dates: ["30"],
        tourId: "19",
      },
      {
        id: "2",
        month: "ก.ค.",
        dates: ["1-27"],
        tourId: "19",
      },
    ],
  },
  {
    availableDate: ["MARCH", "SEPTEMBER"],
    coverImage: "/images/tours/ADOCTOBERCAMP.png",
    defaultPrice: 46900,
    description:
      "เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",
    duration: "SHORT",
    endDate: new Date(),
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    content: "",
    id: "2",
    itinerary: [
      {
        activities: [
          "วันที่ 12: เดินทางถึงสุวรรณภูมิและเดินทางไปฮาร์บิน",
          "วันที่ 13: ทานบุฟเฟ่ต์เที่ยงและเยี่ยมชมมหาวิทยาลัย",
          "วันที่ 14-18: เรียนภาษาจีนช่วงเช้า",
          "เยี่ยมชมสถานที่สำคัญ เช่น แม่น้ำซงหัว",
          "เยี่ยมชมอุทยานแห่งชาติเกาะพระอาทิตย์",
          "ทำกิจกรรมเชื่อมความสัมพันธ์",
        ],
        description: "เริ่มต้นการเดินทางสู่เมืองฮาร์บิน พร้อมเริ่มเรียนภาษาจีนและทำความรู้จักกับเมือง",
        title: "Arrival and First Week in Harbin",
        week: "Week 1",
      },
      {
        activities: [
          "วันที่ 19: ทัศนศึกษาหมู่บ้านรัสเซีย",
          "วันที่ 20: วันอิสระพักผ่อนตามอัธยาศัย",
          "วันที่ 21-25: เรียนภาษาจีนภาคเช้า",
          "เยี่ยมชมวัดจีโล่",
          "เยี่ยมชมโรงละครซาปิน",
          "กิจกรรมเยี่ยมชมความอัจฉริยะ",
        ],
        description: "สัปดาห์แห่งการเรียนรู้ภาษาและวัฒนธรรม พร้อมทัศนศึกษาสถานที่สำคัญ",
        title: "Cultural Experience and Study",
        week: "Week 2",
      },
      {
        activities: ["วันที่ 26: เที่ยวสวนสัตว์", "วันที่ 27: เดินทางกลับประเทศไทยโดยสวัสดิภาพ"],
        description: "ช่วงสุดท้ายของการเดินทางและเตรียมตัวกลับประเทศไทย",
        title: "Wrap-up and Departure",
        week: "Final Weekend",
      },
    ],
    location: "Harbin, China",
    period: "14 วัน",
    rooms: [
      {
        name: "Single room",
        price: 46900,
      },
    ],
    season: "SPRING",
    startDate: new Date(),
    title: "เรียนจีน เที่ยวจีน 2 สัปดาห์ ฮาร์บิน (HIT)",
    tourCode: "HITOCT2025",
    type: "STUDY",
    university: "HIT",
    universityId: "1",
    calendars: [
      {
        id: "1",
        month: "ต.ค.",
        dates: ["12-27"],
        tourId: "2",
      },
    ],
  },
  {
    availableDate: ["MARCH", "SEPTEMBER"],
    coverImage: "/images/tours/ADSTUDYMAR2M.png",
    defaultPrice: 55990,
    description:
      "โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",
    duration: "SHORT",
    endDate: new Date(),
    highlights: [
      "ค่าตั๋วเครื่องบิน ไป - กลับ",
      "ค่าลงทะเบียนเรียน",
      "ค่ารถรับส่งสนามบิน",
      "ค่าประกันอุบัติเหตุ",
      "ค่าซิมเครือข่ายในประเทศจีน",
      "ค่าหอพัก",
      "วีซ่านักเรียน",
    ],
    content: "",
    id: "6",
    itinerary: [],
    location: "Harbin, China",
    period: "60 วัน",
    rooms: [
      {
        name: "Single room",
        price: 55990,
      },
    ],
    season: "SPRING",
    startDate: new Date(),
    title: "เรียนจีน เที่ยวจีน 2 เดือน ฮาร์บิน (HIT)",
    tourCode: "HIT2M2025",
    type: "STUDY",
    university: "HIT",
    universityId: "1",
    calendars: [
      {
        id: "1",
        month: "เม.ษ.",
        dates: ["1 - 30"],
        tourId: "6",
      },
      {
        id: "2",
        month: "พ.ค.",
        dates: ["1 - 31"],
        tourId: "6",
      },
    ],
  },
];
