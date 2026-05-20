import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import StatsBar from "@modules/home/components/stats-bar"
import CategoriesSection from "@modules/home/components/categories-section"
import FeaturesSection from "@modules/home/components/features-section"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "8TF Shop — Rollstuhlsport Zubehör",
  description:
    "Maßgeschneiderte Lösungen für Sport & Alltag. Premium Rollstuhlsport-Zubehör.",
}

const dummyProducts = [
  {
    id: "1",
    name: '8TF Greifreifen Aluminium 24"',
    price: "€89,00",
  },
  {
    id: "2",
    name: "Schwalbe Marathon Plus",
    price: "€34,90",
  },
  {
    id: "3",
    name: "Spinergy SLX Laufrad",
    price: "€429,00",
  },
  {
    id: "4",
    name: "Showa 305 Handschuh",
    price: "€12,90",
  },
]

function FeaturedProductsDummy() {
  return (
    <section className="w-full bg-zinc-950 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Produkte
          </h2>
          <p className="text-zinc-400 mt-2 text-sm">
            Unsere meistverkauften Artikel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-green-500/40 transition-all duration-300"
            >
              {/* Product image placeholder */}
              <div className="w-full aspect-square bg-zinc-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-zinc-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>

              {/* Product info */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white leading-snug group-hover:text-green-300 transition-colors duration-200">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-400">
                    {product.price}
                  </span>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-green-500 border border-zinc-700 hover:border-green-500 text-white text-sm font-medium rounded-lg transition-all duration-200"
                >
                  In den Warenkorb
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  // Attempt to load live data — fall back gracefully if backend is unavailable
  let region = null
  let collections: { id: string; handle: string | null; title: string }[] = []

  try {
    region = await getRegion(countryCode)
  } catch {
    // Backend unavailable — continue with dummy data
  }

  try {
    const result = await listCollections({
      fields: "id, handle, title",
    })
    collections = result.collections ?? []
  } catch {
    // Backend unavailable — continue with dummy data
  }

  return (
    <>
      <Hero />
      <StatsBar />
      <CategoriesSection />
      <FeaturedProductsDummy />
      <FeaturesSection />
    </>
  )
}
