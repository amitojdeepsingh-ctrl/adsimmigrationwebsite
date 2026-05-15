import { NextResponse } from "next/server"
import { z } from "zod"

// ---------------------------------------------------------------------------
// Shared validation schema (mirrors client-side schema)
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
      "Please enter a valid phone number"
    ),
  service: z.enum(SERVICES as unknown as [string, ...string[]], {
    required_error: "Service selection is required",
  }),
  background: z.string().max(500).optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
})

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(req: Request) {
  try {
    // Parse JSON body
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      )
    }

    // Server-side validation
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      return NextResponse.json(
        {
          error: "Validation failed",
          fields: fieldErrors,
        },
        { status: 422 }
      )
    }

    const { name, email, phone, service, background, message } = result.data

    // Log the submission (replace with Resend API call when ready)
    console.log("[ADS Contact Form Submission]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone ?? "not provided",
      service,
      background: background ?? "not provided",
      message,
    })

    // -----------------------------------------------------------------------
    // Resend integration placeholder — uncomment and fill API key when ready:
    //
    // import { Resend } from "resend"
    // const resend = new Resend(process.env.RESEND_API_KEY)
    //
    // await resend.emails.send({
    //   from: "ADS Website <noreply@adsimmigration.com>",
    //   to: ["info@adsimmigration.com"],
    //   subject: `New consultation request — ${service}`,
    //   text: [
    //     `Name: ${name}`,
    //     `Email: ${email}`,
    //     `Phone: ${phone ?? "not provided"}`,
    //     `Service: ${service}`,
    //     `Background: ${background ?? "not provided"}`,
    //     `Message:\n${message}`,
    //   ].join("\n\n"),
    // })
    // -----------------------------------------------------------------------

    return NextResponse.json(
      {
        status: "success",
        message: "Your message has been received. We will be in touch soon.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[ADS Contact Form] Unhandled error:", error)
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    )
  }
}
