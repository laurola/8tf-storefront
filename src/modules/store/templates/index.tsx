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
      style={{ backgroundColor: "#f9fafb" }}
      data-testid="category-container"
    >
      <div className="content-container py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#111827" }}
            data-testid="store-page-title"
          >
            Shop
          </h1>
          <p className="mt-1 text-sm" style={{ color: "#9ca3af" }}>
            All products
          </p>
        </div>

        {/* Toolbar row: sort on the left */}
        <div
          className="flex items-center gap-4 mb-8 p-4 rounded-xl border"
          style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
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
