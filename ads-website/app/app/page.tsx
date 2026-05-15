"use client"

import Link from "next/link"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import {
  fadeUp,
  slideInLeft,
  fadeIn,
  staggerContainer,
  scaleIn,
  cardHover,
  buttonHover,
  accordionVariants,
  listContainer,
  listItem,
  iconBounce,
  counterFlash,
  subtlePulse,
  useInView,
  useCountUp,
} from "@/lib/animation-utils"

// Dynamic imports for heavy components
const CRSCalculator = dynamic(() => import("@/components/crs-calculator"), {
  loading: () => <div className="flex items-center justify-center min-h-96 bg-gray-50 rounded-lg animate-pulse">Loading calculator...</div>,
  ssr: false,
})

const services = [
  {
    title: "Express Entry",
    description: "Fast-track your permanent residency through Canada's Express Entry program. We optimize your profile for maximum points and guide you through every step.",
    stats: ["Average timeline: 4-6 months", "Success rate: 94%"],
    href: "/services/express-entry",
  },
  {
    title: "Permanent Residency",
    description: "From family sponsorship to provincial nominee programs, we handle your permanent residency application end-to-end.",
    stats: ["Multiple pathways available", "Licensed guidance"],
    href: "/services/permanent-residency",
  },
  {
    title: "Provincial Nominee Programs",
    description: "Target in-demand occupations with lower CRS requirements. Expert navigation of all 13 Canadian provincial programs.",
    stats: ["13 provinces covered", "300-400 CRS minimum"],
    href: "/services/pnp",
  },
  {
    title: "Study Permits",
    description: "Secure your study permit and transition to work or residency. We guide international students through the complete process.",
    stats: ["High approval rates", "Clear pathway to PR"],
    href: "/services/study-permit",
  },
  {
    title: "Work Permits & SOWP",
    description: "Spousal open work permits, employer-sponsored work permits, and temporary resident visas—we guide you through every option.",
    stats: ["Fast processing available", "Family-friendly options"],
    href: "/services/work-permits",
  },
  {
    title: "Francophone Mobility",
    description: "Leverage your French language skills for faster PR. Lower point requirements and less competition than Express Entry.",
    stats: ["Faster timeline", "Niche expertise"],
    href: "/services/francophone-mobility",
  },
  {
    title: "Employer Sponsorship",
    description: "Help your company hire and sponsor international talent. We streamline the LMIA and work permit process for employers.",
    stats: ["Quick turnaround", "Compliance guaranteed"],
    href: "/contact",
  },
]

const steps = [
  { num: "1", title: "Free Consultation", desc: "Share your immigration goal and background. We assess your eligibility and discuss your options." },
  { num: "2", title: "Personalized Assessment", desc: "We analyze your profile, identify the best pathway, and create a customized plan with clear timelines and costs." },
  { num: "3", title: "Application Preparation", desc: "We handle document organization, form completion, and quality assurance—ensuring every detail is perfect." },
  { num: "4", title: "Submission & Tracking", desc: "Your application is submitted, and we monitor progress. You're updated at every stage." },
  { num: "5", title: "Approval & Settlement", desc: "Upon approval, we guide you through final steps and settlement planning in Canada." },
]

const testimonials = [
  {
    quote: "I was overwhelmed by the Express Entry process. Simran made it simple, got all my documents organized, and my approval came through in 4 months. Couldn't have done it without her expertise.",
    name: "Harpreet Singh",
    role: "Software Engineer — Express Entry",
    title: "Approved in 4 Months",
  },
  {
    quote: "Sponsoring my parents seemed impossible. Simran guided us through the entire family sponsorship process. They're now Canadian residents. Thank you!",
    name: "Priya Sharma",
    role: "Business Owner — Family Sponsorship",
    title: "Smooth Family Reunification",
  },
  {
    quote: "We hired international talent and had no idea how to navigate sponsorship. ADS Immigration made the entire process smooth and compliant.",
    name: "Raj Patel",
    role: "Tech Startup Founder — Employer Sponsorship",
    title: "Company Sponsorship Made Easy",
  },
]

const faqs = [
  {
    q: "How long does Express Entry really take?",
    a: "Express Entry processing times typically range from 4–6 months. With expert guidance on profile optimization, we aim for faster approval. We've had clients approved within 4 months.",
  },
  {
    q: "Do I need an RCIC or can I apply myself?",
    a: "You can apply yourself, but immigration processes are complex. One small mistake can delay approval or lead to rejection. An RCIC catches these issues, optimizes your application, and increases approval chances—our clients have a 94% success rate.",
  },
  {
    q: "What's the cost of hiring an RCIC?",
    a: "Costs vary by program. Express Entry consulting typically ranges from $1,500–3,000. Study permits and work permits are $1,000–2,000. We provide transparent pricing during your free consultation—no hidden fees.",
  },
  {
    q: "How is the Francophone Mobility Program different from Express Entry?",
    a: "FMP is specifically for French speakers and offers faster processing and lower point requirements (370+ vs 500+). If you speak French, it may be your quickest path to permanent residency.",
  },
  {
    q: "Can my spouse work while I'm on a study permit?",
    a: "Yes. Your spouse can apply for a Spousal Open Work Permit (SOWP), allowing them to work for any employer in Canada while you complete your studies.",
  },
]

// ─── Stat Counter Component ───────────────────────────────────────────────────
function StatCounter({ value, label }: { value: string; label: string }) {
  const { ref, inView } = useInView()
  // Parse the numeric part. "200+" → 200, "94%" → 94, "4–6 mo" → 0 (non-numeric), "RCIC" → 0
  const numericMatch = value.match(/^(\d+)/)
  const numericEnd = numericMatch ? parseInt(numericMatch[1], 10) : 0
  const suffix = numericMatch ? value.slice(numericMatch[1].length) : value
  const count = useCountUp(numericEnd, 1200, inView && numericEnd > 0)

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      variants={scaleIn}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="text-center"
    >
      <motion.p
        className="text-4xl font-bold mb-2 text-white"
        key={count}
        variants={counterFlash}
        animate="animate"
      >
        {numericEnd > 0 ? `${count}${suffix}` : value}
      </motion.p>
      <motion.p
        className="text-red-200 text-sm"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        {label}
      </motion.p>
    </motion.div>
  )
}

// ─── Section wrapper with scroll-triggered fade-up ───────────────────────────
function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <motion.section
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  )
}

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            Immigration Consultant Canada –{" "}
            <span className="text-red-400">Fast-Track Your Path</span> to Canadian Residency
          </motion.h1>

          <motion.p
            className="text-xl text-slate-300 mb-4 font-medium"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
          >
            Licensed RCIC. Proven Results. Expert Guidance for Express Entry, PR, Study Permits &amp; Work Authorization.
          </motion.p>

          <motion.p
            className="text-slate-400 max-w-3xl mx-auto mb-10 text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
          >
            Navigating Canadian immigration shouldn&apos;t be stressful. At ADS Immigration, we guide individuals,
            families, and employers through every step—so you avoid costly delays, increase your approval chances,
            and move forward with confidence. With Simran Gill, a licensed RCIC consultant, you get personalized
            expertise backed by 200+ successful cases.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.38 }}
          >
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 btn-animate">
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
            </motion.div>
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 btn-animate">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services We Offer</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every immigration path is unique. We specialize in guiding skilled workers, students, families, and
              employers through Canada&apos;s most popular immigration programs.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((svc) => (
              <motion.div key={svc.title} variants={fadeUp}>
                <Link href={svc.href} className="group block h-full">
                  <motion.div
                    className="border border-gray-200 rounded-xl p-6 h-full service-card bg-white"
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.h3
                      className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200"
                      initial={{ color: "#111827" }}
                      whileHover={{ color: "#dc2626" }}
                      transition={{ duration: 0.2 }}
                    >
                      {svc.title}
                    </motion.h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{svc.description}</p>
                    <motion.ul
                      className="space-y-1"
                      variants={listContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {svc.stats.map((s) => (
                        <motion.li
                          key={s}
                          className="text-sm text-gray-500 flex items-center gap-2"
                          variants={listItem}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            viewport={{ once: true }}
                          />
                          {s}
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.span
                      className="mt-4 inline-flex items-center text-sm font-medium text-red-600 group-hover:gap-2 transition-all duration-200"
                      whileHover={{ gap: "8px" }}
                    >
                      Learn More →
                    </motion.span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Why Choose Us ── */}
      <AnimatedSection className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
            Why Clients Trust ADS Immigration
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {[
              { icon: "🏅", title: "RCIC Regulated Professional", body: "Simran Gill is a licensed Regulated Canadian Immigration Consultant (RCIC) certified by the Immigration Consultants of Canada Regulatory Council. Your immigration is in expert hands." },
              { icon: "✅", title: "200+ Successful Cases", body: "From Express Entry approvals to family reunification, we've guided 200+ clients to Canadian residency—with a 94% approval rate across all programs." },
              { icon: "🎯", title: "Personalized Guidance", body: "We don't use templates. Every client gets a customized strategy based on their background, goals, and circumstances—no cookie-cutter advice." },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={idx}
                className="text-center p-8 bg-white rounded-xl shadow-sm"
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 32px -8px rgb(0 0 0 / 0.12)",
                  transition: { duration: 0.22 },
                }}
              >
                <motion.div
                  className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.span
                    className="text-2xl"
                    variants={subtlePulse}
                    animate="animate"
                  >
                    {card.icon}
                  </motion.span>
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.15 }}
                  viewport={{ once: true }}
                >
                  {card.body}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Process ── */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
            Our Process – Simple &amp; Transparent
          </h2>
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                className="flex gap-5 items-start"
                variants={slideInLeft}
                custom={idx}
                transition={{ delay: idx * 0.08 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-lg flex items-center justify-center flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: idx * 0.08,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 16px -4px rgb(220 38 38 / 0.3)",
                  }}
                >
                  {step.num}
                </motion.div>
                <motion.div
                  className="pt-1"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── Testimonials ── */}
      <AnimatedSection className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
            What Our Clients Say
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 overflow-hidden"
                variants={scaleIn}
                custom={idx}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 28px -6px rgb(0 0 0 / 0.1)",
                  transition: { duration: 0.22 },
                }}
              >
                {/* Star rating with stagger */}
                <motion.p
                  className="text-yellow-500 text-lg mb-3"
                  variants={listContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {["★", "★", "★", "★", "★"].map((star, i) => (
                    <motion.span
                      key={i}
                      variants={listItem}
                      custom={i}
                    >
                      {star}
                    </motion.span>
                  ))}
                </motion.p>

                <motion.h4
                  className="font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  &ldquo;{t.title}&rdquo;
                </motion.h4>

                <motion.p
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  &ldquo;{t.quote}&rdquo;
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="font-semibold text-gray-800 text-sm">— {t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white btn-animate">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">Quick answers to common immigration questions.</p>
          <motion.div
            className="space-y-2"
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={listItem}
                  custom={i}
                >
                  <AccordionItem
                    value={`faq-${i}`}
                    className="border border-gray-200 rounded-lg px-4 overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-red-600 transition-colors duration-200">
                        {faq.q}
                      </AccordionTrigger>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + 0.05 }}
                    >
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-red-600 hover:underline font-medium">
              View all FAQs →
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Trust Stats ── */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Trusted by Families, Professionals &amp; Employers
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { value: "200+", label: "Successful Cases" },
              { value: "94%", label: "Approval Rate" },
              { value: "4–6 mo", label: "Average Timeline" },
              { value: "RCIC", label: "Licensed & Certified" },
            ].map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <AnimatedSection className="py-20 px-4 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Canadian Immigration Journey?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            The first step is a free consultation. We&apos;ll assess your eligibility, discuss your options, and create
            a personalized plan—no obligation.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 btn-animate">
                <Link href="/contact">Book a Free 30-Minute Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
          <p className="mt-4 text-slate-500 text-sm">
            Or call us directly:{" "}
            <a href="tel:6043639350" className="text-red-400 hover:underline">
              604-363-9350
            </a>
          </p>
        </div>
      </AnimatedSection>
    </div>
  )
}
