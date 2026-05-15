import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-4">
              ADS <span className="text-red-400">Immigration</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              ADS Immigration Services helps individuals, families, and employers navigate Canadian immigration.
              Licensed RCIC. Expert guidance. Proven results.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                📞{" "}
                <a href="tel:6043639350" className="hover:text-white transition-colors">
                  604-363-9350
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:info@adsimmigration.com" className="hover:text-white transition-colors">
                  info@adsimmigration.com
                </a>
              </p>
              <p>🕐 Mon–Fri, 9am–6pm EST</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { href: "/services/express-entry", label: "Express Entry" },
                { href: "/services/permanent-residency", label: "Permanent Residency" },
                { href: "/services/pnp", label: "Provincial Nominee Programs" },
                { href: "/services/study-permit", label: "Study Permits" },
                { href: "/services/work-permits", label: "Work Permits & SOWP" },
                { href: "/services/francophone-mobility", label: "Francophone Mobility" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
                { href: "/about", label: "About Simran Gill" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Start Today</h3>
            <p className="text-slate-400 text-sm mb-4">
              Get a free 30-minute consultation to assess your immigration options.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} ADS Immigration Services. All rights reserved.</p>
          <p>Licensed RCIC | Immigration Consultants of Canada Regulatory Council</p>
        </div>
      </div>
    </footer>
  )
}
