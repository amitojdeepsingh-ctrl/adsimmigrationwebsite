/**
 * Dynamic import configuration for code splitting
 * Heavy components are loaded on-demand to improve initial page load
 */

import dynamic from "next/dynamic"

// Heavy components - imported dynamically
export const CRSCalculator = dynamic(() => import("@/components/crs-calculator"), {
  loading: () => <div className="flex items-center justify-center min-h-96 bg-gray-50 rounded-lg">Loading calculator...</div>,
  ssr: false,
})

export const BookingForm = dynamic(() => import("@/components/booking-form"), {
  loading: () => <div className="flex items-center justify-center min-h-96 bg-gray-50 rounded-lg">Loading form...</div>,
  ssr: false,
})

export const ContactForm = dynamic(() => import("@/components/contact-form"), {
  loading: () => <div className="flex items-center justify-center min-h-96 bg-gray-50 rounded-lg">Loading form...</div>,
  ssr: false,
})

// Framer Motion animation components - split on demand
export const AnimatedSection = dynamic(() => import("@/components/animated-section"), {
  loading: () => <div className="animate-pulse" />,
  ssr: true,
})
