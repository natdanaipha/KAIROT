"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    vehicles: [
      { label: t("footer.vehicles.new"), href: "#" },
      { label: t("footer.vehicles.preowned"), href: "#" },
      { label: t("footer.vehicles.electric"), href: "#" },
      { label: t("footer.vehicles.sports"), href: "#" },
    ],
    services: [
      { label: t("footer.services.center"), href: "#" },
      { label: t("footer.services.financing"), href: "#" },
      { label: t("footer.services.insurance"), href: "#" },
      { label: t("footer.services.tradein"), href: "#" },
    ],
    company: [
      { label: t("footer.company.about"), href: "#about" },
      { label: t("footer.company.contact"), href: "#contact" },
      { label: t("footer.company.careers"), href: "#" },
      { label: t("footer.company.news"), href: "#" },
    ],
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="text-lg font-medium tracking-tight mb-4 block">
                KAIROTDD
              </Link>
              <p className="text-background/60 text-sm leading-relaxed max-w-xs">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Links - Vehicles */}
            <div>
              <h4 className="text-sm font-medium mb-4">{t("footer.vehicles")}</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.vehicles.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links - Services */}
            <div>
              <h4 className="text-sm font-medium mb-4">{t("footer.services")}</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links - Company */}
            <div>
              <h4 className="text-sm font-medium mb-4">{t("footer.company")}</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>2024 KAIROTDD. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
