"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/car-bmw.jpg"
                alt="Showroom interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              {t("about.subtitle")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-light text-foreground tracking-tight text-balance mb-8">
              {t("about.title1")}
              <br />
              {t("about.title2")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {t("about.p2")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <p className="text-3xl lg:text-4xl font-light text-foreground">20+</p>
                <p className="text-sm text-muted-foreground mt-1">{t("about.stat1")}</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-light text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground mt-1">{t("about.stat2")}</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-light text-foreground">150</p>
                <p className="text-sm text-muted-foreground mt-1">{t("about.stat3")}</p>
              </div>
            </div>

            <Button 
              variant="outline"
              size="lg"
              className="h-12 px-8 text-sm rounded-full border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
            >
              {t("about.cta")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
