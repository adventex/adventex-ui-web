import * as React from "react";

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const baseUrl = process.env.BASE_URL ? process.env.BASE_URL : "";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export default function ContactFormEmail({ name, email, subject, message, submittedAt }: ContactFormEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <title>New Contact Form Submission</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                accent: "hsl(0 0% 96.1%)",
                "accent-foreground": "hsl(0 0% 9%)",
                background: "hsl(0 0% 100%)",
                border: "hsl(0 0% 89.8%)",
                destructive: "hsl(0 84.2% 60.2%)",
                "destructive-foreground": "hsl(0 0% 98%)",
                foreground: "hsl(0 0% 3.9%)",
                muted: "hsl(0 0% 96.1%)",
                "muted-foreground": "hsl(0 0% 45.1%)",
                primary: "hsl(0 72.2% 50.6%)",
                "primary-foreground": "hsl(0 85.7% 97.3%)",
                secondary: "hsl(0 0% 96.1%)",
                "secondary-foreground": "hsl(0 0% 9%)",
              },
            },
          },
        }}
      >
        <Body className="bg-background font-sans">
          <Container className="mx-auto my-10 max-w-2xl p-4">
            <Section className="rounded-t-lg bg-primary-foreground p-8">
              <Img src={`${baseUrl}/favicon.ico`} width="40" height="40" alt="Adventex Logo" className="mb-4" />
              <Heading className="text-2xl font-bold text-primary">New Contact Form Submission</Heading>
            </Section>
            <Section className="rounded-b-lg bg-card p-8 shadow-xl">
              <Text className="mb-6 text-foreground">Hello Adventex Team,</Text>
              <Text className="mb-6 text-foreground">
                You have received a new message from the contact form on your website. Here are the details:
              </Text>
              <Section className="mb-6 rounded-lg bg-accent p-6">
                <Text className="mb-2 font-semibold text-accent-foreground">Name:</Text>
                <Text className="mb-4 text-accent-foreground">{name}</Text>
                <Text className="mb-2 font-semibold text-accent-foreground">Email:</Text>
                <Text className="mb-4 text-accent-foreground">{email}</Text>
                <Text className="mb-2 font-semibold text-accent-foreground">Subject:</Text>
                <Text className="mb-4 text-accent-foreground">{subject}</Text>
                <Text className="mb-2 font-semibold text-accent-foreground">Message:</Text>
                <Text className="mb-4 whitespace-pre-wrap text-accent-foreground">{message}</Text>
                <Text className="mb-2 font-semibold text-accent-foreground">Submitted at:</Text>
                <Text className="text-accent-foreground">{submittedAt}</Text>
              </Section>
              <Text className="mb-6 text-foreground">
                To respond to this inquiry, you can reply directly to this email or use the buttons below:
              </Text>
              <Section className="mb-6">
                <Button
                  href={`mailto:${email}?subject=Re: ${encodeURIComponent(subject)}`}
                  className="mr-4 transform rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-md transition duration-300 ease-in-out hover:-translate-y-1"
                >
                  Reply to {name}
                </Button>
              </Section>
              <Hr className="my-6 border-border" />
              <Text className="text-sm text-muted-foreground">
                This email was sent from the contact form on your Adventex website. If you did not expect this message,
                please contact your website administrator.
              </Text>
              <Text className="mt-4 text-sm text-muted-foreground">
                © {new Date().getFullYear()} Adventex Co., Ltd. All rights reserved.
              </Text>
              <Link href={`${baseUrl}/privacy-policy"`} className="mt-2 block text-sm text-primary hover:underline">
                Privacy Policy
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
