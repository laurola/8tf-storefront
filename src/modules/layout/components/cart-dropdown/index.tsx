"use client"

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: HttpTypes.StoreCart | null
}) => {
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const subtotal = cartState?.subtotal ?? 0
  const itemRef = useRef<number>(totalItems || 0)

  const timedOpen = () => {
    open()

    const timer = setTimeout(close, 5000)

    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }

    open()
  }

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()

  // open cart dropdown when modifying the cart items, but only if we're not on the cart page
  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current])

  return (
    <div
      className="h-full z-50"
      onMouseEnter={openAndCancel}
      onMouseLeave={close}
    >
      <Popover className="relative h-full">
        <PopoverButton className="h-full">
          <LocalizedClientLink
            className="hover:text-white text-gray-300 transition-colors duration-150"
            href="/cart"
            data-testid="nav-cart-link"
          >
            {`Warenkorb (${totalItems})`}
          </LocalizedClientLink>
        </PopoverButton>
        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            static
            className="hidden small:block absolute top-[calc(100%+1px)] right-0 w-[420px] rounded-b-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundColor: "#111111",
              border: "1px solid #2a2a2a",
              borderTop: "none",
            }}
            data-testid="nav-cart-dropdown"
          >
            {/* Header */}
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ borderBottom: "1px solid #2a2a2a" }}
            >
              <h3 className="text-base font-bold text-white">Warenkorb</h3>
              {totalItems > 0 && (
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#4ade80", color: "#000" }}
                >
                  {totalItems}
                </span>
              )}
            </div>

            {cartState && cartState.items?.length ? (
              <>
                {/* Items list */}
                <div className="overflow-y-scroll max-h-[360px] px-4 py-3 flex flex-col gap-y-3 no-scrollbar">
                  {cartState.items
                    .sort((a, b) => {
                      return (a.created_at ?? "") > (b.created_at ?? "")
                        ? -1
                        : 1
                    })
                    .map((item) => (
                      <div
                        className="flex items-center gap-x-3 rounded-xl p-3"
                        style={{
                          backgroundColor: "#1a1a1a",
                          border: "1px solid #2a2a2a",
                        }}
                        key={item.id}
                        data-testid="cart-item"
                      >
                        <LocalizedClientLink
                          href={`/products/${item.product_handle}`}
                          className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden"
                          style={{ backgroundColor: "#0a0a0a" }}
                        >
                          <Thumbnail
                            thumbnail={item.thumbnail}
                            images={item.variant?.product?.images}
                            size="square"
                          />
                        </LocalizedClientLink>
                        <div className="flex flex-col flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-x-2">
                            <div className="flex flex-col min-w-0">
                              <LocalizedClientLink
                                href={`/products/${item.product_handle}`}
                                data-testid="product-link"
                              >
                                <span className="text-sm font-semibold text-white truncate block">
                                  {item.title}
                                </span>
                              </LocalizedClientLink>
                              <LineItemOptions
                                variant={item.variant}
                                data-testid="cart-item-variant"
                                data-value={item.variant}
                              />
                              <span
                                className="text-xs mt-0.5"
                                style={{ color: "#6b7280" }}
                                data-testid="cart-item-quantity"
                                data-value={item.quantity}
                              >
                                Menge: {item.quantity}
                              </span>
                            </div>
                            <div
                              className="text-sm font-bold flex-shrink-0"
                              style={{ color: "#4ade80" }}
                            >
                              <LineItemPrice
                                item={item}
                                style="tight"
                                currencyCode={cartState.currency_code}
                              />
                            </div>
                          </div>
                          <DeleteButton
                            id={item.id}
                            className="mt-2 text-xs self-start text-gray-500 hover:text-red-400 transition-colors duration-150"
                            data-testid="cart-item-remove-button"
                          >
                            Entfernen
                          </DeleteButton>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Footer */}
                <div
                  className="px-5 py-4 flex flex-col gap-y-3"
                  style={{ borderTop: "1px solid #2a2a2a" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: "#9ca3af" }}>
                      Zwischensumme{" "}
                      <span className="text-xs">(ohne Steuern)</span>
                    </span>
                    <span
                      className="text-base font-bold text-white"
                      data-testid="cart-subtotal"
                      data-value={subtotal}
                    >
                      {convertToLocale({
                        amount: subtotal,
                        currency_code: cartState.currency_code,
                      })}
                    </span>
                  </div>
                  <LocalizedClientLink href="/cart" passHref>
                    <button
                      className="w-full h-11 rounded-xl font-bold text-sm text-black transition-colors duration-200"
                      style={{ backgroundColor: "#4ade80" }}
                      onMouseEnter={(e) => {
                        ;(
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "#6ee7a0"
                      }}
                      onMouseLeave={(e) => {
                        ;(
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "#4ade80"
                      }}
                      data-testid="go-to-cart-button"
                    >
                      Zur Kasse
                    </button>
                  </LocalizedClientLink>
                </div>
              </>
            ) : (
              <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                  style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: "#6b7280" }}>
                  Dein Warenkorb ist leer.
                </span>
                <LocalizedClientLink href="/store">
                  <button
                    className="px-5 py-2 rounded-lg text-sm font-bold text-black transition-colors duration-200"
                    style={{ backgroundColor: "#4ade80" }}
                    onMouseEnter={(e) => {
                      ;(
                        e.currentTarget as HTMLButtonElement
                      ).style.backgroundColor = "#6ee7a0"
                    }}
                    onMouseLeave={(e) => {
                      ;(
                        e.currentTarget as HTMLButtonElement
                      ).style.backgroundColor = "#4ade80"
                    }}
                    onClick={close}
                  >
                    Jetzt shoppen
                  </button>
                </LocalizedClientLink>
              </div>
            )}
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
