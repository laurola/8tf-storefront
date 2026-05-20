import repeat from "@lib/util/repeat"
import SkeletonCartItem from "@modules/skeletons/components/skeleton-cart-item"
import SkeletonCodeForm from "@modules/skeletons/components/skeleton-code-form"
import SkeletonOrderSummary from "@modules/skeletons/components/skeleton-order-summary"

const SkeletonCartPage = () => {
  return (
    <div className="py-12" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-8">
          <div
            className="flex flex-col p-6 gap-y-4 rounded-xl"
            style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-y-2">
                <div className="w-60 h-8 bg-gray-800 animate-pulse rounded" />
                <div className="w-48 h-6 bg-gray-800 animate-pulse rounded" />
              </div>
              <div className="w-14 h-8 bg-gray-800 animate-pulse rounded" />
            </div>
            <div className="divide-y divide-gray-800">
              {repeat(4).map((index) => (
                <SkeletonCartItem key={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <SkeletonOrderSummary />
            <SkeletonCodeForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartPage
