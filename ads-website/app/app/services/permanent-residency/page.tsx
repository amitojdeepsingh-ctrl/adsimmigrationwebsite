import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Permanent Residency Consultant Canada | PR Programs & Sponsorship | ADS Immigration",
  description: "Expert permanent residency consultant for family sponsorship, PNP, and PR programs. RCIC guidance for faster approvals. 200+ successful cases.",
}

export default function PermanentResidencyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 font-medium mb-2">Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Permanent Residency Consultant – Multiple Pathways to Canadian PR
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            RCIC-guided permanent residency applications. Family sponsorship, PNP, and skilled worker pathways. Expert guidance. Faster approvals.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/contact">Book Free PR Assessment</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* What is PR */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Canadian Permanent Residency?</h2>
            <p className="text-gray-600 mb-5">
              Permanent residency is the status that allows you to live, work, and study anywhere in Canada.
              As a permanent resident, you get:
            </p>
            <div className="space-y-2">
              {[
                "Right to live, work, and study anywhere in Canada",
                "Access to federal healthcare and social benefits",
                "Path to citizenship (after 3 years as PR)",
                "Ability to sponsor family members",
                "Protection of Canadian laws and rights",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pathways */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">PR Pathways – Which Is Right for You?</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Federal Skilled Worker Program (Express Entry)",
                  for: "International skilled workers",
                  timeline: "4–6 months",
                  cost: "IRCC fees $550 + RCIC guidance $2,000–3,000",
                  href: "/services/express-entry",
                },
                {
                  title: "Provincial Nominee Program (PNP)",
                  for: "Skilled workers nominated by a Canadian province",
                  timeline: "6–8 months",
                  cost: "Province nomination adds 600 CRS points",
                  href: "/services/pnp",
                },
                {
                  title: "Family Sponsorship",
                  for: "Canadian citizens/PRs sponsoring family members",
                  timeline: "12–18 months",
                  cost: "Sponsor must meet income requirements",
                  href: null,
                },
                {
                  title: "Canadian Experience Class (CEC)",
                  for: "International graduates & temporary workers with Canadian experience",
                  timeline: "4–6 months",
                  cost: "Faster than overseas skilled worker pathways",
                  href: null,
                },
                {
                  title: "Francophone Mobility Program",
                  for: "French speakers",
                  timeline: "6 months (faster than Express Entry)",
                  cost: "Lower point requirements",
                  href: "/services/francophone-mobility",
                },
              ].map((p) => (
                <div key={p.title} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                      <p className="text-sm text-gray-500 mt-1"><strong>For:</strong> {p.for}</p>
                      <p className="text-sm text-gray-500"><strong>Timeline:</strong> {p.timeline}</p>
                      <p className="text-sm text-gray-500"><strong>Notes:</strong> {p.cost}</p>
                    </div>
                    {p.href && (
                      <Link href={p.href} className="text-red-600 hover:underline text-sm whitespace-nowrap mt-1">
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Family Sponsorship */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Family Sponsorship – Detailed</h2>
            <p className="text-gray-600 mb-4">
              Family sponsorship allows Canadian citizens and permanent residents to bring loved ones to Canada.
              This is one of the most common PR pathways.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Who can be sponsored?</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {[
                    "Spouse or common-law partner",
                    "Dependent children (biological or adopted)",
                    "Parents or grandparents",
                    "Siblings, nieces, nephews, cousins (specific circumstances)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-red-500">•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Application Timelines</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {[
                    "Spouse/partner: 12 months average",
                    "Parents/grandparents: 18+ months",
                    "Dependent children: 12–15 months",
                  ].map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-red-500">•</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PNP Strategy */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Provincial Nominee Program (PNP) Strategy</h2>
            <p className="text-gray-600 mb-4">
              PNP is a game-changer. Being nominated by a province adds <strong>600 points</strong> to your Express
              Entry CRS score—often enough to guarantee an invitation in the next draw.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-3">Province</th>
                    <th className="text-left p-3">Program</th>
                    <th className="text-left p-3">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Alberta", "Accelerated Labour Market Stream", "Skilled workers"],
                    ["BC", "Tech Pilot", "Tech professionals"],
                    ["Ontario", "French-Speaking Skilled Worker", "French speakers"],
                    ["Saskatchewan", "International Skilled Worker", "Diverse skills"],
                  ].map(([prov, prog, focus], i) => (
                    <tr key={prov} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-medium text-gray-900">{prov}</td>
                      <td className="p-3 text-gray-600">{prog}</td>
                      <td className="p-3 text-gray-600">{focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our PR Application Process</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Pathway Assessment", d: "We review your background and identify the best PR pathway(s) for your situation." },
                { n: "2", t: "Documents & Requirements", d: "We collect all required documents: education credentials, work letters, birth/marriage certificates, police records, and medical exams." },
                { n: "3", t: "Application Preparation", d: "We prepare and review your complete application to ensure accuracy and completeness." },
                { n: "4", t: "Submission", d: "Your application is submitted with all supporting documents." },
                { n: "5", t: "Processing & Follow-up", d: "We monitor your application and respond to any IRCC requests for additional information." },
                { n: "6", t: "Approval & Settlement", d: "Upon approval, we guide you through final steps: medical exams, passport request, landing, and settlement planning." },
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
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Permanent Residency FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "How long does it take to get PR?", a: "4–18 months depending on pathway. Express Entry & CEC are fastest (4–6 months). Family sponsorship is slower (12–18 months)." },
                { q: "Can I work in Canada while my PR application is processing?", a: "Depends on your current status. If you have a valid work permit, you can continue working." },
                { q: "What if my PR application is rejected?", a: "Rejection is rare with RCIC guidance. If it happens, we review the decision letter and explore appeal options." },
                { q: "Do I need to be in Canada to apply for PR?", a: "No, you can apply from outside Canada. Some pathways prefer Canadian work/study experience." },
                { q: "Can I sponsor my spouse while my PR application is being processed?", a: "Not recommended. Wait until you're an approved PR, then you can sponsor family members." },
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
          <h2 className="text-3xl font-bold mb-4">Your Path to Permanent Residency Starts Here</h2>
          <p className="text-red-100 mb-8">We'll review your background, identify the best options, and create a personalized application timeline.</p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
            <Link href="/contact">Book Free PR Pathway Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
