"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const services = [
  { href: "/services/express-entry", title: "Express Entry", desc: "Fast-track permanent residency for skilled workers" },
  { href: "/services/permanent-residency", title: "Permanent Residency", desc: "Family sponsorship, PNP, and more" },
  { href: "/services/pnp", title: "Provincial Nominee Programs", desc: "13 provincial pathways, lower CRS scores" },
  { href: "/services/study-permit", title: "Study Permits", desc: "Study at Canadian institutions" },
  { href: "/services/work-permits", title: "Work Permits & SOWP", desc: "Employment authorization and spousal work permits" },
  { href: "/services/francophone-mobility", title: "Francophone Mobility", desc: "Faster PR for French speakers" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg className="w-12 h-12" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 20 L210 50 L240 50 L215 70 L225 100 L200 80 L175 100 L185 70 L160 50 L190 50 Z" fill="#C41E3A"/>
            <text x="220" y="85" fontSize="64" fontWeight="bold" fill="#C41E3A" fontFamily="Arial, sans-serif">ADS</text>
          </svg>
          <span className="font-bold text-lg text-gray-900 hidden sm:inline">ADS Immigration</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-red-600">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[520px] gap-2 p-4 md:grid-cols-2">
                    {services.map((s) => (
                      <ListItem key={s.href} href={s.href} title={s.title}>
                        {s.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={triggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={triggerStyle()}>Blog</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={triggerStyle()}>FAQ</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={triggerStyle()}>Contact</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white ml-2">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile hamburger - 44px minimum touch target */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block text-gray-700 hover:text-red-600 hover:bg-gray-50 px-3 py-3 rounded transition-colors min-h-[44px] flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              {s.title}
            </Link>
          ))}
          <div className="border-t pt-3 space-y-1">
            {[
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-gray-700 hover:text-red-600 hover:bg-gray-50 px-3 py-3 rounded transition-colors min-h-[44px] flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white h-12 min-h-[44px]">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Book Free Consultation</Link>
          </Button>
        </div>
      )}
    </header>
  )
}

const ListItem = ({ className, title, children, ...props }: any) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">{children}</p>
      </Link>
    </NavigationMenuLink>
  </li>
)

const triggerStyle = () =>
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-red-600 focus:outline-none"

export { triggerStyle as navigationMenuTriggerStyle }
