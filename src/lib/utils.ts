import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function slow(delay: number = 1000) {
  await new Promise((resolve) => {
    return setTimeout(resolve, delay);
  });
}

export const monthNames = {
  january: "มกราคม",
  february: "กุมภาพันธ์",
  march: "มีนาคม",
  april: "เมษายน",
  may: "พฤษภาคม",
  june: "มิถุนายน",
  july: "กรกฎาคม",
  august: "สิงหาคม",
  september: "กันยายน",
  october: "ตุลาคม",
  november: "พฤศจิกายน",
  december: "ธันวาคม",
} as const;

export const seasonNames = {
  autumn: "ฤดูใบไม้ร่วง",
  spring: "ฤดูใบไม้ผลิ",
  summer: "ฤดูร้อน",
  winter: "ฤดูหนาว",
} as const;

export const getMonthName = (month: number | undefined) => {
  switch (month) {
    case 1:
      return "january";
    case 2:
      return "february";
    case 3:
      return "march";
    case 4:
      return "april";
    case 5:
      return "may";
    case 6:
      return "june";
    case 7:
      return "july";
    case 8:
      return "august";
    case 9:
      return "september";
    case 10:
      return "october";
    case 11:
      return "november";
    case 12:
      return "december";
    default:
      return "";
  }
};
