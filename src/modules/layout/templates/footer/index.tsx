import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer style={{ backgroundColor: "#0a0a0a" }} className="w-full">
      {/* Top divider */}
      <div className="w-full h-px" style={{ backgroundColor: "#1a1a1a" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16 flex flex-col gap-y-12 lg:flex-row lg:justify-between lg:gap-y-0">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-y-4 lg:max-w-xs">
            <LocalizedClientLink
              href="/"
              className="flex items-center gap-1 text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity w-fit"
            >
              <span>8TF</span>
              <span
                style={{
                  display: "inline-block",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  marginBottom: "2px",
                  flexShrink: 0,
                }}
              />
            </LocalizedClientLink>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              Premium Rollstuhl-Sport&shy;zubehör für Athleten, die keine Kompromisse eingehen.
            </p>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10">
            {/* Kategorien */}
            <div className="flex flex-col gap-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#22c55e" }}>
                Kategorien
              </span>
              <ul className="flex flex-col gap-y-3">
                {productCategories && productCategories.length > 0 ? (
                  productCategories.slice(0, 6).map((c) => {
                    if (c.parent_category) return null
                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          href={`/categories/${c.handle}`}
                          className="text-sm transition-colors duration-150"
                          style={{ color: "#9ca3af" }}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })
                ) : (
                  <>
                    <li>
                      <LocalizedClientLink
                        href="/categories/greifreifen"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#9ca3af" }}
                      >
                        Greifreifen
                      </LocalizedClientLink>
                    </li>
                    <li>
                      <LocalizedClientLink
                        href="/categories/bereifung"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#9ca3af" }}
                      >
                        Bereifung
                      </LocalizedClientLink>
                    </li>
                    <li>
                      <LocalizedClientLink
                        href="/categories/laufraeder"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#9ca3af" }}
                      >
                        Laufräder
                      </LocalizedClientLink>
                    </li>
                    <li>
                      <LocalizedClientLink
                        href="/categories/handschuhe"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#9ca3af" }}
                      >
                        Handschuhe
                      </LocalizedClientLink>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Shop */}
            <div className="flex flex-col gap-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#22c55e" }}>
                Shop
              </span>
              <ul className="flex flex-col gap-y-3">
                {collections && collections.length > 0 ? (
                  collections.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        href={`/collections/${c.handle}`}
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#9ca3af" }}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))
                ) : (
                  <>
                    <li>
                      <LocalizedClientLink
                        href="/store"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#9ca3af" }}
                      >
                        Alle Produkte
                      </LocalizedClientLink>
                    </li>
                    <li>
                      <LocalizedClientLink
                        href="/store?sort=newest"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#9ca3af" }}
                      >
                        Neuheiten
                      </LocalizedClientLink>
                    </li>
                    <li>
                      <LocalizedClientLink
                        href="/store?tag=sale"
                        className="text-sm transition-colors duration-150"
                        style={{ color: "#9ca3af" }}
                      >
                        Sale
                      </LocalizedClientLink>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#22c55e" }}>
                Info
              </span>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <LocalizedClientLink
                    href="/about"
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#9ca3af" }}
                  >
                    Über uns
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/shipping"
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#9ca3af" }}
                  >
                    Versand
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="text-sm transition-colors duration-150"
                    style={{ color: "#9ca3af" }}
                  >
                    Kontakt
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full h-px" style={{ backgroundColor: "#1a1a1a" }} />
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-y-3">
          <span className="text-xs" style={{ color: "#4b5563" }}>
            © {new Date().getFullYear()} EightTimesFaster GmbH. Alle Rechte vorbehalten.
          </span>
          <div className="flex items-center gap-x-5">
            <LocalizedClientLink
              href="/privacy"
              className="text-xs transition-colors duration-150"
              style={{ color: "#4b5563" }}
            >
              Datenschutz
            </LocalizedClientLink>
            <span style={{ color: "#1f2937" }}>—</span>
            <LocalizedClientLink
              href="/imprint"
              className="text-xs transition-colors duration-150"
              style={{ color: "#4b5563" }}
            >
              Impressum
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
