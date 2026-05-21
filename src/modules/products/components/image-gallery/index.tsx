"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div
        className="w-full aspect-square rounded-xl"
        style={{ backgroundColor: "#f3f4f6" }}
      />
    )
  }

  const selectedImage = images[selectedIndex]

  return (
    <div className="flex flex-col gap-y-4">
      {/* Main image */}
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{
          backgroundColor: "#f3f4f6",
          aspectRatio: "4/5",
        }}
      >
        {selectedImage?.url && (
          <Image
            src={selectedImage.url}
            alt={`Product image ${selectedIndex + 1}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
            style={{ objectFit: "cover" }}
            className="rounded-xl"
          />
        )}
      </div>

      {/* Thumbnail strip — only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-x-3 overflow-x-auto pb-1">
          {images.map((image, index) => {
            const isSelected = index === selectedIndex
            return (
              <button
                key={image.id ?? index}
                onClick={() => setSelectedIndex(index)}
                className="relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-150"
                style={{
                  width: "72px",
                  height: "72px",
                  backgroundColor: "#f3f4f6",
                  border: isSelected
                    ? "2px solid #16a34a"
                    : "2px solid #e5e7eb",
                  padding: 0,
                  cursor: "pointer",
                }}
                aria-label={`View image ${index + 1}`}
              >
                {image.url && (
                  <Image
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="72px"
                    style={{ objectFit: "cover" }}
                    className="rounded-md"
                  />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
