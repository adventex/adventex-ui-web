import * as React from "react";

import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import { META_THEME_COLORS, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { PostHogProvider as PHProvider } from "@/providers/posthog";
import { SuspendedPostHogPageView as PostHogPageView } from "@/components/PostHogPageView";

import "@/styles/globals.css";

const fontSans = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  description: siteConfig.description,
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
  keywords: [
    "บริษัท แอดเวนเท็กซ์ อินเตอร์เนชั่นแนล กรุ๊ป จำกัด",
    "บริษัท แอดเวนเท็กซ์ อินเตอร์เนชั่นแนล",
    "บริษัท แอดเวนเท็กซ์",
    "แอดเวนเท็กซ์",
    "แอดเวนเท็กซ",
    "แอดเวนเท็ก",
    "แอดเวนเทก",
    "แอดเวนเทค",
    "adventex",
    "adventex education",
    "adventex international",
    "Adventex",
    "Adventex Education",
    "Adventex International",
    "เรียนต่อต่างประเทศ",
    "ศึกษาต่อต่างประเทศ",
    "เรียนต่อจีน",
    "ศึกษาต่อจีน",
    "แพ็คเกจเรียนต่างประเทศ",
    "study abroad",
    "study in China",
    "Chinese language courses",
    "international education",
    "หลักสูตรภาษาจีน",
    "ภาษาที่สาม",
    "third language",
    "ที่ปรึกษาการศึกษาต่างประเทศ",
    "education consultant",
    "ทุนการศึกษาต่างประเทศ",
    "international scholarships",
    "มหาวิทยาลัยในจีน",
    "Chinese universities",
    "Harbin Institute of Technology",
    "HIT",
    "Hunan University",
    "HNU",
    "study tours",
    "ทัวร์การศึกษา",
    "การเตรียมตัวเรียนต่างประเทศ",
    "prepare for study abroad",
    "วีซ่านักเรียน",
    "student visa",
    "หอพักนักศึกษาต่างชาติ",
    "international student accommodation",
  ],
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-svh bg-background font-sans antialiased", fontSans.variable)}>
        <PHProvider>
          <PostHogPageView />
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-svh flex-col bg-background">{children}</div>
          </div>
        </PHProvider>
      </body>
      <GoogleAnalytics gaId="G-ZY9HG5TZV7" />
    </html>
  );
}
