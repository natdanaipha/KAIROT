"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: "#vehicles", label: t("nav.vehicles") },
    { href: "#services", label: t("nav.services") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="text-lg lg:text-xl font-medium tracking-tight text-foreground">
            KAIROTDD
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center border border-foreground/10 rounded-full p-0.5">
              <button
                onClick={() => setLanguage("th")}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-full transition-colors",
                  language === "th" 
                    ? "bg-foreground text-background" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                TH
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-full transition-colors",
                  language === "en" 
                    ? "bg-foreground text-background" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>
            <Button className="h-10 px-6 text-sm rounded-full bg-foreground text-background hover:bg-foreground/90">
              {t("nav.book")}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-11 w-11">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-background border-none p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full px-6">
                {/* Mobile Header */}
                <div className="flex items-center h-16 border-b border-foreground/10">
                  <Link href="/" className="text-lg font-medium tracking-tight" onClick={() => setIsOpen(false)}>
                    KAIROTDD
                  </Link>
                </div>
                
                {/* Mobile Nav Links */}
                <nav className="flex flex-col pt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="py-3 text-lg font-light text-foreground hover:text-muted-foreground transition-colors border-b border-foreground/5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Bottom Section */}
                <div className="mt-auto pb-8 flex flex-col gap-4">
                  {/* Language Switcher Mobile */}
                  <div className="flex items-center justify-center border border-foreground/10 rounded-full p-0.5">
                    <button
                      onClick={() => setLanguage("th")}
                      className={cn(
                        "flex-1 px-4 py-2 text-sm rounded-full transition-colors",
                        language === "th" 
                          ? "bg-foreground text-background" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      TH
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={cn(
                        "flex-1 px-4 py-2 text-sm rounded-full transition-colors",
                        language === "en" 
                          ? "bg-foreground text-background" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      EN
                    </button>
                  </div>
                  <Button 
                    className="w-full h-12 text-sm rounded-full bg-foreground text-background hover:bg-foreground/90"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("nav.book")}
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
