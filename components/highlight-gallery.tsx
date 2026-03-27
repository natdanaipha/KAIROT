"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface HighlightItem {
  image: string
  title: string
  description: string
}

interface HighlightGalleryProps {
  highlights: HighlightItem[]
}

export function HighlightGallery({ highlights }: HighlightGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<HighlightItem | null>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-2xl bg-[#fafafa] overflow-hidden">
            <button
              type="button"
              onClick={() => setSelectedImage(item)}
              className="relative aspect-[16/9] w-full block cursor-zoom-in"
              aria-label={`Open ${item.title} image fullscreen`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </button>
            <div className="p-5">
              <h3 className="text-base font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 p-4 md:p-8 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-sm px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
          <div className="relative w-full max-w-6xl aspect-[16/9]">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
