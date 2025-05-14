// src/app/actions.ts
"use server";

import { z } from "zod";
import type { ContactFormData } from "@/types";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export interface ContactFormState {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
}

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  const { name, email, message } = parsed.data as ContactFormData;

  // Simulate sending an email or saving to a database
  console.log("Contact Form Submission Received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  // TODO: Implement actual email sending logic here (e.g., using Resend, Nodemailer, or another email service)

  // For demonstration, we'll just return a success message.
  // In a real application, you would handle potential errors from the email sending service.
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  return { 
    message: `Thank you, ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon.`,
    success: true 
  };
}
