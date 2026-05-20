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
        style={{ backgroundColor: "#1a1a1a" }}
      />
    )
  }

  return (
    <div className="flex flex-col gap-y-1">
      <div className="flex items-baseline gap-x-3">
        <span
          className="text-3xl font-bold"
          style={{ color: "#4ade80" }}
          data-testid="product-price"
          data-value={selectedPrice.calculated_price_number}
        >
          {!variant && (
            <span className="text-lg font-normal mr-1" style={{ color: "#6b7280" }}>
              ab
            </span>
          )}
          {selectedPrice.calculated_price}
        </span>

        {selectedPrice.price_type === "sale" && (
          <span
            className="text-lg line-through"
            style={{ color: "#6b7280" }}
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
          style={{ color: "#4ade80" }}
        >
          -{selectedPrice.percentage_diff}% Rabatt
        </span>
      )}
    </div>
  )
}
