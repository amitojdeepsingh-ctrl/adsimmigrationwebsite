import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Users,
  GraduationCap,
  Heart,
  MapPin,
  Scale,
  Plane,
  Building2,
  FileText
} from "lucide-react"

export const metadata: Metadata = {
  title: "Canadian Immigration Services | Express Entry, PR, Study Permits | ADS Immigration",
  description: "Full range of Canadian immigration services: Express Entry, permanent residency, study permits, work permits, PNP, and family sponsorship. Licensed RCIC consultant.",
  openGraph: {
    title: "Canadian Immigration Services | ADS Immigration",
    description: "Expert immigration services for Express Entry, PR, study permits & work permits.",
    url: "https://adsimmigration.com/services",
    type: "website",
    images: [
      {
        url: "/ads-logo.svg",
        width: 400,
        height: 400,
        alt: "ADS Immigration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Immigration Services | ADS Immigration",
    description: "Express Entry, PR, Study Permits & Work Permits services from a licensed RCIC.",
    images: ["/ads-logo.svg"],
  },
}

const services = [
  {
    title: "Express Entry",
    description: "Fast-track your Canadian permanent residence through the Federal Skilled Worker, Federal Skilled Trades, and Canadian Experience Class programs.",
    icon: Users,
    link: "/services/express-entry"
  },
  {
    title: "PNP Applications",
    description: "Navigate provincial nomination programs across Canada to find the best pathway for your immigration journey.",
    icon: MapPin,
    link: "/services/pnp"
  },
  {
    title: "Family Sponsorship",
    description: "Reunite with your loved ones in Canada through spouse, partner, children, and parent sponsorship programs.",
    icon: Heart,
    link: "/services/family-sponsorship"
  },
  {
    title: "Study Permits",
    description: "Pursue your education in Canada with comprehensive study permit application assistance.",
    icon: GraduationCap,
    link: "/services/study-permits"
  },
  {
    title: "Immigration Appeals",
    description: "Expert representation for immigration appeals at the Immigration Appeal Division (IAD) and Federal Court.",
    icon: Scale,
    link: "/services/appeals"
  },
  {
    title: "Visitor Visa",
    description: "Assistance with temporary resident visas, super visas, and business visitor applications.",
    icon: Plane,
    link: "/services/visitor-visa"
  },
  {
    title: "Work Permits",
    description: "Support for LMIA-based work permits, CUSMA/NAFTA work permits, and other temporary work programs.",
    icon: Building2,
    link: "/services/work-permits"
  },
  {
    title: "Business Immigration",
    description: "Guidance for entrepreneurs and investors looking to establish or invest in Canadian businesses.",
    icon: FileText,
    link: "/services/business-immigration"
  }
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Immigration Services</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground">
        Comprehensive immigration solutions tailored to your needs
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link href={service.link} key={service.title}>
            <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}