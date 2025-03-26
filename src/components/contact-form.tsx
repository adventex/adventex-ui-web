"use client";

import { AlertCircle, Check } from "lucide-react";
import Form from "next/form";
import * as React from "react";

import { contactFormAction } from "@/actions/contact";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [state, action, pending] = React.useActionState(contactFormAction, {
    defaultValues: {
      email: "",
      message: "",
      name: "",
      subject: "",
    },
    errors: null,
    success: false,
  });

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle>เราช่วยอะไรคุณได้บ้าง?</CardTitle>
        <CardDescription>ต้องการความช่วยเหลือเกี่ยวกับโครงการของคุณ? เรายินดีให้คำปรึกษา</CardDescription>
      </CardHeader>
      <Form action={action}>
        <CardContent className="flex flex-col gap-6">
          {state.success ? (
            <div className="flex items-center gap-2 rounded bg-green-400 p-4">
              <Check className="size-4 rounded-full border text-muted" />
              <p className="text-sm text-muted-foreground">ข้อความของคุณถูกส่งเรียบร้อยแล้ว ขอบคุณครับ/ค่ะ</p>
            </div>
          ) : null}
          {state.errors?.form ? (
            <p className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="size-4" />
              {state.errors.form}
            </p>
          ) : null}
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.name}>
            <Label htmlFor="name" className="group-data-[invalid=true]/field:text-destructive">
              ชื่อ <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="สมชาย ใจดี"
              className="rounded-md shadow-none group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.name}
              aria-errormessage="error-name"
              defaultValue={state.defaultValues.name}
            />
            {state.errors?.name && (
              <p id="error-name" className="text-sm text-destructive">
                {state.errors.name}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.email}>
            <Label htmlFor="email" className="group-data-[invalid=true]/field:text-destructive">
              อีเมล <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="somchai@example.com"
              className="rounded-md shadow-none group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.email}
              aria-errormessage="error-email"
              defaultValue={state.defaultValues.email}
            />
            {state.errors?.email && (
              <p id="error-email" className="text-sm text-destructive">
                {state.errors.email}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.message}>
            <Label htmlFor="message" className="group-data-[invalid=true]/field:text-destructive">
              หัวข้อ <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="หัวข้อของคุณ..."
              className="rounded-md shadow-none group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.subject}
              aria-errormessage="error-subject"
              defaultValue={state.defaultValues.subject}
            />
            {state.errors?.subject && (
              <p id="error-subject" className="text-sm text-destructive">
                {state.errors.subject}
              </p>
            )}
          </div>
          <div className="group/field grid gap-2" data-invalid={!!state.errors?.message}>
            <Label htmlFor="message" className="group-data-[invalid=true]/field:text-destructive">
              ข้อความ <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="พิมพ์ข้อความของคุณที่นี่..."
              className="rounded-md shadow-none group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
              disabled={pending}
              aria-invalid={!!state.errors?.message}
              aria-errormessage="error-message"
              defaultValue={state.defaultValues.message}
            />
            {state.errors?.message && (
              <p id="error-message" className="text-sm text-destructive">
                {state.errors.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="sm" disabled={pending}>
            {pending ? "กำลังส่ง..." : "ส่งข้อความ"}
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
