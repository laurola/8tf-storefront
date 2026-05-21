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
        className="relative flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:border-green-600 hover:shadow-md hover:-translate-y-0.5"
      >
        {/* Arrow indicator on hover */}
        <div
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
        >
          <span className="text-sm font-bold leading-none">→</span>
        </div>

        {/* Image area */}
        <div className="overflow-hidden" style={{ backgroundColor: "#f3f4f6" }}>
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
            style={{ color: "#111827" }}
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
