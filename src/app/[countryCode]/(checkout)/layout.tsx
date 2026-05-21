import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full relative small:min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <div className="h-16 border-b" style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}>
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="flex items-center gap-x-2 uppercase flex-1 basis-0 text-sm font-medium transition-colors"
            style={{ color: "#6b7280" }}
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="mt-px hidden small:block hover:text-gray-900 transition-colors">
              Zurück zum Warenkorb
            </span>
            <span className="mt-px block small:hidden hover:text-gray-900 transition-colors">
              Zurück
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="text-2xl font-black tracking-widest uppercase transition-colors"
            style={{ color: "#16a34a" }}
            data-testid="store-link"
          >
            8TF
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
    </div>
  )
}
