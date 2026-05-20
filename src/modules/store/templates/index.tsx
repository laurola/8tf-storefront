import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#0a0a0a" }}
      data-testid="category-container"
    >
      <div className="content-container py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#ffffff" }}
            data-testid="store-page-title"
          >
            Shop
          </h1>
          <p className="mt-1 text-sm" style={{ color: "#6b7280" }}>
            All products
          </p>
        </div>

        {/* Toolbar row: sort on the left */}
        <div
          className="flex items-center gap-4 mb-8 p-4 rounded-xl border"
          style={{ backgroundColor: "#1a1a1a", borderColor: "#2a2a2a" }}
        >
          <RefinementList sortBy={sort} />
        </div>

        {/* Product grid */}
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
