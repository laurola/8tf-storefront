const SkeletonProductPreview = () => {
  return (
    <div
      className="animate-pulse rounded-xl overflow-hidden border"
      style={{ backgroundColor: "#1a1a1a", borderColor: "#2a2a2a" }}
    >
      <div className="aspect-square w-full" style={{ backgroundColor: "#111111" }} />
      <div className="flex justify-between items-center px-3 py-3 gap-2">
        <div className="h-4 rounded w-2/5" style={{ backgroundColor: "#2a2a2a" }} />
        <div className="h-4 rounded w-1/5" style={{ backgroundColor: "#2a2a2a" }} />
      </div>
    </div>
  )
}

export default SkeletonProductPreview
