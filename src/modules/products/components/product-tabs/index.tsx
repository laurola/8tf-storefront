"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import { HttpTypes } from "@medusajs/types"
import { useState } from "react"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<"description" | "details" | "shipping">("description")

  const tabs = [
    { id: "description" as const, label: "Beschreibung" },
    { id: "details" as const, label: "Details" },
    { id: "shipping" as const, label: "Versand" },
  ]

  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
    >
      {/* Tab bar */}
      <div
        className="flex"
        style={{ borderBottom: "1px solid #e5e7eb" }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 relative"
              style={{
                color: isActive ? "#16a34a" : "#6b7280",
                backgroundColor: "transparent",
                borderBottom: isActive ? "2px solid #16a34a" : "2px solid transparent",
              }}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab content */}
      <div className="p-6">
        {activeTab === "description" && (
          <div style={{ color: "#374151" }}>
            {product.description ? (
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            ) : (
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Keine Beschreibung verfügbar.
              </p>
            )}
          </div>
        )}

        {activeTab === "details" && (
          <div className="text-sm" style={{ color: "#374151" }}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <span className="font-semibold block mb-1" style={{ color: "#111827" }}>
                  Material
                </span>
                <p style={{ color: "#6b7280" }}>
                  {product.material ? product.material : "-"}
                </p>
              </div>
              <div>
                <span className="font-semibold block mb-1" style={{ color: "#111827" }}>
                  Gewicht
                </span>
                <p style={{ color: "#6b7280" }}>
                  {product.weight ? `${product.weight} g` : "-"}
                </p>
              </div>
              <div>
                <span className="font-semibold block mb-1" style={{ color: "#111827" }}>
                  Herkunftsland
                </span>
                <p style={{ color: "#6b7280" }}>
                  {product.origin_country ? product.origin_country : "-"}
                </p>
              </div>
              <div>
                <span className="font-semibold block mb-1" style={{ color: "#111827" }}>
                  Abmessungen
                </span>
                <p style={{ color: "#6b7280" }}>
                  {product.length && product.width && product.height
                    ? `${product.length}L x ${product.width}B x ${product.height}H`
                    : "-"}
                </p>
              </div>
              <div>
                <span className="font-semibold block mb-1" style={{ color: "#111827" }}>
                  Typ
                </span>
                <p style={{ color: "#6b7280" }}>
                  {product.type ? product.type.value : "-"}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="flex flex-col gap-y-6">
            <div className="flex items-start gap-x-3">
              <div style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }}>
                <FastDelivery />
              </div>
              <div>
                <span className="font-semibold text-sm block mb-1" style={{ color: "#111827" }}>
                  Schnelle Lieferung
                </span>
                <p className="text-sm max-w-sm" style={{ color: "#6b7280" }}>
                  Ihr Paket kommt in 3–5 Werktagen an Ihrem Abholort oder
                  bequem nach Hause.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }}>
                <Refresh />
              </div>
              <div>
                <span className="font-semibold text-sm block mb-1" style={{ color: "#111827" }}>
                  Einfacher Umtausch
                </span>
                <p className="text-sm max-w-sm" style={{ color: "#6b7280" }}>
                  Sitzt es nicht perfekt? Kein Problem – wir tauschen Ihr
                  Produkt gegen ein neues um.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <div style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }}>
                <Back />
              </div>
              <div>
                <span className="font-semibold text-sm block mb-1" style={{ color: "#111827" }}>
                  Unkomplizierte Rückgabe
                </span>
                <p className="text-sm max-w-sm" style={{ color: "#6b7280" }}>
                  Einfach zurückschicken und wir erstatten Ihr Geld. Keine
                  Fragen gestellt – wir sorgen für eine problemlose Abwicklung.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductTabs
