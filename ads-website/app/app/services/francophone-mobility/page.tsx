import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Francophone Mobility Program Consultant Canada | FMP Immigration | ADS Immigration",
  description: "Expert Francophone Mobility Program consultant in Canada. French speakers get faster PR with lower CRS requirements. RCIC guidance for FMP work permits and PR.",
}

export default function FrancophoneMobilityPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 font-medium mb-2">Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Francophone Mobility Program – Fast PR for French Speakers
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            If you speak French, Canada has a dedicated immigration pathway designed specifically for you. Lower requirements. Faster processing. Priority access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/contact">Book Free FMP Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link href="tel:6043639350">Call 604-363-9350</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-14">

          {/* What is FMP */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is the Francophone Mobility Program?</h2>
            <p className="text-gray-600 mb-4">
              Canada actively recruits French-speaking immigrants to support communities outside Quebec. The Francophone Mobility Program (FMP) is an LMIA-exempt work permit — meaning you don't need a Labour Market Impact Assessment to work in Canada.
            </p>
            <p className="text-gray-600 mb-6">
              This means faster approvals, less red tape, and a clear path from work permit to permanent residency — all because you speak French.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { value: "LMIA-Exempt", label: "No labour market test required" },
                { value: "Faster PR", label: "Lower CRS score requirements" },
                { value: "Any Province", label: "Work outside Quebec" },
              ].map((s) => (
                <div key={s.label} className="text-center p-5 bg-red-50 rounded-xl">
                  <p className="text-xl font-bold text-red-600 mb-1">{s.value}</p>
                  <p className="text-sm text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why French Speakers Have an Advantage</h2>
            <div className="space-y-3">
              {[
                { title: "LMIA-Exempt Work Permit", desc: "No employer needs to prove there are no Canadians to fill the role. Faster processing — typically 4–8 weeks." },
                { title: "Lower CRS Points Needed", desc: "Francophone draws through Express Entry select candidates with lower CRS scores than all-program draws, giving French speakers a significant advantage." },
                { title: "Faster Path to PR", desc: "French-language proficiency adds bonus CRS points. FMP work experience counts toward Canadian Experience Class (CEC) — one of the fastest PR routes." },
                { title: "Provincial Priority", desc: "Manitoba, Ontario, New Brunswick, Nova Scotia, and other provinces actively recruit French speakers. PNP nominations are often more accessible." },
                { title: "No Job Offer Required", desc: "You can arrive on an FMP work permit without a pre-arranged job in many cases — then find employment after arriving in Canada." },
              ].map((b, i) => (
                <div key={b.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{b.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">FMP Eligibility Requirements</h2>
            <div className="space-y-4">
              {[
                { title: "French Language Proficiency", desc: "Must demonstrate French proficiency at the CLB 5+ level (TEF Canada or TCF Canada test). Higher scores = more CRS points." },
                { title: "Skilled Occupation (NOC)", desc: "Your job must be in a skilled category (TEER 0, 1, 2, or 3 in the NOC system). Unskilled work doesn't qualify." },
                { title: "Valid Job Offer (for work permit)", desc: "For the LMIA-exempt work permit stream, you need a job offer from a Canadian employer outside Quebec." },
                { title: "Intention to Settle Outside Quebec", desc: "FMP is for French speakers who want to settle in francophone communities outside Quebec. Quebec has its own immigration system." },
              ].map((r, i) => (
                <div key={r.title} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{r.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TEF Scores */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TEF Canada Language Test — What You Need</h2>
            <p className="text-gray-600 mb-5">
              TEF Canada (Test d'Évaluation de Français) is the primary French language test for Canadian immigration. Here's how scores translate to CLB levels:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="text-left p-3">Component</th>
                    <th className="text-left p-3">CLB 5 (Min)</th>
                    <th className="text-left p-3">CLB 7 (Good)</th>
                    <th className="text-left p-3">CLB 9 (Excellent)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Listening", "145–180", "217–248", "280–298"],
                    ["Speaking", "181–225", "271–309", "349–360"],
                    ["Reading", "121–150", "181–206", "233–248"],
                    ["Writing", "181–225", "271–309", "349–360"],
                  ].map(([comp, min, good, excellent], i) => (
                    <tr key={comp} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-medium text-gray-900">{comp}</td>
                      <td className="p-3 text-gray-600">{min}</td>
                      <td className="p-3 text-gray-600">{good}</td>
                      <td className="p-3 text-green-700 font-medium">{excellent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500">Aim for CLB 7+ (TEF 270+) for Express Entry. Higher scores give significantly more CRS points.</p>
          </div>

          {/* FMP to PR Pathway */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Francophone Mobility Program → Permanent Residency</h2>
            <p className="text-gray-600 mb-6">FMP is a strategic gateway to PR for French speakers — often faster than Express Entry for non-French applicants.</p>
            <div className="flex flex-col md:flex-row gap-2 items-stretch">
              {[
                { step: "1", label: "TEF Test", sub: "Prove French proficiency" },
                { step: "2", label: "FMP Work Permit", sub: "LMIA-exempt, fast approval" },
                { step: "3", label: "Work in Canada", sub: "Any province outside QC" },
                { step: "4", label: "CEC / FE Draw", sub: "Express Entry invitation" },
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
              <strong>Total timeline: 2–3 years</strong> — faster than Express Entry for most French speakers due to lower CRS draw thresholds.
            </p>
          </div>

          {/* Our Process */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our FMP Application Process</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Eligibility Assessment", d: "We review your French proficiency, occupation, and goals to confirm FMP is the right pathway for you." },
                { n: "2", t: "TEF Test Guidance", d: "We provide TEF resources, score targets, and preparation guidance to maximize your language score." },
                { n: "3", t: "Job Offer Support", d: "If needed, we advise on finding Canadian employers outside Quebec who value French-speaking candidates." },
                { n: "4", t: "Work Permit Application", d: "We prepare your LMIA-exempt work permit application and submit it with all supporting documents." },
                { n: "5", t: "Express Entry Profile", d: "We create your Express Entry profile optimized with French language bonus points and advise on drawing strategy." },
                { n: "6", t: "PR Application", d: "When you receive an ITA, we prepare your complete PR application for submission and final approval." },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Francophone Mobility FAQ</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                { q: "Do I need to be a native French speaker?", a: "No. You need to demonstrate CLB 5+ proficiency through the TEF Canada test. Many non-native French speakers qualify after study and practice." },
                { q: "Can I apply for FMP if I'm in Canada on another permit?", a: "Yes, in most cases. We assess your current status and advise on the best application strategy — whether to extend in Canada or apply from abroad." },
                { q: "What's the difference between FMP and Quebec immigration?", a: "FMP is specifically for French speakers who want to settle outside Quebec. Quebec has its own immigration system (managed by the Quebec government) and is separate from federal programs." },
                { q: "Can I bring my family on FMP?", a: "Yes. Your spouse may qualify for a Spousal Open Work Permit (SOWP) while you're on FMP. Dependent children can be listed on the application." },
                { q: "What if my French is good but my English is limited?", a: "That's fine for FMP — French proficiency is what matters. However, if you want to live in an anglophone province, basic English may help in your day-to-day life. We'll advise on which provinces are most welcoming." },
                { q: "How does FMP compare to Express Entry for French speakers?", a: "FMP gives you Canadian work experience faster (LMIA-exempt, no lengthy employer recruitment process). That work experience then feeds into Express Entry / CEC draws. Apply to both simultaneously for maximum chances." },
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
              { href: "/services/express-entry", title: "Express Entry", desc: "French bonus points boost your CRS score" },
              { href: "/services/work-permits", title: "Work Permits & SOWP", desc: "Bring your spouse while you work" },
              { href: "/services/permanent-residency", title: "Permanent Residency", desc: "Your ultimate goal — we guide you there" },
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
          <h2 className="text-3xl font-bold mb-4">Vous parlez français? Canada vous veut.</h2>
          <p className="text-red-100 mb-8">Your French is a superpower in Canadian immigration. Let's turn it into permanent residency. Book a free assessment today.</p>
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
            <Link href="/contact">Book Free FMP Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
