import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <div
        className="content-container py-8 lg:py-12"
        data-testid="product-container"
      >
        <div className="flex flex-col lg:flex-row lg:gap-x-12 xl:gap-x-16">
          {/* Left column: Image gallery (60%) */}
          <div className="w-full lg:w-[60%]">
            <ImageGallery images={images} />
          </div>

          {/* Right column: Product info + actions (40%), sticky on desktop */}
          <div className="w-full lg:w-[40%] mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-24 flex flex-col gap-y-6">
              <ProductInfo product={product} />
              <Suspense
                fallback={
                  <ProductActions
                    disabled={true}
                    product={product}
                    region={region}
                  />
                }
              >
                <ProductActionsWrapper id={product.id} region={region} />
              </Suspense>
              <ProductTabs product={product} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate
