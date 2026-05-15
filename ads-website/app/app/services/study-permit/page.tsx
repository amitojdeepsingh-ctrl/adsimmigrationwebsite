import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study Permit Consultant Canada | Expert Guidance for International Students | ADS Immigration",
  description: "Expert study permit consultant in Canada. High approval rates. Clear pathway to work permit & PR. RCIC guidance for international students.",
}

export default function StudyPermitPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 font-medium mb-2">Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Study Permit Consultant in Canada – Your Path to Education & PR
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Expert study permit guidance. High approval rates. Clear pathway from study to work to permanent residency.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/contact">Book Free Study Permit Assessment</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Study Permit Overview</h2>
            <p className="text-gray-600 mb-5">
              A study permit allows international students to study at Canadian institutions. But study permits
              aren't just about education—they're your first step toward working and living permanently in Canada.
            </p>
            <div className="space-y-2">
              {[
                "Access to world-class Canadian education",
                "Legal work permit during studies (up to 20 hours/week during school)",
                "Post-Graduation Work Permit (PGWP) after studies",
                "Canadian work experience = points toward permanent residency",
                "Clear pathway from student → worker → permanent resident",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Study Permit Requirements</h2>
            <p className="text-gray-600 mb-5">IRCC evaluates study permits based on these key criteria:</p>
            <div className="space-y-4">
              {[
                { title: "Valid Acceptance Letter", desc: "You need an acceptance letter from a Designated Learning Institution (DLI) in Canada." },
                { title: "Proof of Financial Support", desc: "You must prove you can financially support yourself during studies (tuition + living expenses, typically $20,000–30,000 CAD/year)." },
                { title: "Proof of Identity", desc: "Valid passport required. Some applicants may also need a police certificate." },
                { title: "No Security Issues", desc: "You may need a police certificate from your home country." },
                { title: "Medical Examination (if required)", desc: "Some applicants need a medical exam based on country of origin or program length." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-semibold text-red-800 text-sm mb-2">Common reasons for rejection — we prevent these:</p>
              <ul className="space-y-1 text-sm text-red-700">
                {["Unclear purpose of study", "Insufficient financial proof", "Weak ties to home country", "Incomplete documentation"].map((r) => (
                  <li key={r} className="flex gap-2"><span>✗</span>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Study Permit Process & Timeline</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Institution Selection & Application (3–4 months before start)", d: "Choose your Canadian DLI and apply for admission." },
                { n: "2", t: "Acceptance Letter", d: "Institution provides an acceptance letter—this is required for your study permit." },
                { n: "3", t: "Financial Documentation", d: "Gather proof of funds: bank statements, sponsor letters, etc." },
                { n: "4", t: "Study Permit Application", d: "We prepare your complete study permit application and optimize your responses." },
                { n: "5", t: "Biometrics & Medical (if required)", d: "Attend appointment for fingerprints and medical exam at designated center." },
                { n: "6", t: "Approval & Letter of Introduction", d: "IRCC approves and issues letter of introduction." },
                { n: "7", t: "Port of Entry", d: "Arrive in Canada with letter of introduction to complete study permit issuance." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center flex-shrink-0">{s.n}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{s.t}</p>
                    <p className="text-gray-600 text-sm mt-1">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="font-semibold text-green-800">Timeline: 4–8 weeks (expedited: 2–3 weeks, if available)</p>
            </div>
          </div>

          {/* Work Permissions */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Work Permissions for International Students</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">During Studies</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Work up to 20 hours/week during school sessions</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Unlimited hours during scheduled breaks</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Work on or off campus</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Work for any employer</li>
                </ul>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">After Studies (PGWP)</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Post-Graduation Work Permit (PGWP)</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Duration matches your study program (1–3 years)</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Work for any employer in Canada</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Canadian experience = PR points</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Study to PR */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Study Permit → Permanent Residency Pathway</h2>
            <p className="text-gray-600 mb-6">Study permit is a strategic first step to permanent residency. Many of our study permit clients transition to PR.</p>
            <div className="flex flex-col md:flex-row gap-2 items-stretch">
              {[
                { step: "1", label: "Study Permit", sub: "Enter Canada & study" },
                { step: "2", label: "PGWP", sub: "Post-graduation work permit" },
                { step: "3", label: "Work Experience", sub: "2+ years Canadian work" },
                { step: "4", label: "Express Entry / CEC", sub: "Apply for PR" },
                { step: "5", label: "PR Approval", sub: "Permanent resident" },
              ].map((s, i) => (
                <div key={s.step} className="flex md:flex-col items-center gap-2">
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold flex items-center justify-center mx-auto">{s.step}</div>
                    <p className="font-semibold text-gray-900 text-sm mt-2">{s.label}</p>
                    <p className="text-xs text-gray-500">{s.sub}</p>
                  </div>
                  {i < 4 && <span className="text-gray-400 text-xl md:hidden">↓</span>}
                  {i < 4 && <span className="text-gray-400 text-xl hidden md:block">→</span>}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              <strong>Total timeline: 3–4 years</strong> (study + work + PR). We guide you through every stage.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Study Permit FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Can I bring my spouse to Canada on my study permit?", a: "Your spouse can come on a visitor visa or, if eligible, a Spousal Open Work Permit (SOWP), allowing them to work for any employer. We help coordinate this." },
                { q: "How much money do I need to prove?", a: "Typically tuition + 12 months living expenses (~CAD $20,000–30,000, varies by province and institution). We help calculate exact amounts." },
                { q: "What if my study permit application is rejected?", a: "Rare with proper guidance. We review the rejection reason and explore appeals or alternative pathways." },
                { q: "Can I work while studying?", a: "Yes, up to 20 hours/week during school sessions. Unlimited during scheduled breaks." },
                { q: "How long is a Post-Graduation Work Permit valid?", a: "It matches your study program length (typically 1–3 years). A 2-year program = 2-year PGWP." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-red-600">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Study in Canada?</h2>
          <p className="text-red-100 mb-8">We'll review your situation, calculate financial requirements, and create a timeline for approval.</p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
            <Link href="/contact">Book Free Study Permit Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
