"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()
  const aboutImages = [
    "/images/hero-car.jpg",
    "/images/car-bmw.jpg",
    "/images/car-porsche.jpg",
    "/images/car-audi.jpg",
    "/images/car-tesla.jpg",
  ]
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % aboutImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [aboutImages.length])

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1" id="about-images">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              {aboutImages.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt="Showroom interior"
                  fill
                  className={`object-cover transition-opacity duration-1000 ${activeImage === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {aboutImages.map((_, index) => (
                  <button
                    key={`about-dot-${index}`}
                    type="button"
                    aria-label={`Go to about image ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className={`h-2 rounded-full transition-all ${activeImage === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
                  />
                ))}
              </div>
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
