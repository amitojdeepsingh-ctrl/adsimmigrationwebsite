import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work Permit & SOWP Consultant Canada | Open Work Permits | ADS Immigration",
  description: "Expert work permit and SOWP consultant in Canada. Open work permits, spousal open work permits, PGWP, employer-sponsored permits. RCIC guidance for fast approval.",
}

export default function WorkPermitsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 font-medium mb-2">Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Work Permit & SOWP Consultant in Canada – Authorization to Work
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Open work permits, spousal open work permits, PGWP, and employer-sponsored work permits. Expert RCIC guidance for fast approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">Book Free Work Permit Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link href="tel:6043639350">Call 604-363-9350</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* Types Overview */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Canadian Work Permits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Open Work Permit",
                  desc: "Work for any employer in Canada. Not tied to a specific job or company.",
                  badge: "Most Flexible",
                },
                {
                  title: "Employer-Specific Work Permit",
                  desc: "Work only for the employer named on the permit. Requires a job offer.",
                  badge: "Employer-Tied",
                },
                {
                  title: "Spousal Open Work Permit (SOWP)",
                  desc: "Your spouse works in Canada while you study or pursue immigration. Any employer.",
                  badge: "Family Strategy",
                },
                {
                  title: "Post-Graduation Work Permit (PGWP)",
                  desc: "Work permit after Canadian graduation. Duration matches program length (1–3 years).",
                  badge: "Students",
                },
              ].map((t) => (
                <div key={t.title} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{t.title}</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full whitespace-nowrap">{t.badge}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SOWP — Detailed */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spousal Open Work Permit (SOWP) – Detailed</h2>
            <p className="text-gray-600 mb-6">
              The SOWP allows your spouse or common-law partner to work for <strong>any employer</strong> in Canada while you pursue your immigration goals. This is one of the most powerful strategies for families immigrating to Canada.
            </p>
            <div className="space-y-4">
              {[
                {
                  scenario: "International Student + Spouse",
                  desc: "If you're studying at a DLI (full-time program), your spouse can get a SOWP. They work full-time while you study—covering living costs and building Canadian work experience for future PR.",
                  eligibility: "Student must be enrolled in a DLI program (college/university)",
                },
                {
                  scenario: "Spousal Sponsorship in Progress",
                  desc: "If you're sponsoring your spouse for PR, they may qualify for a temporary work permit while the application is being processed—so they're not waiting idle.",
                  eligibility: "Sponsorship application must be submitted and in progress",
                },
                {
                  scenario: "Dual Application Strategy",
                  desc: "Both spouses apply simultaneously—one for a study/work permit, one for SOWP. Both arrive in Canada and both generate income. This is a powerful family immigration strategy.",
                  eligibility: "One spouse must qualify for a primary permit (study or work)",
                },
              ].map((s) => (
                <div key={s.scenario} className="bg-slate-50 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{s.scenario}</h3>
                  <p className="text-sm text-gray-600 mb-3">{s.desc}</p>
                  <p className="text-xs text-green-700 bg-green-50 px-3 py-1.5 rounded-lg inline-block">
                    <strong>Eligibility:</strong> {s.eligibility}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PGWP */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Post-Graduation Work Permit (PGWP)</h2>
            <p className="text-gray-600 mb-5">
              If you graduated from a Canadian DLI, you're eligible for a PGWP—an open work permit that lets you work for any employer after your studies.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">PGWP Eligibility</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Graduated from a Designated Learning Institution (DLI)",
                    "Program was at least 8 months long",
                    "Maintained full-time status during studies",
                    "Apply within 180 days of receiving final marks",
                  ].map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-green-500">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">PGWP Duration</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Program < 2 years → PGWP = program length",
                    "Program 2+ years → PGWP = 3 years (maximum)",
                    "Open work permit — work for any employer",
                    "PGWP is issued once — cannot be renewed",
                  ].map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-green-500">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800"><strong>Pro tip:</strong> PGWP holders who work for 1–2 years can qualify for Canadian Experience Class (CEC) — one of the fastest PR pathways.</p>
            </div>
          </div>

          {/* Employer-Sponsored */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Employer-Sponsored Work Permits</h2>
            <p className="text-gray-600 mb-5">
              When a Canadian employer wants to hire a foreign worker, they typically need a Labour Market Impact Assessment (LMIA) or must qualify for an LMIA exemption.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">LMIA-Required</h3>
                <p className="text-sm text-gray-600 mb-3">Employer proves no Canadian could fill the role. After approval, foreign worker applies for a work permit.</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-gray-400">→</span>Timeline: 2–4 months for LMIA + work permit</li>
                  <li className="flex gap-2"><span className="text-gray-400">→</span>Strong job offer (permanent-like role)</li>
                  <li className="flex gap-2"><span className="text-gray-400">→</span>Tied to one employer</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">LMIA-Exempt (IMP)</h3>
                <p className="text-sm text-gray-600 mb-3">International Mobility Program (IMP) — no LMIA needed. Includes intra-company transfers, CUSMA/USMCA, significant benefit.</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-gray-400">→</span>Timeline: 4–8 weeks</li>
                  <li className="flex gap-2"><span className="text-gray-400">→</span>Faster processing</li>
                  <li className="flex gap-2"><span className="text-gray-400">→</span>Employer files an offer of employment online</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Work Permit Application Process</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Permit Type Assessment", d: "We identify which work permit type applies to your situation: open, SOWP, PGWP, or employer-sponsored." },
                { n: "2", t: "Eligibility Verification", d: "We confirm eligibility, review your current status in Canada, and identify any potential issues before applying." },
                { n: "3", t: "Document Collection", d: "Passport, job offer letter (if required), proof of study or status, relationship documents (for SOWP), and supporting evidence." },
                { n: "4", t: "Application Preparation", d: "We prepare and review your complete application. Every form, every document, every response is optimized for approval." },
                { n: "5", t: "Submission & Tracking", d: "Application is submitted online (or at port of entry if applicable). We track progress and respond to IRCC requests." },
                { n: "6", t: "Approval & Activation", d: "We review approval documents, explain any conditions, and advise on next steps toward PR if applicable." },
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
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="font-semibold text-green-800">Timeline: 4–8 weeks typical. Expedited processing available in some cases (2–3 weeks).</p>
            </div>
          </div>

          {/* Work Permit to PR */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Permit → Permanent Residency Pathway</h2>
            <p className="text-gray-600 mb-6">Work permits are not just about working in Canada—they're often the bridge to permanent residency.</p>
            <div className="flex flex-col md:flex-row gap-2 items-stretch">
              {[
                { step: "1", label: "Work Permit", sub: "Arrive & start working" },
                { step: "2", label: "1–2 Years Work", sub: "Build Canadian experience" },
                { step: "3", label: "CRS Points", sub: "Canadian exp = PR points" },
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
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Work Permit FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "What's the difference between an open and employer-specific work permit?", a: "Open work permit = work for any employer anywhere in Canada. Employer-specific = work only for the employer named on your permit. Open permits are more flexible; employer-specific are tied to one job." },
                { q: "Can my spouse work while I study in Canada?", a: "Yes. If you're enrolled full-time at a DLI (college or university), your spouse may qualify for a Spousal Open Work Permit (SOWP), allowing them to work for any Canadian employer." },
                { q: "How quickly can I get a work permit?", a: "Typically 4–8 weeks. Expedited processing (2–3 weeks) is available in some situations. We'll advise on the fastest option for your case." },
                { q: "Can I switch employers on a work permit?", a: "Open work permit = yes, work for any employer freely. Employer-specific = no, you must apply for a new permit or amendment. SOWP holders can change employers at will." },
                { q: "Does Canadian work experience help my PR application?", a: "Yes, significantly. Canadian Experience Class (CEC) requires Canadian work experience. Express Entry also awards CRS points for Canadian work. Working in Canada is one of the best ways to accelerate PR." },
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

      {/* Related Services */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: "/services/express-entry", title: "Express Entry", desc: "Use work experience for PR" },
              { href: "/services/study-permit", title: "Study Permits", desc: "Study → PGWP → PR pathway" },
              { href: "/services/permanent-residency", title: "Permanent Residency", desc: "Multiple PR pathways" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all">
                <p className="font-semibold text-gray-900">{s.title}</p>
                <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
                <span className="text-red-600 text-sm mt-2 inline-block">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need a Work Permit or SOWP?</h2>
          <p className="text-red-100 mb-8">We'll assess your eligibility, identify the best permit type, and get you authorized to work in Canada as quickly as possible.</p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
            <Link href="/contact">Book Free Work Permit Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
