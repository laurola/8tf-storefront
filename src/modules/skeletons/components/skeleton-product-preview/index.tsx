const SkeletonProductPreview = () => {
  return (
    <div
      className="animate-pulse rounded-xl overflow-hidden border"
      style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
    >
      <div className="aspect-square w-full" style={{ backgroundColor: "#e5e7eb" }} />
      <div className="flex justify-between items-center px-3 py-3 gap-2">
        <div className="h-4 rounded w-2/5" style={{ backgroundColor: "#e5e7eb" }} />
        <div className="h-4 rounded w-1/5" style={{ backgroundColor: "#e5e7eb" }} />
      </div>
    </div>
  )
}

export default SkeletonProductPreview
