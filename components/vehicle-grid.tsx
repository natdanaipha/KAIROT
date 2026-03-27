"use client"

import { useState } from "react"
import { VehicleCard } from "./vehicle-card"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { vehicles } from "@/lib/vehicles"

export function VehicleGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { t, language } = useLanguage()

  const categories = [
    { id: "all", label: t("vehicles.all") },
    { id: "ford", label: t("vehicles.ford") },
    { id: "mg", label: t("vehicles.mg") },
    { id: "toyota", label: t("vehicles.toyota") },
    { id: "honda", label: t("vehicles.honda") },
    { id: "nissan", label: t("vehicles.nissan") },
  ]

  const filteredVehicles = activeCategory === "all" 
    ? vehicles 
    : vehicles.filter(v => v.category === activeCategory)

  const formatPrice = (price: string) => {
    return language === "th" ? `฿${price}` : `$${price}`
  }

  return (
    <section id="vehicles" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              {t("vehicles.subtitle")}
            </p>
            <h2 className="text-3xl lg:text-5xl font-light text-foreground tracking-tight text-balance">
              {t("vehicles.title")}
            </h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "h-10 px-5 text-sm rounded-full transition-all cursor-pointer",
                  activeCategory === category.id
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              brand={vehicle.brand}
              year={vehicle.year}
              price={formatPrice(vehicle.price)}
              image={vehicle.image}
              mileage={vehicle.mileage}
              fuelType={vehicle.fuelType}
              isNew={vehicle.isNew}
              href={`/vehicles/${vehicle.id}`}
            />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
            {t("vehicles.viewAll")}
          </button>
        </div>
      </div>
    </section>
  )
}
