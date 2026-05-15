import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Express Entry Consultant Canada | Expert RCIC Guidance | ADS Immigration",
  description: "Expert Express Entry consultant in Canada. RCIC guidance for profile optimization, applications & approval. Average 4-month processing. 94% success rate.",
  openGraph: {
    title: "Express Entry Consultant Canada | Expert RCIC Guidance | ADS Immigration",
    description: "Expert Express Entry consultant in Canada. RCIC guidance for profile optimization, applications & approval. Average 4-month processing. 94% success rate.",
    url: "https://adsimmigration.com/services/express-entry",
    type: "website",
    images: [
      {
        url: "/ads-logo.svg",
        width: 400,
        height: 400,
        alt: "ADS Immigration - Express Entry Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Express Entry Consultant Canada | ADS Immigration",
    description: "Expert Express Entry RCIC guidance. 94% success rate. Average 4-month processing.",
    images: ["/ads-logo.svg"],
  },
}

export default function ExpressEntryPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 font-medium mb-2">Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Express Entry Consultant in Canada – Fast-Track Your Permanent Residency
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            RCIC-guided Express Entry applications with proven results. 94% approval rate. Average 4-month processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">Book a Free Express Entry Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link href="tel:6043639350">Call 604-363-9350</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* What is Express Entry */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Express Entry?</h2>
            <p className="text-gray-600 mb-4">
              Express Entry is Canada's fastest path to permanent residency for skilled workers. Through this program,
              Immigration, Refugees and Citizenship Canada (IRCC) processes applications in just 6 months or less.
            </p>
            <p className="text-gray-600 mb-4">
              But Express Entry is competitive. Your profile must be optimized for maximum points. Small
              mistakes—missing documents, poor language test scores, incomplete work experience details—cost you
              points and can result in rejection.
            </p>
            <p className="text-gray-800 font-semibold">That's where we come in.</p>
          </div>

          {/* Who Qualifies */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Qualifies for Express Entry?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                { label: "Education", desc: "Bachelor's degree or higher (or equivalent)" },
                { label: "Work Experience", desc: "At least 1 year of skilled work (or 2 years Canadian)" },
                { label: "Language Skills", desc: "CLB 6+ in English or French (IELTS, TOEFL, or TEF)" },
                { label: "Age", desc: "Typically 18–45 (younger = more points)" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-semibold text-gray-900 mb-3">Express Entry has three pathways:</p>
            <div className="space-y-3">
              {[
                { name: "Federal Skilled Worker Program (FSWP)", desc: "Most popular, for skilled workers without Canadian experience" },
                { name: "Canadian Experience Class (CEC)", desc: "For those with Canadian work experience" },
                { name: "Federal Skilled Trades Program (FSTP)", desc: "For trade professionals" },
              ].map((p, i) => (
                <div key={p.name} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{p.name}</p>
                    <p className="text-sm text-gray-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CRS Score */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The CRS Points System</h2>
            <p className="text-gray-600 mb-6">
              Express Entry uses the Comprehensive Ranking System (CRS) to score applications. Your score determines
              your ranking in the pool. Recent draws require <strong>500–530 CRS points</strong>.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-3">Factor</th>
                    <th className="text-left p-3">Max Points</th>
                    <th className="text-left p-3">How to Maximize</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Age", "100", "Highest at 20–29 years old"],
                    ["Language Ability", "160", "Score CLB 9+ on IELTS/TEF"],
                    ["Education", "150", "Bachelor's degree or higher"],
                    ["Work Experience", "100", "More skilled years = more points"],
                    ["Job Offer", "200", "Canadian job offer adds 50–200 points"],
                    ["Provincial Nomination", "600", "Instant invitation guarantee"],
                    ["Canadian Education", "30", "Canadian degree/diploma"],
                    ["Sibling in Canada", "15", "Canadian brother or sister"],
                  ].map(([factor, max, how], i) => (
                    <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-medium text-gray-900">{factor}</td>
                      <td className="p-3 text-gray-600">{max}</td>
                      <td className="p-3 text-gray-600">{how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Express Entry Process</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Profile Assessment (1 hour)", desc: "We analyze your background, calculate your estimated CRS score, and discuss realistic timelines." },
                { step: "2", title: "Document Preparation (2–3 weeks)", desc: "We help organize and verify all required documents: education credentials, language test results, work experience letters, and financial proof." },
                { step: "3", title: "Profile Creation (1 week)", desc: "We optimize your Express Entry profile in the IRCC system to present your strongest candidacy." },
                { step: "4", title: "Pool Submission (1 day)", desc: "Your profile enters the pool and waits for an invitation draw. Most invitations are issued every 2 weeks." },
                { step: "5", title: "Invitation & Application (2–4 months)", desc: "Once invited, you have 60 days to submit a full application. We review all documents, ensure accuracy, and submit on your behalf." },
                { step: "6", title: "Processing & Approval (2–4 months)", desc: "IRCC processes your complete application. We monitor progress and respond to any requests for additional information." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{s.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="font-semibold text-green-800">Total Timeline: 4–6 months from first consultation to permanent residency approval.</p>
            </div>
          </div>

          {/* DIY vs RCIC */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">DIY vs. RCIC-Guided</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-3">Factor</th>
                    <th className="text-left p-3">DIY</th>
                    <th className="text-left p-3">With RCIC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Success Rate", "~82%", "94% ✓"],
                    ["Timeline", "6–8 months", "4–6 months ✓"],
                    ["Stress Level", "High", "Low ✓"],
                    ["Document Errors", "Common", "Caught & Fixed ✓"],
                    ["CRS Optimization", "You guess", "We maximize ✓"],
                  ].map(([factor, diy, rcic], i) => (
                    <tr key={factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-medium text-gray-900">{factor}</td>
                      <td className="p-3 text-gray-500">{diy}</td>
                      <td className="p-3 text-green-700 font-medium">{rcic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Express Entry FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "What's the minimum CRS score needed?", a: "Recent draws have required 500–530 CRS points. We calculate your score during the free consultation and discuss ways to improve it." },
                { q: "Can I apply without Canadian work experience?", a: "Yes, through the Federal Skilled Worker Program (FSWP). Canadian experience isn't required, but it helps your ranking." },
                { q: "What if I don't speak English or French?", a: "You need CLB 6+ minimum. If you're below this, you can retake language tests while we prepare other documents." },
                { q: "How often are invitation draws held?", a: "Every 2 weeks, on average. When invited, you have 60 days to submit a complete application." },
                { q: "What if my application is rejected?", a: "Rejections are rare with proper guidance, but if they occur, we help you understand why and explore alternative pathways." },
                { q: "Do I need a job offer?", a: "No, but it adds 50–200 points to your CRS score. We advise on whether a job search is worth the time." },
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
              { href: "/services/permanent-residency", title: "Permanent Residency", desc: "Multiple PR pathways" },
              { href: "/services/study-permit", title: "Study Permits", desc: "Study to PR pathway" },
              { href: "/services/work-permits", title: "Work Permits & SOWP", desc: "Employment authorization" },
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

      {/* CTA */}
      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply for Express Entry?</h2>
          <p className="text-red-100 mb-8">Don't leave your PR to chance. Let's calculate your CRS score and create a personalized strategy to maximize your chances.</p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
            <Link href="/contact">Book Your Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
