// src/components/ui/contact-form.tsx
"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect } from "react"; // Changed from useFormState (react-dom) to useActionState (react)
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { submitContactForm, type ContactFormState } from "@/app/actions";
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
  // Updated to use useActionState
  const [state, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, initialState);
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { // Set initial defaultValues which might be overridden by useEffect if state.fields exists
      name: "",
      email: "",
      message: "",
    }
  });

  useEffect(() => {
    if (state.success) {
      reset(); // Reset form fields on successful submission
    } else if (state.fields) {
      // If form submission failed and we have field values, repopulate them
      // This helps retain user input on server-side validation errors
      setValue("name", state.fields.name || "");
      setValue("email", state.fields.email || "");
      setValue("message", state.fields.message || "");
    }
  }, [state, reset, setValue]);


  // The handleSubmit from react-hook-form is not directly compatible with formAction from useActionState in the same way.
  // react-hook-form's handleSubmit is for client-side validation before submitting.
  // Server actions are typically called directly in the form's `action` prop.
  // We can still use react-hook-form for client-side validation and then manually call formAction or let the form submit.
  // For this setup, we let RHF handle client validation, and if successful, the form's native `action` (which is `formAction`) will be triggered.
  // The `onSubmit` from `handleSubmit(formAction)` is not quite right here.
  // `handleSubmit` expects a function that receives the validated data.
  // `formAction` from `useActionState` expects `(prevState, formData) => ...`
  // The simplest way to integrate is to use `form.handleSubmit` to run client validation,
  // and if it passes, then `formAction` (the server action) is called by the form's `action` prop.
  // RHF's `handleSubmit` is usually for client-side submission logic, not directly passing to a server action hook like this.
  // The `action` prop on the form should directly take the server action.
  // `react-hook-form` can progressively enhance this.

  const onFormSubmit = (data: ContactFormValues) => {
    // This function is called by RHF's handleSubmit after client-side validation passes.
    // We need to construct FormData to pass to the server action.
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key as keyof ContactFormValues]);
    });
    // Manually call the action. This is one way to do it.
    // Or, ensure the form's `action` attribute is set to `formAction` and RHF doesn't prevent default.
    // The `formAction` here is the one returned by `useActionState`.
    (formAction as (payload: FormData) => void)(formData);

  };
  
  // Pass the server action directly to the form's `action` prop.
  // RHF's `handleSubmit` will perform client-side validation. If it passes,
  // the form will submit, and the `formAction` (server action) will be invoked.
  return (
    <form action={formAction} onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
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
