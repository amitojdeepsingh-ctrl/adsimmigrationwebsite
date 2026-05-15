import Link from "next/link"
import type { Metadata } from "next"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Canadian Immigration Blog | Expert Guides & Tips | ADS Immigration",
  description: "Expert guides on Express Entry, permanent residency, study permits, work permits, and PNP. Stay informed with the latest Canadian immigration news from a licensed RCIC.",
  openGraph: {
    title: "Canadian Immigration Blog | Expert Guides & Tips",
    description: "Expert immigration guides and tips from a licensed RCIC.",
    url: "https://adsimmigration.com/blog",
    type: "website",
    images: [
      {
        url: "/ads-logo.svg",
        width: 400,
        height: 400,
        alt: "ADS Immigration Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Immigration Blog | ADS Immigration",
    description: "Expert guides on Express Entry, PR, study permits & work permits.",
    images: ["/ads-logo.svg"],
  },
}

export default function BlogPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Canadian Immigration Blog</h1>
          <p className="text-xl text-slate-300">
            Expert guides, tips, and updates from a licensed RCIC. Stay informed about Express Entry, PNP, study permits, and more.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="text-xs font-semibold bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors text-sm"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Questions About Your Case?</h2>
          <p className="text-red-100 mb-8">These guides cover general information. For advice specific to your situation, book a free consultation with our RCIC.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </div>
  )
}
