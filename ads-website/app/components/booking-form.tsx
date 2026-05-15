"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle2, XCircle, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Validation schema
// ---------------------------------------------------------------------------

const SERVICES = [
  "Express Entry",
  "Permanent Residency",
  "Study Permit",
  "Work Permit / SOWP",
  "Francophone Mobility",
  "Provincial Nominee Program (PNP)",
  "Family Sponsorship",
  "Visitor Visa / TRV",
  "Refugee / Asylum",
  "Other / Not Sure",
] as const

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        val.trim() === "" ||
        /^(\+?1[\s.-]?)?(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})$/.test(val.trim()),
      "Please enter a valid phone number (e.g. +1 604-363-9350)"
    ),
  service: z.enum(SERVICES as unknown as [string, ...string[]], {
    required_error: "Please select a service",
  }),
  background: z
    .string()
    .max(500, "Background must be under 500 characters")
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

// ---------------------------------------------------------------------------
// Field-level validation indicator
// ---------------------------------------------------------------------------

interface FieldStatusProps {
  touched: boolean
  isValid: boolean
  isDirty: boolean
}

function FieldStatus({ touched, isValid, isDirty }: FieldStatusProps) {
  if (!touched || !isDirty) return null
  return isValid ? (
    <CheckCircle2
      aria-label="Field valid"
      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500 pointer-events-none"
    />
  ) : (
    <XCircle
      aria-label="Field invalid"
      className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500 pointer-events-none"
    />
  )
}

// ---------------------------------------------------------------------------
// Inline error message
// ---------------------------------------------------------------------------

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p role="alert" className="flex items-center gap-1 mt-1 text-xs text-red-600">
      <AlertCircle className="h-3 w-3 shrink-0" />
      {message}
    </p>
  )
}

// ---------------------------------------------------------------------------
// Label with required indicator
// ---------------------------------------------------------------------------

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-foreground mb-1"
    >
      {children}
      {required && (
        <span aria-hidden="true" className="ml-1 text-red-500">
          *
        </span>
      )}
    </label>
  )
}

// ---------------------------------------------------------------------------
// Success banner
// ---------------------------------------------------------------------------

function SuccessBanner({ name }: { name: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-4 rounded-xl border border-green-200 bg-green-50 px-6 py-10 text-center"
    >
      <CheckCircle className="h-12 w-12 text-green-500" />
      <div>
        <p className="text-lg font-semibold text-green-800">
          Thank you, {name}!
        </p>
        <p className="mt-1 text-sm text-green-700">
          Your message has been received. Simran Gill (RCIC) will respond within
          one business day at{" "}
          <span className="font-medium">info@adsimmigration.com</span>.
        </p>
      </div>
      <p className="text-xs text-green-600">
        Urgent? Call us now:{" "}
        <a
          href="tel:6043639350"
          className="underline hover:text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 rounded"
        >
          604-363-9350
        </a>
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState("")
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, touchedFields, dirtyFields, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      background: "",
      message: "",
    },
  })

  const watchedValues = watch()
  const backgroundLength = watchedValues.background?.length ?? 0
  const messageLength = watchedValues.message?.length ?? 0

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        setServerError(
          json?.error ?? "Something went wrong. Please try again or call us directly."
        )
        return
      }

      setSubmittedName(data.name.split(" ")[0])
      setSubmitted(true)
    } catch {
      setServerError(
        "Unable to send your message. Please check your connection and try again."
      )
    }
  }

  if (submitted) {
    return <SuccessBanner name={submittedName} />
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact and booking form"
      className="space-y-5"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Name */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <FieldLabel htmlFor="name" required>
          Full Name
        </FieldLabel>
        <div className="relative">
          <Input
            id="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            placeholder="Jane Smith"
            className={cn(
              "pr-9",
              errors.name &&
                touchedFields.name &&
                "border-red-400 focus-visible:ring-red-400",
              !errors.name &&
                touchedFields.name &&
                dirtyFields.name &&
                "border-green-400 focus-visible:ring-green-400"
            )}
            {...register("name")}
          />
          <FieldStatus
            touched={!!touchedFields.name}
            isValid={!errors.name}
            isDirty={!!dirtyFields.name}
          />
        </div>
        <div id="name-error">
          <FieldError message={errors.name?.message} />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Email */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <FieldLabel htmlFor="email" required>
          Email Address
        </FieldLabel>
        <div className="relative">
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            placeholder="jane@example.com"
            className={cn(
              "pr-9",
              errors.email &&
                touchedFields.email &&
                "border-red-400 focus-visible:ring-red-400",
              !errors.email &&
                touchedFields.email &&
                dirtyFields.email &&
                "border-green-400 focus-visible:ring-green-400"
            )}
            {...register("email")}
          />
          <FieldStatus
            touched={!!touchedFields.email}
            isValid={!errors.email}
            isDirty={!!dirtyFields.email}
          />
        </div>
        <div id="email-error">
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Phone */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <FieldLabel htmlFor="phone">
          Phone Number{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </FieldLabel>
        <div className="relative">
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
            aria-invalid={!!errors.phone}
            placeholder="+1 604-363-9350"
            className={cn(
              "pr-9",
              errors.phone &&
                touchedFields.phone &&
                "border-red-400 focus-visible:ring-red-400",
              !errors.phone &&
                touchedFields.phone &&
                dirtyFields.phone &&
                watchedValues.phone &&
                "border-green-400 focus-visible:ring-green-400"
            )}
            {...register("phone")}
          />
          {watchedValues.phone && (
            <FieldStatus
              touched={!!touchedFields.phone}
              isValid={!errors.phone}
              isDirty={!!dirtyFields.phone}
            />
          )}
        </div>
        {errors.phone ? (
          <div id="phone-error">
            <FieldError message={errors.phone?.message} />
          </div>
        ) : (
          <p id="phone-hint" className="mt-1 text-xs text-muted-foreground">
            Accepts formats like +1 604-363-9350 or (604) 363-9350
          </p>
        )}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Service dropdown */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <FieldLabel htmlFor="service" required>
          Service Needed
        </FieldLabel>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={field.onChange}
              value={field.value}
            >
              <SelectTrigger
                id="service"
                aria-required="true"
                aria-describedby={errors.service ? "service-error" : undefined}
                aria-invalid={!!errors.service}
                className={cn(
                  errors.service && "border-red-400 focus:ring-red-400",
                  !errors.service &&
                    field.value &&
                    "border-green-400 focus:ring-green-400"
                )}
              >
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent>
                {SERVICES.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <div id="service-error">
          <FieldError message={errors.service?.message} />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Background (textarea) */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <FieldLabel htmlFor="background">
          Immigration Background{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </FieldLabel>
        <div className="relative">
          <textarea
            id="background"
            rows={3}
            aria-describedby={
              errors.background ? "background-error" : "background-hint"
            }
            aria-invalid={!!errors.background}
            placeholder="e.g. I have a Canadian work permit expiring in 6 months and want to apply for PR..."
            className={cn(
              "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
              errors.background &&
                touchedFields.background &&
                "border-red-400 focus-visible:ring-red-400"
            )}
            {...register("background")}
          />
        </div>
        <div className="flex justify-between items-start mt-1">
          <div id="background-error">
            {errors.background ? (
              <FieldError message={errors.background?.message} />
            ) : (
              <p id="background-hint" className="text-xs text-muted-foreground">
                Brief summary of your current immigration status
              </p>
            )}
          </div>
          <span
            className={cn(
              "text-xs tabular-nums",
              backgroundLength > 450 ? "text-red-500" : "text-muted-foreground"
            )}
            aria-live="polite"
            aria-atomic="true"
          >
            {backgroundLength}/500
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Message */}
      {/* ------------------------------------------------------------------ */}
      <div>
        <FieldLabel htmlFor="message" required>
          Message
        </FieldLabel>
        <div className="relative">
          <textarea
            id="message"
            rows={5}
            aria-required="true"
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            aria-invalid={!!errors.message}
            placeholder="Describe your situation and what you need help with..."
            className={cn(
              "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
              errors.message &&
                touchedFields.message &&
                "border-red-400 focus-visible:ring-red-400",
              !errors.message &&
                touchedFields.message &&
                dirtyFields.message &&
                "border-green-400 focus-visible:ring-green-400"
            )}
            {...register("message")}
          />
        </div>
        <div className="flex justify-between items-start mt-1">
          <div id="message-error">
            {errors.message ? (
              <FieldError message={errors.message?.message} />
            ) : (
              <p id="message-hint" className="text-xs text-muted-foreground">
                Minimum 10 characters
              </p>
            )}
          </div>
          <span
            className={cn(
              "text-xs tabular-nums",
              messageLength > 1800 ? "text-red-500" : "text-muted-foreground"
            )}
            aria-live="polite"
            aria-atomic="true"
          >
            {messageLength}/2000
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Server-side error */}
      {/* ------------------------------------------------------------------ */}
      {serverError && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          {serverError}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Required fields note + submit */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
        <p className="text-xs text-muted-foreground">
          <span aria-hidden="true" className="text-red-500">
            *
          </span>{" "}
          Required fields
        </p>
        <Button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="w-full sm:w-auto min-w-[180px] bg-[#C41E3A] hover:bg-[#A01830] text-white"
          aria-label={
            isSubmitting ? "Sending your message..." : "Send your message"
          }
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  )
}
