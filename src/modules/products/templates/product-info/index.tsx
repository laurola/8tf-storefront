import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4">
        {product.collection && (
          <div>
            <LocalizedClientLink
              href={`/collections/${product.collection.handle}`}
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(22, 163, 74, 0.1)",
                color: "#16a34a",
                border: "1px solid rgba(22, 163, 74, 0.3)",
              }}
            >
              {product.collection.title}
            </LocalizedClientLink>
          </div>
        )}

        {product.categories && product.categories.length > 0 && !product.collection && (
          <div>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(22, 163, 74, 0.1)",
                color: "#16a34a",
                border: "1px solid rgba(22, 163, 74, 0.3)",
              }}
            >
              {product.categories[0].name}
            </span>
          </div>
        )}

        <h2
          className="text-3xl font-bold leading-tight"
          style={{ color: "#111827" }}
          data-testid="product-title"
        >
          {product.title}
        </h2>

        {product.description && (
          <p
            className="text-base leading-relaxed whitespace-pre-line"
            style={{ color: "#6b7280" }}
            data-testid="product-description"
          >
            {product.description}
          </p>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
