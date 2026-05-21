import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"

const CheckoutSummary = ({ cart }: { cart: any }) => {
  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-4 py-8 small:py-0">
      <div
        className="w-full flex flex-col rounded-xl p-6"
        style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}
      >
        <h2
          className="text-xl font-bold uppercase tracking-widest mb-1"
          style={{ color: "#16a34a" }}
        >
          Bestellübersicht
        </h2>

        <div className="my-4" style={{ borderColor: "#e5e7eb", borderTopWidth: 1 }} />

        <ItemsPreviewTemplate cart={cart} />

        <div className="my-4" style={{ borderColor: "#e5e7eb", borderTopWidth: 1 }} />

        <CartTotals totals={cart} />

        <div className="mt-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
