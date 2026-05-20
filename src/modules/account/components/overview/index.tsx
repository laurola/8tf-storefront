import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OverviewProps = {
  customer: HttpTypes.StoreCustomer | null
  orders: HttpTypes.StoreOrder[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="hidden small:block">
        {/* Header greeting */}
        <div className="flex justify-between items-center mb-6">
          <span
            className="text-2xl font-bold"
            style={{ color: "#fff" }}
            data-testid="welcome-message"
            data-value={customer?.first_name}
          >
            Hey, <span style={{ color: "#4ade80" }}>{customer?.first_name}</span>
          </span>
          <span className="text-sm" style={{ color: "#666" }}>
            Angemeldet als:{" "}
            <span
              className="font-semibold"
              style={{ color: "#aaa" }}
              data-testid="customer-email"
              data-value={customer?.email}
            >
              {customer?.email}
            </span>
          </span>
        </div>

        {/* Stats cards */}
        <div
          className="border-t pt-8 mb-8"
          style={{ borderColor: "#222" }}
        >
          <div className="flex items-start gap-x-4 mb-8">
            <div
              className="flex flex-col gap-y-3 rounded-xl p-6 flex-1"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#888" }}>
                Profil
              </h3>
              <div className="flex items-end gap-x-2">
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color: "#4ade80" }}
                  data-testid="customer-profile-completion"
                  data-value={getProfileCompletion(customer)}
                >
                  {getProfileCompletion(customer)}%
                </span>
                <span className="text-xs uppercase tracking-wider pb-1" style={{ color: "#555" }}>
                  Vollständig
                </span>
              </div>
            </div>

            <div
              className="flex flex-col gap-y-3 rounded-xl p-6 flex-1"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#888" }}>
                Adressen
              </h3>
              <div className="flex items-end gap-x-2">
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color: "#4ade80" }}
                  data-testid="addresses-count"
                  data-value={customer?.addresses?.length || 0}
                >
                  {customer?.addresses?.length || 0}
                </span>
                <span className="text-xs uppercase tracking-wider pb-1" style={{ color: "#555" }}>
                  Gespeichert
                </span>
              </div>
            </div>
          </div>

          {/* Recent orders */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#888" }}>
              Letzte Bestellungen
            </h3>
            <ul className="flex flex-col gap-y-3" data-testid="orders-wrapper">
              {orders && orders.length > 0 ? (
                orders.slice(0, 5).map((order) => (
                  <li
                    key={order.id}
                    data-testid="order-wrapper"
                    data-value={order.id}
                  >
                    <LocalizedClientLink
                      href={`/account/orders/details/${order.id}`}
                    >
                      <div
                        className="flex justify-between items-center p-4 rounded-xl transition-all group"
                        style={{ backgroundColor: "#1a1a1a" }}
                      >
                        <div className="grid grid-cols-3 text-sm gap-x-4 flex-1">
                          <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#888" }}>
                            Datum
                          </span>
                          <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#888" }}>
                            Bestellnr.
                          </span>
                          <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#888" }}>
                            Betrag
                          </span>
                          <span
                            className="mt-1"
                            style={{ color: "#ccc" }}
                            data-testid="order-created-date"
                          >
                            {new Date(order.created_at).toLocaleDateString("de-DE")}
                          </span>
                          <span
                            className="mt-1"
                            style={{ color: "#ccc" }}
                            data-testid="order-id"
                            data-value={order.display_id}
                          >
                            #{order.display_id}
                          </span>
                          <span
                            className="mt-1 font-semibold"
                            style={{ color: "#4ade80" }}
                            data-testid="order-amount"
                          >
                            {convertToLocale({
                              amount: order.total,
                              currency_code: order.currency_code,
                            })}
                          </span>
                        </div>
                        <button
                          className="flex items-center justify-between ml-4 transition-colors group-hover:opacity-100 opacity-50"
                          style={{ color: "#4ade80" }}
                          data-testid="open-order-button"
                        >
                          <span className="sr-only">
                            Zur Bestellung #{order.display_id}
                          </span>
                          <ChevronDown className="-rotate-90" />
                        </button>
                      </div>
                    </LocalizedClientLink>
                  </li>
                ))
              ) : (
                <span
                  className="text-sm py-6 text-center"
                  style={{ color: "#555" }}
                  data-testid="no-orders-message"
                >
                  Noch keine Bestellungen
                </span>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer: HttpTypes.StoreCustomer | null) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  const billingAddress = customer.addresses?.find(
    (addr) => addr.is_default_billing
  )

  if (billingAddress) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
