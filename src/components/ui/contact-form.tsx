"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useEffect } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: state.fields?.name || "",
      email: state.fields?.email || "",
      message: state.fields?.message || "",
    }
  });

  useEffect(() => {
    if (state.success) {
      reset(); // Reset form fields on successful submission
    }
  }, [state.success, reset]);

  return (
    <form action={formAction} onSubmit={handleSubmit(formAction)} className="space-y-6">
      {state.message && (
        <Alert variant={state.success ? "default" : "destructive"} className={state.success ? "bg-green-50 dark:bg-green-900/30 border-green-300 dark:border-green-700" : ""}>
          {state.success ? <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" /> : <AlertCircle className="h-4 w-4" />}
          <AlertTitle>{state.success ? "Success!" : "Error!"}</AlertTitle>
          <AlertDescription>
            {state.message}
            {state.issues && (
              <ul className="list-disc list-inside mt-2">
                {state.issues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            )}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" {...register("name")} placeholder="John Doe" aria-invalid={errors.name ? "true" : "false"} />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" {...register("email")} placeholder="you@example.com" aria-invalid={errors.email ? "true" : "false"} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea id="message" {...register("message")} placeholder="Let's talk about..." rows={5} aria-invalid={errors.message ? "true" : "false"} />
        {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
