"use client"

import CartTotals from "@modules/common/components/cart-totals"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else {
    return "payment"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div
      className="flex flex-col gap-y-5 rounded-2xl p-6"
      style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
    >
      <h2 className="text-2xl font-bold text-white tracking-tight">
        Zusammenfassung
      </h2>

      <DiscountCode cart={cart} />

      <div className="h-px w-full" style={{ backgroundColor: "#2a2a2a" }} />

      <CartTotals totals={cart} />

      <LocalizedClientLink
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
      >
        <button
          className="w-full h-12 rounded-xl font-bold text-base text-black transition-colors duration-200"
          style={{ backgroundColor: "#4ade80" }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#6ee7a0"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#4ade80"
          }}
        >
          Zur Kasse
        </button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
