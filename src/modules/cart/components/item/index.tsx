"use client"

import { updateLineItem } from "@lib/data/cart"

function clx(...args: (string | false | null | undefined | Record<string, boolean>)[]) {
  return args.flatMap((a) => {
    if (!a) return []
    if (typeof a === "string") return [a]
    return Object.entries(a).filter(([, v]) => v).map(([k]) => k)
  }).join(" ")
}
import { HttpTypes } from "@medusajs/types"
import CartItemSelect from "@modules/cart/components/cart-item-select"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Spinner from "@modules/common/icons/spinner"
import Thumbnail from "@modules/products/components/thumbnail"
import { useState } from "react"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  type?: "full" | "preview"
  currencyCode: string
}

const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const changeQuantity = async (quantity: number) => {
    setError(null)
    setUpdating(true)

    await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setUpdating(false)
      })
  }

  // TODO: Update this to grab the actual max inventory
  const maxQtyFromInventory = 10
  const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-y-2"
      style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
      data-testid="product-row"
    >
    <div className="flex items-center gap-x-4">
      {/* Thumbnail */}
      <LocalizedClientLink
        href={`/products/${item.product_handle}`}
        className={clx("flex-shrink-0 rounded-lg overflow-hidden", {
          "w-16 h-16": type === "preview",
          "w-20 h-20 small:w-24 small:h-24": type === "full",
        })}
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <Thumbnail
          thumbnail={item.thumbnail}
          images={item.variant?.product?.images}
          size="square"
        />
      </LocalizedClientLink>

      {/* Title + variant */}
      <div className="flex-1 min-w-0">
        <LocalizedClientLink href={`/products/${item.product_handle}`}>
          <span
            className="block font-semibold text-white truncate text-sm leading-tight"
            data-testid="product-title"
          >
            {item.product_title}
          </span>
        </LocalizedClientLink>
        <LineItemOptions
          variant={item.variant}
          data-testid="product-variant"
        />

        {type === "preview" && (
          <span className="flex gap-x-1 mt-1 text-xs" style={{ color: "#9ca3af" }}>
            <span>{item.quantity}x </span>
            <LineItemUnitPrice
              item={item}
              style="tight"
              currencyCode={currencyCode}
            />
          </span>
        )}
      </div>

      {/* Quantity selector */}
      {type === "full" && (
        <div className="flex items-center gap-x-2 flex-shrink-0">
          <DeleteButton
            id={item.id}
            data-testid="product-delete-button"
            className="text-gray-500 hover:text-red-500 transition-colors duration-150"
          />
          <div className="relative">
            <CartItemSelect
              value={item.quantity}
              onChange={(value) =>
                changeQuantity(parseInt(value.target.value))
              }
              className="w-14 h-10 p-4"
              data-testid="product-select-button"
            >
              {Array.from(
                {
                  length: Math.min(maxQuantity, 10),
                },
                (_, i) => (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                )
              )}
              <option value={1} key={1}>
                1
              </option>
            </CartItemSelect>
          </div>
          {updating && <Spinner />}
        </div>
      )}

      {/* Unit price (full, large screen) */}
      {type === "full" && (
        <div
          className="hidden small:flex items-center justify-end w-20 flex-shrink-0 text-sm"
          style={{ color: "#9ca3af" }}
        >
          <LineItemUnitPrice
            item={item}
            style="tight"
            currencyCode={currencyCode}
          />
        </div>
      )}

      {/* Total price */}
      <div
        className={clx("flex-shrink-0 text-right", {
          "flex flex-col items-end h-full justify-center": type === "preview",
        })}
      >
        <span
          className="font-bold text-sm"
          style={{ color: "#4ade80" }}
        >
          <LineItemPrice
            item={item}
            style="tight"
            currencyCode={currencyCode}
          />
        </span>
      </div>

    </div>
      {error && (
        <ErrorMessage error={error} data-testid="product-error-message" />
      )}
    </div>
  )
}

export default Item
