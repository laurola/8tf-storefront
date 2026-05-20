import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className="relative flex flex-col rounded-xl overflow-hidden border transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: "#1a1a1a",
          borderColor: "#2a2a2a",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(74, 222, 128, 0.4)"
          ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(74, 222, 128, 0.1), 0 4px 16px rgba(0,0,0,0.4)"
          ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a"
          ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
          ;(e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
        }}
      >
        {/* Arrow indicator on hover */}
        <div
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backgroundColor: "#4ade80", color: "#0a0a0a" }}
        >
          <span className="text-sm font-bold leading-none">→</span>
        </div>

        {/* Image area */}
        <div className="overflow-hidden" style={{ backgroundColor: "#111111" }}>
          <div className="group-hover:[&_img]:scale-105 transition-transform duration-300 ease-in-out">
            <Thumbnail
              thumbnail={product.thumbnail}
              images={product.images}
              size="square"
              isFeatured={isFeatured}
            />
          </div>
        </div>

        {/* Info area */}
        <div className="flex items-start justify-between gap-x-2 px-3 py-3">
          <p
            className="font-medium text-sm leading-snug truncate"
            style={{ color: "#ffffff" }}
            data-testid="product-title"
          >
            {product.title}
          </p>
          <div className="flex items-center shrink-0">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
