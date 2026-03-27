"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Luxury car in showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-1 flex flex-col justify-center pt-20 pb-16">
        <div className="max-w-3xl">
          {/* <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
            {t("hero.subtitle")}
          </p> */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-foreground leading-[1.1] tracking-tight text-balance mb-8">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>
          <p className="text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
            {t("hero.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="h-12 sm:h-14 px-8 text-sm rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              {t("hero.cta1")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 sm:h-14 px-8 text-sm rounded-full border-foreground/20 bg-transparent hover:bg-foreground/5 text-foreground"
            >
              {t("hero.cta2")}
            </Button>
          </div>
        </div>
      </div>

      {/* Stats - Bottom */}
      <div className="relative z-10 border-t border-foreground/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 py-8 lg:py-12">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">500+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat1")}</p>
            </div>
            <div className="text-center border-x border-foreground/10">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">15</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat2")}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground">98%</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
