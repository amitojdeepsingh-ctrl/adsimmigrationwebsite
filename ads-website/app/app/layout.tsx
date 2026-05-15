import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"
import type { Viewport, Metadata } from "next"

// display: swap prevents invisible text during font load (improves LCP + CLS)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C41E3A",
}

export const metadata: Metadata = {
  title: "RCIC Immigration Consultant Canada | ADS Immigration",
  description: "Licensed RCIC immigration consultant in Canada. Expert guidance for Express Entry, permanent residency, study permits, work permits, and PNP. 200+ successful cases.",
  metadataBase: new URL("https://adsimmigration.com"),
  alternates: {
    canonical: "https://adsimmigration.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://adsimmigration.com",
    siteName: "ADS Immigration",
    title: "RCIC Immigration Consultant Canada | ADS Immigration",
    description: "Licensed RCIC. 200+ successful cases. Expert guidance for Express Entry, PR, study permits & work permits.",
    images: [
      {
        url: "/ads-logo.svg",
        width: 400,
        height: 400,
        alt: "ADS Immigration Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RCIC Immigration Consultant Canada | ADS Immigration",
    description: "Licensed RCIC. Expert guidance for Express Entry, PR, study permits & work permits.",
    images: ["/ads-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Immigration Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Ads to reduce DNS + TCP handshake time */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18026294951"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18026294951');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}