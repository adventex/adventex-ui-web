"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowRight, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { type ErrorType, errorConfigs } from "@/config/error";

interface ErrorPageProps {
  type: ErrorType;
  customDescription?: string;
}

export function ErrorPage({ type, customDescription }: ErrorPageProps) {
  const router = useRouter();
  const config = errorConfigs[type];

  const handlePrimaryAction = () => {
    if (config.primaryAction?.href === "#") {
      router.refresh();
    }
  };

  return (
    <div className="min-h-[80vh] bg-background px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold text-primary">{config.code}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{config.title}</h1>

        <p className="mt-6 text-base leading-7 text-muted-foreground">{customDescription || config.description}</p>

        <div className="mt-10 flex flex-col gap-6">
          {config.suggestions.map((suggestion, index) => {
            return (
              <div key={index} className="rounded-lg border bg-card p-6">
                <p className="text-card-foreground">{suggestion}</p>
              </div>
            );
          })}

          {config.primaryAction && (
            <div className="rounded-lg border bg-card p-6">
              <Button className="w-full" onClick={handlePrimaryAction} asChild={config.primaryAction.href !== "#"}>
                {config.primaryAction.href === "#" ? (
                  <>
                    {config.primaryAction.label}
                    <RefreshCcw className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <Link href={config.primaryAction.href}>
                    {config.primaryAction.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </Button>
            </div>
          )}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">Sorry for the detour. Happy browsing!</p>
      </div>
    </div>
  );
}
