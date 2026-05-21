import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header
        className="w-full h-16"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full h-full">
          {/* Left: mobile menu */}
          <div className="flex items-center h-full lg:hidden">
            <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
          </div>

          {/* Center/Left: Logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex items-center gap-1 text-xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity"
              data-testid="nav-store-link"
            >
              <span>8TF</span>
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#16a34a",
                  marginBottom: "2px",
                  flexShrink: 0,
                }}
              />
            </LocalizedClientLink>
          </div>

          {/* Center: Nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-x-8 h-full">
            <LocalizedClientLink
              href="/store"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
            >
              Shop
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/categories"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
            >
              Kategorien
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
            >
              Über uns
            </LocalizedClientLink>
          </div>

          {/* Right: Account + Cart */}
          <div className="flex items-center gap-x-5 h-full">
            <div className="hidden lg:flex items-center">
              <LocalizedClientLink
                href="/account"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
                data-testid="nav-account-link"
                aria-label="Account"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </LocalizedClientLink>
            </div>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-150 flex items-center gap-1.5"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  <span className="text-sm font-medium">0</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
