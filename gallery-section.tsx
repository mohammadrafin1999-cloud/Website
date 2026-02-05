"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    id: 1,
    title: "Security Operations Center",
    caption: "Monitoring systems for potential threats",
    placeholder: "bg-gradient-to-br from-primary/20 to-accent/20",
  },
  {
    id: 2,
    title: "Penetration Testing Lab",
    caption: "Hands-on security testing environment",
    placeholder: "bg-gradient-to-br from-accent/20 to-neon-purple/20",
  },
  {
    id: 3,
    title: "Conference Presentation",
    caption: "Speaking at cybersecurity conferences",
    placeholder: "bg-gradient-to-br from-neon-purple/20 to-primary/20",
  },
  {
    id: 4,
    title: "CTF Competition",
    caption: "Participating in Capture The Flag events",
    placeholder: "bg-gradient-to-br from-primary/20 to-neon-purple/20",
  },
  {
    id: 5,
    title: "Team Training Session",
    caption: "Conducting security awareness workshops",
    placeholder: "bg-gradient-to-br from-accent/20 to-primary/20",
  },
  {
    id: 6,
    title: "Security Research",
    caption: "Analyzing vulnerabilities and threats",
    placeholder: "bg-gradient-to-br from-neon-purple/20 to-accent/20",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-mono mb-4">
            {"<Gallery />"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Photo <span className="text-accent text-glow-blue">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Capturing moments from conferences, workshops, and cybersecurity events.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className={`relative aspect-video rounded-lg overflow-hidden group cursor-pointer ${image.placeholder}`}
              onClick={() => setSelectedImage(index)}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl opacity-30 font-mono text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h4 className="text-foreground font-semibold text-center mb-1">
                  {image.title}
                </h4>
                <p className="text-muted-foreground text-sm text-center">
                  {image.caption}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border border-border group-hover:border-primary/50 rounded-lg transition-colors" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-foreground hover:text-primary"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-foreground hover:text-primary"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="max-w-4xl w-full mx-auto px-4">
              <div
                className={`aspect-video rounded-lg ${galleryImages[selectedImage].placeholder} flex items-center justify-center`}
              >
                <div className="text-6xl opacity-30 font-mono text-foreground">
                  {String(selectedImage + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-muted-foreground">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-foreground hover:text-primary"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
