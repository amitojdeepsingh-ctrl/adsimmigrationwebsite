"use client"

import { useEffect, useRef, useState } from "react"
import type { Variants } from "framer-motion"

// ─── Intersection Observer Hook ─────────────────────────────────────────────
// Returns true once the element enters the viewport. Once visible it stays
// visible (no flicker when scrolling back up).
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // fire once
        }
      },
      { threshold: 0.15, ...options }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

// ─── Number Counter Hook ─────────────────────────────────────────────────────
// Counts from 0 to `end` once `trigger` is true.
// Supports numeric values like 200 (for "200+") and percentages like 94.
export function useCountUp(end: number, duration = 1800, trigger = true) {
  const [count, setCount] = useState(0)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!trigger) return

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    frameRef.current = requestAnimationFrame(step)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [end, duration, trigger])

  return count
}

// ─── Framer Motion Variants ──────────────────────────────────────────────────

/** Fade up — default for most sections */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Fade in from the left — hero headline */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Fade in from the right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Simple fade */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

/** Stagger container — wraps a list of children that use fadeUp */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

/** Scale-in for cards / badges */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Hover state for service cards */
export const cardHover = {
  rest: { y: 0, boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)" },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px -8px rgb(0 0 0 / 0.15)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
}

/** Button hover/tap state — subtle scale and color change */
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeOut" },
  },
}

/** Accordion item animation */
export const accordionVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

/** Text reveal — character by character effect */
export const textReveal: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.05,
      duration: 0.3,
    },
  }),
}

/** Icon bounce on load */
export const iconBounce: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

/** Subtle pulse for emphasis */
export const subtlePulse: Variants = {
  animate: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

/** Counter text color flash on update */
export const counterFlash: Variants = {
  animate: {
    color: ["#dc2626", "#991b1b"],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

/** Container for list animations with stagger */
export const listContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

/** List item animation */
export const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

/** Smooth page transition overlay */
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}
