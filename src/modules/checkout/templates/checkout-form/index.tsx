import { listCartShippingMethods } from "@lib/data/fulfillment"
import { listCartPaymentMethods } from "@lib/data/payment"
import { HttpTypes } from "@medusajs/types"
import Addresses from "@modules/checkout/components/addresses"
import Payment from "@modules/checkout/components/payment"
import Review from "@modules/checkout/components/review"
import Shipping from "@modules/checkout/components/shipping"

export default async function CheckoutForm({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) {
  if (!cart) {
    return null
  }

  const shippingMethods = await listCartShippingMethods(cart.id)
  const paymentMethods = await listCartPaymentMethods(cart.region?.id ?? "")

  if (!shippingMethods || !paymentMethods) {
    return null
  }

  return (
    <div className="w-full grid grid-cols-1 gap-y-3">
      <div
        className="rounded-xl p-6"
        style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}
      >
        <div className="flex items-center gap-x-3 mb-6">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
          >
            1
          </div>
          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#111827" }}>
            Lieferadresse
          </h2>
        </div>
        <Addresses cart={cart} customer={customer} />
      </div>

      <div
        className="rounded-xl p-6"
        style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}
      >
        <div className="flex items-center gap-x-3 mb-6">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
          >
            2
          </div>
          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#111827" }}>
            Versandmethode
          </h2>
        </div>
        <Shipping cart={cart} availableShippingMethods={shippingMethods} />
      </div>

      <div
        className="rounded-xl p-6"
        style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}
      >
        <div className="flex items-center gap-x-3 mb-6">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
          >
            3
          </div>
          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#111827" }}>
            Zahlung
          </h2>
        </div>
        <Payment cart={cart} availablePaymentMethods={paymentMethods} />
      </div>

      <div
        className="rounded-xl p-6"
        style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}
      >
        <div className="flex items-center gap-x-3 mb-6">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ backgroundColor: "#16a34a", color: "#ffffff" }}
          >
            4
          </div>
          <h2 className="text-lg font-semibold uppercase tracking-wide" style={{ color: "#111827" }}>
            Überprüfung
          </h2>
        </div>
        <Review cart={cart} />
      </div>
    </div>
  )
}
