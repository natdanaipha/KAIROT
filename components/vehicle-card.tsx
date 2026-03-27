"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface VehicleCardProps {
  name: string
  brand: string
  year: number
  price: string
  image: string
  mileage: string
  fuelType: string
  isNew?: boolean
}

export function VehicleCard({
  name,
  brand,
  year,
  price,
  image,
  mileage,
  fuelType,
  isNew = false,
}: VehicleCardProps) {
  const { t } = useLanguage()

  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted mb-4">
        <Image
          src={image}
          alt={`${brand} ${name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 text-xs tracking-wide uppercase bg-background text-foreground rounded-full">
            {t("vehicles.new")}
          </span>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="h-4 w-4 text-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{brand}</p>
          <h3 className="text-lg font-medium text-foreground">
            {name}
          </h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
            <span>{year}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>{mileage}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>{fuelType}</span>
          </div>
        </div>
        <p className="text-lg font-medium text-foreground whitespace-nowrap">{price}</p>
      </div>
    </div>
  )
}
