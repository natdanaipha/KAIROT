"use client"

import { Shield, Wrench, CreditCard, Headphones } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Shield,
      title: t("services.warranty.title"),
      description: t("services.warranty.desc"),
    },
    {
      icon: Wrench,
      title: t("services.service.title"),
      description: t("services.service.desc"),
    },
    {
      icon: CreditCard,
      title: t("services.financing.title"),
      description: t("services.financing.desc"),
    },
    {
      icon: Headphones,
      title: t("services.support.title"),
      description: t("services.support.desc"),
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {t("services.subtitle")}
          </p>
          <h2 className="text-3xl lg:text-5xl font-light text-foreground tracking-tight text-balance max-w-2xl mx-auto">
            {t("services.title")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mx-auto lg:mx-0 mb-5">
                <service.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
