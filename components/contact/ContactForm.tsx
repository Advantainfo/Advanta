"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { BUDGET_OPTIONS, SERVICE_OPTIONS, contactSchema, type ContactFormValues } from "@/lib/validation/contact";
import { FieldWrapper, Select, TextArea, TextInput } from "@/components/contact/FormField";
import { Button } from "@/components/ui/Button";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  // Set from an effect (not at declaration) to keep render pure — Date.now()
  // is an impure call and must not run during the render phase.
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: undefined,
      budget: undefined,
      message: "",
      website: "",
      startedAt: 0,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    if (state === "submitting") return;
    setState("submitting");
    setServerMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setState("error");
        setServerMessage(data.message ?? "Something went wrong. Please try again or contact us directly.");
        return;
      }

      setState("success");
      setServerMessage(data.message ?? "Thank you. Your project inquiry has been sent. We'll be in touch shortly.");
      reset();
      startedAt.current = Date.now();
    } catch {
      setState("error");
      setServerMessage("Something went wrong. Please try again or contact us directly.");
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        role="status"
        className="animated-border rounded-2xl bg-bg-panel/60 p-8"
      >
        <p className="text-xs font-medium tracking-[0.25em] text-cyan uppercase">Sent</p>
        <p className="mt-4 text-2xl font-semibold tracking-tight text-fg">
          Thank you. Your project inquiry has been sent.
        </p>
        <p className="mt-2 text-base text-fg-muted">We&apos;ll be in touch shortly.</p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-medium text-fg-muted underline underline-offset-4 hover:text-fg"
        >
          Send another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        void handleSubmit(onSubmit)(event);
      }}
      noValidate
      className="flex flex-col gap-6"
    >
      {/* Honeypot — hidden from sighted and keyboard users, left for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldWrapper label="Name" htmlFor="name" required error={errors.name?.message}>
          <TextInput
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </FieldWrapper>

        <FieldWrapper label="Company" htmlFor="company" error={errors.company?.message}>
          <TextInput id="company" autoComplete="organization" {...register("company")} />
        </FieldWrapper>

        <FieldWrapper label="Email" htmlFor="email" required error={errors.email?.message}>
          <TextInput
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </FieldWrapper>

        <FieldWrapper label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <TextInput id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </FieldWrapper>

        <FieldWrapper label="Service" htmlFor="service" required error={errors.service?.message}>
          <Select
            id="service"
            defaultValue=""
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FieldWrapper>

        <FieldWrapper label="Budget" htmlFor="budget" required error={errors.budget?.message}>
          <Select
            id="budget"
            defaultValue=""
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            {...register("budget")}
          >
            <option value="" disabled>
              Select a budget range
            </option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </FieldWrapper>
      </div>

      <FieldWrapper label="Project details" htmlFor="message" required error={errors.message?.message}>
        <TextArea
          id="message"
          rows={6}
          placeholder="Tell us about the project, timeline and goals."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </FieldWrapper>

      {state === "error" && serverMessage ? (
        <p role="alert" className="text-sm text-magenta">
          {serverMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={state === "submitting"} className="w-full sm:w-fit">
        {state === "submitting" ? "Sending…" : "Send project inquiry"}
      </Button>
    </form>
  );
}
