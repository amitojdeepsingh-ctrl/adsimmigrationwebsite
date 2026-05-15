import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Canadian Immigration Questions Answered | ADS Immigration",
  description: "Answers to common questions about Express Entry, PR, Study Permits, Work Permits, and Canadian immigration. Expert RCIC guidance from ADS Immigration.",
  openGraph: {
    title: "FAQ - Canadian Immigration Questions Answered",
    description: "Get answers to common immigration questions from a licensed RCIC.",
    url: "https://adsimmigration.com/faq",
    type: "website",
    images: [
      {
        url: "/ads-logo.svg",
        width: 400,
        height: 400,
        alt: "ADS Immigration FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Canadian Immigration Questions | ADS Immigration",
    description: "Answers to common questions about Express Entry, PR & Canadian immigration.",
    images: ["/ads-logo.svg"],
  },
}

const sections = [
  {
    title: "Express Entry",
    faqs: [
      { q: "How long does Express Entry really take?", a: "Express Entry processing times typically range from 4–6 months. With expert guidance on profile optimization, we aim for faster approval. We've had clients approved within 4 months. The timeline depends on completeness of your application and whether IRCC requests additional information." },
      { q: "What's the minimum CRS score needed?", a: "Recent draws have required 500–530 CRS points. However, this fluctuates. The more important question: What's YOUR CRS score? Let's calculate it and discuss strategies to improve it. Book a free assessment to find out." },
      { q: "Can I apply without Canadian work experience?", a: "Yes, through the Federal Skilled Worker Program (FSWP). Canadian work experience isn't required, but it boosts your score. Many clients are approved without Canadian experience." },
      { q: "What if I don't speak English or French?", a: "You need CLB 6+ (Canadian Language Benchmark Level 6) minimum. If you're below this, retake your language test. Higher scores = more CRS points = better ranking." },
      { q: "Do I need a job offer?", a: "No, but it helps significantly. A job offer adds 50–200 CRS points. We advise on whether pursuing a job offer is worth the time investment for your profile." },
      { q: "What's the most common reason for Express Entry rejection?", a: "Incomplete documentation. Missing work letters, education documents, or forms cause most rejections. RCIC review prevents this." },
      { q: "Can I apply multiple times?", a: "Yes, unlimited. If rejected, you can fix issues and reapply. You can also apply simultaneously for Express Entry and other programs (FMP, PNP)." },
      { q: "What happens after I'm approved?", a: "You'll receive a Confirmation of Permanent Residence (COPR) letter. Arrange travel to Canada, arrive at a port of entry, and finalize your PR status." },
    ],
  },
  {
    title: "Permanent Residency",
    faqs: [
      { q: "Which PR pathway is fastest?", a: "Express Entry & Canadian Experience Class are fastest (4–6 months). Family sponsorship is slower (12–18 months). We assess your eligibility and recommend the fastest path." },
      { q: "How much income do I need to prove for PR?", a: "Varies by program. For most programs, show 12 months of living expenses ($20,000–30,000 CAD typically). We calculate exact amounts for your situation." },
      { q: "Can I include my spouse in my PR application?", a: "Yes. Your spouse can be a principal applicant (if they meet criteria) or accompanying family member." },
      { q: "What if my PR application is rejected?", a: "Rejection is rare with proper guidance. If it happens, we review the decision letter and explore appeals or alternative pathways." },
      { q: "Can I work while my PR application is processing?", a: "Depends on your current status. If you have a valid work permit, yes. We'll advise based on your specific situation." },
    ],
  },
  {
    title: "Study Permits",
    faqs: [
      { q: "Do I need a study permit for all programs?", a: "Only if studying 6+ months. Programs under 6 months don't require study permits." },
      { q: "Can my spouse come with me on a study permit?", a: "Your spouse can come on a visitor visa or apply for a Spousal Open Work Permit (SOWP), allowing them to work full-time while you study." },
      { q: "How much money do I need to prove?", a: "Typically tuition + 12 months living expenses. Example: $40,000 CAD for a 2-year program ($20,000 tuition + $20,000 living). We calculate exactly." },
      { q: "Can I work while studying?", a: "Yes, up to 20 hours/week during school sessions, unlimited during breaks. Work experience in Canada = valuable for future PR applications." },
      { q: "What's a Post-Graduation Work Permit (PGWP)?", a: "A work permit you receive after graduating. Duration matches your study program (typically 1–3 years). PGWP = open work permit = can work for any employer." },
      { q: "Is study permit to PR really possible?", a: "Yes. Many international students transition to work permits and then PR. It's a proven pathway requiring 3–4 years total (study + work + PR)." },
    ],
  },
  {
    title: "Work Permits & SOWP",
    faqs: [
      { q: "What's the difference between open and employer-specific work permits?", a: "Open work permit = work for any employer. Employer-specific = work only for one employer. Both are valuable; choice depends on your situation." },
      { q: "How quickly can I get a work permit?", a: "4–8 weeks typically. Expedited processing (2–3 weeks) available in some cases." },
      { q: "What's a Spousal Open Work Permit (SOWP)?", a: "SOWP allows your spouse to work for any employer while you pursue study or immigration goals. They earn income while supporting your family." },
      { q: "Can I switch employers on a work permit?", a: "Depends on permit type. Open work permit = yes, freely. Employer-specific = no, tied to that employer. SOWP = yes, any employer." },
      { q: "Does my work experience count toward PR?", a: "Yes. Canadian work experience is valuable for Express Entry (CRS points) and Canadian Experience Class (requirement). PGWP holders often transition to PR this way." },
    ],
  },
  {
    title: "Francophone Mobility Program",
    faqs: [
      { q: "What TEF score do I need?", a: "Minimum 370. Aim for 400+ (higher = better ranking in pool)." },
      { q: "How difficult is TEF?", a: "Moderate for non-natives, easier than IELTS equivalents. It's a test of French. Practice materials available online through TV5Monde and RFI Savoirs." },
      { q: "Can I take TEF multiple times?", a: "Yes. Retake if needed. Submit your highest score." },
      { q: "Do I need a job offer for FMP?", a: "No. Job offer is optional. You can find a job after arriving on FMP." },
      { q: "Which provinces welcome FMP?", a: "All provinces. Quebec prioritizes French speakers. Ontario, BC, Alberta also actively recruit." },
      { q: "Can I apply for both FMP and Express Entry?", a: "Yes. Both applications are possible. FMP likely faster if you qualify, so apply to both to maximize chances." },
    ],
  },
  {
    title: "General Immigration",
    faqs: [
      { q: "What's the difference between RCIC and immigration lawyer?", a: "RCICs specialize in immigration exclusively. Lawyers practice multiple areas. Both are regulated. RCICs typically cost less and specialize more. For most immigration cases, an RCIC is the better choice." },
      { q: "Do I really need professional help?", a: "Not legally, but statistically yes. DIY approval rate ~82%. With RCIC guidance, ~94%. One mistake can cost your entire application." },
      { q: "How much does immigration consulting cost?", a: "Varies by program. Express Entry: $2,000–3,000. Study permits: $1,000–1,500. Family sponsorship: $3,000–5,000. Always transparent upfront." },
      { q: "What documents do I need?", a: "Depends on program. Generally: education credentials, work experience letters, language test results, passport, financial proof, police certificate. We provide a complete checklist." },
      { q: "Can I apply from outside Canada?", a: "Yes. Most applications are from abroad. You don't need to be in Canada to apply." },
      { q: "How do I know if I'm eligible?", a: "Book a free consultation. We'll assess your background and tell you exactly which pathways you qualify for." },
      { q: "What if my application is delayed?", a: "Processing times vary. If significantly delayed (beyond published timelines), we investigate and request updates from IRCC." },
      { q: "Can you guarantee approval?", a: "No one can guarantee approval—that's IRCC's decision. But we can maximize your chances. Our 94% approval rate shows we know what works." },
    ],
  },
]

export default function FAQPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-lg">
            Answers to common Canadian immigration questions. Can't find yours?{" "}
            <Link href="/contact" className="text-red-400 hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {section.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {section.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${section.title}-${i}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-red-600">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-red-100 mb-6">Book a free 30-minute consultation and get personalized guidance for your situation.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Schedule Your Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  )
}
