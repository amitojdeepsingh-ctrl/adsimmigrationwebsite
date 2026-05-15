import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AppealsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Immigration Appeals</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            When faced with a refusal or negative decision, our expert appeal services can help you navigate the complex appeals process and present your case effectively.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Appeal Services Include:</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Sponsorship appeal representation at IAD
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Residency obligation appeals
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Removal order appeals
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Federal Court judicial review applications
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Appeal preparation and documentation
            </li>
          </ul>
          
          <Button asChild>
            <Link href="/contact">Discuss Your Appeal</Link>
          </Button>
        </div>
        
        <div className="space-y-6">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Types of Appeals We Handle</h3>
            <ul className="space-y-3">
              <li>Spouse and family sponsorship refusals</li>
              <li>Permanent resident card renewals</li>
              <li>Citizenship application refusals</li>
              <li>Work permit and study permit refusals</li>
              <li>Humanitarian and Compassionate applications</li>
            </ul>
          </div>
          
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us for Appeals?</h3>
            <ul className="space-y-3">
              <li>Extensive experience with immigration tribunals</li>
              <li>Strong track record of successful appeals</li>
              <li>Thorough case preparation and documentation</li>
              <li>Clear communication throughout the process</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}