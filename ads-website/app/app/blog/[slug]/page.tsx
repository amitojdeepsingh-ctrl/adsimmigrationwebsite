import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { blogPosts, getBlogPost, getAllBlogSlugs } from "@/lib/blog-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | ADS Immigration`,
    description: post.description,
  }
}

function renderContent(content: string) {
  const lines = content.split("\n")
  const elements: JSX.Element[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      )
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(
        <p key={i} className="font-semibold text-gray-900 mt-4 mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      )
    } else if (line.startsWith("- ")) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-4">
          {listItems.map((item, j) => (
            <li key={j} className="flex gap-2 text-gray-700">
              <span className="text-red-500 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
            </li>
          ))}
        </ul>
      )
      continue
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!lines[i].includes("---")) tableLines.push(lines[i])
        i++
      }
      const [headerLine, ...bodyLines] = tableLines
      const headers = headerLine.split("|").filter((h) => h.trim()).map((h) => h.trim())
      const rows = bodyLines.map((row) => row.split("|").filter((c) => c.trim()).map((c) => c.trim()))
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                {headers.map((h, j) => <th key={j} className="text-left p-3">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="p-3 text-gray-700" dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
        />
      )
    }
    i++
  }

  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-red-400 hover:text-red-300 text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="text-xs font-semibold bg-red-600 text-white px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-slate-400">{post.readTime}</span>
            <span className="text-xs text-slate-400">
              {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-slate-300 text-lg">{post.description}</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose-content">
            {renderContent(post.content)}
          </div>

          <div className="mt-12 p-6 bg-red-50 border border-red-200 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help With Your Application?</h3>
            <p className="text-gray-600 mb-4">This article covers general information. For guidance specific to your situation, book a free consultation with our licensed RCIC.</p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{p.category}</span>
                  <p className="font-semibold text-gray-900 mt-2">{p.title}</p>
                  <p className="text-sm text-gray-500 mt-1">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
