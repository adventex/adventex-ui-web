import Link from "next/link";

import { siteConfig } from "@/config/site";

import { CommandMenu } from "./command-menu";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";

export const SiteHeader = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center gap-0.5">
              <Button
                variant="outline"
                className="size-8 w-full rounded-lg bg-muted/50 text-sm font-normal text-muted-foreground shadow-none"
                asChild
              >
                <Link href={siteConfig.links.line} target="_blank" rel="noreferrer">
                  <Icons.line className="size-4" />
                  <span className="hidden sm:inline-flex">ติดต่อ</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
