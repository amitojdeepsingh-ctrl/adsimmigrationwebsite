"use client"

import { useState, useEffect, useMemo } from "react"
import { Share2, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ---------------------------------------------------------------------------
// Types and Constants
// ---------------------------------------------------------------------------

interface CRSState {
  age: number
  englishClb: number
  frenchClb: number
  canadianWorkExperience: number
  foreignWorkExperience: number
  education: "high_school" | "diploma" | "bachelor" | "master" | "phd"
  canadianEducation: boolean
  provincialNomination: boolean
}

interface CRSBreakdown {
  age: number
  language: number
  workExperience: number
  education: number
  canadianEducation: number
  provincialNomination: number
  total: number
}

// Visa pathway based on CRS score
interface VisaPathway {
  name: string
  minScore: number
  description: string
  color: string
}

const VISA_PATHWAYS: VisaPathway[] = [
  {
    name: "Express Entry (High Priority)",
    minScore: 1200,
    description: "Competitive score for fastest processing",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Express Entry (Competitive)",
    minScore: 1000,
    description: "Good chances in most draws",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Provincial Nominee Program (PNP)",
    minScore: 700,
    description: "Eligible for provincial sponsorship",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Work Permit or Further Development",
    minScore: 400,
    description: "Consider work permits or skill improvement",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Skill Development Required",
    minScore: 0,
    description: "Improve language, education, or work experience",
    color: "from-slate-500 to-gray-600",
  },
]

// ---------------------------------------------------------------------------
// Calculation Functions
// ---------------------------------------------------------------------------

/**
 * Calculate age points (max 100 at 26-29 years)
 * Decreases by 2 points per year outside the 26-29 range
 */
function calculateAgePoints(age: number): number {
  if (age < 18 || age > 45) return 0
  if (age >= 26 && age <= 29) return 100
  if (age < 26) {
    return Math.max(0, 100 - (26 - age) * 2)
  }
  // age > 29
  return Math.max(0, 100 - (age - 29) * 2)
}

/**
 * Calculate language points based on CLB level
 * CLB 0: 0 points, CLB 9+: 160 points (varies)
 */
function calculateLanguagePoints(clb: number): number {
  const points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 111, 119, 127, 135]
  return clb >= 0 && clb <= 12 ? points[clb] || 0 : 0
}

/**
 * Calculate total language points (best of English/French, plus bonus for second language)
 */
function calculateTotalLanguagePoints(englishClb: number, frenchClb: number): number {
  const englishPoints = calculateLanguagePoints(englishClb)
  const frenchPoints = calculateLanguagePoints(frenchClb)

  // Use the higher score, add second language bonus if applicable
  const primaryPoints = Math.max(englishPoints, frenchPoints)
  const secondaryPoints = Math.min(englishPoints, frenchPoints)

  // Add second language bonus (up to 50 additional points at CLB 5+)
  const secondLanguageBonus = Math.min(secondaryPoints * 0.5, 50)

  return Math.min(primaryPoints + secondLanguageBonus, 160)
}

/**
 * Calculate work experience points (max 100)
 * Calculation: years of experience × 10, capped at 100
 */
function calculateWorkExperiencePoints(
  canadianYears: number,
  foreignYears: number
): number {
  // Canadian experience weighted at 100%, foreign at 50%
  const totalYears = canadianYears + foreignYears * 0.5
  return Math.min(totalYears * 10, 100)
}

/**
 * Calculate education points
 * High school: 0, Diploma: 30, Bachelor: 90, Master: 120, PhD: 150
 */
function calculateEducationPoints(education: CRSState["education"]): number {
  const points = {
    high_school: 0,
    diploma: 30,
    bachelor: 90,
    master: 120,
    phd: 150,
  }
  return points[education]
}

/**
 * Calculate total CRS score with all components
 */
function calculateCRSScore(state: CRSState): CRSBreakdown {
  const agePoints = calculateAgePoints(state.age)
  const languagePoints = calculateTotalLanguagePoints(
    state.englishClb,
    state.frenchClb
  )
  const workExperiencePoints = calculateWorkExperiencePoints(
    state.canadianWorkExperience,
    state.foreignWorkExperience
  )
  const educationPoints = calculateEducationPoints(state.education)
  const canadianEducationPoints = state.canadianEducation ? 30 : 0
  const provincialNominationPoints = state.provincialNomination ? 600 : 0

  return {
    age: agePoints,
    language: languagePoints,
    workExperience: workExperiencePoints,
    education: educationPoints,
    canadianEducation: canadianEducationPoints,
    provincialNomination: provincialNominationPoints,
    total:
      agePoints +
      languagePoints +
      workExperiencePoints +
      educationPoints +
      canadianEducationPoints +
      provincialNominationPoints,
  }
}

// ---------------------------------------------------------------------------
// Animated Number Component
// ---------------------------------------------------------------------------

function AnimatedNumber({ value, max = 1200 }: { value: number; max?: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let animationFrame: number
    let currentValue = displayValue

    const animate = () => {
      const difference = value - currentValue
      const increment = difference / 10

      if (Math.abs(difference) > 1) {
        currentValue += increment
        setDisplayValue(Math.round(currentValue))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, displayValue])

  const percentage = (displayValue / max) * 100

  return (
    <div className="space-y-3">
      <div className="relative h-12 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg flex items-center justify-center border-2 border-transparent overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r transition-all duration-300",
            displayValue >= 1200
              ? "from-emerald-500 to-teal-600"
              : displayValue >= 1000
                ? "from-blue-500 to-cyan-600"
                : displayValue >= 700
                  ? "from-purple-500 to-pink-600"
                  : "from-amber-500 to-orange-600"
          )}
          style={{ width: `${percentage}%` }}
        />
        <span className="relative text-3xl font-bold text-slate-900 dark:text-white tabular-nums">
          {displayValue}
        </span>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>0</span>
        <span>600</span>
        <span>1200</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Score Category Component
// ---------------------------------------------------------------------------

interface CategoryBarProps {
  label: string
  value: number
  max: number
  color: string
}

function CategoryBar({ label, value, max, color }: CategoryBarProps) {
  const percentage = (value / max) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          {value}/{max}
        </span>
      </div>
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className={cn("h-full transition-all duration-300", color)}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Visa Pathway Card Component
// ---------------------------------------------------------------------------

interface PathwayCardProps {
  pathway: VisaPathway
  isEligible: boolean
}

function PathwayCard({ pathway, isEligible }: PathwayCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border-2 p-4 transition-all",
        isEligible
          ? "border-green-500 bg-green-50 dark:bg-green-950/30"
          : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/30"
      )}
    >
      <div className="flex items-start gap-3">
        {isEligible && (
          <div className="mt-0.5 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <Check className="h-3 w-3 text-white" />
          </div>
        )}
        <div className="flex-1">
          <h4
            className={cn(
              "font-semibold text-sm",
              isEligible ? "text-green-900 dark:text-green-300" : "text-slate-700 dark:text-slate-300"
            )}
          >
            {pathway.name}
          </h4>
          <p
            className={cn(
              "text-xs mt-1",
              isEligible ? "text-green-800 dark:text-green-400" : "text-slate-600 dark:text-slate-400"
            )}
          >
            {pathway.description}
          </p>
          {pathway.minScore > 0 && (
            <p
              className={cn(
                "text-xs font-medium mt-2",
                isEligible
                  ? "text-green-700 dark:text-green-300"
                  : "text-slate-500 dark:text-slate-500"
              )}
            >
              Minimum {pathway.minScore} points
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Slider Input Component
// ---------------------------------------------------------------------------

interface SliderInputProps {
  label: string
  value: number
  min: number
  max: number
  step?: number
  unit?: string
  onChange: (value: number) => void
}

function SliderInput({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
}: SliderInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main CRS Calculator Component
// ---------------------------------------------------------------------------

export default function CRSCalculator() {
  const [state, setState] = useState<CRSState>({
    age: 30,
    englishClb: 8,
    frenchClb: 0,
    canadianWorkExperience: 0,
    foreignWorkExperience: 3,
    education: "bachelor",
    canadianEducation: false,
    provincialNomination: false,
  })

  const [copied, setCopied] = useState(false)

  const breakdown = useMemo(() => calculateCRSScore(state), [state])

  const shareUrl = useMemo(() => {
    const params = new URLSearchParams({
      age: state.age.toString(),
      englishClb: state.englishClb.toString(),
      frenchClb: state.frenchClb.toString(),
      canadianWorkExperience: state.canadianWorkExperience.toString(),
      foreignWorkExperience: state.foreignWorkExperience.toString(),
      education: state.education,
      canadianEducation: state.canadianEducation.toString(),
      provincialNomination: state.provincialNomination.toString(),
    })

    return `${typeof window !== "undefined" ? window.location.origin : ""}${typeof window !== "undefined" ? window.location.pathname : ""}?${params.toString()}`
  }, [state])

  // Load from URL parameters on mount
  useEffect(() => {
    if (typeof window === "undefined") return

    const params = new URLSearchParams(window.location.search)
    const newState: Partial<CRSState> = {}

    const ageParam = params.get("age")
    if (ageParam) newState.age = parseInt(ageParam, 10)

    const englishClbParam = params.get("englishClb")
    if (englishClbParam) newState.englishClb = parseInt(englishClbParam, 10)

    const frenchClbParam = params.get("frenchClb")
    if (frenchClbParam) newState.frenchClb = parseInt(frenchClbParam, 10)

    const canadianWorkExpParam = params.get("canadianWorkExperience")
    if (canadianWorkExpParam)
      newState.canadianWorkExperience = parseInt(canadianWorkExpParam, 10)

    const foreignWorkExpParam = params.get("foreignWorkExperience")
    if (foreignWorkExpParam)
      newState.foreignWorkExperience = parseInt(foreignWorkExpParam, 10)

    const educationParam = params.get("education")
    if (
      educationParam &&
      ["high_school", "diploma", "bachelor", "master", "phd"].includes(
        educationParam
      )
    ) {
      newState.education = educationParam as CRSState["education"]
    }

    const canadianEducationParam = params.get("canadianEducation")
    if (canadianEducationParam)
      newState.canadianEducation = canadianEducationParam === "true"

    const provincialNominationParam = params.get("provincialNomination")
    if (provincialNominationParam)
      newState.provincialNomination = provincialNominationParam === "true"

    if (Object.keys(newState).length > 0) {
      setState((prev) => ({ ...prev, ...newState }))
    }
  }, [])

  const handleCopyShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My CRS Calculator Results",
          text: `My CRS Score: ${breakdown.total}/1200`,
          url: shareUrl,
        })
      } catch (err) {
        console.error("Failed to share:", err)
      }
    } else {
      // Fallback to copy
      handleCopyShare()
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Express Entry CRS Calculator
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Calculate your Comprehensive Ranking System score for Canadian
          immigration
        </p>
      </div>

      {/* Main Score Display */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 md:p-8">
        <div className="space-y-2 mb-6">
          <h2 className="text-lg font-semibold text-foreground">
            Your CRS Score
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Adjust your profile to see your score update in real-time
          </p>
        </div>
        <AnimatedNumber value={breakdown.total} />
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Age */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
          <SliderInput
            label="Age"
            value={state.age}
            min={18}
            max={45}
            unit="years"
            onChange={(value) => setState((prev) => ({ ...prev, age: value }))}
          />
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            Best score: 26-29 years (100 points)
          </p>
        </div>

        {/* English CLB */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
          <SliderInput
            label="English Proficiency (CLB)"
            value={state.englishClb}
            min={0}
            max={12}
            onChange={(value) =>
              setState((prev) => ({ ...prev, englishClb: value }))
            }
          />
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            Canadian Language Benchmark level
          </p>
        </div>

        {/* French CLB */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
          <SliderInput
            label="French Proficiency (CLB)"
            value={state.frenchClb}
            min={0}
            max={12}
            onChange={(value) =>
              setState((prev) => ({ ...prev, frenchClb: value }))
            }
          />
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            Bonus points for bilingual candidates
          </p>
        </div>

        {/* Canadian Work Experience */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
          <SliderInput
            label="Canadian Work Experience"
            value={state.canadianWorkExperience}
            min={0}
            max={20}
            unit="years"
            onChange={(value) =>
              setState((prev) => ({ ...prev, canadianWorkExperience: value }))
            }
          />
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            Full-time or equivalent
          </p>
        </div>

        {/* Foreign Work Experience */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
          <SliderInput
            label="Foreign Work Experience"
            value={state.foreignWorkExperience}
            min={0}
            max={20}
            unit="years"
            onChange={(value) =>
              setState((prev) => ({ ...prev, foreignWorkExperience: value }))
            }
          />
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">
            Weighted at 50% compared to Canadian
          </p>
        </div>

        {/* Education Level */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
          <label className="block text-sm font-medium text-foreground mb-3">
            Highest Education Level
          </label>
          <select
            value={state.education}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                education: e.target.value as CRSState["education"],
              }))
            }
            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="high_school">High School</option>
            <option value="diploma">Diploma (1-3 years)</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD or Higher</option>
          </select>
        </div>
      </div>

      {/* Checkboxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={state.canadianEducation}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  canadianEducation: e.target.checked,
                }))
              }
              className="w-4 h-4 rounded border-input"
            />
            <span className="text-sm font-medium text-foreground">
              Completed Education in Canada (+30 points)
            </span>
          </label>
        </div>

        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={state.provincialNomination}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  provincialNomination: e.target.checked,
                }))
              }
              className="w-4 h-4 rounded border-input"
            />
            <span className="text-sm font-medium text-foreground">
              Provincial Nomination (+600 points)
            </span>
          </label>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 md:p-8">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Score Breakdown
        </h2>
        <div className="space-y-4">
          <CategoryBar
            label="Age"
            value={breakdown.age}
            max={100}
            color="bg-blue-500"
          />
          <CategoryBar
            label="Language Ability"
            value={breakdown.language}
            max={160}
            color="bg-purple-500"
          />
          <CategoryBar
            label="Work Experience"
            value={breakdown.workExperience}
            max={100}
            color="bg-emerald-500"
          />
          <CategoryBar
            label="Education"
            value={breakdown.education}
            max={150}
            color="bg-amber-500"
          />
          {breakdown.canadianEducation > 0 && (
            <CategoryBar
              label="Canadian Education Bonus"
              value={breakdown.canadianEducation}
              max={30}
              color="bg-teal-500"
            />
          )}
          {breakdown.provincialNomination > 0 && (
            <CategoryBar
              label="Provincial Nomination Bonus"
              value={breakdown.provincialNomination}
              max={600}
              color="bg-pink-500"
            />
          )}
        </div>
      </div>

      {/* Visa Pathways */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 md:p-8">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Your Visa Pathways
        </h2>
        <div className="space-y-3">
          {VISA_PATHWAYS.map((pathway, idx) => (
            <PathwayCard
              key={idx}
              pathway={pathway}
              isEligible={breakdown.total >= pathway.minScore}
            />
          ))}
        </div>
      </div>

      {/* Share Section */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-6 md:p-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Share Your Results
        </h2>
        <div className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Share your CRS profile with a consultant or save it for later
          </p>
          <div className="flex gap-2">
            <Button
              onClick={handleShare}
              variant="default"
              className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <Share2 className="h-4 w-4" />
              Share Profile
            </Button>
            <Button
              onClick={handleCopyShare}
              variant="outline"
              className="flex-1 gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy Link
                </>
              )}
            </Button>
          </div>
          {!navigator.share && (
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Shareable link is copied to your clipboard
            </p>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-4 md:p-6">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          <span className="font-semibold">Disclaimer:</span> This calculator
          provides estimates based on official CRS scoring criteria. For accurate
          assessment, consult with a registered immigration consultant. Scores
          are current as of {new Date().toLocaleDateString()}.
        </p>
      </div>
    </div>
  )
}
