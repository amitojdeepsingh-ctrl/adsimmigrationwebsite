import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Provincial Nominee Program (PNP) Consultant Canada | +600 CRS Points | ADS Immigration",
  description: "Expert PNP consultant for all Canadian provinces. A provincial nomination adds 600 CRS points — virtually guaranteeing your Express Entry invitation. RCIC guidance.",
}

export default function PNPPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 font-medium mb-2">Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Provincial Nominee Program (PNP) – Guaranteed Express Entry Invitation
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            A provincial nomination adds <strong className="text-white">600 CRS points</strong> to your Express Entry profile — virtually guaranteeing an invitation to apply for permanent residency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">Book Free PNP Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link href="tel:6043639350">Call 604-363-9350</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* What is PNP */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Provincial Nominee Program?</h2>
            <p className="text-gray-600 mb-4">
              Canada's 10 provinces and 3 territories each have their own Provincial Nominee Programs (PNPs). These programs allow provinces to nominate skilled workers, graduates, and entrepreneurs who meet their specific labour market needs.
            </p>
            <p className="text-gray-600 mb-6">
              When a province nominates you, it adds <strong>600 CRS points</strong> to your Express Entry score. Since the average successful Express Entry draw requires 500–530 points, this effectively guarantees your invitation — no matter your base score.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { value: "+600", label: "CRS points added upon nomination" },
                { value: "85+", label: "Active PNP streams across Canada" },
                { value: "6–8 mo", label: "Typical provincial nomination timeline" },
              ].map((s) => (
                <div key={s.label} className="text-center p-5 bg-red-50 rounded-xl">
                  <p className="text-3xl font-bold text-red-600 mb-1">{s.value}</p>
                  <p className="text-sm text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PNP Streams */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Two Types of PNP Streams</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Enhanced PNP (Linked to Express Entry)</h3>
                <p className="text-sm text-gray-600 mb-4">Province issues you an enhanced nomination through your Express Entry profile. This adds 600 CRS points — you'll receive an ITA within days of nomination.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Must have an active Express Entry profile</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Fastest route to PR (4–6 months after nomination)</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>Available in most provinces</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Non-Enhanced PNP (Base Streams)</h3>
                <p className="text-sm text-gray-600 mb-4">Province nominates you through their own process. You then apply separately to IRCC for PR. Doesn't require an Express Entry profile.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-green-500">✓</span>No Express Entry profile needed</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span>More streams and categories available</li>
                  <li className="flex gap-2"><span className="text-gray-400">→</span>Longer processing (12–18 months)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Province Table */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Provincial Nominee Programs by Province</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-3">Province</th>
                    <th className="text-left p-3">Program Name</th>
                    <th className="text-left p-3">Key Streams</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["British Columbia", "BC PNP", "Tech Pilot, Skills Immigration, Express Entry BC"],
                    ["Alberta", "AAIP", "Alberta Advantage Immigration Program, Rural Renewal Stream"],
                    ["Ontario", "OINP", "Human Capital Priorities, Tech Draw, Employer Job Offer"],
                    ["Saskatchewan", "SINP", "International Skilled Worker, Occupations In-Demand"],
                    ["Manitoba", "MPNP", "Skilled Workers in Manitoba, Skilled Workers Overseas"],
                    ["Nova Scotia", "NSNP", "Labour Market Priorities, Physicians Stream"],
                    ["New Brunswick", "NBPNP", "Express Entry Labour Market Stream, Critical Worker Pilot"],
                    ["Prince Edward Island", "PEI PNP", "Express Entry, Labour Impact, Business Impact"],
                    ["Newfoundland", "NLPNP", "Express Entry Skilled Worker, Priority Skills NL"],
                    ["Northwest Territories", "NTNP", "Employer Driven Stream, Express Entry NWT"],
                  ].map(([prov, prog, streams], i) => (
                    <tr key={prov} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-medium text-gray-900">{prov}</td>
                      <td className="p-3 text-gray-600">{prog}</td>
                      <td className="p-3 text-gray-600">{streams}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500">Not all streams are open at all times. We assess current availability and match you to the right stream.</p>
          </div>

          {/* Who Qualifies */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Qualifies for PNP?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Skilled Workers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "NOC TEER 0, 1, 2, or 3 occupations",
                    "1+ year of relevant work experience",
                    "Language proficiency (CLB 5–7+ depending on stream)",
                    "Education relevant to your occupation",
                  ].map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-green-500">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">International Graduates</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "Graduated from a Canadian institution",
                    "Degree/diploma from a recognized institution",
                    "Job offer in the province (some streams)",
                    "Intention to stay in nominating province",
                  ].map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-green-500">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our PNP Application Process</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "PNP Strategy Session", d: "We identify which provinces and streams you qualify for — and which offer the best chance of nomination." },
                { n: "2", t: "Expression of Interest (EOI)", d: "Most provinces use a point-based EOI pool. We optimize your EOI score for maximum ranking." },
                { n: "3", t: "Provincial Nomination", d: "Province issues nomination letter. For enhanced streams, 600 CRS points are added to your Express Entry profile." },
                { n: "4", t: "Express Entry ITA", d: "With 600 added CRS points, you receive an Invitation to Apply for PR — often within days of nomination." },
                { n: "5", t: "PR Application Preparation", d: "We prepare your complete PR application within the 60-day window with all supporting documents." },
                { n: "6", t: "Approval & Landing", d: "IRCC approves your PR. We guide you through final steps: medical, passport request, and landing in Canada." },
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
              <p className="font-semibold text-green-800">Total Timeline: 6–18 months (provincial nomination + federal PR processing). Enhanced streams are faster.</p>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">PNP FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Do I need a job offer to get a PNP?", a: "It depends on the stream. Some streams require a job offer from an employer in the province. Others are based on occupation demand and don't require a job offer. We identify which streams fit your profile." },
                { q: "Can I apply to PNP if my Express Entry score is low?", a: "Yes — that's exactly why PNP is so valuable. If your CRS score is 400–450 and you haven't received an ITA, a provincial nomination adds 600 points and virtually guarantees your invitation." },
                { q: "Do I have to live in the nominating province?", a: "Yes, as a condition of nomination. However, once you become a permanent resident, you can move anywhere in Canada. Most clients initially settle in their nominating province." },
                { q: "Can I apply to multiple provinces?", a: "Yes. You can submit EOIs to multiple provinces simultaneously. We advise which provinces give you the best chance of nomination." },
                { q: "How long does PNP take?", a: "6–8 months for provincial nomination + 4–6 months for federal PR processing through Express Entry (enhanced streams). Non-enhanced streams can take 12–18+ months total." },
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
              { href: "/services/express-entry", title: "Express Entry", desc: "PNP + Express Entry is the fastest PR combo" },
              { href: "/services/permanent-residency", title: "Permanent Residency", desc: "All PR pathways explained" },
              { href: "/services/work-permits", title: "Work Permits", desc: "Work in Canada while PNP processes" },
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
          <h2 className="text-3xl font-bold mb-4">Ready to Add 600 Points to Your CRS Score?</h2>
          <p className="text-red-100 mb-8">Let's identify which province will nominate you — and fast-track your path to permanent residency.</p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
            <Link href="/contact">Book Free PNP Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
