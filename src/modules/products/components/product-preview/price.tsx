import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="flex items-center gap-x-2">
      {price.price_type === "sale" && (
        <span
          className="text-xs line-through"
          style={{ color: "#6b7280" }}
          data-testid="original-price"
        >
          {price.original_price}
        </span>
      )}
      {price.price_type === "sale" && (
        <span
          className="text-xs font-semibold px-1.5 py-0.5 rounded"
          style={{ backgroundColor: "#4ade80", color: "#0a0a0a" }}
        >
          SALE
        </span>
      )}
      <span
        className="text-sm font-semibold"
        style={{ color: "#4ade80" }}
        data-testid="price"
      >
        {price.calculated_price}
      </span>
    </div>
  )
}
