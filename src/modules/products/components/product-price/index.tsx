import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return (
      <div
        className="block w-32 h-9 rounded animate-pulse"
        style={{ backgroundColor: "#f3f4f6" }}
      />
    )
  }

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-baseline gap-x-3">
        <span
          className="text-3xl font-bold"
          style={{ color: "#16a34a" }}
          data-testid="product-price"
          data-value={selectedPrice.calculated_price_number}
        >
          {!variant && (
            <span className="text-lg font-normal mr-1" style={{ color: "#9ca3af" }}>
              ab
            </span>
          )}
          {selectedPrice.calculated_price}
        </span>

        {selectedPrice.price_type === "sale" && (
          <span
            className="text-lg line-through"
            style={{ color: "#9ca3af" }}
            data-testid="original-product-price"
            data-value={selectedPrice.original_price_number}
          >
            {selectedPrice.original_price}
          </span>
        )}
      </div>

      {selectedPrice.price_type === "sale" && (
        <span
          className="text-sm font-semibold"
          style={{ color: "#16a34a" }}
        >
          -{selectedPrice.percentage_diff}% Rabatt
        </span>
      )}
    </div>
  )
}
