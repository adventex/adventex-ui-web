import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-background px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-left">
        <Image src="/favicon.ico" alt="logo" width={34} height={34} />
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Error 404</h1>

        <p className="mt-6 text-base leading-7 text-muted-foreground">
          It seems like the tour you were looking for has moved, changed, or perhaps it was never here to begin with. No
          worries though, we can help you navigate back!
        </p>

        <div className="mt-10 flex flex-col gap-6">
          <div className="rounded-lg border bg-card p-6">
            <p className="text-card-foreground">Try checking the URL for any errors, then hit refresh.</p>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <p className="text-card-foreground">
              Use the search bar at the top of the page to find what you were looking for.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <p className="mb-4 text-card-foreground">Or simply head back to our homepage</p>
            <Button asChild className="w-full">
              <Link href="/">
                Go to Home Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">Sorry for the detour. Happy browsing!</p>
      </div>
    </div>
  );
}
