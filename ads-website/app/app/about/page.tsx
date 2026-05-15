import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Simran Gill | RCIC Immigration Consultant | ADS Immigration",
  description: "Meet Simran Gill, licensed RCIC immigration consultant with 5+ years experience. 200+ successful cases. Specializing in Express Entry, PR, and work permits.",
  openGraph: {
    title: "About Simran Gill | RCIC Immigration Consultant | ADS Immigration",
    description: "Meet Simran Gill, licensed RCIC with 200+ successful cases and 94% approval rate.",
    url: "https://adsimmigration.com/about",
    type: "profile",
    images: [
      {
        url: "/ads-logo.svg",
        width: 400,
        height: 400,
        alt: "Simran Gill - RCIC Immigration Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Simran Gill | RCIC Immigration Consultant",
    description: "Licensed RCIC with 200+ successful cases. Expert guidance for Canadian immigration.",
    images: ["/ads-logo.svg"],
  },
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Simran Gill</h1>
          <p className="text-xl text-slate-300">Your Licensed RCIC Immigration Expert</p>
          <p className="mt-3 text-slate-400">5+ years experience · 200+ successful cases · 94% approval rate</p>
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who I Am</h2>
          <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
            <p>
              My name is Simran Gill, and I'm a licensed Regulated Canadian Immigration Consultant (RCIC) certified
              by the Immigration Consultants of Canada Regulatory Council. For the past 5+ years, I've dedicated my
              career to helping individuals, families, and employers navigate Canadian immigration with clarity and
              confidence.
            </p>
            <p>
              <strong className="text-gray-900">Why I do this:</strong> I believe immigration shouldn't be stressful.
              When you're pursuing a dream—whether it's building a new career, reuniting with family, or expanding
              your business—the immigration process shouldn't add unnecessary complexity. My job is to handle that
              complexity so you can focus on your future.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              {[
                { value: "200+", label: "Successful Cases" },
                { value: "94%", label: "Approval Rate" },
                { value: "4–6 mo", label: "Avg Timeline" },
                { value: "30+", label: "Countries Served" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 bg-red-50 rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{s.value}</p>
                  <p className="text-sm text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Background</h2>
          <div className="text-gray-600 space-y-4">
            <p>
              I grew up in British Columbia and studied business administration at Simon Fraser University. After
              graduating, I worked in HR and talent acquisition, supporting international hiring for tech companies.
              This experience gave me insight into Canadian immigration from both employer and employee perspectives.
            </p>
            <p>
              In 2018, I recognized a gap: most immigration consultants were either too expensive (lawyers) or too
              impersonal (large firms). I decided to get my RCIC certification and start ADS Immigration—offering
              expert, personalized guidance at a fair price.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Licensed RCIC (certified by ICCRC)",
                "Member of Association of Canadian Immigration Professionals",
                "Continuous professional development (30+ hours/year)",
                "Specialization in Express Entry, PR, and spousal sponsorship",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">My Approach</h2>
          <div className="space-y-8">
            {[
              {
                title: "1. Personalization Over Templates",
                body: "Your immigration path is unique. I don't use templates or one-size-fits-all approaches. Every client gets a customized strategy based on their background, goals, and circumstances.",
              },
              {
                title: "2. Transparency Always",
                body: "You'll know the cost upfront, the timeline realistically, and the exact steps we'll take. No hidden fees. No surprises. No jargon.",
              },
              {
                title: "3. Results-Driven",
                body: "My success is measured by your approval. I only recommend strategies I'm confident will succeed. If I see a better path for you, I'll suggest it—even if it means less revenue for me.",
              },
            ].map((p) => (
              <div key={p.title} className="border-l-4 border-red-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Express Entry", desc: "CRS optimization, profile creation, application submission" },
              { title: "Permanent Residency", desc: "Family sponsorship, PNP, provincial nominees" },
              { title: "Study to PR Pathway", desc: "Study permits, PGWP, work experience, PR" },
              { title: "Work Permits & SOWP", desc: "SOWP strategies, employer sponsorship" },
              { title: "Francophone Mobility", desc: "FMP applications for French speakers" },
              { title: "Employer Sponsorship", desc: "LMIA exemptions, International Mobility Program" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">What Clients Say</h2>
          <div className="space-y-6">
            {[
              {
                quote: "I thought my Express Entry score was too low to ever get invited. Simran analyzed my profile, identified opportunities, and within 4 months of optimization, I had my invitation. Now I'm a permanent resident. I can't thank her enough.",
                name: "Harpreet Singh",
                role: "Software Engineer — Express Entry",
              },
              {
                quote: "Sponsoring my parents seemed like it would take 3+ years and cost thousands. Simran streamlined the process and we got them approved in 18 months. The personalized attention made all the difference.",
                name: "Priya Sharma",
                role: "Business Owner — Family Sponsorship",
              },
              {
                quote: "We needed to sponsor talent from India. Simran handled everything—LMIA exemption, work permits, compliance. Our team is thriving, and the process was smooth from start to finish.",
                name: "Raj Patel",
                role: "Startup Founder — Employer Sponsorship",
              },
            ].map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-xl p-6">
                <p className="text-yellow-500 mb-3">★★★★★</p>
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <p className="font-semibold text-gray-900 text-sm">— {t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-red-100 mb-8">
            Ready to start your Canadian immigration journey? Book your free consultation. You'll get a personalized
            eligibility assessment, customized pathway recommendation, and realistic timeline—no obligation.
          </p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
            <Link href="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
