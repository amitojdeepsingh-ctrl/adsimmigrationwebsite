import { ContactForm } from '@/components/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact ADS Immigration | RCIC Consultant Canada',
  description: 'Get in touch with ADS Immigration. Free consultation for Express Entry, permanent residency, study permits & work permits. Licensed RCIC.',
  openGraph: {
    title: 'Contact ADS Immigration | RCIC Consultant Canada',
    description: 'Book a free consultation with our licensed RCIC consultant. Contact ADS Immigration today.',
    url: 'https://adsimmigration.com/contact',
    type: 'website',
    images: [
      {
        url: '/ads-logo.svg',
        width: 400,
        height: 400,
        alt: 'ADS Immigration - Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ADS Immigration | RCIC Consultant',
    description: 'Book a free consultation with our licensed RCIC consultant.',
    images: ['/ads-logo.svg'],
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Have questions about immigration to Canada? Contact us today for professional assistance.
          </p>
          <div className="space-y-4">
            <p>
              <strong>Phone:</strong> 604-363-9350
            </p>
            <p>
              <strong>Email:</strong> info@adsimmigration.com
            </p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}