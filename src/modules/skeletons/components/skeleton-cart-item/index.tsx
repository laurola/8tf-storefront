const SkeletonCartItem = () => {
  return (
    <div className="flex gap-4 p-4 w-full">
      <div className="w-24 h-24 bg-gray-800 rounded animate-pulse flex-shrink-0" />
      <div className="flex-1 flex flex-col gap-y-2 justify-center">
        <div className="w-32 h-4 bg-gray-800 animate-pulse" />
        <div className="w-24 h-4 bg-gray-800 animate-pulse" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-14 h-10 bg-gray-800 animate-pulse" />
      </div>
      <div className="w-12 h-6 bg-gray-800 animate-pulse self-center" />
    </div>
  )
}

export default SkeletonCartItem
