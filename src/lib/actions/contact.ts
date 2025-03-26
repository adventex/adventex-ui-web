"use server";

import { Resend } from "resend";
import { z, ZodError } from "zod";

import AutoReplyEmail from "@/lib/emails/auto-reply";
import ContactFormEmail from "@/lib/emails/contact-form";
import { contactFormSchema } from "@/lib/validations";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactFormAction(_prevState: unknown, formData: FormData) {
  const defaultValues = z.record(z.string(), z.string()).parse(Object.fromEntries(formData.entries()));

  const submittedAt = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });

  try {
    const data = contactFormSchema.parse(Object.fromEntries(formData));

    const { error } = await resend.emails.send({
      from: "Adventex Contact Form <onboarding@resend.dev>",
      react: ContactFormEmail({
        email: data.email,
        message: data.message,
        name: data.name,
        subject: data.subject,
        submittedAt,
      }),
      subject: `${data.subject}`,
      to: "support@adventex.co.th",
    });

    if (error) {
      return {
        defaultValues,
        errors: {
          form: "Failed to send email. Please try again later.",
        },
        success: false,
      };
    }

    await sendAutoReply(data.name, data.email);

    return {
      defaultValues: {
        email: "",
        message: "",
        name: "",
        subject: "",
      },
      errors: null,
      success: true,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        defaultValues,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => {
            return [key, value?.join(", ")];
          })
        ),
        success: false,
      };
    }

    return {
      defaultValues,
      errors: {
        form: "Failed to send email. Please try again later.",
      },
      success: false,
    };
  }
}

async function sendAutoReply(name: string, email: string) {
  await resend.emails.send({
    from: "Adventex Support <support@adventex.co.th>",
    react: AutoReplyEmail({ name }),
    subject: "Thank you for contacting Adventex",
    to: email,
  });
}
