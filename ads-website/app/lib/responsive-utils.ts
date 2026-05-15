/**
 * Responsive Design Utilities
 * Ensures consistent touch targets and responsive breakpoints
 */

// Touch target sizes (minimum 44px)
export const TOUCH_TARGET_SIZE = 44
export const TOUCH_TARGET_CLASS = "min-h-[44px] min-w-[44px]"

// Responsive padding utilities
export const RESPONSIVE_PADDING = {
  mobile: "px-4 py-4",
  tablet: "md:px-6 md:py-6",
  desktop: "lg:px-8 lg:py-8",
}

// Responsive gap utilities
export const RESPONSIVE_GAP = {
  mobile: "gap-3",
  tablet: "md:gap-4",
  desktop: "lg:gap-6",
}

// Breakpoints (match Tailwind)
export const BREAKPOINTS = {
  mobile: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

// Font size utilities for responsive text
export const RESPONSIVE_TEXT = {
  h1: "text-3xl md:text-4xl lg:text-5xl",
  h2: "text-2xl md:text-3xl lg:text-4xl",
  h3: "text-xl md:text-2xl lg:text-3xl",
  body: "text-sm md:text-base lg:text-lg",
  small: "text-xs md:text-sm lg:text-base",
}

// Container utilities
export const CONTAINER_CLASSES = {
  full: "w-full",
  lg: "max-w-6xl mx-auto",
  md: "max-w-4xl mx-auto",
  sm: "max-w-2xl mx-auto",
}

// Ensure all interactive elements have minimum touch target
export const INTERACTIVE_ELEMENT_CLASS = `inline-flex items-center justify-center min-h-[${TOUCH_TARGET_SIZE}px] min-w-[${TOUCH_TARGET_SIZE}px]`

/**
 * Get responsive classes for a grid
 * @param cols - Column count at each breakpoint: { mobile, tablet, desktop }
 */
export function getResponsiveGrid(cols: { mobile: number; tablet: number; desktop: number }) {
  return `grid grid-cols-${cols.mobile} md:grid-cols-${cols.tablet} lg:grid-cols-${cols.desktop} gap-4 md:gap-6 lg:gap-8`
}

/**
 * Ensure touch targets meet WCAG AA compliance (44px minimum)
 */
export const TOUCH_TARGET_ATTRIBUTES = {
  minHeight: `${TOUCH_TARGET_SIZE}px`,
  minWidth: `${TOUCH_TARGET_SIZE}px`,
  padding: "8px", // Additional padding for hit area
}
