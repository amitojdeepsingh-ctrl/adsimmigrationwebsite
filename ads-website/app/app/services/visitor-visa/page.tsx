import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VisitorVisaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Visitor Visa Services</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            Whether you're planning to visit family, explore Canada, or conduct business, our visitor visa services ensure a smooth application process with higher chances of approval.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">We Assist With:</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Temporary Resident Visas (TRV)
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Super Visas for parents and grandparents
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Business visitor visas
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Electronic Travel Authorization (eTA)
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Visa extensions and status restoration
            </li>
          </ul>
          
          <Button asChild>
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>
        
        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Process</h3>
            <ul className="space-y-3">
              <li>Initial assessment of eligibility</li>
              <li>Documentation checklist and guidance</li>
              <li>Application form completion</li>
              <li>Supporting document review</li>
              <li>Submission and follow-up</li>
            </ul>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Key Requirements</h3>
            <ul className="space-y-3">
              <li>Proof of ties to home country</li>
              <li>Financial documentation</li>
              <li>Travel history</li>
              <li>Purpose of visit documentation</li>
              <li>Medical insurance (for Super Visa)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}